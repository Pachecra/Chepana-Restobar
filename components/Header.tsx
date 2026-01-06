import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className={`font-serif font-bold text-3xl tracking-tighter transition-colors ${isScrolled ? 'text-terracotta' : 'text-white'}`}>
          CHEPANA
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#menu" className={`text-sm font-bold uppercase tracking-widest hover:text-terracotta transition-colors ${isScrolled ? 'text-dark-wood' : 'text-white'}`}>Menü</a>
          <a href="#" className={`text-sm font-bold uppercase tracking-widest hover:text-terracotta transition-colors ${isScrolled ? 'text-dark-wood' : 'text-white'}`}>Events</a>
          <a href="#" className={`text-sm font-bold uppercase tracking-widest hover:text-terracotta transition-colors ${isScrolled ? 'text-dark-wood' : 'text-white'}`}>Über uns</a>
          
          {/* Sticky ROI Button -> Calendly */}
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-8 py-3 rounded-full font-bold transition-all shadow-lg transform hover:scale-105 hover:shadow-xl ${
            isScrolled 
              ? 'bg-terracotta text-white hover:bg-terracotta-dark' 
              : 'bg-white text-dark-wood hover:bg-gray-100'
          }`}>
            Reservieren
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-terracotta transition-transform active:scale-95"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={`w-8 h-8 ${isScrolled ? 'text-dark-wood' : 'text-white'}`} /> : <Menu className={`w-8 h-8 ${isScrolled ? 'text-dark-wood' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 px-6 flex flex-col gap-6 border-t border-gray-100 md:hidden animate-fade-in-down">
            <a href="#menu" className="text-2xl font-serif font-bold text-dark-wood border-b border-gray-100 pb-2" onClick={() => setMobileMenuOpen(false)}>Menü</a>
            <a href="#" className="text-2xl font-serif font-bold text-dark-wood border-b border-gray-100 pb-2" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#" className="text-2xl font-serif font-bold text-dark-wood border-b border-gray-100 pb-2" onClick={() => setMobileMenuOpen(false)}>Über uns</a>
            <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-terracotta text-white py-4 text-center rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
            >
                Jetzt Reservieren
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;