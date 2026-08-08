import React, { useState, useEffect } from 'react';
import { 
  Send, Phone, Mail, MapPin, CheckCircle, ShieldCheck, Clock, 
  Linkedin, Github, AlertCircle, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Building2
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { submitContactInquiry, ContactMessageInput } from '../../lib/supabase';

interface ContactSectionProps {
  preselectedProjectType?: string;
  onNavigateProjects?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedProjectType,
  onNavigateProjects
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState<ContactMessageInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_type: 'Web Application',
    engagement_type: 'Freelance',
    budget_range: 'Flexible',
    timeline: 'Flexible',
    description: '',
    reference_url: '',
    preferred_contact: 'Email'
  });

  // Anti-Spam Honeypot
  const [honeypot, setHoneypot] = useState<string>('');

  // Pre-fill listener
  useEffect(() => {
    if (preselectedProjectType) {
      setFormData((prev) => ({ ...prev, project_type: preselectedProjectType }));
    }
  }, [preselectedProjectType]);

  // Validation Errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<boolean>(false);

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!formData.project_type) errs.project_type = 'Please select a project type';
    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please provide a project description (at least 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    setErrors({});
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handlePrevStep = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      console.warn('Bot detected via honeypot field.');
      setSubmitted(true);
      return;
    }

    if (!validateStep1() || !validateStep2()) {
      setCurrentStep(1);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const res = await submitContactInquiry(formData);
      if (res.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch (err) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(false);
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      project_type: preselectedProjectType || 'Web Application',
      engagement_type: 'Freelance',
      budget_range: 'Flexible',
      timeline: 'Flexible',
      description: '',
      reference_url: '',
      preferred_contact: 'Email'
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Send className="w-3.5 h-3.5 text-blue-400" />
              10 / CONTACT
            </span>
            <span className="text-xs font-mono text-slate-500 uppercase">
              PROJECT INQUIRIES & HIRE
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
                Let's build something worth shipping.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-2xl leading-relaxed">
                Have an idea, a business workflow that needs improving, or a digital product you want to launch? Tell me about your requirements below.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {onNavigateProjects && (
                <button
                  onClick={onNavigateProjects}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-2 transition-all"
                >
                  <Building2 className="w-4 h-4 text-blue-400" />
                  <span>VIEW PROJECTS</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: DIRECT CONTACT PANEL & SOCIAL PROOF */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard className="p-6 space-y-6 border-blue-500/30">
              <h3 className="font-heading font-bold text-white text-xl">Direct Communication Channels</h3>

              <div className="space-y-3">
                {/* Email */}
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-200 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">EMAIL ADDRESS</span>
                    <span className="font-semibold text-sm text-white group-hover:text-blue-300 transition-colors">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 text-slate-200 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">PHONE / WHATSAPP</span>
                    <span className="font-semibold text-sm text-white group-hover:text-emerald-300 transition-colors">
                      {profileData.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">LOCATION</span>
                    <span className="font-semibold text-sm text-white">{profileData.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">VERIFIED PROFILES</span>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 flex items-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repos</span>
                  </a>
                </div>
              </div>

              {/* SLA Response Guarantee */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Response guarantee: Within 12-24 hours</span>
              </div>
            </GlassCard>
          </div>

          {/* RIGHT: MULTI-STEP PROJECT REQUEST FORM */}
          <div className="lg:col-span-7">
            <GlassCard className="p-6 sm:p-8 space-y-6 bg-slate-950/90 border-slate-800 shadow-2xl">
              
              {/* SUCCESS CONFIRMATION STATE */}
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl">
                      Project request received.
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thanks for reaching out! I'll review your details and get back to you promptly via your preferred contact method.
                    </p>
                  </div>

                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-mono text-xs font-bold transition-all"
                    >
                      SEND ANOTHER REQUEST
                    </button>
                    <a
                      href={`mailto:${profileData.email}?subject=Direct%20Inquiry%20-%20DEV%20BY%20SABARI%20M`}
                      className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all"
                    >
                      DIRECT EMAIL
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Form Header & Step Indicator */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                        PROJECT INQUIRY FORM
                      </span>
                      <h3 className="text-xl font-heading font-extrabold text-white">
                        Tell me what you're building.
                      </h3>
                    </div>

                    {/* Step Numbers Indicator */}
                    <div className="flex items-center gap-2 font-mono text-xs shrink-0">
                      {[1, 2, 3, 4].map((stepNum) => (
                        <div
                          key={stepNum}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-all ${
                            currentStep === stepNum
                              ? 'bg-blue-600 text-white shadow-md'
                              : currentStep > stepNum
                              ? 'bg-blue-950 text-blue-400 border border-blue-800'
                              : 'bg-slate-900 text-slate-500 border border-slate-800'
                          }`}
                        >
                          0{stepNum}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Anti-Spam Honeypot Field (Hidden) */}
                  <input
                    type="text"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  {/* STEP 1: ABOUT YOU */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                          01 / ABOUT YOU
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">* Required fields</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            YOUR NAME *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Alex Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none ${
                              errors.name ? 'border-red-500/80' : 'border-slate-800 focus:border-blue-500/50'
                            }`}
                          />
                          {errors.name && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            EMAIL ADDRESS *
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. alex@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none ${
                              errors.email ? 'border-red-500/80' : 'border-slate-800 focus:border-blue-500/50'
                            }`}
                          />
                          {errors.email && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            COMPANY / ORGANIZATION (OPTIONAL)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Health Tech"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            PHONE / WHATSAPP (OPTIONAL)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. +1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: PROJECT */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                          02 / PROJECT SPECIFICATION
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">* Required fields</span>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                          PROJECT TYPE *
                        </label>
                        <select
                          value={formData.project_type}
                          onChange={(e) => setFormData({ ...formData, project_type: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50"
                        >
                          <option value="Website">Website</option>
                          <option value="Web Application">Web Application</option>
                          <option value="Mobile Application">Mobile Application</option>
                          <option value="AI Application">AI Application</option>
                          <option value="Business Software">Business Software</option>
                          <option value="SaaS">SaaS</option>
                          <option value="Automation">Automation</option>
                          <option value="Dashboard">Dashboard</option>
                          <option value="UI/UX">UI / UX Development</option>
                          <option value="Other">Other Custom Development</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                          PROJECT DESCRIPTION *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Describe your project idea, core goals, or business workflow requirements..."
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-slate-200 placeholder-slate-500 focus:outline-none resize-none ${
                            errors.description ? 'border-red-500/80' : 'border-slate-800 focus:border-blue-500/50'
                          }`}
                        />
                        {errors.description && <p className="text-[11px] font-mono text-red-400 mt-1">{errors.description}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                          REFERENCE WEBSITE OR DOC URL (OPTIONAL)
                        </label>
                        <input
                          type="url"
                          placeholder="https://..."
                          value={formData.reference_url}
                          onChange={(e) => setFormData({ ...formData, reference_url: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: ENGAGEMENT */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                          03 / ENGAGEMENT & SCOPE
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                          ENGAGEMENT TYPE *
                        </label>
                        <select
                          value={formData.engagement_type}
                          onChange={(e) => setFormData({ ...formData, engagement_type: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50"
                        >
                          <option value="Full-Time">Full-Time Position</option>
                          <option value="Part-Time">Part-Time Role</option>
                          <option value="Freelance">Freelance Contract</option>
                          <option value="Contract">Sprint Contract</option>
                          <option value="Project-Based">Project-Based Build</option>
                          <option value="Consultation">Consultation</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            BUDGET RANGE (OPTIONAL)
                          </label>
                          <select
                            value={formData.budget_range}
                            onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50"
                          >
                            <option value="Flexible">Flexible / Undecided</option>
                            <option value="< $1,000">&lt; $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                            <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                            <option value="$5,000+">$5,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1 font-semibold">
                            TARGET TIMELINE (OPTIONAL)
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-blue-500/50"
                          >
                            <option value="Flexible">Flexible</option>
                            <option value="Urgent (< 2 weeks)">Urgent (&lt; 2 weeks)</option>
                            <option value="1 Month">1 Month</option>
                            <option value="2-3 Months">2-3 Months</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: CONTACT PREFERENCE & SUBMIT */}
                  {currentStep === 4 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                          04 / PREFERRED CONTACT & REVIEW
                        </span>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2 font-semibold">
                          PREFERRED CONTACT METHOD
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                          {['Email', 'WhatsApp', 'Phone', 'LinkedIn'].map((method) => (
                            <button
                              type="button"
                              key={method}
                              onClick={() => setFormData({ ...formData, preferred_contact: method })}
                              className={`p-3 rounded-xl border text-center font-bold transition-all ${
                                formData.preferred_contact === method
                                  ? 'bg-blue-600 text-white border-blue-400 shadow'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                              }`}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Request Summary Box */}
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                        <span className="text-[10px] text-blue-400 font-bold uppercase block">REQUEST SUMMARY</span>
                        <div className="grid grid-cols-2 gap-2 text-slate-300">
                          <p><strong>Name:</strong> {formData.name}</p>
                          <p><strong>Email:</strong> {formData.email}</p>
                          <p><strong>Project:</strong> {formData.project_type}</p>
                          <p><strong>Engagement:</strong> {formData.engagement_type}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submission Error Warning */}
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Online form encounter. You can also send a direct email to {profileData.email}.</span>
                    </div>
                  )}

                  {/* Multi-Step Controls */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>PREVIOUS</span>
                      </button>
                    ) : <div />}

                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-600/20 transition-all"
                      >
                        <span>NEXT STEP</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span>SENDING REQUEST...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>SEND PROJECT REQUEST</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Security Notice */}
                  <div className="pt-2 flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Your information is handled securely and used only to respond to your enquiry.</span>
                  </div>

                </form>
              )}

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
