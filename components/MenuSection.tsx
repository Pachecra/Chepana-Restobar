import React from 'react';
import { MenuItem } from '../types';

const dishes: MenuItem[] = [
  {
    id: '1',
    name: 'Arepas',
    description: 'Gefüllte Maisfladen, außen knusprig, innen weich. Unser Klassiker: "Reina Pepiada" mit Hühnchen & Avocado.',
    price: 'ab 8,50 €',
    image: 'https://www.annarecetasfaciles.com/files/arepas-colombianas-scaled.jpg',
    highlight: true
  },
  {
    id: '2',
    name: 'Pabellón Criollo',
    description: 'Das Nationalgericht Venezuelas. Saftiges gezupftes Rindfleisch, schwarze Bohnen, Reis und frittierte Kochbananen.',
    price: '16,90 €',
    image: 'https://www.laylita.com/recetas/wp-content/uploads/2021/03/Pabellon-criollo-venezolano-receta-casera-1024x684.jpg'
  },
  {
    id: '3',
    name: 'Tequeños',
    description: 'Der perfekte Bar-Snack! Knusprige Teig-Sticks gefüllt mit würzigem Käse. Dazu unser hausgemachter Dip.',
    price: '7,50 €',
    image: 'https://sazonytumbao.com/wp-content/uploads/2025/02/tequenos-historia-y-recetas-mosaico-frozen-5.webp'
  },
  {
    id: '4',
    name: 'Empanadas',
    description: 'Goldgelbe, knusprige Teigtaschen aus Maismehl mit verschiedenen Füllungen (Rind, Käse, Hühnchen).',
    price: '4,50 € / Stk',
    image: 'https://www.isabeleats.com/wp-content/uploads/2022/10/beef-empanadas-small-11.jpg'
  }
];

const MenuSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-stone-50" id="menu">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-dark-wood mb-4">
            Typical Venezuelan Dishes
          </h2>
          <div className="w-24 h-1 bg-terracotta mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unsere Küche ist ehrlich und handgemacht. Entdecke die Vielfalt Venezuelas direkt in Heidelberg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {dishes.map((dish) => (
            <div key={dish.id} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                 <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {dish.highlight && (
                  <span className="absolute top-2 left-2 bg-venezuela-yellow text-dark-wood text-xs font-bold px-2 py-1 rounded shadow">
                    Beliebt
                  </span>
                )}
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-bold text-dark-wood font-serif">{dish.name}</h3>
                    <span className="text-terracotta font-bold whitespace-nowrap ml-2">{dish.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>
                <button className="text-turquoise font-bold text-sm uppercase tracking-wide self-start hover:text-teal-700 transition-colors">
                  Mehr erfahren &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;