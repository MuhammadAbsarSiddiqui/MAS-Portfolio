'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { CVDButton } from './CVDButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Sidebar menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-border px-6 py-6 flex flex-col shadow-2xl justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <span className="font-heading font-bold text-xl text-accent-primary">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  type="button"
                  className="p-2 text-foreground/80 hover:text-foreground hover:bg-card rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-accent-primary cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="text-2xl font-heading font-semibold text-foreground/95 hover:text-accent-primary transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary rounded-md px-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-6 pt-6 border-t border-border">
              <CVDButton variant="default" className="w-full py-3" />
              <div className="flex justify-center items-center gap-4 py-2">
                <span className="text-sm text-muted font-body">Theme:</span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
