export type PortfolioMode = 'STANDARD' | 'RECRUITER' | 'DEVELOPER';

export interface HiringRoleMatch {
  id: string;
  label: string;
  skills: string[];
  projectSlugs: string[];
  summary: string;
}

export const HIRING_ROLES_DATA: HiringRoleMatch[] = [
  {
    id: 'ai-developer',
    label: 'AI Developer',
    skills: ['Gemini API', 'Claude API', 'Prompt Engineering', 'Structured JSON Outputs', 'RAG Search', 'Python', 'Node.js'],
    projectSlugs: ['ai-health-companion', 'finpilot-ai', 'recruitgpt-pro', 'promptflow-studio'],
    summary: 'Specializing in LLM API integrations, system prompts, structured schemas, and domain-grounded AI copilots.'
  },
  {
    id: 'frontend',
    label: 'Frontend Developer',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Responsive Layouts', 'D3.js', 'Recharts'],
    projectSlugs: ['ai-health-companion', 'finpilot-ai', 'promptflow-studio'],
    summary: 'Expert in high-density responsive user interfaces, fluid state management, and modern Tailwind styling.'
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Developer',
    skills: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'REST APIs', 'PostgreSQL'],
    projectSlugs: ['ai-health-companion', 'finpilot-ai', 'ai-chatbot-platform'],
    summary: 'End-to-end full-stack capabilities from database design and API proxy routes to polished web frontends.'
  },
  {
    id: 'nocode',
    label: 'No-Code / Low-Code',
    skills: ['Google AI Studio', 'Lovable', 'Bolt.new', 'Supabase', 'Vercel', 'Rapid Prototyping'],
    projectSlugs: ['recruitgpt-pro', 'promptflow-studio'],
    summary: 'Leveraging modern AI-assisted no-code workflows to launch working web products 5x faster without sacrificing quality.'
  },
  {
    id: 'business-software',
    label: 'Business Software',
    skills: ['GST Billing', 'Inventory Tracking', 'Supabase RLS', 'Excel Reports', 'Operational Compliance'],
    projectSlugs: ['recruitgpt-pro'],
    summary: 'Applying banking precision to build billing systems, stock management portals, and business workflow software.'
  },
  {
    id: 'automation',
    label: 'Automation Engineer',
    skills: ['API Webhooks', 'Node.js Automation', 'Scheduled Cron Tasks', 'Data Transformation'],
    projectSlugs: ['promptflow-studio', 'ai-chatbot-platform'],
    summary: 'Connecting third-party webhooks, databases, and LLM pipelines to eliminate manual operational friction.'
  }
];
