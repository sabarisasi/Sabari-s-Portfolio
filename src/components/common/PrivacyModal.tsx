import React from 'react';
import { X, ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <GlassCard className="max-w-2xl w-full p-6 sm:p-8 space-y-6 bg-slate-950/95 border-slate-800 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-white text-lg sm:text-xl">
                Data Privacy & Security Policy
              </h3>
              <p className="text-xs font-mono text-slate-400">DEV BY SABARI M | Transparency Notice</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Policy Content */}
        <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-mono font-bold">
              <Lock className="w-4 h-4" />
              <span>1. Information Collection</span>
            </div>
            <p>
              When you submit a project inquiry or contact request through this portfolio, we collect only the details you explicitly provide (name, email address, project type, timeline, budget range, and project description).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold">
              <Eye className="w-4 h-4" />
              <span>2. Purpose & Use</span>
            </div>
            <p>
              Your submitted data is strictly used to evaluate your development requirements and respond to your inquiry via your preferred contact channel. We do NOT sell, rent, or share your contact information with any third parties or marketing lists.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-purple-400 font-mono font-bold">
              <FileText className="w-4 h-4" />
              <span>3. Data Retention & Access Control</span>
            </div>
            <p>
              Submissions are sent through a private, server-side Google Apps Script Web App and stored in a Google Sheet accessible only to the portfolio owner's Google account. No public or anonymous users can read, search, or access submitted enquiries.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all"
          >
            I UNDERSTAND
          </button>
        </div>

      </GlassCard>
    </div>
  );
};
