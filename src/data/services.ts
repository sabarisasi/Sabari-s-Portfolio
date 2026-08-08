export interface ServiceData {
  id: string;
  title: string;
  deliverables: string[];
  typicalTimeline: string;
  category: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'website-dev',
    title: 'Website Development',
    deliverables: ['Responsive Business Website', 'Landing Pages', 'SEO Optimization'],
    typicalTimeline: '1 - 2 weeks',
    category: 'Web'
  },
  {
    id: 'web-apps',
    title: 'Full-Stack Web Applications',
    deliverables: ['Custom Dashboards', 'Database Integration', 'Auth Systems', 'REST/GraphQL APIs'],
    typicalTimeline: '2 - 4 weeks',
    category: 'Web App'
  },
  {
    id: 'ai-apps',
    title: 'AI & LLM Integration',
    deliverables: ['Custom Gemini AI Assistants', 'Document Processing', 'Automated Workflows'],
    typicalTimeline: '2 - 3 weeks',
    category: 'AI'
  },
  {
    id: 'business-software',
    title: 'Internal Business Software',
    deliverables: ['Billing Systems', 'Inventory Portals', 'Audit Trail Workflows'],
    typicalTimeline: '2 - 4 weeks',
    category: 'Enterprise'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile-First Web Applications',
    deliverables: ['Responsive Progressive Web Apps', 'Cross-Platform Viewports', 'Touch Interfaces'],
    typicalTimeline: '2 - 3 weeks',
    category: 'Mobile'
  },
  {
    id: 'saas-products',
    title: 'SaaS / Digital Product MVPs',
    deliverables: ['Subscription Prototypes', 'Admin Control Panels', 'Scalable Architecture'],
    typicalTimeline: '3 - 5 weeks',
    category: 'SaaS'
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    deliverables: ['AI Task Pipelines', 'Data Transformations', 'Webhook Integrations'],
    typicalTimeline: '1 - 2 weeks',
    category: 'Automation'
  },
  {
    id: 'ui-ux-dev',
    title: 'UI/UX & Design Systems',
    deliverables: ['Tailwind UI Architecture', 'Light/Dark Theme Systems', 'Micro-interactions'],
    typicalTimeline: '1 - 2 weeks',
    category: 'Design'
  }
];
