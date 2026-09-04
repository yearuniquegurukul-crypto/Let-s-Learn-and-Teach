import React from 'react';
import { Crown, Sparkles, TrendingUp, Globe, BookOpen, Music, Video } from 'lucide-react';
import { motion } from 'motion/react';
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
        
      </div>
      
      <div className="relative z-10 w-full max-w-md hidden sm:block">
        {/* Animated Earth Composition */}
        <div className="aspect-square rounded-full flex items-center justify-center relative">
           
           {/* Outer orbit */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-blue-500/30 dark:border-blue-400/20"
           />
           
           {/* Middle orbit (counter-rotating) */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute inset-8 rounded-full border-[1px] border-indigo-500/20 dark:border-indigo-400/20"
           />

           {/* Earth Sphere */}
           <motion.div 
             animate={{ y: [-8, 8, -8] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_60px_rgba(59,130,246,0.4)] flex items-center justify-center text-white overflow-hidden border-4 border-white/20"
           >
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-full h-full flex items-center justify-center opacity-40"
             >
                <Globe className="w-[120%] h-[120%]" strokeWidth={1} />
             </motion.div>
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2)_0%,_transparent_60%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
           </motion.div>
           
           {/* Floating Orbital Elements */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
             className="absolute inset-8 rounded-full"
           >
              <div className="absolute top-0 left-1/2 -mt-6 -ml-6 bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-600 text-blue-600 dark:text-blue-400" style={{ transform: 'rotate(-0deg)' }}>
                <BookOpen size={24} />
              </div>
           </motion.div>

           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 rounded-full"
           >
              <div className="absolute bottom-10 -left-6 bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-600 text-orange-500" style={{ transform: 'rotate(0deg)' }}>
                <Music size={24} />
              </div>
              <div className="absolute top-1/3 -right-6 bg-white dark:bg-slate-700 p-3 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-600 text-emerald-500" style={{ transform: 'rotate(0deg)' }}>
                <Video size={24} />
              </div>
           </motion.div>
           
        </div>
      </div>

    </section>
  );
}
