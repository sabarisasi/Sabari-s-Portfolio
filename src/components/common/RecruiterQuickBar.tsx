import React from 'react';
import { FileText, FolderGit2, Github, Linkedin, Send, Command, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { PortfolioMode } from '../../types/portfolioMode';

interface RecruiterQuickBarProps {
  mode: PortfolioMode;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
}

export const RecruiterQuickBar: React.FC<RecruiterQuickBarProps> = ({
  mode,
  onNavigate,
  onOpenCommandPalette
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[92%] sm:w-auto">
      <div className="glass-panel p-2 rounded-2xl border border-slate-700/80 shadow-2xl shadow-slate-950/90 flex items-center justify-between sm:justify-center gap-1.5 sm:gap-3 text-xs font-mono">
        
        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
          title="Command Palette (Ctrl + K)"
        >
          <Command className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline font-bold">Ctrl+K</span>
        </button>

        {/* View Resume */}
        <button
          onClick={() => onNavigate('resume')}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden sm:inline font-semibold">Resume</span>
        </button>

        {/* Projects */}
        <button
          onClick={() => onNavigate('projects')}
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 transition-colors"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden sm:inline font-semibold">Projects</span>
        </button>

        {/* GitHub External */}
        <a
          href={profileData.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 transition-colors"
          title="GitHub Profile"
        >
          <Github className="w-3.5 h-3.5 text-slate-300" />
          <span className="hidden md:inline font-semibold">GitHub</span>
        </a>

        {/* LinkedIn External */}
        <a
          href={profileData.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 flex items-center gap-1.5 transition-colors"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-3.5 h-3.5 text-blue-400" />
          <span className="hidden md:inline font-semibold">LinkedIn</span>
        </a>

        {/* Contact CTA */}
        <button
          onClick={() => onNavigate('contact')}
          className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Contact</span>
        </button>

      </div>
    </div>
  );
};
