import React from 'react';
import { Sparkles, ExternalLink, Code2, Github, ArrowRight, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { Project } from '../../types/project';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

interface FeaturedProjectProps {
  project: Project;
  onOpenCode: (project: Project) => void;
  onOpenLive: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onOpenCode,
  onOpenLive,
  onOpenDetails
}) => {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
          SPOTLIGHT FEATURED BUILD
        </span>
      </div>

      <GlassCard className="border-blue-500/40 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-blue-950/20 p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
        
        {/* Subtle Ambient Background Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Asymmetric Left Side: Text Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-slate-400 bg-slate-900/90 border border-slate-800 px-2.5 py-1 rounded-md">
                PROJECT #{project.id}
              </span>
              <Badge variant="blue" size="md">
                {project.category}
              </Badge>
              <Badge variant={project.status === 'Completed' ? 'green' : 'amber'} size="md">
                {project.status}
              </Badge>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {project.trustLabel}
              </span>
            </div>

            <div>
              <h3 
                onClick={() => onOpenDetails(project)}
                className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white hover:text-blue-400 cursor-pointer transition-colors leading-tight"
              >
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Product Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {project.features.slice(0, 4).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Pills */}
            <div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-200 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenDetails(project)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                EXPLORE CASE STUDY
              </Button>

              <button
                onClick={() => onOpenCode(project)}
                className="px-4 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold flex items-center gap-2 transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>IN-PORTFOLIO CODE</span>
              </button>

              <button
                onClick={() => onOpenLive(project)}
                className="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold flex items-center gap-2 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE PREVIEW</span>
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono flex items-center gap-2 transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline">GITHUB</span>
                </a>
              )}
            </div>

          </div>

          {/* Asymmetric Right Side: Hero Image Showcase */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => onOpenDetails(project)}
              className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 group/img cursor-pointer shadow-2xl"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 text-blue-400 font-semibold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{project.architecture.overview.slice(0, 45)}...</span>
                </span>
                <span className="text-slate-400 group-hover/img:text-white transition-colors">
                  View Architecture →
                </span>
              </div>
            </div>
          </div>

        </div>

      </GlassCard>
    </div>
  );
};
