import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Command, Code2, UserCheck, Sparkles, FolderGit2, 
  FileText, Send, Briefcase, User, ExternalLink, X, ArrowRight, Wrench, ShieldCheck
} from 'lucide-react';
import { PortfolioMode } from '../../types/portfolioMode';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';
import { skillCategoriesData } from '../../data/skills';
import { servicesData } from '../../data/services';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onModeChange: (mode: PortfolioMode) => void;
  onOpenProjectBySlug?: (slug: string) => void;
}

export interface SearchResultItem {
  id: string;
  category: 'PROJECTS' | 'SKILLS' | 'SERVICES' | 'EXPERIENCE' | 'AI LAB' | 'NAVIGATION' | 'ACTIONS';
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  action: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onModeChange,
  onOpenProjectBySlug
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global hotkey listener (CTRL+K / CMD+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build Normalized Search Items

  // 1. Pages & Navigation
  const navigationItems: SearchResultItem[] = [
    {
      id: 'nav-home',
      category: 'NAVIGATION',
      title: 'Home',
      subtitle: 'Main ecosystem landing overview',
      icon: Code2,
      action: () => { onNavigate('home'); onClose(); }
    },
    {
      id: 'nav-about',
      category: 'NAVIGATION',
      title: 'About Sabari M',
      subtitle: 'Background, transition from banking to AI developer',
      icon: User,
      action: () => { onNavigate('about'); onClose(); }
    },
    {
      id: 'nav-experience',
      category: 'NAVIGATION',
      title: 'Experience & Career',
      subtitle: 'HDFC Bank, freelance development & project timelines',
      icon: Briefcase,
      action: () => { onNavigate('experience'); onClose(); }
    },
    {
      id: 'nav-skills',
      category: 'NAVIGATION',
      title: 'Skills & Tech Stack',
      subtitle: 'Frontend, backend, AI tools, low-code frameworks',
      icon: Sparkles,
      action: () => { onNavigate('skills'); onClose(); }
    },
    {
      id: 'nav-projects',
      category: 'NAVIGATION',
      title: 'Projects Portfolio',
      subtitle: 'All deployed working applications and case studies',
      icon: FolderGit2,
      action: () => { onNavigate('projects'); onClose(); }
    },
    {
      id: 'nav-ai-lab',
      category: 'NAVIGATION',
      title: 'AI Lab & Prompt Studio',
      subtitle: 'Interactive AI tools, prompt templates & agent workflows',
      icon: Sparkles,
      action: () => { onNavigate('ai-lab'); onClose(); }
    },
    {
      id: 'nav-github',
      category: 'NAVIGATION',
      title: 'GitHub Integration',
      subtitle: 'Live repository metrics and open-source projects',
      icon: FolderGit2,
      action: () => { onNavigate('github'); onClose(); }
    },
    {
      id: 'nav-resume',
      category: 'NAVIGATION',
      title: 'Official Resume',
      subtitle: 'Printable credentials, role history & education',
      icon: FileText,
      action: () => { onNavigate('resume'); onClose(); }
    },
    {
      id: 'nav-services',
      category: 'NAVIGATION',
      title: 'Services Offered',
      subtitle: 'Web apps, AI development, automation & freelance',
      icon: Wrench,
      action: () => { onNavigate('services'); onClose(); }
    },
    {
      id: 'nav-contact',
      category: 'NAVIGATION',
      title: 'Contact & Hire Me',
      subtitle: 'Send project inquiry or email directly',
      icon: Send,
      action: () => { onNavigate('contact'); onClose(); }
    }
  ];

  // 2. Projects
  const projectItems: SearchResultItem[] = projectsData.map((p) => ({
    id: `proj-${p.id}`,
    category: 'PROJECTS',
    title: p.title,
    subtitle: `${p.category} • Tech: ${p.technologies.slice(0, 3).join(', ')}`,
    icon: FolderGit2,
    action: () => {
      if (onOpenProjectBySlug) onOpenProjectBySlug(p.slug);
      onClose();
    }
  }));

  // 3. Skills
  const skillItems: SearchResultItem[] = skillCategoriesData.flatMap((cat) =>
    cat.skills.map((skill) => ({
      id: `skill-${skill.name}`,
      category: 'SKILLS',
      title: skill.name,
      subtitle: `${cat.categoryName} • ${skill.tier} ${skill.description ? `— ${skill.description}` : ''}`,
      icon: Sparkles,
      action: () => {
        onNavigate('skills');
        onClose();
      }
    }))
  );

  // 4. Services
  const serviceItems: SearchResultItem[] = servicesData.map((svc) => ({
    id: `svc-${svc.id}`,
    category: 'SERVICES',
    title: svc.title,
    subtitle: `${svc.deliverables.slice(0, 2).join(', ')} • Timeline: ${svc.typicalTimeline}`,
    icon: Wrench,
    action: () => {
      onNavigate('services');
      onClose();
    }
  }));

  // 5. Actions & Modes
  const actionItems: SearchResultItem[] = [
    {
      id: 'act-recruiter-mode',
      category: 'ACTIONS',
      title: 'Recruiter Mode',
      subtitle: 'Highlight candidate background, skills & core metrics',
      icon: UserCheck,
      action: () => {
        onModeChange('RECRUITER');
        onClose();
      }
    },
    {
      id: 'act-developer-mode',
      category: 'ACTIONS',
      title: 'Developer Mode',
      subtitle: 'Emphasize source code, APIs & system architecture',
      icon: Code2,
      action: () => {
        onModeChange('DEVELOPER');
        onClose();
      }
    },
    {
      id: 'act-github-ext',
      category: 'ACTIONS',
      title: 'Open External GitHub Profile',
      subtitle: profileData.socialLinks.github,
      icon: ExternalLink,
      action: () => {
        window.open(profileData.socialLinks.github, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin-ext',
      category: 'ACTIONS',
      title: 'Open External LinkedIn Profile',
      subtitle: profileData.socialLinks.linkedin,
      icon: ExternalLink,
      action: () => {
        window.open(profileData.socialLinks.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const allItems: SearchResultItem[] = [
    ...navigationItems,
    ...projectItems,
    ...skillItems,
    ...serviceItems,
    ...actionItems
  ];

  const filteredItems = allItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[110] bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-20 px-4 animate-in fade-in duration-200">
      
      <div 
        className="w-full max-w-2xl bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] relative"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950/90">
          <Search className="w-5 h-5 text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, skills, technologies, services... (Press Esc)"
            className="flex-1 bg-transparent text-slate-100 font-mono text-xs sm:text-sm placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => { setQuery(''); setSelectedIndex(0); }}
              className="text-xs text-slate-400 hover:text-white font-mono px-2 py-1 rounded bg-slate-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 font-mono text-xs">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const IconComp = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full p-3 rounded-xl flex items-center justify-between text-left transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-300 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-blue-500/30' : 'bg-slate-800 text-blue-400'}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold truncate">{item.title}</p>
                      {item.subtitle && (
                        <p className={`text-[10px] sm:text-[11px] truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded uppercase font-semibold ${
                      isSelected ? 'bg-blue-700 text-white' : 'bg-slate-950 text-slate-500'
                    }`}>
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </button>
              );
            })
          ) : (
            <div className="p-10 text-center space-y-2">
              <p className="text-slate-400 font-mono text-xs font-bold">No results found.</p>
              <p className="text-slate-500 font-mono text-xs">Try searching for "React", "AI", "Banking", or "Services".</p>
              <button
                onClick={() => setQuery('')}
                className="mt-2 px-4 py-1.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold hover:bg-blue-600 hover:text-white transition-all"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Footer Shortcuts Bar */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">↑↓</kbd> Navigate</span>
            <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">↵</kbd> Select</span>
            <span><kbd className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">Esc</kbd> Close</span>
          </div>
          <span className="hidden sm:inline">DEV BY SABARI M GLOBAL SEARCH</span>
        </div>

      </div>

    </div>
  );
};
