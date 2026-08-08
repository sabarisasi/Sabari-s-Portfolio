import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: "01",
    title: "AI Health Companion",
    slug: "ai-health-companion",
    description: "An AI-powered health companion application designed to assist users with everyday health tracking, medication reminders, and wellness insights.",
    longDescription: "The AI Health Companion is an intelligent wellness application built to simplify personal health management. It integrates AI-driven symptom analysis, personalized health logs, automated medication schedules, and emergency medical contact access into a single responsive, user-friendly interface.",
    category: "Healthcare",
    status: "In Progress",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Node.js", "Express", "Supabase"],
    features: [
      "AI Health Assistant for conversational wellness guidance & symptom tracking",
      "Medication scheduling with automated daily reminder alerts",
      "Personalized health dashboard with vital metrics visualization",
      "Medical history logging & PDF summary export for doctor visits",
      "Emergency contact quick-dial panel with location integration",
      "Secure user authentication and local encrypted health profile data"
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/AI-Health-Companion-Apk",
    liveUrl: undefined, // Live demo coming soon
    featured: true,
    timeline: "Jan 2026 – Present",
    sourceAvailable: true,
    livePreviewAvailable: false,
    architecture: {
      overview: "React single-page application connected to a Node.js API backend and Gemini LLM for AI health insights and Supabase for cloud data synchronization.",
      nodes: [
        {
          title: "Frontend UI & State",
          description: "Responsive React 19 interface with custom health metric cards and Framer Motion transitions.",
          tech: ["React 19", "TypeScript", "Tailwind CSS"]
        },
        {
          title: "AI Reasoning Engine",
          description: "Server-side proxy wrapping Gemini API with strict medical disclaimer system instructions.",
          tech: ["Node.js", "Gemini API", "Express.js"]
        },
        {
          title: "Database & Auth",
          description: "Supabase PostgreSQL store for encrypted health logs, reminders, and profile data.",
          tech: ["Supabase PostgreSQL", "Row Level Security"]
        }
      ]
    },
    challenges: [
      "Ensuring AI responses maintain strict medical disclaimers and avoid dangerous diagnostic claims.",
      "Optimizing offline medication alert persistence for mobile browser users."
    ],
    solutions: [
      "Engineered multi-layered system prompts with strict context boundaries and structured JSON output contracts.",
      "Utilized browser local storage sync as a fallback during intermittent network connectivity."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# AI Health Companion
Developed by DEV BY SABARI M

An AI-driven wellness assistant and personal health management platform.

## Repository
https://github.com/sabarisasi/AI-Health-Companion-Apk

## Key Capabilities
- AI Symptom & Wellness Assistant
- Medication Schedules & Reminders
- Health Metrics Dashboard
- Medical History Tracking
`
      },
      {
        path: "src/App.tsx",
        name: "App.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { HealthDashboard } from './components/HealthDashboard';
import { MedicationTracker } from './components/MedicationTracker';
import { AIChatAssistant } from './components/AIChatAssistant';

export default function AIHealthCompanionApp() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'meds' | 'ai'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <header className="flex justify-between items-center pb-4 border-b border-slate-800">
        <h1 className="text-xl font-bold text-emerald-400">AI Health Companion</h1>
        <nav className="flex gap-2">
          <button onClick={() => setActiveTab('dashboard')} className="px-3 py-1 rounded bg-slate-900">Dashboard</button>
          <button onClick={() => setActiveTab('meds')} className="px-3 py-1 rounded bg-slate-900">Medications</button>
          <button onClick={() => setActiveTab('ai')} className="px-3 py-1 rounded bg-emerald-600 text-white font-bold">Ask AI</button>
        </nav>
      </header>
      <main className="mt-6">
        {activeTab === 'dashboard' && <HealthDashboard />}
        {activeTab === 'meds' && <MedicationTracker />}
        {activeTab === 'ai' && <AIChatAssistant />}
      </main>
    </div>
  );
}`
      }
    ]
  },
  {
    id: "02",
    title: "FinPilot AI — AI Banking & Finance Assistant",
    slug: "finpilot-ai",
    description: "AI-powered financial management platform designed to analyze bank statements, understand expenses, plan budgets, and generate personalized financial reports.",
    longDescription: "FinPilot AI is an intelligent personal and small business finance workspace. It processes bank statements, categorizes transactions automatically, forecasts cash flow trends, calculates EMI loan schedules, and provides an interactive AI Financial Advisor chat experience.",
    category: "FinTech",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Gemini API", "Recharts"],
    features: [
      "User Authentication & Multi-account Wallet Management",
      "Automated Bank Statement (CSV/PDF) Ingestion & Categorization",
      "Interactive Financial Dashboard with Expense Breakdown & Cashflow Analytics",
      "AI Financial Advisor for personalized budgeting & spending insights",
      "EMI & Loan Repayment Amortization Schedule Calculator",
      "Automated Monthly Financial Report Generator with JSON prompt structures",
      "Bill Payment Reminders & Recurring Expense Detection"
    ],
    images: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabari-m/finpilot-ai",
    liveUrl: undefined,
    featured: true,
    timeline: "Completed (2025)",
    sourceAvailable: true,
    livePreviewAvailable: false,
    architecture: {
      overview: "Full-stack financial workspace powered by Node.js, Express, Gemini LLM prompt pipelines, and Supabase PostgreSQL persistence.",
      nodes: [
        { title: "Dashboard UI", description: "Interactive analytics built with React and Recharts.", tech: ["React", "Recharts", "Tailwind CSS"] },
        { title: "AI Assistant Engine", description: "Gemini API structured prompt & classification pipeline.", tech: ["Node.js", "Gemini API", "Express"] },
        { title: "Database Layer", description: "Supabase PostgreSQL with Row-Level Security tenant policies.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Parsing unstructured bank transaction narration strings reliably across various public and private bank formats.",
      "Ensuring financial guidance provided by LLM remains non-fiduciary informational advice with proper safety disclaimers."
    ],
    solutions: [
      "Engineered multi-stage zero-shot JSON extraction prompts with regex fallbacks for merchant and amount detection.",
      "Implemented systemic context disclaimers and strictly separated calculated numerical values from LLM generated advice."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# FinPilot AI — AI Banking & Finance Assistant
Developed by DEV BY SABARI M

FinPilot AI is a modern financial intelligence workspace designed to streamline personal wealth management, bank statement parsing, budget planning, loan calculations, and automated financial insights.

## Features
- **User Authentication & Tenant Security**: Built on Supabase Auth with Row-Level Security (RLS).
- **Interactive Financial Dashboard**: Income vs Expense trends, cashflow forecasting, and budget progress bars.
- **Bank Statement CSV/PDF Upload**: Automatic transaction ingestion and zero-shot categorization.
- **EMI & Amortization Calculator**: Interactive principal vs interest breakdown chart and printable payment schedules.
- **AI Financial Advisor**: Context-aware chat assistant powered by Gemini API for budget coaching and monthly financial reports.
- **Bill Reminders**: Automated tracking for upcoming subscriptions and utility deadlines.

## Architecture
- **Frontend**: React 19, TypeScript, Tailwind CSS, Recharts, Lucide Icons
- **Backend API**: Node.js, Express, @google/genai SDK
- **Database**: Supabase PostgreSQL with Row Level Security (RLS)

## Environment Variables
\`\`\`env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
GEMINI_API_KEY=your-gemini-api-key
PORT=3000
\`\`\`

## Getting Started
1. Clone the repository: \`git clone https://github.com/sabari-m/finpilot-ai.git\`
2. Install dependencies: \`npm install\`
3. Set up environment variables in \`.env\`
4. Run dev server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "finpilot-ai",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/genai": "^0.1.1",
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
    "motion": "^12.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "recharts": "^2.12.0",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}`
      },
      {
        path: "src/App.tsx",
        name: "App.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { FinDashboard } from './components/Dashboard';
import { ExpenseTracker } from './components/ExpenseTracker';
import { EMICalculator } from './components/EMICalculator';
import { AIFinancialAssistant } from './components/AIFinancialAssistant';
import { Wallet, PieChart, Calculator, Bot, Bell } from 'lucide-react';

export default function FinPilotApp() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'emi' | 'ai'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
            FP
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">FinPilot AI</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Financial Intelligence</p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <PieChart className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('transactions')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'transactions' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Wallet className="w-4 h-4" />
            <span>Transactions</span>
          </button>
          <button
            onClick={() => setActiveTab('emi')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'emi' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Calculator className="w-4 h-4" />
            <span>EMI Calculator</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'ai' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Bot className="w-4 h-4 text-emerald-300" />
            <span>AI Advisor</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'dashboard' && <FinDashboard />}
        {activeTab === 'transactions' && <ExpenseTracker />}
        {activeTab === 'emi' && <EMICalculator />}
        {activeTab === 'ai' && <AIFinancialAssistant />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/Dashboard.tsx",
        name: "Dashboard.tsx",
        language: "typescript",
        content: `import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp, ShieldAlert } from 'lucide-react';

export const FinDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs text-slate-400 font-mono">Total Net Balance</p>
          <h3 className="text-2xl font-bold text-white mt-2">$24,850.00</h3>
          <span className="text-xs text-emerald-400 font-mono flex items-center gap-1 mt-2">
            <ArrowUpRight className="w-3.5 h-3.5" /> +12.4% from last month
          </span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs text-slate-400 font-mono">Monthly Income</p>
          <h3 className="text-2xl font-bold text-emerald-400 mt-2">$8,500.00</h3>
          <span className="text-xs text-slate-500 font-mono mt-2 block">2 active income streams</span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs text-slate-400 font-mono">Monthly Expenses</p>
          <h3 className="text-2xl font-bold text-rose-400 mt-2">$3,420.00</h3>
          <span className="text-xs text-rose-400 font-mono flex items-center gap-1 mt-2">
            <ArrowDownRight className="w-3.5 h-3.5" /> 40.2% of total income
          </span>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-xs text-slate-400 font-mono">Savings Progress</p>
          <h3 className="text-2xl font-bold text-blue-400 mt-2">$5,080.00</h3>
          <div className="w-full bg-slate-800 h-2 rounded-full mt-3 overflow-hidden">
            <div className="bg-blue-500 h-full w-[68%]" />
          </div>
        </div>
      </div>

      {/* Analytics Notice */}
      <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          <p className="text-xs text-slate-300">
            <strong>AI Insight:</strong> Your discretionary dining out expenses decreased by 18% this week. On track to reach $6,000 monthly savings goal.
          </p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/EMICalculator.tsx",
        name: "EMICalculator.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(5);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
        <Calculator className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-bold text-white">Loan EMI & Amortization Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">Loan Amount ($)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">Annual Interest Rate (%)</label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">Tenure (Years)</label>
          <input
            type="number"
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white text-sm"
          />
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-slate-400 font-mono">Monthly EMI</p>
          <p className="text-xl font-bold text-blue-400 mt-1">\${isNaN(emi) ? 0 : emi.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 font-mono">Total Interest</p>
          <p className="text-xl font-bold text-rose-400 mt-1">\${isNaN(totalInterest) ? 0 : totalInterest.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400 font-mono">Total Payment</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">\${isNaN(totalPayment) ? 0 : totalPayment.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AIFinancialAssistant.tsx",
        name: "AIFinancialAssistant.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Bot, Send, ShieldAlert, Sparkles } from 'lucide-react';

export const AIFinancialAssistant = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I am FinPilot AI. Ask me about budget management, tax calculations, or expense optimization." }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: "Based on your current monthly breakdown: Allocate 50% ($4,250) to necessities, 30% ($2,550) to personal items, and 20% ($1,700) directly to investments." }
      ]);
    }, 800);
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto h-[600px] flex flex-col">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-white">AI Financial Advisor</h2>
        </div>
        <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
          Informational Guidance Only
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 p-2">
        {messages.map((m, idx) => (
          <div key={idx} className={\`flex \${m.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[80%] p-3.5 rounded-xl text-xs sm:text-sm \${
              m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-200 border border-slate-800'
            }\`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2 pt-3 border-t border-slate-800">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI about your expenses or budget strategy..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- FinPilot AI Supabase Database Schema
-- DEV BY SABARI M

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT,
  currency TEXT DEFAULT 'USD',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own profile" ON public.profiles FOR ALL USING (auth.uid() = id);

CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  type TEXT CHECK (type IN ('INCOME', 'EXPENSE')) NOT NULL,
  category TEXT DEFAULT 'Uncategorized',
  transaction_date DATE DEFAULT CURRENT_DATE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own transactions" ON public.transactions FOR ALL USING (auth.uid() = user_id);
`
      }
    ]
  },
  {
    id: "03",
    title: "RecruitGPT Pro — AI Career & Resume Platform",
    slug: "recruit-gpt-pro",
    description: "AI-powered career platform for instant resume creation, ATS score optimization, mock interview simulations, and recruiter candidate screening.",
    longDescription: "RecruitGPT Pro accelerates career development and recruitment processes. Candidates can build ATS-optimized resumes, run mock AI interviews, and generate tailored cover letters, while recruiters can score candidate applications against job requirements.",
    category: "AI",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "Node.js", "PostgreSQL", "Supabase", "OpenAI", "ElevenLabs", "Tailwind CSS"],
    features: [
      "Interactive Drag-and-Drop Resume Builder",
      "Real-time ATS Score Checker with keyword gap analysis",
      "AI Resume Optimization & Formatting Enhancements",
      "Tailored Cover Letter & Outreach Email Generator",
      "Interactive Mock Interviews with Real-time AI Feedback",
      "Voice Interview Simulation using ElevenLabs TTS integration",
      "HR Candidate Screener & Job Application Tracker"
    ],
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabari-m/recruit-gpt-pro",
    liveUrl: "https://recruit-gpt.demo.app",
    featured: false,
    timeline: "Completed (2025)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Node.js backend orchestration wrapping OpenAI API for resume evaluation and ElevenLabs for voice synthesis.",
      nodes: [
        { title: "Screener UI", description: "React candidate card board.", tech: ["React", "Tailwind CSS"] },
        { title: "Evaluation Service", description: "OpenAI JSON mode scoring.", tech: ["OpenAI API", "Node.js"] }
      ]
    },
    challenges: ["Generating consistent ATS keyword match scores across varied formatting structures."],
    solutions: ["Standardized document extraction using pdf-parse prior to semantic embedding analysis."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# RecruitGPT Pro\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "04",
    title: "PromptFlow Studio — Prompt Engineering Playground",
    slug: "promptflow-studio",
    description: "Prompt engineering playground for creating, testing, comparing, versioning, and evaluating AI prompts across multiple LLM providers.",
    longDescription: "PromptFlow Studio is a developer utility for AI prompt engineers. It allows developers to test a single prompt across Claude, OpenAI, and Gemini models side-by-side, analyze token costs, version system messages, and export structured production code snippets.",
    category: "Automation",
    status: "In Progress",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Enterprise",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "PostgreSQL", "OpenAI", "Anthropic", "Gemini", "LangChain", "Docker"],
    features: [
      "Multi-model Parallel Execution Playground (Claude, GPT-4, Gemini)",
      "Prompt Editor with syntax highlighting & variable placeholders",
      "Prompt Versioning & Git-style history diff viewer",
      "Token Usage Analytics & Cost Estimation Calculator",
      "Evaluation Scoring Suite (Semantic similarity & JSON validation)",
      "One-click Code Export (TypeScript, Python, cURL)",
      "Prompt Marketplace & Team Template Library"
    ],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabari-m/promptflow-studio",
    featured: false,
    timeline: "Jan 2026 – Present",
    sourceAvailable: true,
    livePreviewAvailable: false,
    architecture: {
      overview: "Next.js App Router workspace with streaming response handlers connected to OpenAI, Anthropic, and Gemini SDKs.",
      nodes: [
        { title: "Playground Interface", description: "Split pane comparison layout.", tech: ["Next.js", "TypeScript"] },
        { title: "API Gateway", description: "Unified streaming LLM adapter.", tech: ["LangChain", "Node.js"] }
      ]
    },
    challenges: ["Normalizing streaming response chunks from different provider APIs into a unified UI stream."],
    solutions: ["Created a standardized Server-Sent Events (SSE) adapter layer."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# PromptFlow Studio\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "05",
    title: "Shree Lakshmi Traders — GST Billing Software",
    slug: "shree-lakshmi-traders",
    description: "Architecting a GST-compliant billing, invoicing, and inventory management web application for retail trading businesses.",
    longDescription: "Shree Lakshmi Traders is a high-density, real-time GST-compliant billing and stock management platform engineered specifically for Indian retail trading businesses. It provides seamless invoice generation with HSN/SAC code tracking, automatic tax calculations, customer ledgers, and print-ready PDF invoices.",
    category: "Business",
    status: "In Progress",
    trustLabel: "REAL PROJECT",
    difficulty: "Enterprise",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Vite", "Lucide React"],
    features: [
      "Real-time inventory stock tracking with automated reorder alerts",
      "GST-compliant multi-tax invoice generator (CGST/SGST/IGST support)",
      "Customer ledger database with credit balance tracking",
      "Print-ready PDF invoice templates formatted for thermal & standard printers",
      "High-density analytical dashboard powered by Supabase PostgreSQL persistence"
    ],
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabari-m/shree-lakshmi-traders-gst",
    liveUrl: "https://shree-lakshmi-traders.demo.app",
    featured: true,
    timeline: "Jan 2026 – Present",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack React SPA connected to Supabase Cloud PostgreSQL with row-level security policies.",
      nodes: [
        { title: "Frontend UI Layer", description: "High-density grid layout.", tech: ["React 19", "TypeScript"] },
        { title: "Backend & Database", description: "Supabase PostgreSQL store.", tech: ["Supabase PostgreSQL"] }
      ]
    },
    challenges: ["Ensuring zero tax discrepancies when rounding fractional invoice line items."],
    solutions: ["Implemented a standardized decimal precision utility."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Shree Lakshmi Traders — GST Billing Software\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "06",
    title: "Enterprise Inventory Management System",
    slug: "inventory-management-system",
    description: "Full-stack inventory, purchase order, and supplier management platform designed for small and mid-sized enterprises.",
    longDescription: "A modern inventory lifecycle software built for SMEs. It streamlines stock registration, purchase order dispatching, supplier database directories, low-stock threshold monitoring, and dynamic warehouse movement logging with relational MySQL persistence.",
    category: "SaaS",
    status: "In Progress",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "Node.js", "MySQL", "Express.js", "Tailwind CSS"],
    features: [
      "Dynamic multi-category product cataloging with SKU barcodes",
      "Supplier ledger tracking and purchase order lifecycle management",
      "Automated stock audit trail logging for inbound/outbound goods",
      "Low stock threshold alerts with instant email notification triggers",
      "Interactive inventory valuation and stock velocity analytics"
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabari-m/inventory-management-system",
    featured: false,
    timeline: "Feb 2026 – Present",
    sourceAvailable: true,
    livePreviewAvailable: false,
    architecture: {
      overview: "Client-Server architecture with React frontend communicating via REST API to a Node.js Express server connected to MySQL database.",
      nodes: [
        { title: "Frontend Dashboard", description: "Responsive React application.", tech: ["React 19", "Tailwind CSS"] },
        { title: "Backend REST API", description: "Express.js REST service.", tech: ["Node.js", "Express.js"] }
      ]
    },
    challenges: ["Preventing race conditions during concurrent stock updates."],
    solutions: ["Applied database row locking (SELECT ... FOR UPDATE) inside MySQL transactions."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Enterprise Inventory Management System\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "07",
    title: "AI Chatbot Platform & Knowledge Base",
    slug: "ai-chatbot-platform",
    description: "Designing an intelligent assistant platform featuring PDF document Q&A, image analysis, and searchable workspace knowledge bases.",
    longDescription: "An AI application platform designed to process unstructured documents (PDFs, docs, notes) using RAG (Retrieval-Augmented Generation) and Claude/Gemini AI APIs. Enables context-aware chat, instant document summarization, and semantic search.",
    category: "AI",
    status: "Planned",
    trustLabel: "PLANNED",
    difficulty: "Advanced",
    technologies: ["React", "Node.js", "Claude API", "Gemini API", "Supabase", "Tailwind CSS"],
    features: [
      "Interactive PDF document upload & vector embedding indexing",
      "Semantic Q&A chat with document page citations",
      "Multi-modal image content analysis & text extraction",
      "Custom workspace knowledge bases with search vector indexes"
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: false,
    timeline: "Planned for Q2 2026",
    sourceAvailable: false,
    livePreviewAvailable: false,
    architecture: {
      overview: "AI-assisted RAG architecture leveraging vector embeddings stored in Supabase pgvector.",
      nodes: [{ title: "RAG Engine", description: "Vector search over document chunks.", tech: ["Supabase pgvector"] }]
    },
    challenges: ["Handling large multi-page PDFs efficiently without exceeding LLM context boundaries."],
    solutions: ["Chunked vector retrieval to feed top-K relevant text passages."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# AI Chatbot Platform & Knowledge Base\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "08",
    title: "Hospital Management System",
    slug: "hospital-management-system",
    description: "Clinical care management app for doctor scheduling, patient electronic health records (EHR), appointments, and pharmacy billing.",
    longDescription: "End-to-end digital healthcare software enabling patient registration, electronic health records (EHR), physician roster scheduling, OPD appointment bookings, and automated pharmacy billing workflows.",
    category: "Healthcare",
    status: "Planned",
    trustLabel: "PLANNED",
    difficulty: "Enterprise",
    technologies: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    features: [
      "Electronic Health Record (EHR) timeline with prescription history",
      "Doctor appointment scheduling calendar with queue management",
      "Medical billing system connected to pharmacy inventory",
      "Patient portal for lab report downloads & appointment booking"
    ],
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: false,
    timeline: "Planned for Q3 2026",
    sourceAvailable: false,
    livePreviewAvailable: false,
    architecture: {
      overview: "Compliant healthcare ERP system structured with microservices.",
      nodes: [{ title: "Clinical Portal", description: "Role-based React interface.", tech: ["React"] }]
    },
    challenges: ["Ensuring high data privacy and role-based access control across clinical notes."],
    solutions: ["Enforcing fine-grained RBAC middleware on all healthcare REST endpoints."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Hospital Management System\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "09",
    title: "Modern E-commerce Platform",
    slug: "modern-ecommerce-platform",
    description: "Full-stack modular e-commerce experience featuring dynamic catalog browsing, shopping cart workflows, checkout simulation, and order history.",
    longDescription: "A modern online retail web application built with React, TypeScript, Node.js, and Stripe payment integration. Includes customer authentication, product reviews, admin inventory management, and responsive cart workflows.",
    category: "E-commerce",
    status: "Prototype",
    trustLabel: "PROTOTYPE",
    difficulty: "Intermediate",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Stripe"],
    features: [
      "User Authentication & Customer Profile Management",
      "Filterable Product Catalog with category & price facets",
      "Interactive Shopping Cart & Persistent Saved Items",
      "Stripe Payment Gateway Checkout Integration",
      "Admin Panel for Product Stock & Order Fulfillment",
      "Customer Product Ratings & Verified Reviews"
    ],
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: false,
    timeline: "Prototype Stage",
    sourceAvailable: true,
    livePreviewAvailable: false,
    architecture: {
      overview: "Modular e-commerce prototype with client-side state management and Express API mockup.",
      nodes: [{ title: "Storefront UI", description: "React product grid & cart.", tech: ["React", "Tailwind CSS"] }]
    },
    challenges: ["Managing persistent cart state across page refreshes and user sessions."],
    solutions: ["Combined React Context API with LocalStorage sync and Supabase user session store."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Modern E-commerce Platform\nDEV BY SABARI M\n`
      }
    ]
  },
  {
    id: "10",
    title: "AI Document Analyzer",
    slug: "ai-document-analyzer",
    description: "AI-powered document analysis application for text extraction, automatic summarization, question answering, and structured data extraction.",
    longDescription: "An AI productivity concept designed to process business documents, invoices, legal contracts, and reports. Extracts key entities, generates multi-point executive summaries, answers targeted queries, and exports clean JSON or Excel spreadsheets.",
    category: "AI",
    status: "Concept",
    trustLabel: "CONCEPT",
    difficulty: "Intermediate",
    technologies: ["React", "TypeScript", "Gemini API", "Node.js", "Tailwind CSS"],
    features: [
      "Document Drag-and-Drop File Uploader (PDF / DOCX / Images)",
      "Automatic OCR Text Extraction & Structuring",
      "AI Executive Summarization with key takeaways",
      "Natural Language Question Answering over document content",
      "Structured Information & Entity Extraction (Dates, Amounts, Parties)",
      "Export Insights to JSON, CSV, or formatted PDF reports"
    ],
    images: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop"
    ],
    featured: false,
    timeline: "Concept Stage",
    sourceAvailable: false,
    livePreviewAvailable: false,
    architecture: {
      overview: "Concept architecture for browser-based document parsing and Gemini API vision/text processing.",
      nodes: [{ title: "Analysis Pipeline", description: "Gemini API structured output extraction.", tech: ["Gemini API"] }]
    },
    challenges: ["Parsing complex table structures within scanned PDF documents."],
    solutions: ["Utilizing multi-modal vision capabilities of Gemini 1.5 Flash for direct document image analysis."],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# AI Document Analyzer\nDEV BY SABARI M\n`
      }
    ]
  }
];
