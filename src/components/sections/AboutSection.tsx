import React from 'react';
import { User, ShieldCheck, GraduationCap, Award, Cpu, Code2, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';
import { GlassCard } from '../ui/GlassCard';

export const AboutSection: React.FC = () => {
  const threePillars = [
    {
      number: "01",
      title: "THE BANKER",
      subtitle: "Operational Discipline & Precision",
      icon: Building2,
      color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      points: [
        "Unwavering accuracy and compliance discipline from HDFC Bank operations.",
        "Zero-tolerance approach to errors in transaction processing & documentation.",
        "Deep understanding of corporate workflows, auditing, and structured processes."
      ]
    },
    {
      number: "02",
      title: "THE BUILDER",
      subtitle: "Full-Stack Web & Software Engineering",
      icon: Code2,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      points: [
        "Full stack development experience at EDHUNT Infotech and independent products.",
        "Proficient in React, TypeScript, Node.js, Supabase, and responsive web systems.",
        "Architecting clean user interfaces, REST APIs, and database models."
      ]
    },
    {
      number: "03",
      title: "THE AI-ASSISTED DEVELOPER",
      subtitle: "Prompt Engineering & Accelerated Delivery",
      icon: Cpu,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      points: [
        "Leveraging LLM prompt engineering, Claude, Gemini, ChatGPT, and Cursor AI.",
        "Moving from idea to working product 3-5x faster with no-code/low-code tools.",
        "Using AI as a development force multiplier combined with engineering rigor."
      ]
    }
  ];

  const workflowSteps = [
    { num: '01', title: 'UNDERSTAND', desc: 'Identify business problem & user requirements.' },
    { num: '02', title: 'RESEARCH', desc: 'Analyze data models, workflows & UI standards.' },
    { num: '03', title: 'DESIGN', desc: 'Craft clean visual layouts & user journeys.' },
    { num: '04', title: 'AI + NO-CODE', desc: 'Accelerate component & backend scaffolding.' },
    { num: '05', title: 'INTEGRATE', desc: 'Connect REST APIs, Supabase & AI models.' },
    { num: '06', title: 'TEST', desc: 'Validate functionality, responsiveness & edge cases.' },
    { num: '07', title: 'GITHUB', desc: 'Version control, code cleanup & documentation.' },
    { num: '08', title: 'DEPLOY', desc: 'Production launch via Cloud Run, Vercel or Netlify.' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01 / ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Banking precision. Developer mindset.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Combining rigorous operational compliance from banking with full-stack engineering and AI-accelerated development.
          </p>
        </div>

        {/* Top Split: Editorial Bio vs Three Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Editorial Bio & Signature Statement */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="space-y-6">
              
              {/* Large Editorial Statement */}
              <div className="border-b border-slate-800/80 pb-6">
                <p className="text-lg sm:text-xl font-heading font-bold text-white leading-relaxed">
                  "I turn ideas into functional digital products by bridging structured business discipline with modern AI & web technology."
                </p>
              </div>

              {/* Biography Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a Banking Operations Associate at HDFC Bank and a Self-Taught Full-Stack Developer with real-world software engineering experience at EDHUNT Infotech.
                </p>
                <p>
                  In high-volume banking operations, accuracy, compliance, and documentation discipline are paramount. I bring this exact zero-error mindset into web development, state architecture, and API integration.
                </p>
                <p>
                  Over the past years, I have embraced AI-assisted development tools and no-code workflows to accelerate how digital products are conceived, prototyped, and launched.
                </p>
              </div>

              {/* Signature No-Code Statement Box */}
              <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs font-bold uppercase">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>SIGNATURE PHILOSOPHY</span>
                </div>
                <h4 className="font-heading font-bold text-white text-base">
                  "{profileData.noCodeSignatureTitle}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profileData.noCodeSignatureText}
                </p>
              </div>

            </GlassCard>

            {/* Interactive Development Workflow */}
            <GlassCard className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Cpu className="w-4 h-4 text-blue-400" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  MY 8-STEP AI-ASSISTED DEVELOPMENT PIPELINE
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {workflowSteps.map((step) => (
                  <div key={step.num} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/50">
                      {step.num}
                    </span>
                    <div>
                      <h5 className="font-heading font-bold text-white text-xs">{step.title}</h5>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right: Three Pillars & Qualifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Three Pillars */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>THE THREE-PILLAR PROFILE</span>
              </h3>

              {threePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <GlassCard key={pillar.number} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${pillar.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-white text-base">{pillar.title}</h4>
                          <p className="text-xs font-mono text-slate-400">{pillar.subtitle}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-500 font-bold">{pillar.number}</span>
                    </div>

                    <ul className="space-y-1.5 pt-2 text-xs text-slate-300">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                );
              })}
            </div>

            {/* Education & Certifications Summary */}
            <GlassCard className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                  <h4 className="font-heading font-bold text-white text-sm">ACADEMIC FOUNDATION</h4>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50">
                  88% SCORE
                </span>
              </div>

              {profileData.education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <p className="font-bold text-white">{edu.degree}</p>
                  <p className="text-slate-400">{edu.institution}</p>
                  <p className="text-[11px] font-mono text-slate-500">{edu.period}</p>
                </div>
              ))}

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>CERTIFICATIONS</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>

          </div>

        </div>

      </div>
    </section>
  );
};
