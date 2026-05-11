import { motion } from 'motion/react';
import { Smartphone, Layout, Palette, Megaphone, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Smartphone className="text-primary-dark" size={32} />,
      title: "Artes para Mídias Sociais",
      description: "Criação de posts, reels e stories projetados para gerar engajamento e retenção de público.",
      features: ["Design Estratégico", "Adaptação Multicanal", "Visual de Autoridade"]
    },
    {
      icon: <Palette className="text-primary-dark" size={32} />,
      title: "Identidade Visual",
      description: "Desenvolvimento de elementos visuais que traduzem a alma da sua marca de forma única.",
      features: ["Paleta de Cores", "Tipografia Premium", "Kits de Marca"]
    },
    {
      icon: <Layout className="text-primary-dark" size={32} />,
      title: "Design de Campanhas",
      description: "Concepção visual completa para lançamentos e promoções sazonais de alto impacto.",
      features: ["Conceito Criativo", "Unidade Visual", "Foco em Conversão"]
    },
    {
      icon: <Megaphone className="text-primary-dark" size={32} />,
      title: "Consultoria Criativa",
      description: "Acompanhamento especializado para elevar o padrão visual da sua comunicação digital.",
      features: ["Análise de Perfil", "Guia de Estilo", "Tendências do Setor"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-zinc-100 dark:bg-zinc-900/50">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary-dark uppercase"
          >
            Serviços & Soluções
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-extrabold"
          >
            Elevando o nível da sua <span className="text-primary-dark">comunicação visual</span>.
          </motion.h3>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-zinc-600 dark:text-zinc-400"
          >
            Cada projeto é desenvolvido com um olhar estratégico, garantindo que o design trabalhe a favor dos seus objetivos de negócio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-all group shadow-sm"
            >
              <div className="mb-6 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 w-fit group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 size={16} className="text-primary-dark" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Intermediary CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-zinc-900 dark:bg-zinc-50 rounded-lg text-white dark:text-zinc-950 text-center relative overflow-hidden shadow-2xl"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6">
                <h3 className="text-3xl md:text-4xl font-display font-bold">Pronto para destacar sua loja única?</h3>
                <p className="text-zinc-400 dark:text-zinc-600 max-w-xl mx-auto">
                    Não deixe sua marca passar despercebida. Vamos criar artes que convertem seguidores em clientes.
                </p>
                <div className="pt-4">
                    <a 
                        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-10 py-4 bg-primary-dark text-zinc-950 font-extrabold rounded-lg hover:scale-105 transition-transform"
                    >
                        Quero um Orçamento Agora
                    </a>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
