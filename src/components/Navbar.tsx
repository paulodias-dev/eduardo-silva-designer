import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, MessageSquare } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={theme === 'dark' ? '/logo_dark.png' : '/logo_light.png'} 
            alt="Eduardo Silva Logo" 
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:scale-105 transition-transform"
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 text-sm font-semibold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2"
            >
              <MessageSquare size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-3">
           <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              aria-label="Alternar tema"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-900 dark:text-zinc-50"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:hidden overflow-hidden"
          >
            <div className="container-custom py-10 flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-primary-dark transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <a
                  href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto w-full max-w-[240px] px-6 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-bold rounded-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  Falar pelo WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
