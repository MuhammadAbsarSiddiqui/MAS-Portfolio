# Muhammad Absar Siddiqui Portfolio v2.0 — Codebase Editing Guide

This guide details the step-by-step process of editing sections, content, animations, or styling in the high-animation portfolio codebase.

---

## Directory Overview

*   **Content & Data Files:** `src/data/` (experience, projects, skills, certificates, social links)
*   **Main Page Routing:** `src/app/page.tsx`
*   **HTML Layout & Metadata:** `src/app/layout.tsx`
*   **CSS Theme Variables & Scroll Override:** `src/app/globals.css`
*   **Section Components:** `src/components/sections/`
*   **Card Components:** `src/components/cards/`
*   **Global Components:** `src/components/global/` (Lenis Smooth Scroll, overlays, theme)
*   **Animation Primitives:** `src/components/animation/` (GSAP timelines, scroll triggers)
*   **Static Assets:** `public/`

---

## 1. Edit Theme Colors & Typography

If you want to edit global theme variables (such as background, border, or accent colors) or fonts:

1.  Open [globals.css](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/app/globals.css).
2.  Locate the `:root` block (for Dark theme) or `.light` block (for Light theme):
    *   `--accent-primary`: Cyan theme color.
    *   `--accent-secondary`: Amber color (applied to certificates grid items).
3.  Locate the `@theme` block to adjust variables mapping or font families (e.g. `--font-heading` or `--font-body`).

---

## 2. Edit Site Navigation Links (Navbar & Mobile Menu)

To edit link labels, routing anchors, or visibility:

1.  Open [Navbar.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/global/Navbar.tsx) and [MobileMenu.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/global/MobileMenu.tsx).
2.  Locate the `navItems` or `menuLinks` array:
    ```typescript
    const navItems = [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ];
    ```
3.  Add, remove, or modify items as needed.

---

## 3. Edit SEO Metadata (Page Title, Description, Favicon)

To change search engine indexing tags, metadata descriptions, or tab title:

1.  Open [layout.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/app/layout.tsx).
2.  Locate the exported `metadata` object:
    ```typescript
    export const metadata: Metadata = {
      title: 'Muhammad Absar Siddiqui | Software Engineer',
      description: 'Software Engineer building AI-powered applications...',
      // ...
    }
    ```
3.  Modify values accordingly.
4.  To replace icons, replace the corresponding assets in the [public/](file:///c:/Users/absar/Desktop/MAS-Portfolio/public/) folder (`favicon.svg`, `apple-touch-icon.png`).

---

## 4. Section-by-Section Edit Instructions

### Hero Section
*   **File to Edit:** [HeroSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/HeroSection.tsx)
*   **Instructions:**
    *   To edit the broken lines of your name, modify the `<h1>` layout.
    *   To change taglines or inline texts, modify the `<motion.p>` tags.
    *   To adjust staggered entrance animations, adjust the delays in the Framer Motion elements.

### About Section
*   **File to Edit:** [AboutSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/AboutSection.tsx)
*   **Instructions:**
    *   To edit your bio content, modify the `<p>` paragraph tags.
    *   To edit inline statistics, modify the target counts or suffixes inside the `stats` array.
    *   To replace your portrait photo, replace the physical file at `public/images/absar-portrait.jpg`.

### Experience Section
*   **Data File:** [experience.ts](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/data/experience.ts)
*   **Component File:** [ExperienceSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/ExperienceSection.tsx)
*   **Instructions:**
    *   Open `experience.ts`. Add, remove, or update objects inside the `experiences` array.
    *   To adjust the timeline line trigger thresholds, open `ExperienceSection.tsx` and check the `DrawLine` component definitions.

### Projects (Work) Section
*   **Data File:** [projects.ts](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/data/projects.ts)
*   **Component Files:**
    *   Main list wrapper: [ProjectsSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/ProjectsSection.tsx)
    *   Featured project style: [FeaturedProject.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/cards/FeaturedProject.tsx)
    *   Grid project style: [ProjectCard.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/cards/ProjectCard.tsx)
*   **Instructions:**
    *   To add or update projects, open `projects.ts` and modify either `featuredProjects` or `standardProjects`.
    *   To adjust the parallax offset velocity of the featured images, change the `speed` prop on `<ParallaxImage>` inside `FeaturedProject.tsx`.

### Skills Section
*   **Data File:** [skills.ts](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/data/skills.ts)
*   **Component File:** [SkillsSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/SkillsSection.tsx)
*   **Instructions:**
    *   To update your technical skills, modify category groups or name strings inside the `skills` array.

### Certificates Section
*   **Data File:** [certificates.ts](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/data/certificates.ts)
*   **Component Files:**
    *   Main Grid: [CertificatesSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/CertificatesSection.tsx)
    *   Grid Item: [CertificateCard.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/cards/CertificateCard.tsx)
*   **Instructions:**
    *   Open `certificates.ts` to add or edit professional courses, certification links, and description blurbs.

### Contact Section
*   **File to Edit:** [ContactSection.tsx](file:///c:/Users/absar/Desktop/MAS-Portfolio/src/components/sections/ContactSection.tsx)
*   **Instructions:**
    *   To change your email address, edit the mailto text link.
    *   To update social links (GitHub/LinkedIn), change the respective anchor tags.

---

## 5. CV PDF Asset

*   **File Path:** `public/cv.pdf`
*   **Instructions:**
    *   To update the downloadable resume, save your final PDF as `cv.pdf` and drop it directly into the `public/` directory (overwriting the placeholder).
