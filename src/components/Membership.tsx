import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const corePlans = [
  { name: "One Year Warrior", price: "₹20,000", duration: "365 Days", desc: "The ultimate long-term commitment to your legacy.", tag: "Best Value" },
  { name: "6 Months Shape-Shift", price: "₹13,000", duration: "180 Days", desc: "A half-year journey to a new you.", tag: "Popular" },
  { name: "Student Plus", price: "₹6,000", duration: "120 Days", desc: "Exclusively for local students to stay fit.", tag: "Student's Choice" },
  { name: "Quarter Starter", price: "₹7,000", duration: "90 Days", desc: "Build a strong foundation in 3 months." },
  { name: "Majestic Monthly", price: "₹2,700", duration: "30 Days", desc: "Flexible monthly access to elite facilities." },
  { name: "One Day Quick Pulse", price: "₹350", duration: "1 Day", desc: "Experience the standard with a single session." },
];

const specializedPlans = [
  { name: "PT Prime", price: "₹8,000", period: "/month", type: "1-on-1 Elite Coaching" },
  { name: "Standard PT", price: "₹7,000", period: "/month", type: "Professional Coaching" },
  { name: "PT Alternate Days", price: "₹5,000", period: "/month", type: "Semi-Flexible PT" },
  { name: "PT Group", price: "₹3,000", period: "/month", type: "Community Training" },
  { name: "FIT YOGA", price: "₹2,000", period: "/month", type: "Mind & Body Balance" },
  { name: "Dance & Aerobics", price: "₹2,000", period: "/month", type: "Dance FiGA Dance" },
  { name: "Kid's Dance Fitness", price: "₹1,499", period: "/month", type: "Youth Movement" },
  { name: "FOA (Older Adults)", price: "₹2,500", period: "/month", type: "Senior Fitness Care" },
];

export const Membership = () => {
  return (
    <section id="membership" className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-[2px] bg-[#FF4D00]" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00]">Access Tiers</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter mb-12">
            SELECT YOUR <br />
            <span className="text-white/20">SUBSCRIPTION.</span>
          </h2>
        </div>

        {/* Core Memberships */}
        <div className="mb-32">
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-12 flex items-center gap-4">
            Core Membership Packages <div className="flex-1 h-[1px] bg-white/10" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#FF4D00]/50 transition-all duration-500 hover:bg-white/[0.08]"
              >
                {plan.tag && (
                  <span className="absolute top-8 right-8 text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-[#FF4D00] rounded-full text-white">
                    {plan.tag}
                  </span>
                )}
                <h4 className="text-xl font-black italic uppercase tracking-tight mb-4 group-hover:text-[#FF4D00] transition-colors">{plan.name}</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black italic tracking-tighter">{plan.price}</span>
                  <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">/ {plan.duration}</span>
                </div>
                <p className="text-white/50 text-sm font-medium mb-12 leading-relaxed">{plan.desc}</p>
                <a 
                  href={`https://wa.me/919916245333?text=Hi, I am interested in the ${plan.name} plan at Fit Garage.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 rounded-xl bg-white/10 border border-white/10 text-[10px] text-center font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Join The Warrior Path
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Training */}
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 mb-12 flex items-center gap-4">
            Specialized Training & Classes <div className="flex-1 h-[1px] bg-white/10" />
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#FF4D00]/30 transition-all group cursor-pointer"
                onClick={() => window.open(`https://wa.me/919916245333?text=Hi, I am interested in ${plan.name} training.`, '_blank')}
              >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF4D00] mb-2">{plan.type}</p>
                <h5 className="text-lg font-black italic uppercase mb-6 tracking-tight">{plan.name}</h5>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-black italic">{plan.price}</span>
                  <span className="text-white/30 text-[10px] font-bold uppercase">{plan.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Proof */}
        <div className="mt-32 p-12 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-5xl font-black italic text-[#FF4D00]">4.9 ★</span>
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Global Excellence Rating</span>
            </div>
            <div className="w-[1px] h-16 bg-white/10" />
            <p className="text-lg font-medium text-white/60 italic max-w-md">
              "Members frequently praise the motivating trainers and the professional atmosphere."
            </p>
          </div>
          <a 
            href="https://wa.me/919916245333"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-full bg-[#FF4D00] text-white font-black text-xs uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,77,0,0.4)] transition-all"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};
