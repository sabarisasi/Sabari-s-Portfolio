import React from 'react';
import { 
  FileText, Download, GraduationCap, Award, Briefcase, Linkedin, Github, 
  CheckCircle2, ExternalLink, ShieldCheck, Mail, Phone, MapPin, ArrowRight
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';
import { experienceData } from '../../data/experience';

interface ProofDashboardSectionProps {
  onNavigateResume?: () => void;
  onNavigateContact?: () => void;
}

export const ProofDashboardSection: React.FC<ProofDashboardSectionProps> = ({
  onNavigateResume,
  onNavigateContact
}) => {
  const handleDownloadResume = () => {
    // If user has a real PDF asset or trigger mailto/print
    window.open(`mailto:${profileData.email}?subject=Requesting%20PDF%20Resume%20-%20DEV%20BY%20SABARI%20M`, '_blank');
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              08 / RESUME & PROOF OF WORK
            </span>
            <span className="text-xs font-mono text-slate-500">
              VERIFIED CREDENTIALS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            One page. Full picture.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            Verified qualifications, professional experience, academic background, and official certifications.
          </p>
        </div>

        {/* PROOF OF WORK DASHBOARD CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <GlassCard className="p-5 space-y-2 border-blue-500/30">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono font-bold uppercase">EDUCATION</span>
              <GraduationCap className="w-4 h-4 text-blue-400" />
            </div>
            <p className="font-heading font-extrabold text-white text-xl">BCA (88%)</p>
            <p className="text-xs text-slate-400">Bachelor of Computer Applications • Periyar University</p>
          </GlassCard>

          <GlassCard className="p-5 space-y-2 border-purple-500/30">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono font-bold uppercase">BANKING EXPERIENCE</span>
              <Briefcase className="w-4 h-4 text-purple-400" />
            </div>
            <p className="font-heading font-extrabold text-white text-xl">HDFC Bank</p>
            <p className="text-xs text-slate-400">Operations Associate • Process & Compliance discipline</p>
          </GlassCard>

          <GlassCard className="p-5 space-y-2 border-emerald-500/30">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono font-bold uppercase">CERTIFICATIONS</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="font-heading font-extrabold text-white text-xl">4 Official Certs</p>
            <p className="text-xs text-slate-400">Web Dev, Data Analytics, Banking & NIIT ACE</p>
          </GlassCard>

          <GlassCard className="p-5 space-y-2 border-amber-500/30">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-[10px] font-mono font-bold uppercase">VERIFIED PROFILES</span>
              <Linkedin className="w-4 h-4 text-amber-400" />
            </div>
            <p className="font-heading font-extrabold text-white text-xl">LinkedIn & GitHub</p>
            <p className="text-xs text-slate-400">Verified open repositories & professional history</p>
          </GlassCard>

        </div>

        {/* RESUME PREVIEW CONTAINER */}
        <GlassCard className="p-6 sm:p-8 space-y-8 bg-slate-950/90 border-slate-800">
          
          {/* Header Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  OFFICIAL RESUME
                </span>
                <span className="text-xs font-mono text-slate-400">Sabari M • Developer Profile</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">{profileData.name}</h3>
              <p className="text-xs font-mono text-blue-400">{profileData.title}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {onNavigateResume && (
                <button
                  onClick={onNavigateResume}
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>VIEW RESUME PAGE</span>
                </button>
              )}

              <button
                onClick={handleDownloadResume}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-bold transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>REQUEST PDF RESUME</span>
              </button>
            </div>
          </div>

          {/* Core Resume Grid Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Experience Summary */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>PROFESSIONAL EXPERIENCE</span>
              </h4>

              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                    <span className="font-bold text-white">{exp.company}</span>
                    <span className="text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-xs font-mono text-blue-400">{exp.role}</p>
                  <p className="text-xs text-slate-300 leading-snug">{exp.responsibilities[0]}</p>
                </div>
              ))}
            </div>

            {/* Education & Certifications */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>ACADEMIC BACKGROUND</span>
                </h4>
                {profileData.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-slate-400">{edu.institution} ({edu.period})</p>
                    <p className="text-emerald-400 font-mono font-bold">{edu.score}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>OFFICIAL CERTIFICATIONS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {profileData.certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                      <p className="font-semibold text-slate-200">{cert.name}</p>
                      <p className="text-[11px] font-mono text-slate-400">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof & Conversion Links */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>VIEW LINKEDIN</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>VIEW GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {onNavigateContact && (
              <button
                onClick={onNavigateContact}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>INTERESTED IN WORKING TOGETHER? CONTACT ME</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </GlassCard>

      </div>
    </section>
  );
};
