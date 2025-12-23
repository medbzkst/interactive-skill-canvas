import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  url: string;
  role: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "accl-kaust/mc-option-pricing-aie",
    url: "https://github.com/accl-kaust/mc-option-pricing-aie",
    role: "owner",
    description: "A Monte Carlo simulator for multi-asset option pricing (financial application) on AMD AI Engines."
  },
  {
    name: "accl-kaust/prngine",
    url: "https://github.com/accl-kaust/prngine",
    role: "owner",
    description: "Paper artifact, where SFMT, XORSHIFT, and XOROSHIRO PRNGs are implemented on AMD AI Engines in a dataflow model and in a standalone accelerator model."
  },
  {
    name: "accl-kaust/fp-versal-bench",
    url: "https://github.com/accl-kaust/fp-versal-bench",
    role: "owner",
    description: "Paper artifact, where massive dataflow designs of FP32 multipliers are implemented on AMD AI Engines and on AMD PL (using DSP58 blocks)."
  },
  {
    name: "gitlab.inria.fr/bramas/autovesk (mlir-extension branch)",
    url: "https://gitlab.inria.fr/bramas/autovesk/tree/mlir-extension",
    role: "contributor",
    description: "Upgraded the code generator to spit out MLIR kernels and added automatic compilation for the target architectures (AVX512, AVX2, SVE2 extensions). Note: this still requires transforming the code gen process into a proper MLIR pass."
  }
];

const Projects = () => {
  return (
      {/* Header */}
      <header className="relative py-12 px-6 border-b border-border/30">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h1>
              <p className="text-muted-foreground mt-1">Projects in compilers, HPC, and reconfigurable computing</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Projects</h1>
        
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary hover:underline flex items-center gap-2"
                >
                  {project.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                  {project.role}
                </span>
              </div>
              
              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
