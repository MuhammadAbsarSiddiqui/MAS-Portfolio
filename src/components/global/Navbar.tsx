'use client';

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', 'about', 'work', 'skills', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 w-full px-4 md:px-8 bg-transparent flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-heading font-bold text-2xl tracking-tight text-accent-primary"
            aria-label="Absar Siddiqui Portfolio Home"
          >
            AS.
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-sm font-heading font-medium tracking-wide relative py-1.5 transition-colors duration-300",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent-primary after:transition-all after:duration-300",
                    isActive
                      ? "text-accent-primary after:w-full"
                      : "text-foreground/80 hover:text-accent-primary after:w-0 hover:after:w-full"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className="p-2 text-foreground/80 hover:text-foreground cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

