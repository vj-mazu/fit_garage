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
            <p className="text-white/50 leading-relaxed max-w-lg">
              Fit Garage was founded on a single principle: to provide the most powerful training environment in Raichur. We provide the tools; you provide the fire. This is where athletes are made.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square"
          >
            <img 
              src="/assets/logo.jpg" 
              alt="Fit Garage Official Logo" 
              className="w-full h-full object-cover p-12 bg-white/5 hover:scale-105 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-4xl font-black italic tracking-tighter">SINCE 2023</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF4D00]">The Standard of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
