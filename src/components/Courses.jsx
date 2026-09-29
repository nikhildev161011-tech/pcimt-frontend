import React, { useState } from 'react';
import { Cpu, Code, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');

  const courseCategories = [
    { id: 'all', label: 'All Courses' },
    { id: 'software', label: 'Software Course' },
    { id: 'hardware', label: 'Hardware Course' },
    { id: 'yoga', label: 'Yoga Diploma Course' },
  ];

  const coursesData = [
    {
      category: 'hardware',
      title: 'Hardware Course',
      icon: <Cpu className="w-6 h-6 text-blue-600" />,
      items: [
        'ADCH (Advance Diploma In Computer Hardware)',
        'DCH (Diploma In Computer Hardware)',
        'ADAR (Advance Diploma In Airconditioner And Refrigeration)'
      ]
    },
    {
      category: 'software',
      title: 'Software Course',
      icon: <Code className="w-6 h-6 text-blue-600" />,
      items: [
        'Programming (C, C++, Java, Oracle, PHP, JavaScript, C#, HTML And All Language)',
        'Accounting And Tally',
        'BCA (Bachelor In Computer Application)'
      ]
    },
    {
      category: 'software',
      title: 'Advanced Software Course',
      icon: <Code className="w-6 h-6 text-cyan-500" />,
      items: [
        'CCC (Course On Computer Concepts)',
        'OMC (Office Management Of Computer)',
        '"O" Level'
      ]
    },
    {
      category: 'yoga',
      title: 'Yoga Diploma Course',
      icon: <HeartPulse className="w-6 h-6 text-emerald-600" />,
      items: [
        'YTT (Yoga Teacher Training)',
        'DYTT (Diploma In Yoga Teacher Training)',
        'PGDYO (Post Graduation Diploma In Yoga)'
      ]
    },
    {
      category: 'yoga',
      title: 'Special Yoga & Teacher Training',
      icon: <HeartPulse className="w-6 h-6 text-emerald-500" />,
      items: [
        'DSET (Diploma In Solar Energy Technician)',
        'NTT (Nursery Teacher Training)',
        'CTT (Computer Teacher Training)'
      ]
    },
    {
      category: 'hardware',
      title: 'Advanced Hardware & Tech',
      icon: <Cpu className="w-6 h-6 text-indigo-600" />,
      items: [
        'ADCH (Advance Diploma In Computer Hardware)',
        'DCH (Diploma In Computer Hardware)',
        'ADAR (Advance Diploma In Airconditioner And Refrigeration)'
      ]
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 border border-blue-200 mb-4 inline-block shadow-sm">
          ACADEMIC PROGRAMS
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Explore Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Courses</span>
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Choose from industry-certified software, hardware, and professional diploma programs designed for your success.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {courseCategories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-blue-500/25 shadow-lg scale-105'
                  : 'bg-white/80 backdrop-blur-md text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, idx) => (
          <div 
            key={idx} 
            className="backdrop-blur-2xl bg-white/85 p-8 rounded-3xl border border-slate-200/80 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 shadow-inner group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
              </div>

              <ul className="space-y-3.5 mb-6">
                {course.items.map((item, i) => (
                  <li key={i} className="flex items-start text-xs md:text-sm text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2.5 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs md:text-sm transition-all duration-300 border border-slate-200/60 shadow-sm">
              Enroll Now &rarr;
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}