export interface LeadData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message?: string;
  source_page?: string;
}

export async function submitLead(data: LeadData): Promise<{ success: boolean; error?: string }> {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : data.source_page ?? '';

  try {
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        pageUrl,
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
      console.error('[lead-form] Airtable submission failed', {
        status: response.status,
        error: result.error || 'Lead submission failed',
      });
      return {
        success: false,
        error: result.error || 'Lead submission failed',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('[lead-form] Lead submission request failed', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Lead submission failed',
    };
  }
}
