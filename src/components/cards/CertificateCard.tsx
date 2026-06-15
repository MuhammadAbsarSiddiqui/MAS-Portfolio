'use client';

import React from 'react';
import { Certificate } from '@/data/certificates';
import { Award, ExternalLink } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface CertificateCardProps {
  cert: Certificate;
  variants?: Variants;
}

export default function CertificateCard({ cert, variants }: CertificateCardProps) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-card border border-border hover:border-accent-secondary/50 transition-colors duration-300 group flex flex-col justify-between h-full w-full"
    >
      <div>
        <div className="flex items-start justify-between">
          <Award className="w-5 h-5 text-accent-secondary" />
          {cert.url && (
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent-secondary transition-colors"
              aria-label={`Verify ${cert.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="text-lg font-heading font-bold mt-4 text-foreground group-hover:text-accent-secondary transition-colors duration-300">
          {cert.title}
        </h3>
        <p className="text-muted text-sm mt-1 font-body">{cert.org} &middot; {cert.platform}</p>
        <p className="text-muted text-sm font-mono mt-1">{cert.date}</p>

        <p className="text-muted text-sm mt-4 leading-relaxed font-body">
          {cert.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {cert.skills.map((skill) => (
          <span key={skill} className="text-xs text-accent-secondary font-mono">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
