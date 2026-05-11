import { Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Footer() {
  const { theme } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <img 
              src={theme === 'dark' ? '/logo_dark.png' : '/logo_light.png'} 
              alt="Eduardo Silva Logo" 
              className="h-12 w-auto"
            />
            <p className="text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Design gráfico focado em resultados reais. Transformando essência em presença digital de impacto desde 2022.
            </p>
            <div className="flex gap-4">
              <a href={import.meta.env.VITE_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href={import.meta.env.VITE_LINKEDIN} target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="p-2 text-zinc-400 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-widest text-sm">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Início</a></li>
              <li><a href="#about" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Sobre Mim</a></li>
              <li><a href="#portfolio" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Experiência</a></li>
              <li><a href="#services" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Serviços</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-zinc-900 dark:text-zinc-50 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors text-sm">Terms of Service</a></li>
            </ul>
            <button 
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 text-primary-dark font-bold text-sm group"
            >
              Voltar ao Topo 
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Eduardo Silva. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por <a href="https://fluxosistemas.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">Fluxo Sistemas</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
