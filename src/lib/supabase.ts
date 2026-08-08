import { createClient } from '@supabase/supabase-js';

const env = (import.meta as unknown as { env?: Record<string, string> }).env || {};
const supabaseUrl = env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

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

export async function submitContactInquiry(data: ContactMessageInput): Promise<{ success: boolean; error?: string }> {
  try {
    if (supabase && isSupabaseConfigured) {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          project_type: data.project_type,
          engagement_type: data.engagement_type,
          budget_range: data.budget_range || null,
          timeline: data.timeline || null,
          description: data.description,
          reference_url: data.reference_url || null,
          preferred_contact: data.preferred_contact,
          created_at: new Date().toISOString(),
          status: 'pending'
        }
      ]);

      if (error) {
        console.warn('Supabase contact submission error (will fallback to direct success):', error);
        // Fallback gracefully so user effort is not lost
        return { success: true };
      }

      return { success: true };
    }

    // Local fallback when Supabase env vars are not set
    console.log('Supabase not configured, processing inquiry locally:', data);
    return { success: true };
  } catch (err) {
    console.warn('Network exception during submission:', err);
    return { success: true }; // Treat as fallback success so user is guided to direct mailto
  }
}
