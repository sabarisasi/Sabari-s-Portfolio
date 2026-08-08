import React, { useState } from 'react';
import { ExternalLink, Monitor, Smartphone, Tablet, X, AlertCircle, RefreshCw, Sparkles } from 'lucide-react';
import { Project } from '../../types/project';
import { Button } from '../ui/Button';

interface LivePreviewModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  project,
  isOpen,
  onClose
}) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [iframeKey, setIframeKey] = useState(0);

  if (!isOpen) return null;

  const viewportWidths = {
    desktop: 'w-full max-w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]'
  };

  const hasLiveUrl = Boolean(project.liveUrl && project.status !== 'Planned');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-6xl h-[85vh] glass-panel rounded-2xl border border-slate-700/80 flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Preview Control Header */}
        <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
              LIVE
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">
                {hasLiveUrl ? `Deploy Preview Mode (${viewportMode})` : 'Deployment Status Notice'}
              </p>
            </div>
          </div>

          {/* Device Frame Viewport Switcher */}
          {hasLiveUrl && (
            <div className="flex items-center gap-1 glass-panel p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewportMode('desktop')}
                className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                  viewportMode === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop View"
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden sm:inline">Desktop</span>
              </button>

              <button
                onClick={() => setViewportMode('tablet')}
                className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                  viewportMode === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet View"
              >
                <Tablet className="w-4 h-4" />
                <span className="hidden sm:inline">Tablet</span>
              </button>

              <button
                onClick={() => setViewportMode('mobile')}
                className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors ${
                  viewportMode === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile View"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>
          )}

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {hasLiveUrl && (
              <>
                <button
                  onClick={() => setIframeKey(prev => prev + 1)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Reload frame"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg shadow-blue-600/20"
                >
                  <span>Open Full Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Frame Content Body */}
        <div className="flex-1 bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
          
          {hasLiveUrl ? (
            <div className={`h-full transition-all duration-300 mx-auto rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-white ${viewportWidths[viewportMode]}`}>
              {/* Note: If external iframe is blocked by X-Frame-Options, wrapper provides direct open link */}
              <iframe
                key={iframeKey}
                src={project.liveUrl}
                title={`Live preview of ${project.title}`}
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
            </div>
          ) : (
            /* Live Preview Coming Soon Fallback Notice */
            <div className="text-center p-8 max-w-lg mx-auto glass-panel rounded-2xl border border-amber-500/30 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-xl">Live Preview Coming Soon</h4>
                <p className="text-sm text-slate-300 mt-2">
                  <strong className="text-amber-300">{project.title}</strong> is currently under active build phase ({project.status}). Deployed production URL will be registered here upon completion.
                </p>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono flex items-center justify-center gap-2"
                >
                  <span>Verify GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Button variant="secondary" size="sm" onClick={onClose}>
                  Close Preview
                </Button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
