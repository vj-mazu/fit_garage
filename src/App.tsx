import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Features } from './components/Features';
import { Membership } from './components/Membership';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Reels } from './components/Reels';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4D00] selection:text-white">
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
      <Footer />
    </div>
  );
}

export default App;
