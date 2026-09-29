import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';
import { Award, BookOpen, Video, ShieldCheck, UserCheck, CheckCircle, Rocket } from 'lucide-react';

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen transition-colors duration-300">
      
      <Navbar />

      <section id="home" className="pt-36 pb-20 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -top-10 -left-10 pointer-events-none"></div>
        <div className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-0 right-0 pointer-events-none"></div>
        
        <div className="max-w-4xl w-full mx-auto backdrop-blur-xl bg-white/70 p-10 md:p-14 rounded-3xl border border-slate-200/80 shadow-2xl relative z-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 border border-blue-200 mb-6 inline-block shadow-sm">
            MAXIMIZE YOUR POTENTIALS
          </span>
          
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Learn the secrets to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Life Success</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The ultimate professional training solution for ambitious students who want to reach their career goals with PCIMT.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#courses" className="px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all">
              Explore Courses
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-xl font-bold backdrop-blur-md bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-7xl mx-auto relative z-20 -mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <Award className="w-8 h-8 text-blue-600" />, 
              title: "Expert Teacher", 
              desc: "Learn from industry professionals with years of hands-on technical experience." 
            },
            { 
              icon: <BookOpen className="w-8 h-8 text-blue-600" />, 
              title: "Self Development", 
              desc: "Build comprehensive skills for careers in various computer and tech domains." 
            },
            { 
              icon: <Video className="w-8 h-8 text-blue-600" />, 
              title: "Practical Learning", 
              desc: "Get rigorous lab sessions and live project training alongside regular classes." 
            },
            { 
              icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, 
              title: "Life Time Support", 
              desc: "Continuous guidance, placement assistance, and doubt-clearing support forever." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/85 p-6 rounded-2xl border border-slate-200/80 shadow-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center">
              <div className="p-3.5 bg-blue-50 rounded-2xl mb-4 border border-blue-100 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-800">{feature.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Courses />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="backdrop-blur-2xl bg-white/85 p-8 md:p-14 rounded-3xl border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 block">
              EXPERT DEVELOPMENT COURSE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Get Instant Access To <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Expert Solution</span>
            </h2>
            <p className="text-slate-600 mb-10 text-sm md:text-base leading-relaxed">
              The ultimate professional training solution for ambitious students who want to reach their career goals with effortless comfort.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: <UserCheck className="w-6 h-6 text-blue-600" />,
                  title: "Sign up in website",
                  desc: "The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                  title: "Enroll your course",
                  desc: "The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree."
                },
                {
                  icon: <Rocket className="w-6 h-6 text-blue-600" />,
                  title: "Start from now",
                  desc: "The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree."
                }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
              alt="Students Learning at PCIMT" 
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg">
              <h4 className="font-bold text-slate-900 text-sm">PCIMT Computer Lab & Training</h4>
              <p className="text-slate-600 text-xs mt-0.5">Hands-on practical sessions with expert mentors.</p>
            </div>
          </div>

        </div>
      </section>

      <Gallery />

      <About />

      <Contact />

      <Login />

      <Footer />

    </div>
  );
}

export default App;
