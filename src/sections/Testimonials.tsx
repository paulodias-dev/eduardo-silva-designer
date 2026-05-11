import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Costa",
      role: "Dona da Boutique Estilo",
      content: "O Eduardo conseguiu captar exatamente a essência da minha loja. As artes para o Instagram aumentaram significativamente nosso engajamento e as vendas!",
      avatar: "https://i.pravatar.cc/150?u=ana"
    },
    {
      name: "Ricardo Mendes",
      role: "Gerente de Marketing da TechFlow",
      content: "Trabalhar com o Eduardo é sinônimo de tranquilidade. Ele entrega artes de altíssimo nível, sempre dentro do prazo e com uma criatividade surpreendente.",
      avatar: "https://i.pravatar.cc/150?u=ricardo"
    },
    {
      name: "Carla Silveira",
      role: "Influenciadora Digital",
      content: "Minha identidade visual nunca esteve tão profissional. O Eduardo é o melhor designer que já contratei, atencioso e muito talentoso.",
      avatar: "https://i.pravatar.cc/150?u=carla"
    }
  ];

  return (
    <section id="testimonials" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-primary-dark uppercase">Provas de Sucesso</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold">O que dizem os <span className="text-primary-dark">clientes</span>.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-zinc-100 dark:bg-zinc-900 rounded-lg relative group border border-transparent hover:border-primary/20 transition-all shadow-sm"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 dark:bg-primary/10 rounded-full flex items-center justify-center text-primary-dark blur-sm group-hover:blur-0 transition-all">
                <Quote size={20} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary-dark fill-primary-dark" />
                ))}
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 mb-8 italic leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-50">{t.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 tracking-wide uppercase">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
