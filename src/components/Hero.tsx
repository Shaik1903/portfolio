"use client";

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[52rem] bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-3xl rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-6 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="tag">Machine Learning Engineer</span>
                <span className="tag">IIIT Dharwad</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white">Sadikh</span>.
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl">
                I build agentic systems, voice-first experiences, and ML products that ship. From 0→1 multi-agent workflows to
                research-backed model improvements, I love turning ideas into delightful, production-grade AI.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  className="btn-primary"
                  href="https://drive.google.com/file/d/1zPwEuHUem0W91mE9pw9pLMB0av0VH0r6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume <FiArrowUpRight />
                </a>
                <a className="btn-ghost" href="https://github.com/Shaik1903" target="_blank" rel="noreferrer">
                  <FiGithub /> Github
                </a>
                <a
                  className="btn-ghost"
                  href="https://www.linkedin.com/in/sadikh-shaik-98a3a321b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin /> LinkedIn
                </a>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-shrink-0 w-full md:w-80 lg:w-96"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_45%)]" />
                <div className="absolute bottom-0 p-4 w-full bg-black/30 backdrop-blur-sm">
                  <p className="text-sm text-white/80">
                    Currently building multi-agent and voice-based AI at <span className="text-white font-medium">Gaido.AI</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


