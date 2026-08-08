import React from 'react';
import { ExternalLink, Code2, Github, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';
import { Project } from '../../types/project';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';

interface ProjectCardProps {
  project: Project;
  onOpenCode: (project: Project) => void;
  onOpenLive: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
  onSelectTechnology?: (tech: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCode,
  onOpenLive,
  onOpenDetails,
  onSelectTechnology
}) => {
  const statusVariants = {
    'In Progress': 'amber',
    'Completed': 'green',
    'Planned': 'purple',
    'Deployed': 'blue',
    'Prototype': 'amber',
    'Concept': 'purple'
  } as const;

  return (
    <GlassCard className="flex flex-col justify-between h-full group hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
      
      <div>
        {/* Top Image Frame & Category Overlay */}
        <div 
          onClick={() => onOpenDetails(project)}
          className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-900 border border-slate-800 cursor-pointer"
        >
          <img
            src={project.images[0] || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200'}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <Badge variant="blue" size="sm">
                {project.category}
              </Badge>
              <Badge variant={statusVariants[project.status] || 'blue'} size="sm">
                {project.status}
              </Badge>
            </div>
            <span className="font-mono text-[10px] text-slate-300 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-slate-800">
              #{project.id}
            </span>
          </div>

          {/* Bottom Trust Badge */}
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{project.trustLabel}</span>
          </div>
        </div>

        {/* Project Title */}
        <h3 
          onClick={() => onOpenDetails(project)}
          className="text-lg font-heading font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer mb-2 line-clamp-1"
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed font-normal">
          {project.description}
        </p>

        {/* Technology Badges (Clickable to filter) */}
        <div className="flex flex-wrap gap-1 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <button
              key={tech}
              onClick={() => onSelectTechnology && onSelectTechnology(tech)}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:text-blue-300 text-slate-400 text-[11px] font-mono transition-colors"
              title={`Filter projects by ${tech}`}
            >
              {tech}
            </button>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-500 text-[11px] font-mono">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Recruiter / Client / Developer Action Buttons */}
      <div className="pt-3.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onOpenCode(project)}
            className="px-2.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors"
            title="Browse Source Code in Portfolio"
          >
            <Code2 className="w-3 h-3" />
            <span>CODE</span>
          </button>

          <button
            onClick={() => onOpenLive(project)}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-medium flex items-center gap-1 transition-colors"
            title="Launch Live Preview"
          >
            <ExternalLink className="w-3 h-3" />
            <span>LIVE</span>
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
              title="Open GitHub Repo"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          ) : null}
        </div>

        <button
          onClick={() => onOpenDetails(project)}
          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors"
          title="View Full Case Study"
        >
          <span>VIEW</span>
          <ArrowRight className="w-3 h-3" />
        </button>

      </div>

    </GlassCard>
  );
};
