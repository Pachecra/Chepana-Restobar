import React from 'react';
import { CreditCard, Truck, UtensilsCrossed, Clock, Sun } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-24 bg-dark-wood text-white relative overflow-hidden">
        {/* Abstract Background Element - Tropical feel */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 100% 0%, #2c7a7b 0%, transparent 40%), radial-gradient(circle at 0% 100%, #c05621 0%, transparent 40%)`
        }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        
        {/* Smart Features / ROI Icons */}
        <div>
          <div className="inline-block px-3 py-1 bg-venezuela-yellow/20 text-venezuela-yellow rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Deine Experience
          </div>
          <h3 className="text-4xl font-serif font-bold mb-10 text-white">
            Gut zu wissen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-turquoise/30 transition-all duration-300 group">
              <div className="bg-turquoise/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <CreditCard className="w-6 h-6 text-turquoise" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-lg">Kartenzahlung</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Wir akzeptieren alle gängigen Kreditkarten & Mobile Pay.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-terracotta/30 transition-all duration-300 group">
              <div className="bg-terracotta/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Sun className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-lg">Außenterrasse</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Latino-Flair unter freiem Himmel genießen.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-venezuela-yellow/30 transition-all duration-300 group">
              <div className="bg-venezuela-yellow/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <UtensilsCrossed className="w-6 h-6 text-venezuela-yellow" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-lg">To-Go</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Arepas & Co. auch bequem für unterwegs.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300 group">
              <div className="bg-green-500/20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-lg">Lieferung</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Wir bringen den Geschmack Venezuelas zu dir.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-white text-dark-wood p-8 md:p-10 rounded-2xl shadow-2xl relative border-4 border-white/10 overflow-hidden transform hover:-translate-y-1 transition-transform duration-500">
            {/* Top accent */}
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-venezuela-yellow via-venezuela-blue to-venezuela-red"></div>
          
          <div className="flex items-center gap-4 mb-8 pt-2">
            <div className="bg-terracotta/10 p-3 rounded-full">
                <Clock className="w-8 h-8 text-terracotta" />
            </div>
            <div>
                <h3 className="text-3xl font-serif font-bold">Öffnungszeiten</h3>
                <p className="text-gray-500 text-sm">Komm vorbei und bleib ein bisschen.</p>
            </div>
          </div>
          
          <table className="w-full text-base">
            <tbody className="divide-y divide-gray-100">
              <tr className="group">
                <td className="py-4 font-bold text-gray-400 group-hover:text-dark-wood transition-colors">Montag</td>
                <td className="py-4 text-right font-medium text-gray-400">Ruhetag</td>
              </tr>
              <tr className="group">
                <td className="py-4 font-bold text-gray-600 group-hover:text-dark-wood transition-colors">Dienstag - Donnerstag</td>
                <td className="py-4 text-right font-bold text-dark-wood">17:00 - 23:00</td>
              </tr>
              <tr className="bg-venezuela-yellow/10 -mx-6 px-6 rounded-lg relative overflow-hidden">
                <td className="py-4 pl-4 font-bold text-dark-wood relative z-10">Freitag</td>
                <td className="py-4 pr-4 text-right font-black text-terracotta text-lg relative z-10">17:00 - 02:00</td>
                {/* Highlight strip */}
                <td className="absolute left-0 top-0 bottom-0 w-1 bg-venezuela-yellow"></td>
              </tr>
              <tr className="bg-venezuela-yellow/10 -mx-6 px-6 rounded-lg relative mt-2 block sm:table-row">
                 {/* Adding margin via pseudo element or wrapper in table is hard, handled by design */}
                <td className="py-4 pl-4 font-bold text-dark-wood">Samstag</td>
                <td className="py-4 pr-4 text-right font-black text-terracotta text-lg">13:30 - 02:00</td>
                 <td className="absolute left-0 top-0 bottom-0 w-1 bg-venezuela-yellow"></td>
              </tr>
              <tr className="group">
                <td className="py-4 font-bold text-gray-600 group-hover:text-dark-wood transition-colors">Sonntag</td>
                <td className="py-4 text-right font-bold text-dark-wood">13:30 - 22:00</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-10 text-center">
             <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-turquoise hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
             >
                Tisch reservieren
             </a>
             <p className="text-xs text-gray-400 mt-3 flex justify-center items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Hohe Nachfrage am Wochenende
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;