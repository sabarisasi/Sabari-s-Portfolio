import React, { useState } from 'react';
import { 
  Sparkles, Bot, Terminal, Cpu, Zap, ArrowRight, ShieldCheck, CheckCircle2, 
  Layers, Code2, Workflow, MessageSquare, Compass, ShieldAlert, Check, 
  ExternalLink, Search, Lightbulb, Play, AlertTriangle, UserCheck, HelpCircle
} from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { 
  AI_TOOLS_DATA, WORKFLOW_STEPS_DATA, PROMPT_TECHNIQUES_DATA, 
  CAPABILITIES_EXPLORER_DATA, NO_CODE_TOOLS_DATA, SIMULATOR_PRESETS_DATA, 
  SAFETY_CHECKLIST_DATA, AITool, CapabilityItem 
} from '../../data/aiLabData';
import { projectsData } from '../../data/projects';

interface AILabSectionProps {
  onNavigateContact?: () => void;
  onOpenProjectBySlug?: (slug: string) => void;
}

export const AILabSection: React.FC<AILabSectionProps> = ({
  onNavigateContact,
  onOpenProjectBySlug
}) => {
  // 1. Tool Category Filter State
  const [selectedToolCategory, setSelectedToolCategory] = useState<string>('ALL');

  // 2. Capability Explorer State
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>(CAPABILITIES_EXPLORER_DATA[0].id);

  // 3. Idea Simulator Input State
  const [userIdeaInput, setUserIdeaInput] = useState<string>('Build an inventory app for a small business');
  const [simulatedResult, setSimulatedResult] = useState(SIMULATOR_PRESETS_DATA[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  // 4. Interactive Terminal State
  const [terminalCommand, setTerminalCommand] = useState<string>('build --idea "AI Health Companion"');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> Initializing AI-assisted development workflow...',
    '> Parsing domain parameters and health disclaimer rules...',
    '> Generating system prompt contracts and JSON schemas...',
    '> Wiring React 19 UI with Gemini API backend proxy...',
    '> Build status: SUCCESS (0 errors, 100% typed)'
  ]);

  // Handle Tool Filtering
  const filteredTools = selectedToolCategory === 'ALL'
    ? AI_TOOLS_DATA
    : AI_TOOLS_DATA.filter((t) => t.category === selectedToolCategory);

  // Active Capability Item
  const activeCapability = CAPABILITIES_EXPLORER_DATA.find((c) => c.id === selectedCapabilityId) || CAPABILITIES_EXPLORER_DATA[0];

  // Handle Simulator Submit
  const handleSimulateIdea = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSimulating(true);

    setTimeout(() => {
      const query = userIdeaInput.toLowerCase();
      const matched = SIMULATOR_PRESETS_DATA.find((p) =>
        p.keywords.some((k) => query.includes(k))
      ) || SIMULATOR_PRESETS_DATA[SIMULATOR_PRESETS_DATA.length - 1];

      setSimulatedResult(matched);
      setIsSimulating(false);
    }, 300);
  };

  // Handle Terminal Simulation
  const handleRunTerminalCommand = (cmd: string) => {
    setTerminalCommand(cmd);
    setTerminalOutput([
      `$ ${cmd}`,
      '> Analyzing prompt architecture & security boundaries...',
      '> Validating TypeScript schemas against backend handlers...',
      '> Deploying to staging environment...',
      '> Operational check complete: READY'
    ]);
  };

  // Featured AI Projects from centralized dataset
  const aiFeaturedProjects = projectsData.filter(p => 
    p.technologies.some(t => t.toLowerCase().includes('gemini') || t.toLowerCase().includes('ai') || t.toLowerCase().includes('openai')) ||
    p.category.toLowerCase().includes('ai') || p.featured
  ).slice(0, 3);

  return (
    <section id="ai-lab" className="py-20 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* 1. SECTION BRANDING & HEADER */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              06 / AI LAB
            </span>
            <span className="text-xs font-mono text-slate-500">
              DEV BY SABARI M ACCELERATED WORKFLOW
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Build faster. Think deeper.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 mt-3 max-w-3xl leading-relaxed">
            AI is my development accelerator — helping me research, prototype, build, test and iterate faster while keeping product thinking, architecture and quality in focus.
          </p>
        </div>

        {/* 2. SIGNATURE STATEMENT & TERMINAL DEMO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Signature Statement Card */}
          <GlassCard className="lg:col-span-7 border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-slate-900 to-slate-950 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest block">
                CORE DEVELOPMENT PHILOSOPHY
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-white leading-tight">
                "NO-CODE DOESN'T MEAN <span className="text-purple-400 underline decoration-purple-500/50 underline-offset-4">NO-ENGINEERING</span>."
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                I combine <span className="text-blue-400 font-semibold bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">AI-ASSISTED</span> development, <span className="text-purple-300 font-semibold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">NO-CODE</span> and low-code platforms, APIs, databases and modern web technologies to turn ideas into usable <span className="text-emerald-300 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">DIGITAL PRODUCTS</span> faster.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Grounded System Prompts + Typed Code Quality</span>
              </div>
              <span className="text-xs font-mono text-purple-400 font-bold">
                5x Velocity • 100% Architecture Control
              </span>
            </div>
          </GlassCard>

          {/* Right Interactive Terminal Simulation Component */}
          <GlassCard className="lg:col-span-5 border-slate-800 bg-slate-950 p-5 font-mono text-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-slate-200">ai-lab-terminal ~/sandbox</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            {/* Terminal Command Presets */}
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => handleRunTerminalCommand('build --idea "AI Health Companion"')}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] border border-slate-800 transition-colors"
              >
                $ build --health-app
              </button>
              <button
                onClick={() => handleRunTerminalCommand('test --prompts --strict-json')}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] border border-slate-800 transition-colors"
              >
                $ test --schema
              </button>
              <button
                onClick={() => handleRunTerminalCommand('deploy --vercel --github-sync')}
                className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] border border-slate-800 transition-colors"
              >
                $ deploy --cloud
              </button>
            </div>

            {/* Terminal Display */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 space-y-1.5 min-h-[140px] overflow-y-auto font-mono text-[11px]">
              <div className="text-purple-400 font-bold">$ {terminalCommand}</div>
              {terminalOutput.map((line, idx) => (
                <div key={idx} className={line.startsWith('$') ? 'text-purple-400' : 'text-slate-300'}>
                  {line}
                </div>
              ))}
            </div>

            <div className="text-[10px] text-slate-500 text-right">
              Interactive terminal simulation • DEV BY SABARI M CLI
            </div>
          </GlassCard>

        </div>

        {/* 3. AI DEVELOPMENT TOOLKIT (TOOL MATRIX) */}
        <GlassCard className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase mb-1">
                <Bot className="w-4 h-4" />
                <span>AI DEVELOPMENT TOOLKIT</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Integrated Tool Ecosystem</h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Tools and platforms leveraged across research, prompting, prototyping, backend storage, and deployment.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
              {['ALL', 'AI ASSISTANTS', 'DEVELOPMENT', 'NO-CODE / LOW-CODE', 'BACKEND / DATA', 'DEPLOYMENT'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedToolCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-medium text-[11px] ${
                    selectedToolCategory === cat
                      ? 'bg-purple-600 text-white font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tools Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-colors space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-white text-base">{tool.name}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60 font-semibold">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-blue-400 font-medium">{tool.role}</p>
                  <p className="text-xs text-slate-300 leading-relaxed">{tool.usage}</p>
                </div>

                {tool.projects && tool.projects.length > 0 && (
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Used in:</span>
                    <div className="flex gap-1">
                      {tool.projects.map((slug) => (
                        <button
                          key={slug}
                          onClick={() => onOpenProjectBySlug && onOpenProjectBySlug(slug)}
                          className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition-colors"
                        >
                          {slug}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 4. AI DEVELOPMENT PIPELINE (01 IDEA TO 09 DEPLOY) */}
        <GlassCard className="space-y-6 border-blue-500/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase mb-1">
              <Workflow className="w-4 h-4" />
              <span>INTERACTIVE DEVELOPMENT PIPELINE</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">From Idea to Deployed Software</h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              A structured 9-stage engineering pipeline accelerating execution while ensuring code quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2">
            {WORKFLOW_STEPS_DATA.map((step) => (
              <div
                key={step.id}
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-colors space-y-1.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-blue-400">{step.id}</span>
                  <span className="w-2 h-2 rounded-full bg-blue-500/80" />
                </div>
                <h4 className="font-heading font-bold text-white text-xs">{step.title}</h4>
                <p className="text-[10px] text-slate-400 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 5. PROMPT ENGINEERING SUBSECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Concept Card */}
          <GlassCard className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase">
              <Cpu className="w-4 h-4" />
              <span>PROMPT ENGINEERING</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-white">System Prompt Engineering & Schemas</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Prompt engineering is used to establish strict context boundaries, task decomposition, and predictable output structures for reliable software integration.
            </p>

            <div className="space-y-2 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict Context & Role Boundaries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Guaranteed JSON Output Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Function Calling & External API Bindings</span>
              </div>
            </div>
          </GlassCard>

          {/* Right Prompt Techniques List */}
          <GlassCard className="lg:col-span-7 space-y-4">
            <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider text-slate-400 font-mono">
              Prompt Techniques Applied
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROMPT_TECHNIQUES_DATA.map((tech) => (
                <div key={tech.name} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="font-bold text-white text-xs block text-purple-300">{tech.name}</span>
                  <p className="text-[11px] text-slate-400 leading-snug">{tech.purpose}</p>
                  <div className="p-1.5 rounded bg-slate-950 font-mono text-[10px] text-slate-400 truncate border border-slate-800">
                    {tech.example}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* 6. NO-CODE DEVELOPMENT SUBSECTION */}
        <GlassCard className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase mb-1">
              <Zap className="w-4 h-4" />
              <span>NO-CODE DEVELOPMENT WORKFLOW</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              "From idea to working product — without unnecessary friction."
            </h3>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed mt-2">
              I use no-code and low-code tools when they are the fastest reliable way to solve a problem. When custom logic, integrations or scalability require code, I combine no-code workflows with traditional development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NO_CODE_TOOLS_DATA.map((item) => (
              <div key={item.name} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/60 font-semibold">
                  {item.badge}
                </span>
                <h4 className="font-bold text-white text-sm">{item.name}</h4>
                <p className="text-xs text-slate-300 leading-snug">{item.purpose}</p>
                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-blue-400">
                  {item.workflow}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* 7. "WHAT I CAN BUILD" CAPABILITY EXPLORER */}
        <GlassCard className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-1">
              <Compass className="w-4 h-4" />
              <span>CAPABILITY EXPLORER</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">What I Can Build For You</h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Select a capability category to inspect features, stack, and portfolio associations.
            </p>
          </div>

          {/* Capability Selector Buttons */}
          <div className="flex flex-wrap gap-2">
            {CAPABILITIES_EXPLORER_DATA.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setSelectedCapabilityId(cap.id)}
                className={`px-4 py-2 rounded-xl border text-xs font-mono font-semibold transition-colors ${
                  selectedCapabilityId === cap.id
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cap.category}
              </button>
            ))}
          </div>

          {/* Active Capability Display Box */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xl font-heading font-bold text-white">{activeCapability.title}</h4>
              <p className="text-sm text-slate-300">{activeCapability.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Typical Features */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">TYPICAL FEATURES</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {activeCapability.typicalFeatures.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & Projects */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1.5">POSSIBLE TECH STACK</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeCapability.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-slate-800 text-blue-300 font-mono text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeCapability.relatedProjectSlugs.length > 0 && (
                  <div>
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase block mb-1.5">RELATED PORTFOLIO BUILDS</span>
                    <div className="flex flex-wrap gap-2">
                      {activeCapability.relatedProjectSlugs.map((slug) => (
                        <button
                          key={slug}
                          onClick={() => onOpenProjectBySlug && onOpenProjectBySlug(slug)}
                          className="px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                        >
                          <span>View {slug}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* 8. IDEA TO PRODUCT SIMULATOR */}
        <GlassCard className="space-y-6 border-purple-500/30">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase mb-1">
              <Lightbulb className="w-4 h-4" />
              <span>PORTFOLIO SIMULATOR</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">Have an idea? Simulate the Development Path</h3>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Type or select a product idea to preview the suggested stack, approach, and execution flow.
            </p>
          </div>

          {/* Quick Idea Presets */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <button
              onClick={() => {
                setUserIdeaInput('Build an inventory app for a small business');
                handleSimulateIdea();
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
            >
              • Small Business Inventory App
            </button>
            <button
              onClick={() => {
                setUserIdeaInput('AI doctor assistant and symptom tracker');
                handleSimulateIdea();
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
            >
              • AI Symptom Assistant
            </button>
            <button
              onClick={() => {
                setUserIdeaInput('Sales metrics & revenue dashboard');
                handleSimulateIdea();
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
            >
              • Sales Analytics Dashboard
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSimulateIdea} className="flex gap-2">
            <input
              type="text"
              value={userIdeaInput}
              onChange={(e) => setUserIdeaInput(e.target.value)}
              placeholder="Describe your idea (e.g. Build an inventory app for a small business)..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-purple-500 font-mono"
            />
            <Button variant="primary" size="md" icon={<Play className="w-4 h-4" />}>
              SIMULATE
            </Button>
          </form>

          {/* Simulation Output Card */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-purple-500/20 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-purple-400 font-bold uppercase">SIMULATED DEVELOPMENT BLUEPRINT</span>
              <span className="text-[10px] text-slate-500">Deterministic Portfolio Mapping</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">PROJECT TYPE</span>
                <span className="text-white font-bold">{simulatedResult.projectType}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">SUGGESTED STACK</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {simulatedResult.suggestedStack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-blue-300 text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">BUILD APPROACH</span>
                <span className="text-emerald-400 font-semibold">{simulatedResult.buildApproach}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80">
              <span className="text-slate-400 font-bold block mb-2 uppercase text-[10px]">ESTIMATED EXECUTION FLOW</span>
              <div className="space-y-1 text-slate-300">
                {simulatedResult.estimatedFlow.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>

        {/* 9. AI VS NO-CODE VS CODE COMPARISON */}
        <GlassCard className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-heading font-bold text-white">"Use the right tool for the problem."</h3>
            <p className="text-xs font-mono text-slate-400">
              Clear technical judgment separates AI acceleration from production reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* AI */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-purple-500/30 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-sm">
                <Bot className="w-4 h-4" />
                <span>AI ACCELERATOR</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-normal">
                <li className="flex items-center gap-2">• Accelerated Research & Ideation</li>
                <li className="flex items-center gap-2">• Inline Code Generation & Refactoring</li>
                <li className="flex items-center gap-2">• Automated Debugging & Test Creation</li>
                <li className="flex items-center gap-2">• Natural Language Document Analysis</li>
              </ul>
            </div>

            {/* NO-CODE */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-blue-500/30 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-sm">
                <Zap className="w-4 h-4" />
                <span>NO-CODE / LOW-CODE</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-normal">
                <li className="flex items-center gap-2">• Rapid UI Layout Scaffolding</li>
                <li className="flex items-center gap-2">• Instant Cloud DB & Auth Wiring</li>
                <li className="flex items-center gap-2">• Fast Visual Prototype Validation</li>
                <li className="flex items-center gap-2">• Zero-Config Edge Deployment</li>
              </ul>
            </div>

            {/* CODE */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-sm">
                <Code2 className="w-4 h-4" />
                <span>CUSTOM CODE</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-normal">
                <li className="flex items-center gap-2">• Complex Business Logic Control</li>
                <li className="flex items-center gap-2">• Custom API & Data Transformations</li>
                <li className="flex items-center gap-2">• Strict Type Safety & Edge Case Handling</li>
                <li className="flex items-center gap-2">• Maximum Performance & Scalability</li>
              </ul>
            </div>
          </div>
        </GlassCard>

        {/* 10. HUMAN + AI STATEMENT & SAFETY CHECKLIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Human + AI Statement */}
          <GlassCard className="space-y-4 border-amber-500/30">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
              <UserCheck className="w-4 h-4" />
              <span>ENGINEERING DECISION MAKER</span>
            </div>
            <h3 className="text-2xl font-heading font-bold text-white">"AI accelerates. I decide."</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              AI can generate possibilities quickly. Product decisions, validation, architecture, testing and final quality still require human judgment.
            </p>
          </GlassCard>

          {/* AI Safety / Quality Checklist */}
          <GlassCard className="space-y-3 border-emerald-500/30">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase block">
              AI QUALITY & SAFETY CHECKLIST
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {SAFETY_CHECKLIST_DATA.map((item) => (
                <div key={item.title} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </GlassCard>

        </div>

        {/* 11. RECRUITER & CLIENT PANELS + FREELANCE AVAILABILITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recruiter View Panel */}
          <GlassCard className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase">
              <UserCheck className="w-4 h-4" />
              <span>WHAT THIS MEANS FOR A TEAM</span>
            </div>
            <h4 className="text-lg font-heading font-bold text-white">Recruiter & Engineering Perspective</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-normal">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Faster product prototyping and rapid experimentation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> AI-assisted debugging and multi-file refactoring</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Modern AI toolchain workflow with GitHub version control</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Ability to build across no-code, low-code, and full custom code</li>
            </ul>
          </GlassCard>

          {/* Client View Panel */}
          <GlassCard className="lg:col-span-6 space-y-4 border-purple-500/30">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>WHAT THIS MEANS FOR A CLIENT</span>
            </div>
            <h4 className="text-lg font-heading font-bold text-white font-heading">Client & Product Delivery Perspective</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              "Bring the idea. We can figure out the fastest reliable path to a working product."
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-slate-400">IDEA → DISCOVERY → PROTOTYPE → BUILD → TEST → LAUNCH</span>
              {onNavigateContact && (
                <Button variant="primary" size="sm" onClick={onNavigateContact}>
                  START A PROJECT
                </Button>
              )}
            </div>
          </GlassCard>

        </div>

        {/* 12. FREELANCE POSITIONING & FEATURED AI PROJECTS */}
        <GlassCard className="p-6 bg-slate-900/90 border-slate-800 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-1">
                CURRENT AVAILABILITY
              </span>
              <h4 className="text-lg font-heading font-bold text-white">Available For Professional Engagement</h4>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-semibold">
              {['FULL-TIME', 'PART-TIME', 'FREELANCE', 'CONTRACT', 'PROJECT-BASED'].map((st) => (
                <span key={st} className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {st}
                </span>
              ))}
            </div>
          </div>

          {/* Featured AI Projects Grid */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400 font-bold uppercase">FEATURED AI PORTFOLIO BUILDS</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aiFeaturedProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenProjectBySlug && onOpenProjectBySlug(p.slug)}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/40 cursor-pointer transition-colors space-y-2 group"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-purple-400 font-bold">{p.category}</span>
                    <span className="text-emerald-400">{p.status}</span>
                  </div>
                  <h5 className="font-bold text-white text-sm group-hover:text-purple-300 transition-colors line-clamp-1">{p.title}</h5>
                  <p className="text-xs text-slate-400 line-clamp-2">{p.description}</p>
                  <div className="pt-2 text-xs font-mono text-blue-400 flex items-center gap-1">
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

      </div>
    </section>
  );
};
