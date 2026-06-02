export interface FeaturedProjectData {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  problem: string;
  solution: string;
  liveUrl: string;
  githubUrl: string;
  imagePath: string;
  isReversed: boolean;
}

export interface StandardProjectData {
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const featuredProjects: FeaturedProjectData[] = [
  {
    title: "IntelliTrade",
    tagline: "AI-Powered Trade Matching Engine",
    description: "An automated system that replaces manual broker work by reading trade emails, extracting buy/sell intents, and mathematically optimizing multi-seller order fulfillment.",
    features: [
      "AI email parsing via Google Gemini",
      "Multi-seller order splitting algorithm",
      "Automated profit calculation",
      "Broker dashboard for review and dispatch"
    ],
    techStack: ["Python", "FastAPI", "Google Gemini API", "React", "Supabase"],
    problem: "Human brokers spend hours reading messy emails and manually matching buyers to sellers, leaving profit on the table due to missed connections.",
    solution: "IntelliTrade monitors email inboxes 24/7, uses AI to understand trade intents, and runs matching algorithms that combine multiple sellers to fulfill large orders automatically.",
    liveUrl: "#",
    githubUrl: "#",
    imagePath: "/images/intellitrade-architecture.png",
    isReversed: false
  },
  {
    title: "TacitVault AI",
    tagline: "Voice-to-Knowledge Management System",
    description: "An end-to-end KMS that captures undocumented expertise via voice, uses LLMs to structure it into SOPs, and predicts knowledge risks before they impact operations.",
    features: [
      "Voice capture via MediaRecorder API",
      "AI structuring into formal SOP templates",
      "Semantic search using pgvector embeddings",
      "Automated risk engine for knowledge gaps"
    ],
    techStack: ["Python", "FastAPI", "Google Gemini API", "Supabase", "pgvector", "APScheduler"],
    problem: "Critical operational knowledge lives only in employees' heads. When experts leave, the knowledge leaves with them.",
    solution: "TacitVault captures voice input, structures it into searchable SOPs, and monitors for concentration and retirement risks, alerting management before gaps become crises.",
    liveUrl: "#",
    githubUrl: "#",
    imagePath: "/images/tacitvault-architecture.png",
    isReversed: true
  }
];

export const standardProjects: StandardProjectData[] = [
  {
    title: "Task Management System",
    tagline: "React Migration with Advanced State Management",
    description: "Re-engineered a vanilla JavaScript task app into a modular React architecture using Hooks for state management, with priority tagging and search functionality.",
    techStack: ["React.js", "JavaScript", "CSS3"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "News App",
    tagline: "Real-Time News with Dynamic Routing",
    description: "A responsive news application consuming REST APIs with dynamic routing, category filtering, and real-time state updates.",
    techStack: ["React.js", "REST API", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#"
  }
];
