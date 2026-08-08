import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, ExternalLink, Code2, Github, CheckCircle2, ShieldAlert, Calendar, 
  Layers, Cpu, ShieldCheck, Sparkles, Workflow, Monitor, Smartphone, Tablet,
  ChevronLeft, ChevronRight, X, Copy, Check, Download, AlertTriangle, MessageSquare,
  Zap, ArrowRight, UserCheck, Eye, Compass
} from 'lucide-react';
import { Project } from '../../types/project';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

interface ProjectDetailsPageProps {
  project: Project;
  allProjects: Project[];
  onBack: () => void;
  onOpenCode: (project: Project) => void;
  onOpenLive: (project: Project) => void;
  onSelectProject: (project: Project) => void;
  onNavigateContact: () => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  project,
  allProjects,
  onBack,
  onOpenCode,
  onOpenLive,
  onSelectProject,
  onNavigateContact
}) => {
  // Screenshot Lightbox State
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Architecture Interactive State
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number | null>(0);

  // Status variants mapping
  const statusVariants = {
    'In Progress': 'amber',
    'Completed': 'green',
    'Planned': 'purple',
    'Deployed': 'blue',
    'Prototype': 'amber',
    'Concept': 'purple'
  } as const;

  // Development workflow steps
  const workflowSteps = [
    { id: '01', title: 'Understand', desc: 'Define problem, target users, and key functional constraints' },
    { id: '02', title: 'Research', desc: 'Evaluate existing solutions, APIs, and data models' },
    { id: '03', title: 'Design', desc: 'Craft high-density user interfaces with accessible typography' },
    { id: '04', title: 'AI / No-Code Build', desc: 'Accelerate core product features with modern web tools and LLM APIs' },
    { id: '05', title: 'Integration', desc: 'Connect state handlers, databases, and third-party services' },
    { id: '06', title: 'Testing', desc: 'Verify error states, mobile viewports, and edge cases' },
    { id: '07', title: 'GitHub', desc: 'Commit clean structured source code with clear documentation' },
    { id: '08', title: 'Deployment', desc: 'Deploy production build to Cloud infrastructure' }
  ];

  // Calculate Next and Previous Projects
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  // Filter Related Projects (matched by category or technology, excluding current)
  const relatedProjects = allProjects
    .filter((p) => p.slug !== project.slug)
    .filter((p) => p.category === project.category || p.technologies.some((t) => project.technologies.includes(t)))
    .slice(0, 3);

  // Keyboard navigation for screenshot lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : project.images.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < project.images.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, project.images.length]);

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-6 animate-in fade-in duration-300">
      
      {/* 1. TOP NAVIGATION & BREADCRUMB */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
            <span>Back</span>
          </button>

          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-slate-400">
            <button onClick={onBack} className="hover:text-white transition-colors">Home</button>
            <span>/</span>
            <button onClick={onBack} className="hover:text-white transition-colors">Projects</button>
            <span>/</span>
            <span className="text-blue-400 font-bold truncate max-w-[200px]">{project.title}</span>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="blue" size="sm">{project.category}</Badge>
          <Badge variant={statusVariants[project.status] || 'blue'} size="sm">{project.status}</Badge>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            {project.trustLabel}
          </span>
        </div>
      </div>

      {/* 2. PROJECT HERO HEADER */}
      <GlassCard className="border-blue-500/40 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/20 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>PROJECT #{project.id} • DEV BY SABARI M ECOSYSTEM</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/80">
            <Button
              variant="primary"
              size="md"
              icon={<Code2 className="w-4 h-4" />}
              onClick={() => onOpenCode(project)}
            >
              IN-PORTFOLIO CODE VIEWER
            </Button>

            <Button
              variant="outline"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={() => onOpenLive(project)}
            >
              LIVE PREVIEW
            </Button>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Verify on GitHub</span>
              </a>
            ) : (
              <span className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-500 border border-slate-800 text-xs font-mono">
                Repository Coming Soon
              </span>
            )}
          </div>
        </div>
      </GlassCard>

      {/* 3. PROJECT OVERVIEW & QUICK FACTS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Long Description */}
        <div className="lg:col-span-8 space-y-6">
          <GlassCard className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-400" />
              <span>Project Overview & Scope</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal whitespace-pre-line">
              {project.longDescription}
            </p>
          </GlassCard>

          {/* Key Features Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Key Product Capabilities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/30 transition-colors flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">{feature}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quick Facts Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <GlassCard className="space-y-4">
            <h3 className="font-heading font-bold text-white text-base uppercase tracking-wider text-slate-400 font-mono">
              Quick Facts
            </h3>

            <div className="space-y-3 font-mono text-xs text-slate-300 divide-y divide-slate-800/60">
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Category:</span>
                <span className="text-blue-400 font-semibold">{project.category}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Status:</span>
                <span className="text-amber-400 font-semibold">{project.status}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Trust Label:</span>
                <span className="text-emerald-400 font-semibold">{project.trustLabel}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Complexity:</span>
                <span className="text-purple-400 font-semibold">{project.difficulty}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Timeline:</span>
                <span className="text-slate-200">{project.timeline}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Source Available:</span>
                <span className={project.sourceAvailable ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {project.sourceAvailable ? 'YES (In Portfolio)' : 'In Pipeline'}
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Quick Code Button */}
          <GlassCard className="space-y-3 bg-blue-950/20 border-blue-500/30">
            <h3 className="font-heading font-bold text-white text-sm">Explore Source Tree</h3>
            <p className="text-xs text-slate-300">
              Inspect application logic, schemas, and README files directly inside this portfolio.
            </p>
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              icon={<Code2 className="w-4 h-4" />}
              onClick={() => onOpenCode(project)}
            >
              Launch Code Viewer
            </Button>
          </GlassCard>
        </div>

      </div>

      {/* 4. TECHNOLOGY STACK WITH ROLES */}
      <GlassCard className="space-y-6">
        <div>
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span>Technology Stack & Architecture Roles</span>
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Technologies integrated into this build with their specific role in the application architecture.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {project.technologies.map((tech) => {
            const role = project.techRoles?.[tech] || 'Core Architecture Component';
            return (
              <div
                key={tech}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 hover:border-slate-700 transition-colors"
              >
                <span className="font-mono text-xs font-bold text-blue-300 block">{tech}</span>
                <span className="text-[11px] text-slate-400 block">{role}</span>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* 5. SCREENSHOT GALLERY WITH LIGHTBOX MODAL */}
      {project.images && project.images.length > 0 && (
        <GlassCard className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-400" />
                <span>Screenshot Gallery</span>
              </h2>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Click any screenshot to view in full resolution lightbox mode.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {project.images.length} Image{project.images.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer hover:border-blue-500/50 transition-all"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white font-mono text-xs border border-slate-700 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Fullscreen</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* LIGHTBOX MODAL */}
      {activeImageIndex !== null && project.images[activeImageIndex] && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full flex flex-col items-center">
            
            {/* Top Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute -top-12 right-0 p-2 text-slate-400 hover:text-white transition-colors"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 max-h-[75vh] flex items-center justify-center">
              <img
                src={project.images[activeImageIndex]}
                alt={`Screenshot ${activeImageIndex + 1}`}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Controls bar */}
            <div className="flex items-center justify-between w-full mt-4 text-xs font-mono text-slate-400">
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev > 0 ? prev - 1 : project.images.length - 1
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span>
                Image {activeImageIndex + 1} of {project.images.length}
              </span>

              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev !== null && prev < project.images.length - 1 ? prev + 1 : 0
                  )
                }
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 6. PROBLEM & SOLUTION SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Problem */}
        <GlassCard className="space-y-3 border-rose-500/30">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-heading font-bold text-white text-lg">THE PROBLEM</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem ||
              `${project.title} addresses critical user friction in the ${project.category} domain. Unstructured manual workflows often cause delay, error, and difficulty in tracking key metrics across personal and professional operations.`}
          </p>
        </GlassCard>

        {/* Solution */}
        <GlassCard className="space-y-3 border-emerald-500/30">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="font-heading font-bold text-white text-lg">THE SOLUTION</h3>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.solution ||
              `By combining clean user-centered design with modern technology stack components (${project.technologies.slice(0, 3).join(', ')}), ${project.title} provides a streamlined, accessible digital workspace that simplifies complex operations.`}
          </p>
        </GlassCard>

      </div>

      {/* 7. INTERACTIVE ARCHITECTURE DIAGRAM */}
      <GlassCard className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-blue-400">
            <Layers className="w-5 h-5" />
            <h2 className="text-xl font-heading font-bold text-white">System Architecture & Node Topology</h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {project.architecture.overview} Click any node to inspect technology details.
          </p>
        </div>

        {/* Architecture Node Visualizer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.architecture.nodes.map((node, idx) => {
            const isSelected = selectedNodeIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedNodeIndex(idx)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-blue-400 font-bold uppercase">
                    NODE 0{idx + 1}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />}
                </div>
                <h4 className="font-semibold text-white text-sm">{node.title}</h4>
                <p className="text-xs text-slate-300 mt-1.5 leading-snug">{node.description}</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {node.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* 8. DEVELOPMENT WORKFLOW TIMELINE */}
      <GlassCard className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400">
            <Workflow className="w-5 h-5" />
            <h2 className="text-xl font-heading font-bold text-white">Development Process Lifecycle</h2>
          </div>
          <p className="text-xs font-mono text-slate-400 mt-1">
            AI and no-code tools accelerate development, while product decisions, validation, integration and quality control remain core engineering responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {workflowSteps.map((step) => (
            <div
              key={step.id}
              className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400">{step.id}</span>
                <span className="text-[10px] font-mono text-slate-600">STEP</span>
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">{step.title}</h4>
              <p className="text-[11px] text-slate-400 leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* 9. ENGINEERING CHALLENGES & SOLUTIONS */}
      <GlassCard className="space-y-6 border-amber-500/20">
        <div className="flex items-center gap-2 text-amber-400">
          <ShieldAlert className="w-5 h-5" />
          <h2 className="text-xl font-heading font-bold text-white">Engineering Challenges & Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
              CHALLENGES ENCOUNTERED
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              APPLIED SOLUTIONS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.solutions.map((s, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>

      {/* 10. PREVIOUS / NEXT PROJECT NAVIGATION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject && (
          <button
            onClick={() => onSelectProject(prevProject)}
            className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-left transition-all group flex items-center gap-3"
          >
            <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Previous Project</span>
              <span className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors line-clamp-1">
                {prevProject.title}
              </span>
            </div>
          </button>
        )}

        {nextProject && (
          <button
            onClick={() => onSelectProject(nextProject)}
            className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-right transition-all group flex items-center justify-end gap-3"
          >
            <div>
              <span className="text-[10px] font-mono text-slate-500 block uppercase">Next Project</span>
              <span className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
          </button>
        )}
      </div>

      {/* 11. RELATED PROJECTS DISCOVERY */}
      {relatedProjects.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h3 className="text-lg font-heading font-bold text-white">Explore More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProjects.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelectProject(rel)}
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 cursor-pointer transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>{rel.category}</span>
                  <span className="text-amber-400">{rel.status}</span>
                </div>
                <h4 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors line-clamp-1">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{rel.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 12. CONTACT CTA BANNER */}
      <GlassCard className="border-blue-500/40 bg-gradient-to-r from-blue-950/40 via-slate-900 to-slate-950 p-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
          Have an idea like this?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
          Let's turn your idea into a working digital product using modern AI-assisted, no-code, and web workflows.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            icon={<MessageSquare className="w-4 h-4" />}
            onClick={onNavigateContact}
          >
            START A PROJECT
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={onNavigateContact}
          >
            HIRE ME
          </Button>
        </div>
      </GlassCard>

    </div>
  );
};
