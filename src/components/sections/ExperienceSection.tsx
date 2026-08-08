import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, ShieldCheck, Code2, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';

export const ExperienceSection: React.FC = () => {
  const currentBankingRole = experienceData.find(exp => exp.id === 'hdfc-bank');
  const developerRole = experienceData.find(exp => exp.id === 'edhunt-infotech');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 / EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Verified Employment History
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Clear separation of banking operations discipline and software engineering / prompt engineering experience.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-10">
          
          {/* CURRENT BANKING ROLE HEADER BADGE */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>CURRENT PROFESSIONAL ROLE (BANKING)</span>
            </div>

            {currentBankingRole && (
              <GlassCard className="relative overflow-hidden border-l-4 border-l-blue-500">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="blue" size="md">
                        {currentBankingRole.type}
                      </Badge>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-blue-400 font-bold bg-blue-950/60 px-2.5 py-1 rounded border border-blue-800/50">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{currentBankingRole.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{currentBankingRole.location}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white">{currentBankingRole.role}</h3>
                      <p className="text-base font-semibold text-blue-400 flex items-center gap-2 mt-0.5">
                        <Building2 className="w-4 h-4" />
                        <span>{currentBankingRole.company}</span>
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                      {currentBankingRole.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 flex flex-wrap gap-1.5">
                      {currentBankingRole.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Side Box */}
                  <div className="lg:w-80 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shrink-0">
                    <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>OPERATIONAL HIGHLIGHTS</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {currentBankingRole.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </GlassCard>
            )}
          </div>

          {/* DEVELOPER EXPERIENCE ROLE */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>DEVELOPER PROFILE & PROMPT ENGINEERING EXPERIENCE</span>
            </div>

            {developerRole && (
              <GlassCard className="relative overflow-hidden border-l-4 border-l-purple-500">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  
                  <div className="space-y-4 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="purple" size="md">
                        {developerRole.type}
                      </Badge>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-purple-300 font-bold bg-purple-950/60 px-2.5 py-1 rounded border border-purple-800/50">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{developerRole.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{developerRole.location}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white">{developerRole.role}</h3>
                      <p className="text-base font-semibold text-purple-300 flex items-center gap-2 mt-0.5">
                        <Building2 className="w-4 h-4" />
                        <span>{developerRole.company}</span>
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2 text-sm text-slate-300">
                      {developerRole.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 flex flex-wrap gap-1.5">
                      {developerRole.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-purple-300 font-mono text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Side Box */}
                  <div className="lg:w-80 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 shrink-0">
                    <h4 className="font-mono text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>DEVELOPMENT HIGHLIGHTS</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {developerRole.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-400 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </GlassCard>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
