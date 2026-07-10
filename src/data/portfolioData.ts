export interface Project {
  title: string;
  tech: string[];
  description: string;
  icon: string;
  links: { label: string; url: string }[];
  stats?: { label: string; value: string; icon: string }[];
}

export interface ExperienceRole {
  title: string;
  duration: string;
  bullets: string[];
  links?: { label: string; url: string }[];
}

export interface Experience {
  company: string;
  logo: string;
  duration: string;
  location: string;
  website: string;
  roles: ExperienceRole[];
}

export interface Education {
  school: string;
  logo?: string;
  degree: string;
  duration: string;
  bullets?: string[];
}

export interface Leadership {
  role: string;
  organization: string;
  duration?: string;
  description?: string;
}

export interface Achievement {
  title: string;
  subtitle: string;
  logo?: string;
  tags?: string[];
}

export interface Blog {
  title: string;
  description: string;
  url?: string;
  isFeatured?: boolean;
}

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface PortfolioData {
  name: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profilePicUrl: string;
  summary: string;
  aboutMe: string;
  professionalLine: string;
  achievementsLine: string;
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  leadership: Leadership[];
  achievements: Achievement[];
  blogs: Blog[];
  leadershipLine?: string;
  quote: {
    text: string;
    author: string;
    anime?: string;
  };
}

export const portfolioData: PortfolioData = {
  name: "Seam",
  fullName: "Shahriar Ahmed Seam",
  title: "AI/ML Engineer",
  email: "shahriarseam17@gmail.com",
  phone: "+880 1700-942829",
  github: "https://github.com/shahriar-ahmed-seam",
  linkedin: "https://www.linkedin.com/in/shahriar-ahmed-seam/",
  resumeUrl: "/Shahriar_Ahmed_Seam_CV.pdf",
  profilePicUrl: "/me.png",
  summary: "I am a Computer Science and Engineering student at BUET and an AI/ML engineer working across the modern AI stack, from LLMs, RAG, and agentic systems to generative AI, NLP, computer vision, and diffusion models. Alongside this, I research and fine-tune LLMs and turn them into production-grade systems built on fault-tolerant microservices and solid backend, full-stack, and DevOps engineering. To me, AI should be a core, observable part of production infrastructure, not just an add-on.",
  aboutMe: "I am a Computer Science and Engineering student at BUET and an AI/ML engineer working across the modern AI stack, from LLMs, RAG, and agentic systems to generative AI, NLP, computer vision, and diffusion models. Alongside this, I research and fine-tune LLMs and turn them into production-grade systems built on fault-tolerant microservices and solid backend, full-stack, and DevOps engineering. To me, AI should be a core, observable part of production infrastructure, not just an add-on.",
  professionalLine: "AI/ML Engineer working across the modern AI stack, from LLMs, RAG, and agentic systems to generative AI, NLP, computer vision, and diffusion models.",
  achievementsLine: "Computer Science & Engineering student at BUET | Founder & AI/ML Engineer at Somokolon Labs",
  leadershipLine: "",
  experiences: [
    {
      company: "Somokolon Labs",
      logo: "/logo.png",
      duration: "Jan 2026 – Present",
      location: "Dhaka, Bangladesh",
      website: "https://somokolonlabs.com",
      roles: [
        {
          title: "Founder & AI/ML Engineer",
          duration: "Jan 2026 – Present",
          bullets: [
            "Founded and run an AI and software studio that ships **LLM, RAG, generative-AI**, and **full-stack** products end to end.",
            "Delivered production **point-of-sale (POS) software** for small retail businesses, from requirements gathering through deployment.",
            "Own the full lifecycle: research, engineering, **CI/CD, cloud deployment, and monitoring** across the studio's shared infrastructure."
          ],
          links: [
            { label: "somokolonlabs.com", url: "https://somokolonlabs.com" }
          ]
        }
      ]
    }
  ],
  projects: [
    {
      title: "Nexus Agent Orchestrator",
      tech: ["LangGraph", "FastAPI", "Next.js", "pgvector"],
      description: "Multi-agent platform (plan -> research -> code -> critique) with RAG over documents; runs fully offline with local models.",
      icon: "fas fa-robot",
      links: [
        { label: "Repository", url: "https://github.com/shahriar-ahmed-seam" }
      ],
      stats: [
        { label: "Stars", value: "0", icon: "fas fa-star" },
        { label: "MAU", value: "0", icon: "fas fa-users" }
      ]
    },
    {
      title: "Vector Vault DB",
      tech: ["C++17", "AVX-512", "pybind11"],
      description: "Vector database built from scratch with HNSW/IVF indexes and AVX-512 distance kernels; Python bindings for search over millions of vectors.",
      icon: "fab fa-github",
      links: [
        { label: "Repository", url: "https://github.com/shahriar-ahmed-seam" }
      ],
      stats: [
        { label: "Stars", value: "0", icon: "fas fa-star" },
        { label: "Query Latency", value: "<5ms", icon: "fas fa-tachometer-alt" }
      ]
    },
    {
      title: "ResoNet",
      tech: ["ONNX", "ResNet", "Dart", "Edge AI"],
      description: "On-device respiratory screening from cough audio; reimplemented preprocessing and ResNet18 in pure Dart, cutting the app from 600MB+ to ~70MB with no accuracy loss.",
      icon: "fas fa-mobile-alt",
      links: [
        { label: "Repository", url: "https://github.com/shahriar-ahmed-seam" }
      ],
      stats: [
        { label: "Size Cut", value: "88%", icon: "fas fa-compress-alt" },
        { label: "Accuracy", value: "96%", icon: "fas fa-bullseye" }
      ]
    },
    {
      title: "HillTrack Pulse",
      tech: ["DBSCAN", "FastAPI", "Ollama", "Gemini"],
      description: "Offline-first outbreak-detection and medical-consultation system for low-connectivity rural regions of Bangladesh.",
      icon: "fas fa-heartbeat",
      links: [
        { label: "Repository", url: "https://github.com/shahriar-ahmed-seam" }
      ],
      stats: [
        { label: "Offline Sync", value: "100%", icon: "fas fa-wifi" },
        { label: "Ollama", value: "Active", icon: "fas fa-microchip" }
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      icon: "fas fa-code",
      items: [
        { name: "Python", icon: "fab fa-python" },
        { name: "C++", icon: "fas fa-code" },
        { name: "TypeScript", icon: "fab fa-js" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Go", icon: "fas fa-code" },
        { name: "Java", icon: "fab fa-java" },
        { name: "SQL", icon: "fas fa-database" }
      ]
    },
    {
      category: "AI/ML",
      icon: "fas fa-brain",
      items: [
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "LLMs & RAG", icon: "fas fa-network-wired" },
        { name: "Agentic AI", icon: "fas fa-robot" },
        { name: "Generative AI", icon: "fas fa-magic" },
        { name: "NLP", icon: "fas fa-language" },
        { name: "Computer Vision", icon: "fas fa-eye" },
        { name: "Diffusion Models", icon: "fas fa-image" },
        { name: "Hugging Face", icon: "fas fa-smile" },
        { name: "ONNX", icon: "fas fa-project-diagram" }
      ]
    },
    {
      category: "Backend & Full Stack",
      icon: "fas fa-server",
      items: [
        { name: "FastAPI", icon: "fas fa-bolt" },
        { name: "Node.js/Express", icon: "fab fa-node-js" },
        { name: "Spring Boot", icon: "fas fa-leaf" },
        { name: "React", icon: "fab fa-react" },
        { name: "Next.js", icon: "fas fa-code" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Redis", icon: "fas fa-server" }
      ]
    },
    {
      category: "DevOps & MLOps",
      icon: "fas fa-cloud",
      items: [
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Kubernetes", icon: "fas fa-server" },
        { name: "Kafka", icon: "fas fa-random" },
        { name: "CI/CD (Actions)", icon: "fab fa-github" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Ollama", icon: "fas fa-microchip" },
        { name: "Git", icon: "fab fa-git-alt" }
      ]
    },
    {
      category: "Data Science",
      icon: "fas fa-chart-line",
      items: [
        { name: "Pandas", icon: "fas fa-table" },
        { name: "Numpy", icon: "fas fa-calculator" },
        { name: "Matplotlib", icon: "fas fa-chart-bar" },
        { name: "Jupyter Notebooks", icon: "fas fa-book-open" },
        { name: "SQL", icon: "fas fa-database" }
      ]
    },
    {
      category: "QA",
      icon: "fas fa-check-circle",
      items: [
        { name: "Pytest", icon: "fas fa-vial" },
        { name: "Jest", icon: "fas fa-vial" },
        { name: "Unit Testing", icon: "fas fa-clipboard-check" }
      ]
    },
    {
      category: "Others",
      icon: "fas fa-cubes",
      items: [
        { name: "Linux", icon: "fab fa-linux" },
        { name: "System Design", icon: "fas fa-project-diagram" },
        { name: "Latex", icon: "fas fa-file-pdf" },
        { name: "Markdown", icon: "fab fa-markdown" },
        { name: "Vercel", icon: "fas fa-external-link-alt" },
        { name: "Netlify", icon: "fas fa-external-link-alt" },
        { name: "Web Scraping", icon: "fas fa-spider" },
        { name: "Data Structures", icon: "fas fa-stream" },
        { name: "Competitive Prog.", icon: "fas fa-trophy" }
      ]
    }
  ],
  education: [
    {
      school: "Bangladesh University of Engineering and Technology (BUET)",
      logo: "/buet_logo.png",
      degree: "Bachelor of Science in Computer Science & Engineering",
      duration: "Expected December 2027"
    },
    {
      school: "Notre Dame College",
      logo: "/ndc_logo.png",
      degree: "Higher Secondary Certificate, Science",
      duration: "June 2020"
    }
  ],
  leadership: [
    {
      role: "Secretary (LWS)",
      organization: "Notre Dame Science Club",
      duration: "May 2020 – May 2021"
    },
    {
      role: "Member",
      organization: "BUET Robotics Club"
    },
    {
      role: "Volunteer",
      organization: "Quantum Foundation Blood Donation Program"
    }
  ],
  achievements: [
    {
      title: "Top 5 Finalist",
      subtitle: "Future Builders 2025 (AI-Driven Cognitive Innovation Hackathon) — built HillTrack Pulse, an offline-first healthcare platform for rural Bangladesh.",
      logo: "/star_logo.png",
      tags: ["Hackathon", "Healthcare"]
    },
    {
      title: "Finalist (Top 28 Teams)",
      subtitle: "INFINITE AI Builders (MarTech & Branding) — built AIgnis, an AI-driven autonomous marketing-campaign system.",
      logo: "/star_logo.png",
      tags: ["AI Agent", "Marketing"]
    },
    {
      title: "Finalist",
      subtitle: "BUET CSE Fest Hackathon — built OrionStream ML, an event-driven ML inference platform.",
      logo: "/star_logo.png",
      tags: ["ML Inference", "FastAPI"]
    },
    {
      title: "Regional Champion",
      subtitle: "Bangladesh Physics Olympiad; National Participant in Physics & Astronomy Olympiads.",
      logo: "/astro_logo.png",
      tags: ["Physics Olympiad", "Astronomy"]
    }
  ],
  blogs: [
    {
      title: "Building Nexus Agent Orchestrator: Multi-Agent Collaboration with LangGraph",
      description: "A deep dive into how I built an offline-first multi-agent platform for code generation, research, and critique. Explores the system architecture, pgvector storage integration, and agent-critique loops.",
      url: "https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV"
    },
    {
      title: "Vector Vault DB: Implementing HNSW Index and AVX-512 Distance Kernels in C++",
      description: "Explores the math and engineering behind building a vector database from scratch. Shows how SIMD AVX-512 assembly speedups cut distance calculation latency.",
      url: "https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV"
    },
    {
      title: "Edge AI Optimization: Porting ResNet18 Preprocessing to Pure Dart for Mobile Outbreaks",
      description: "How we cut on-device respiratory screening models from 600MB+ to ~70MB without losing accuracy, implementing preprocessing and neural net inference in Dart.",
      url: "https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV"
    },
    {
      title: "Outbreak Detection in Low-Connectivity Regions: DBSCAN clustering of Outbreak Data",
      description: "A research-focused blog detailing outbreak-detection algorithms used in HillTrack Pulse, enabling medical consultation in rural parts of Bangladesh.",
      url: "https://github.com/shahriar-ahmed-seam/Shahriar-Ahmed-Seam-Portfolio-CV"
    }
  ],
  quote: {
    text: "If you don't take risks, you can't create a future.",
    author: "Monkey D. Luffy",
    anime: "One Piece"
  }
};
