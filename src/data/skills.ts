export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend & AI",
    skills: ["Python", "FastAPI", "Node.js", "Google Gemini API", "REST APIs"]
  },
  {
    category: "Database & Tools",
    skills: ["Supabase", "PostgreSQL", "pgvector", "Git", "GitHub", "Vercel", "Netlify"]
  }
];
