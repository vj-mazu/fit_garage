import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Abhinav Warad",
    role: "Member",
    text: "One of the well equipped gym with professional Trainers and staff in raichur. Well maintained and best in buisness."
  },
  {
    name: "Sachin kumar",
    role: "Member",
    text: "Hands down, best choice I’ve made training at Fit Garage Gym. Very friendly team... All the trainers are super nice and take an interest in you no matter what fitness level you’re at. Best facility around the Raichur."
  },
  {
    name: "ASHWIN KASHYAP",
    role: "Member",
    text: "The trainers are amazing and always go above and beyond to help me reach my fitness goals !! The equipments are top of the line and always clean and well maintained!! A gym with best equipments and experienced trainers is a bonus!!"
  },
  {
    name: "Pavan Gouda",
    role: "Member",
    text: "Best gym in Raichur Trainers, also good equipment, also good and Neatness."
  },
  {
    name: "Maqsood Hassan",
    role: "Member",
    text: "GYM equipments are very good apart from this the atmosphere of the gym is too cool and trainers are strict and motivational."
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8">
              VOICE OF <br />
              <span className="text-[#FF4D00]">THE BEASTS.</span>
            </h2>
            <p className="text-white/40 text-lg font-medium leading-relaxed">
              Don't just take our word for it. Hear from the dedicated individuals who transform their lives at Fit Garage every day.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-5xl font-black italic text-[#FF4D00]">4.9</p>
            <div className="flex gap-1 text-orange-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-black">91+ Google Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col justify-between hover:border-[#FF4D00]/30 transition-all duration-500 group"
            >
              <Quote className="absolute top-8 right-10 text-white/5 group-hover:text-[#FF4D00]/10 transition-colors" size={60} />
              <div className="relative z-10">
                <div className="flex gap-1 text-[#FF4D00] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-white/70 text-lg font-medium leading-relaxed mb-12 italic">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF4D00]/20 flex items-center justify-center text-[#FF4D00] font-black italic border border-[#FF4D00]/30">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-black italic uppercase text-white">{review.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
