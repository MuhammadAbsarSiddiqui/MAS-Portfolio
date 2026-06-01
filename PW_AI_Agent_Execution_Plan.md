# PW — AI Agent Execution Plan
## Portfolio Website for Muhammad Absar Siddiqui

**Agent Objective:** Build a complete, production-ready static portfolio website using Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Deploy to Vercel.

**Owner:** Muhammad Absar Siddiqui  
**Role:** Software Engineer  
**Location:** Karachi, Pakistan  
**GitHub:** https://github.com/MuhammadAbsarSiddiqui  
**LinkedIn:** https://www.linkedin.com/in/muhammad-absar-siddiqui  
**Email:** absar.sid359@gmail.com  

**Constraints:**
- Static export only (`output: 'export'`). No backend. No database.
- Default theme: Dark mode.
- All animations must respect `prefers-reduced-motion`.
- Mobile-first responsive (320px+).
- Lighthouse Performance target: 90+.

---

## Phase 0: Environment Initialization

### Step 0.1 — Scaffold Project
Execute in terminal:
```bash
npx create-next-app@latest pw --typescript --tailwind --eslint --app --src-dir --no-import-alias
cd pw
npx shadcn-ui@latest init --yes --template next --base-color slate
npm install framer-motion lucide-react clsx tailwind-merge
```

### Step 0.2 — Configure Fonts
Edit `app/layout.tsx`:
```tsx
import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/global/ThemeProvider'
import { Navbar } from '@/components/global/Navbar'
import { Footer } from '@/components/global/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Muhammad Absar Siddiqui | Software Engineer',
  description: 'Software Engineer building AI-powered applications. Final year student at SMIU, Karachi.',
  openGraph: {
    title: 'Muhammad Absar Siddiqui | Software Engineer',
    description: 'Building AI systems that turn unstructured input into structured intelligence.',
    images: ['/images/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Step 0.3 — Configure Tailwind
Edit `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        card: 'var(--card)',
        'card-hover': 'var(--card-hover)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-glow': 'var(--accent-glow)',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
```

### Step 0.4 — Global CSS
Edit `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #0a0a0f;
    --foreground: #fafafa;
    --muted: #6b7280;
    --border: #1f1f2e;
    --card: #111118;
    --card-hover: #161622;
    --accent-primary: #06b6d4;
    --accent-secondary: #f59e0b;
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
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Step 0.5 — Utility File
Create `lib/utils.ts`:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 0.6 — Static Export Config
Edit `next.config.js` (or `next.config.ts`):
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

---

## Phase 1: Data Layer (Create First)

All data must be centralized. No hardcoded strings in components.

### File: `data/social.ts`
```typescript
export const socialLinks = {
  email: "absar.sid359@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-absar-siddiqui",
  github: "https://github.com/MuhammadAbsarSiddiqui",
  location: "Karachi, Pakistan"
};
```

### File: `data/projects.ts`
```typescript
export const featuredProjects = [
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

export const standardProjects = [
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
```

### File: `data/skills.ts`
```typescript
export const skillsData = [
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
```

---

## Phase 2: Global Components

### Component 1: ThemeProvider
**File:** `components/global/ThemeProvider.tsx`
**Behavior:** Provides dark/light context. Persists to localStorage. Default: dark.

### Component 2: ThemeToggle
**File:** `components/global/ThemeToggle.tsx`
**Behavior:** Sun/Moon icon swap. Calls theme context. No props.

### Component 3: CVDButton
**File:** `components/global/CVDButton.tsx`
**Props:** `variant?: 'default' | 'hero' | 'navbar'`
**Behavior:** Renders `<a href="/cv.pdf" download>`. If CV file does not exist yet, create a placeholder empty file at `public/cv.pdf` and add a TODO comment. Use `Download` icon from Lucide.

### Component 4: TechBadge
**File:** `components/global/TechBadge.tsx`
**Props:** `{ name: string; variant?: 'default' | 'accent' }`
**Behavior:** Pill badge. Mono font. Accent variant uses cyan.

### Component 5: SectionWrapper
**File:** `components/global/SectionWrapper.tsx`
**Props:** `{ id: string; children: React.ReactNode; className?: string }`
**Behavior:** `<section id={id} className="py-16 md:py-24 px-4 md:px-8">` with inner `max-w-6xl mx-auto`.

### Component 6: SectionTitle
**File:** `components/global/SectionTitle.tsx`
**Props:** `{ title: string; subtitle?: string }`
**Behavior:** Heading with cyan dot after title, optional subtitle, accent underline.

### Component 7: ScrollReveal
**File:** `components/global/ScrollReveal.tsx`
**Props:** `{ children: React.ReactNode; direction?: 'up' | 'down' | 'left' | 'right'; delay?: number; duration?: number; className?: string }`
**Behavior:** Framer Motion `useInView`. Trigger once. Translate 30px in direction.

### Component 8: MobileMenu
**File:** `components/global/MobileMenu.tsx`
**Props:** `{ isOpen: boolean; onClose: () => void }`
**Behavior:** Full-screen overlay. Close on link click, X icon, or outside tap. Contains vertical nav links, CV button, theme toggle. Lock body scroll when open.

### Component 9: Navbar
**File:** `components/global/Navbar.tsx`
**Behavior:** Fixed top, z-50. Transparent → `bg-background/80 backdrop-blur-md` + border on scroll (100px threshold). Contains:
- Left: Logo "AS" (Space Grotesk bold, cyan, links to `#hero`)
- Center-Right: Nav links (About, Projects, Skills, Contact) — smooth scroll, active state via Intersection Observer
- Right: ThemeToggle + CVDButton
- Far right (mobile): Hamburger icon → opens MobileMenu

### Component 10: Footer
**File:** `components/global/Footer.tsx`
**Behavior:** Border top. Responsive: desktop = row (copyright left, socials right), mobile = column centered.
Social icons: GitHub, LinkedIn, Mail. Link to real URLs from `data/social.ts`. Icons 20px desktop, 24px mobile. Gap 16px desktop, 24px mobile.

---

## Phase 3: Card Components

### Component 11: StatsCard
**File:** `components/cards/StatsCard.tsx`
**Props:** `{ number: string; label: string }`
**Behavior:** Centered. Cyan number. Muted label. Hover border accent.

### Component 12: ContactCard
**File:** `components/cards/ContactCard.tsx`
**Props:** `{ icon: React.ElementType; title: string; value: string; href: string }`
**Behavior:** Full card is `<a>`. Icon scales on hover. Min 48px tap target.

### Component 13: FeaturedProject
**File:** `components/cards/FeaturedProject.tsx`
**Props:** Project data object (same shape as in `data/projects.ts`)
**Behavior:**
- 2-column grid desktop. Image + text.
- `isReversed` swaps column order.
- Mobile: single column, image stacked above text.
- Contains: tagline chip, title, description, Problem/Solution cards (stacked mobile), feature list with Check icons, tech badges, Live Demo + Source Code links.
- Problem card: default border. Solution card: accent border.
- External links use `target="_blank" rel="noopener noreferrer"`.

### Component 14: ProjectCard
**File:** `components/cards/ProjectCard.tsx`
**Props:** Standard project data object.
**Behavior:** Card with hover `-translate-y-1` and border accent. Tagline, title, description, tech badges, GitHub/Demo links.

---

## Phase 4: Section Components

### Section 1: HeroSection
**File:** `components/sections/HeroSection.tsx`
**ID:** `hero`
**Content:**
1. Status badge: "Available for opportunities" with pulsing cyan dot.
2. Name: "Muhammad Absar Siddiqui" — stacks naturally on mobile.
3. Tagline: "I build AI-powered applications that turn unstructured human input into structured intelligence."
4. CTA group: "See My Work" (primary, links `#projects`) + "Get In Touch" (secondary, links `#contact`).
5. CV Download button (tertiary).
6. Scroll indicator: `ChevronDown`, animated bounce, **hidden on mobile** (`hidden md:block`).
**Animation:** Staggered fade-in/up: badge (0.2s) → name (0.4s) → tagline (0.6s) → buttons (0.8s) → scroll (1.2s).

### Section 2: AboutSection
**File:** `components/sections/AboutSection.tsx`
**ID:** `about`
**Content:**
- SectionTitle: "About Me" + subtitle about final-year SE student.
- 2-column desktop: Bio text left, Stats grid right. Mobile: stacked.
- Bio: 2 paragraphs. Mention Karachi, SMIU, focus on full-stack + AI.
- Stats grid (2×2): 4+ Projects, 8+ Technologies, 2 AI Systems, 1 FYP.

### Section 3: ProjectsSection
**File:** `components/sections/ProjectsSection.tsx`
**ID:** `projects`
**Content:**
- SectionTitle: "Projects" + subtitle.
- FeaturedProject: IntelliTrade (image right).
- FeaturedProject: TacitVault AI (image left).
- Grid: 2 ProjectCards (Task Management System, News App). Mobile: 1 column.

### Section 4: SkillsSection
**File:** `components/sections/SkillsSection.tsx`
**ID:** `skills`
**Content:**
- SectionTitle: "Skills" + subtitle.
- 3-column grid desktop: Frontend, Backend & AI, Database & Tools. Mobile: 1 column.
- Each card: category name with dot, accent tech badges.

### Section 5: ContactSection
**File:** `components/sections/ContactSection.tsx`
**ID:** `contact`
**Content:**
- SectionTitle: "Get In Touch" + subtitle.
- Centered text: open to opportunities.
- 3 ContactCards: Email (mailto), LinkedIn (external), GitHub (external).
- CV button below cards.
- Location: MapPin icon + "Karachi, Pakistan".

### Page Assembly
**File:** `app/page.tsx`
```tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
```

---

## Phase 5: Assets & Images

### 5.1 Logo & Favicon (AI Generated)
The agent must create the following SVG assets programmatically or via code-generated SVGs:

**Logo:** `public/logo-dark.svg` and `public/logo-light.svg`
- Design: "AS" monogram in Space Grotesk Bold.
- Dark logo: Cyan (`#06b6d4`) text on transparent bg.
- Light logo: Cyan (`#0891b2`) text on transparent bg.
- Size: viewBox="0 0 100 100", text centered.

**Favicon:** `public/favicon.svg`
- Same "AS" monogram, 32×32 viewBox.
- Include `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` in layout metadata.

**Apple Touch Icon:** `public/apple-touch-icon.png`
- 180×180px. "AS" on dark background. Generate via canvas/SVG export if possible, otherwise create placeholder and note.

**OG Image:** `public/images/og-image.png`
- 1200×630px. Dark background (`#0a0a0f`).
- Text: "Muhammad Absar Siddiqui" in Space Grotesk + "Software Engineer" subtitle in Inter.
- Cyan accent line or dot.

### 5.2 Architecture Diagrams (Placeholders)
Create placeholder files:
- `public/images/intellitrade-architecture.png`
- `public/images/tacitvault-architecture.png`
- If actual diagrams unavailable, generate simple SVG placeholders with project name + "Architecture Diagram" text. Replace later.

### 5.3 CV Placeholder
- Create empty file `public/cv.pdf`.
- Add visible TODO comment in CVDButton component: "Replace with actual CV PDF".

---

## Phase 6: Animation & Interaction Polish

### Required Animations
| Animation | Implementation |
|-----------|----------------|
| Scroll Reveal | All sections wrapped in `ScrollReveal`. Default: fade up 30px, 0.5s, trigger once. |
| Hero Stagger | Framer Motion `staggerChildren: 0.2` on container. |
| Navbar Scroll | `useEffect` scroll listener. Toggle class at `window.scrollY > 100`. Transition 300ms. |
| Mobile Menu | AnimatePresence fade + slide. Lock body overflow. |
| Card Hover | `whileHover={{ y: -4 }}` on ProjectCard. CSS transition on border color. |
| Button Hover | `hover:bg-accent-primary/90`, `hover:scale-[1.02]`. |
| Active Nav | Intersection Observer on sections. Set active ID. Cyan text + underline. |

### Accessibility Requirements
- Focus visible rings on all buttons/links (`focus:outline-none focus:ring-2 focus:ring-accent-primary`).
- `prefers-reduced-motion` disables all Framer Motion animations (handled in globals.css).
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`.
- Alt text on all images.
- aria-label on icon-only buttons (ThemeToggle, Social links).

---

## Phase 7: Responsive Checklist

| Breakpoint | Key Changes |
|------------|-------------|
| **< 768px (Mobile)** | Single column everywhere. Hamburger menu. Full-width buttons stacked. Scroll indicator hidden. Problem/Solution cards stacked. Touch targets ≥ 44px. |
| **768px+ (Tablet)** | 2-column grids activate. Navbar shows links. |
| **1024px+ (Desktop)** | Full typography scale. Max-width container. Hover effects active. |

### Mobile Menu Spec
- Full screen overlay: `fixed inset-0 z-[60] bg-background`.
- Close button top-right.
- Nav links: `text-2xl font-heading`, vertical stack, gap-8.
- CV button: prominent, full width, cyan bg.
- Theme toggle: centered below links.
- Close triggers: X button, link click, Escape key, click outside.

---

## Phase 8: Build & Deploy

### Step 8.1 — Build
```bash
npm run build
```
Verify `out/` folder contains:
- `index.html`
- `_next/static/...`
- `images/...`
- `cv.pdf`
- `favicon.svg`, `logo-dark.svg`, `logo-light.svg`

### Step 8.2 — Vercel Deploy
```bash
npm i -g vercel
vercel --prod
```
Or connect GitHub repo to Vercel dashboard. Ensure framework preset is Next.js.

### Step 8.3 — Post-Deploy Verification
- [ ] Theme toggle works and persists.
- [ ] All nav links smooth scroll.
- [ ] Active nav state updates on scroll.
- [ ] Mobile menu opens/closes correctly.
- [ ] CV button attempts download (even if placeholder).
- [ ] GitHub & LinkedIn open in new tab with correct URLs.
- [ ] Mailto opens email client.
- [ ] No console errors.
- [ ] Lighthouse score ≥ 90.

---

## File Structure (Final)

```
pw/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
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
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── cards/
│       ├── FeaturedProject.tsx
│       ├── ProjectCard.tsx
│       ├── StatsCard.tsx
│       └── ContactCard.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── social.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── cv.pdf (placeholder)
│   ├── favicon.svg
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   ├── apple-touch-icon.png
│   └── images/
│       ├── og-image.png
│       ├── intellitrade-architecture.png
│       └── tacitvault-architecture.png
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## Critical Rules for the Agent

1. **Never hardcode data** — always import from `data/` files.
2. **Never use `any` type** — define interfaces for all props.
3. **Mobile-first** — default styles are mobile; use `md:` and `lg:` for larger screens.
4. **Dark mode default** — the site must look correct without JavaScript (dark colors as default in CSS).
5. **Static only** — no API routes, no server components that fetch data. Use `'use client'` only where needed (Framer Motion, theme, scroll listeners).
6. **Images** — use standard `<img>` or Next.js `Image` with `unoptimized` since it's static export.
7. **External links** — must have `target="_blank" rel="noopener noreferrer"`.
8. **Email link** — use `mailto:absar.sid359@gmail.com`.
9. **CV placeholder** — if PDF missing, button still renders but may download empty file. Flag clearly.
10. **Test every component** — verify it renders without errors before moving to next.

---

## User-Provided Data Summary

| Field | Value |
|-------|-------|
| Name | Muhammad Absar Siddiqui |
| Role | Software Engineer |
| University | SMIU (Final Year) |
| Location | Karachi, Pakistan |
| Email | absar.sid359@gmail.com |
| GitHub | https://github.com/MuhammadAbsarSiddiqui |
| LinkedIn | https://www.linkedin.com/in/muhammad-absar-siddiqui |
| Projects | IntelliTrade, TacitVault AI, Task Management System, News App |

**Pending from user (do not block build):**
- Actual CV PDF (`public/cv.pdf`) — use placeholder.
- Architecture diagram images — use SVG placeholders.
