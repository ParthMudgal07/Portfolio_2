import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase mb-4">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Building the future with <span className="text-text-secondary">Data & Intelligence.</span>
          </h3>
          <p className="text-lg text-text-secondary mb-6 leading-relaxed">
            I'm a 3rd-year Computer Science student at VIPS-TC GGSIPU, with a deep focus on the intersection of AI, Data Science, and Software Engineering. 
          </p>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            My journey is driven by a curiosity to solve complex problems using machine learning and data driven insights. I believe in building meaningful projects that bridge the gap between technical complexity and user centric design.
          </p>
          
          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-bold text-white mb-1">3rd</p>
              <p className="text-sm text-text-secondary uppercase tracking-wider">Year Student</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">10+</p>
              <p className="text-sm text-text-secondary uppercase tracking-wider">Projects Built</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <img 
            src="https://cdn.corenexis.com/files/c/4521874720.jpg" 
            alt="Parth Mudgal"
            className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h4 className="text-2xl font-bold text-white mb-1">Parth Mudgal</h4>
            <p className="text-brand-primary font-medium">AI & Data Science Enthusiast</p>
          </div>
          
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-white/10 rounded-3xl z-30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
