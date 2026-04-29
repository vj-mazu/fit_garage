import { motion } from 'framer-motion';

const images = [
  { src: "/assets/gym-1.png", size: "col-span-1 row-span-1 md:col-span-2 md:row-span-2", title: "Strength Lab" },
  { src: "/assets/gym-2.png", size: "col-span-1 row-span-1", title: "Precision" },
  { src: "/assets/gym-3.png", size: "col-span-1 row-span-1", title: "Cardio Bay" },
  { src: "/assets/gym-4.png", size: "col-span-1 row-span-1 md:col-span-2", title: "Performance" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#FF4D00]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00]">Visual Proof</span>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
            THE <br />
            <span className="text-white/20">ARENA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl md:rounded-[2.5rem] overflow-hidden group ${img.size}`}
            >
              <img 
                src={img.src} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" 
                alt={img.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              <div className="absolute bottom-4 left-6 md:bottom-8 md:left-10">
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00] mb-1">{img.title}</p>
                <p className="text-sm md:text-xl font-black italic uppercase tracking-tighter">FIT GARAGE HUB</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
