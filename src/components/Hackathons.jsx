import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';

const hackathons = [
  {
    name: "CodeWizard Hackathon - SRM University",
    achievement: "Runner Up",
    date: "2026",
    description: "Developed an AI-driven legal compliance platform for small businesses, which helps them stay updated with the latest legal requirements.",
    tech: ["Python", "RAG", "FastAPI", "NLP", "ML", "ReactJS"]
  }
];

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase mb-4">
          Achievements
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold">Hackathons & Competitions</h3>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {hackathons.map((hack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row gap-8 p-8 glass rounded-3xl group hover:border-brand-primary/20 transition-all"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
              <Trophy className="w-8 h-8 text-brand-primary" />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h4 className="text-2xl font-bold">{hack.name}</h4>
                <div className="flex items-center gap-2 text-brand-secondary font-semibold text-sm">
                  <Trophy className="w-4 h-4" />
                  {hack.achievement}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {hack.date}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Team Project
                </div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {hack.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {hack.tech.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
