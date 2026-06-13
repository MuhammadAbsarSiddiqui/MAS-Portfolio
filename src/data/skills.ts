export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend & AI",
    items: ["Node.js", "Python", "FastAPI", "Fastify", "Prisma", "Google Gemini API", "REST APIs"]
  },
  {
    category: "Database & Tools",
    items: ["PostgreSQL", "Supabase", "Redis", "Git", "GitHub", "Vercel", "BullMQ"]
  }
];
