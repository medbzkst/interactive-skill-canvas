import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Download, ExternalLink, Calendar, Presentation, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract: string;
  pdfUrl?: string;
  doiUrl?: string;
  slidesUrl?: string;
  posterUrl?: string;
  posterNote?: string;
  category: 'conference' | 'workshop' | 'journal';
}

const publications: Publication[] = [
  {
    title: 'A Dataflow Overlay for Monte Carlo Multi-Asset Option Pricing on AMD Versal AI Engines',
    authors: 'M. Bouaziz, M. Samet, and S. A. Fahmy',
    venue: "ISC'25",
    year: '2025',
    abstract: 'Proposes a dataflow design to run Monte Carlo simulations on AMD AI Engines for a financial application. Demonstrates 25x speedup over Vitis Quant. Finance lib. on AMD FPGAs, 13x over 128 parallel CPU threads, and 1.8x energy efficiency over GPU implementation.',
    pdfUrl: 'https://moe-dataflow.com/papers/pdf/isc25mc.pdf',
    slidesUrl: 'https://moe-dataflow.com/papers/slides/isc25mc.pdf',
    posterUrl: 'https://moe-dataflow.com/posters/snsl25mc.pdf',
    posterNote: "SNSL'25",
    category: 'conference'
  },
  {
    title: 'PRNGine: Massively Parallel Pseudo-Random Number Generation and Probability Distribution Approximations on AMD AI Engines',
    authors: 'M. Bouaziz, and S. A. Fahmy',
    venue: "IPDPSW'25",
    year: '2025',
    abstract: 'Shows how PRNGs can be implemented on AMD AI Engines by combining supported operations and how to deploy the design in a dataflow model.',
    pdfUrl: 'https://moe-dataflow.com/papers/pdf/ipdpsw25prng.pdf',
    slidesUrl: 'https://moe-dataflow.com/papers/slides/ipdpsw25prng.pdf',
    category: 'workshop'
  },
  {
    title: 'Benchmarking Floating Point Performance of Massively Parallel Dataflow Overlays on AMD Versal Compute Primitives',
    authors: 'M. Bouaziz, and S. A. Fahmy',
    venue: "IPDPSW'25",
    year: '2025',
    abstract: 'Compares the performance and the energy efficiency of floating-point units on AMD Versal (AI Engines v.s. DSP58 blocks) and highlights the challenges for implementing massive designs of FP32 operations on the same architecture.',
    pdfUrl: 'https://moe-dataflow.com/papers/pdf/ipdpsw25fp.pdf',
    slidesUrl: 'https://moe-dataflow.com/papers/slides/ipdpsw25fp.pdf',
    posterUrl: 'https://moe-dataflow.com/posters/date25fp.pdf',
    posterNote: "DATE'25, OSSMPIC workshop",
    category: 'workshop'
  },
  {
    title: 'Leveraging MLIR for Efficient Irregular-Shaped CGRA Overlay Design',
    authors: 'M. Bouaziz, and S. A. Fahmy',
    venue: "ASAP'24 PhD Forum",
    year: '2024',
    abstract: 'Proposes leveraging MLIR compiler infrastructure to analyze irregularities in HPC/AI workloads and optimise the CGRA/dataflow architectures accordingly (performance & energy).',
    pdfUrl: 'https://moe-dataflow.com/papers/pdf/asap24cgraoverlay.pdf',
    posterUrl: 'https://moe-dataflow.com/posters/asap24cgraoverlay.pdf',
    category: 'workshop'
  },
  {
    title: 'Parallel FPGA Routers with Lagrange Relaxation',
    authors: 'R. Agrawal, K. Ahuja, D. Maheshwari, M. U. Shaikh, M. Bouaziz, and A. Kumar',
    venue: 'IEEE Access',
    year: '2023',
    abstract: 'Implements parallel FPGA routing based on VTR/VPR 7 and leveraging Lagrangian Relaxation numerical method for routability.',
    doiUrl: 'https://doi.org/10.1109/ACCESS.2023.3328769',
    category: 'journal'
  }
];

const categoryStyles = {
  conference: { label: 'Conference', color: 'text-compiler bg-compiler/20' },
  workshop: { label: 'Workshop', color: 'text-hpc bg-hpc/20' },
  journal: { label: 'Journal', color: 'text-fpga bg-fpga/20' }
};

export default function Publications() {
  return (
    <div className="min-h-screen">
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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Publications</h1>
              <p className="text-muted-foreground mt-1">Research papers in compilers, HPC, and reconfigurable computing</p>
            </div>
          </div>
        </div>
      </header>

      {/* Publications List */}
      <main className="px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <article 
              key={index}
              className={cn(
                'group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6',
                'hover:border-primary/30 transition-all duration-300',
                'animate-fade-in-up'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-3">
                <span className={cn(
                  'text-xs px-2 py-1 rounded-full font-mono',
                  categoryStyles[pub.category].color
                )}>
                  {categoryStyles[pub.category].label}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  {pub.year}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{pub.venue}</span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {pub.title}
              </h2>

              {/* Authors */}
              <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>

              {/* Abstract */}
              <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                {pub.abstract}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 flex-wrap">
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs',
                      'bg-primary/10 text-primary hover:bg-primary/20 transition-colors'
                    )}
                  >
                    <Download className="w-3 h-3" />
                    PDF
                  </a>
                )}
                {pub.slidesUrl && (
                  <a
                    href={pub.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs',
                      'bg-architecture/10 text-architecture hover:bg-architecture/20 transition-colors'
                    )}
                  >
                    <Presentation className="w-3 h-3" />
                    Slides
                  </a>
                )}
                {pub.posterUrl && (
                  <a
                    href={pub.posterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs',
                      'bg-hpc/10 text-hpc hover:bg-hpc/20 transition-colors'
                    )}
                  >
                    <Image className="w-3 h-3" />
                    Poster{pub.posterNote && ` (${pub.posterNote})`}
                  </a>
                )}
                {pub.doiUrl && (
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs',
                      'bg-fpga/10 text-fpga hover:bg-fpga/20 transition-colors'
                    )}
                  >
                    <ExternalLink className="w-3 h-3" />
                    DOI
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
