export type SkillTier = 'Core' | 'Working Knowledge' | 'Familiar' | 'Tools';

export interface SkillItem {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'AI DEVELOPMENT' | 'NO-CODE / LOW-CODE' | 'TOOLS & OPS' | 'BUSINESS & DOMAIN';
  tier: SkillTier;
  isPrimary?: boolean;
  description?: string;
}

export interface SkillCategory {
  categoryName: string;
  categoryKey: 'FRONTEND' | 'BACKEND' | 'AI DEVELOPMENT' | 'NO-CODE / LOW-CODE' | 'TOOLS & OPS' | 'BUSINESS & DOMAIN';
  skills: SkillItem[];
}

