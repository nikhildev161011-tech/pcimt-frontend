import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('pcimt-backend.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to connect to server. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-600 border border-blue-200 mb-4 inline-block shadow-sm">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Connect With <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">PCIMT</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          Have questions about our technical courses or admissions? Reach out to us or visit our campus today.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-8">
          <div className="backdrop-blur-2xl bg-white/85 p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 text-blue-600 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Phone Number</h4>
                <p className="text-slate-600 text-xs mt-0.5">+91 8182028589</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 text-blue-600 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Email Address</h4>
                <p className="text-slate-600 text-xs mt-0.5">pcimt@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100 text-blue-600 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Institute Address</h4>
                <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                  Bilariyaganj Road Taxi Stand Jiyanpur, Near M.N Lal Public School, Jiyanpur, Azamgarh 276140 Uttar Pradesh, India.
                </p>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-4 inline-block">
                VISIT OUR CAMPUS
              </span>
              <h3 className="text-xl font-bold mb-2">Prabhat Computer & Technical Institute</h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-6">
                ISO 9001 Certified Institute. Est. June 3, 2018. Come over for career counseling and course details.
              </p>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Prabhat+Computer+Institute+Jiyanpur+Azamgarh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 py-3 px-6 rounded-xl bg-white text-blue-600 font-bold text-xs shadow-md hover:bg-slate-100 transition-all text-center"
            >
              <MapPin size={16} />
              <span>Open Location in Google Maps</span>
            </a>
          </div>
        </div>

        <div className="backdrop-blur-2xl bg-white/85 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center space-x-3 text-emerald-700 text-xs font-medium">
              <CheckCircle2 size={18} className="shrink-0" />
              <span>Message sent successfully! We will get back to you soon.</span>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-700 text-xs font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message or inquiry here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
