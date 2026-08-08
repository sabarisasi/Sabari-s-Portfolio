import React from 'react';
import { Search, Filter, RotateCcw, UserCheck, Briefcase, Code, Sparkles, X } from 'lucide-react';
import { ProjectCategory, ProjectStatus, AudiencePerspective } from '../../types/project';

interface ProjectFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  selectedTech: string;
  onTechChange: (tech: string) => void;
  sortBy: 'featured' | 'newest' | 'az' | 'advanced';
  onSortChange: (sort: 'featured' | 'newest' | 'az' | 'advanced') => void;
  audience: AudiencePerspective;
  onAudienceChange: (audience: AudiencePerspective) => void;
  allTechnologies: string[];
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  selectedTech,
  onTechChange,
  sortBy,
  onSortChange,
  audience,
  onAudienceChange,
  allTechnologies,
  onClearFilters,
  hasActiveFilters
}) => {
  const categories = [
    'ALL',
    'AI',
    'FINTECH',
    'HEALTHCARE',
    'BUSINESS',
    'SAAS',
    'WEB',
    'MOBILE',
    'AUTOMATION',
    'E-COMMERCE'
  ];

  const statuses = [
    'ALL',
    'COMPLETED',
    'IN PROGRESS',
    'PROTOTYPE',
    'CONCEPT',
    'PLANNED'
  ];

  return (
    <div className="space-y-6 mb-10 glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800/80">
      
      {/* Top Bar: Recruiter / Client / Developer Perspective Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        
        <div className="flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            Show Projects Relevant To:
          </span>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => onAudienceChange('RECRUITER')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
              audience === 'RECRUITER'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter</span>
          </button>

          <button
            onClick={() => onAudienceChange('CLIENT')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
              audience === 'CLIENT'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client</span>
          </button>

          <button
            onClick={() => onAudienceChange('DEVELOPER')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
              audience === 'DEVELOPER'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Developer</span>
          </button>
        </div>

      </div>

      {/* Search Input & Sort Controls */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        
        {/* Search Input */}
        <div className="relative w-full flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search projects by title, technology, feature or keyword..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 font-mono transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <span className="text-xs font-mono text-slate-400">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500/50"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="az">A – Z Alphabetical</option>
            <option value="advanced">Most Advanced</option>
          </select>
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="px-3 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shrink-0"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>
        )}

      </div>

      {/* Category Tabs Strip */}
      <div>
        <span className="text-[11px] font-mono font-bold uppercase text-slate-500 block mb-2">
          Category Filter
        </span>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all whitespace-nowrap ${
                selectedCategory.toUpperCase() === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 border border-blue-400/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'ALL' ? 'All Categories' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Status Filter Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold uppercase text-slate-500 shrink-0">
            Status:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => onStatusChange(st)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all ${
                  selectedStatus.toUpperCase() === st
                    ? 'bg-slate-100 text-slate-950 font-bold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter Chips */}
        {selectedTech && (
          <div className="flex items-center gap-2 bg-blue-950/40 border border-blue-800/50 px-2.5 py-1 rounded-lg">
            <span className="text-xs font-mono text-blue-300">
              Tech Filter: <strong>{selectedTech}</strong>
            </span>
            <button
              onClick={() => onTechChange('')}
              className="text-blue-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Quick Technology Filter Pills */}
      <div>
        <span className="text-[10px] font-mono text-slate-500 block mb-1.5">
          Filter by Technology:
        </span>
        <div className="flex flex-wrap gap-1">
          {allTechnologies.slice(0, 12).map((tech) => (
            <button
              key={tech}
              onClick={() => onTechChange(selectedTech === tech ? '' : tech)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                selectedTech === tech
                  ? 'bg-blue-500 text-white font-bold'
                  : 'bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
