import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, Eye, Sparkles, Code2, Bot, ShieldCheck, CheckCircle2, Terminal, Github, Linkedin, ExternalLink, ChevronDown, Building, Cpu, Layers } from 'lucide-react';
import { TitleRotator } from './TitleRotator';
import { profileData } from '../../data/profile';

interface HeroSectionProps {
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
  onNavigateResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateProjects,
  onNavigateContact,
  onNavigateResume
}) => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // High-performance Spotlight mouse interaction using requestAnimationFrame & refs (no state re-renders)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // Disable mouse tracking on touch devices for mobile smoothness

    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const updateSpotlight = () => {
      // Smooth interpolation (lerp)
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(650px circle at ${currentX}px ${currentY}px, rgba(59, 130, 246, 0.12), rgba(147, 51, 234, 0.05) 50%, transparent 80%)`;
      }

      animationFrameId = requestAnimationFrame(updateSpotlight);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      animationFrameId = requestAnimationFrame(updateSpotlight);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[92vh] flex flex-col justify-between"
    >
      
      {/* Dynamic Background Spotlight Layer (GPU Accelerated) */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
        aria-hidden="true"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />

      {/* Aurora Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-600/15 blur-[120px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-600/15 blur-[120px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO BRANDING & CONTENT */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Brand Header & Live Availability */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{profileData.brandName}</span>
              </span>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>AVAILABLE FOR WORK</span>
              </div>
            </div>

            {/* Title with Rotator */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
                {profileData.name}
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 font-bold text-slate-200">
                  <TitleRotator />
                </span>
              </h1>

              {/* Recruiter Trust: Distinction between Current Professional Role & Developer Identity */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-1 font-mono text-xs">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                  <Building className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="text-slate-500 font-bold uppercase text-[10px]">CURRENT ROLE:</span>
                  <span className="text-slate-200 font-medium">{profileData.currentRole}</span>
                </div>
                <div className="hidden sm:block text-slate-600">•</div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                  <Code2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="text-slate-500 font-bold uppercase text-[10px]">BUILDING:</span>
                  <span className="text-purple-300 font-medium">{profileData.developerIdentity}</span>
                </div>
              </div>
            </div>

            {/* Primary Slogan Box (Prominently Emphasized) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border-l-4 border-l-blue-500 border border-slate-800 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <p className="text-base sm:text-lg md:text-xl font-heading font-bold text-blue-100 leading-snug">
                "{profileData.slogan}"
              </p>
            </div>

            {/* Recruiter & Client Dual Message */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                  <span className="text-blue-400 font-mono">RECRUITER OVERVIEW:</span> {profileData.recruiterQuestion}
                </p>
                <p className="text-slate-400">{profileData.recruiterAnswer}</p>
              </div>

              {/* Secondary Positioning Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                <span className="text-slate-400 font-semibold mr-1">AVAILABILITY MODES:</span>
                {profileData.availability.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-300 font-bold text-[10px] tracking-wider"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              
              {/* Primary CTA */}
              <button
                onClick={onNavigateProjects}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 border border-blue-400/40 flex items-center gap-2.5 transition-all hover:scale-[1.02] active:scale-95 group"
              >
                <Eye className="w-4 h-4 text-blue-200" />
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onNavigateContact}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-md"
              >
                <span>HIRE ME</span>
              </button>

              {/* Resume CTA */}
              <button
                onClick={onNavigateResume}
                className="px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>RESUME</span>
              </button>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sabari M GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sabari M LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Direct Project Jump Micro Link */}
            <div className="pt-1">
              <button
                onClick={onNavigateProjects}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <span>Explore my complete portfolio & case studies</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: HERO PROFILE VISUAL & FLOATING INFO CARDS */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Soft Gradient Glowing Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-subtle" />

              {/* Floating Info Card 1: Top Right */}
              <div className="hidden sm:flex absolute -top-5 -right-4 z-20 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl items-center gap-2.5 animate-bounce-subtle">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">METHODOLOGY</span>
                  <span className="text-xs font-bold text-white">AI-Assisted Dev</span>
                </div>
              </div>

              {/* Floating Info Card 2: Bottom Left */}
              <div className="hidden sm:flex absolute -bottom-5 -left-4 z-20 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 shadow-xl items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">TECH STACK</span>
                  <span className="text-xs font-bold text-white">React • TS • Supabase</span>
                </div>
              </div>

              {/* Main Profile Card Shell */}
              <div className="relative rounded-3xl bg-slate-950/90 backdrop-blur-2xl p-4 sm:p-5 border border-slate-800 shadow-2xl overflow-hidden group">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span className="font-mono text-xs text-slate-200 font-bold tracking-wider">{profileData.brandName}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-mono border border-blue-500/20 font-semibold">
                    VERIFIED CANDIDATE
                  </span>
                </div>

                {/* Profile Image Frame */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group/img">
                  <img
                    src={profileData.avatarUrl}
                    alt="Sabari M - DEV BY SABARI M Profile"
                    className="w-full h-full object-cover object-top transform group-hover/img:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/profile.svg";
                    }}
                  />

                  {/* Overlaid Gradient Glass Tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800/90">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-heading font-bold text-white text-sm">{profileData.name}</h3>
                        <p className="text-[11px] text-blue-400 font-mono">Banking Associate & Developer</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase">LOCATION</span>
                        <span className="text-xs font-mono font-semibold text-slate-200">{profileData.location.split(',')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info Matrix */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-bold">DEGREE SCORE</span>
                    <span className="text-emerald-400 font-semibold truncate block">BCA (88% Score)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-500 block text-[9px] uppercase font-bold">WORKFLOW</span>
                    <span className="text-blue-400 font-semibold truncate block">AI & No-Code Driven</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="pt-8 pb-2 text-center relative z-10">
        <button
          onClick={onNavigateProjects}
          className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors font-mono text-[10px] tracking-widest uppercase group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-blue-500/70 group-hover:text-blue-400" />
        </button>
      </div>

    </section>
  );
};
