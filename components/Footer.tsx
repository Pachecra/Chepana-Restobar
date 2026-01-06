import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Send, Loader2 } from 'lucide-react';
import { askAboutLocation } from '../services/geminiService';

const Footer: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<{text: string, mapUri?: string} | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    setLoading(true);
    setAnswer(null);
    try {
      const response = await askAboutLocation(question);
      setAnswer(response);
    } catch (err) {
      setAnswer({ text: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-stone-100 border-t-4 border-terracotta">
      {/* Upper Footer: Map & Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[450px]">
        {/* Left: Contact Info */}
        <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
          <h3 className="text-3xl font-serif font-bold text-dark-wood mb-8">Kontakt & Anfahrt</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-terracotta/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-terracotta" />
              </div>
              <div>
                <p className="font-bold text-dark-wood text-lg">Floringasse 4</p>
                <p className="text-gray-600">69117 Heidelberg, Altstadt</p>
                <a href="https://maps.google.com/?q=Chepana+Restobar+Heidelberg" target="_blank" rel="noreferrer" className="text-sm text-turquoise font-bold mt-1 inline-block hover:underline">
                  Route berechnen
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-terracotta/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-terracotta" />
              </div>
              <p className="font-medium text-gray-700">+49 6221 1234567</p>
            </div>

             <div className="flex items-center gap-4">
              <div className="bg-terracotta/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-terracotta" />
              </div>
              <p className="font-medium text-gray-700">hola@chepana.de</p>
            </div>

            <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-bold text-gray-400 uppercase mb-2">Social Media</p>
                <a href="#" className="flex items-center gap-2 text-dark-wood hover:text-terracotta transition-colors">
                    <Instagram className="w-5 h-5" />
                    <span className="font-bold">@chepanarestobar</span>
                </a>
            </div>
          </div>
        </div>

        {/* Right: Map or AI Interface */}
        <div className="relative bg-gray-200 h-[350px] md:h-full">
             {/* Fallback Static Map / Interactive area */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.636652150376!2d8.707836376916544!3d49.41295997141277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c1050fd7046f%3A0x7e70415392e624c8!2sFloringasse%204%2C%2069117%20Heidelberg!5e0!3m2!1sen!2sde!4v1709214000000!5m2!1sen!2sde" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
                title="Chepana Restobar Location"
            ></iframe>

            {/* AI Overlay for "Ask about location" */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 border border-gray-200 max-w-md mx-auto md:mx-0 md:left-4 md:right-auto">
                {!answer ? (
                    <>
                        <p className="text-xs font-bold text-terracotta uppercase mb-2">AI Concierge</p>
                        <form onSubmit={handleAsk} className="flex gap-2">
                            <input 
                                type="text" 
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Frage z.B.: Wo kann ich parken?"
                                className="flex-1 text-sm border-b border-gray-300 focus:border-terracotta outline-none bg-transparent py-1"
                            />
                            <button disabled={loading} type="submit" className="text-terracotta hover:text-turquoise disabled:opacity-50">
                                {loading ? <Loader2 className="w-5 h-5 animate-spin"/> : <Send className="w-5 h-5" />}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-sm">
                        <div className="flex justify-between items-start mb-1">
                            <span className="font-bold text-dark-wood">Chepana AI:</span>
                            <button onClick={() => setAnswer(null)} className="text-xs text-gray-400 hover:text-dark-wood">Schließen</button>
                        </div>
                        <p className="text-gray-600 mb-2">{answer.text}</p>
                        {answer.mapUri && (
                            <a href={answer.mapUri} target="_blank" rel="noreferrer" className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded flex items-center gap-1 w-fit">
                                <MapPin className="w-3 h-3"/> Auf Karte zeigen
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-dark-wood text-gray-500 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Chepana Restobar Heidelberg. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;