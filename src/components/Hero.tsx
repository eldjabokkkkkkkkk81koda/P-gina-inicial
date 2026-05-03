import { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [init, setInit] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background with animated breathing radial gradient */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.5)_0%,_transparent_70%)] pointer-events-none" 
      />

      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 mask-image-radial z-0 pointer-events-none"
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            particles: {
              number: { value: 70 },
              color: { value: ["#6B0D1A", "#8B1525", "#ffffff", "#DAAF37"] },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: { enable: true, speed: 0.5, sync: false }
              },
              size: {
                value: { min: 0.5, max: 3 },
                animation: { enable: true, speed: 1.5, sync: false }
              },
              move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full pt-16">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
           className="mb-8 relative"
        >
          {/* Intense glow behind phoenix */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(107,13,26,0.4)_0%,_transparent_60%)] rounded-full pointer-events-none" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img src="https://look.jmgbb.com/images/N_-MuRU_FG.png" alt="Logo" className="w-48 h-48 sm:w-64 sm:h-64 object-contain" referrerPolicy="no-referrer" />
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col items-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#8B1525] to-[#6B0D1A] mb-2 font-display font-medium tracking-tighter leading-[0.9]"
          >
            OS VINGADORES
          </motion.h1>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-px bg-gradient-to-r from-transparent via-wine to-transparent mb-6"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="text-sm sm:text-lg md:text-xl font-light tracking-[0.6em] text-gray-light mb-10 opacity-80 uppercase"
          >
            Paz e Justiça
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-full justify-center items-center mt-6"
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex flex-col items-center justify-center text-gray-light/60 hover:text-white transition-colors duration-500 font-body font-light text-xs sm:text-sm tracking-[0.3em] uppercase py-2 cursor-pointer"
          >
            <span className="mb-2">Nossa Jornada</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-wine/80 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .mask-image-radial {
          mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
        }
      `}</style>
    </section>
  );
}
