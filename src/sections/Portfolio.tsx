import { motion } from 'motion/react';
import { Eye, Plus } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', 'Social Media', 'Campanhas', 'Identidade'];

  const items = [
    { id: 1, title: 'Campanha de Natal', category: 'Social Media', image: '/portfolio_3.jpg' },
    { id: 2, title: 'Inovação Digital', category: 'Identidade', image: '/portfolio_4.jpg' },
    { id: 3, title: 'Criatividade em Foco', category: 'Campanhas', image: '/portfolio_5.jpg' },
    { id: 4, title: 'Portfolio Overview', category: 'Social Media', image: '/portfolio_1.jpg' },
    { id: 5, title: 'Processo Criativo', category: 'Identidade', image: '/portfolio_2.jpg' },
    { id: 6, title: 'Agradecimento Visual', category: 'Campanhas', image: '/portfolio_6.jpg' }
  ];

  const filteredItems = activeCategory === 'Todos' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary-dark uppercase"
          >
            Trabalhos Recentes
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-extrabold"
          >
            Uma seleção de artes <span className="text-primary-dark">estratégicas</span>.
          </motion.h3>

          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap justify-center gap-3 pt-8"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950' 
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden aspect-[4/3] shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-primary-dark text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h4 className="text-white text-xl font-bold mb-4">{item.title}</h4>
                <div className="flex gap-4">
                  <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="p-3 bg-primary-dark text-zinc-950 rounded-full transition-transform hover:scale-110">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block p-[2px] rounded-lg bg-gradient-to-r from-primary/50 to-primary-dark/50"
             >
                <a 
                    href={import.meta.env.VITE_INSTAGRAM} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex px-10 py-4 bg-zinc-50 dark:bg-zinc-950 rounded-[6px] font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                    Ver Mais no Instagram
                </a>
             </motion.div>
        </div>
      </div>
    </section>
  );
}
