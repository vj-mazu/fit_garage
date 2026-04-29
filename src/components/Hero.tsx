import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Offset for navbar
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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
        {/* Modern Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
        <div className="absolute inset-0 bg-black/20 md:bg-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.3em] text-white/80 mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF4D00] animate-pulse" />
            Raichur's Elite Training Hub
          </motion.div>

          <h1 className="text-[12vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter mb-12 italic uppercase">
            UNLEASH <br />
            <span className="text-gradient">THE BEAST.</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed mb-16">
            Engineered for performance. Built for the dedicated. <br />
            Experience the most powerful training environment in the city.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => scrollToSection('#membership')}
              className="btn-cult btn-cult-primary flex items-center gap-2 group w-full sm:w-auto"
            >
              GET STARTED NOW <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => scrollToSection('#facility')}
              className="btn-cult btn-cult-outline flex items-center gap-2 w-full sm:w-auto"
            >
              <Play size={16} fill="currentColor" /> EXPLORE THE GARAGE
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Overlay */}
      <div className="absolute bottom-12 left-0 w-full px-12 hidden lg:flex items-end justify-between">
        <div className="flex gap-16">
          <div>
            <p className="text-3xl font-black italic">4.9/5</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Elite Rating</p>
          </div>
          <div>
            <p className="text-3xl font-black italic">100%</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Dedication</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Location</p>
          <p className="text-lg font-black italic">BRESTHWARPET, RAICHUR</p>
        </div>
      </div>
    </section>
  );
};
