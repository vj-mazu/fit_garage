import { motion } from 'framer-motion';

const images = [
  { src: "/assets/gym-1.png", title: "Strength Zone" },
  { src: "/assets/gym-2.png", title: "Cardio Bay" },
  { src: "/assets/gym-3.png", title: "Dumbbell Rack" },
  { src: "/assets/gym-4.png", title: "Performance" },
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070", title: "Elite Facility" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-8">
            VISUAL <br />
            <span className="text-[#FF4D00]">POWER.</span>
          </h2>
          <p className="text-white/50 text-lg font-medium max-w-xl">
            High-definition intensity. Experience the elite atmosphere that separates Fit Garage from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden group border border-white/10"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8">
                <p className="text-xl font-black italic uppercase text-white">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
