import { SkillCategory } from '../types/skill';

export const skillCategoriesData: SkillCategory[] = [
  {
    categoryName: "Frontend Development",
    categoryKey: "FRONTEND",
    skills: [
      { name: "React.js", category: "FRONTEND", tier: "Core", isPrimary: true, description: "Building component-driven UI architectures and reactive state workflows." },
      { name: "TypeScript", category: "FRONTEND", tier: "Core", isPrimary: true, description: "Type-safe interface contracts and scalable application code." },
      { name: "Tailwind CSS", category: "FRONTEND", tier: "Core", isPrimary: true, description: "Responsive layouts, custom design systems, and rapid styling." },
      { name: "JavaScript (ES6+)", category: "FRONTEND", tier: "Core", isPrimary: true, description: "Modern async/await, closures, and modular DOM interactions." },
      { name: "HTML5 / CSS3", category: "FRONTEND", tier: "Core", isPrimary: true },
      { name: "Framer Motion", category: "FRONTEND", tier: "Working Knowledge", description: "Smooth layout transitions and interactive UI gestures." },
      { name: "Bootstrap", category: "FRONTEND", tier: "Working Knowledge" }
    ]
  },
  {
    categoryName: "Backend & Databases",
    categoryKey: "BACKEND",
    skills: [
      { name: "Supabase", category: "BACKEND", tier: "Core", isPrimary: true, description: "PostgreSQL databases, row-level security, and authentication." },
      { name: "Node.js", category: "BACKEND", tier: "Core", isPrimary: true, description: "Server-side JavaScript runtime and RESTful API routes." },
      { name: "Express.js", category: "BACKEND", tier: "Working Knowledge" },
      { name: "Firebase", category: "BACKEND", tier: "Working Knowledge" },
      { name: "MySQL / SQL", category: "BACKEND", tier: "Working Knowledge" }
    ]
  },
  {
    categoryName: "AI Development",
    categoryKey: "AI DEVELOPMENT",
    skills: [
      { name: "Prompt Engineering & Design", category: "AI DEVELOPMENT", tier: "Core", isPrimary: true, description: "Crafting system prompts, few-shot contexts, and structured outputs." },
      { name: "Claude API & Gemini SDK", category: "AI DEVELOPMENT", tier: "Core", isPrimary: true, description: "Integrating LLM APIs for text, vision, and function calling." },
      { name: "ChatGPT & ChatGPT Plus", category: "AI DEVELOPMENT", tier: "Core", isPrimary: true },
      { name: "Cursor AI", category: "AI DEVELOPMENT", tier: "Core", isPrimary: true, description: "AI-assisted multi-file coding and workspace refactoring." },
      { name: "GitHub Copilot", category: "AI DEVELOPMENT", tier: "Core" },
      { name: "Google AI Studio", category: "AI DEVELOPMENT", tier: "Core", description: "Prompt testing, API key configuration, and model tuning." },
      { name: "AI Workflow & Agent Design", category: "AI DEVELOPMENT", tier: "Working Knowledge" }
    ]
  },
  {
    categoryName: "No-Code & Low-Code Platforms",
    categoryKey: "NO-CODE / LOW-CODE",
    skills: [
      { name: "Lovable", category: "NO-CODE / LOW-CODE", tier: "Core", isPrimary: true, description: "AI-driven full-stack app generator and prompt building." },
      { name: "Bolt.new", category: "NO-CODE / LOW-CODE", tier: "Core", isPrimary: true, description: "Browser-based stack environment and rapid app deployment." },
      { name: "Replit AI", category: "NO-CODE / LOW-CODE", tier: "Working Knowledge" },
      { name: "Rapid Prototyping", category: "NO-CODE / LOW-CODE", tier: "Core", isPrimary: true }
    ]
  },
  {
    categoryName: "Tools & Deployment",
    categoryKey: "TOOLS & OPS",
    skills: [
      { name: "Git & GitHub", category: "TOOLS & OPS", tier: "Tools", isPrimary: true, description: "Version control, branching, PR review, and commit hygiene." },
      { name: "Vercel & Netlify", category: "TOOLS & OPS", tier: "Tools", isPrimary: true, description: "Continuous integration, edge hosting, and domain setups." },
      { name: "VS Code", category: "TOOLS & OPS", tier: "Tools" }
    ]
  },
  {
    categoryName: "Business & Banking Operations",
    categoryKey: "BUSINESS & DOMAIN",
    skills: [
      { name: "Banking Operations", category: "BUSINESS & DOMAIN", tier: "Core", isPrimary: true, description: "HDFC Bank operational compliance and zero-error processing." },
      { name: "Process Discipline & Accuracy", category: "BUSINESS & DOMAIN", tier: "Core", isPrimary: true },
      { name: "KYC/AML Compliance Awareness", category: "BUSINESS & DOMAIN", tier: "Core" },
      { name: "MS Excel & Operational Analytics", category: "BUSINESS & DOMAIN", tier: "Core", description: "Automated reporting spreadsheets and data validation." }
    ]
  }
];

