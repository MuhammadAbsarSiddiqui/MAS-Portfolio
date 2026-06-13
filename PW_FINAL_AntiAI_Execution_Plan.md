# PW — FINAL EXECUTION PLAN
## Muhammad Absar Siddiqui Portfolio
### Anti-AI Design | Asymmetric Layouts | Real Animations

---

## 1. IDENTITY & CONTENT

**Name:** Muhammad Absar Siddiqui  
**Title:** Software Engineer  
**Email:** absar.sid359@gmail.com  
**GitHub:** https://github.com/MuhammadAbsarSiddiqui  
**LinkedIn:** https://www.linkedin.com/in/muhammad-absar-siddiqui  
**Phone:** NOT included in portfolio  
**Location:** NOT mentioned in portfolio copy  
**University:** NOT mentioned anywhere  
**"Student" / "Final-year":** NEVER used  

**Hero Tagline:** "I turn noise into signal."  
**About Philosophy:** "I build systems that understand human intent — turning unstructured input into structured intelligence."  

---

## 2. SECTION ORDER

```
1. Hero (asymmetric, left-heavy)
2. About (split layout, photo overlaps edge)
3. Experience (horizontal scroll cards, imperfect rotation)
4. Projects (full-bleed featured, masonry grid)
5. Skills (tags, no cards, thin separators)
6. Certificates (infinite marquee carousel, testimonial-style)
7. Contact (minimal, text-only, no cards)
8. Footer (copyright only, no socials)
```

---

## 3. DESIGN SYSTEM (Anti-AI)

### Colors
```css
:root {
  --background: #0a0a0f;
  --foreground: #fafafa;
  --muted: #6b7280;
  --border: #1f1f2e;
  --card: #111118;
  --card-hover: #161622;
  --accent-primary: #06b6d4;    /* Cyan - used sparingly */
  --accent-secondary: #f59e0b;  /* Amber - certificates only */
  --accent-glow: rgba(6, 182, 212, 0.15);
}

.light {
  --background: #ffffff;
  --foreground: #0a0a0f;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #f8f9fa;
  --card-hover: #f1f3f5;
  --accent-primary: #0891b2;
  --accent-secondary: #d97706;
  --accent-glow: rgba(8, 145, 178, 0.15);
}
```

### Typography
- **Heading:** Space Grotesk (700) — massive, breaks lines intentionally
- **Body:** Inter (400) — readable, neutral
- **Mono:** JetBrains Mono (400) — dates, tech names, small labels
- **Muted:** Inter (300) — secondary text

### Font Sizes (Anti-Template)
| Element | Mobile | Desktop | Note |
|---------|--------|---------|------|
| Hero Name | text-4xl (36px) | text-8xl (96px) | Left-aligned, breaks across lines |
| Section Title | text-2xl (24px) | text-5xl (48px) | Left-aligned, no centering |
| Project Title | text-xl (20px) | text-3xl (30px) | |
| Body | text-base (16px) | text-lg (18px) | Leading-relaxed |
| Small/Labels | text-sm (14px) | text-sm (14px) | Mono font for dates |

### Spacing (Generous, Asymmetric)
- Section padding: `py-24 md:py-32` (96px / 128px)
- Container: `max-w-6xl` but content often bleeds or uses `max-w-5xl` for text blocks
- Asymmetric offsets: Some sections use `ml-0 md:ml-12` or `mr-0 md:mr-24`

---

## 4. BACKGROUND EFFECTS (Restraint = Premium)

### 4.1 Film Grain Overlay
**File:** `components/global/GrainOverlay.tsx`
```tsx
export default function GrainOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px'
      }}
    />
  );
}
```

### 4.2 Single Floating Orb
**File:** `components/global/AmbientOrb.tsx`
```tsx
'use client';
import { motion } from 'framer-motion';

export default function AmbientOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        initial={{ x: '10%', y: '20%' }}
      />
    </div>
  );
}
```

**Rules:**
- Only ONE orb. Never more.
- `blur-[120px]` — soft, not sharp
- `opacity-20` — barely visible
- 20s drift cycle — slow, meditative
- Positioned at top-left area, not centered

---

## 5. GLOBAL COMPONENTS

### 5.1 Navbar
**File:** `components/global/Navbar.tsx`

**Behavior:**
- Always transparent. No blur, no border, no background transition.
- Fixed top, `z-50`, `h-16`
- Left: "AS." in Space Grotesk bold, cyan. Links to `#hero`.
- Right: "About", "Work", "Contact" — just text links. No "Skills", no "Certificates" in nav.
- Far right: ThemeToggle (Sun/Moon icon only, no text)
- Mobile: Hamburger → full-screen overlay. Large text. No animations on open.

**Active state:** Cyan text + underline draws in from left on hover/active.

```tsx
// Nav links array
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];
```

### 5.2 ThemeProvider
**File:** `components/global/ThemeProvider.tsx`
- Default: dark mode
- Persists to localStorage
- Toggles `dark` class on `<html>`
- No flash on load (check localStorage before render)

### 5.3 ThemeToggle
**File:** `components/global/ThemeToggle.tsx`
- Sun icon in dark mode, Moon in light
- `aria-label` for accessibility
- No text, just icon

### 5.4 CVDButton
**File:** `components/global/CVDButton.tsx`
- Props: `variant?: 'default' | 'hero'`
- `default`: text link style with underline hover
- `hero`: subtle border, no fill
- Downloads `/cv.pdf`
- If CV missing, show button but log console warning

### 5.5 SectionWrapper
**File:** `components/global/SectionWrapper.tsx`
- Props: `{ id: string; children: React.ReactNode; className?: string }`
- `py-24 md:py-32 px-4 md:px-8`
- Inner: `max-w-6xl mx-auto` but children can break this with negative margins

### 5.6 SectionTitle
**File:** `components/global/SectionTitle.tsx`
- Props: `{ title: string; subtitle?: string }`
- Left-aligned always
- Title: `text-2xl md:text-5xl font-heading font-bold`
- Cyan dot after title: `<span className="text-accent-primary">.</span>`
- Subtitle: `text-muted mt-4 text-lg max-w-2xl` (not centered)
- No underline, no decorative line. Just text.

### 5.7 TechBadge
**File:** `components/global/TechBadge.tsx`
- Props: `{ name: string; variant?: 'default' | 'accent' }`
- `default`: `text-muted text-sm font-mono border-b border-border pb-1` (underline style, not pill)
- `accent`: `text-accent-primary text-sm font-mono border-b border-accent-primary pb-1`
- NO pill shape. NO background. Just text with underline. Anti-template.

### 5.8 ScrollReveal
**File:** `components/global/ScrollReveal.tsx`
- Props: `{ children; delay?: number; className?: string }`
- Framer Motion `useInView`, trigger once
- Initial: `opacity: 0, y: 40`
- Animate: `opacity: 1, y: 0`
- Duration: `0.7s`, ease: `[0.25, 0.1, 0.25, 1]` (custom ease, not default)
- Stagger children: `staggerChildren: 0.1`

### 5.9 Footer
**File:** `components/global/Footer.tsx`
- Single line: `© 2026 Muhammad Absar Siddiqui`
- Centered, `text-muted text-sm`
- No social icons. No links. No border top. Just text.
- Socials are in Contact section. Repetition = template.

---

## 6. DATA FILES

### 6.1 social.ts
```typescript
export const socialLinks = {
  email: "absar.sid359@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-absar-siddiqui",
  github: "https://github.com/MuhammadAbsarSiddiqui",
};
```

### 6.2 experience.ts
```typescript
export const experienceData = [
  {
    id: "360xpert",
    role: "Software Engineer & Project Manager",
    company: "360Xpert Solution",
    location: "Karachi, Pakistan",
    date: "Oct 2025 – Present",
    type: "full-time",
    bullets: [
      "Leading end-to-end development of a Pharma CRM (mobile + web) for pharmaceutical sales representatives using Next.js and React",
      "Translating business requirements into technical user stories and managing product backlog across cross-functional teams",
      "Coordinating API integration and feature delivery while writing production frontend code in Next.js"
    ]
  },
  {
    id: "sbp",
    role: "Intern",
    company: "State Bank of Pakistan (SBP)",
    location: "Karachi, Pakistan",
    date: "Jun 2025 – Aug 2025",
    type: "internship",
    bullets: [
      "Analyzed global third-party risk regulations to suggest improvements for local banking practices",
      "Applied analytical skills to understand financial regulator operations and national banking sector",
      "Collaborated with IT teams to align Pakistan's practices with international standards"
    ]
  },
  {
    id: "banoqabil",
    role: "Frontend Web Developer (Intern)",
    company: "Bano Qabil",
    location: "Karachi, Pakistan",
    date: "Dec 2024 – Mar 2025",
    type: "internship",
    bullets: [
      "Developed a responsive restaurant website using React.js with modern UI patterns",
      "Built modular React components for reusability and maintainable code architecture",
      "Implemented responsive design using HTML5, CSS3, and JavaScript (ES6+)"
    ]
  }
];
```

### 6.3 projects.ts
```typescript
export const featuredProjects = [
  {
    id: "intellitrade",
    title: "IntelliTrade",
    tagline: "AI-Powered Trade Matching Engine",
    description: "A multi-tenant SaaS platform that automates commodity trade discovery by reading broker emails, extracting structured trade data via AI, and intelligently matching buyers with sellers in real time.",
    features: [
      "8-step email ingestion pipeline with 3-layer spam defense",
      "AI extraction via Google Gemini with Zod schema validation",
      "4-strategy matching cascade: Exact → Split → Fuzzy → Negotiation",
      "Multi-tenant architecture with automatic query scoping via Prisma middleware",
      "Dual-token JWT auth with refresh token rotation and AES-256-GCM encryption"
    ],
    techStack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "BullMQ", "Redis", "Google Gemini", "OpenAI"],
    problem: "Human brokers spend hours reading messy emails and manually matching buyers to sellers, leaving profit on the table due to missed connections.",
    solution: "IntelliTrade monitors email inboxes 24/7, uses AI to understand trade intents, and runs matching algorithms that combine multiple sellers to fulfill large orders automatically.",
    liveUrl: "#",
    githubUrl: "#",
    imagePath: "/images/intellitrade-architecture.png",
    isReversed: false
  },
  {
    id: "tacitvault",
    title: "TacitVault AI",
    tagline: "Voice-to-Knowledge Management System",
    description: "An end-to-end KMS that captures undocumented expertise via voice, uses LLMs to structure it into SOPs, and predicts knowledge risks before they impact operations.",
    features: [
      "Voice capture via MediaRecorder API with real-time transcription",
      "AI structuring into formal SOP templates using Google Gemini",
      "Semantic search using pgvector embeddings in PostgreSQL",
      "Automated risk engine for knowledge gaps and retirement forecasting",
      "Scheduled monitoring via APScheduler with alert notifications"
    ],
    techStack: ["Python", "FastAPI", "Google Gemini API", "Supabase", "PostgreSQL", "pgvector", "APScheduler"],
    problem: "Critical operational knowledge lives only in employees' heads. When experts leave, the knowledge leaves with them.",
    solution: "TacitVault captures voice input, structures it into searchable SOPs, and monitors for concentration and retirement risks, alerting management before gaps become crises.",
    liveUrl: "#",
    githubUrl: "#",
    imagePath: "/images/tacitvault-architecture.png",
    isReversed: true
  }
];

export const standardProjects = [
  {
    id: "taskmanager",
    title: "Task Management System",
    tagline: "React Migration with Advanced State Management",
    description: "Re-engineered a vanilla JavaScript task app into a modular React architecture using Hooks for state management, with priority tagging and search functionality.",
    techStack: ["React.js", "JavaScript", "CSS3"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "newsapp",
    title: "News App",
    tagline: "Real-Time News with Dynamic Routing",
    description: "A responsive news application consuming REST APIs with dynamic routing, category filtering, and real-time state updates.",
    techStack: ["React.js", "REST API", "JavaScript"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "textutilz",
    title: "Text Utilz",
    tagline: "Productivity Text Transformation Tool",
    description: "Built a productivity tool featuring text transformation, word counting, and character analysis with a clean, responsive interface.",
    techStack: ["React.js", "JavaScript", "CSS3"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const portfolioProject = {
  id: "portfolio",
  title: "Portfolio Website",
  tagline: "This Site — Built with Next.js & Framer Motion",
  description: "A statically-exported portfolio showcasing projects, experience, and skills with asymmetric layouts, ambient animations, and dark/light mode.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  githubUrl: "https://github.com/MuhammadAbsarSiddiqui",
  liveUrl: "#"
};
```

### 6.4 skills.ts
```typescript
export const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    category: "Backend & AI",
    skills: ["Node.js", "Python", "FastAPI", "Fastify", "Prisma", "Google Gemini API", "REST APIs"]
  },
  {
    category: "Database & Tools",
    skills: ["PostgreSQL", "Supabase", "Redis", "Git", "GitHub", "Vercel", "BullMQ"]
  }
];
```

### 6.5 certificates.ts
```typescript
export const certificatesData = [
  {
    id: "google-bi",
    title: "Google Business Intelligence",
    organization: "Google",
    platform: "Coursera",
    date: "May 13, 2025",
    type: "certificate",
    description: "Professional certificate covering data models, pipelines, dashboards, and business decision-making workflows.",
    url: "https://coursera.org/verify/professional-cert/G0R0F0Q7OVUI",
    skills: ["Data Analysis", "Business Intelligence", "Dashboard Design"]
  },
  {
    id: "google-ai",
    title: "Google AI Essentials",
    organization: "Google",
    platform: "Coursera",
    date: "May 5, 2025",
    type: "certificate",
    description: "Applied directly in IntelliTrade's Gemini API integration pipeline and AI extraction workflows.",
    url: "https://coursera.org/verify/BKHYQKZ8WHJS",
    skills: ["LLM Prompt Engineering", "AI Integration", "Gemini API"]
  },
  {
    id: "hackathon-2026",
    title: "National AI Hackathon Participant",
    organization: "Atomcamp & KSBL",
    platform: "National AI Hackathon 2026",
    date: "May 13–14, 2026",
    type: "achievement",
    description: "Two-day Agentic AI Workshop and competitive hackathon in Karachi. Built AI solutions under 48-hour deadline.",
    url: null,
    skills: ["Teamwork", "Rapid Prototyping", "Agentic AI"]
  },
  {
    id: "remote-pm",
    title: "Project Management Trainee",
    organization: "Saint Louis University & Excelerate",
    platform: "Remote Internship",
    date: "Nov 5, 2025",
    type: "achievement",
    description: "Global remote internship with US-backed international professional standards. Executed PM workflows across time zones.",
    url: null,
    skills: ["Cross-functional Collaboration", "Remote Work", "International Standards"]
  }
];
```

---

## 7. SECTION COMPONENTS

### 7.1 HeroSection
**File:** `components/sections/HeroSection.tsx`  
**ID:** `hero`

**Layout:** Left-aligned, asymmetric. Name breaks across 3 lines intentionally.

```tsx
<section id="hero" className="min-h-[90vh] flex flex-col justify-center px-4 md:px-8 pt-16">
  <div className="max-w-6xl mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <h1 className="text-4xl md:text-8xl font-heading font-bold tracking-tight leading-[0.9]">
        Muhammad<br />
        Absar<br />
        Siddiqui<span className="text-accent-primary">.</span>
      </h1>
    </motion.div>

    <motion.p
      className="mt-8 text-lg md:text-xl text-muted max-w-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      I turn noise into signal.
    </motion.p>

    <motion.p
      className="mt-4 text-base text-muted max-w-xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
    >
      Software Engineer building AI-powered applications that transform unstructured human input into structured intelligence.
    </motion.p>

    <motion.div
      className="mt-12 flex gap-6 items-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <a href="#projects" className="text-foreground font-medium border-b border-foreground pb-1 hover:text-accent-primary hover:border-accent-primary transition-colors">
        See my work
      </a>
      <a href="#contact" className="text-muted font-medium border-b border-transparent pb-1 hover:text-foreground hover:border-foreground transition-colors">
        Get in touch
      </a>
      <CVDButton variant="hero" />
    </motion.div>
  </div>

  {/* Scroll hint — subtle, bottom right */}
  <motion.div
    className="absolute bottom-8 right-8 hidden md:block"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2, duration: 0.8 }}
  >
    <span className="text-muted text-sm font-mono rotate-90 block">Scroll</span>
  </motion.div>
</section>
```

**Key anti-AI choices:**
- Name breaks across 3 lines — not a single centered block
- No status badge. No "Available for opportunities." 
- No CTA buttons with backgrounds. Just text links with underline hover.
- "Scroll" hint is rotated text, not a bouncing arrow icon
- Left-aligned everything. No centering.

### 7.2 AboutSection
**File:** `components/sections/AboutSection.tsx`  
**ID:** `about`

**Layout:** Split. Text left (60%), photo right (40%). Photo overlaps section edge slightly.

```tsx
<SectionWrapper id="about">
  <div className="grid md:grid-cols-5 gap-12 items-start">
    {/* Text — 3 columns */}
    <div className="md:col-span-3">
      <SectionTitle 
        title="About" 
        subtitle="I build systems that understand human intent — turning unstructured input into structured intelligence."
      />

      <div className="mt-8 space-y-6">
        <p className="text-muted text-lg leading-relaxed">
          I'm a software engineer specializing in full-stack development integrated with artificial intelligence. 
          My focus is turning raw, unstructured data — like audio recording logs or chaotic inbox threads — 
          into highly structured, searchable, and actionable business intelligence.
        </p>
        <p className="text-muted text-lg leading-relaxed">
          My recent work includes production-grade SaaS systems for automated trade matching and 
          voice-to-knowledge management. I enjoy working at the intersection of frontend engineering, 
          AI integration, and solving real business problems.
        </p>
      </div>

      {/* Stats — horizontal, inline, not a grid */}
      <div className="mt-12 flex gap-8 md:gap-12">
        {[
          { num: "4+", label: "Projects" },
          { num: "8+", label: "Technologies" },
          { num: "2", label: "AI Systems" },
          { num: "1", label: "SaaS Platform" }
        ].map((stat, i) => (
          <div key={i}>
            <span className="text-2xl md:text-3xl font-heading font-bold text-accent-primary">{stat.num}</span>
            <p className="text-muted text-sm font-mono mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Photo — 2 columns, overlaps edge */}
    <div className="md:col-span-2 md:-mr-8">
      <div className="relative">
        <div className="aspect-[3/4] bg-card rounded-lg overflow-hidden">
          <img 
            src="/images/absar-portrait.jpg" 
            alt="Muhammad Absar Siddiqui"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Subtle cyan border on one side */}
        <div className="absolute -bottom-4 -left-4 w-full h-full border border-accent-primary/30 rounded-lg -z-10" />
      </div>
    </div>
  </div>
</SectionWrapper>
```

**Key anti-AI choices:**
- Photo is grayscale, turns to color on hover — reveals personality
- Photo has asymmetric offset border (only bottom-left)
- Stats are horizontal, not a 2×2 grid
- No "student", no "Karachi", no "SMIU"

### 7.3 ExperienceSection
**File:** `components/sections/ExperienceSection.tsx`  
**ID:** `experience`

**Layout:** Horizontal scroll cards. Imperfect rotation. Draggable.

```tsx
'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experienceData } from '@/data/experience';

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <SectionWrapper id="experience">
      <SectionTitle title="Experience" subtitle="Where I've worked and what I've built." />

      <div ref={containerRef} className="mt-12 overflow-hidden">
        <motion.div 
          className="flex gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
        >
          {experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="min-w-[300px] md:min-w-[400px] p-6 md:p-8 bg-card border border-border rounded-lg"
              style={{ rotate: i % 2 === 0 ? -1 : 1 }} // Imperfect rotation
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-accent-primary font-mono text-sm">{exp.date}</span>
              <h3 className="text-xl md:text-2xl font-heading font-bold mt-2">{exp.company}</h3>
              <p className="text-muted mt-1">{exp.role}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-accent-primary mt-1">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="text-muted text-sm font-mono mt-6">← Drag to explore →</p>
    </SectionWrapper>
  );
}
```

**Key anti-AI choices:**
- Cards have slight rotation (-1deg, +1deg) — imperfect, human
- Horizontal scroll tied to vertical scroll progress + drag
- "→" instead of check icons
- No "View Details" button. Just the card.

### 7.4 ProjectsSection
**File:** `components/sections/ProjectsSection.tsx`  
**ID:** `projects`

**Layout:** Featured projects full-bleed. Standard projects in masonry grid.

```tsx
<SectionWrapper id="projects">
  <SectionTitle title="Work" subtitle="Selected projects exploring AI-driven systems and semantic architectures." />

  {/* Featured — full width, edge to edge */}
  <div className="mt-12 space-y-24">
    {featuredProjects.map((project) => (
      <FeaturedProject key={project.id} project={project} />
    ))}
  </div>

  {/* Standard — masonry-like grid */}
  <div className="mt-24">
    <h3 className="text-xl font-heading font-bold mb-8">Other Work</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {standardProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</SectionWrapper>
```

### 7.5 FeaturedProject
**File:** `components/cards/FeaturedProject.tsx`

```tsx
export default function FeaturedProject({ project }: { project: FeaturedProjectType }) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-start ${project.isReversed ? 'md:direction-rtl' : ''}`}>
      {/* Image — full bleed, no border, no rounded */}
      <div className={`${project.isReversed ? 'md:order-2' : ''}`}>
        <div className="relative aspect-video bg-card overflow-hidden">
          <img 
            src={project.imagePath} 
            alt={`${project.title} architecture`}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className={`${project.isReversed ? 'md:order-1 md:text-right' : ''}`}>
        <span className="text-accent-primary font-mono text-sm">{project.tagline}</span>
        <h3 className="text-2xl md:text-4xl font-heading font-bold mt-2">{project.title}</h3>
        <p className="text-muted mt-4 leading-relaxed">{project.description}</p>

        {/* Problem/Solution — minimal, no cards */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs font-mono text-muted uppercase tracking-wider">Problem</h4>
            <p className="text-muted text-sm mt-1">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider">Solution</h4>
            <p className="text-muted text-sm mt-1">{project.solution}</p>
          </div>
        </div>

        {/* Features — inline, not list */}
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-muted text-sm">{feature}</span>
          ))}
        </div>

        {/* Tech — underline style, not pills */}
        <div className="mt-6 flex flex-wrap gap-4">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} name={tech} variant="accent" />
          ))}
        </div>

        {/* Links — minimal */}
        <div className="mt-8 flex gap-6">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-sm border-b border-transparent hover:border-foreground hover:text-foreground transition-colors">
              Source →
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-sm border-b border-transparent hover:border-foreground hover:text-foreground transition-colors">
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
```

**Key anti-AI choices:**
- Image has no border, no rounded corners, no padding. Full bleed.
- Image opacity 80%, goes to 100% on hover
- Problem/Solution are just text columns, not cards
- Features are inline text, not a bulleted list with icons
- Links are "Source →" not buttons with icons
- Tech badges are underlined text, not colored pills

### 7.6 ProjectCard (Standard)
**File:** `components/cards/ProjectCard.tsx`

```tsx
export default function ProjectCard({ project }: { project: StandardProjectType }) {
  return (
    <div className="group p-6 border border-border hover:border-accent-primary/50 transition-colors duration-300">
      <span className="text-accent-primary font-mono text-xs">{project.tagline}</span>
      <h3 className="text-xl font-heading font-bold mt-2 group-hover:text-accent-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted text-sm mt-3 leading-relaxed">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-foreground transition-colors">
            Code →
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-foreground transition-colors">
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}
```

**Key anti-AI choices:**
- No rounded corners. Sharp edges.
- No background color change on hover. Just border color.
- No lift animation. Just border.
- "Code →" not "View on GitHub" with icon

### 7.7 SkillsSection
**File:** `components/sections/SkillsSection.tsx`  
**ID:** `skills`

```tsx
<SectionWrapper id="skills">
  <SectionTitle title="Skills" subtitle="Technologies I work with in production." />

  <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-12">
    {skillsData.map((category) => (
      <div key={category.category}>
        <h3 className="text-sm font-mono text-muted uppercase tracking-wider mb-4">
          {category.category}
        </h3>
        <div className="flex flex-wrap gap-x-4 gap-y-3">
          {category.skills.map((skill) => (
            <span 
              key={skill} 
              className="text-foreground text-base border-b border-border hover:border-accent-primary hover:text-accent-primary transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</SectionWrapper>
```

**Key anti-AI choices:**
- No cards. No backgrounds. Just text with underline hover.
- Category headers are small, mono, uppercase — like a file system
- Skills are inline, wrapped, not in pills or grids
- Hover: underline turns cyan. No lift, no background, no shadow.

### 7.8 CertificatesSection
**File:** `components/sections/CertificatesSection.tsx`  
**ID:** `certificates`

**Layout:** Infinite horizontal marquee. Testimonial-style. Auto-scrolls. Pauses on hover.

```tsx
'use client';
import { motion } from 'framer-motion';
import { certificatesData } from '@/data/certificates';
import { Award, ExternalLink } from 'lucide-react';

export default function CertificatesSection() {
  // Double the array for seamless loop
  const doubled = [...certificatesData, ...certificatesData];

  return (
    <SectionWrapper id="certificates" className="overflow-hidden">
      <SectionTitle title="Certificates" subtitle="Continuous learning, applied in production." />

      <div className="mt-12 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -50 * certificatesData.length + '%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {doubled.map((cert, i) => (
            <div
              key={`${cert.id}-${i}`}
              className="min-w-[320px] md:min-w-[380px] p-6 bg-card border border-border hover:border-accent-secondary/50 rounded-lg transition-colors group"
            >
              <div className="flex items-start justify-between">
                <Award className="w-5 h-5 text-accent-secondary" />
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent-secondary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-heading font-bold mt-4 group-hover:text-accent-secondary transition-colors">
                {cert.title}
              </h3>
              <p className="text-muted text-sm mt-1">{cert.organization}</p>
              <p className="text-muted text-sm font-mono mt-1">{cert.date}</p>

              <p className="text-muted text-sm mt-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="text-xs text-accent-secondary font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
```

**Key anti-AI choices:**
- Infinite marquee — feels alive, not static
- Amber (`accent-secondary`) instead of cyan — differentiates from skills
- Cards have slight 3D tilt on hover (optional: add `whileHover={{ rotateY: 5 }}`)
- Fade edges on left/right — seamless loop illusion
- Pauses on hover — interactive, respectful

### 7.9 ContactSection
**File:** `components/sections/ContactSection.tsx`  
**ID:** `contact`

```tsx
<SectionWrapper id="contact">
  <div className="max-w-2xl">
    <SectionTitle 
      title="Let's build something" 
      subtitle="Open to opportunities in AI, full-stack engineering, and product development."
    />

    <div className="mt-12 space-y-4">
      <a 
        href="mailto:absar.sid359@gmail.com" 
        className="block text-2xl md:text-4xl font-heading font-bold hover:text-accent-primary transition-colors"
      >
        absar.sid359@gmail.com
      </a>

      <div className="flex gap-8 mt-8">
        <a 
          href="https://github.com/MuhammadAbsarSiddiqui" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted text-lg hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/muhammad-absar-siddiqui" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted text-lg hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <div className="mt-12">
        <CVDButton />
      </div>
    </div>
  </div>
</SectionWrapper>
```

**Key anti-AI choices:**
- No cards. No icons. Just large text links.
- Email is massive — `text-4xl` — impossible to miss
- No form. No "Send Message" button. Just direct contact.
- Socials are text, not icon buttons
- Minimal. Brutalist. Confident.

---

## 8. ANIMATION SPECIFICATIONS

### 8.1 Global Easing
Use this custom ease everywhere (not default Framer Motion ease):
```typescript
const customEase = [0.25, 0.1, 0.25, 1]; // Cubic bezier: smooth, premium feel
```

### 8.2 Hero Entrance
| Element | Delay | Duration | Transform |
|---------|-------|----------|-----------|
| Name | 0s | 0.8s | y: 60 → 0 |
| Tagline | 0.2s | 0.8s | y: 40 → 0 |
| Description | 0.3s | 0.8s | y: 40 → 0 |
| Links | 0.4s | 0.8s | y: 40 → 0 |
| Scroll hint | 1.2s | 0.8s | opacity: 0 → 1 |

### 8.3 Section Scroll Reveals
- All sections: `opacity: 0, y: 40` → `opacity: 1, y: 0`
- Duration: 0.7s
- Ease: customEase
- Trigger: `useInView`, once, margin: "-100px"
- Stagger children: 0.1s

### 8.4 Hover Effects (Restrained)
| Element | Hover Effect | Duration |
|---------|-------------|----------|
| Text links | Underline draws from left | 0.3s |
| Project cards | Border color shift only | 0.3s |
| Certificate cards | Border + text color to amber | 0.3s |
| Photo | Grayscale → color | 0.7s |
| Tech badges | Underline turns cyan | 0.3s |
| Nav links | Cyan color + underline | 0.3s |

**NO:** scale transforms, lift shadows, glow effects on hover (except photo).

### 8.5 Background Animations
| Element | Behavior |
|---------|----------|
| Grain overlay | Static, no animation |
| Floating orb | Drifts 20s cycle, slow, meditative |
| Certificate marquee | 30s linear loop, pauses on hover |
| Experience scroll | Tied to vertical scroll + drag |

---

## 9. FILE STRUCTURE

```
pw/
├── app/
│   ├── layout.tsx              # Fonts, metadata, ThemeProvider, Navbar, Footer
│   ├── page.tsx                # All sections composed
│   └── globals.css             # Tailwind imports, CSS variables, grain, reduced-motion
│
├── components/
│   ├── global/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionWrapper.tsx
│   │   ├── SectionTitle.tsx
│   │   ├── TechBadge.tsx
│   │   ├── CVDButton.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── GrainOverlay.tsx
│   │   └── AmbientOrb.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── cards/
│       ├── FeaturedProject.tsx
│       ├── ProjectCard.tsx
│       └── StatsCard.tsx
│
├── data/
│   ├── social.ts
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── certificates.ts
│
├── lib/
│   └── utils.ts               # cn() helper
│
├── public/
│   ├── cv.pdf                  # Placeholder (replace with real)
│   ├── favicon.svg             # "AS" monogram
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   ├── apple-touch-icon.png
│   └── images/
│       ├── absar-portrait.jpg  # Your photo (grayscale by default)
│       ├── og-image.png        # 1200×630 social share
│       ├── intellitrade-architecture.png  # Placeholder
│       └── tacitvault-architecture.png    # Placeholder
│
├── tailwind.config.ts
├── next.config.js              # output: 'export', images: { unoptimized: true }
└── package.json
```

---

## 10. CRITICAL RULES FOR THE AGENT

1. **NEVER center-align text.** Left-align everything. Centering is the #1 template giveaway.
2. **NEVER use pill-shaped badges.** Underlined text only.
3. **NEVER add background colors on hover.** Border color or text color only.
4. **NEVER use more than one floating orb.** Restraint = premium.
5. **NEVER write "student", "final-year", "SMIU", or "Karachi" in copy.**
6. **NEVER add social icons in footer.** Just copyright.
7. **NEVER use generic CTA buttons with backgrounds.** Text links with underline hover.
8. **NEVER add a "Available for opportunities" badge.** It's a template trope.
9. **ALWAYS use the custom ease** `[0.25, 0.1, 0.25, 1]` for animations.
10. **ALWAYS respect `prefers-reduced-motion`.** Disable all animations if user prefers.
11. **Mobile-first:** Default styles are mobile. Use `md:` for desktop.
12. **Static export only:** `output: 'export'`, `images: { unoptimized: true }`.
13. **External links:** `target="_blank" rel="noopener noreferrer"`.
14. **Email link:** `mailto:absar.sid359@gmail.com`.
15. **CV placeholder:** Create empty `public/cv.pdf`. Add TODO comment.

---

## 11. VERIFICATION CHECKLIST

### Build
- [ ] `npm run build` succeeds with zero errors
- [ ] Static export generates `out/` folder with all assets
- [ ] No TypeScript errors
- [ ] No ESLint warnings

### Functionality
- [ ] Theme toggle switches dark ↔ light, persists in localStorage
- [ ] Mobile menu opens/closes, locks body scroll
- [ ] Smooth scroll to sections from nav
- [ ] Certificate marquee auto-scrolls, pauses on hover
- [ ] Experience cards are draggable on desktop
- [ ] CV download button works (even if placeholder)
- [ ] All external links open in new tab
- [ ] Mailto link opens email client

### Responsive
- [ ] 320px: No horizontal scroll, readable text, stacked layouts
- [ ] 768px: 2-column grids activate, nav shows links
- [ ] 1024px+: Full typography scale, asymmetric offsets visible

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Images optimized (or placeholders noted)
- [ ] Fonts load with `display: swap`
- [ ] No layout shift on load

### Accessibility
- [ ] `prefers-reduced-motion` disables animations
- [ ] Focus visible on all interactive elements
- [ ] Semantic HTML (nav, main, section, footer)
- [ ] Alt text on all images
- [ ] aria-label on icon-only buttons

---

## 12. ASSETS NEEDED

| Asset | File | Status | Notes |
|-------|------|--------|-------|
| CV PDF | `public/cv.pdf` | Placeholder | Replace with real PDF |
| Portrait Photo | `public/images/absar-portrait.jpg` | **REAL** | Grayscale by default, color on hover |
| OG Image | `public/images/og-image.png` | Generate | 1200×630, dark bg, name + tagline |
| IntelliTrade Diagram | `public/images/intellitrade-architecture.png` | Placeholder | Replace with real screenshot |
| TacitVault Diagram | `public/images/tacitvault-architecture.png` | Placeholder | Replace with real screenshot |
| Favicon | `public/favicon.svg` | Generate | "AS" monogram, 32×32 |
| Logo Dark | `public/logo-dark.svg` | Generate | "AS" in Space Grotesk bold, cyan |
| Logo Light | `public/logo-light.svg` | Generate | Same, adjusted for light bg |
| Apple Touch | `public/apple-touch-icon.png` | Generate | 180×180, "AS" on dark bg |

---

## SUMMARY: ANTI-AI DESIGN PRINCIPLES

| Template Cliché | Our Replacement |
|-----------------|-----------------|
| Centered hero | Left-aligned, line-broken |
| Status badge | Nothing. Just the name. |
| Pill buttons | Text links with underline |
| Card hover = lift + shadow | Border color shift only |
| 2×2 stat grid | Horizontal inline stats |
| Vertical timeline | Horizontal draggable cards |
| Check icons | "→" arrows |
| Colored tech pills | Underlined text |
| Social icons in footer | Copyright only |
| Contact cards | Large text links |
| Multiple floating particles | One orb + grain |
| Symmetric everything | Asymmetric offsets, imperfect rotations |
| "Passionate about..." | "I turn noise into signal." |

This portfolio should feel like it was designed by a human who cares about restraint, typography, and intentional imperfection.
