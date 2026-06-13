import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import CertificatesSection from '@/components/sections/CertificatesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div id="work">
        <ExperienceSection />
        <ProjectsSection />
      </div>
      <div id="skills">
        <SkillsSection />
        <CertificatesSection />
      </div>
      <ContactSection />
    </>
  )
}

