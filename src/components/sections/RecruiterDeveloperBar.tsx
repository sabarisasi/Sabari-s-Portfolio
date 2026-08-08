import React, { useState } from 'react';
import { 
  UserCheck, Code2, Briefcase, FileText, Github, Send, Sparkles, 
  CheckCircle2, ArrowRight, Compass, ShieldCheck, Download, Award, GraduationCap, Building2, Terminal
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { PortfolioMode, HIRING_ROLES_DATA } from '../../types/portfolioMode';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';

interface RecruiterDeveloperBarProps {
  mode: PortfolioMode;
  onModeChange: (mode: PortfolioMode) => void;
  onNavigate: (sectionId: string) => void;
  onOpenProjectBySlug?: (slug: string) => void;
}

export const RecruiterDeveloperBar: React.FC<RecruiterDeveloperBarProps> = ({
  mode,
  onModeChange,
  onNavigate,
  onOpenProjectBySlug
}) => {
  const [selectedHiringRole, setSelectedHiringRole] = useState<string>('ai-developer');

  const activeHiringRole = HIRING_ROLES_DATA.find((r) => r.id === selectedHiringRole) || HIRING_ROLES_DATA[0];

  return (
    <div className="space-y-6">
      
      {/* GLOBAL PERSISTENT MODE SWITCHER BAR */}
      <GlassCard className="p-3 sm:p-4 border-blue-500/30 bg-slate-950/90 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
            {mode === 'RECRUITER' && <UserCheck className="w-5 h-5 text-blue-400" />}
            {mode === 'DEVELOPER' && <Code2 className="w-5 h-5 text-purple-400" />}
            {mode === 'STANDARD' && <Sparkles className="w-5 h-5 text-emerald-400" />}
          </div>
          <div>
            <span className="text-xs font-mono text-slate-400 font-bold uppercase block">PORTFOLIO PERSPECTIVE</span>
            <span className="text-sm font-heading font-bold text-white">
              {mode === 'RECRUITER' && 'Recruiter & Hiring Manager Mode'}
              {mode === 'DEVELOPER' && 'Technical & Architecture Developer Mode'}
              {mode === 'STANDARD' && 'Standard Portfolio Ecosystem'}
            </span>
          </div>
        </div>

        {/* Mode Toggle Buttons */}
        <div className="flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
          <button
            onClick={() => onModeChange('STANDARD')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold ${
              mode === 'STANDARD'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            STANDARD
          </button>
          <button
            onClick={() => onModeChange('RECRUITER')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold flex items-center gap-1.5 ${
              mode === 'RECRUITER'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>RECRUITER</span>
          </button>
          <button
            onClick={() => onModeChange('DEVELOPER')}
            className={`px-3 py-1.5 rounded-lg transition-all font-semibold flex items-center gap-1.5 ${
              mode === 'DEVELOPER'
                ? 'bg-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>DEVELOPER</span>
          </button>
        </div>
      </GlassCard>

      {/* 1. RECRUITER MODE EXPANDED PANELS */}
      {mode === 'RECRUITER' && (
        <GlassCard className="p-6 sm:p-8 space-y-8 border-blue-500/40 bg-gradient-to-br from-blue-950/20 via-slate-900 to-slate-950">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
            <div>
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">
                RECRUITER DASHBOARD
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">Recruiter View</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Everything you need to evaluate my profile, experience, credentials and development work in one scannable place.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate('resume')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-blue-600/20 transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW RESUME</span>
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>VIEW PROJECTS</span>
              </button>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>GITHUB</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>CONTACT ME</span>
              </button>
            </div>
          </div>

          {/* Recruiter Candidate Snapshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">CURRENT ROLE</span>
              <p className="font-bold text-white text-xs sm:text-sm">{profileData.currentRole}</p>
              <p className="text-[11px] text-slate-400">High operational precision & compliance</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">EDUCATION</span>
              <p className="font-bold text-white text-xs sm:text-sm">BCA — 88% Aggregate</p>
              <p className="text-[11px] text-slate-400">Periyar University (2019 – 2022)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">DEVELOPMENT FOCUS</span>
              <p className="font-bold text-white text-xs sm:text-sm">AI-Assisted & Full-Stack Web</p>
              <p className="text-[11px] text-slate-400">React, TypeScript, Supabase, Gemini</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase">AVAILABILITY</span>
              <p className="font-bold text-emerald-400 text-xs sm:text-sm">Full-Time / Freelance / Contract</p>
              <p className="text-[11px] text-slate-400">Immediate deployment capability</p>
            </div>
          </div>

          {/* Interactive Skill Match: "What are you hiring for?" */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-400" />
                <span>What are you hiring for?</span>
              </h4>
              <span className="text-xs font-mono text-slate-400">Select a role target to highlight relevant skills & builds</span>
            </div>

            {/* Role Selectors */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {HIRING_ROLES_DATA.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedHiringRole(role.id)}
                  className={`px-3.5 py-2 rounded-xl border transition-all font-semibold ${
                    selectedHiringRole === role.id
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* Matching Role Summary Card */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-blue-500/30 space-y-4">
              <p className="text-xs sm:text-sm text-slate-200">{activeHiringRole.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block mb-1">KEY TECHNICAL SKILLS</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeHiringRole.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block mb-1">MATCHING PORTFOLIO BUILDS</span>
                  <div className="flex flex-wrap gap-2">
                    {activeHiringRole.projectSlugs.map((slug) => {
                      const proj = projectsData.find(p => p.slug === slug);
                      return (
                        <button
                          key={slug}
                          onClick={() => onOpenProjectBySlug && onOpenProjectBySlug(slug)}
                          className="px-3 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-mono flex items-center gap-1 transition-colors"
                        >
                          <span>{proj?.title || slug}</span>
                          <ArrowRight className="w-3 h-3 text-blue-400" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </GlassCard>
      )}

      {/* 2. DEVELOPER MODE EXPANDED PANELS */}
      {mode === 'DEVELOPER' && (
        <GlassCard className="p-6 sm:p-8 space-y-6 border-purple-500/40 bg-gradient-to-br from-purple-950/20 via-slate-900 to-slate-950">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="font-mono text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">
                DEVELOPER DEEP DIVE
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-white">Technical Architecture & Stack Focus</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Prioritizing system architecture, code quality, TypeScript type contracts, database rules, and LLM APIs.
              </p>
            </div>

            <a
              href={profileData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-purple-600/20 transition-all shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>INSPECT GITHUB CODE</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-purple-400 font-bold block">FRONTEND ARCHITECTURE</span>
              <p className="text-slate-300 font-sans text-xs">React 19, TypeScript, Tailwind CSS, Vite, Framer Motion</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-blue-400 font-bold block">BACKEND & DATA PERSISTENCE</span>
              <p className="text-slate-300 font-sans text-xs">Supabase PostgreSQL, RLS policies, Node.js Express Server Proxies</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-emerald-400 font-bold block">AI API WORKFLOW</span>
              <p className="text-slate-300 font-sans text-xs">Gemini API, Claude API, System Prompts, Structured Output Schemas</p>
            </div>
          </div>
        </GlassCard>
      )}

    </div>
  );
};
