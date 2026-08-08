import React, { useState, useEffect } from 'react';
import { 
  Folder, File, Search, Copy, Check, ExternalLink, Github, ChevronRight, ChevronDown, 
  Code2, ArrowLeft, Download, RefreshCw, AlertCircle, Sparkles, Menu, X 
} from 'lucide-react';
import { CodeFile, Project } from '../../types/project';

interface CodeViewerProps {
  project: Project;
  onBack?: () => void;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ project, onBack }) => {
  const [files, setFiles] = useState<CodeFile[]>(project.files || []);
  const [selectedFile, setSelectedFile] = useState<CodeFile>(
    project.files[0] || {
      path: "README.md",
      name: "README.md",
      language: "markdown",
      content: `# ${project.title}\n\n${project.description}`
    }
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    'src': true,
    'supabase': true,
    'server': true
  });

  // Effect: Attempt to load real GitHub files if available, or fallback to project.files
  useEffect(() => {
    if (!project.githubUrl) {
      setFiles(project.files);
      if (project.files[0]) setSelectedFile(project.files[0]);
      return;
    }

    // Attempt to extract owner and repo from githubUrl (e.g. https://github.com/sabarisasi/AI-Health-Companion-Apk)
    const match = project.githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
      setFiles(project.files);
      if (project.files[0]) setSelectedFile(project.files[0]);
      return;
    }

    const [, owner, repo] = match;
    const cleanRepo = repo.replace(/\.git$/, '');

    setLoading(true);
    setFetchError(null);

    // Fetch repository contents from GitHub REST API
    fetch(`https://api.github.com/repos/${owner}/${cleanRepo}/contents`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error('Invalid repo response');
        
        // Map GitHub directory objects to CodeFile items
        const loadedFiles: CodeFile[] = data
          .filter((item: { type: string; name: string }) => item.type === 'file')
          .slice(0, 15)
          .map((item: { name: string; path: string; html_url: string; download_url?: string }) => ({
            path: item.path,
            name: item.name,
            language: item.name.endsWith('.ts') || item.name.endsWith('.tsx') ? 'typescript' : 
                      item.name.endsWith('.json') ? 'json' : 
                      item.name.endsWith('.md') ? 'markdown' : 'javascript',
            content: `// Source file: ${item.name}\n// Repository: https://github.com/${owner}/${cleanRepo}\n// URL: ${item.html_url}\n\n// Click "View on GitHub" to inspect full remote file.`
          }));

        if (loadedFiles.length > 0) {
          // Merge fetched files with project.files
          const merged = [...project.files];
          loadedFiles.forEach(lf => {
            if (!merged.some(f => f.path === lf.path)) {
              merged.push(lf);
            }
          });
          setFiles(merged);
          setSelectedFile(merged[0]);
        } else {
          setFiles(project.files);
        }
      })
      .catch(() => {
        // Fallback silently to project.files
        setFiles(project.files);
        if (project.files[0]) setSelectedFile(project.files[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [project]);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([selectedFile.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const toggleFolder = (folderName: string) => {
    setOpenFolders(prev => ({ ...prev, [folderName]: !prev[folderName] }));
  };

  const filteredFiles = files.filter(f => 
    f.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group files by directory
  const fileTree: Record<string, CodeFile[]> = {};
  filteredFiles.forEach(file => {
    const parts = file.path.split('/');
    const dir = parts.length > 1 ? parts[0] : 'root';
    if (!fileTree[dir]) {
      fileTree[dir] = [];
    }
    fileTree[dir].push(file);
  });

  const lines = selectedFile.content.split('\n');

  return (
    <div className="w-full glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl animate-in fade-in duration-200">
      
      {/* Top Code Viewer Navigation Bar */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Back to Project Overview"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                {onBack && (
                  <>
                    <button onClick={onBack} className="hover:text-white transition-colors">Home</button>
                    <span>/</span>
                    <button onClick={onBack} className="hover:text-white transition-colors">Projects</button>
                    <span>/</span>
                  </>
                )}
                <span className="text-blue-400 font-bold truncate max-w-[150px]">{project.title}</span>
                <span>/</span>
                <span className="text-slate-300 font-semibold">Source Code</span>
              </div>
              <h2 className="font-heading font-bold text-white text-base md:text-lg">{project.title} — Code Explorer</h2>
            </div>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex items-center gap-2">
          {/* Mobile Sidebar Toggle Button */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden px-3 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono flex items-center gap-1.5"
          >
            {mobileSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            <span>Files</span>
          </button>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-mono font-medium flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          ) : (
            <span className="px-3.5 py-2 rounded-xl bg-slate-900 text-slate-500 text-xs font-mono border border-slate-800">
              Repository Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Main Split Code Interface */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] relative">
        
        {/* Left Sidebar: File Tree & Search */}
        <div className={`
          md:col-span-4 lg:col-span-3 border-r border-slate-800/80 bg-slate-950/90 p-4 space-y-4
          ${mobileSidebarOpen ? 'block absolute inset-0 z-20 bg-slate-950' : 'hidden md:block'}
        `}>
          
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-slate-400 uppercase font-bold tracking-wider">
              Project Explorer
            </span>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              branch: main
            </span>
          </div>

          {/* File Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search files by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500/50 font-mono"
            />
          </div>

          {/* Folder & File Tree */}
          <div className="space-y-1 overflow-y-auto max-h-[440px] pr-1 font-mono text-xs">
            {Object.keys(fileTree).map((dir) => {
              if (dir === 'root') {
                return fileTree[dir].map((file) => (
                  <button
                    key={file.path}
                    onClick={() => {
                      setSelectedFile(file);
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-left ${
                      selectedFile.path === file.path
                        ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <File className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{file.name}</span>
                  </button>
                ));
              }

              const isOpen = openFolders[dir] !== false;
              return (
                <div key={dir} className="space-y-1">
                  <button
                    onClick={() => toggleFolder(dir)}
                    className="w-full flex items-center gap-2 px-2 py-1.5 text-slate-300 hover:text-white text-left font-semibold"
                  >
                    {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-500" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
                    <Folder className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{dir}/</span>
                  </button>
                  {isOpen && (
                    <div className="pl-4 space-y-0.5 border-l border-slate-800 ml-3">
                      {fileTree[dir].map((file) => (
                        <button
                          key={file.path}
                          onClick={() => {
                            setSelectedFile(file);
                            setMobileSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors text-left ${
                            selectedFile.path === file.path
                              ? 'bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                          }`}
                        >
                          <File className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{file.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Code Display Area */}
        <div className="md:col-span-8 lg:col-span-9 bg-slate-950 flex flex-col min-w-0">
          
          {/* Active File Header */}
          <div className="p-3 bg-slate-900/70 border-b border-slate-800 flex items-center justify-between font-mono text-xs flex-wrap gap-2">
            <div className="flex items-center gap-2 text-slate-300 truncate">
              <File className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-blue-300 font-semibold truncate">{selectedFile.path}</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] uppercase font-bold shrink-0">
                {selectedFile.language}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleDownloadFile}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors text-[11px]"
                title="Download file"
              >
                <Download className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">Download</span>
              </button>

              <button
                onClick={handleCopy}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors text-[11px]"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Line-Numbered Code Block */}
          <div className="p-4 overflow-x-auto overflow-y-auto max-h-[580px] font-mono text-xs md:text-sm text-slate-200 leading-relaxed bg-slate-950 flex-1">
            <table className="w-full border-collapse">
              <tbody>
                {lines.map((line, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50">
                    <td className="w-10 select-none text-right pr-4 text-slate-600 border-r border-slate-800/60 font-mono text-xs shrink-0">
                      {idx + 1}
                    </td>
                    <td className="pl-4 whitespace-pre font-mono">
                      <span className={
                        line.trim().startsWith('//') || line.trim().startsWith('#') || line.trim().startsWith('--')
                          ? 'text-slate-500 italic'
                          : line.includes('import ') || line.includes('export ') || line.includes('CREATE ') || line.includes('function ')
                          ? 'text-purple-400'
                          : line.includes('const ') || line.includes('interface ') || line.includes('TABLE ')
                          ? 'text-blue-400'
                          : line.includes('return ') || line.includes('if ')
                          ? 'text-rose-400'
                          : 'text-slate-200'
                      }>
                        {line}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
};
