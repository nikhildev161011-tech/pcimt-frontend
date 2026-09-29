import React from 'react';
import abhasSirImg from '../assets/abhassir.jpg';
import amanSirImg from '../assets/amansir.jpeg';
import vijayImg from '../assets/vijay.jpg'; 
import nikhilImg from '../assets/nikhil.jpeg';
export default function Gallery() {
  // Gallery items data containing faculty members and the lead developer
  const galleryItems = [
    {
      id: 1,
      name: "Abbas Sir",
      role: "Director & Management",
      img: abhasSirImg
    },
    {
      id: 2,
      name: "Aman Sir",
      role: "Senior Instructor",
      img: amanSirImg
    },
    {
      id: 3,
      name: "Vijay Sir",
      role: "Technical Expert",
      img: vijayImg
    },
    {
      id: 4,
      name: "Developer Nikhil Gupta",
      role: "Lead Software Architect",
      img: nikhilImg
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 border border-blue-200 mb-4 inline-block shadow-sm">
          VISUAL MEMORIES & CREATORS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Image <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Gallery</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Meet our esteemed mentors and the talented developer behind the PCIMT web platform.
        </p>
      </div>

      {/* Grid Layout for Gallery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className={`backdrop-blur-2xl p-4 rounded-3xl border shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group overflow-hidden relative ${
              item.highlightBadge 
                ? 'bg-blue-50/90 border-blue-300 shadow-blue-500/10 ring-2 ring-blue-400/50' 
                : 'bg-white/85 border-slate-200/80'
            }`}
          >
            {/* Highlight Badge for Developer Card */}
            {item.highlightBadge && (
              <span className="absolute top-6 right-6 z-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md animate-pulse">
                {item.highlightBadge}
              </span>
            )}

            {/* Image Container with object-contain to prevent cropping */}
            <div className="relative overflow-hidden rounded-2xl h-64 mb-4 bg-slate-100 flex items-center justify-center p-2 border border-slate-200">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-xl">
                <span className="text-white text-xs font-medium bg-blue-600/90 backdrop-blur-md px-3 py-1 rounded-full">
                  {item.role}
                </span>
              </div>
            </div>

            {/* Member Details */}
            <div className="text-center pb-2">
              <h3 className="text-xl font-black text-slate-900 tracking-wide bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                {item.name}
              </h3>
              <p className="text-xs text-slate-600 font-semibold mt-0.5">
                {item.id === 4 ? "Crafting Digital Excellence & Code" : item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}