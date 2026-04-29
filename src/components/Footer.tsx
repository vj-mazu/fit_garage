import { Instagram, MapPin, MessageCircle } from 'lucide-react';

export const Footer = ({ onPrivacyClick }: { onPrivacyClick?: () => void }) => {
  return (
    <footer id="footer" className="bg-black pt-32 pb-16 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-4 mb-12">
              <img src="/assets/logo.jpg" alt="Fit Garage Logo" className="w-16 h-16 rounded-full border border-white/20 object-cover" />
              <span className="text-4xl font-black tracking-tighter uppercase italic text-white">
                FIT<span className="text-[#FF4D00]">GARAGE</span>
              </span>
            </a>
            <p className="text-white/50 text-lg font-medium leading-relaxed max-w-sm mb-12">
              Raichur's premier high-energy training destination. Join a community of driven individuals and transform your limits with professional atmosphere.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/fitgarage69" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FF4D00] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919916245333" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="https://maps.app.goo.gl/onckoFAWopsyDwBEA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#4285F4] transition-all duration-300"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00] mb-8">Navigation</h3>
              <ul className="space-y-6">
                {['Philosophy', 'The Centers', 'Membership', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-white/40 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00] mb-8">Centers</h3>
              <ul className="space-y-6 text-white/40 font-bold text-sm uppercase tracking-widest">
                <li>Strength Zone</li>
                <li>Cardio Studio</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#FF4D00] mb-8">Facility</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Operating Hours</p>
                  <p className="text-sm font-black italic uppercase mb-1">Mon - Sat: 5:00 AM - 9:00 PM</p>
                  <p className="text-sm font-black italic uppercase">Sunday: 5:30 AM - 12:00 AM</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Location</p>
                  <p className="text-sm font-bold text-white/40 leading-relaxed uppercase tracking-widest">
                    Above FirstCry, Bresthwarpet, Raichur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
            Fit Garage Elite Performance Center © 2026
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-white/20">
            <button onClick={onPrivacyClick} className="hover:text-white uppercase tracking-widest transition-colors">Privacy</button>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
