import React, { useState } from 'react';
import { User, Lock, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section id="login" className="py-20 px-6 max-w-7xl mx-auto flex items-center justify-center">
      <div className="w-full max-w-md backdrop-blur-2xl bg-white/85 p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden">
        
        {/* Glow Background Effect */}
        <div className="absolute w-48 h-48 bg-blue-500/15 rounded-full blur-3xl -top-10 -right-10 pointer-events-none"></div>

        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl mx-auto flex items-center justify-center text-blue-600 shadow-inner mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-600 border border-blue-200 inline-block shadow-sm mb-2">
            SECURE PORTAL
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Login <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Here..</span>
          </h2>
          <p className="text-slate-500 text-xs mt-1">
            Access your PCIMT student or instructor dashboard.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Username or Email Address *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="Username or Email" 
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-100/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Password *</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4" />
              </span>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" 
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-100/80 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center space-x-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              <span>Remember Me</span>
            </label>
            <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact admin to reset your password."); }} className="text-blue-600 font-semibold hover:underline">
              Lost your password?
            </a>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 rounded-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:opacity-95 transition-all flex items-center justify-center space-x-2 text-sm disabled:opacity-70"
          >
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
            ) : (
              <>
                <span>Log In</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {success && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold flex items-center space-x-2 animate-bounce">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Login successful! Redirecting to dashboard...</span>
            </div>
          )}
        </form>

        <div className="mt-8 text-center text-xs text-slate-400 border-t border-slate-100 pt-4">
          <p>Protected by PCIMT Security Systems</p>
        </div>

      </div>
    </section>
  );
}