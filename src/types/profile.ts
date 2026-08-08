export interface Education {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  name: string;
  issuer: string;
  category: 'Development' | 'Data Analytics' | 'Banking' | 'AI';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  techStack: string[];
}

export interface Profile {
  brandName: string;
  name: string;
  title: string;
  rotatableTitles: string[];
  avatarUrl?: string;
  slogan: string;
  secondaryPositioning: string;
  supportingMessage: string;
  currentRole: string;
  developerIdentity: string;
  recruiterQuestion: string;
  recruiterAnswer: string;
  clientMessage: string;
  personalBrandStatement: string;
  noCodeSignatureTitle: string;
  noCodeSignatureText: string;
  problemFirstTitle: string;
  problemFirstText: string;
  availability: string[];
  workModeMessages: Record<string, string>;
  location: string;
  phone: string;
  email: string;
  aboutBio: string;
  workflow: string[];
  education: Education[];
  certifications: Certification[];
  services: Service[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    twitter?: string;
  };
}
