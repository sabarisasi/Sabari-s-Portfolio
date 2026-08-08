export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  has_readme?: boolean;
}

export const FEATURED_REPOS = [
  {
    repoName: 'AI-Health-Companion-Apk',
    title: 'AI Health Companion',
    description: 'Android & Web AI wellness assistant with medical disclaimer safeguards and Gemini API integration.',
    htmlUrl: 'https://github.com/sabarisasi/AI-Health-Companion-Apk',
    projectSlug: 'ai-health-companion',
    language: 'TypeScript / Kotlin',
    topics: ['gemini-api', 'ai-wellness', 'react', 'health-tech']
  },
  {
    repoName: 'FinPilot-AI-Dashboard',
    title: 'FinPilot AI Dashboard',
    description: 'Financial intelligence & cash flow forecasting dashboard with live metrics and transaction categorization.',
    htmlUrl: 'https://github.com/sabarisasi',
    projectSlug: 'finpilot-ai',
    language: 'TypeScript',
    topics: ['finance', 'dashboard', 'ai-forecasting', 'recharts']
  },
  {
    repoName: 'RecruitGPT-Pro',
    title: 'RecruitGPT Pro',
    description: 'Automated candidate screening and resume evaluation pipeline powered by structured LLM outputs.',
    htmlUrl: 'https://github.com/sabarisasi',
    projectSlug: 'recruitgpt-pro',
    language: 'TypeScript',
    topics: ['recruitment-tech', 'llm-eval', 'supabase', 'react']
  }
];

// Helper to fetch repos with 1-hour localStorage caching
export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const CACHE_KEY = 'sabari_github_repos_cache_v1';
  const CACHE_TIME_KEY = 'sabari_github_repos_time_v1';
  const ONE_HOUR = 3600 * 1000;

  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);

    if (cachedData && cachedTime && (Date.now() - Number(cachedTime) < ONE_HOUR)) {
      return JSON.parse(cachedData);
    }

    const res = await fetch('https://api.github.com/users/sabarisasi/repos?sort=updated&per_page=20');
    if (!res.ok) {
      throw new Error(`GitHub API HTTP ${res.status}`);
    }

    const data: GitHubRepo[] = await res.json();
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
    return data;
  } catch (err) {
    console.warn('GitHub API fetch fallback triggered:', err);
    // Return fallback cached or static representation if API fails
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) return JSON.parse(cached);
    return [];
  }
}
