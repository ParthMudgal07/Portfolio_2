import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-brand-secondary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-brand-primary uppercase bg-brand-primary/10 rounded-full border border-brand-primary/20">
            Available for Projects
          </span>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
            I'm <span className="premium-gradient-text">Parth</span><br />
            <span className="text-text-secondary">AI & ML focused Developer</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
            Computer Science student specializing in Artificial Intelligence, Data Science, and Machine Learning. 
            Passionate about building impactful intelligent systems and modern software experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a
              href="/Parth Mudgal Resume.pdf"
              download="Parth_Mudgal_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary opacity-30"
      >
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-current rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
