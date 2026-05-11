import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

export default function Contact() {
  const contactInfos = [
    { 
      icon: <Phone size={20} className="text-primary-dark" />, 
      label: 'Telefone / WhatsApp', 
      value: '+55 (62) 9401-2445',
      link: 'https://wa.me/556294012445'
    },
    { 
      icon: <Mail size={20} className="text-primary-dark" />, 
      label: 'E-mail Profissional', 
      value: 'contato@eduardodesingner.com.br',
      link: 'mailto:contato@eduardodesingner.com.br'
    },
    { 
      icon: <MapPin size={20} className="text-primary-dark" />, 
      label: 'Localização', 
      value: 'Jardim das Américas, Anápolis - GO',
      link: 'https://www.google.com/maps/dir/?api=1&destination=Av.%20Santos%20Dumont%2C%20QD%2051%20-%20LT%2013%20setor%202%C2%BA%20Etapa%20-%20Jardim%20das%20Americas%2C%20An%C3%A1polis%20-%20GO%2C%2075070-445'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-zinc-100 dark:bg-zinc-900/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary-dark uppercase">Localização e Contato</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold leading-tight">
                Venha tomar um café ou <span className="text-primary-dark">fale comigo</span> agora.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Seja para um novo projeto ou apenas para conhecer meu estúdio, estou à disposição nos canais abaixo ou visite-me em Anápolis.
              </p>
            </motion.div>

            <div className="space-y-8">
              {contactInfos.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="shrink-0 p-4 rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-1">{item.label}</h4>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-dark transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
               <a href="https://instagram.com/eduardosilva" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:text-primary transition-all shadow-sm">
                  <Instagram size={20} />
               </a>
               <a href="https://linkedin.com/in/eduardosilva" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:text-primary transition-all shadow-sm">
                  <Linkedin size={20} />
               </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px]"
          >
            <GoogleMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
