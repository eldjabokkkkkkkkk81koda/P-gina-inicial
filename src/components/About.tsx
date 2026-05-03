import { motion } from "motion/react";
import { Maximize2, Shield } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-transparent relative z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(107,13,26,0.15)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 space-y-8 lg:space-y-10"
        >
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3 text-gold/80 mb-4">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-body tracking-[0.3em] uppercase">Nossa Missão</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 tracking-tight leading-[1]">
              NOSSO PROPÓSITO
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-wine to-transparent"></div>
          </div>
          
          <div className="space-y-6 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-wine/50 via-wine/10 to-transparent hidden md:block" />
            <p className="text-xl md:text-2xl text-gray-light/90 font-light leading-relaxed">
              Somos <strong className="text-white font-medium">Os Vingadores, Paz e Justiça</strong>. Inspirados pela força da Fênix, unimos corações e ações para promover os Objetivos de Desenvolvimento Sustentável.
            </p>
            <p className="text-lg md:text-xl text-gray-light/60 font-light leading-relaxed">
              Nosso foco é o <strong className="text-gold font-medium">ODS 18 – Igualdade Étnico-Racial</strong>. Cada desafio é uma oportunidade de combater o racismo, fortalecer a justiça e impactar positivamente o mundo ao nosso redor.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
           className="flex-1 w-full relative flex items-center justify-center lg:justify-end"
        >
           {/* Photo Frame Container */}
           <div className="relative w-full max-w-2xl mx-auto aspect-video flex items-center justify-center group lg:ml-auto">
             {/* Dynamic Glow */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.3)_0%,_transparent_70%)] rounded-[2rem] transition-colors duration-700 pointer-events-none group-hover:bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.4)_0%,_transparent_70%)]"></div>

             {/* Outermost styling ring */}
             <div className="absolute inset-2 md:inset-4 border border-white/5 rounded-[1.5rem] md:rounded-[2rem] rotate-2 transition-transform duration-700 group-hover:rotate-3"></div>
             
             {/* Middle styling ring */}
             <div className="absolute inset-4 md:inset-8 border border-gold/20 rounded-[1.5rem] md:rounded-[2rem] -rotate-2 transition-transform duration-700 group-hover:-rotate-3"></div>

             {/* Inner frame containing content */}
             <div className="absolute inset-6 md:inset-10 border border-white/10 bg-[#0a0a0a] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden flex flex-col items-center justify-center gap-4 md:gap-6 transition-all duration-700 group-hover:scale-[1.03] group-hover:border-wine/30 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                
                {/* Decorative corner accents */}
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/30" />
                <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/30" />
                <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/30" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/30" />

                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-wine flex items-center justify-center bg-black shadow-[0_0_20px_rgba(107,13,26,0.5)] group-hover:scale-110 transition-transform duration-500">
                  <Maximize2 className="w-5 h-5 md:w-6 md:h-6 text-gold/80" strokeWidth={1.5} />
                </div>
                
                <div className="text-center space-y-1 md:space-y-2">
                  <h3 className="text-white font-display text-base md:text-lg tracking-widest">FOTO DA TURMA</h3>
                  <p className="text-white/40 font-body uppercase tracking-[0.2em] text-[10px]">Em breve</p>
                </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
