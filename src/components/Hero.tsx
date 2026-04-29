import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center pb-20 md:pb-32 overflow-hidden bg-black w-full">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 opacity-60 md:opacity-70 transition-opacity duration-1000"
        >
          <source src="/assets/hero-bg-v2.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent md:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 mt-16 md:mt-0">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-8 mx-auto md:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
              Raichur's Elite Training Hub
            </motion.div>

            <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-8 italic uppercase text-white">
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                UNLEASH
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#FF4D00] block"
              >
                THE BEAST.
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-2xl text-white/60 max-w-xl font-medium leading-relaxed mb-12 italic mx-auto md:mx-0"
            >
              Engineered for performance. Built for the dedicated. <br className="hidden md:block" />
              Experience the city's most powerful training floor.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-6 w-full sm:w-auto"
            >
              <button 
                onClick={() => scrollToSection('#membership')}
                className="btn-cult btn-cult-primary flex items-center justify-center gap-2 group text-xs md:text-sm w-full sm:w-auto"
              >
                GET STARTED NOW <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => scrollToSection('#facility')}
                className="btn-cult btn-cult-outline flex items-center justify-center gap-2 text-xs md:text-sm w-full sm:w-auto"
              >
                <Play size={16} fill="currentColor" /> EXPLORE THE GARAGE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Stats Overlay */}
      <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 flex flex-row items-end justify-between gap-4">
        <div className="flex gap-6 md:gap-12">
          <div>
            <p className="text-xl md:text-3xl font-black italic">4.9/5</p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">Elite Rating</p>
          </div>
          <div>
            <p className="text-xl md:text-3xl font-black italic">100%</p>
            <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold">Dedication</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Location</p>
          <p className="text-[10px] md:text-lg font-black italic uppercase">BRESTHWARPET, RAICHUR</p>
        </div>
      </div>
    </section>
  );
};
