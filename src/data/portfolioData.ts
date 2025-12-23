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
  type: 'official' | 'unofficial';
  course: string;
  level?: string;
  period: string;
  description: string;
  link?: { text: string; url: string };
}

export interface MentoringExperience {
  program: string;
  period: string;
  students: string;
  topic: string;
  outcome?: string;
}

export const teachingData = {
  officialTA: [
    {
      type: 'official' as const,
      course: 'CS356: Hardware Accelerator Architectures',
      level: 'PhD',
      period: "Spring'25",
      description: 'Designing a High-Level Synthesis (HLS) tutorial from scratch. Giving tutorial sessions on HLS. Grading the course project.'
    },
    {
      type: 'official' as const,
      course: 'CS256: Digital Design and Computer Architecture',
      level: 'MS',
      period: "Fall'23, '24, '25",
      description: 'Giving tutorials on Vivado, providing help sessions for the course project (arcade game design in SystemVerilog), grading homework and the course project.'
    },
    {
      type: 'official' as const,
      course: 'CS280: System Architecture and Performance',
      level: 'MS',
      period: "Fall'23",
      description: 'Grading homework and the course project, and providing assistance to students.'
    }
  ] as TeachingExperience[],
  unofficialTeaching: [
    {
      type: 'unofficial' as const,
      course: 'High-Level Synthesis and AMD NPU Programming',
      period: "Summer'25",
      description: 'Gave sessions on HLS design and AMD NPU programming to a group of enthusiastic students. The course was sponsored by AMD, which generously provided access to FPGA boards and an AMD NPU-equipped machine.'
    },
    {
      type: 'unofficial' as const,
      course: 'Digital Design and Computer Architecture',
      period: "Spring'23",
      description: 'Gave lectures about digital design, FPGA architecture, RISC-V architecture, and Verilog coding to a group of enthusiastic students.'
    }
  ] as TeachingExperience[],
  mentoring: [
    {
      program: 'Saudi Summer Internship',
      period: "Summer'24",
      students: '1 MSc student from Purdue University',
      topic: 'RTL systolic matrix multiply using native FP32 operation support of AMD Versal DSP58 blocks',
      outcome: 'Ranked 3rd best internship of Summer\'24'
    },
    {
      program: 'KAUST Gifted Student Program',
      period: "Summer'23",
      students: '2 BSc students from UIUC',
      topic: 'Building RTL designs of arbitrarily sized FP32 multipliers using AMD Versal DSP58 blocks'
    },
    {
      program: 'KAUST Gifted Student Program',
      period: "Summer'22",
      students: '2 BSc students from UW',
      topic: 'Extending OpenCGRA to support more interconnect topologies'
    }
  ] as MentoringExperience[],
  ongoing: 'Actively mentoring new joiners and students undergoing their MS thesis in our research lab.'
};
