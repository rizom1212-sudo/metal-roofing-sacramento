import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

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
            const body = JSON.parse(rawBody || '{}');
            const token = env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
            const baseId = env.AIRTABLE_BASE_ID || 'appaVNgcgomXyQ6Z2';
            const tableName = env.AIRTABLE_TABLE_NAME || 'PRC Leads';
            const webhookUrl = env.AIRTABLE_LEAD_WEBHOOK_URL;
            const inquiry = [body.service, body.email ? `Email: ${body.email}` : '', body.message]
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
                Name: body.name,
                'Phone Number': body.phone,
                'Page URL': body.pageUrl,
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
                name: body.name,
                phone: body.phone,
                pageUrl: body.pageUrl,
                inquiry: payload.fields.Inquiry,
                status: payload.fields.Status,
                sourcePage: body.source_page || body.sourcePage || '',
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
    plugins: [react(), airtableDevApi(env)],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
