/**
 * Supabase-backed enquiry submission for the hiring / project inquiry form.
 *
 * Data flow:
 *   Portfolio Hiring Form
 *     -> Supabase (public publishable key, INSERT-only via RLS)
 *       -> `project_enquiries` table (new row per submission)
 *
 * The frontend only ever uses the public anon/publishable key, and the
 * `project_enquiries` table's Row Level Security policy allows public
 * INSERT only — no SELECT/UPDATE/DELETE is possible from the client.
 * No passwords, API keys, or service_role credentials live in this file
 * or anywhere else in the frontend.
 */
import { supabase, isSupabaseConfigured } from './supabase';

/** True once Supabase env vars have been configured. */
export const isEnquiryBackendConfigured = isSupabaseConfigured;

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
 * Submits a hiring/project enquiry to Supabase, inserting a new row into
 * the `project_enquiries` table.
 *
 * Every call creates a NEW row on the backend — nothing is ever overwritten.
 */
export async function submitContactInquiry(data: ContactMessageInput): Promise<EnquirySubmissionResult> {
  if (!isEnquiryBackendConfigured) {
    // Supabase not configured yet — fail loudly instead of faking success.
    console.warn(
      'submitContactInquiry: Supabase is not configured. ' +
      'Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in your .env file.'
    );
    return { success: false, error: 'Enquiry backend is not configured yet.' };
  }

  // Map the existing form fields to the exact `project_enquiries` columns.
  const payload = {
    name: data.name.trim(),
    email: data.email.trim(),
    company: data.company?.trim() || null,
    phone: data.phone?.trim() || null,
    project_type: data.project_type,
    project_description: data.description.trim(),
    reference_url: data.reference_url?.trim() || null,
    engagement_type: data.engagement_type,
    budget_range: data.budget_range || null,
    target_timeline: data.timeline || null,
    preferred_contact: data.preferred_contact || null,
    status: 'New',
  };

  try {
    const { error } = await supabase.from('project_enquiries').insert(payload);

    if (error) {
      console.warn('submitContactInquiry: Supabase insert error:', error.message);
      return { success: false, error: 'Unable to save enquiry' };
    }

    return { success: true };
  } catch (err) {
    console.warn('submitContactInquiry: network error while submitting enquiry:', err);
    return { success: false, error: 'Unable to save enquiry' };
  }
}
