import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/global/Icons';
import { socialLinks } from '@/data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/30 py-8 px-4 md:px-8 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-sm font-body text-muted text-center md:text-left">
          &copy; {currentYear} Muhammad Absar Siddiqui. All rights reserved.
        </p>

        {/* Right: Socials */}
        <div className="flex items-center gap-6 md:gap-4">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6 md:w-5 md:h-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors p-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6 md:w-5 md:h-5" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-muted hover:text-foreground transition-colors p-1"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6 md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
