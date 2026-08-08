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
    githubUrl: "https://github.com/sabarisasi/FinPilot-AI",
    liveUrl: "https://finpilot-ai-9280.ai.studio",
    featured: true,
    timeline: "Completed (2025)",
    sourceAvailable: true,
    livePreviewAvailable: true,
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
    slug: "recruitgpt-pro",
    description: "AI-powered career platform for instant resume creation, ATS score optimization, mock interview simulations, cover letter generation, and job application tracking.",
    longDescription: "RecruitGPT Pro is an end-to-end career intelligence suite designed to empower job seekers. Candidates can craft ATS-tailored resumes, simulate behavioral and technical interviews with AI feedback, check job description match scores, and organize application pipelines.",
    category: "AI",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Gemini API", "Framer Motion"],
    features: [
      "Interactive Multi-template Resume Builder with Real-time Print Layout",
      "ATS Compatibility Estimator with Keyword Match & Section Analysis",
      "AI Resume Bullet Optimizer using STAR-Method Sentence Enhancements",
      "Custom Cover Letter Generator with Tone & Target Role Customization",
      "Interactive AI Mock Interviewer with Behavioral & Technical Questions",
      "Job Application Kanban Board with Interview Deadlines & Reminders",
      "Skill Gap Analyzer matching current credentials against Target Roles"
    ],
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/RecruitGPT-Pro",
    liveUrl: "https://recruitgpt-pro-333155634562.asia-southeast1.run.app",
    featured: false,
    timeline: "Completed (2025)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack AI career platform built on React, Supabase PostgreSQL with RLS, and Gemini structured prompt analysis engines.",
      nodes: [
        { title: "Resume & ATS Workspace", description: "Interactive document editor and real-time print engine.", tech: ["React", "Tailwind CSS", "TypeScript"] },
        { title: "AI Candidate Evaluator", description: "Gemini JSON structured output pipelines for resume ATS scoring.", tech: ["Node.js", "Gemini API", "Express"] },
        { title: "User Data Storage", description: "Supabase PostgreSQL with Row Level Security for user application records.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Generating reliable, reproducible ATS compatibility scores without hallucinating employer criteria.",
      "Maintaining state synchronization between multi-step resume sections and real-time PDF print preview windows."
    ],
    solutions: [
      "Designed standardized JSON prompt schema constraining LLM outputs to numerical score bounds, keyword lists, and specific action items.",
      "Implemented a single-source-of-truth React context model synced with Supabase auto-save debouncing."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# RecruitGPT Pro — AI Career & Resume Platform
Developed by DEV BY SABARI M

RecruitGPT Pro is a full-featured career acceleration suite designed to help candidates land interviews faster through AI-powered document creation, ATS optimization, interactive mock interviews, and application tracking.

## Key Features
- **Multi-template Resume Builder**: Create, edit, reorder, and export print-ready resumes.
- **ATS Compatibility Estimator**: Upload job descriptions and receive instant ATS keyword scores, missing skills, and structural advice.
- **Cover Letter Generator**: Generate tailored, compelling cover letters matching specific job descriptions and desired tone.
- **AI Mock Interview Simulator**: Practice behavioral, technical, and HR interview questions with automated AI feedback and scoring.
- **Job Tracker Pipeline**: Kanban-style tracker for application statuses, interview schedules, and follow-ups.
- **Skill Gap Analysis**: Identify missing certifications or technical competencies required for target career roles.

## Architecture & Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, Framer Motion
- **AI Processing**: Gemini 2.5 API with structured JSON output prompts
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS) policies

## Environment Setup
\`\`\`env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
GEMINI_API_KEY=your-gemini-key
PORT=3000
\`\`\`

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/recruitgpt-pro.git\`
2. Install dependencies: \`npm install\`
3. Run development mode: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "recruitgpt-pro",
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
import { ResumeBuilder } from './components/ResumeBuilder';
import { ATSChecker } from './components/ATSChecker';
import { MockInterview } from './components/MockInterview';
import { JobTracker } from './components/JobTracker';
import { AICareerCoach } from './components/AICareerCoach';
import { FileText, Target, MessageSquare, Briefcase, Bot, Sparkles } from 'lucide-react';

export default function RecruitGPTApp() {
  const [activeTab, setActiveTab] = useState<'builder' | 'ats' | 'interview' | 'jobs' | 'coach'>('builder');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 font-bold">
            RG
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">RecruitGPT Pro</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — AI Career Platform</p>
          </div>
        </div>
        
        <nav className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('builder')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'builder' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <FileText className="w-4 h-4" />
            <span>Resume Builder</span>
          </button>
          <button
            onClick={() => setActiveTab('ats')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'ats' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Target className="w-4 h-4 text-emerald-400" />
            <span>ATS Checker</span>
          </button>
          <button
            onClick={() => setActiveTab('interview')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'interview' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Mock Interview</span>
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'jobs' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Job Tracker</span>
          </button>
          <button
            onClick={() => setActiveTab('coach')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'coach' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Bot className="w-4 h-4 text-blue-300" />
            <span>Career Coach</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'builder' && <ResumeBuilder />}
        {activeTab === 'ats' && <ATSChecker />}
        {activeTab === 'interview' && <MockInterview />}
        {activeTab === 'jobs' && <JobTracker />}
        {activeTab === 'coach' && <AICareerCoach />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/ResumeBuilder.tsx",
        name: "ResumeBuilder.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Plus, Trash2, Download, Sparkles, User, Briefcase, GraduationCap, Code } from 'lucide-react';

export const ResumeBuilder = () => {
  const [personal, setPersonal] = useState({ name: 'SABARI M', title: 'Full-Stack & AI Developer', email: 'sabari@example.com', phone: '+91 98765 43210', location: 'Tamil Nadu, India' });
  const [experiences, setExperiences] = useState([
    { id: '1', role: 'Full-Stack Developer', company: 'Tech Solutions', duration: '2023 - Present', details: 'Built scalable Web apps with React, Express, and Supabase.' }
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Editor Form */}
      <div className="space-y-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <User className="w-5 h-5 text-purple-400" />
          <span>Resume Details</span>
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Full Name</label>
            <input
              type="text"
              value={personal.name}
              onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Target Title</label>
            <input
              type="text"
              value={personal.title}
              onChange={(e) => setPersonal({ ...personal, title: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" /> Work Experience
            </h3>
            <button
              onClick={() => setExperiences([...experiences, { id: Date.now().toString(), role: 'Software Engineer', company: 'New Corp', duration: '2024', details: 'Key achievement...' }])}
              className="px-2.5 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white text-xs font-mono flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" /> Add
            </button>
          </div>

          {experiences.map((exp) => (
            <div key={exp.id} className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => setExperiences(experiences.map(x => x.id === exp.id ? { ...x, role: e.target.value } : x))}
                  placeholder="Role"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                />
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => setExperiences(experiences.map(x => x.id === exp.id ? { ...x, company: e.target.value } : x))}
                  placeholder="Company"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-white"
                />
              </div>
              <textarea
                value={exp.details}
                onChange={(e) => setExperiences(experiences.map(x => x.id === exp.id ? { ...x, details: e.target.value } : x))}
                placeholder="Bullet points / achievements"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2 text-xs text-slate-200 h-16"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Live Preview Paper Frame */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <span className="text-xs font-mono text-slate-400">Live Print Preview</span>
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold font-mono flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" /> Export PDF
          </button>
        </div>

        <div className="flex-1 bg-white text-slate-900 p-8 rounded-xl shadow-2xl font-sans min-h-[500px]">
          <h1 className="text-2xl font-bold text-slate-900 border-b pb-2 border-slate-200">{personal.name}</h1>
          <p className="text-sm font-semibold text-purple-700 mt-1">{personal.title}</p>
          <p className="text-xs text-slate-600 mt-1">{personal.email} | {personal.phone} | {personal.location}</p>

          <div className="mt-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2">Experience</h2>
            {experiences.map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="flex justify-between text-xs font-bold text-slate-800">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-slate-500">{exp.duration}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/ATSChecker.tsx",
        name: "ATSChecker.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Target, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export const ATSChecker = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    if (!jobDescription || !resumeText) return;
    setAnalyzing(true);

    setTimeout(() => {
      setResult({
        score: 84,
        strengths: ["Strong technical keyword match for React, TypeScript & Node.js", "Clear chronological work history format"],
        missingKeywords: ["Docker", "GraphQL", "CI/CD Pipeline"],
        recommendations: [
          "Incorporate quantifiable metrics in your top achievement bullet points.",
          "Add Docker and CI/CD to your technical skills summary block."
        ]
      });
      setAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <Target className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-bold text-white">ATS Compatibility Estimator</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Target Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste job requirements here..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white h-36 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Your Resume Text</label>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste your current resume content..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white h-36 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>{analyzing ? 'Analyzing Match Score...' : 'Calculate ATS Compatibility'}</span>
        </button>
      </div>

      {result && (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono text-slate-400">Estimated Match Score</span>
              <h3 className="text-3xl font-bold text-emerald-400">{result.score}%</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-500 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
              AI-Generated Estimate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-bold font-mono text-slate-300 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Strengths
              </h4>
              <ul className="space-y-1.5">
                {result.strengths.map((s: string, idx: number) => (
                  <li key={idx} className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800">{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold font-mono text-amber-400 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-4 h-4" /> Missing Keywords
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.missingKeywords.map((k: string, idx: number) => (
                  <span key={idx} className="text-xs font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20 px-2.5 py-1 rounded-lg">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};`
      },
      {
        path: "src/components/MockInterview.tsx",
        name: "MockInterview.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, CheckCircle2 } from 'lucide-react';

export const MockInterview = () => {
  const [role, setRole] = useState('Frontend Engineer');
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  const handleStart = () => {
    setStarted(true);
    setMessages([
      { role: 'ai', text: \`Welcome to your \${role} interview. To begin: Tell me about a challenging technical problem you solved using React state management.\` }
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: 'Great explanation. You effectively highlighted component isolation. Next: How do you optimize large rendering trees in React 18?' }
      ]);
    }, 900);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {!started ? (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center space-y-4">
          <MessageSquare className="w-10 h-10 text-purple-400 mx-auto" />
          <h2 className="text-lg font-bold text-white">AI Behavioral & Technical Interview Simulator</h2>
          <p className="text-xs text-slate-400 max-w-md mx-auto">Select your target role and practice answering real interview questions with instant automated feedback.</p>
          
          <div className="max-w-xs mx-auto">
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white text-center"
            />
          </div>

          <button
            onClick={handleStart}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs"
          >
            Start Interview
          </button>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl h-[550px] flex flex-col">
          <div className="border-b border-slate-800 pb-3 mb-3 flex items-center justify-between">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-purple-400" /> {role} Interview Session
            </h3>
            <button onClick={() => setStarted(false)} className="text-xs text-slate-500 hover:text-slate-300">End Session</button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 p-2">
            {messages.map((m, idx) => (
              <div key={idx} className={\`flex \${m.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
                <div className={\`max-w-[85%] p-3.5 rounded-xl text-xs sm:text-sm \${
                  m.role === 'user' ? 'bg-purple-600 text-white' : 'bg-slate-950 text-slate-200 border border-slate-800'
                }\`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-3 border-t border-slate-800 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your interview answer..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
            <button onClick={handleSend} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center gap-1">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};`
      },
      {
        path: "src/components/JobTracker.tsx",
        name: "JobTracker.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Briefcase, Plus, Clock, CheckCircle } from 'lucide-react';

export const JobTracker = () => {
  const [jobs] = useState([
    { id: '1', company: 'Google', role: 'Frontend Engineer', status: 'Interview Scheduled', date: '2025-03-15' },
    { id: '2', company: 'Stripe', role: 'Full-Stack Developer', status: 'Applied', date: '2025-03-01' },
    { id: '3', company: 'Vercel', role: 'UI Engineer', status: 'Screening', date: '2025-02-28' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-purple-400" />
          <span>Job Application Pipeline</span>
        </h2>
        <button className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Add Application
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">{job.company}</span>
              <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded">
                {job.status}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-200">{job.role}</p>
            <p className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Applied on {job.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AICareerCoach.tsx",
        name: "AICareerCoach.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';

export const AICareerCoach = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am your AI Career Coach. Ask me about career positioning, interview strategies, or salary negotiation tactics.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text: input }]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'When negotiating tech compensation, always anchor your target around total compensation including equity, and base your expectations on recent verified market benchmarks.' }
      ]);
    }, 700);
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-3xl mx-auto h-[550px] flex flex-col">
      <div className="border-b border-slate-800 pb-3 mb-3 flex items-center justify-between">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-400" /> AI Career & Compensation Coach
        </h2>
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

      <div className="flex gap-2 pt-3 border-t border-slate-800 mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI about career planning or negotiations..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-blue-500"
        />
        <button onClick={handleSend} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold">
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
        content: `-- RecruitGPT Pro Supabase Database Schema
-- DEV BY SABARI M

CREATE TABLE IF NOT EXISTS public.resumes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT DEFAULT 'Untitled Resume',
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own resumes" ON public.resumes FOR ALL USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.job_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  status TEXT DEFAULT 'Applied',
  applied_date DATE DEFAULT CURRENT_DATE,
  notes TEXT
);

ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own applications" ON public.job_applications FOR ALL USING (auth.uid() = user_id);
`
      }
    ]
  },
  {
    id: "04",
    title: "PromptFlow Studio — AI Prompt Engineering Playground",
    slug: "promptflow-studio",
    description: "AI prompt engineering workspace for creating, testing, side-by-side model comparison, versioning, token tracking, and evaluating prompts.",
    longDescription: "PromptFlow Studio is a developer workspace for AI prompt engineering. It enables developers and teams to design system messages, test variables across Gemini, OpenAI, and Anthropic models side-by-side, analyze token usage costs, version prompt iterations, and evaluate output quality.",
    category: "AI",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Gemini API", "Recharts", "Framer Motion"],
    features: [
      "Interactive Multi-Panel Prompt Editor with Variable Ingestion {{var}}",
      "Side-by-Side Model Comparison (Gemini 2.5, GPT-4, Claude 3.5)",
      "Prompt Version Control with Commit History & Diff Inspection",
      "Automated Output Evaluator (Clarity, Relevance, JSON Schema Validation)",
      "Token Consumption & Cost Estimation Calculator",
      "Reusable Prompt Template Library across Writing, Code, and RAG Agents",
      "One-click Code Snippet Exporter (TypeScript, Python, cURL)"
    ],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/PromptFlow-Studio",
    liveUrl: "https://genesis-portfolio-pp6zq92mh-praveenkumaru691-1567s-projects.vercel.app",
    featured: false,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack prompt management platform using Node.js backend streams, Supabase PostgreSQL with RLS, and Gemini structured evaluation pipelines.",
      nodes: [
        { title: "Prompt Editor UI", description: "Multi-tab editor with dynamic variable binding and split preview.", tech: ["React", "TypeScript", "Tailwind CSS"] },
        { title: "Multi-Model Gateway", description: "Unified streaming adapter for Gemini API and model benchmarks.", tech: ["Node.js", "Express", "@google/genai"] },
        { title: "Version Control Database", description: "Supabase PostgreSQL tables storing commit logs, variables, and evaluation scores.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Standardizing token usage and latency benchmarks across different LLM provider responses.",
      "Ensuring user variables (e.g., {{context}}) are safely escaped before prompt injection into LLM execution payloads."
    ],
    solutions: [
      "Engineered a unified response wrapper that normalizes token count metadata and measures end-to-end response latency.",
      "Built a pre-parser variable engine that validates required placeholders prior to API transmission."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# PromptFlow Studio — AI Prompt Engineering Playground
Developed by DEV BY SABARI M

PromptFlow Studio is an AI prompt engineering workspace for creating, testing, comparing, versioning, and evaluating prompts across AI models.

## Key Features
- **Prompt Editor**: System & user prompt views with variable interpolation (\`{{variable}}\`).
- **Model Comparison**: Side-by-side generation across Gemini, GPT-4, and Claude models.
- **Version History**: Git-style version tracking with commit timestamps and restoration.
- **Evaluation Engine**: Automated quality scoring (1-100) on relevance, clarity, and schema adherence.
- **Token Analytics**: Real-time token consumption tracking and cost estimation calculator.
- **Template Library**: Pre-built prompt templates for RAG, classification, code generation, and AI agents.

## Architecture & Tech Stack
- **Frontend**: React 19, TypeScript, Tailwind CSS, Lucide Icons, Recharts
- **Backend / AI**: Node.js, Express, @google/genai SDK
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS) policies

## Environment Setup
\`\`\`env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
GEMINI_API_KEY=your-gemini-key
PORT=3000
\`\`\`

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/promptflow-studio.git\`
2. Install dependencies: \`npm install\`
3. Run development mode: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "promptflow-studio",
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
import { PromptEditor } from './components/PromptEditor';
import { ModelComparison } from './components/ModelComparison';
import { PromptEvaluator } from './components/PromptEvaluator';
import { VersionHistory } from './components/VersionHistory';
import { Terminal, Columns, Award, GitBranch, Sparkles } from 'lucide-react';

export default function PromptFlowStudioApp() {
  const [activeTab, setActiveTab] = useState<'editor' | 'compare' | 'evaluate' | 'versions'>('editor');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
            PF
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">PromptFlow Studio</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — AI Prompt Engineering Playground</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('editor')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'editor' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Terminal className="w-4 h-4" />
            <span>Prompt Editor</span>
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'compare' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Columns className="w-4 h-4" />
            <span>Model Comparison</span>
          </button>
          <button
            onClick={() => setActiveTab('evaluate')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'evaluate' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Evaluator</span>
          </button>
          <button
            onClick={() => setActiveTab('versions')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'versions' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <GitBranch className="w-4 h-4" />
            <span>Version Control</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'editor' && <PromptEditor />}
        {activeTab === 'compare' && <ModelComparison />}
        {activeTab === 'evaluate' && <PromptEvaluator />}
        {activeTab === 'versions' && <VersionHistory />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/PromptEditor.tsx",
        name: "PromptEditor.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Play, Save, Copy, Code2, Sparkles, Sliders } from 'lucide-react';

export const PromptEditor = () => {
  const [systemPrompt, setSystemPrompt] = useState('You are an expert AI technical writer. Summarize complex concepts into concise bullet points.');
  const [userPrompt, setUserPrompt] = useState('Explain how WebSockets enable real-time bidirectional communication for {{appName}}.');
  const [variable, setVariable] = useState('FinPilot AI');
  const [temperature, setTemperature] = useState(0.7);
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState('');

  const handleRun = () => {
    setRunning(true);
    
    setTimeout(() => {
      setOutput(\`• WebSockets establish a single persistent TCP connection between client and server.\\n• Eliminates HTTP request polling overhead, drastically reducing server latency.\\n• Enables instant push notifications for active financial applications like \${variable}.\`);
      setRunning(false);
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <label className="text-xs font-mono text-cyan-400 font-bold block">System Instruction</label>
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white h-24 focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-xs font-mono text-cyan-400 font-bold block">User Prompt (Use {{var}} for variables)</label>
            <span className="text-[10px] font-mono text-slate-500">Variables detected: 1</span>
          </div>
          <textarea
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white h-32 focus:outline-none focus:border-cyan-500 font-mono"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleRun}
            disabled={running}
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs font-mono flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{running ? 'Executing...' : 'Run Prompt'}</span>
          </button>
          <button className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1.5">
            <Save className="w-4 h-4" /> Save Version
          </button>
        </div>

        {output && (
          <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="text-xs font-mono text-emerald-400">Response Output</span>
              <span className="text-[10px] font-mono text-slate-500">Tokens: 64 | Latency: 240ms</span>
            </div>
            <pre className="text-xs font-mono text-slate-200 whitespace-pre-wrap bg-slate-950 p-4 rounded-xl border border-slate-800/80">
              {output}
            </pre>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4">
          <h3 className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2 border-b border-slate-800 pb-2">
            <Sliders className="w-4 h-4 text-cyan-400" /> Model Parameters
          </h3>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Temperature ({temperature})</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={temperature}
              onChange={(e) => setTemperature(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-400 block mb-1">Variable: appName</label>
            <input
              type="text"
              value={variable}
              onChange={(e) => setVariable(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/ModelComparison.tsx",
        name: "ModelComparison.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Columns, Play } from 'lucide-react';

export const ModelComparison = () => {
  const [prompt] = useState('Generate a JSON schema for a SaaS user subscription table.');
  const [comparing, setComparing] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const handleCompare = () => {
    setComparing(true);
    setTimeout(() => {
      setResults([
        { model: 'Gemini 2.5 Flash', latency: '180ms', tokens: '92', cost: '$0.0001', response: '{\n  "user_id": "uuid",\n  "plan": "pro",\n  "status": "active"\n}' },
        { model: 'GPT-4o', latency: '340ms', tokens: '98', cost: '$0.0008', response: '{\n  "userId": "string",\n  "subscriptionStatus": "active"\n}' },
        { model: 'Claude 3.5 Sonnet', latency: '290ms', tokens: '95', cost: '$0.0006', response: '{\n  "id": "uuid",\n  "tier": "enterprise"\n}' }
      ]);
      setComparing(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Columns className="w-4 h-4 text-cyan-400" /> Side-by-Side Model Benchmarking
          </h2>
          <button
            onClick={handleCompare}
            disabled={comparing}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Run Comparison
          </button>
        </div>
        <p className="text-xs font-mono text-slate-400">Target Prompt: "{prompt}"</p>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((r, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-bold text-xs text-white">{r.model}</span>
                <span className="text-[10px] font-mono text-emerald-400">{r.latency}</span>
              </div>
              <pre className="text-xs font-mono text-slate-300 bg-slate-950 p-3 rounded-xl border border-slate-800 whitespace-pre-wrap">
                {r.response}
              </pre>
              <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1">
                <span>Tokens: {r.tokens}</span>
                <span>Est. Cost: {r.cost}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};`
      },
      {
        path: "src/components/PromptEvaluator.tsx",
        name: "PromptEvaluator.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Award } from 'lucide-react';

export const PromptEvaluator = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
        <Award className="w-5 h-5 text-emerald-400" />
        <h2 className="text-lg font-bold text-white">Automated Output Quality Evaluator</h2>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">Relevance Score</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">96/100</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">Instruction Adherence</p>
          <p className="text-2xl font-bold text-cyan-400 mt-1">92/100</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">JSON Validation</p>
          <p className="text-2xl font-bold text-purple-400 mt-1">Passed</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/VersionHistory.tsx",
        name: "VersionHistory.tsx",
        language: "typescript",
        content: `import React from 'react';
import { GitBranch, Clock } from 'lucide-react';

export const VersionHistory = () => {
  const versions = [
    { version: 'v1.2.0', msg: 'Added temperature parameter and system context constraints', date: '2026-03-02' },
    { version: 'v1.1.0', msg: 'Updated variables schema for multi-tenant customer IDs', date: '2026-02-20' },
    { version: 'v1.0.0', msg: 'Initial prompt template creation', date: '2026-02-01' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <h2 className="text-lg font-bold text-white flex items-center gap-2">
        <GitBranch className="w-5 h-5 text-cyan-400" /> Prompt Commit Log
      </h2>

      <div className="space-y-3">
        {versions.map((v, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
            <div>
              <span className="text-xs font-bold font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                {v.version}
              </span>
              <p className="text-xs text-slate-300 mt-1.5">{v.msg}</p>
            </div>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {v.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- PromptFlow Studio Supabase Database Schema
-- DEV BY SABARI M

CREATE TABLE IF NOT EXISTS public.prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT DEFAULT 'Untitled Prompt',
  system_prompt TEXT,
  user_prompt TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.prompts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can manage own prompts" ON public.prompts FOR ALL USING (auth.uid() = user_id);
`
      }
    ]
  },
  {
    id: "05",
    title: "Shree Lakshmi Traders — GST Billing & Inventory System",
    slug: "shree-lakshmi-traders",
    description: "A modern business management application designed for retail & trading businesses to handle GST billing, inventory, customers, suppliers, purchases, and sales reports.",
    longDescription: "Shree Lakshmi Traders is a GST billing and stock management platform engineered for retail trading businesses. It provides seamless invoice generation with HSN/SAC code tracking, tax calculations (CGST/SGST/IGST), customer ledgers, inventory movement logs, low-stock notifications, and print-friendly A4 invoices.",
    category: "Business",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Enterprise",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vite", "Lucide React", "Recharts"],
    features: [
      "Interactive GST Billing & Professional A4 Print-Ready Invoice Generator",
      "Real-time Product Catalog & Automated Low-Stock Inventory Alerts",
      "Sales & Purchase Management with Auto-Stock Movement Audit Logs",
      "Customer & Supplier Ledgers with Outstanding Balance Tracking",
      "Multi-tax Configurable Engine (CGST, SGST, IGST) with Tax Summary Reports",
      "Business Performance Analytics & Gross Profitability Dashboard",
      "Supabase PostgreSQL Backend with Row Level Security (RLS) Policies"
    ],
    images: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/Shree-Lakshmi-Traders-GST-Billing",
    liveUrl: "https://genesis-portfolio-k4q6u7tqa-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack client management SPA built with React and Tailwind, synchronized with a Supabase PostgreSQL transactional database.",
      nodes: [
        { title: "Dashboard & Billing UI", description: "Responsive POS & invoice generation view.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "Inventory Engine", description: "Stock movement trigger handlers and tax calculator.", tech: ["Node.js", "TypeScript"] },
        { title: "Supabase Database", description: "Relational tables for sales, purchases, stock movements, and ledger balances.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Maintaining database atomic transactions across sales creation, stock deduction, and ledger updates.",
      "Ensuring precise tax calculations for split state GST (CGST/SGST vs IGST) without rounding drift."
    ],
    solutions: [
      "Utilized Supabase database procedures and transactional triggers for synchronous inventory balance updates.",
      "Engineered a tax utility library that calculates item-level tax amounts before aggregating invoice subtotals."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Shree Lakshmi Traders — GST Billing & Inventory Management System
Developed by DEV BY SABARI M

Shree Lakshmi Traders is a GST billing and stock management platform built for retail trading businesses. It enables businesses to manage products, inventory, customers, suppliers, purchases, sales, and generate tax-compliant invoices.

## Key Features
- **GST Billing & Invoice Generator**: Creates print-ready A4 invoices with customizable business info and tax rates (CGST, SGST, IGST).
- **Product & Inventory Management**: Track current stock, minimum stock thresholds, and receive real-time low-stock alerts.
- **Stock Movement Log**: Automated records of stock adjustments, opening stock, sales deductions, and purchase additions.
- **Customer & Supplier Directory**: Maintain contact ledgers and purchase/sales transaction histories.
- **Analytics & Reports**: Visual reports for sales trends, purchase logs, top products, and gross profit estimates.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons, Recharts
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS) policies

## Environment Setup
\`\`\`env
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
\`\`\`

## Installation
1. Clone repository: \`git clone https://github.com/sabari-m/ShreeLakshmiTraders-Billing.git\`
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "shreelakshmitraders-billing",
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
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
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
import { BillingDashboard } from './components/BillingDashboard';
import { InvoiceGenerator } from './components/InvoiceGenerator';
import { ProductInventory } from './components/ProductInventory';
import { CustomerSupplier } from './components/CustomerSupplier';
import { LayoutDashboard, FileText, Package, Users, Store } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'billing' | 'inventory' | 'contacts'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-4 flex items-center justify-between sticky top-0 z-20 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Shree Lakshmi Traders</h1>
            <p className="text-xs text-slate-400 font-mono">GST Billing & Inventory Management System</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'dashboard' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }\`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'billing' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }\`}
          >
            <FileText className="w-4 h-4" />
            <span>New Invoice</span>
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'inventory' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }\`}
          >
            <Package className="w-4 h-4" />
            <span>Inventory</span>
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'contacts' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }\`}
          >
            <Users className="w-4 h-4" />
            <span>Directory</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'dashboard' && <BillingDashboard />}
        {activeTab === 'billing' && <InvoiceGenerator />}
        {activeTab === 'inventory' && <ProductInventory />}
        {activeTab === 'contacts' && <CustomerSupplier />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/BillingDashboard.tsx",
        name: "BillingDashboard.tsx",
        language: "typescript",
        content: `import React from 'react';
import { IndianRupee, ShoppingCart, Package, AlertTriangle, TrendingUp } from 'lucide-react';

export const BillingDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Today's Sales</span>
            <IndianRupee className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">₹48,250</p>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 block">14 Invoices Generated</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Total Inventory Value</span>
            <Package className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">₹8,45,000</p>
          <span className="text-[10px] text-slate-500 font-mono mt-1 block">128 SKU Items</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Low Stock Alerts</span>
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <p className="text-2xl font-bold text-red-400 mt-2">3 Items</p>
          <span className="text-[10px] text-red-400/80 font-mono mt-1 block">Requires Reordering</span>
        </div>

        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">GST Collected (MTD)</span>
            <TrendingUp className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">₹62,140</p>
          <span className="text-[10px] text-cyan-400 font-mono mt-1 block">CGST/SGST Split</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/InvoiceGenerator.tsx",
        name: "InvoiceGenerator.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Printer, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export const InvoiceGenerator = () => {
  const [items, setItems] = useState([
    { name: 'Basmati Rice 25kg', hsn: '1006', qty: 2, price: 1850, gst: 5 }
  ]);
  const [customer, setCustomer] = useState('Lakshmi Enterprise');
  const [printed, setPrinted] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  const totalGst = items.reduce((acc, item) => acc + (item.qty * item.price * (item.gst / 100)), 0);
  const grandTotal = subtotal + totalGst;

  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-lg font-bold text-white">TAX INVOICE — SLT-2026-0042</h2>
          <p className="text-xs text-slate-400 font-mono">GSTIN: 33ABCDE1234F1Z5</p>
        </div>
        <button
          onClick={() => { setPrinted(true); window.print(); }}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Printer className="w-4 h-4" /> Print Invoice
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-mono text-slate-400 block mb-1">Customer Name</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
          />
        </div>
      </div>

      <div className="space-y-3">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-900 text-slate-400 font-mono">
            <tr>
              <th className="p-3 rounded-l-xl">Item</th>
              <th className="p-3">HSN</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Price</th>
              <th className="p-3">GST %</th>
              <th className="p-3 rounded-r-xl">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {items.map((item, idx) => (
              <tr key={idx}>
                <td className="p-3 text-white">{item.name}</td>
                <td className="p-3 text-slate-400 font-mono">{item.hsn}</td>
                <td className="p-3 text-slate-300">{item.qty}</td>
                <td className="p-3 text-slate-300">₹{item.price}</td>
                <td className="p-3 text-slate-300">{item.gst}%</td>
                <td className="p-3 text-amber-400 font-bold">₹{(item.qty * item.price * (1 + item.gst / 100)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-800 pt-4 flex justify-between items-center text-xs font-mono">
        <span className="text-slate-400">CGST (2.5%): ₹{(totalGst/2).toFixed(2)} | SGST (2.5%): ₹{(totalGst/2).toFixed(2)}</span>
        <div className="text-right">
          <span className="text-slate-400 block">Grand Total</span>
          <span className="text-xl font-bold text-white">₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/ProductInventory.tsx",
        name: "ProductInventory.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Package, AlertCircle } from 'lucide-react';

export const ProductInventory = () => {
  const products = [
    { sku: 'RICE-001', name: 'Basmati Rice 25kg', stock: 45, minStock: 10, price: '₹1,850' },
    { sku: 'OIL-002', name: 'Sunflower Oil 15L', stock: 4, minStock: 8, price: '₹2,100' },
    { sku: 'SUG-003', name: 'Refined Sugar 50kg', stock: 22, minStock: 5, price: '₹2,300' }
  ];

  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2">
        <Package className="w-4 h-4 text-amber-400" /> Live Inventory Master
      </h2>

      <div className="divide-y divide-slate-800">
        {products.map((p, idx) => (
          <div key={idx} className="py-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">{p.name}</p>
              <span className="text-[10px] font-mono text-slate-500">SKU: {p.sku}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-300">{p.price}</span>
              <span className={\`text-xs font-mono font-bold px-2.5 py-1 rounded-lg \${
                p.stock <= p.minStock ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400'
              }\`}>
                Stock: {p.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/CustomerSupplier.tsx",
        name: "CustomerSupplier.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Users } from 'lucide-react';

export const CustomerSupplier = () => {
  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2">
        <Users className="w-4 h-4 text-amber-400" /> Customer & Supplier Ledger Directory
      </h2>
      <div className="text-xs text-slate-400 font-mono">
        Showing 12 active accounts with zero overdue credit flags.
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- Shree Lakshmi Traders Database Schema
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  sku TEXT UNIQUE NOT NULL,
  category TEXT,
  selling_price NUMERIC NOT NULL,
  current_stock INT DEFAULT 0,
  min_stock INT DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  },
  {
    id: "06",
    title: "Inventory Management System",
    slug: "inventory-management-system",
    description: "Enterprise SaaS inventory platform for product cataloging, stock movement audit trails, purchase orders, low-stock threshold alerts, and AI inventory insights.",
    longDescription: "A full-stack inventory management software designed for SMEs and retail distributors. It features real-time product stock tracking, automated audit logging for inbound and outbound stock movements, purchase order processing, low-stock threshold triggers, and an AI Inventory Assistant for stock velocity observations.",
    category: "SaaS",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Recharts", "Lucide React"],
    features: [
      "Product Catalog Management with SKU, Barcode, Categories, and Price Rules",
      "Real-time Inventory Audit Logs for Stock In, Stock Out, Returns, and Damage",
      "Automated Low-Stock Alert System with Reorder Point Calculations",
      "Sales & Purchase Order Workflows with Synchronous Database Stock Deduction",
      "AI Inventory Assistant for Slow-Moving Stock Observations & Reorder Suggestions",
      "Supabase PostgreSQL Relational Schema with Row Level Security (RLS)"
    ],
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/Inventory-Management-System",
    liveUrl: "https://genesis-portfolio-99diyduar-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack inventory system built with React, Tailwind CSS, Node.js, and Supabase PostgreSQL transactional database.",
      nodes: [
        { title: "Inventory Dashboard", description: "Real-time stock monitoring & AI insight engine UI.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "Stock Transaction Handler", description: "Atomic stock movement calculations & order processing.", tech: ["Node.js", "TypeScript"] },
        { title: "Supabase Relational Store", description: "PostgreSQL database with stock audit triggers and RLS policies.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Preventing race conditions and inventory drift during high-frequency concurrent stock updates.",
      "Parsing multi-category stock movements into structured audit logs for financial reconciliation."
    ],
    solutions: [
      "Enforced atomic database transactions and strict stock check constraints before completing sales deductions.",
      "Engineered an automated stock_movements ledger table that records every increment/decrement with timestamp and user ID."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Inventory Management System — Enterprise SaaS
Developed by DEV BY SABARI M

A modern inventory and stock management SaaS platform built for small and medium-sized enterprises to monitor stock levels, record purchases/sales, receive low-stock alerts, and leverage AI inventory insights.

## Key Features
- **Product Cataloging**: Comprehensive product records (SKU, Barcode, Category, Purchase/Selling Price, Stock thresholds).
- **Stock Movement Log**: Audit trails for Stock In, Stock Out, Adjustments, Returns, and Damaged stock.
- **Purchase & Sales Workflow**: Integrated transaction workflows that automatically increment or decrement stock.
- **Low Stock Alerts**: Automated reorder threshold notifications on dashboard cards.
- **AI Inventory Assistant**: Natural language analysis for slow-moving products and reorder recommendations.
- **Reports & Analytics**: Real-time charts for stock valuation, sales volume, and top-selling SKUs.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons, Recharts
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS)

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/Inventory-Management-System.git\`
2. Install dependencies: \`npm install\`
3. Run development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "inventory-management-system",
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
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
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
import { InventoryDashboard } from './components/InventoryDashboard';
import { ProductCatalog } from './components/ProductCatalog';
import { StockMovementLog } from './components/StockMovementLog';
import { AIInventoryAssistant } from './components/AIInventoryAssistant';
import { LayoutDashboard, Package, History, Sparkles, Boxes } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'movements' | 'ai'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">
            <Boxes className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Inventory Management System</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Enterprise Stock SaaS</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Package className="w-4 h-4" />
            <span>Product Catalog</span>
          </button>
          <button
            onClick={() => setActiveTab('movements')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'movements' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <History className="w-4 h-4" />
            <span>Stock Audit Log</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'ai' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Assistant</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'dashboard' && <InventoryDashboard />}
        {activeTab === 'products' && <ProductCatalog />}
        {activeTab === 'movements' && <StockMovementLog />}
        {activeTab === 'ai' && <AIInventoryAssistant />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/InventoryDashboard.tsx",
        name: "InventoryDashboard.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Package, AlertOctagon, TrendingUp, DollarSign } from 'lucide-react';

export const InventoryDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Total SKUs</span>
            <Package className="w-4 h-4 text-blue-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">248</p>
          <span className="text-[10px] text-slate-500 font-mono mt-1 block">Active Catalog Items</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Stock Value</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">$142,850</p>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 block">Asset Valuation</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Low Stock Alerts</span>
            <AlertOctagon className="w-4 h-4 text-red-400" />
          </div>
          <p className="text-2xl font-bold text-red-400 mt-2">5 Items</p>
          <span className="text-[10px] text-red-400/80 font-mono mt-1 block">Below Reorder Point</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Monthly Turnover</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">1,840 units</p>
          <span className="text-[10px] text-purple-400 font-mono mt-1 block">+12% vs last month</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/ProductCatalog.tsx",
        name: "ProductCatalog.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Package, Plus } from 'lucide-react';

export const ProductCatalog = () => {
  const products = [
    { sku: 'SKU-1001', name: 'Industrial Drill Press 500W', category: 'Tools', stock: 18, minStock: 5, price: '$349.00' },
    { sku: 'SKU-1002', name: 'Precision Caliper Gauge', category: 'Measurement', stock: 3, minStock: 8, price: '$85.00' },
    { sku: 'SKU-1003', name: 'Hydraulic Seal Kit V2', category: 'Parts', stock: 120, minStock: 25, price: '$22.50' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <h2 className="text-sm font-bold text-white flex items-center gap-2">
          <Package className="w-4 h-4 text-blue-400" /> Enterprise Product Catalog
        </h2>
        <button className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5">
          <Plus className="w-4 h-4" /> Add Product
        </button>
      </div>

      <div className="divide-y divide-slate-800">
        {products.map((p, idx) => (
          <div key={idx} className="py-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-white">{p.name}</p>
              <span className="text-[10px] font-mono text-slate-500">SKU: {p.sku} | Category: {p.category}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-300">{p.price}</span>
              <span className={\`text-xs font-mono font-bold px-2.5 py-1 rounded-lg \${
                p.stock <= p.minStock ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-400'
              }\`}>
                Qty: {p.stock}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/StockMovementLog.tsx",
        name: "StockMovementLog.tsx",
        language: "typescript",
        content: `import React from 'react';
import { History, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export const StockMovementLog = () => {
  const logs = [
    { type: 'Stock Out', item: 'Industrial Drill Press 500W', qty: -2, ref: 'SO-9021', date: '2026-03-01' },
    { type: 'Stock In', item: 'Hydraulic Seal Kit V2', qty: +50, ref: 'PO-4410', date: '2026-02-28' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <History className="w-4 h-4 text-blue-400" /> Stock Audit Trail
      </h2>

      <div className="space-y-2">
        {logs.map((log, idx) => (
          <div key={idx} className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3">
              {log.qty > 0 ? <ArrowDownLeft className="w-4 h-4 text-emerald-400" /> : <ArrowUpRight className="w-4 h-4 text-red-400" />}
              <div>
                <p className="text-white font-sans font-semibold">{log.item}</p>
                <span className="text-[10px] text-slate-500">Ref: {log.ref}</span>
              </div>
            </div>
            <span className={log.qty > 0 ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
              {log.qty > 0 ? \`+\${log.qty}\` : log.qty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AIInventoryAssistant.tsx",
        name: "AIInventoryAssistant.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Sparkles, AlertTriangle } from 'lucide-react';

export const AIInventoryAssistant = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <div>
          <h2 className="text-lg font-bold text-white">AI Inventory Assistant</h2>
          <p className="text-xs text-slate-400 font-mono">Automated Stock Observations & Reorder Suggestions</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-slate-950 rounded-xl border border-amber-500/30 text-xs text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
            <AlertTriangle className="w-4 h-4" /> Reorder Point Alert
          </div>
          <p>
            <strong>Precision Caliper Gauge (SKU-1002)</strong> current stock (3 units) is below the minimum threshold (8 units). Based on recent sales velocity, stockout is projected in 4 days.
          </p>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
          <p className="font-bold text-cyan-400 font-mono">Slow-Moving Stock Observation</p>
          <p>
            <strong>Hydraulic Seal Kit V2</strong> inventory velocity has decreased by 18% month-over-month. Consider promotional bundling with drill accessories.
          </p>
        </div>
      </div>

      <p className="text-[10px] font-mono text-slate-500 text-center">
        * Note: AI recommendations are analytical suggestions based on historical data. Verify with warehouse leads before issuing purchase orders.
      </p>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- Enterprise Inventory Management System Schema
CREATE TABLE IF NOT EXISTS public.products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT,
  purchase_price NUMERIC NOT NULL,
  selling_price NUMERIC NOT NULL,
  current_stock INT DEFAULT 0,
  min_stock INT DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  },
  {
    id: "07",
    title: "AI Chatbot Platform & Knowledge Base",
    slug: "ai-chatbot-platform",
    description: "An AI assistant platform featuring multi-persona chat, PDF document upload & Q&A knowledge bases, prompt templates, and token analytics.",
    longDescription: "An AI chatbot SaaS workspace allowing users to interact with domain-specific AI personas (Research, Coding, Business, Writing), build searchable PDF/document knowledge bases with RAG context injection, manage reusable prompt templates, and inspect token consumption metrics.",
    category: "AI",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Gemini API", "Node.js", "Lucide React"],
    features: [
      "Multi-conversation Thread Management with Title Renaming and Search",
      "Domain AI Personas (General, Research, Coding, Business, Study, Writing)",
      "Document Knowledge Base Q&A with PDF Text Indexing and Context Injection",
      "Reusable Prompt Template Library across SaaS and Productivity Workflows",
      "Token Consumption Analytics & Cost Dashboard per Assistant Run",
      "Supabase PostgreSQL Relational Storage with Row Level Security (RLS)"
    ],
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/AI-Chatbot-Platform",
    liveUrl: "https://genesis-portfolio-julspre06-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack AI SaaS platform utilizing client-side React UI, backend streaming via Gemini API, and Supabase RLS tables for thread and document storage.",
      nodes: [
        { title: "Chat & Persona UI", description: "Multi-thread chat view with document attachment panel.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "RAG & Streaming Engine", description: "Context chunking and Gemini model execution.", tech: ["Node.js", "@google/genai"] },
        { title: "Supabase Vector Store", description: "PostgreSQL database storing user threads, messages, and knowledge base documents.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Structuring context window limits when injecting large uploaded PDF text into conversational prompts.",
      "Ensuring user conversations and uploaded private documents remain isolated across tenant accounts."
    ],
    solutions: [
      "Engineered text-chunking procedures that extract the top relevant passages to form context prompts.",
      "Applied strict Supabase Row Level Security (RLS) policies tied to auth.uid() on all document and chat tables."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# AI Chatbot Platform & Knowledge Base
Developed by DEV BY SABARI M

An AI assistant platform featuring multi-persona chat, document knowledge base Q&A, prompt templates, and token analytics.

## Key Features
- **AI Personas**: Switch seamlessly between General, Research, Coding, Business, Study, and Writing Assistants.
- **Document Q&A Knowledge Base**: Upload PDFs or text files to ask questions with source context injection.
- **Thread Management**: Search, rename, and archive conversation histories.
- **Prompt Templates**: Reusable system prompts for various productivity tasks.
- **Token Analytics**: Monitor input/output token usage and estimated API cost per chat session.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **Backend & AI**: Node.js, @google/genai SDK
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS)

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/AI-Chatbot-Platform.git\`
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "ai-chatbot-platform",
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
import { ChatInterface } from './components/ChatInterface';
import { PersonaSelector } from './components/PersonaSelector';
import { DocumentKnowledgeBase } from './components/DocumentKnowledgeBase';
import { TokenDashboard } from './components/TokenDashboard';
import { MessageSquare, Bot, FileText, BarChart3 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'persona' | 'knowledge' | 'tokens'>('chat');
  const [selectedPersona, setSelectedPersona] = useState('General Assistant');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">AI Chatbot Platform</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Knowledge Base & Multi-Persona AI</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('chat')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'chat' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>AI Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('persona')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'persona' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Bot className="w-4 h-4" />
            <span>Personas</span>
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'knowledge' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <FileText className="w-4 h-4" />
            <span>Knowledge Base</span>
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'tokens' ? 'bg-violet-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Usage & Tokens</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'chat' && <ChatInterface persona={selectedPersona} />}
        {activeTab === 'persona' && <PersonaSelector current={selectedPersona} onSelect={setSelectedPersona} />}
        {activeTab === 'knowledge' && <DocumentKnowledgeBase />}
        {activeTab === 'tokens' && <TokenDashboard />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/ChatInterface.tsx",
        name: "ChatInterface.tsx",
        language: "typescript",
        content: `import React, { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

export const ChatInterface = ({ persona }: { persona: string }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: \`Hello! I am your \${persona}. How can I assist your workflow today?\` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: \`As a \${persona}, I parsed your request regarding: "\${userMsg}". Here is a structured response based on vector context.\` }
      ]);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex flex-col h-[600px]">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950/50 rounded-t-2xl">
        <span className="text-xs font-bold text-violet-400 flex items-center gap-2">
          <Bot className="w-4 h-4" /> Persona: {persona}
        </span>
        <span className="text-[10px] font-mono text-emerald-400">Gemini 2.5 Active</span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((m, idx) => (
          <div key={idx} className={\`flex gap-3 \${m.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            {m.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center text-xs font-bold shrink-0">
                AI
              </div>
            )}
            <div className={\`p-3 rounded-2xl max-w-lg text-xs leading-relaxed \${
              m.role === 'user' ? 'bg-violet-600 text-white' : 'bg-slate-950 border border-slate-800 text-slate-200'
            }\`}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-slate-800 bg-slate-950/50 rounded-b-2xl flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message or query uploaded documents..."
          className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-violet-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Send className="w-4 h-4" /> Send
        </button>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/PersonaSelector.tsx",
        name: "PersonaSelector.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Bot, Code2, Search, Briefcase, GraduationCap, PenTool } from 'lucide-react';

export const PersonaSelector = ({ current, onSelect }: { current: string; onSelect: (p: string) => void }) => {
  const personas = [
    { title: 'General Assistant', icon: Bot, desc: 'Versatile helper for everyday inquiries & summaries.' },
    { title: 'Research Assistant', icon: Search, desc: 'Deep dive analytical research with citation summaries.' },
    { title: 'Coding Assistant', icon: Code2, desc: 'Code review, debugging, and refactoring support.' },
    { title: 'Business Assistant', icon: Briefcase, desc: 'Market analysis, email drafting, and pitch decks.' },
    { title: 'Study Assistant', icon: GraduationCap, desc: 'Explanations, flashcards, and concept simplification.' },
    { title: 'Writing Assistant', icon: PenTool, desc: 'Creative writing, tone editing, and article polishing.' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <h2 className="text-sm font-bold text-white font-mono">Select AI Assistant Persona</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personas.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = current === p.title;
          return (
            <div
              key={idx}
              onClick={() => onSelect(p.title)}
              className={\`p-5 rounded-2xl border cursor-pointer transition-all \${
                isSelected ? 'bg-violet-600/10 border-violet-500 text-white' : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
              }\`}
            >
              <Icon className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="font-bold text-sm text-white">{p.title}</h3>
              <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/DocumentKnowledgeBase.tsx",
        name: "DocumentKnowledgeBase.tsx",
        language: "typescript",
        content: `import React from 'react';
import { FileText, Upload, CheckCircle2 } from 'lucide-react';

export const DocumentKnowledgeBase = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-violet-400" /> Document Knowledge Base (RAG)
          </h2>
          <p className="text-xs text-slate-400 font-mono">Indexed documents available for contextual Q&A</p>
        </div>
        <button className="px-3.5 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5">
          <Upload className="w-4 h-4" /> Upload Document
        </button>
      </div>

      <div className="space-y-3">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-violet-400" />
            <div>
              <p className="font-bold text-white">SaaS_Architecture_Doc.pdf</p>
              <span className="text-[10px] text-slate-500 font-mono">Indexed 24 text chunks | Vector status: Ready</span>
            </div>
          </div>
          <span className="text-emerald-400 flex items-center gap-1 font-mono text-[10px]">
            <CheckCircle2 className="w-3.5 h-3.5" /> Active
          </span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/TokenDashboard.tsx",
        name: "TokenDashboard.tsx",
        language: "typescript",
        content: `import React from 'react';
import { BarChart3 } from 'lucide-react';

export const TokenDashboard = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-6">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <BarChart3 className="w-4 h-4 text-violet-400" /> AI Model Consumption Metrics
      </h2>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">Total Tokens Used</p>
          <p className="text-2xl font-bold text-violet-400 mt-1">128,450</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">Total API Runs</p>
          <p className="text-2xl font-bold text-cyan-400 mt-1">412</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-xs font-mono text-slate-400">Estimated Cost</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">$0.24</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- AI Chatbot Platform Schema
CREATE TABLE IF NOT EXISTS public.conversations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT DEFAULT 'New Conversation',
  persona TEXT DEFAULT 'General Assistant',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  },
  {
    id: "08",
    title: "Hospital Management System",
    slug: "hospital-management-system",
    description: "Healthcare clinical management platform with doctor scheduling, electronic medical records (EMR), OPD appointments, pharmacy billing, and safe AI information assistant.",
    longDescription: "A clinical hospital management platform designed for healthcare providers. Features role-based access control (Admin, Doctor, Patient), electronic medical record (EMR) management, OPD appointment queue scheduling, itemized consultation billing, and a safe AI Healthcare Information Assistant.",
    category: "Healthcare",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Enterprise",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Lucide React"],
    features: [
      "Role-Based Dashboards for Admins, Physicians, and Patients",
      "Electronic Medical Records (EMR) with Prescription History and Lab Reports",
      "OPD Appointment Scheduling with Queue Management (Scheduled, Confirmed, Completed, Cancelled)",
      "Itemized Medical Billing Engine (Consultation, Services, Subtotal, Tax, Payment Status)",
      "Safe AI Healthcare Information Assistant for Medical Terminology and Record Navigation",
      "Supabase PostgreSQL Relational Storage with Fine-Grained Row Level Security (RLS)"
    ],
    images: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/Hospital-Management-System",
    liveUrl: "https://genesis-portfolio-lijp7j97r-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Clinical SaaS architecture with role-based React UI, Express healthcare service layers, and Supabase PostgreSQL with strict patient privacy RLS.",
      nodes: [
        { title: "Clinical Portal UI", description: "Role-based interface for doctors, nurses, and billing staff.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "Appointment Scheduler", description: "Queue management and physician availability tracking.", tech: ["Node.js", "TypeScript"] },
        { title: "EMR & Billing Database", description: "PostgreSQL store with encrypted patient record policies.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Enforcing strict patient confidentiality boundaries across multi-department healthcare personnel.",
      "Preventing double-booking of doctor appointment time slots across high-volume OPD clinics."
    ],
    solutions: [
      "Applied fine-grained Supabase Row Level Security (RLS) policies allowing doctors access only to assigned patients.",
      "Engineered atomic appointment reservation constraints in PostgreSQL to prevent time-slot collisions."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Hospital Management System — Clinical Care SaaS
Developed by DEV BY SABARI M

A healthcare clinical management platform designed to streamline doctor appointment scheduling, patient electronic medical records (EMR), and itemized hospital billing workflows.

> **Disclaimer**: This is a portfolio demo application using synthetic medical data. It does not provide medical diagnosis or replace professional healthcare providers.

## Key Features
- **Admin & Doctor Dashboards**: Real-time hospital metrics, patient intake stats, and OPD queues.
- **Appointment Queue System**: Schedules, updates, and tracks status (Scheduled, Confirmed, Completed, Cancelled).
- **Electronic Medical Records (EMR)**: Diagnostic history, allergy logs, prescriptions, and physician notes.
- **Itemized Billing**: Calculates consultation fees, diagnostic service charges, taxes, and payment status.
- **AI Health Info Assistant**: Safe medical term explanations and navigation aid.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS)

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/Hospital-Management-System.git\`
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "hospital-management-system",
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
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
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
import { HospitalDashboard } from './components/HospitalDashboard';
import { AppointmentQueue } from './components/AppointmentQueue';
import { PatientMedicalRecords } from './components/PatientMedicalRecords';
import { BillingModule } from './components/BillingModule';
import { AIHealthAssistant } from './components/AIHealthAssistant';
import { LayoutDashboard, Calendar, Users, Receipt, Stethoscope, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'appointments' | 'patients' | 'billing' | 'ai'>('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Hospital Management System</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Clinical Care & EMR SaaS</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'dashboard' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'appointments' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Calendar className="w-4 h-4" />
            <span>Appointments</span>
          </button>
          <button
            onClick={() => setActiveTab('patients')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'patients' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Users className="w-4 h-4" />
            <span>Patient EMR</span>
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'billing' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Receipt className="w-4 h-4" />
            <span>Billing</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'ai' ? 'bg-teal-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Health Info</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'dashboard' && <HospitalDashboard />}
        {activeTab === 'appointments' && <AppointmentQueue />}
        {activeTab === 'patients' && <PatientMedicalRecords />}
        {activeTab === 'billing' && <BillingModule />}
        {activeTab === 'ai' && <AIHealthAssistant />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/HospitalDashboard.tsx",
        name: "HospitalDashboard.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Users, CalendarCheck, Stethoscope, DollarSign } from 'lucide-react';

export const HospitalDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Total Patients</span>
            <Users className="w-4 h-4 text-teal-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">1,240</p>
          <span className="text-[10px] text-teal-400 font-mono mt-1 block">Active EMR Records</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Today's OPD Queue</span>
            <CalendarCheck className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">38 Visits</p>
          <span className="text-[10px] text-cyan-400 font-mono mt-1 block">14 Completed</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Active Physicians</span>
            <Stethoscope className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">24 On Duty</p>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 block">6 Departments</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-mono">Daily Billing Revenue</span>
            <DollarSign className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">$8,450</p>
          <span className="text-[10px] text-purple-400 font-mono mt-1 block">92% Collected</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AppointmentQueue.tsx",
        name: "AppointmentQueue.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const AppointmentQueue = () => {
  const appointments = [
    { id: 'APT-101', patient: 'Sarah Jenkins', doctor: 'Dr. Aris Thorne (Cardiology)', time: '09:30 AM', status: 'Completed' },
    { id: 'APT-102', patient: 'Michael Vance', doctor: 'Dr. Elena Rostova (Neurology)', time: '10:15 AM', status: 'Confirmed' },
    { id: 'APT-103', patient: 'David Miller', doctor: 'Dr. Robert Chen (Pediatrics)', time: '11:00 AM', status: 'Scheduled' }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <Calendar className="w-4 h-4 text-teal-400" /> OPD Appointment Queue
      </h2>

      <div className="space-y-3">
        {appointments.map((a, idx) => (
          <div key={idx} className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-white">{a.patient}</p>
              <p className="text-slate-400 text-[11px] mt-0.5">{a.doctor}</p>
              <span className="text-[10px] text-slate-500 font-mono">Ref: {a.id}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" /> {a.time}
              </span>
              <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-1 rounded-lg font-mono font-bold">
                {a.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/PatientMedicalRecords.tsx",
        name: "PatientMedicalRecords.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Users, FileSpreadsheet } from 'lucide-react';

export const PatientMedicalRecords = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <Users className="w-4 h-4 text-teal-400" /> Electronic Medical Records (EMR)
      </h2>
      <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
        <p className="font-bold text-white">Patient Record: Sarah Jenkins (DOB: 1988-04-12)</p>
        <p className="text-slate-400">Allergies: Penicillin | Blood Group: O+</p>
        <div className="mt-3 pt-3 border-t border-slate-800">
          <p className="text-teal-400 font-bold font-mono">Recent Prescription (2026-02-15)</p>
          <p className="text-slate-300">Amoxicillin 500mg — 1 tablet every 8 hrs x 7 days</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/BillingModule.tsx",
        name: "BillingModule.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Receipt } from 'lucide-react';

export const BillingModule = () => {
  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <Receipt className="w-4 h-4 text-teal-400" /> Clinical Billing Statement
      </h2>

      <div className="space-y-2 text-xs font-mono">
        <div className="flex justify-between py-1 border-b border-slate-800 text-slate-400">
          <span>Cardiology OPD Consultation</span>
          <span>$150.00</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-800 text-slate-400">
          <span>Electrocardiogram (ECG) Diagnostic</span>
          <span>$85.00</span>
        </div>
        <div className="flex justify-between py-1 text-white font-bold pt-2">
          <span>Total Payable</span>
          <span className="text-teal-400">$235.00</span>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AIHealthAssistant.tsx",
        name: "AIHealthAssistant.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Sparkles, ShieldAlert } from 'lucide-react';

export const AIHealthAssistant = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <Sparkles className="w-5 h-5 text-teal-400" />
        <div>
          <h2 className="text-sm font-bold text-white">AI Health Information Assistant</h2>
          <p className="text-xs text-slate-400 font-mono">Non-diagnostic terminology & record navigation helper</p>
        </div>
      </div>

      <div className="p-4 bg-slate-950 rounded-xl border border-teal-500/30 text-xs text-slate-300 space-y-2">
        <div className="flex items-center gap-2 text-teal-400 font-bold font-mono">
          <ShieldAlert className="w-4 h-4" /> Medical Information Disclaimer
        </div>
        <p>
          This assistant provides general explanations of medical terminology and summarizes demo patient records. It does NOT provide medical diagnoses or replace licensed physician consultations.
        </p>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- Hospital Management System Schema
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_name TEXT NOT NULL,
  doctor_name TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status TEXT DEFAULT 'Scheduled',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  },
  {
    id: "09",
    title: "Modern E-commerce Platform",
    slug: "modern-ecommerce-platform",
    description: "E-commerce platform featuring product catalog filtering, cart workflows, checkout simulation, admin inventory controls, and an AI Shopping Assistant.",
    longDescription: "A modern online retail web application built with React, TypeScript, Node.js, and Supabase database. Includes customer authentication, product reviews, cart management, simulated checkout, admin inventory management, and an AI Shopping Assistant.",
    category: "E-commerce",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Node.js", "Express", "Lucide React"],
    features: [
      "Product Catalog Browsing with Category, Price, and Rating Filters",
      "Interactive Shopping Cart with Persistent Quantity Updates & Tax Calculations",
      "Demo Checkout Flow with Address Validation and Order Summary Confirmation",
      "Order Management Engine tracking Statuses (Pending, Processing, Shipped, Delivered)",
      "Admin Control Panel for Stock Updates, Category Management, and Sales Analytics",
      "AI Shopping Assistant for Natural Language Product Search and Specs Comparisons"
    ],
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/Modern-Ecommerce-Platform",
    liveUrl: "https://genesis-portfolio-90j2u362t-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Full-stack e-commerce architecture with React frontend, Express order fulfillment endpoints, and Supabase PostgreSQL relational database.",
      nodes: [
        { title: "Storefront & Cart UI", description: "Catalog grid, cart context manager, and checkout UI.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "Order API Service", description: "Cart reconciliation and checkout processing backend.", tech: ["Node.js", "Express"] },
        { title: "Supabase E-commerce Store", description: "PostgreSQL tables for products, orders, cart items, and reviews.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Synchronizing local cart state across guest and authenticated sessions without cart item loss.",
      "Preventing checkout completion for items that have dropped below minimum stock during session duration."
    ],
    solutions: [
      "Implemented a persistent Cart Context synced to LocalStorage and reconciled against Supabase user cart records upon login.",
      "Enforced atomic stock check assertions inside PostgreSQL checkout functions before issuing order confirmations."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# Modern E-commerce Platform — SaaS Retail
Developed by DEV BY SABARI M

A modern e-commerce platform built with React, TypeScript, Tailwind CSS, and Supabase PostgreSQL.

## Key Features
- **Product Catalog**: Filterable products by category, price, and customer ratings.
- **Shopping Cart & Checkout**: Interactive item quantity updates, tax calculations, and demo checkout workflow.
- **Order Management**: Status tracking (Pending, Processing, Shipped, Delivered).
- **AI Shopping Assistant**: Natural language product search and spec comparisons.
- **Admin Inventory Panel**: Real-time product pricing, stock count updates, and revenue metrics.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS)

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/Modern-Ecommerce-Platform.git\`
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "modern-ecommerce-platform",
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
    "@supabase/supabase-js": "^2.39.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.344.0",
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
import { ProductCatalog } from './components/ProductCatalog';
import { ShoppingCartView } from './components/ShoppingCartView';
import { AdminPanel } from './components/AdminPanel';
import { AIShoppingAssistant } from './components/AIShoppingAssistant';
import { ShoppingBag, ShoppingCart, ShieldCheck, Sparkles, Store } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'catalog' | 'cart' | 'admin' | 'ai'>('catalog');
  const [cartCount, setCartCount] = useState(2);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Modern E-commerce Platform</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Online Retail SaaS</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('catalog')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'catalog' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Storefront</span>
          </button>
          <button
            onClick={() => setActiveTab('cart')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors relative \${
              activeTab === 'cart' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'admin' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Admin</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'ai' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI Assistant</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'catalog' && <ProductCatalog onAddToCart={() => setCartCount(c => c + 1)} />}
        {activeTab === 'cart' && <ShoppingCartView />}
        {activeTab === 'admin' && <AdminPanel />}
        {activeTab === 'ai' && <AIShoppingAssistant />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/ProductCatalog.tsx",
        name: "ProductCatalog.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Plus, Star } from 'lucide-react';

export const ProductCatalog = ({ onAddToCart }: { onAddToCart: () => void }) => {
  const products = [
    { name: 'Wireless Noise-Canceling Headphones', price: '$249.99', rating: 4.8, category: 'Electronics' },
    { name: 'Ergonomic Mechanical Keyboard', price: '$129.50', rating: 4.9, category: 'Accessories' },
    { name: 'Ultra-Wide 4K Gaming Monitor', price: '$699.00', rating: 4.7, category: 'Monitors' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-bold text-white font-mono">Storefront Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3">
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase">{p.category}</span>
              <h3 className="font-bold text-sm text-white mt-1">{p.name}</h3>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-sm font-bold text-white font-mono">{p.price}</span>
              <button
                onClick={onAddToCart}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/ShoppingCartView.tsx",
        name: "ShoppingCartView.tsx",
        language: "typescript",
        content: `import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export const ShoppingCartView = () => {
  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <ShoppingCart className="w-4 h-4 text-indigo-400" /> Shopping Cart Summary
      </h2>

      <div className="space-y-3 text-xs font-mono">
        <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
          <span>Wireless Noise-Canceling Headphones (x1)</span>
          <span>$249.99</span>
        </div>
        <div className="flex justify-between py-2 border-b border-slate-800 text-slate-300">
          <span>Ergonomic Mechanical Keyboard (x1)</span>
          <span>$129.50</span>
        </div>
        <div className="flex justify-between text-white font-bold pt-2">
          <span>Estimated Total (Incl. Shipping)</span>
          <span className="text-indigo-400">$379.49</span>
        </div>
      </div>

      <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 mt-4">
        <Check className="w-4 h-4" /> Proceed to Demo Checkout
      </button>
    </div>
  );
};`
      },
      {
        path: "src/components/AdminPanel.tsx",
        name: "AdminPanel.tsx",
        language: "typescript",
        content: `import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const AdminPanel = () => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <ShieldCheck className="w-4 h-4 text-indigo-400" /> Admin Inventory & Sales Metrics
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center text-xs font-mono">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-slate-400">Total Sales</p>
          <p className="text-xl font-bold text-indigo-400 mt-1">$42,890</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-slate-400">Active Orders</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">18 Orders</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-slate-400">Stock Threshold</p>
          <p className="text-xl font-bold text-amber-400 mt-1">3 Items Low</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/AIShoppingAssistant.tsx",
        name: "AIShoppingAssistant.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Sparkles } from 'lucide-react';

export const AIShoppingAssistant = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h2 className="text-sm font-bold text-white">AI Shopping & Product Finder</h2>
      </div>
      <p className="text-xs text-slate-300">
        Ask natural language questions about catalog specifications, side-by-side product comparisons, or personalized gift recommendations.
      </p>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- Modern E-commerce Platform Schema
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  total_amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'Pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  },
  {
    id: "10",
    title: "AI Document Analyzer",
    slug: "ai-document-analyzer",
    description: "Document intelligence workspace for text extraction, automatic summarization, multi-document comparison, and structured entity extraction.",
    longDescription: "An AI document intelligence platform built with React, TypeScript, Gemini 2.5 API, and Supabase PostgreSQL. Upload PDFs, TXT, or DOCX files to extract structured entities, generate executive summaries, perform natural language document Q&A, and run side-by-side document comparison.",
    category: "AI",
    status: "Completed",
    trustLabel: "INDEPENDENT PROJECT",
    difficulty: "Advanced",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Supabase", "PostgreSQL", "Node.js", "Lucide React"],
    features: [
      "Document Drag-and-Drop Uploader with Format Validation (PDF / DOCX / TXT / CSV)",
      "Automatic OCR Text Extraction & Structural Metadata Parsing",
      "Executive AI Summarization with Key Point Takeaways and Entity Extraction",
      "Interactive Document Q&A with Direct Text Citation Highlights",
      "Side-by-Side Document Comparison Engine highlighting Common Topics and Key Changes",
      "Supabase PostgreSQL Relational Storage with Fine-Grained RLS Document Isolation"
    ],
    images: [
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop"
    ],
    githubUrl: "https://github.com/sabarisasi/AI-Document-Analyzer",
    liveUrl: "https://genesis-portfolio-pw3hid2kj-praveenkumaru691-1567s-projects.vercel.app",
    featured: true,
    timeline: "Completed (2026)",
    sourceAvailable: true,
    livePreviewAvailable: true,
    architecture: {
      overview: "Document processing pipeline using browser text extraction, Gemini multi-modal processing, and Supabase vector store for document indexing.",
      nodes: [
        { title: "Document Workspace UI", description: "Upload dropzone, side-by-side comparison view, and summary cards.", tech: ["React 19", "TypeScript", "Tailwind CSS"] },
        { title: "Gemini Analysis Pipeline", description: "Structured entity extraction and document summarization engine.", tech: ["Node.js", "@google/genai"] },
        { title: "Supabase Document Store", description: "PostgreSQL tables for documents, extracted text chunks, and analysis history.", tech: ["Supabase PostgreSQL", "RLS"] }
      ]
    },
    challenges: [
      "Extracting clean text and structural tables from multi-page PDFs without missing inline metadata.",
      "Ensuring user uploaded contracts and private financial documents remain completely isolated."
    ],
    solutions: [
      "Integrated Gemini 2.5 multi-modal vision processing for accurate tabular and layout understanding.",
      "Enforced Supabase Row Level Security (RLS) policies requiring user auth verification for document reads."
    ],
    files: [
      {
        path: "README.md",
        name: "README.md",
        language: "markdown",
        content: `# AI Document Analyzer — Document Intelligence SaaS
Developed by DEV BY SABARI M

An AI document intelligence platform for extracting entities, generating executive summaries, performing document Q&A, and running side-by-side comparisons.

## Key Features
- **Multi-Format Document Upload**: Support for PDF, TXT, DOCX, and CSV files.
- **AI Executive Summarization**: Structured bullet takeaways and key entity extraction (Dates, Amounts, Parties).
- **Document Q&A**: Natural language search with source context citation.
- **Side-by-Side Comparison**: Highlights common topics, differences, and key clause changes.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Lucide Icons
- **AI Engine**: Node.js, @google/genai SDK (Gemini 2.5 Flash)
- **Database & Auth**: Supabase PostgreSQL with Row Level Security (RLS)

## Getting Started
1. Clone repository: \`git clone https://github.com/sabari-m/AI-Document-Analyzer.git\`
2. Install dependencies: \`npm install\`
3. Start development server: \`npm run dev\`
`
      },
      {
        path: "package.json",
        name: "package.json",
        language: "json",
        content: `{
  "name": "ai-document-analyzer",
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
import { DocumentUploader } from './components/DocumentUploader';
import { DocumentSummaryView } from './components/DocumentSummaryView';
import { DocumentComparisonView } from './components/DocumentComparisonView';
import { FileText, Upload, Sparkles, GitCompare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'upload' | 'summary' | 'compare'>('upload');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="border-b border-slate-800 bg-slate-900/90 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">AI Document Analyzer</h1>
            <p className="text-xs text-slate-400 font-mono">DEV BY SABARI M — Document Intelligence Platform</p>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('upload')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'upload' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Upload className="w-4 h-4" />
            <span>Upload Document</span>
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'summary' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI Summarization</span>
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={\`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors \${
              activeTab === 'compare' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
            }\`}
          >
            <GitCompare className="w-4 h-4" />
            <span>Document Comparison</span>
          </button>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'upload' && <DocumentUploader onAnalyzed={() => setActiveTab('summary')} />}
        {activeTab === 'summary' && <DocumentSummaryView />}
        {activeTab === 'compare' && <DocumentComparisonView />}
      </main>
    </div>
  );
}`
      },
      {
        path: "src/components/DocumentUploader.tsx",
        name: "DocumentUploader.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Upload, FileText } from 'lucide-react';

export const DocumentUploader = ({ onAnalyzed }: { onAnalyzed: () => void }) => {
  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-4">
      <div className="w-12 h-12 rounded-2xl bg-amber-600/20 text-amber-400 flex items-center justify-center mx-auto">
        <Upload className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-base font-bold text-white">Upload Document for AI Intelligence</h2>
        <p className="text-xs text-slate-400 mt-1">Supports PDF, DOCX, TXT, and CSV files up to 25MB</p>
      </div>
      <button
        onClick={onAnalyzed}
        className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl text-xs inline-flex items-center gap-2"
      >
        <FileText className="w-4 h-4" /> Load Sample Contract PDF
      </button>
    </div>
  );
};`
      },
      {
        path: "src/components/DocumentSummaryView.tsx",
        name: "DocumentSummaryView.tsx",
        language: "typescript",
        content: `import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const DocumentSummaryView = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <Sparkles className="w-5 h-5 text-amber-400" />
        <h2 className="text-sm font-bold text-white">Executive Document Summary</h2>
      </div>

      <div className="space-y-3 text-xs text-slate-300">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <p className="font-bold text-amber-400 font-mono">Key Takeaways</p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-slate-300">
            <li>Service agreement valid through December 31, 2027.</li>
            <li>Quarterly audit obligations with 30-day cure window.</li>
            <li>Limitation of liability capped at 12 months of service fees.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/components/DocumentComparisonView.tsx",
        name: "DocumentComparisonView.tsx",
        language: "typescript",
        content: `import React from 'react';
import { GitCompare } from 'lucide-react';

export const DocumentComparisonView = () => {
  return (
    <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4">
      <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
        <GitCompare className="w-4 h-4 text-amber-400" /> Side-by-Side Clause Comparison
      </h2>
      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-amber-400 font-bold">Document A (v1.0)</p>
          <p className="text-slate-400 mt-2">Payment terms: Net 30 days upon invoice receipt.</p>
        </div>
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <p className="text-emerald-400 font-bold">Document B (v2.0 Revision)</p>
          <p className="text-slate-200 mt-2">Payment terms: Net 15 days upon invoice receipt (+2% late fee).</p>
        </div>
      </div>
    </div>
  );
};`
      },
      {
        path: "src/lib/supabaseSchema.sql",
        name: "supabaseSchema.sql",
        language: "sql",
        content: `-- AI Document Analyzer Schema
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  file_path TEXT NOT NULL,
  summary TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
`
      }
    ]
  }
];

