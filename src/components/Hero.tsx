import React from 'react';
import { Crown, Sparkles, TrendingUp, PlayCircle } from 'lucide-react';
import { ModalType } from '../types';

interface HeroProps {
  setModal: (type: ModalType) => void;
}

export function Hero({ setModal }: HeroProps) {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm p-8 sm:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6">
          <Sparkles size={16} /> Welcome to the future of learning
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-[1.1]">
          Learn. Teach. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Create.</span> Earn.
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 font-medium mb-8 font-bengali leading-relaxed">
          শেখার সাথে শেখাও, নিজের জ্ঞান বিশ্বের সাথে ভাগ করো এবং আয় করার সুযোগ তৈরি করো।
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setModal('premium')}
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-amber-950 font-bold text-lg transition-all shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
          >
            <Crown size={22} className="group-hover:rotate-12 transition-transform" />
            Join Premium Membership
          </button>
          
          <button 
            onClick={() => setModal('creator')}
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 text-slate-700 dark:text-slate-200 font-bold text-lg transition-all shadow-sm"
          >
            <TrendingUp size={22} />
            Start Earning
          </button>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Abstract illustrative composition */}
        <div className="aspect-square rounded-full border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center relative shadow-2xl">
           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center">
              <PlayCircle className="text-blue-500 opacity-20 w-32 h-32" />
           </div>
           
           {/* Floating elements */}
           <div className="absolute top-10 right-10 bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
             <span className="text-2xl">🎓</span>
           </div>
           <div className="absolute bottom-20 left-4 bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-lg animate-bounce" style={{animationDuration: '4s'}}>
             <span className="text-2xl">💡</span>
           </div>
           <div className="absolute top-1/2 -right-6 bg-white dark:bg-slate-700 p-4 rounded-2xl shadow-lg animate-bounce" style={{animationDuration: '2.5s'}}>
             <span className="text-2xl">🎵</span>
           </div>
        </div>
      </div>

    </section>
  );
}
