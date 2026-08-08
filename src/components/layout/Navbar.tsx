import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Briefcase, User, Sparkles, FolderGit2, FileText, Send, Github, Search, Wrench } from 'lucide-react';
import { AvailabilityBadge } from '../hero/AvailabilityBadge';
import { profileData } from '../../data/profile';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (sectionId: string) => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection = 'home',
  onNavigate,
  onOpenCommandPalette
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'ai-lab', label: 'AI Lab', icon: Sparkles },
    { id: 'github', label: 'GitHub', icon: Github },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: Send }
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2.5 glass-panel border-b border-slate-800/80 shadow-2xl shadow-slate-950/80' : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 group text-left focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all overflow-hidden">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-blue-400 font-heading font-extrabold text-lg group-hover:text-white transition-colors overflow-hidden">
                {profileData.avatarUrl ? (
                  <img
                    src={profileData.avatarUrl}
                    alt="Sabari M"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/profile.svg";
                    }}
                  />
                ) : (
                  'S'
                )}
              </div>
            </div>
            <div>
              <span className="font-heading font-extrabold text-base md:text-lg tracking-tight text-slate-100 dark:text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
                DEV BY SABARI M
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 glass-panel px-3 py-1 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-inner font-semibold' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <link.icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Search & Hire Me CTA */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenCommandPalette}
              className="px-3 py-1.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              title="Search Portfolio (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xl:inline">SEARCH</span>
              <kbd className="hidden xl:inline-block px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700 font-mono">
                CTRL K
              </kbd>
            </button>

            <AvailabilityBadge className="hidden xl:inline-flex scale-90" />

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/25 border border-blue-400/30 transition-all active:scale-95"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-blue-400" />
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-mono font-bold shadow-md shadow-blue-600/20 uppercase"
            >
              HIRE ME
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 p-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="mb-4 pb-4 border-b border-slate-800/80">
            <AvailabilityBadge className="w-full justify-center" />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-medium transition-colors text-left ${
                  activeSection === link.id
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <link.icon className="w-4 h-4 text-blue-400" />
                <span>{link.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
              className="flex-1 py-3 rounded-xl glass-panel text-slate-300 flex items-center justify-center gap-2 text-xs font-mono font-bold"
            >
              <Search className="w-4 h-4 text-blue-400" />
              <span>SEARCH</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-mono font-bold text-center uppercase tracking-wider shadow-lg shadow-blue-600/25"
            >
              HIRE ME
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
