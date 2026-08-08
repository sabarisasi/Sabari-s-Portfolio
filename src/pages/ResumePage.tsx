import React from 'react';
import { Download, FileText, CheckCircle2, GraduationCap, Award, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';
import { experienceData } from '../data/experience';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

export const ResumePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Top Banner */}
      <GlassCard className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-blue-500/30">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>OFFICIAL RESUME DOCUMENT</span>
          </div>
          <h1 className="text-3xl font-heading font-extrabold text-white">{profileData.name}</h1>
          <p className="text-sm font-mono text-blue-400">{profileData.title}</p>
        </div>

        {profileData.resumeUrl ? (
          <a
            href={profileData.resumeUrl}
            download
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs md:text-sm shadow-xl shadow-blue-600/25 border border-blue-400/30 flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        ) : (
          <a
            href={`mailto:${profileData.email}?subject=Requesting%20PDF%20Resume%20-%20DEV%20BY%20SABARI%20M`}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs md:text-sm shadow-xl shadow-blue-600/25 border border-blue-400/30 flex items-center gap-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Request PDF Version</span>
          </a>
        )}
      </GlassCard>

      {/* Resume Document Wrapper */}
      <GlassCard className="p-8 space-y-8 bg-slate-950/90 border-slate-800">
        
        {/* Header Section */}
        <div className="border-b border-slate-800 pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {profileData.avatarUrl && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shrink-0">
                  <img
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/profile.svg";
                    }}
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-heading font-bold text-white tracking-wide">{profileData.name}</h2>
                <p className="text-xs font-mono text-blue-400 font-semibold">{profileData.title}</p>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">BCA (88%) • HDFC Bank Associate • Self-Taught Full-Stack</p>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-300 space-y-1 text-left sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> {profileData.location}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-400" /> {profileData.phone}</p>
              <p className="flex items-center sm:justify-end gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-400" /> {profileData.email}</p>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h3 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">PROFESSIONAL SUMMARY</h3>
          <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
            {profileData.aboutBio}
          </p>
        </div>

        {/* Experience Section */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h3 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>PROFESSIONAL EXPERIENCE</span>
          </h3>

          {experienceData.map((exp) => (
            <div key={exp.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-semibold text-white text-sm">{exp.company} — {exp.role}</h4>
                <span className="text-xs font-mono text-slate-400">{exp.period} | {exp.location}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
          
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h3>
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                <p className="font-semibold text-white">{edu.degree}</p>
                <p className="text-slate-400">{edu.institution} ({edu.period})</p>
                <p className="text-emerald-400 font-mono font-bold">{edu.score}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>CERTIFICATIONS</span>
            </h3>
            <div className="space-y-1.5 text-xs">
              {profileData.certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-200">{cert.name}</span>
                  <span className="text-slate-400 font-mono">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </GlassCard>

    </div>
  );
};
