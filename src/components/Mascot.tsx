import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { Flame } from "lucide-react";

const phrase = "Das cinzas, o renascimento. Do fogo, a inspiração. A faísca que ilumina a justiça.";

export default function Mascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const words = phrase.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="mascot" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-transparent relative flex flex-col items-center justify-center min-h-[50vh] overflow-hidden">
      {/* Intense glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle_at_center,_rgba(211,47,68,0.15)_0%,_transparent_60%)] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="mb-8 relative z-10"
      >
        <div className="p-4 rounded-full border border-wine/30 bg-wine/30 relative">
           <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-wine"></div>
           <Flame className="w-8 h-8 text-[#E74C60]" strokeWidth={1.5} />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10 text-center" ref={containerRef}>
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-display font-light leading-[1.2] md:leading-[1.1] tracking-tight pointer-events-none flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 md:gap-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, index) => {
            const lowerWord = word.toLowerCase();
            const isHighlight = lowerWord.includes("renascimento") || lowerWord.includes("inspiração") || lowerWord.includes("justiça") || lowerWord.includes("cinzas") || lowerWord.includes("fogo") || lowerWord.includes("faísca");
            
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={
                  isHighlight 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#E74C60] to-[#DAAF37] font-medium" 
                    : "text-white/80"
                }
              >
                {word}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
      
      {/* Embers overlay below text */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-wine/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
}

