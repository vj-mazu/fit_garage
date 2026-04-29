import { motion } from 'framer-motion';
import { Instagram, Play } from 'lucide-react';

const reels = [
  {
    url: "https://www.instagram.com/reel/DOm6Zb6kx-T/",
    cover: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
    title: "Beginner Mistakes",
    desc: "Stop making these common errors. Learn the right technique to maximize your gains."
  },
  {
    url: "https://www.instagram.com/reel/C8CVHPYPLw0/",
    cover: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070",
    title: "Elite Atmosphere",
    desc: "A tour of the most professional training floor in Raichur."
  },
  {
    url: "https://www.instagram.com/reel/DPY_0qekxxb/",
    cover: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=2070",
    title: "Competition Prep",
    desc: "Diet and experience from the front lines of professional competition."
  }
];

export const Reels = () => {
  return (
    <section id="community" className="py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 text-[10px] font-black uppercase tracking-[0.4em] text-[#FF4D00] mb-8"
          >
            Digital Intensity
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8">
            REEL <br />
            <span className="text-white/20">MOMENTUM.</span>
          </h2>
          <p className="text-white/40 text-lg font-medium max-w-xl mx-auto italic">
            Get inspired by the grit. Follow our journey on Instagram for daily motivation and expert tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {reels.map((reel, index) => (
            <motion.a
              key={index}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[9/16] rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 block"
            >
              <img 
                src={reel.cover} 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                alt={reel.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-2xl bg-[#FF4D00] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,77,0,0.5)]">
                  <Play size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black italic uppercase mb-2 tracking-tight">{reel.title}</h3>
                <p className="text-white/50 text-sm font-medium leading-relaxed mb-6 group-hover:text-white transition-colors">
                  {reel.desc}
                </p>
                <div className="flex items-center gap-2 text-[#FF4D00] text-[10px] font-black uppercase tracking-widest">
                  <Instagram size={14} /> WATCH REEL
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
