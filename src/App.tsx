import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AmbientBackground } from './components/layout/AmbientBackground';
import { HeroSection } from './components/hero/HeroSection';
import { ConversionPanel } from './components/sections/ConversionPanel';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AILabSection } from './components/sections/AILabSection';
import { GitHubSection } from './components/sections/GitHubSection';
import { ProofDashboardSection } from './components/sections/ProofDashboardSection';
import { RecruiterDeveloperBar } from './components/sections/RecruiterDeveloperBar';
import { CommandPalette } from './components/common/CommandPalette';
import { RecruiterQuickBar } from './components/common/RecruiterQuickBar';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectGrid } from './components/projects/ProjectGrid';
import { CodeViewer } from './components/code-viewer/CodeViewer';
import { LivePreviewModal } from './components/live-preview/LivePreviewModal';
import { CaseStudyView } from './components/case-study/CaseStudyView';
import { ResumePage } from './pages/ResumePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollProgress } from './components/common/ScrollProgress';
import { BackToTop } from './components/common/BackToTop';
import { ThemeProvider } from './context/ThemeContext';
import { projectsData } from './data/projects';
import { Project } from './types/project';
import { PortfolioMode } from './types/portfolioMode';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentView, setCurrentView] = useState<'home' | 'code' | 'details' | 'resume' | '404'>('home');
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);
  const [livePreviewOpen, setLivePreviewOpen] = useState(false);
  const [portfolioMode, setPortfolioMode] = useState<PortfolioMode>('STANDARD');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [preselectedProjectType, setPreselectedProjectType] = useState<string>('Web Application');

  const handleSelectService = (projectType: string) => {
    setPreselectedProjectType(projectType);
    handleNavigate('contact');
  };

  // Efficient IntersectionObserver for Active Section Detection
  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'ai-lab', 'github', 'proof', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((id) => {
      const elem = document.getElementById(id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, [currentView]);

  // Hash-based dynamic routing listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (!hash || hash === '#home') {
        setCurrentView('home');
        setActiveSection('home');
        document.title = 'DEV BY SABARI M | AI & Full-Stack Developer';
        return;
      }

      if (hash === '#resume') {
        setCurrentView('resume');
        setActiveSection('resume');
        document.title = 'DEV BY SABARI M | Resume & Credentials';
        return;
      }

      if (hash === '#404') {
        setCurrentView('404');
        document.title = 'DEV BY SABARI M | Page Not Found';
        return;
      }

      // Route format: #projects/[slug] or #projects/[slug]/code
      const projectMatch = hash.match(/^#projects\/([^/]+)(\/(code|preview))?$/);
      if (projectMatch) {
        const slug = projectMatch[1];
        const subRoute = projectMatch[3];
        const found = projectsData.find((p) => p.slug === slug);

        if (found) {
          setSelectedProject(found);
          document.title = `DEV BY SABARI M | ${found.title}`;

          if (subRoute === 'code') {
            setCurrentView('code');
            setLivePreviewOpen(false);
          } else if (subRoute === 'preview') {
            setCurrentView('details');
            setLivePreviewOpen(true);
          } else {
            setCurrentView('details');
            setLivePreviewOpen(false);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        } else {
          setCurrentView('404');
          return;
        }
      }

      // Default section scroll fallback (e.g., #about, #experience, #projects, #contact)
      const sectionId = hash.replace('#', '');
      const validSections = ['home', 'about', 'experience', 'skills', 'projects', 'services', 'ai-lab', 'github', 'proof', 'contact'];
      if (validSections.includes(sectionId)) {
        setCurrentView('home');
        setActiveSection(sectionId);
        setTimeout(() => {
          const elem = document.getElementById(sectionId);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        setCurrentView('404');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'resume') {
      window.location.hash = 'resume';
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = sectionId === 'home' ? '' : sectionId;
    } else {
      setActiveSection(sectionId);
      window.location.hash = sectionId === 'home' ? '' : sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenCode = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('code');
    setLivePreviewOpen(false);
    window.location.hash = `projects/${project.slug}/code`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLive = (project: Project) => {
    setSelectedProject(project);
    if (!project.liveUrl || !project.livePreviewAvailable) {
      alert(`Live preview is not available for ${project.title}. Showing source code explorer instead.`);
      handleOpenCode(project);
    } else {
      setLivePreviewOpen(true);
    }
  };

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('details');
    setLivePreviewOpen(false);
    window.location.hash = `projects/${project.slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectBySlug = (slug: string) => {
    const found = projectsData.find((p) => p.slug === slug);
    if (found) handleOpenDetails(found);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSection('projects');
    window.location.hash = 'projects';
    setTimeout(() => {
      const elem = document.getElementById('projects');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 relative flex flex-col font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200">
        
        {/* Top Thin Scroll Progress Bar */}
        <ScrollProgress />

        {/* Background Ambient FX */}
        <AmbientBackground />

        {/* Sticky Global Navigation */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* Main Render View */}
        <main className="flex-1 relative z-10 pt-20">
          
          {/* VIEW 1: Home Ecosystem Page */}
          {currentView === 'home' && (
            <>
              <HeroSection
                onNavigateProjects={() => handleNavigate('projects')}
                onNavigateContact={() => handleNavigate('contact')}
                onNavigateResume={() => handleNavigate('resume')}
              />

              {/* Global Recruiter & Developer Mode Control Panel */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <RecruiterDeveloperBar
                  mode={portfolioMode}
                  onModeChange={setPortfolioMode}
                  onNavigate={handleNavigate}
                  onOpenProjectBySlug={handleOpenProjectBySlug}
                />
              </div>

              <ConversionPanel
                onSelectCategory={() => handleNavigate('projects')}
                onNavigateContact={() => handleNavigate('contact')}
              />

              <AboutSection />

              <ExperienceSection />

              <SkillsSection onNavigateContact={() => handleNavigate('contact')} />

              <ProjectGrid
                projects={projectsData}
                onOpenCode={handleOpenCode}
                onOpenLive={handleOpenLive}
                onOpenDetails={handleOpenDetails}
              />

              <ServicesSection
                onSelectService={handleSelectService}
                onNavigateContact={() => handleNavigate('contact')}
                onOpenProjectBySlug={handleOpenProjectBySlug}
              />

              <AILabSection
                onNavigateContact={() => handleNavigate('contact')}
                onOpenProjectBySlug={handleOpenProjectBySlug}
              />

              <GitHubSection
                onOpenCode={handleOpenCode}
                onOpenLive={handleOpenLive}
                onOpenDetails={handleOpenDetails}
              />

              <ProofDashboardSection
                onNavigateResume={() => handleNavigate('resume')}
                onNavigateContact={() => handleNavigate('contact')}
              />

              <FinalCTASection
                onNavigateContact={() => handleNavigate('contact')}
                onNavigateProjects={() => handleNavigate('projects')}
              />

              <ContactSection
                preselectedProjectType={preselectedProjectType}
                onNavigateProjects={() => handleNavigate('projects')}
              />
            </>
          )}

          {/* VIEW 2: Internal Source Code Viewer Page */}
          {currentView === 'code' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <CodeViewer
                project={selectedProject}
                onBack={handleBackToHome}
              />
            </div>
          )}

          {/* VIEW 3: Case Study & Architecture Details Page */}
          {currentView === 'details' && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <CaseStudyView
                project={selectedProject}
                allProjects={projectsData}
                onBack={handleBackToHome}
                onOpenCode={handleOpenCode}
                onOpenLive={handleOpenLive}
                onSelectProject={handleOpenDetails}
                onNavigateContact={() => handleNavigate('contact')}
              />
            </div>
          )}

          {/* VIEW 4: Official Resume Document View */}
          {currentView === 'resume' && (
            <ResumePage />
          )}

          {/* VIEW 5: Custom 404 Route Not Found View */}
          {currentView === '404' && (
            <NotFoundPage
              onBackHome={handleBackToHome}
              onNavigateProjects={() => handleNavigate('projects')}
            />
          )}

        </main>

        {/* Live Preview Device Frame Modal */}
        <LivePreviewModal
          project={selectedProject}
          isOpen={livePreviewOpen}
          onClose={() => setLivePreviewOpen(false)}
        />

        {/* Floating Recruiter & Quick Action Navigation Bar */}
        <RecruiterQuickBar
          mode={portfolioMode}
          onNavigate={handleNavigate}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        {/* Accessible Command Palette Modal (Ctrl + K / Cmd + K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onNavigate={handleNavigate}
          onModeChange={setPortfolioMode}
          onOpenProjectBySlug={handleOpenProjectBySlug}
        />

        {/* Back-to-Top Control Button */}
        <BackToTop />

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />

      </div>
    </ThemeProvider>
  );
}
