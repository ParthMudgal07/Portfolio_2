import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'Java', level: 80, category: 'Languages' },
  { name: 'SQL', level: 85, category: 'Data' },
  { name: 'Machine Learning', level: 85, category: 'AI' },
  { name: 'Data Science', level: 80, category: 'Data' },
  { name: 'MS Excel', level: 90, category: 'Data' },
  { name: 'Power BI', level: 85, category: 'Data' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase mb-4">
          Tech Stack
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold">Skills & Expertise</h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl glass hover:bg-white/[0.08] transition-colors"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-white/10 rounded-full text-brand-primary">
                {skill.category}
              </span>
              <span className="text-sm font-medium text-text-secondary">{skill.level}%</span>
            </div>
            
            <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
            
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Additional technologies */}
      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {['React', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Git', 'Vite', 'Tailwind'].map((tech) => (
          <span key={tech} className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-text-secondary">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
