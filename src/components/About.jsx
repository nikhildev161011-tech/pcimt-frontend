import React from 'react';
import directorImg from '../assets/t3.png';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="backdrop-blur-2xl bg-white/85 p-8 md:p-14 rounded-3xl border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image Container on Top / First */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl bg-slate-900 flex items-center justify-center p-3 h-[420px]">
          <img 
            src={directorImg} 
            alt="PCIMT About" 
            className="w-full h-full object-contain object-center rounded-2xl"
          />
        </div>

        {/* About Text & Full Paragraph Below */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Know About <span className="text-blue-600">More</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed text-justify">
            prabhat computer technical institute and yoga sansthan, jiyanpur azamgarh, established in the 03 june 2018, a pioneer institute in the field of technical education and research is a government aided, iso 9001 certified instution with autonomous staus curriculum an updated syllabi. the aicmt has the best labroties with free access to the student and prefares them with the latest metthod learing technical pracites. the industry attachment programmer, complusory for all courses provided the students an exposure for current technical practies. the institute is located in the same campus as the prabhat computer technical institute and youga sansthan.
          </p>
        </div>

      </div>
    </section>
  );
}