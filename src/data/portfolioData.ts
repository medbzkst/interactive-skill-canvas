export type ThemeType = 'compiler' | 'architecture' | 'hpc' | 'fpga';

export interface ThemeData {
  id: ThemeType;
  title: string;
  subtitle: string;
  icon: string;
  keywords: string[];
  skills: string[];
  tools: string[];
  projects: {
    title: string;
    url: string;
    description: string;
  }[];
  publications: {
    title: string;
    venue: string;
    url?: string;
  }[];
}

export const portfolioThemes: ThemeData[] = [
  {
    id: 'compiler',
    title: 'Compiler',
    subtitle: 'MLIR/LLVM Infrastructure',
    icon: '⟨/⟩',
    keywords: ['MLIR', 'LLVM', 'Polyhedral Optimization', 'HLS', 'Polygeist', 'Clang'],
    skills: ['MLIR (proficient)', 'C/C++ (advanced)', 'High-Level Synthesis'],
    tools: ['MLIR/LLVM compiler infrastructure', 'Polygeist', 'Clang', 'Vitis HLS'],
    projects: [
      {
        title: 'AutoVESK (MLIR Extension)',
        url: 'https://gitlab.inria.fr/bramas/autovesk/tree/mlir-extension',
        description: 'Contributing to MLIR-based compilation for spatial architectures'
      }
    ],
    publications: [
      {
        title: 'Leveraging MLIR for Efficient Irregular-Shaped CGRA Overlay Design',
        venue: 'ASAP\'24 PhD Forum',
        url: 'https://moe-dataflow.com/papers/pdf/asap24cgraoverlay.pdf'
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Custom Architectures',
    subtitle: 'Spatial Dataflow Design',
    icon: '◇',
    keywords: ['Dataflow', 'CGRA', 'Spatial Computing', 'Reconfigurable', 'DSP Blocks'],
    skills: ['Verilog/SystemVerilog (proficient)', 'RTL Design', 'Dataflow Modeling'],
    tools: ['Vivado', 'Vitis', 'OpenCGRA', 'AMD Versal Platform'],
    projects: [
      {
        title: 'FP-Versal-Bench',
        url: 'https://github.com/accl-kaust/fp-versal-bench',
        description: 'Massive dataflow designs of FP32 multipliers on AMD AI Engines and DSP58 blocks'
      }
    ],
    publications: [
      {
        title: 'Benchmarking Floating Point Performance of Massively Parallel Dataflow Overlays on AMD Versal',
        venue: 'IPDPSW\'25',
        url: 'https://moe-dataflow.com/papers/pdf/ipdpsw25fp.pdf'
      }
    ]
  },
  {
    id: 'hpc',
    title: 'HPC',
    subtitle: 'High-Performance Computing',
    icon: '⚡',
    keywords: ['Parallel Computing', 'Monte Carlo', 'PRNG', 'Performance Optimization'],
    skills: ['C/C++ (advanced)', 'Python (advanced)', 'CUDA', 'OpenMP', 'OpenMPI'],
    tools: ['CUDA', 'OpenMP', 'OpenMPI', 'Numpy', 'Cupy', 'Gprof'],
    projects: [
      {
        title: 'MC Option Pricing AIE',
        url: 'https://github.com/accl-kaust/mc-option-pricing-aie',
        description: 'Monte Carlo simulator for multi-asset option pricing on AMD AI Engines'
      },
      {
        title: 'PRNGine',
        url: 'https://github.com/accl-kaust/prngine',
        description: 'SFMT, XORSHIFT, XOROSHIRO PRNGs on AMD AI Engines'
      }
    ],
    publications: [
      {
        title: 'A Dataflow Overlay for Monte Carlo Multi-Asset Option Pricing on AMD Versal AI Engines',
        venue: 'ISC\'25',
        url: 'https://moe-dataflow.com/papers/pdf/isc25mc.pdf'
      },
      {
        title: 'PRNGine: Massively Parallel PRNG and Probability Distribution on AMD AI Engines',
        venue: 'IPDPSW\'25',
        url: 'https://moe-dataflow.com/papers/pdf/ipdpsw25prng.pdf'
      }
    ]
  },
  {
    id: 'fpga',
    title: 'FPGA',
    subtitle: 'AMD Versal & AI Engines',
    icon: '▦',
    keywords: ['AMD Versal', 'AI Engines', 'XDNA', 'DSP58', 'Reconfigurable Computing'],
    skills: ['Verilog/SystemVerilog (proficient)', 'HLS', 'AMD AI Engines API'],
    tools: ['Vivado', 'Vitis', 'Vitis Analyzer', 'AMD AI Engines API'],
    projects: [
      {
        title: 'FP-Versal-Bench',
        url: 'https://github.com/accl-kaust/fp-versal-bench',
        description: 'FP32 operations benchmarking on AI Engines vs DSP58 blocks'
      }
    ],
    publications: [
      {
        title: 'Parallel FPGA Routers with Lagrange Relaxation',
        venue: 'IEEE Access\'23',
        url: 'https://doi.org/10.1109/ACCESS.2023.3328769'
      }
    ]
  }
];

export const personalInfo = {
  name: 'Mohamed Bouaziz',
  title: 'PhD Student at KAUST',
  subtitle: 'Accelerated Connected Computing Lab',
  bio: 'Working on hardware acceleration on reconfigurable spatial dataflow architectures.',
  openTo: 'Open to internship opportunities in building compilers and custom spatial dataflow architectures for HPC and AI.',
  links: {
    email: 'mohamed.bouaziz@kaust.edu.sa',
    resume: 'https://moe-dataflow.com/docs/resume.pdf',
    linkedin: 'https://www.linkedin.com/in/mohamed-bouaziz/',
    github: 'https://github.com/medbzkst',
    lab: 'https://cemse.kaust.edu.sa/profiles/mohamed-bouaziz'
  }
};

export interface TeachingExperience {
  role: string;
  course: string;
  institution: string;
  period: string;
  description?: string;
}

export interface StudentSupervision {
  name: string;
  level: string;
  topic: string;
  period: string;
  outcome?: string;
}

export const teachingData = {
  taExperience: [
    {
      role: 'Teaching Assistant',
      course: 'CS 280 - Computer Architecture',
      institution: 'KAUST',
      period: 'Spring 2024',
      description: 'Assisted with lab sessions on processor design and memory hierarchy'
    },
    {
      role: 'Teaching Assistant',
      course: 'CS 220 - Computer Organization',
      institution: 'KAUST',
      period: 'Fall 2023',
      description: 'Led tutorial sessions on assembly programming and digital logic'
    }
  ] as TeachingExperience[],
  studentSupervision: [
    {
      name: 'Undergraduate Intern',
      level: 'BS',
      topic: 'FPGA-based accelerator design for ML inference',
      period: 'Summer 2024',
      outcome: 'Co-authored workshop paper'
    },
    {
      name: 'Master\'s Project',
      level: 'MS',
      topic: 'Compiler optimizations for spatial architectures',
      period: '2023-2024',
      outcome: 'Ongoing collaboration'
    }
  ] as StudentSupervision[]
};
