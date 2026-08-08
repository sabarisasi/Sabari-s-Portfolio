import React, { useState, useMemo } from 'react';
import { FolderGit2, Sparkles, Code2, ExternalLink, Layers } from 'lucide-react';
import { Project, AudiencePerspective } from '../../types/project';
import { ProjectCard } from './ProjectCard';
import { FeaturedProject } from './FeaturedProject';
import { ProjectFilters } from './ProjectFilters';

interface ProjectGridProps {
  projects: Project[];
  onOpenCode: (project: Project) => void;
  onOpenLive: (project: Project) => void;
  onOpenDetails: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onOpenCode,
  onOpenLive,
  onOpenDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedTech, setSelectedTech] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'az' | 'advanced'>('featured');
  const [audience, setAudience] = useState<AudiencePerspective>('RECRUITER');

  // Extract all unique technologies from project dataset
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, [projects]);

  // Featured Project (prefer AI Health Companion or first featured project)
  const featuredProject = useMemo(() => {
    return projects.find((p) => p.slug === 'ai-health-companion') || projects.find((p) => p.featured) || projects[0];
  }, [projects]);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category match
      const matchesCategory =
        selectedCategory.toUpperCase() === 'ALL' ||
        p.category.toUpperCase() === selectedCategory.toUpperCase();

      // Status match
      const matchesStatus =
        selectedStatus.toUpperCase() === 'ALL' ||
        p.status.toUpperCase() === selectedStatus.toUpperCase();

      // Tech match
      const matchesTech =
        !selectedTech ||
        p.technologies.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      // Search query match across title, description, category, tech, features
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query)) ||
        p.features.some((f) => f.toLowerCase().includes(query));

      return matchesCategory && matchesStatus && matchesTech && matchesQuery;
    });
  }, [projects, selectedCategory, selectedStatus, selectedTech, searchQuery]);

  // Sort logic
  const sortedProjects = useMemo(() => {
    const list = [...filteredProjects];
    if (sortBy === 'featured') {
      return list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    if (sortBy === 'az') {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortBy === 'advanced') {
      const difficultyMap = { Beginner: 1, Intermediate: 2, Advanced: 3, Enterprise: 4 };
      return list.sort((a, b) => difficultyMap[b.difficulty] - difficultyMap[a.difficulty]);
    }
    // newest / default
    return list;
  }, [filteredProjects, sortBy]);

  const hasActiveFilters = Boolean(
    selectedCategory !== 'ALL' ||
    selectedStatus !== 'ALL' ||
    selectedTech !== '' ||
    searchQuery !== ''
  );

  const handleClearFilters = () => {
    setSelectedCategory('ALL');
    setSelectedStatus('ALL');
    setSelectedTech('');
    setSearchQuery('');
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              04 / PROJECTS
            </span>
            <span className="text-xs font-mono text-slate-500">
              DEV BY SABARI M ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Real ideas. Working products.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            Explore websites, applications, AI products and business software built through AI-assisted, no-code and modern development workflows.
          </p>
        </div>

        {/* Featured Project Banner */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onOpenCode={onOpenCode}
            onOpenLive={onOpenLive}
            onOpenDetails={onOpenDetails}
          />
        )}

        {/* Filter Bar */}
        <ProjectFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          selectedTech={selectedTech}
          onTechChange={setSelectedTech}
          sortBy={sortBy}
          onSortChange={setSortBy}
          audience={audience}
          onAudienceChange={setAudience}
          allTechnologies={allTechnologies}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Audience Perspective Hint Bar */}
        <div className="mb-6 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>
            {audience === 'RECRUITER' && '🎯 Recruiter View: Prioritizing business outcome, live demos, and technical skills.'}
            {audience === 'CLIENT' && '💼 Client View: Prioritizing problem solution, functional scope, and delivery quality.'}
            {audience === 'DEVELOPER' && '⚡ Developer View: Prioritizing system architecture, tech stack, and source code.'}
          </span>
          <span className="text-blue-400 font-bold hidden sm:inline">
            Showing {sortedProjects.length} of {projects.length} Projects
          </span>
        </div>

        {/* Projects Cards Grid */}
        {sortedProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCode={onOpenCode}
                onOpenLive={onOpenLive}
                onOpenDetails={onOpenDetails}
                onSelectTechnology={(tech) => setSelectedTech(tech)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800 space-y-4">
            <p className="text-slate-400 text-sm font-mono">
              No projects found matching the selected search or filter criteria.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
