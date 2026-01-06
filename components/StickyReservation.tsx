import React from 'react';
import { CalendarDays } from 'lucide-react';

const StickyReservation: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a 
        href="https://calendly.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-terracotta text-white px-6 py-4 rounded-full shadow-2xl hover:bg-terracotta-dark transition-all duration-300 animate-bounce-slow border-2 border-white/20"
      >
        <CalendarDays className="w-5 h-5" />
        <span className="font-bold">Tisch buchen</span>
      </a>
    </div>
  );
};

export default StickyReservation;