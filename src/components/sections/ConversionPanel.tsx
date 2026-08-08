import React, { useState } from 'react';
import { Layout, Globe, Smartphone, Bot, Building2, Zap, ArrowRight, CheckCircle2, Sparkles, Cpu, Code2, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GlassCard } from '../ui/GlassCard';

interface ConversionPanelProps {
  onSelectCategory?: (category: string) => void;
  onNavigateContact?: () => void;
}

export const ConversionPanel: React.FC<ConversionPanelProps> = ({
  onSelectCategory,
  onNavigateContact
}) => {
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('FULL-TIME');

  const buildCategories = [
    {
      id: 'Websites',
      title: 'WEBSITES',
      desc: 'High-performance marketing, brand, and portfolio websites optimized for speed and SEO.',
      icon: Globe,
      color: 'text-blue-400 border-blue-500/30 bg-blue-500/10'
    },
    {
      id: 'Web Applications',
      title: 'WEB APPLICATIONS',
      desc: 'Interactive full-stack web applications with authentication, databases, and responsive UI.',
      icon: Layout,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10'
    },
    {
      id: 'Mobile Apps',
      title: 'MOBILE APPS',
      desc: 'Responsive web-first mobile interfaces and PWA applications for iOS & Android.',
      icon: Smartphone,
      color: 'text-purple-400 border-purple-500/30 bg-purple-500/10'
    },
    {
      id: 'AI Solutions',
      title: 'AI SOLUTIONS',
      desc: 'LLM integrations, document chat tools, prompt-engineered pipelines, and smart tools.',
      icon: Bot,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    },
    {
      id: 'Business Software',
      title: 'BUSINESS SOFTWARE',
      desc: 'Custom billing portals, inventory management, customer databases, and GST invoices.',
      icon: Building2,
      color: 'text-amber-400 border-amber-500/30 bg-amber-500/10'
    },
    {
      id: 'Automation',
      title: 'AUTOMATION',
      desc: 'API workflows, automated reporting, data parsing, and time-saving operational bots.',
      icon: Zap,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10'
    }
  ];

  const processSteps = [
    { title: 'IDEA', desc: 'Requirements' },
    { title: 'AI RESEARCH', desc: 'Architecture' },
    { title: 'PROMPT ENG.', desc: 'Code Generation' },
    { title: 'PROTOTYPE', desc: 'Interactive UI' },
    { title: 'INTEGRATION', desc: 'API & DB' },
    { title: 'TESTING', desc: 'Validation' },
    { title: 'GITHUB', desc: 'Version Control' },
    { title: 'DEPLOYMENT', desc: 'Cloud Run / Vercel' },
    { title: 'PRODUCT', desc: 'Production' }
  ];

  const trustSignals = [
    'AI-Assisted Development',
    'Modern Web Technologies',
    'GitHub-Based Projects',
    'Responsive Applications',
    'Business-Focused Solutions',
    'Fast Prototyping'
  ];

  const handleCardClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 relative border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* TRUST SIGNALS STRIP */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs text-slate-300">
          <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>ENGINEERING STANDARDS:</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECRUITER CONVERSION PANEL: WHAT CAN I BUILD FOR YOU? */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUILD CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                What can I build for you?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              From web apps to AI integrations, browse capabilities or jump directly into project case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => handleCardClick(cat.id)}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${cat.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors uppercase font-bold">
                        EXPLORE →
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-white text-lg group-hover:text-blue-300 transition-colors">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-slate-200">
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-400" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* WORK MODE SELECTOR */}
        <GlassCard className="space-y-6 border-blue-500/20 bg-slate-950/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                ENGAGEMENT & RECRUITER MODE
              </span>
              <h3 className="text-xl font-heading font-bold text-white">I'M LOOKING FOR:</h3>
            </div>

            {/* Mode Pills */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {profileData.availability.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSelectedWorkMode(mode)}
                  className={`px-3.5 py-2 rounded-xl transition-all font-bold ${
                    selectedWorkMode === mode
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Message Display */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase font-bold block">
                {selectedWorkMode} AVAILABILITY STATEMENT
              </span>
              <p className="text-sm font-semibold text-slate-200">
                "{profileData.workModeMessages[selectedWorkMode] || profileData.supportingMessage}"
              </p>
            </div>

            <button
              onClick={onNavigateContact}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold whitespace-nowrap shrink-0 transition-all border border-blue-400/30"
            >
              Discuss {selectedWorkMode} Role →
            </button>
          </div>
        </GlassCard>

        {/* IDEA TO PRODUCT PROCESS VISUALIZATION */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
              DEVELOPMENT METHODOLOGY
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Idea to Production Pipeline
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Leveraging AI prompting and modern web stacks to accelerate digital product delivery.
            </p>
          </div>

          {/* Process Nodes Sequence */}
          <div className="grid grid-cols-3 md:grid-cols-9 gap-2 overflow-x-auto pb-2">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1 flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div className="text-[10px] font-mono text-slate-500 font-bold">0{idx + 1}</div>
                <div className="font-heading font-bold text-white text-xs text-purple-300">{step.title}</div>
                <div className="text-[9px] font-mono text-slate-400 truncate">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* SIGNATURE NO-CODE POSITIONING STATEMENT */}
        <GlassCard className="p-8 border-purple-500/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>CORE PHILOSOPHY</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-wide">
            "{profileData.noCodeSignatureTitle}"
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {profileData.noCodeSignatureText}
          </p>
        </GlassCard>

      </div>
    </section>
  );
};
