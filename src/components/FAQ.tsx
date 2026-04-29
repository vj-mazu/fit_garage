import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Why Choose Fit Garage Over Others?',
    answer: 'Fit Garage is Raichur’s premier physical fitness facility. With a 4.9-star rating, we offer a level of professional coaching, high-end equipment, and motivating atmosphere that local alternatives cannot match.',
  },
  {
    question: 'When Are The Best Training Times?',
    answer: 'Our facility is open from 5:00 AM to 9:00 PM. For a quieter session, we recommend late mornings or early afternoons. Peak energy occurs between 6:00 AM – 9:00 AM and 6:00 PM – 8:00 PM.',
  },
  {
    question: 'What Kind Of Equipment Do You Provide?',
    answer: 'We feature top-of-the-line, professional-grade equipment that is rigorously maintained for both cleanliness and performance. Our inventory includes specialized strength training gear and elite cardio machines.',
  },
  {
    question: 'Are Personal Trainers Available?',
    answer: 'Yes, we have multiple "amazing" and "experienced" trainers on-site who assist with specific goals—from bodybuilding to athletic endurance. Our staff takes a genuine interest in every member’s progress.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-white/30 mb-6"
          >
            Insights & Information
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            Got <span className="text-white/20">Questions?</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'bg-white/10 border-white/20' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-white/80 transition-colors">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-all duration-300 ${
                  openIndex === index ? 'bg-white text-black rotate-0' : 'bg-white/10 text-white rotate-180'
                }`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-8 text-white/60 text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
