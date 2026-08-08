import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dark mesh base */}
      <div className="absolute inset-0 bg-slate-950" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Electric Blue Radial Glow */}
      <div className="absolute -top-[20%] left-[15%] w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[140px] animate-pulse-subtle" />

      {/* Purple Glowing Accent */}
      <div className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px]" />

      {/* Cyan Bottom Glow */}
      <div className="absolute bottom-[-10%] left-[30%] w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[150px]" />
    </div>
  );
};
