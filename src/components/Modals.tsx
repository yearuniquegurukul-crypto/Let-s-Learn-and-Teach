import React from 'react';
import { X, Languages, Upload, PenTool, HelpCircle, FileText, Music, Play, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { ModalType } from '../types';
import { LANGUAGES } from '../data';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export function Modals({ activeModal, onClose }: ModalsProps) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            {activeModal === 'translate' && <><Languages className="text-indigo-500" /> AI Translate</>}
            {activeModal === 'create' && <><PenTool className="text-orange-500" /> Create Post</>}
            {activeModal === 'premium' && <><ShieldCheck className="text-amber-500" /> Premium Membership</>}
            {activeModal === 'auth' && <><UserIcon className="text-blue-500" /> Welcome Back</>}
            {activeModal === 'creator' && <><TrendingUpIcon className="text-emerald-500" /> Creator Program</>}
          </h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          
          {/* TRANSLATE MODAL */}
          {activeModal === 'translate' && (
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-400">Translate content into global languages using AI. Powered by advanced neural machine translation.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Source Language</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="auto">Auto Detect</option>
                    {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Language</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-500">
                    {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-slate-900 dark:text-white mt-4">Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Translate Text', 'Translate Videos', 'Translate Audio', 'AI Voice Dubbing', 'Live Subtitles'].map((feature) => (
                    <label key={feature} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                      <input type="checkbox" defaultChecked={feature==='Translate Text'} className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-600/20">
                Apply Translation Settings
              </button>
            </div>
          )}

          {/* CREATE POST MODAL */}
          {activeModal === 'create' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Play className="text-red-500" size={32}/>, title: 'Upload Video', desc: 'Share your educational or entertainment video' },
                { icon: <Music className="text-purple-500" size={32}/>, title: 'Upload Audio', desc: 'Podcasts, recitations, or songs' },
                { icon: <HelpCircle className="text-blue-500" size={32}/>, title: 'Ask Question', desc: 'Get help from scholars and teachers' },
                { icon: <FileText className="text-emerald-500" size={32}/>, title: 'Write Story', desc: 'Share your creativity with the world' },
                { icon: <PenTool className="text-orange-500" size={32}/>, title: 'Write Poem', desc: 'Express yourself through poetry' },
                { icon: <Upload className="text-slate-500" size={32}/>, title: 'General Post', desc: 'Text, images, and community updates' },
              ].map((item, i) => (
                <button key={i} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-300 dark:hover:border-orange-500/50 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 transition-all group">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* PREMIUM MODAL */}
          {activeModal === 'premium' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-amber-950">
                <h3 className="text-2xl font-bold mb-2">Unlock Infinite Knowledge</h3>
                <ul className="space-y-3 mb-6">
                  {['✓ Ad-Free Experience', '✓ Premium Learning Content', '✓ Exclusive Community Access', '✓ Advanced AI Translation Tools', '✓ Premium Creator Benefits'].map((item, i) => (
                    <li key={i} className="font-medium flex items-center gap-2">{item}</li>
                  ))}
                </ul>
                <div className="text-3xl font-extrabold mb-1">₹499<span className="text-lg font-medium opacity-80">/month</span></div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><CreditCard size={20}/> Select Payment Method</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['UPI', 'Credit / Debit Card', 'Net Banking', 'Google Pay', 'PhonePe', 'PayPal'].map((method) => (
                    <button key={method} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors text-slate-700 dark:text-slate-300 font-medium">
                      {method}
                      <ChevronRight size={16} className="opacity-50" />
                    </button>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4 text-center">* This is a secure payment gateway placeholder. Do not enter real credentials.</p>
              </div>
            </div>
          )}

          {/* Fallbacks for Auth/Creator omitted for brevity, showing premium/create/translate as primary */}
          {(activeModal === 'auth' || activeModal === 'creator') && (
            <div className="py-12 text-center text-slate-500">
              <div className="mb-4 flex justify-center"><Sparkles size={48} className="text-slate-300 dark:text-slate-600"/></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Coming Soon</h3>
              <p>This module is currently under development.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// Inline dummy icons for the active modal header fallbacks
function UserIcon(props: any) { return <User {...props} />; }
function TrendingUpIcon(props: any) { return <TrendingUp {...props} />; }
import { User, TrendingUp } from 'lucide-react';
