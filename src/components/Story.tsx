import { motion } from 'framer-motion';

export const Story = () => {
  return (
    <section id="philosophy" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-12">
              BORN IN <br />
              <span className="text-[#FF4D00]">THE GARAGE.</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold italic text-white/80 leading-relaxed mb-8">
              We don't believe in shortcuts. We believe in the grit, the sweat, and the unwavering dedication of those who refuse to settle.
            </p>
            <p className="text-white/50 leading-relaxed max-w-lg mb-12">
              Fit Garage was founded on a single principle: to provide the most powerful training environment in Raichur. We provide the tools; you provide the fire. This is where athletes are made.
            </p>
            
            <div className="flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 w-fit">
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF4D00] mb-2">Established</span>
                <span className="text-4xl font-black italic">2023</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">The Raichur Standard</p>
                <p className="text-sm font-bold italic uppercase">Elite Performance Center</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Premium Logo Seal */}
            <div className="relative group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border-2 border-dashed border-[#FF4D00]/20 rounded-full"
              />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#FF4D00]/30 shadow-[0_0_80px_rgba(255,77,0,0.2)] bg-black">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Fit Garage Official Logo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -right-6 md:-top-8 md:-right-8 w-24 h-24 md:w-32 md:h-32 bg-[#FF4D00] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-black z-10"
              >
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/70">EST.</span>
                <span className="text-xl md:text-2xl font-black italic text-white">2023</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
