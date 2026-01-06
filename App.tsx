import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import StickyReservation from './components/StickyReservation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-dark-wood selection:bg-terracotta selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <MenuSection />
        <InfoSection />
        <SocialFeed />
      </main>

      <Footer />
      <StickyReservation />
    </div>
  );
};

export default App;