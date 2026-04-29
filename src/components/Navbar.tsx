import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Facility', href: '#facility' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Community', href: '#community' },
  { name: 'Plans', href: '#membership' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Official Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-3 group">
          <img src="/assets/logo.jpg" alt="Fit Garage Logo" className="w-12 h-12 rounded-full border border-white/20 object-cover" />
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white hidden sm:block">
            FIT<span className="text-[#FF4D00]">GARAGE</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#FF4D00] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <a 
            href="https://wa.me/919916245333" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-all duration-300 group"
          >
            JOIN NOW <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 bg-white/10 rounded-xl text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-12 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-5xl font-black italic uppercase tracking-tighter text-white hover:text-[#FF4D00]"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/919916245333"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn-cult btn-cult-primary mt-12 w-full text-center"
              >
                JOIN THE CLUB
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
