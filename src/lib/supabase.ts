/**
 * Shared Supabase client for the portfolio frontend.
 *
 * Only the PUBLIC url + publishable key are ever used here. The
 * publishable key is safe to expose in client-side code — it can only
 * do what Row Level Security policies on the database allow (see the
 * `project_enquiries` INSERT-only policy). No secret/service_role key
 * is ever referenced in this file or anywhere else in the frontend.
 */
import { createClient } from '@supabase/supabase-js';

const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};

const supabaseUrl = env.VITE_SUPABASE_URL || '';
const supabaseKey = env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

/** True once both Supabase env vars have been configured. */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey);

if (!isSupabaseConfigured) {
  // Fail loudly in the console instead of silently breaking form submissions.
  console.warn(
    'Supabase is not configured. Set VITE_SUPABASE_URL and ' +
    'VITE_SUPABASE_PUBLISHABLE_KEY in your .env file.'
  );
}

// Guard against calling createClient with empty strings, which throws.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key'
);
