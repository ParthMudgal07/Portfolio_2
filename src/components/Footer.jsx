import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-8 py-0">
        <div>
          <p className="text-xl font-bold tracking-tighter">
            PARTH<span className="text-brand-primary">.</span>
          </p>
          <p className="text-sm text-text-secondary mt-2">
            © {new Date().getFullYear()} Parth Mudgal. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">GitHub</a>
          <a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Gmail</a>
        </div>
        
        <p className="text-sm text-text-secondary italic">
          Designed with precision.
        </p>
      </div>
    </footer>
  );
}
