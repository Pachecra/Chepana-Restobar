import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://duyt4h9nfnj50.cloudfront.net/resized/1541391296675-w2880-2c.jpg" 
          alt="Chepana Restobar Atmosphere" 
          className="w-full h-full object-cover animate-pan-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-wood/95 via-dark-wood/40 to-black/30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <span className="text-venezuela-yellow font-bold tracking-[0.2em] uppercase mb-6 bg-black/40 backdrop-blur-md px-6 py-2 rounded-sm border-l-4 border-venezuela-red shadow-lg">
          Heidelberg meets Caracas
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
          Chepana <span className="text-transparent bg-clip-text bg-gradient-to-r from-venezuela-yellow via-white to-white">Restobar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mb-10 font-light leading-relaxed drop-shadow-md">
          Authentische Latino-Küche im Herzen Heidelbergs. 
          <br/><span className="italic text-terracotta-light">Erlebe den Rhythmus Venezuelas.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#menu" className="bg-terracotta hover:bg-terracotta-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Speisekarte ansehen
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:border-white transform hover:-translate-y-1"
          >
            Tisch reservieren
          </a>
        </div>
      </div>
      
      {/* Decorative Venezuelan Flag Border at bottom */}
      <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-venezuela-yellow via-venezuela-blue to-venezuela-red shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"></div>
    </section>
  );
};

export default Hero;