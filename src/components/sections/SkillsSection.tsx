import React, { useState } from 'react';
import { Sparkles, Code2, Database, Bot, Zap, Building2, Wrench, ArrowRight, Layers, Cpu, CheckCircle2, ShieldCheck, Layout, Globe, Smartphone, BarChart3, HelpCircle } from 'lucide-react';
import { skillCategoriesData } from '../../data/skills';
import { profileData } from '../../data/profile';
import { GlassCard } from '../ui/GlassCard';
import { SkillItem } from '../../types/skill';

interface SkillsSectionProps {
  onNavigateContact?: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onNavigateContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categoriesFilterList = [
    { id: 'ALL', label: 'ALL SKILLS' },
    { id: 'FRONTEND', label: 'FRONTEND' },
    { id: 'BACKEND', label: 'BACKEND' },
    { id: 'AI DEVELOPMENT', label: 'AI DEVELOPMENT' },
    { id: 'NO-CODE / LOW-CODE', label: 'NO-CODE / LOW-CODE' },
    { id: 'TOOLS & OPS', label: 'TOOLS & OPS' },
    { id: 'BUSINESS & DOMAIN', label: 'BUSINESS & DOMAIN' }
  ];

  // Flatten skills for filtering
  const allSkills: SkillItem[] = skillCategoriesData.flatMap(cat => cat.skills);

  const filteredSkills = activeCategory === 'ALL'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  const capabilityCards = [
    {
      title: "WEBSITES",
      desc: "Business websites, landing pages, and portfolio sites optimized for speed, SEO, and engagement.",
      icon: Globe,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    {
      title: "WEB APPLICATIONS",
      desc: "Responsive full-stack web applications with authentication, reactive UI, and persistent databases.",
      icon: Layout,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10"
    },
    {
      title: "BUSINESS SOFTWARE",
      desc: "Custom operational software, invoice generators, client portals, and internal tracking systems.",
      icon: Building2,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10"
    },
    {
      title: "AI APPLICATIONS",
      desc: "AI chatbots, document analyzers, prompt pipelines, and intelligent workflow tools.",
      icon: Bot,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    },
    {
      title: "DASHBOARDS",
      desc: "Analytics dashboards, financial tracking interfaces, and administrative management panels.",
      icon: BarChart3,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
    },
    {
      title: "MOBILE APPLICATIONS",
      desc: "Responsive mobile-first web interfaces, Progressive Web Apps (PWAs), and touch-friendly UI.",
      icon: Smartphone,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
    },
    {
      title: "AUTOMATION",
      desc: "AI-driven automated workflows, data parsing, email generation, and operational bots.",
      icon: Zap,
      color: "text-rose-400 border-rose-500/30 bg-rose-500/10"
    },
    {
      title: "SAAS PRODUCTS",
      desc: "Scalable product concepts, subscription UI flows, multi-tenant databases, and cloud hosting.",
      icon: Layers,
      color: "text-teal-400 border-teal-500/30 bg-teal-500/10"
    }
  ];

  const recruiterPoints = [
    {
      num: "01",
      title: "BUSINESS UNDERSTANDING",
      desc: "Banking operations experience at HDFC Bank equips me to understand real-world workflows, user compliance, and business priorities."
    },
    {
      num: "02",
      title: "AI-ASSISTED SPEED",
      desc: "Leveraging state-of-the-art AI tools accelerates architecture, prototyping, and code generation by 3-5x without sacrificing quality."
    },
    {
      num: "03",
      title: "PRODUCT THINKING",
      desc: "I focus on solving the underlying business or user problem first, choosing the most efficient technology path rather than over-engineering."
    },
    {
      num: "04",
      title: "CONTINUOUS LEARNING",
      desc: "Constantly mastering new AI models, prompt techniques, and web frameworks to remain at the cutting edge of modern software delivery."
    }
  ];

  const techMapNodes = [
    { label: "USER", icon: "👤", sub: "Interface Request" },
    { label: "REACT / UI", icon: "⚛️", sub: "Frontend State" },
    { label: "API / LOGIC", icon: "⚙️", sub: "REST Route" },
    { label: "NODE.JS", icon: "🚀", sub: "Server Execution" },
    { label: "DATABASE", icon: "💾", sub: "Supabase / SQL" },
    { label: "AI SERVICES", icon: "🤖", sub: "Claude / Gemini" },
    { label: "GITHUB", icon: "📦", sub: "Version Control" },
    { label: "DEPLOYMENT", icon: "🌐", sub: "Vercel / Cloud Run" }
  ];

  return (
    <section id="skills" className="py-20 relative space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            A modern stack, built around practical problem solving.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            No artificial progress bars — transparent technical capabilities grouped by tier and application domain.
          </p>
        </div>

        {/* INTERACTIVE SKILL EXPLORER TABS */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4 overflow-x-auto">
            {categoriesFilterList.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* SKILL BADGES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    skill.tier === 'Core'
                      ? 'bg-blue-950 text-blue-300 border-blue-800/60'
                      : skill.tier === 'Working Knowledge'
                      ? 'bg-indigo-950 text-indigo-300 border-indigo-800/60'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}>
                    {skill.tier}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-slate-400">{skill.category}</span>
                  {skill.isPrimary && (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      PRIMARY
                    </span>
                  )}
                </div>

                {skill.description && (
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed border-t border-slate-800/60">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SPECIAL HIGHLIGHT: NO-CODE + LOW-CODE STATEMENT */}
        <GlassCard className="p-8 border-purple-500/30 bg-gradient-to-r from-slate-950 via-purple-950/20 to-slate-950 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>NO-CODE + LOW-CODE ACCELERATION</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            "Rapidly transform product ideas into functional prototypes and production-ready applications."
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Combining tools like Lovable, Bolt.new, Replit, and Google AI Studio with solid software design principles allows me to ship full web products in days instead of months.
          </p>
        </GlassCard>

        {/* HOW I BUILD - TECHNOLOGY MAP */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
              DEVELOPMENT ARCHITECTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              How I Build: Product Flow Map
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              A visual representation of data movement and modern stack integration.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {techMapNodes.map((node, idx) => (
              <div
                key={node.label}
                className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div className="text-lg">{node.icon}</div>
                <div className="font-heading font-bold text-white text-xs">{node.label}</div>
                <div className="text-[10px] font-mono text-slate-500">{node.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT I CAN BUILD - CAPABILITY CARDS */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
                DELIVERY SCOPE
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                What Can I Build?
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-xs">
              Custom software solutions tailored for business efficiency and user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all space-y-3 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`p-3 rounded-xl border w-fit ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading font-bold text-white text-base">{card.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SIGNATURE POSITIONING STATEMENT */}
        <GlassCard className="p-8 border-blue-500/30 bg-slate-950/90 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>SIGNATURE POSITIONING</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            "{profileData.problemFirstTitle}"
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            "{profileData.problemFirstText}"
          </p>
        </GlassCard>

        {/* RECRUITER VALUE SECTION - WHY WORK WITH ME? */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              VALUE PROPOSITION
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              Why Work With Me?
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Key advantages I bring to teams, startups, and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruiterPoints.map((point) => (
              <GlassCard key={point.num} className="space-y-3">
                <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                  {point.num}
                </span>
                <h4 className="font-heading font-bold text-white text-sm">{point.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{point.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* AVAILABILITY & HIRING PANEL STRIP */}
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
              HIRING STATUS & AVAILABILITY
            </span>
            <h4 className="font-heading font-bold text-white text-lg">
              Open to New Opportunities
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 font-mono text-xs text-slate-300">
              {profileData.availability.map((m) => (
                <span key={m} className="px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 font-semibold text-blue-300">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onNavigateContact}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold whitespace-nowrap transition-all border border-blue-400/30 shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
