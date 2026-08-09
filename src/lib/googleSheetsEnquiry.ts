/**
 * Google Sheets-backed enquiry submission for the hiring / project inquiry form.
 *
 * Data flow:
 *   Portfolio Hiring Form
 *     -> Google Apps Script Web App (server-side, holds no secrets on the client)
 *       -> Google Sheet in Google Drive (new row per submission)
 *         -> Email notification
 *
 * The ONLY value the frontend needs is the public Apps Script Web App URL,
 * configured via the VITE_GOOGLE_APPS_SCRIPT_URL environment variable.
 * No passwords, API keys, or service credentials live in this file or
 * anywhere else in the frontend.
 */

const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};

/** Public Google Apps Script Web App endpoint. Set in .env as VITE_GOOGLE_APPS_SCRIPT_URL. */
export const GOOGLE_APPS_SCRIPT_URL = env.VITE_GOOGLE_APPS_SCRIPT_URL || '';

/** True once a deployed Apps Script Web App URL has been configured. */
export const isEnquiryBackendConfigured = Boolean(GOOGLE_APPS_SCRIPT_URL);

/**
 * Shape of the existing hiring form's local state. Field names intentionally
 * match what ContactSection.tsx already uses, so no form fields had to be
 * renamed to wire this up.
 */
export interface ContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project_type: string;
  engagement_type: string;
  budget_range?: string;
  timeline?: string;
  description: string;
  reference_url?: string;
  preferred_contact: string;
}

interface EnquirySubmissionResult {
  success: boolean;
  error?: string;
}

/**
 * Submits a hiring/project enquiry to the Google Apps Script Web App, which
 * appends a new row to the Google Sheet and emails a notification.
 *
 * Every call creates a NEW row on the backend — nothing is ever overwritten.
 */
export async function submitContactInquiry(data: ContactMessageInput): Promise<EnquirySubmissionResult> {
  if (!isEnquiryBackendConfigured) {
    // No Web App URL configured yet — fail loudly instead of faking success.
    console.warn(
      'submitContactInquiry: VITE_GOOGLE_APPS_SCRIPT_URL is not set. ' +
      'Deploy the Apps Script Web App and add its URL to your .env file.'
    );
    return { success: false, error: 'Enquiry backend is not configured yet.' };
  }

  // Map the existing form fields to the exact Google Sheet column names.
  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company?.trim() || '',
    phone: data.phone?.trim() || '',
    projectType: data.project_type,
    projectDescription: data.description.trim(),
    referenceUrl: data.reference_url?.trim() || '',
    engagementType: data.engagement_type,
    budget: data.budget_range || '',
    timeline: data.timeline || '',
    preferredContact: data.preferred_contact || '',
  };

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      // Deliberately using text/plain (not application/json) so the browser
      // treats this as a "simple request" and skips the CORS preflight
      // (OPTIONS) call, which Apps Script Web Apps do not handle. The Apps
      // Script backend parses the JSON body itself from e.postData.contents.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, error: 'Unable to save enquiry' };
    }

    const result = await response.json();

    if (result && result.success === true) {
      return { success: true };
    }

    return { success: false, error: result?.error || 'Unable to save enquiry' };
  } catch (err) {
    console.warn('submitContactInquiry: network error while submitting enquiry:', err);
    return { success: false, error: 'Unable to save enquiry' };
  }
}
