export interface AITool {
  id: string;
  name: string;
  category: 'AI ASSISTANTS' | 'DEVELOPMENT' | 'NO-CODE / LOW-CODE' | 'BACKEND / DATA' | 'DEPLOYMENT';
  role: string;
  usage: string;
  projects?: string[];
}

export interface PromptTechnique {
  name: string;
  purpose: string;
  example: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  typicalFeatures: string[];
  techStack: string[];
  relatedProjectSlugs: string[];
}

export interface SimulatorOption {
  category: string;
  keywords: string[];
  projectType: string;
  suggestedStack: string[];
  buildApproach: string;
  estimatedFlow: string[];
}

export const AI_TOOLS_DATA: AITool[] = [
  {
    id: 'claude',
    name: 'Claude',
    category: 'AI ASSISTANTS',
    role: 'Technical Reasoning & Architecture',
    usage: 'System architecture exploration, complex logic design, deep code refactoring, and multi-file debugging.',
    projects: ['ai-health-companion', 'finpilot-ai']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'AI ASSISTANTS',
    role: 'Ideation & Prompt Iteration',
    usage: 'Initial product discovery, workflow mapping, copy drafting, and API schema design.',
    projects: ['recruitgpt-pro', 'promptflow-studio']
  },
  {
    id: 'gemini',
    name: 'Gemini API',
    category: 'AI ASSISTANTS',
    role: 'Multimodal Vision & Structured Data',
    usage: 'Real-time JSON output contracts, fast health metric extraction, and image analysis.',
    projects: ['ai-health-companion', 'ai-chatbot-platform']
  },
  {
    id: 'google-ai-studio',
    name: 'Google AI Studio',
    category: 'DEVELOPMENT',
    role: 'Rapid Prototyping & System Prompts',
    usage: 'System prompt sandbox testing, token budget tuning, and structured schema verification.',
    projects: ['ai-health-companion', 'promptflow-studio']
  },
  {
    id: 'copilot',
    name: 'GitHub Copilot',
    category: 'DEVELOPMENT',
    role: 'Inline Code Completion',
    usage: 'Boilerplate acceleration, TypeScript interface definitions, and standard unit test templates.',
    projects: ['ai-health-companion']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'DEVELOPMENT',
    role: 'AI-First Code Editor',
    usage: 'Context-aware codebase queries, instant multi-file modifications, and error trace parsing.',
    projects: ['finpilot-ai']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'NO-CODE / LOW-CODE',
    role: 'UI Component Scaffolding',
    usage: 'Generating clean React + Tailwind component layouts and rapid design iteration.',
    projects: ['recruitgpt-pro']
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    category: 'NO-CODE / LOW-CODE',
    role: 'Browser Container Sandbox',
    usage: 'Testing micro-frontend ideas in WebContainers before committing code to GitHub.',
    projects: ['promptflow-studio']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'NO-CODE / LOW-CODE',
    role: 'Instant Cloud Prototyping',
    usage: 'Spinning up quick Node.js backend endpoints for webhook testing.',
    projects: ['ai-chatbot-platform']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'BACKEND / DATA',
    role: 'PostgreSQL & Realtime Auth',
    usage: 'Row Level Security policy creation, instant REST/GraphQL APIs, and auth token storage.',
    projects: ['ai-health-companion', 'finpilot-ai']
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'BACKEND / DATA',
    role: 'Firestore & Auth Engine',
    usage: 'NoSQL document stores for rapid prototyping and real-time state listeners.',
    projects: ['ai-chatbot-platform']
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'DEPLOYMENT',
    role: 'Frontend Edge Deployment',
    usage: 'Automated CI/CD deployments from GitHub main branch with instant SSL preview links.',
    projects: ['ai-health-companion', 'finpilot-ai']
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'DEPLOYMENT',
    role: 'Source Control & CI/CD',
    usage: 'Version control, issue tracking, GitHub Actions automation, and code verification.',
    projects: ['ai-health-companion', 'recruitgpt-pro']
  }
];

export const WORKFLOW_STEPS_DATA = [
  { id: '01', title: 'IDEA', desc: 'Define problem statement, target persona, and core MVP boundaries.' },
  { id: '02', title: 'RESEARCH', desc: 'Analyze existing solutions, API capabilities, and data privacy limits.' },
  { id: '03', title: 'PROMPT', desc: 'Craft structured system prompts, persona bounds, and output JSON schemas.' },
  { id: '04', title: 'PROTOTYPE', desc: 'Rapidly assemble functional UI components and state handlers.' },
  { id: '05', title: 'INTEGRATE', desc: 'Wire server proxies, authentication, database models, and LLM endpoints.' },
  { id: '06', title: 'VALIDATE', desc: 'Test response accuracy, error fallbacks, edge cases, and mobile viewports.' },
  { id: '07', title: 'ITERATE', desc: 'Refine prompts, streamline user workflows, and polish visual polish.' },
  { id: '08', title: 'GITHUB', desc: 'Commit clean, typed code with clear commit logs and README guides.' },
  { id: '09', title: 'DEPLOY', desc: 'Publish application to production Cloud platform with HTTPS monitoring.' }
];

export const PROMPT_TECHNIQUES_DATA: PromptTechnique[] = [
  {
    name: 'Role Prompting',
    purpose: 'Assigning domain constraints and expert persona boundaries to ground LLM reasoning.',
    example: '"Act as a senior medical safety reviewer. Provide wellness guidance with strict disclaimers."'
  },
  {
    name: 'Structured JSON Outputs',
    purpose: 'Enforcing strict schema contracts for reliable frontend state parsing.',
    example: '"Respond strictly in JSON matching the schema: { diagnosis: string, score: number, remedies: string[] }."'
  },
  {
    name: 'Few-Shot Prompting',
    purpose: 'Providing high-quality input/output pairs to anchor output formatting and tone.',
    example: 'Input: "Sore throat" -> Output: { severity: "Mild", recommendation: "Hydrate and rest" }.'
  },
  {
    name: 'Zero-Shot Reasoning',
    purpose: 'Leveraging foundational model knowledge with clear step-by-step instructions.',
    example: '"Step 1: Parse user text. Step 2: Categorize request type. Step 3: Format output."'
  },
  {
    name: 'Function Calling',
    purpose: 'Allowing LLMs to invoke server side tools, databases, and weather or search APIs.',
    example: 'Call tool: get_medication_schedule({ user_id: "usr_102" })'
  },
  {
    name: 'Conversation Context',
    purpose: 'Maintaining multi-turn sliding window memory while preventing context window blowup.',
    example: 'Include last 10 messages with system message summarizing prior user health history.'
  }
];

export const CAPABILITIES_EXPLORER_DATA: CapabilityItem[] = [
  {
    id: 'ai-apps',
    title: 'AI Applications & Copilots',
    category: 'AI APPS',
    description: 'Intelligent digital products powered by LLM reasoning, document analysis, and natural language assistants.',
    typicalFeatures: ['Conversational AI Assistants', 'Document & Text Extraction', 'Structured Output Generation', 'RAG Knowledge Search', 'Automated Health & Financial Logs'],
    techStack: ['React', 'TypeScript', 'Gemini API', 'Node.js', 'Supabase'],
    relatedProjectSlugs: ['ai-health-companion', 'finpilot-ai', 'recruitgpt-pro']
  },
  {
    id: 'web-apps',
    title: 'Modern Web Applications',
    category: 'WEB APPS',
    description: 'Responsive, fast full-stack applications with rich interactive state and persistent cloud backends.',
    typicalFeatures: ['Real-time State Synchronization', 'Secure User Authentication', 'Role-Based Access Control', 'Interactive Data Visualizations', 'Mobile Viewport Optimization'],
    techStack: ['React 19', 'Tailwind CSS', 'Supabase', 'Node.js', 'Express'],
    relatedProjectSlugs: ['ai-health-companion', 'promptflow-studio']
  },
  {
    id: 'dashboards',
    title: 'Analytics & Management Dashboards',
    category: 'DASHBOARDS',
    description: 'High-density operational control centers with live metrics, data filters, and reporting exports.',
    typicalFeatures: ['Key Metric Trend Charts', 'Data Table Filtering & Sorting', 'CSV & PDF Summary Export', 'Real-time Activity Logs', 'Dark / Light Themes'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Lucide Icons'],
    relatedProjectSlugs: ['finpilot-ai', 'ai-health-companion']
  },
  {
    id: 'business-software',
    title: 'Business Operations Software',
    category: 'BUSINESS SOFTWARE',
    description: 'Custom tools tailored to streamline manual business workflows, inventory, customer lists, and team communication.',
    typicalFeatures: ['Custom Data Pipelines', 'Audit Trail Logs', 'Role Permissions', 'Form Validation & Automation', 'Exportable Reports'],
    techStack: ['React', 'Node.js', 'Supabase', 'Express', 'Tailwind CSS'],
    relatedProjectSlugs: ['recruitgpt-pro']
  },
  {
    id: 'automation',
    title: 'API & Workflow Automation',
    category: 'AUTOMATION',
    description: 'Connecting third-party services, webhooks, and AI endpoints to automate repetitive manual tasks.',
    typicalFeatures: ['Webhook Listeners', 'Automated Email Reminders', 'Scheduled Cron Jobs', 'Data Transformation Pipelines'],
    techStack: ['Node.js', 'Express', 'Gemini API', 'GitHub Actions'],
    relatedProjectSlugs: ['promptflow-studio', 'ai-chatbot-platform']
  }
];

export const NO_CODE_TOOLS_DATA = [
  {
    name: 'Google AI Studio',
    purpose: 'AI-assisted application prototyping & system prompt tuning',
    workflow: 'Prompt Sandbox → Schema Definition → API Route Proxy → Production App',
    badge: 'AI Prototyping'
  },
  {
    name: 'Lovable & Bolt.new',
    purpose: 'Rapid React + Tailwind UI layout scaffolding & component ideation',
    workflow: 'Visual Wireframe → Component Code → Clean Tailwind Refactoring',
    badge: 'UI Scaffolding'
  },
  {
    name: 'Supabase & Firebase',
    purpose: 'Instant cloud database, authentication & storage setup without manual server config',
    workflow: 'Data Schema → Security Rules → Client SDK Binding',
    badge: 'Backend / Data'
  },
  {
    name: 'Vercel & Netlify',
    purpose: 'Zero-config continuous deployment & instant SSL preview links',
    workflow: 'Git Push → Build Check → Global Edge Deployment',
    badge: 'Hosting & CI/CD'
  }
];

export const SIMULATOR_PRESETS_DATA: SimulatorOption[] = [
  {
    category: 'inventory',
    keywords: ['inventory', 'store', 'shop', 'warehouse', 'stock', 'retail'],
    projectType: 'Small Business Inventory & Stock Management Web App',
    suggestedStack: ['React 19', 'Tailwind CSS', 'Supabase PostgreSQL', 'TypeScript'],
    buildApproach: 'AI-Assisted Low-Code DB Schema + Custom React UI Controls',
    estimatedFlow: [
      '01. Define inventory item schema & low-stock alerts',
      '02. Build responsive stock catalog & search table',
      '03. Integrate Supabase auth for store managers',
      '04. Add CSV export and low-stock email notifications',
      '05. Deploy to Cloud Run / Vercel with HTTPS'
    ]
  },
  {
    category: 'ai-assistant',
    keywords: ['ai', 'bot', 'chat', 'assistant', 'health', 'finance', 'resume', 'doctor', 'copilot'],
    projectType: 'Domain-Specific Conversational AI Assistant',
    suggestedStack: ['React 19', 'Gemini API', 'Node.js Express Proxy', 'Tailwind CSS'],
    buildApproach: 'Server-Side AI API Proxy with Grounded System Prompts',
    estimatedFlow: [
      '01. Design domain system prompt & safety disclaimer boundaries',
      '02. Build streaming chat UI with message bubble states',
      '03. Create server-side proxy route to keep API keys secure',
      '04. Add user conversation history local persistence',
      '05. Test edge cases & deploy to Cloud infrastructure'
    ]
  },
  {
    category: 'dashboard',
    keywords: ['dashboard', 'analytics', 'metrics', 'sales', 'chart', 'tracker', 'crm'],
    projectType: 'Real-Time Metrics & Management Dashboard',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Supabase'],
    buildApproach: 'Low-Code Component Layouts + Custom Data Visualization Handlers',
    estimatedFlow: [
      '01. Map business key performance indicators (KPIs)',
      '02. Scaffold high-density grid layout with responsive cards',
      '03. Bind interactive line charts and date range filters',
      '04. Connect database backend with realtime updates',
      '05. Perform accessibility audit & deploy'
    ]
  },
  {
    category: 'default',
    keywords: [],
    projectType: 'Custom Full-Stack Digital Product',
    suggestedStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Supabase / Node.js'],
    buildApproach: 'AI-Accelerated Development + Modern Web Architecture',
    estimatedFlow: [
      '01. Clarify core problem, target audience & MVP scope',
      '02. Scaffold UI components with AI code generation tools',
      '03. Connect database, authentication & external APIs',
      '04. Conduct usability testing and edge case validation',
      '05. Commit clean code to GitHub and launch live build'
    ]
  }
];

export const SAFETY_CHECKLIST_DATA = [
  { title: 'VERIFY OUTPUTS', desc: 'Inspect LLM generated text and code for accuracy and safety constraints.' },
  { title: 'TEST GENERATED CODE', desc: 'Run static linter checks and type compilation to eliminate syntax errors.' },
  { title: 'PROTECT SECRETS', desc: 'Proxy all API keys on backend servers; never expose secrets in browser JS.' },
  { title: 'VALIDATE DATA', desc: 'Enforce TypeScript interfaces and runtime schema checks on incoming payloads.' },
  { title: 'REVIEW DEPENDENCIES', desc: 'Audit third-party npm packages for security vulnerabilities before install.' },
  { title: 'TEST EDGE CASES', desc: 'Verify empty states, slow network latency, and mobile viewports thoroughly.' }
];
