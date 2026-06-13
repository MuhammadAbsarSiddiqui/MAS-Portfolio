# PW — FINAL EXECUTION PLAN v2.0
## Muhammad Absar Siddiqui Portfolio
### High-Animation | Anti-Template | Component-Based Architecture

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Animation Strategy](#3-animation-strategy)
4. [Background Effects System](#4-background-effects-system)
5. [Component Architecture](#5-component-architecture)
6. [Global Components Specification](#6-global-components-specification)
7. [Section Components Specification](#7-section-components-specification)
8. [Card Components Specification](#8-card-components-specification)
9. [Animation Components Specification](#9-animation-components-specification)
10. [Data Layer](#10-data-layer)
11. [File Structure](#11-file-structure)
12. [Implementation Order](#12-implementation-order)
13. [Critical Rules](#13-critical-rules)
14. [Verification Checklist](#14-verification-checklist)

---

## 1. PROJECT OVERVIEW

**Owner:** Muhammad Absar Siddiqui  
**Role:** Software Engineer  
**Identity:** "I turn noise into signal."  
**Design Philosophy:** Dark-first, asymmetric, typography-driven, animation-rich but purposeful  
**Anti-Template Principles:** Left-aligned everything, no centering, no pill badges, no generic CTA buttons, no "Available for opportunities" badge, no social icons in footer  

**Sections (in order):**
```
1. Hero — Massive typography, staggered entrance, floating orb behind
2. About — Split layout, photo with grayscale→color, horizontal stats
3. Experience — Vertical timeline with draw-in animation
4. Projects — Full-bleed featured, masonry grid for others
5. Skills — Inline text tags, no cards
6. Certificates — 2×2 grid, amber accent, staggered reveal
7. Contact — Massive email text, minimal
8. Footer — Copyright only
```

---

## 2. TECH STACK & DEPENDENCIES

### Core Framework
| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| Framework | Next.js | 14+ (App Router) | Static export, SSG |
| Language | TypeScript | 5+ | Type safety |
| Styling | Tailwind CSS | 3.4+ | Utility-first CSS |
| UI Base | shadcn/ui | Latest | Accessible primitives |

### Animation Libraries (CRITICAL — All Must Be Installed)
| Library | Version | Purpose | Installation |
|---------|---------|---------|-------------|
| **Framer Motion** | 11+ | React animations, scroll triggers, gestures, layout animations | `npm install framer-motion` |
| **GSAP + ScrollTrigger** | 3.12+ | Complex timeline animations, scroll-scrubbed effects, draw-in lines | `npm install gsap @gsap/react` |
| **Lenis** | 1.1+ | Smooth scroll with inertia (critical for premium feel) | `npm install lenis` |

### Why Three Animation Libraries?

| Library | Best For | Used In |
|---------|----------|---------|
| **Framer Motion** | React component animations, hover states, AnimatePresence, layout animations, useInView | Hero entrance, card reveals, hover effects, mobile menu |
| **GSAP + ScrollTrigger** | Timeline sequences, scroll-scrubbed animations, SVG path drawing, complex choreography | Experience timeline draw-in, project image parallax, text stagger sequences |
| **Lenis** | Smooth scroll interpolation | Global smooth scroll, scroll velocity effects |

### Supporting Libraries
| Library | Version | Purpose | Installation |
|---------|---------|---------|-------------|
| **Lucide React** | Latest | Icons (minimal usage) | `npm install lucide-react` |
| **clsx** | 2+ | Conditional class names | `npm install clsx` |
| **tailwind-merge** | 2+ | Merge Tailwind classes | `npm install tailwind-merge` |

### Fonts (Google Fonts via next/font)
| Font | Weights | Usage |
|------|---------|-------|
| **Space Grotesk** | 400, 500, 700 | Headings, hero name, section titles |
| **Inter** | 300, 400, 500 | Body text, descriptions |
| **JetBrains Mono** | 400 | Dates, tech tags, labels |

### Complete Installation Commands

```bash
# Step 1: Initialize project (if not already done)
npx create-next-app@latest pw --typescript --tailwind --eslint --app --src-dir --no-import-alias

# Step 2: Install shadcn/ui
npx shadcn-ui@latest init --yes --template next --base-color slate

# Step 3: Install animation libraries (ALL THREE ARE REQUIRED)
npm install framer-motion gsap @gsap/react lenis

# Step 4: Install supporting libraries
npm install lucide-react clsx tailwind-merge

# Step 5: Verify installations
npm list framer-motion gsap @gsap/react lenis lucide-react clsx tailwind-merge
```

### GSAP Plugin Registration (CRITICAL)
In any file using GSAP ScrollTrigger, you MUST register it:
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
```

### Lenis Setup (Global Smooth Scroll)
Create `components/global/SmoothScroll.tsx`:
```typescript
'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

Wrap the app in `layout.tsx`:
```typescript
<SmoothScroll>
  <Navbar />
  <main>{children}</main>
  <Footer />
</SmoothScroll>
```

---

## 3. ANIMATION STRATEGY

### Animation Philosophy
Every animation must serve a purpose:
- **Entrance animations** = guide the eye, create hierarchy
- **Scroll animations** = reward exploration
- **Hover animations** = confirm interactivity
- **Background animations** = create atmosphere without distraction

### Global Animation Tokens
```typescript
// lib/animation.ts
export const EASE = {
  smooth: [0.25, 0.1, 0.25, 1],           // Primary ease — cubic-bezier
  bounce: [0.68, -0.55, 0.265, 1.55],    // Playful bounce
  power: [0.76, 0, 0.24, 1],              // Dramatic power
};

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.8,
  dramatic: 1.2,
};

export const STAGGER = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};
```

### Animation Patterns by Section

| Section | Primary Animation | Library | Trigger |
|---------|------------------|---------|---------|
| **Hero** | Staggered text reveal + orb drift | Framer Motion | On mount |
| **About** | Photo reveal + stats count-up | Framer Motion + GSAP | Scroll into view |
| **Experience** | Timeline line draw-in + card slide | GSAP ScrollTrigger | Scroll progress |
| **Projects** | Image parallax + text reveal | GSAP ScrollTrigger | Scroll into view |
| **Skills** | Tag stagger reveal | Framer Motion | Scroll into view |
| **Certificates** | Card stagger + hover tilt | Framer Motion | Scroll into view |
| **Contact** | Text reveal + underline draw | Framer Motion | Scroll into view |
| **Global** | Smooth scroll + grain | Lenis + CSS | Always |

---

## 4. BACKGROUND EFFECTS SYSTEM

### 4.1 Film Grain Overlay
**Component:** `components/global/GrainOverlay.tsx`  
**Technology:** CSS SVG data URI  
**Behavior:** Static overlay, 3% opacity, fixed position, pointer-events-none  
**Purpose:** Breaks digital perfection, adds texture

### 4.2 Floating Gradient Orb
**Component:** `components/global/FloatingOrb.tsx`  
**Technology:** Framer Motion `animate` prop  
**Behavior:** Single cyan orb, 400px diameter, blur-100px, 20% opacity, drifts in 20s loop  
**Purpose:** Ambient depth without distraction  
**Rules:** ONLY ONE ORB. Never more.

### 4.3 Subtle Grid Lines (Optional Enhancement)
**Component:** `components/global/GridLines.tsx`  
**Technology:** CSS linear-gradient  
**Behavior:** Faint vertical lines at 5% opacity, fade at edges  
**Purpose:** Engineering/blueprint aesthetic  

---

## 5. COMPONENT ARCHITECTURE

### Component Categories
```
components/
├── global/           # App-wide components
├── animation/        # Reusable animation primitives
├── sections/         # Page sections
├── cards/            # Reusable card layouts
└── hooks/            # Custom React hooks
```

### Component Inventory (22 Total)

| Category | Component | File | Type |
|----------|-----------|------|------|
| **Global** | Navbar | `global/Navbar.tsx` | Client |
| **Global** | MobileMenu | `global/MobileMenu.tsx` | Client |
| **Global** | Footer | `global/Footer.tsx` | Server |
| **Global** | ThemeProvider | `global/ThemeProvider.tsx` | Client |
| **Global** | ThemeToggle | `global/ThemeToggle.tsx` | Client |
| **Global** | SmoothScroll | `global/SmoothScroll.tsx` | Client |
| **Global** | GrainOverlay | `global/GrainOverlay.tsx` | Client |
| **Global** | FloatingOrb | `global/FloatingOrb.tsx` | Client |
| **Animation** | ScrollReveal | `animation/ScrollReveal.tsx` | Client |
| **Animation** | StaggerText | `animation/StaggerText.tsx` | Client |
| **Animation** | DrawLine | `animation/DrawLine.tsx` | Client |
| **Animation** | ParallaxImage | `animation/ParallaxImage.tsx` | Client |
| **Animation** | CountUp | `animation/CountUp.tsx` | Client |
| **Sections** | HeroSection | `sections/HeroSection.tsx` | Client |
| **Sections** | AboutSection | `sections/AboutSection.tsx` | Client |
| **Sections** | ExperienceSection | `sections/ExperienceSection.tsx` | Client |
| **Sections** | ProjectsSection | `sections/ProjectsSection.tsx` | Client |
| **Sections** | SkillsSection | `sections/SkillsSection.tsx` | Client |
| **Sections** | CertificatesSection | `sections/CertificatesSection.tsx` | Client |
| **Sections** | ContactSection | `sections/ContactSection.tsx` | Client |
| **Cards** | ProjectCard | `cards/ProjectCard.tsx` | Client |
| **Cards** | CertificateCard | `cards/CertificateCard.tsx` | Client |

---

## 6. GLOBAL COMPONENTS SPECIFICATION

### 6.1 SmoothScroll
**Purpose:** Global smooth scroll with inertia via Lenis  
**Library:** Lenis  
**Implementation:** See Section 2 installation  
**Props:** `{ children: React.ReactNode }`

### 6.2 GrainOverlay
**Purpose:** Film grain texture overlay  
**Library:** CSS only  
**Implementation:** SVG noise filter as data URI, fixed position, `opacity-[0.03]`, `pointer-events-none`, `z-[100]`

### 6.3 FloatingOrb
**Purpose:** Single ambient gradient orb  
**Library:** Framer Motion  
**Animation:** `animate={{ x: [0, 50, -20, 30, 0], y: [0, -30, 40, 20, 0] }}` with `transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}`  
**Style:** `w-[400px] h-[400px] rounded-full blur-[100px] opacity-20`, cyan radial gradient

### 6.4 ThemeProvider
**Purpose:** Dark/light mode context  
**Library:** React Context + localStorage  
**Default:** Dark mode  
**Persistence:** localStorage key `theme`  
**Hydration:** `suppressHydrationWarning` on html element

### 6.5 ThemeToggle
**Purpose:** Toggle between dark/light  
**Library:** Framer Motion (icon swap animation)  
**Icons:** Sun (dark mode), Moon (light mode) from Lucide  
**Animation:** `AnimatePresence` with rotate/fade

### 6.6 Navbar
**Purpose:** Fixed navigation  
**Behavior:**
- Always transparent, no background, no blur, no border
- Left: "AS." in cyan, Space Grotesk bold
- Right: "About", "Work", "Contact" text links + ThemeToggle icon
- Mobile: Hamburger → full-screen overlay with large text links
- Active state: Cyan text + underline

**Mobile Menu Animation:**
- Framer Motion `AnimatePresence`
- Overlay fades in (`opacity: 0 → 1`, `duration: 0.3`)
- Links stagger in (`y: 20 → 0`, `staggerChildren: 0.1`)
- Close: reverse animation

### 6.7 Footer
**Purpose:** Minimal copyright  
**Content:** `© 2026 Muhammad Absar Siddiqui`  
**Style:** Centered, `text-gray-600 text-sm`, `py-8`  
**No social icons. No links.**

---

## 7. SECTION COMPONENTS SPECIFICATION

### 7.1 HeroSection
**ID:** `hero`  
**Library:** Framer Motion  
**Animation:** Staggered entrance sequence

**Entrance Sequence (Timeline):**
| Element | Delay | Duration | Animation |
|---------|-------|----------|-----------|
| Name line 1 ("Muhammad") | 0s | 0.8s | `opacity: 0→1, y: 60→0` |
| Name line 2 ("Absar") | 0.1s | 0.8s | `opacity: 0→1, y: 60→0` |
| Name line 3 ("Siddiqui.") | 0.2s | 0.8s | `opacity: 0→1, y: 60→0` |
| Tagline | 0.4s | 0.8s | `opacity: 0→1, y: 30→0` |
| Description | 0.5s | 0.8s | `opacity: 0→1, y: 30→0` |
| Links | 0.6s | 0.8s | `opacity: 0→1, y: 30→0` |

**Typography:**
- Name: `text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.85]`
- Tagline: `text-xl md:text-2xl text-gray-400`
- Description: `text-base md:text-lg text-gray-500 max-w-xl`

**Layout:** Left-aligned, asymmetric padding (`px-6 md:px-12 lg:px-24`), `min-h-screen`, `pt-20`

**Links:** Text-only with underline hover. No pill buttons.
- "See my work" → `#projects`
- "Get in touch" → `#contact`
- "Download CV" → `/cv.pdf` download

### 7.2 AboutSection
**ID:** `about`  
**Libraries:** Framer Motion (scroll reveal) + GSAP (optional count-up)

**Layout:** `grid md:grid-cols-5 gap-12`
- Text: `md:col-span-3`
- Photo: `md:col-span-2` with offset border

**Scroll Animation:**
- Section title: Fade up on scroll into view
- Paragraphs: Staggered fade up (`delay: 0.1` between each)
- Stats: Count-up animation from 0 to final number (`duration: 1.5s`, `ease: "power2.out"`)
- Photo: Fade up with slight delay

**Photo:**
- Path: `/images/absar-portrait.jpg`
- Default: `grayscale` filter
- Hover: `grayscale-0` transition `duration-700`
- Fallback: "AS" text if image fails
- Offset border: `absolute -bottom-4 -left-4 border border-cyan-500/30`

**Stats (Horizontal):**
- `4+` Projects
- `8+` Technologies
- `2` AI Systems
- `1` SaaS Platform

### 7.3 ExperienceSection
**ID:** `experience`  
**Libraries:** GSAP ScrollTrigger (timeline draw-in) + Framer Motion (card reveals)

**Layout:** Vertical timeline with left border line

**Timeline Animation (GSAP ScrollTrigger):**
- Vertical line draws from top to bottom as user scrolls
- `ScrollTrigger: { trigger: section, start: "top 80%", end: "bottom 20%", scrub: 1 }`
- Line: `scaleY: 0 → 1`, `transformOrigin: "top"`

**Card Animations:**
- Each experience entry slides in from left (`x: -30 → 0`)
- Staggered by scroll position
- Date: Cyan color, mono font
- Company: Bold, large
- Role: Gray, regular
- Bullets: "→" prefix, gray text

**Hover:** Left border turns cyan (`border-gray-800 → border-cyan-500`)

**Experience Data:**

1. **Software Engineer & Project Manager** | 360Xpert Solution | Oct 2025 – Present
   - Leading end-to-end development of a Pharma CRM using Next.js and React
   - Translating business requirements into technical user stories and managing product backlog
   - Coordinating API integration and feature delivery while writing production frontend code

2. **Intern** | State Bank of Pakistan (SBP) | Jun 2025 – Aug 2025
   - Analyzed global third-party risk regulations to suggest improvements for local banking practices
   - Applied analytical skills to understand financial regulator operations and national banking sector
   - Collaborated with IT teams to align Pakistan's practices with international standards

3. **Frontend Web Developer (Intern)** | Bano Qabil | Dec 2024 – Mar 2025
   - Developed a responsive restaurant website using React.js with modern UI patterns
   - Built modular React components for reusability and maintainable code architecture
   - Implemented responsive design using HTML5, CSS3, and JavaScript (ES6+)

### 7.4 ProjectsSection
**ID:** `projects`  
**Libraries:** GSAP ScrollTrigger (parallax images) + Framer Motion (text reveals)

**Layout:**
- Featured projects: Full-width, alternating left/right image
- Other projects: 3-column grid

**Featured Project Animation:**
- Image: Parallax scroll effect (`yPercent: -10 to 10` tied to scroll)
- Text: Fade up when section enters viewport
- Problem/Solution: Staggered reveal

**Image Behavior:**
- Full bleed (no border, no rounded corners)
- `opacity-80` default, `opacity-100` on hover
- Gradient overlay from bottom: `bg-gradient-to-t from-background/60 to-transparent`
- Fallback: Project name text if image fails

**Featured Projects:**

**IntelliTrade**
- Tagline: "AI-Powered Trade Matching Engine"
- Description: "A multi-tenant SaaS platform that automates commodity trade discovery by reading broker emails, extracting structured trade data via AI, and intelligently matching buyers with sellers in real time."
- Problem: "Human brokers spend hours reading messy emails and manually matching buyers to sellers, leaving profit on the table due to missed connections."
- Solution: "IntelliTrade monitors email inboxes 24/7, uses AI to understand trade intents, and runs matching algorithms that combine multiple sellers to fulfill large orders automatically."
- Tech: Node.js, TypeScript, Fastify, PostgreSQL, Prisma, BullMQ, Redis, Google Gemini, OpenAI
- Image: `/images/intellitrade-architecture.png`

**TacitVault AI**
- Tagline: "Voice-to-Knowledge Management System"
- Description: "An end-to-end KMS that captures undocumented expertise via voice, uses LLMs to structure it into SOPs, and predicts knowledge risks before they impact operations."
- Problem: "Critical operational knowledge lives only in employees' heads. When experts leave, the knowledge leaves with them."
- Solution: "TacitVault captures voice input, structures it into searchable SOPs, and monitors for concentration and retirement risks, alerting management before gaps become crises."
- Tech: Python, FastAPI, Google Gemini API, Supabase, PostgreSQL, pgvector, APScheduler
- Image: `/images/tacitvault-architecture.png`

**Other Projects (3-column grid):**
- Task Management System — React.js, JavaScript, CSS3
- News App — React.js, REST API, JavaScript
- Text Utilz — React.js, JavaScript, CSS3

### 7.5 SkillsSection
**ID:** `skills`  
**Library:** Framer Motion

**Layout:** 3-column grid for categories

**Animation:** Staggered tag reveal
- Category headers fade up
- Tags stagger in (`staggerChildren: 0.03`)
- Each tag: `opacity: 0→1, y: 10→0`

**Tag Style:**
- Text only, no background, no pill
- `border-b border-gray-800 pb-1`
- Hover: `border-cyan-500 text-cyan-500`
- Transition: `transition-colors duration-300`

**Categories:**
- Frontend: HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS
- Backend & AI: Node.js, Python, FastAPI, Fastify, Prisma, Google Gemini API, REST APIs
- Database & Tools: PostgreSQL, Supabase, Redis, Git, GitHub, Vercel, BullMQ

### 7.6 CertificatesSection
**ID:** `certificates`  
**Library:** Framer Motion

**Layout:** 2×2 grid

**Animation:**
- Cards stagger in from bottom (`y: 40→0`, `staggerChildren: 0.15`)
- Hover: Card lifts slightly (`y: -4`), border turns amber

**Card Style:**
- Border: `border-gray-800`
- Hover: `border-amber-500/50`
- Icon: Award from Lucide, amber color
- Title: Bold, hover turns amber
- Organization + Platform + Date
- Description
- Skills: Amber mono text

**Certificates:**

1. **Google Business Intelligence** | Google · Coursera | May 13, 2025
   - Professional certificate covering data models, pipelines, dashboards, and business decision-making workflows.
   - Verify: https://coursera.org/verify/professional-cert/G0R0F0Q7OVUI
   - Skills: Data Analysis, Business Intelligence, Dashboard Design

2. **Google AI Essentials** | Google · Coursera | May 5, 2025
   - Applied directly in IntelliTrade's Gemini API integration pipeline and AI extraction workflows.
   - Verify: https://coursera.org/verify/BKHYQKZ8WHJS
   - Skills: LLM Prompt Engineering, AI Integration, Gemini API

3. **National AI Hackathon Participant** | Atomcamp & KSBL · National AI Hackathon 2026 | May 13–14, 2026
   - Two-day Agentic AI Workshop and competitive hackathon in Karachi. Built AI solutions under 48-hour deadline.
   - Skills: Teamwork, Rapid Prototyping, Agentic AI

4. **Project Management Trainee** | Saint Louis University & Excelerate · Remote Internship | Nov 5, 2025
   - Global remote internship with US-backed international professional standards. Executed PM workflows across time zones.
   - Skills: Cross-functional Collaboration, Remote Work, International Standards

### 7.7 ContactSection
**ID:** `contact`  
**Library:** Framer Motion

**Layout:** Minimal, left-aligned

**Animation:**
- Title: Fade up
- Email: Scale up from `0.95` to `1` with fade
- Links: Stagger in

**Content:**
- Title: "Let's build something."
- Subtitle: "Open to opportunities in AI, full-stack engineering, and product development."
- Email: `absar.sid359@gmail.com` — massive (`text-3xl md:text-5xl`), hover cyan
- Links: GitHub, LinkedIn — text only, gray, hover white
- CV: "Download CV" — border button, hover cyan

---

## 8. CARD COMPONENTS SPECIFICATION

### 8.1 ProjectCard (Standard Projects)
**Library:** Framer Motion

**Props:** `{ title, description, tech: string[] }`

**Style:**
- `border border-gray-800 p-6`
- No rounded corners (sharp edges)
- Hover: `border-cyan-500/50` only (no lift, no shadow)
- Transition: `duration-300`

**Animation:** Fade up on scroll

### 8.2 CertificateCard
**Library:** Framer Motion

**Props:** `{ title, org, platform, date, description, url?, skills: string[] }`

**Style:**
- `border border-gray-800 p-6`
- No rounded corners
- Hover: `border-amber-500/50`, title turns amber
- Icon: Award (amber)
- Verify link: ExternalLink icon, opens in new tab

**Animation:** Fade up with stagger

---

## 9. ANIMATION COMPONENTS SPECIFICATION

### 9.1 ScrollReveal
**Purpose:** Reusable scroll-triggered fade-up wrapper  
**Library:** Framer Motion `useInView`

**Props:**
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}
```

**Default:** `delay: 0`, `duration: 0.7`, `y: 40`

**Implementation:**
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
```

### 9.2 StaggerText
**Purpose:** Staggered text reveal for headings  
**Library:** Framer Motion

**Props:**
```typescript
interface StaggerTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}
```

**Behavior:** Splits text into characters or words, staggers their entrance

### 9.3 DrawLine
**Purpose:** SVG path draw-in animation  
**Library:** GSAP ScrollTrigger

**Props:**
```typescript
interface DrawLineProps {
  direction: 'vertical' | 'horizontal';
  color?: string;
  className?: string;
}
```

**Behavior:** Line draws from start to end as user scrolls

### 9.4 ParallaxImage
**Purpose:** Scroll-based image parallax  
**Library:** GSAP ScrollTrigger

**Props:**
```typescript
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // -1 to 1
  className?: string;
}
```

**Behavior:** Image moves at different speed than scroll

### 9.5 CountUp
**Purpose:** Animate number from 0 to target  
**Library:** GSAP

**Props:**
```typescript
interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}
```

---

## 10. DATA LAYER

### File: `data/experience.ts`
```typescript
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  date: string;
  type: 'full-time' | 'internship' | 'contract';
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "360xpert",
    role: "Software Engineer & Project Manager",
    company: "360Xpert Solution",
    location: "Karachi, Pakistan",
    date: "Oct 2025 – Present",
    type: "full-time",
    bullets: [
      "Leading end-to-end development of a Pharma CRM using Next.js and React",
      "Translating business requirements into technical user stories and managing product backlog",
      "Coordinating API integration and feature delivery while writing production frontend code"
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

### File: `data/projects.ts`
```typescript
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
    image: "/images/intellitrade-architecture.png"
  },
  {
    id: "tacitvault",
    title: "TacitVault AI",
    tagline: "Voice-to-Knowledge Management System",
    description: "An end-to-end KMS that captures undocumented expertise via voice, uses LLMs to structure it into SOPs, and predicts knowledge risks before they impact operations.",
    problem: "Critical operational knowledge lives only in employees' heads. When experts leave, the knowledge leaves with them.",
    solution: "TacitVault captures voice input, structures it into searchable SOPs, and monitors for concentration and retirement risks, alerting management before gaps become crises.",
    tech: ["Python", "FastAPI", "Google Gemini API", "Supabase", "PostgreSQL", "pgvector", "APScheduler"],
    image: "/images/tacitvault-architecture.png"
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
```

### File: `data/skills.ts`
```typescript
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
```

### File: `data/certificates.ts`
```typescript
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
```

### File: `data/social.ts`
```typescript
export const social = {
  email: "absar.sid359@gmail.com",
  github: "https://github.com/MuhammadAbsarSiddiqui",
  linkedin: "https://www.linkedin.com/in/muhammad-absar-siddiqui"
};
```

---

## 11. FILE STRUCTURE

```
pw/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, SmoothScroll, Navbar, Footer
│   ├── page.tsx                # Composes all sections
│   └── globals.css             # Tailwind imports, CSS variables, keyframes, reduced-motion
│
├── components/
│   ├── global/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SmoothScroll.tsx    # Lenis wrapper
│   │   ├── GrainOverlay.tsx    # SVG noise texture
│   │   └── FloatingOrb.tsx     # Single ambient orb
│   │
│   ├── animation/
│   │   ├── ScrollReveal.tsx    # Scroll-triggered fade-up wrapper
│   │   ├── StaggerText.tsx     # Character/word stagger reveal
│   │   ├── DrawLine.tsx        # SVG path draw-in (GSAP)
│   │   ├── ParallaxImage.tsx   # Scroll-based image parallax (GSAP)
│   │   └── CountUp.tsx         # Number count-up animation (GSAP)
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
│       ├── ProjectCard.tsx
│       └── CertificateCard.tsx
│
├── data/
│   ├── experience.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── certificates.ts
│   └── social.ts
│
├── lib/
│   ├── utils.ts                # cn() helper
│   └── animation.ts            # Animation tokens (EASE, DURATION, STAGGER)
│
├── hooks/
│   ├── useScrollProgress.ts    # Global scroll progress
│   └── useInViewAnimation.ts   # Framer Motion useInView wrapper
│
├── public/
│   ├── cv.pdf                  # Placeholder (replace with real)
│   ├── favicon.svg             # "AS" monogram
│   ├── logo-dark.svg
│   ├── logo-light.svg
│   ├── apple-touch-icon.png
│   └── images/
│       ├── absar-portrait.jpg  # REQUIRED: Your photo
│       ├── og-image.png        # 1200×630 social share
│       ├── intellitrade-architecture.png  # Placeholder
│       └── tacitvault-architecture.png    # Placeholder
│
├── tailwind.config.ts
├── next.config.js              # output: 'export', images: { unoptimized: true }
└── package.json
```

---

## 12. IMPLEMENTATION ORDER

### Phase 1: Foundation (Day 1)
1. Initialize Next.js project with TypeScript + Tailwind
2. Install all dependencies (Framer Motion, GSAP, Lenis, Lucide, clsx, tailwind-merge)
3. Configure `tailwind.config.ts` with custom colors, fonts, dark mode
4. Set up `globals.css` with CSS variables, grain keyframes, reduced-motion
5. Configure `next.config.js` for static export
6. Set up fonts in `layout.tsx`
7. Create `lib/utils.ts` (cn helper)
8. Create `lib/animation.ts` (animation tokens)

### Phase 2: Global Shell (Day 1-2)
1. Create `ThemeProvider` + `ThemeToggle`
2. Create `SmoothScroll` (Lenis wrapper)
3. Create `GrainOverlay`
4. Create `FloatingOrb`
5. Create `Navbar` + `MobileMenu`
6. Create `Footer`
7. Assemble in `layout.tsx`

### Phase 3: Animation Primitives (Day 2)
1. Create `ScrollReveal`
2. Create `StaggerText`
3. Create `DrawLine` (GSAP)
4. Create `ParallaxImage` (GSAP)
5. Create `CountUp` (GSAP)
6. Create custom hooks: `useScrollProgress`, `useInViewAnimation`

### Phase 4: Data Layer (Day 2)
1. Create `data/experience.ts`
2. Create `data/projects.ts`
3. Create `data/skills.ts`
4. Create `data/certificates.ts`
5. Create `data/social.ts`

### Phase 5: Sections (Day 3-4)
1. Create `HeroSection` — staggered entrance animation
2. Create `AboutSection` — scroll reveal, photo grayscale, stats count-up
3. Create `ExperienceSection` — timeline draw-in, card reveals
4. Create `ProjectsSection` — parallax images, text reveals
5. Create `SkillsSection` — tag stagger reveal
6. Create `CertificatesSection` — card stagger, hover effects
7. Create `ContactSection` — text reveal, underline hover

### Phase 6: Cards (Day 4)
1. Create `ProjectCard`
2. Create `CertificateCard`

### Phase 7: Polish & Testing (Day 5)
1. Verify all animations work
2. Test responsive behavior (320px, 768px, 1024px+)
3. Test dark/light mode toggle
4. Test smooth scroll
5. Verify reduced-motion respect
6. Run Lighthouse audit (target 90+)
7. Build and deploy

---

## 13. CRITICAL RULES

### Design Rules (Anti-Template)
1. **NEVER center-align text.** Left-align everything except footer copyright.
2. **NEVER use pill-shaped badges.** Underlined text only.
3. **NEVER add background colors on hover.** Border color or text color only.
4. **NEVER use more than one floating orb.** Restraint = premium.
5. **NEVER write "student", "final-year", "SMIU", or "Karachi" in copy.**
6. **NEVER add social icons in footer.** Copyright only.
7. **NEVER use generic CTA buttons with backgrounds.** Text links with underline hover.
8. **NEVER add "Available for opportunities" badge.** It's a template trope.
9. **ALWAYS use the custom ease** `[0.25, 0.1, 0.25, 1]` for Framer Motion.
10. **ALWAYS use generous spacing:** `py-24 md:py-32`, `px-6 md:px-12 lg:px-24`.

### Animation Rules
11. **Every section must have a scroll-triggered entrance animation.** No static sections.
12. **Hero must have staggered entrance.** Not a single fade.
13. **Experience timeline must draw in on scroll.** Use GSAP ScrollTrigger.
14. **Project images must have parallax.** Use GSAP ScrollTrigger.
15. **Stats must count up.** Use GSAP or Framer Motion.
16. **Certificate cards must stagger in.** Not all at once.
17. **Hover effects must be subtle.** Border color or text color shift. No scale transforms.
18. **Respect `prefers-reduced-motion`.** Disable all animations if user prefers.

### Technical Rules
19. **Mobile-first:** Default styles are mobile. Use `md:` for desktop.
20. **Static export only:** `output: 'export'`, `images: { unoptimized: true }`.
21. **External links:** `target="_blank" rel="noopener noreferrer"`.
22. **Email link:** `mailto:absar.sid359@gmail.com`.
23. **Photo fallback:** If `absar-portrait.jpg` fails, show "AS" placeholder.
24. **Image fallbacks:** If project images fail, show project name text.
25. **GSAP plugins must be registered** before use.

---

## 14. VERIFICATION CHECKLIST

### Build
- [ ] `npm run build` succeeds with zero errors
- [ ] Static export generates `out/` folder
- [ ] No TypeScript errors
- [ ] No ESLint warnings

### Functionality
- [ ] Theme toggle switches dark ↔ light, persists in localStorage
- [ ] Mobile menu opens/closes with animation
- [ ] Smooth scroll works (Lenis)
- [ ] All nav links scroll to correct sections
- [ ] CV download button works
- [ ] All external links open in new tab
- [ ] Mailto link opens email client

### Animations
- [ ] Hero: Staggered entrance (name → tagline → description → links)
- [ ] About: Scroll reveal + photo fade + stats count-up
- [ ] Experience: Timeline line draws in on scroll
- [ ] Experience: Cards slide in with stagger
- [ ] Projects: Images have parallax effect
- [ ] Projects: Text reveals on scroll
- [ ] Skills: Tags stagger in
- [ ] Certificates: Cards stagger in
- [ ] Contact: Text reveals on scroll
- [ ] Background: Orb drifts slowly
- [ ] Background: Grain overlay visible

### Responsive
- [ ] 320px: No horizontal scroll, readable text, stacked layouts
- [ ] 768px: 2-column grids activate, nav shows links
- [ ] 1024px+: Full typography scale, asymmetric layouts visible

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Images optimized or placeholders noted
- [ ] Fonts load with `display: swap`
- [ ] No layout shift on load

### Accessibility
- [ ] `prefers-reduced-motion` disables all animations
- [ ] Focus visible on all interactive elements
- [ ] Semantic HTML (nav, main, section, footer)
- [ ] Alt text on all images
- [ ] aria-label on icon-only buttons

---

## SUMMARY: WHAT MAKES THIS ANTI-AI

| Template Cliché | Our Replacement |
|-----------------|-----------------|
| Centered hero | Left-aligned, massive, line-broken |
| Status badge | Nothing. Just the name. |
| Pill buttons | Text links with underline |
| Card hover = lift + shadow | Border color shift only |
| 2×2 stat grid | Horizontal inline stats |
| Vertical timeline | Draw-in line + slide cards |
| Check icons | "→" arrows |
| Colored tech pills | Underlined text |
| Social icons in footer | Copyright only |
| Contact cards | Massive email text |
| Multiple floating particles | One orb + grain |
| Symmetric everything | Asymmetric offsets |
| "Passionate about..." | "I turn noise into signal." |
| Generic fade-up everywhere | Staggered, choreographed, purposeful |

This portfolio must feel like it was crafted by a human who understands restraint, typography, and the power of intentional imperfection.
