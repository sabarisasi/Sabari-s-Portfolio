import React, { useState } from 'react';
import { 
  Globe, Laptop, Bot, Building2, Smartphone, Layers, Workflow, Palette, 
  ArrowRight, CheckCircle2, Briefcase, Sparkles, ChevronRight, Compass, Code2
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { projectsData } from '../../data/projects';

interface ServicesSectionProps {
  onSelectService?: (projectType: string) => void;
  onNavigateContact?: () => void;
  onOpenProjectBySlug?: (slug: string) => void;
}

export interface ServiceItem {
  id: string;
  projectType: string;
  title: string;
  shortDesc: string;
  icon: typeof Globe;
  capabilities: string[];
  ctaLabel: string;
  projectSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-dev',
    projectType: 'Website',
    title: 'WEBSITE DEVELOPMENT',
    shortDesc: 'High-impact business sites, personal portfolios, and SEO-ready web presences.',
    icon: Globe,
    capabilities: [
      'Business websites',
      'Landing pages',
      'Personal websites',
      'Portfolio websites',
      'Responsive interfaces',
      'SEO-ready websites'
    ],
    ctaLabel: 'BUILD A WEBSITE',
    projectSlugs: ['ai-health-companion']
  },
  {
    id: 'web-apps',
    projectType: 'Web Application',
    title: 'WEB APPLICATIONS',
    shortDesc: 'Full-stack interactive dashboards, database-driven workflows, and auth systems.',
    icon: Laptop,
    capabilities: [
      'Interactive web applications',
      'Dashboards',
      'Authentication',
      'Database integration',
      'API integration',
      'Business workflows'
    ],
    ctaLabel: 'BUILD A WEB APP',
    projectSlugs: ['finpilot-ai', 'ai-health-companion', 'promptflow-studio']
  },
  {
    id: 'ai-apps',
    projectType: 'AI Application',
    title: 'AI APPLICATIONS',
    shortDesc: 'Domain-tailored Gemini & LLM assistants, document analysis, and knowledge search.',
    icon: Bot,
    capabilities: [
      'AI assistants',
      'Document analysis',
      'Knowledge systems',
      'AI chat',
      'AI automation',
      'AI API integration'
    ],
    ctaLabel: 'BUILD AN AI APP',
    projectSlugs: ['ai-health-companion', 'finpilot-ai', 'recruitgpt-pro', 'promptflow-studio']
  },
  {
    id: 'business-software',
    projectType: 'Business Software',
    title: 'BUSINESS SOFTWARE',
    shortDesc: 'Operational tools, GST billing systems, inventory portals, and internal workflows.',
    icon: Building2,
    capabilities: [
      'Billing systems',
      'Inventory systems',
      'Management systems',
      'Dashboards',
      'Operational tools',
      'Workflow software'
    ],
    ctaLabel: 'DIGITIZE A WORKFLOW',
    projectSlugs: ['recruitgpt-pro', 'finpilot-ai']
  },
  {
    id: 'mobile-apps',
    projectType: 'Mobile Application',
    title: 'MOBILE APPLICATIONS',
    shortDesc: 'Mobile-first responsive web apps and cross-platform concept applications.',
    icon: Smartphone,
    capabilities: [
      'Mobile-first experiences',
      'Responsive applications',
      'Cross-platform concepts',
      'API-connected apps'
    ],
    ctaLabel: 'BUILD A MOBILE APP',
    projectSlugs: ['ai-health-companion']
  },
  {
    id: 'saas-products',
    projectType: 'SaaS',
    title: 'SAAS / DIGITAL PRODUCTS',
    shortDesc: 'Scalable digital product prototypes, admin portals, and subscription architectures.',
    icon: Layers,
    capabilities: [
      'Product prototypes',
      'SaaS concepts',
      'User authentication',
      'Subscription-ready architecture',
      'Dashboards',
      'Admin panels'
    ],
    ctaLabel: 'BUILD A PRODUCT',
    projectSlugs: ['promptflow-studio', 'finpilot-ai']
  },
  {
    id: 'automation',
    projectType: 'Automation',
    title: 'AUTOMATION',
    shortDesc: 'AI-assisted webhooks, automated data transformations, and scheduled API tasks.',
    icon: Workflow,
    capabilities: [
      'AI-assisted workflows',
      'Data processing',
      'Business automation',
      'Repetitive-task reduction',
      'API workflows'
    ],
    ctaLabel: 'AUTOMATE A TASK',
    projectSlugs: ['promptflow-studio', 'recruitgpt-pro']
  },
  {
    id: 'ui-ux-dev',
    projectType: 'UI/UX',
    title: 'UI / UX DEVELOPMENT',
    shortDesc: 'Refined responsive design systems, dark/light themes, and fluid micro-interactions.',
    icon: Palette,
    capabilities: [
      'Modern interfaces',
      'Responsive layouts',
      'Design systems',
      'Interactive experiences',
      'Micro-interactions'
    ],
    ctaLabel: 'IMPROVE MY UI',
    projectSlugs: ['finpilot-ai', 'promptflow-studio']
  }
];

export interface ProjectTypeWorkflow {
  id: string;
  label: string;
  steps: string[];
  description: string;
}

export const WORKFLOW_SIZES: ProjectTypeWorkflow[] = [
  {
    id: 'IDEA',
    label: 'IDEA',
    description: 'Transform raw concept into structured architecture & validation blueprint.',
    steps: ['Discovery', 'Prototype', 'Validation', 'Build', 'Launch']
  },
  {
    id: 'PROTOTYPE',
    label: 'PROTOTYPE',
    description: 'Rapid clickable proof-of-concept to test core user flows.',
    steps: ['Concept Review', 'Architecture', 'Rapid Prototyping', 'User Feedback', 'Refinement']
  },
  {
    id: 'MVP',
    label: 'MVP',
    description: 'Full-featured initial production release with core functional loops.',
    steps: ['Requirements', 'Architecture', 'Core Build', 'Testing', 'Deployment']
  },
  {
    id: 'EXISTING_PRODUCT',
    label: 'EXISTING PRODUCT',
    description: 'Refactoring, new module additions, performance & UI modernizations.',
    steps: ['Code Audit', 'Performance Optimization', 'Feature Addition', 'CI/CD', 'Release']
  },
  {
    id: 'BUSINESS_SOFTWARE',
    label: 'BUSINESS SOFTWARE',
    description: 'Digitizing internal banking/business operations with precision & audit controls.',
    steps: ['Process Mapping', 'Schema Design', 'Secure Build', 'User Testing', 'Onboarding']
  },
  {
    id: 'AI_PRODUCT',
    label: 'AI PRODUCT',
    description: 'Custom Gemini/Claude integrations with structured schemas and RAG context.',
    steps: ['Prompt & API Design', 'Output Validation', 'Web Interface', 'RAG / Context', 'Launch']
  },
  {
    id: 'WEBSITE',
    label: 'WEBSITE',
    description: 'SEO-optimized, ultra-fast responsive landing page or corporate site.',
    steps: ['Layout Design', 'Responsive Build', 'Content Integration', 'SEO Optimization', 'Deploy']
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onNavigateContact,
  onOpenProjectBySlug
}) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('IDEA');

  const activeWorkflow = WORKFLOW_SIZES.find((w) => w.id === selectedWorkflowId) || WORKFLOW_SIZES[0];

  const handleCtaClick = (projectType: string) => {
    if (onSelectService) {
      onSelectService(projectType);
    } else if (onNavigateContact) {
      onNavigateContact();
    }
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              09 / SERVICES
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase">
              FREELANCE & CONTRACT CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            What can I build for you?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            From websites and business software to AI-powered applications — choose the right development approach for your idea.
          </p>
        </div>

        {/* 8 SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComp = service.icon;

            return (
              <GlassCard
                key={service.id}
                className="p-6 flex flex-col justify-between group hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  {/* Service Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all">
                    <IconComp className="w-5 h-5 transition-transform group-hover:rotate-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-heading font-extrabold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Key Capabilities */}
                  <div className="pt-2 space-y-2 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">
                      KEY CAPABILITIES
                    </span>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {service.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />
                          <span className="text-[11px] truncate">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Projects */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">
                      RELATED BUILDS
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {service.projectSlugs.map((slug) => {
                        const proj = projectsData.find((p) => p.slug === slug);
                        return (
                          <button
                            key={slug}
                            onClick={() => onOpenProjectBySlug && onOpenProjectBySlug(slug)}
                            className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono text-slate-300 hover:text-white transition-colors"
                          >
                            {proj?.title || slug}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Service CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleCtaClick(service.projectType)}
                    className="w-full py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-blue-600/20"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* ENGAGEMENT MODELS SECTION */}
        <div className="space-y-6 pt-8 border-t border-slate-800">
          <div>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
              FLEXIBLE COLLABORATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              HOW CAN WE WORK TOGETHER?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Tailored development engagement models for organizations, startups, and product teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <GlassCard className="p-5 space-y-2 border-blue-500/30 hover:border-blue-500/60 transition-colors">
              <div className="flex items-center justify-between text-blue-400">
                <span className="text-[10px] font-mono font-bold uppercase">FULL-TIME</span>
                <Briefcase className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-white text-base">Full-Time Developer</h4>
              <p className="text-xs text-slate-300 leading-snug">
                For product teams and organizations looking for a dedicated full-time developer.
              </p>
            </GlassCard>

            <GlassCard className="p-5 space-y-2 border-purple-500/30 hover:border-purple-500/60 transition-colors">
              <div className="flex items-center justify-between text-purple-400">
                <span className="text-[10px] font-mono font-bold uppercase">PART-TIME</span>
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-white text-base">Part-Time Role</h4>
              <p className="text-xs text-slate-300 leading-snug">
                For ongoing development support alongside existing team responsibilities.
              </p>
            </GlassCard>

            <GlassCard className="p-5 space-y-2 border-emerald-500/30 hover:border-emerald-500/60 transition-colors">
              <div className="flex items-center justify-between text-emerald-400">
                <span className="text-[10px] font-mono font-bold uppercase">FREELANCE</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-white text-base">Freelance Project</h4>
              <p className="text-xs text-slate-300 leading-snug">
                For defined websites, applications, and custom digital product deliverables.
              </p>
            </GlassCard>

            <GlassCard className="p-5 space-y-2 border-amber-500/30 hover:border-amber-500/60 transition-colors">
              <div className="flex items-center justify-between text-amber-400">
                <span className="text-[10px] font-mono font-bold uppercase">CONTRACT</span>
                <Code2 className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-white text-base">Contract Developer</h4>
              <p className="text-xs text-slate-300 leading-snug">
                For focused sprint-based development engagements and feature extensions.
              </p>
            </GlassCard>

            <GlassCard className="p-5 space-y-2 border-indigo-500/30 hover:border-indigo-500/60 transition-colors">
              <div className="flex items-center justify-between text-indigo-400">
                <span className="text-[10px] font-mono font-bold uppercase">PROJECT-BASED</span>
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-white text-base">Project-Based</h4>
              <p className="text-xs text-slate-300 leading-snug">
                For clearly scoped end-to-end builds from discovery to deployment.
              </p>
            </GlassCard>

          </div>

          <p className="text-[11px] font-mono text-slate-500">
            * Engagement models are subject to mutual scope agreement and schedule availability.
          </p>
        </div>

        {/* PROJECT SIZE & WORKFLOW RECOMMENDER */}
        <div className="space-y-6 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block mb-1">
                INTERACTIVE PROCESS ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                WHAT ARE YOU BUILDING?
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Select project scope to preview recommended development workflow</span>
          </div>

          {/* Workflow Selector Buttons */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {WORKFLOW_SIZES.map((wf) => (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflowId(wf.id)}
                className={`px-3.5 py-2 rounded-xl border transition-all font-semibold ${
                  selectedWorkflowId === wf.id
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {wf.label}
              </button>
            ))}
          </div>

          {/* Workflow Step Sequence Card */}
          <GlassCard className="p-6 sm:p-8 space-y-6 border-blue-500/30 bg-slate-950/80">
            <p className="text-xs sm:text-sm text-slate-200 font-mono">
              <strong className="text-blue-400 uppercase">{activeWorkflow.label}:</strong> {activeWorkflow.description}
            </p>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 overflow-x-auto pb-2">
              {activeWorkflow.steps.map((stepName, idx) => (
                <div key={idx} className="flex-1 flex items-center gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex-1 space-y-1 min-w-[120px]">
                    <span className="text-[10px] font-mono font-bold text-blue-400">0{idx + 1}</span>
                    <p className="font-heading font-bold text-white text-xs sm:text-sm">{stepName}</p>
                  </div>

                  {idx < activeWorkflow.steps.length - 1 && (
                    <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
