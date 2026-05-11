import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Users className="text-primary-dark" size={24} />,
      title: "Engajamento Real",
      description: "Foco em criar conexões genuínas entre sua marca e seu público."
    },
    {
      icon: <Zap className="text-primary-dark" size={24} />,
      title: "Design de Impacto",
      description: "Artes que capturam a atenção nos primeiros segundos do scroll."
    },
    {
      icon: <Target className="text-primary-dark" size={24} />,
      title: "Estratégia Visual",
      description: "Cada detalhe é pensado para contar a sua história única."
    },
    {
      icon: <TrendingUp className="text-primary-dark" size={24} />,
      title: "Presença Digital",
      description: "Inovação constante para fortalecer sua autoridade online."
    }
  ];

  return (
    <section id="about" className="section-padding bg-zinc-100 dark:bg-zinc-900/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all" />
            <img 
              src="/portfolio_2.jpg" 
              alt="Eduardo Silva Introdução" 
              className="relative w-full aspect-[4/3] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary-dark uppercase mb-2">Sobre Eduardo Silva</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold leading-tight">
                Designer Gráfico da Ação Total especializado em Resultados.
              </h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed"
            >
              <p>
                Sou designer gráfico na Ação Total, onde desenvolvo artes impactantes para mídias sociais. Meu objetivo é ajudar marcas a se destacarem no ambiente digital, transmitindo sua essência através de visuais criativos e estratégicos.
              </p>
              <p>
                Com três anos de experiência sólida, trabalhei com diversas marcas criando conteúdos que não apenas capturam a atenção, mas promovem conexão real com o público.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 p-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-50">{item.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
