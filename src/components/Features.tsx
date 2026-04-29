import { motion } from 'framer-motion';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';

const centers = [
  {
    title: "Strength Zone",
    desc: "Elite barbell & plate-loaded equipment for absolute power.",
    img: "/assets/gym-1.png",
    icon: <Shield />,
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Performance Cardio",
    desc: "Next-gen treadmills and endurance tech.",
    img: "/assets/gym-2.png",
    icon: <Zap />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "The Arena",
    desc: "A massive open floor for functional & combat training.",
    img: "/assets/gym-4.png",
    icon: <Target />,
    color: "from-red-500/20 to-transparent"
  }
];

export const Features = () => {
  return (
    <section id="facility" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8">
              THE <br />
              <span className="text-[#FF4D00]">FACILITY.</span>
            </h2>
            <p className="text-white/50 text-lg font-medium leading-relaxed">
              Equipped with high-quality, well-maintained machinery including specialized cardio zones and heavy weights. Every square inch is optimized for your peak performance.
            </p>
          </div>
          <button className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors group">
            View All Amenities <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {centers.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden bg-black border border-white/5"
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700" 
                alt={item.title}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-black/40 to-black/80`} />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/20 border border-[#FF4D00]/30 flex items-center justify-center text-[#FF4D00] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black italic uppercase mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
                <div className="h-1 w-0 bg-[#FF4D00] group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
