import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { isAllowedLeadOrigin, MAX_LEAD_JSON_BYTES, validateLeadPayload } from './api/leadValidation.js';
import { GONE_PUBLIC_PATHS } from './src/data/urlPolicy';

const AIRTABLE_API_BASE = 'https://api.airtable.com/v0';

async function notifyLeadWebhook(webhookUrl: string | undefined, lead: Record<string, unknown>) {
  if (!webhookUrl) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3500);

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(lead),
      signal: controller.signal,
    });
    const responseText = await webhookResponse.text();

    if (!webhookResponse.ok) {
      console.error('[airtable:dev:webhook] Lead webhook failed', {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        body: responseText,
      });
      return;
    }

    console.info('[airtable:dev:webhook] Lead webhook notified');
  } catch (error) {
    console.error('[airtable:dev:webhook] Lead webhook request failed', error);
  } finally {
    clearTimeout(timeout);
  }
}

const GONE_PATH_SET = new Set<string>(GONE_PUBLIC_PATHS);

function goneStatusMiddleware(request, response, next) {
  const path = (request.url || '').split('?')[0];
  if (!GONE_PATH_SET.has(path)) {
    next();
    return;
  }
  response.statusCode = 410;
  response.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.end(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Gone</title></head><body><h1>Gone</h1><p>This page has been permanently removed from this website.</p></body></html>',
  );
}

function goneDevApi() {
  return {
    name: 'gone-dev-api',
    configureServer(server) {
      server.middlewares.use(goneStatusMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(goneStatusMiddleware);
    },
  };
}

function airtableDevApi(env: Record<string, string>) {
  return {
    name: 'airtable-dev-api',
    configureServer(server) {
      server.middlewares.use('/api/submit-lead', (request, response, next) => {
        if (request.method !== 'POST') {
          next();
          return;
        }

        let rawBody = '';
        request.setEncoding('utf8');
        request.on('data', chunk => {
          rawBody += chunk;
        });
        request.on('end', async () => {
          try {
            if (rawBody.length > MAX_LEAD_JSON_BYTES) {
              response.statusCode = 413;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ success: false, error: 'Payload too large' }));
              return;
            }

            const origin = request.headers.origin || '';
            const host = request.headers.host || '';
            if (!isAllowedLeadOrigin(origin, host)) {
              response.statusCode = 403;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ success: false, error: 'Origin is not allowed' }));
              return;
            }

            const body = JSON.parse(rawBody || '{}');
            const validation = validateLeadPayload(body);
            if (!validation.ok) {
              response.statusCode = validation.silent ? 200 : (validation.status || 400);
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({
                success: Boolean(validation.silent),
                error: validation.silent ? undefined : validation.error,
              }));
              return;
            }

            const token = env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
            const baseId = env.AIRTABLE_BASE_ID || 'appaVNgcgomXyQ6Z2';
            const tableName = env.AIRTABLE_TABLE_NAME || 'PRC Leads';
            const webhookUrl = env.AIRTABLE_LEAD_WEBHOOK_URL;
            const { name, phone, pageUrl, email, service, message, sourcePage } = validation.value;
            const inquiry = [service, email ? `Email: ${email}` : '', message]
              .filter(Boolean)
              .join('\n')
              .trim();

            if (!token) {
              console.error('[airtable:dev] Missing AIRTABLE_PERSONAL_ACCESS_TOKEN');
              response.statusCode = 500;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify({ success: false, error: 'Airtable token is not configured' }));
              return;
            }

            const payload = {
              typecast: true,
              fields: {
                Name: name,
                'Phone Number': phone,
                'Page URL': pageUrl,
                Inquiry: inquiry || 'General Inquiry',
                Status: 'New',
              },
            };

            console.info('[airtable:dev] Creating lead record', {
              baseId,
              tableName,
              fields: Object.keys(payload.fields),
              pageUrl: body.pageUrl,
            });

            const airtableResponse = await fetch(
              `${AIRTABLE_API_BASE}/${baseId}/${encodeURIComponent(tableName)}`,
              {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
              },
            );

            const responseText = await airtableResponse.text();
            if (!airtableResponse.ok) {
              console.error('[airtable:dev] Airtable request failed', {
                status: airtableResponse.status,
                statusText: airtableResponse.statusText,
                body: responseText,
              });
            } else {
              console.info('[airtable:dev] Lead record created');
              const airtableResult = JSON.parse(responseText || '{}');
              await notifyLeadWebhook(webhookUrl, {
                airtableRecordId: airtableResult.id,
                name,
                phone,
                pageUrl,
                inquiry: payload.fields.Inquiry,
                status: payload.fields.Status,
                sourcePage,
                fields: payload.fields,
              });
            }

            response.statusCode = airtableResponse.ok ? 200 : 502;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({
              success: airtableResponse.ok,
              error: airtableResponse.ok ? undefined : responseText,
            }));
          } catch (error) {
            console.error('[airtable:dev] Lead submission failed', error);
            response.statusCode = 500;
            response.setHeader('Content-Type', 'application/json');
            response.end(JSON.stringify({
              success: false,
              error: error instanceof Error ? error.message : 'Lead submission failed',
            }));
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react(), goneDevApi(), airtableDevApi(env)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
              return 'react-vendor';
            }
            return undefined;
          },
        },
      },
    },
  };
});
