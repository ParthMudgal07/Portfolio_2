import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "PregaCare - AI based Pregancy Assistant",
    description: "A machine learning based platform for assisting pregnant women and new mothers with personalized healthcare advice and support.",
    tags: ["Python", "RAG", "React", "FastAPI", "ML", "NLP"],
    image: "https://cdn.corenexis.com/files/c/2595827720.png",
    github: "https://github.com/ParthMudgal07/PregaCare.git",
    demo: "https://pregacare01.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase mb-4">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
        </div>
        <p className="max-w-md text-text-secondary">
          A selection of my recent work in AI, Data Science, and full-stack development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass rounded-3xl overflow-hidden hover:border-brand-primary/30 transition-all duration-500"
          >
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold bg-black/50 backdrop-blur-md rounded-full border border-white/10 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8">
              <h4 className="text-xl font-bold mb-3 group-hover:text-brand-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.demo}
                  className="flex-1 py-2.5 px-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-semibold"
                >
                  Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
