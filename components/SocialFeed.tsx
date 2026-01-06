import React from 'react';
import { Instagram, Heart } from 'lucide-react';

const SocialFeed: React.FC = () => {
    // Specific images requested
    const posts = [
        { 
            id: 1, 
            img: 'https://img.restaurantguru.com/w550/h367/r19a-Che-Pana-Resto-Bar-beverage.jpg', 
            caption: 'Che Pana Drinks',
            likes: 243 
        },
        { 
            id: 2, 
            img: 'https://venezolanosilustres.com/wp-content/uploads/2022/03/VI_CervezaEnVenezuela_02.jpg', 
            caption: 'Cervezas Venezolanas',
            likes: 189 
        },
    ];

    return (
        <section className="py-24 px-4 bg-white relative overflow-hidden">
             {/* Background Pattern Hint */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c7a7b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                             <span className="w-12 h-1 bg-gradient-to-r from-venezuela-yellow via-venezuela-blue to-venezuela-red rounded-full"></span>
                             <span className="text-terracotta font-bold uppercase tracking-wider text-sm">Social Media</span>
                        </div>
                        <h3 className="text-4xl font-serif font-bold text-dark-wood">@chepanarestobar</h3>
                        <p className="text-gray-500 mt-2 text-lg">Folge uns für Daily Specials & Latino Vibes.</p>
                    </div>
                    <a href="#" className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <Instagram className="w-5 h-5"/> 
                        Auf Instagram folgen
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="relative group overflow-hidden aspect-[4/3] cursor-pointer rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                            <img 
                                src={post.img} 
                                alt={post.caption} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <p className="text-white font-serif text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{post.caption}</p>
                                <div className="flex items-center gap-2 text-venezuela-yellow mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    <Heart className="w-5 h-5 fill-venezuela-yellow" />
                                    <span className="font-bold">{post.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;