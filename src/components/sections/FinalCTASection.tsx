import React from 'react';
import { Sparkles, ArrowRight, Github, Send, Briefcase, Zap, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

interface FinalCTASectionProps {
  onNavigateContact: () => void;
  onNavigateProjects: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onNavigateContact,
  onNavigateProjects
}) => {
  const visualSequence = [
    { label: 'YOUR IDEA', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { label: 'DISCOVERY', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
    { label: 'AI + NO-CODE', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { label: 'BUILD', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' },
    { label: 'TEST', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { label: 'GITHUB', color: 'text-slate-300 border-slate-700 bg-slate-900' },
    { label: 'LAUNCH', color: 'text-emerald-300 border-emerald-400 bg-emerald-600' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <GlassCard className="p-8 sm:p-12 border-blue-500/40 bg-gradient-to-br from-blue-950/40 via-slate-950 to-purple-950/40 shadow-2xl relative space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>LET'S BUILD SOMETHING GREAT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight">
              Have an idea?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Bring the idea. We'll find the fastest reliable path from concept to working product.
            </p>

            {/* Engagement Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 font-mono text-xs font-bold">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400">FULL-TIME</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-purple-400">PART-TIME</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">FREELANCE</span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400">CONTRACT</span>
            </div>
          </div>

          {/* IDEA → PRODUCT VISUAL SEQUENCE */}
          <div className="space-y-3 pt-4 border-t border-slate-800/80">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block text-center">
              CONCEPT TO DEPLOYMENT PIPELINE
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-xs font-bold">
              {visualSequence.map((seq, idx) => (
                <React.Fragment key={seq.label}>
                  <div className={`px-3.5 py-2 rounded-xl border ${seq.color} shadow-md transition-transform hover:scale-105`}>
                    {seq.label}
                  </div>
                  {idx < visualSequence.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-600 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onNavigateContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-sm font-extrabold flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </button>

            <button
              onClick={onNavigateProjects}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>EXPLORE ALL PROJECTS</span>
            </button>
          </div>

        </GlassCard>

      </div>
    </section>
  );
};
