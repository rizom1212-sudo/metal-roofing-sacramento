const AIRTABLE_API_BASE = 'https://api.airtable.com/v0';

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(body));
}

function getInquiry(body) {
  return [body.service, body.email ? `Email: ${body.email}` : '', body.message]
    .filter(Boolean)
    .join('\n')
    .trim();
}

function getAirtablePayload({ name, phone, pageUrl, inquiry }) {
  return {
    typecast: true,
    fields: {
      Name: name,
      'Phone Number': phone,
      'Page URL': pageUrl,
      Inquiry: inquiry || 'General Inquiry',
      Status: 'New',
    },
  };
}

async function notifyLeadWebhook(webhookUrl, lead) {
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
      console.error('[airtable:webhook] Lead webhook failed', {
        status: webhookResponse.status,
        statusText: webhookResponse.statusText,
        body: responseText,
      });
      return;
    }

    console.info('[airtable:webhook] Lead webhook notified');
  } catch (error) {
    console.error('[airtable:webhook] Lead webhook request failed', error);
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== 'POST') {
    sendJson(response, 405, { success: false, error: 'Method not allowed' });
    return;
  }

  const token = process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID || 'appaVNgcgomXyQ6Z2';
  const tableName = process.env.AIRTABLE_TABLE_NAME || 'PRC Leads';
  // Shared PRC 13 Airtable base/table. Leads from metalroofingsacramento.com are distinguished by Page URL.
  const webhookUrl = process.env.AIRTABLE_LEAD_WEBHOOK_URL;

  if (!token) {
    console.error('[airtable] Missing AIRTABLE_PERSONAL_ACCESS_TOKEN');
    sendJson(response, 500, { success: false, error: 'Airtable token is not configured' });
    return;
  }

  let body;
  try {
    body = typeof request.body === 'string'
      ? JSON.parse(request.body || '{}')
      : request.body || {};
  } catch (error) {
    console.error('[airtable] Invalid JSON request body', error);
    sendJson(response, 400, { success: false, error: 'Invalid JSON request body' });
    return;
  }
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const pageUrl = typeof body.pageUrl === 'string' ? body.pageUrl.trim() : '';
  const inquiry = getInquiry(body);

  if (!name || !phone || !pageUrl) {
    console.error('[airtable] Missing required lead fields', { hasName: Boolean(name), hasPhone: Boolean(phone), hasPageUrl: Boolean(pageUrl) });
    sendJson(response, 400, { success: false, error: 'Missing required lead fields' });
    return;
  }

  const payload = getAirtablePayload({ name, phone, pageUrl, inquiry });
  console.info('[airtable] Creating lead record', {
    baseId,
    tableName,
    fields: Object.keys(payload.fields),
    pageUrl,
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

  if (!airtableResponse.ok) {
    const errorText = await airtableResponse.text();
    console.error('[airtable] Airtable request failed', {
      status: airtableResponse.status,
      statusText: airtableResponse.statusText,
      body: errorText,
    });
    sendJson(response, 502, { success: false, error: errorText || 'Airtable request failed' });
    return;
  }

  const airtableResult = await airtableResponse.json().catch(() => ({}));
  console.info('[airtable] Lead record created');
  await notifyLeadWebhook(webhookUrl, {
    airtableRecordId: airtableResult.id,
    name,
    phone,
    pageUrl,
    inquiry: payload.fields.Inquiry,
    status: payload.fields.Status,
    sourcePage: body.source_page || body.sourcePage || '',
    fields: payload.fields,
  });
  sendJson(response, 200, { success: true });
}
