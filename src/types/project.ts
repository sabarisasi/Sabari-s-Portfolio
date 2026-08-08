export type ProjectCategory = 
  | 'AI' 
  | 'FinTech' 
  | 'Healthcare' 
  | 'Business' 
  | 'SaaS' 
  | 'Web' 
  | 'Mobile' 
  | 'Automation' 
  | 'E-commerce';

export type ProjectStatus = 'In Progress' | 'Completed' | 'Planned' | 'Deployed' | 'Prototype' | 'Concept';

export type TrustLabel = 'REAL PROJECT' | 'INDEPENDENT PROJECT' | 'PORTFOLIO PROJECT' | 'PROTOTYPE' | 'CONCEPT' | 'PLANNED';

export type AudiencePerspective = 'RECRUITER' | 'CLIENT' | 'DEVELOPER';

export interface CodeFile {
  path: string;
  name: string;
  language: string;
  content: string;
}

export interface ProjectArchitectureNode {
  title: string;
  description: string;
  tech: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  trustLabel: TrustLabel;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Enterprise';
  technologies: string[];
  techRoles?: Record<string, string>;
  features: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  timeline: string;
  problem?: string;
  solution?: string;
  architecture: {
    overview: string;
    nodes: ProjectArchitectureNode[];
  };
  challenges: string[];
  solutions: string[];
  files: CodeFile[];
  highlights?: string[];
  sourceAvailable: boolean;
  livePreviewAvailable: boolean;
  createdAt?: string;
}
