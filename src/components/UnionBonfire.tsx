import { motion } from "motion/react";
import { Flame } from "lucide-react";
import { useState, MouseEvent } from "react";

export default function UnionBonfire() {
  const [isHeatingUp, setIsHeatingUp] = useState(false);

  // Link provisionório para facilitar a substituição posterior
  const redirectLink = "https://fogueira.vingadores.workers.dev/"; 

  const handleIgnite = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHeatingUp) return;
    
    setIsHeatingUp(true);

    // O botão fica esquentando por 2.5 segundos
    setTimeout(() => {
      if (redirectLink.length > 2) {
        window.open(redirectLink, "_blank", "noopener,noreferrer");
      } else {
        alert("O link da Fogueira da União será adicionado aqui em breve!");
      }
      setIsHeatingUp(false);
    }, 2500);
  };

  return (
    <section id="fogueira-da-uniao" className="relative w-full py-32 bg-transparent flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <motion.div 
         animate={{ opacity: isHeatingUp ? [0.3, 0.6, 0.8] : [0.3, 0.5, 0.3] }}
         transition={
           isHeatingUp ? { duration: 2.5, ease: "easeIn" } : { 
             duration: 4, 
             repeat: Infinity, 
             ease: "easeInOut" 
           }
         }
         className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none rounded-full transition-colors duration-1000 ${
           isHeatingUp ? 'bg-[radial-gradient(circle_at_center,_rgba(218,175,55,0.3)_0%,_rgba(231,76,96,0.1)_40%,_rgba(0,0,0,0)_70%)]' : 'bg-[radial-gradient(circle_at_center,_rgba(218,175,55,0.1)_0%,_rgba(107,13,26,0.05)_40%,_rgba(0,0,0,0)_70%)]'
         }`} 
      />

      <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-xs sm:text-sm font-light tracking-[0.4em] text-gold/80 mb-6 uppercase"
        >
          Tradição e Força
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl font-display font-light text-white mb-8"
        >
          A Fogueira da <span className="text-wine font-medium">União</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 font-body font-light text-sm md:text-base leading-relaxed mb-12"
        >
          Um espaço criado para fortalecer nossos laços, aquecer nossos propósitos e celebrar a união de todos que fazem parte desta jornada. A chama só se mantém viva quando estamos juntos — e quando cada origem é respeitada, cada voz é valorizada e a igualdade é promovida.
        </motion.p>

        <div className="relative group hover:cursor-pointer pb-8">
          {/* Base Glow */}
          <motion.div
             animate={isHeatingUp ? { scale: [1, 1.2, 1.4], opacity: [0.2, 0.4, 0] } : { scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={isHeatingUp ? { duration: 1, repeat: Infinity } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(218,175,55,0.4)_0%,_transparent_70%)] pointer-events-none"
          />
          {/* The Bonfire Button */}
          <a
            href={redirectLink}
            onClick={handleIgnite}
            className={`relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border bg-[#050505] transition-all duration-700 pointer-events-auto z-10 block mx-auto ${
              isHeatingUp 
                ? 'border-gold/80 scale-105' 
                : 'border-wine/30 hover:border-gold/50 hover:scale-105'
            }`}
          >
            <Flame 
              className={`w-10 h-10 md:w-14 md:h-14 transition-all duration-500 relative z-10 block m-auto ${
                isHeatingUp ? 'text-white' : 'text-white/70 group-hover:text-gold'
              }`} 
              strokeWidth={isHeatingUp ? 2 : 1.5} 
            />
            
            <span className="sr-only">Acessar a Fogueira da União</span>
          </a>
        </div>

        <motion.div
           animate={{ opacity: isHeatingUp ? [0.5, 1, 0.5] : 1 }}
           transition={{ duration: 1, repeat: isHeatingUp ? Infinity : 0 }}
           className={`mt-4 text-xs md:text-sm tracking-widest uppercase font-light pointer-events-none transition-colors duration-500 z-10 ${
             isHeatingUp ? 'text-gold' : 'text-gray-500 group-hover:text-gold/80'
           }`}
        >
          {isHeatingUp ? "Esquentando a chama..." : "Acender a Chama"}
        </motion.div>

      </div>
    </section>
  );
}
