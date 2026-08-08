import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import { profileData } from '../../data/profile';
import { AvailabilityBadge } from '../hero/AvailabilityBadge';
import { PrivacyModal } from '../common/PrivacyModal';

interface FooterProps {
  onNavigate?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const links = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai-lab', label: 'AI Lab' },
    { id: 'services', label: 'Services' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <footer className="border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl pt-16 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Top Callout Box: "Have an idea? START A PROJECT" */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest block">
                COLLABORATION & ENGAGEMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                Have an idea? Let's build it together.
              </h3>
              <p className="text-xs text-slate-300 font-medium">
                From idea to launch — standard production time ranges from 2–5 business days.
              </p>
            </div>

            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 border border-blue-400/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shrink-0"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
            
            {/* Brand & Tagline */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-heading font-extrabold text-xl">
                  S
                </div>
                <div>
                  <span className="font-heading font-extrabold text-xl text-white block">
                    DEV BY SABARI M
                  </span>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">
                    From idea to launch.
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                Full-Stack AI Application Developer specializing in rapid MVP creation, scalable React architectures, and custom AI agents.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  AVAILABLE FOR:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Full-Time', 'Part-Time', 'Freelance', 'Contract'].map((type) => (
                    <span
                      key={type}
                      className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[10px] font-mono font-semibold"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">NAVIGATION</h4>
              <ul className="space-y-2 text-xs font-mono">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate && onNavigate(link.id)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Socials */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">CONNECT & INQUIRE</h4>
              <div className="space-y-1.5 text-xs font-mono text-slate-300">
                <p><span className="text-slate-500">EMAIL:</span> {profileData.email}</p>
                <p><span className="text-slate-500">PHONE:</span> {profileData.phone}</p>
                <p><span className="text-slate-500">LOCATION:</span> {profileData.location}</p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar & Privacy Link */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <p>© 2026 DEV BY SABARI M. All rights reserved.</p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Privacy & Security</span>
              </button>
              <span>•</span>
              <span className="text-slate-400">AI-Powered Engineering</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Notice Modal */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};
