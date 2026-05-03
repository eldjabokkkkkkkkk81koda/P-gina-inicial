import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="fixed top-6 right-6 z-50 pointer-events-auto">
        <button 
          className="text-white hover:text-gold transition-all p-3 rounded-full bg-black/60 border border-white/10 shadow-xl group"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.15)_0%,_transparent_70%)] pointer-events-none" />
            
            <button 
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-3 rounded-full bg-black/60 border border-white/10 shadow-xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center justify-center gap-10 w-full px-6 relative z-10">
              <a 
                href="https://linhagem.vingadores.workers.dev/" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-body tracking-[0.3em] text-gray-light/40 hover:text-gold transition-colors block text-center"
              >
                LINHA DO TEMPO
              </a>
              <button onClick={() => scrollTo('about')} className="text-2xl font-display tracking-[0.2em] text-gray-light hover:text-[#D32F44] transition-colors">PROPÓSITO</button>
              <button onClick={() => scrollTo('mascot')} className="text-2xl font-display tracking-[0.2em] text-gray-light hover:text-[#D32F44] transition-colors">A FÊNIX</button>
              <button onClick={() => scrollTo('fogueira-da-uniao')} className="text-2xl font-display tracking-[0.2em] text-gray-light hover:text-[#D32F44] transition-colors">FOGUEIRA</button>
              <button onClick={() => scrollTo('arrecadacao')} className="text-xl font-display font-medium tracking-[0.2em] py-3 px-8 border border-[#D32F44] text-[#D32F44] hover:bg-[#D32F44] hover:text-white transition-colors rounded-full mt-4">ARRECADAÇÃO</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
