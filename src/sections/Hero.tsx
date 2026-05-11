import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Palette } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/2 bg-zinc-200/20 dark:bg-zinc-800/20 blur-[100px] rounded-full" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-medium text-xs tracking-wider uppercase"
          >
            <Palette size={14} />
            Designer Gráfico Senior
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight"
          >
            Transformando visão em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-yellow-600">arte digital</span> impactante.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Artes estratégicas para mídias sociais que destacam sua marca, engajam seu público e transmitem sua essência com sofisticação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              Ver Portfolio
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 font-bold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center gap-8 pt-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all"
          >
            <a href={import.meta.env.VITE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Instagram size={24} />
            </a>
            <a href={import.meta.env.VITE_LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
             <span className="text-sm font-medium tracking-widest uppercase opacity-40">Follow My Work</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
