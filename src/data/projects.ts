export interface FeaturedProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface StandardProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "intellitrade",
    title: "IntelliTrade",
    tagline: "AI-Powered Trade Matching Engine",
    description: "A multi-tenant SaaS platform that automates commodity trade discovery by reading broker emails, extracting structured trade data via AI, and intelligently matching buyers with sellers in real time.",
    problem: "Human brokers spend hours reading messy emails and manually matching buyers to sellers, leaving profit on the table due to missed connections.",
    solution: "IntelliTrade monitors email inboxes 24/7, uses AI to understand trade intents, and runs matching algorithms that combine multiple sellers to fulfill large orders automatically.",
    tech: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "BullMQ", "Redis", "Google Gemini", "OpenAI"],
    image: "/images/intelli-trade.jpg"
  },
  {

    id: "tacitvault",
    title: "TacitVault AI",
    tagline: "Voice-to-Knowledge Management System",
    description: "An end-to-end KMS that captures undocumented expertise via voice, uses LLMs to structure it into SOPs, and predicts knowledge risks before they impact operations.",
    problem: "Critical operational knowledge lives only in employees' heads. When experts leave, the knowledge leaves with them.",
    solution: "TacitVault captures voice input, structures it into searchable SOPs, and monitors for concentration and retirement risks, alerting management before gaps become crises.",
    tech: ["Python", "FastAPI", "Google Gemini API", "Supabase", "PostgreSQL", "pgvector", "APScheduler"],
    image: "/images/tacit-vault.png"
  }
];

export const standardProjects: StandardProject[] = [
  {
    id: "taskmanager",
    title: "Task Management System",
    description: "Re-engineered a vanilla JavaScript task app into a modular React architecture using Hooks for state management, with priority tagging and search functionality.",
    tech: ["React.js", "JavaScript", "CSS3"]
  },
  {
    id: "newsapp",
    title: "News App",
    description: "A responsive news application consuming REST APIs with dynamic routing, category filtering, and real-time state updates.",
    tech: ["React.js", "REST API", "JavaScript"]
  },
  {
    id: "textutilz",
    title: "Text Utilz",
    description: "Built a productivity tool featuring text transformation, word counting, and character analysis with a clean, responsive interface.",
    tech: ["React.js", "JavaScript", "CSS3"]
  }
];
