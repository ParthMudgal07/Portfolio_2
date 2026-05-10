import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    // Replace this with your actual Access Key from web3forms.com
    formData.append("access_key", "1a099601-da6c-45e9-81e1-6cebebfe9d5b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSent(true);
        formRef.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      } else {
        console.error("Error", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-[0.2em] text-brand-primary uppercase mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-text-secondary">extraordinary.</span></h3>
          <p className="text-lg text-text-secondary mb-12 max-w-md">
            I'm always open to new opportunities, collaborations, or just a friendly chat about AI and data science.
          </p>

          <div className="space-y-6">
            <a href="mailto:parthmudgal28@gmail.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-text-secondary uppercase tracking-widest font-bold">Email</p>
                <p className="text-lg font-semibold">parthmudgal28@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4 pt-6">
              {[
                { icon: <Github />, href: "https://github.com/ParthMudgal07", label: "GitHub" },
                { icon: <Linkedin />, href: "https://www.linkedin.com/in/parthmudgal28/", label: "LinkedIn" },
                { icon: <Mail />, href: "parthmudgal28@gmail.com", label: "Gmail" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder=" "
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary focus:outline-none transition-colors"
                  placeholder=" "
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-text-secondary ml-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-primary focus:outline-none transition-colors resize-none"
                placeholder=" "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSent}
              className="w-full py-4 px-8 bg-brand-primary text-black font-bold rounded-2xl hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSent ? (
                <>
                  Sent Successfully
                  <CheckCircle className="w-5 h-5" />
                </>
              ) : isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
