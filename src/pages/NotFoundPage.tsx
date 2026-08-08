import React from 'react';
import { Compass, Home, Briefcase, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';

interface NotFoundPageProps {
  onBackHome: () => void;
  onNavigateProjects: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  onBackHome,
  onNavigateProjects
}) => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
      <GlassCard className="max-w-xl w-full p-8 sm:p-12 text-center space-y-8 bg-slate-950/90 border-slate-800 shadow-2xl">
        
        {/* Visual Badge */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-xl shadow-blue-600/10">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <div className="space-y-3">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block">
            404 — ROUTE NOT FOUND
          </span>
          
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Lost in the stack?
          </h1>

          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            This route doesn't exist or has been moved. Explore featured projects or return to the portfolio overview.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onBackHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>BACK HOME</span>
          </button>

          <button
            onClick={onNavigateProjects}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
          >
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>VIEW PROJECTS</span>
          </button>
        </div>

      </GlassCard>
    </div>
  );
};
