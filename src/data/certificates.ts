export interface Certificate {
  id: string;
  title: string;
  org: string;
  platform: string;
  date: string;
  description: string;
  url: string | null;
  skills: string[];
}

export const certificates: Certificate[] = [
  {
    id: "google-bi",
    title: "Google Business Intelligence",
    org: "Google",
    platform: "Coursera",
    date: "May 13, 2025",
    description: "Professional certificate covering data models, pipelines, dashboards, and business decision-making workflows.",
    url: "https://coursera.org/verify/professional-cert/G0R0F0Q7OVUI",
    skills: ["Data Analysis", "Business Intelligence", "Dashboard Design"]
  },
  {
    id: "google-ai",
    title: "Google AI Essentials",
    org: "Google",
    platform: "Coursera",
    date: "May 5, 2025",
    description: "Applied directly in IntelliTrade's Gemini API integration pipeline and AI extraction workflows.",
    url: "https://coursera.org/verify/BKHYQKZ8WHJS",
    skills: ["LLM Prompt Engineering", "AI Integration", "Gemini API"]
  },
  {
    id: "hackathon-2026",
    title: "National AI Hackathon Participant",
    org: "Atomcamp & KSBL",
    platform: "National AI Hackathon 2026",
    date: "May 13–14, 2026",
    description: "Two-day Agentic AI Workshop and competitive hackathon in Karachi. Built AI solutions under 48-hour deadline.",
    url: null,
    skills: ["Teamwork", "Rapid Prototyping", "Agentic AI"]
  },
  {
    id: "remote-pm",
    title: "Project Management Trainee",
    org: "Saint Louis University & Excelerate",
    platform: "Remote Internship",
    date: "Nov 5, 2025",
    description: "Global remote internship with US-backed international professional standards. Executed PM workflows across time zones.",
    url: null,
    skills: ["Cross-functional Collaboration", "Remote Work", "International Standards"]
  }
];
