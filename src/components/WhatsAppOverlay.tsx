import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppOverlay() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5500000000000';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá Eduardo, vi seu portfólio e gostaria de um orçamento!')}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring' }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute right-full mr-4 px-3 py-1.5 bg-zinc-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
          Vamos conversar?
        </span>
        <MessageCircle size={30} fill="currentColor" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950 animate-pulse" />
      </a>
    </motion.div>
  );
}
