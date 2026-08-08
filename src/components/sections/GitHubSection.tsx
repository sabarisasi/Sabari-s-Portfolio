import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, Code2, AlertCircle, RefreshCw, FolderGit2, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { fetchGitHubRepos, GitHubRepo, FEATURED_REPOS } from '../../data/githubData';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import { Project } from '../../types/project';

interface GitHubSectionProps {
  onOpenCode?: (project: Project) => void;
  onOpenLive?: (project: Project) => void;
  onOpenDetails?: (project: Project) => void;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({
  onOpenCode,
  onOpenLive,
  onOpenDetails
}) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('ALL');

  useEffect(() => {
    let isMounted = true;
    async function loadRepos() {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchGitHubRepos();
        if (isMounted) {
          if (data && data.length > 0) {
            setRepos(data);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadRepos();
    return () => { isMounted = false; };
  }, []);

  // Filter topics
  const filteredRepos = selectedTopic === 'ALL'
    ? repos
    : repos.filter((r) => r.language?.toUpperCase() === selectedTopic.toUpperCase() || r.topics?.includes(selectedTopic.toLowerCase()));

  // Find AI Health Companion Project from central data
  const healthCompanionProject = projectsData.find(p => p.slug === 'ai-health-companion');

  return (
    <section id="github" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-blue-400" />
                07 / GITHUB
              </span>
              <span className="text-xs font-mono text-slate-500">
                OPEN SOURCE REPOSITORIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
              Open code. Real projects.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
              Explore the repositories behind the products showcased on DEV BY SABARI M.
            </p>
          </div>

          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs md:text-sm font-bold border border-slate-700 hover:border-blue-500/50 shadow-xl flex items-center justify-center gap-2 transition-all shrink-0"
          >
            <Github className="w-4 h-4 text-blue-400" />
            <span>VIEW GITHUB PROFILE</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* AI Health Companion Repository Connection Banner */}
        <GlassCard className="p-6 sm:p-8 border-blue-500/40 bg-gradient-to-r from-blue-950/30 via-slate-900 to-slate-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                FEATURED REPOSITORY
              </span>
              <span className="text-xs font-mono text-slate-400">sabarisasi/AI-Health-Companion-Apk</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">AI Health Companion Repository</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Full Android APK & Web source repository featuring medical disclaimers, symptom evaluation prompts, and Gemini API integration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://github.com/sabarisasi/AI-Health-Companion-Apk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>SOURCE REPO</span>
            </a>

            {healthCompanionProject && (
              <button
                onClick={() => onOpenCode && onOpenCode(healthCompanionProject)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-2 transition-all"
              >
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span>SOURCE CODE VIEWER</span>
              </button>
            )}

            {healthCompanionProject && (
              <button
                onClick={() => onOpenDetails && onOpenDetails(healthCompanionProject)}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-mono font-medium flex items-center gap-1.5 transition-all"
              >
                <span>PROJECT PAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </GlassCard>

        {/* Repository Explorer Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-blue-400" />
              <span>Public Repositories Explorer</span>
            </h3>

            {/* Filter tags */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-500">Filter Language:</span>
              {['ALL', 'TypeScript', 'JavaScript', 'Kotlin', 'HTML'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedTopic(lang)}
                  className={`px-2.5 py-1 rounded-lg transition-colors text-[11px] font-semibold ${
                    selectedTopic === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Loading Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 animate-pulse space-y-3">
                  <div className="h-4 bg-slate-800 rounded w-1/2" />
                  <div className="h-3 bg-slate-800 rounded w-3/4" />
                  <div className="h-3 bg-slate-800 rounded w-1/3" />
                </div>
              ))}
            </div>
          )}

          {/* Error / Rate Limit Fallback */}
          {error && !loading && (
            <GlassCard className="p-8 text-center space-y-4 border-amber-500/30">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-white text-lg">GitHub data is temporarily unavailable.</h4>
                <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                  GitHub API rate limit or network connectivity restriction reached. You can visit my GitHub profile directly to inspect open source code.
                </p>
              </div>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-all"
              >
                <Github className="w-4 h-4" />
                <span>VIEW GITHUB PROFILE</span>
              </a>
            </GlassCard>
          )}

          {/* Repos Grid */}
          {!loading && !error && filteredRepos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map((repo) => {
                // Match project from projectsData if available
                const matchedProject = projectsData.find(p => 
                  p.slug.toLowerCase().includes(repo.name.toLowerCase().replace(/-/g, '')) ||
                  repo.name.toLowerCase().includes(p.slug.toLowerCase().replace(/-/g, ''))
                );

                return (
                  <GlassCard key={repo.id} className="p-5 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition-colors">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-heading font-bold text-white hover:text-blue-400 transition-colors text-base flex items-center gap-1.5 truncate"
                        >
                          <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span className="truncate">{repo.name}</span>
                        </a>
                        {repo.language && (
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300 shrink-0">
                            {repo.language}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                        {repo.description || 'Public development repository for web application component logic.'}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-800">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400" />
                            <span>{repo.stargazers_count}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5 text-slate-400" />
                            <span>{repo.forks_count}</span>
                          </span>
                        </div>
                        <span>Updated {new Date(repo.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <Github className="w-3 h-3 text-blue-400" />
                          <span>SOURCE</span>
                        </a>

                        {matchedProject && (
                          <button
                            onClick={() => onOpenCode && onOpenCode(matchedProject)}
                            className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[11px] font-mono font-semibold flex items-center gap-1 transition-colors"
                          >
                            <Code2 className="w-3 h-3" />
                            <span>SOURCE CODE</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          )}

          {/* Static Repos Fallback when list is empty */}
          {!loading && !error && filteredRepos.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURED_REPOS.map((r, idx) => (
                <GlassCard key={idx} className="p-5 space-y-3">
                  <h4 className="font-heading font-bold text-white text-base">{r.title}</h4>
                  <p className="text-xs text-slate-300">{r.description}</p>
                  <a
                    href={r.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 font-bold hover:underline"
                  >
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </GlassCard>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
