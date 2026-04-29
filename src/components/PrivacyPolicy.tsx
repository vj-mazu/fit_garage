import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const PrivacyPolicy = ({ onClose }: { onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-md overflow-y-auto"
    >
      <div className="min-h-screen py-10 md:py-20 px-4 md:px-12 flex justify-center items-start">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#050505] border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 max-w-4xl w-full relative shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-[#FF4D00] transition-colors text-white group"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white mb-2 md:mb-4">
              PRIVACY <br className="md:hidden" /> <span className="text-[#FF4D00]">POLICY</span>
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Effective Date: October 2023</p>
          </div>

          <div className="space-y-8 text-sm md:text-base text-white/60 font-medium leading-relaxed">
            <section>
              <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white mb-3">1. Information Collection</h3>
              <p>Fit Garage Gym & Fitness Centre ("we", "our", or "us") collects personal information when you inquire about memberships, register at our facility, or interact with our digital platforms. This includes your name, contact details, emergency contacts, and health/fitness background necessary for safe and effective training.</p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white mb-3">2. Use of Information</h3>
              <p>Your data is strictly used for membership management, providing personalized coaching, emergency protocols, and communicating facility updates. We do not sell, rent, or trade your personal information to any external third parties or marketing agencies.</p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white mb-3">3. Data Security</h3>
              <p>We implement industry-standard physical and digital security measures to protect your personal information. Only authorized Fit Garage management and your assigned coaches have access to your data, which is stored securely.</p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white mb-3">4. Media & Photography</h3>
              <p>As a highly active and dynamic fitness environment, we occasionally capture photography and videography for promotional use on our social media channels (e.g., Instagram reels and posts). If you prefer not to be featured in background shots, please notify our management team at the front desk.</p>
            </section>

            <section>
              <h3 className="text-lg md:text-xl font-black italic uppercase tracking-tight text-white mb-3">5. Contact & Rights</h3>
              <p>You have the right to request access to or deletion of your personal data stored with us. If you have questions regarding this Privacy Policy or your data, please contact us directly at our facility in Bresthwarpet, Raichur or reach out via our official WhatsApp support channel.</p>
            </section>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 flex justify-center md:justify-start">
            <button 
              onClick={onClose}
              className="w-full md:w-auto px-10 py-4 rounded-xl bg-[#FF4D00] text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
            >
              Acknowledge & Close
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
