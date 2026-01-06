import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import InfoSection from './components/InfoSection';
import SocialFeed from './components/SocialFeed';
import Footer from './components/footer'; // Pfad korrigiert auf kleingeschriebenes 'footer'
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

        {/* Google Maps Sektion für besseren ROI & Kundenführung */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-terracotta">
              ¡Bienvenidos! Besuchen Sie uns in Heidelberg
            </h2>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-latino-gold">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x4797c11d5e3c793d%3A0x6b4b4b4b4b4b4b4b!2sFloringasse%204%2C%2069117%20Heidelberg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Chepana Restobar Standort"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Floringasse 4, 69117 Heidelberg
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyReservation />
    </div>
  );
};

export default App;