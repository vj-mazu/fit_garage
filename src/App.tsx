import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Reels } from './components/Reels';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Prevent background scrolling when privacy policy is open
  useEffect(() => {
    if (showPrivacy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showPrivacy]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4D00] selection:text-white overflow-x-hidden w-full relative">
      <Preloader />
      
      <AnimatePresence>
        {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Story />
        <Features />
        <Gallery />
        <Reviews />
        <Reels />
        <Membership />
      </main>
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
    </div>
  );
}

export default App;
