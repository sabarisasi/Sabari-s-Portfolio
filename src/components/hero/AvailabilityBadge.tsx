import React from 'react';

interface AvailabilityBadgeProps {
  className?: string;
}

export const AvailabilityBadge: React.FC<AvailabilityBadgeProps> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs md:text-sm font-medium shadow-lg shadow-emerald-950/20 ${className}`}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="font-mono tracking-wide uppercase text-emerald-400 font-semibold text-[11px] md:text-xs">AVAILABLE:</span>
      <span className="text-slate-200">Full-Time • Part-Time • Freelance</span>
    </div>
  );
};
