import React from 'react';
import { User, MapPin, Award, TrendingUp, Users } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="space-y-6">
      
      {/* Director Info Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600" />
        <div className="px-6 pb-6 relative">
          <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center -mt-10 mb-4 border-4 border-white dark:border-slate-900 shadow-sm">
            <User size={32} className="text-slate-400" />
          </div>
          
          <div className="mb-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Year Mohammad Molla <Award size={18} className="text-emerald-500" />
            </h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Platform Director & Founder</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1"><MapPin size={14}/> Official Address</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Vill Ranigachi, PO. Shank Sahar,<br/>
              PS. Bhangar, Dist. South 24 Parganas,<br/>
              PIN 743502, West Bengal, India.
            </p>
          </div>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-orange-500" /> Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Calculus', 'Islamic History', 'Standup Comedy', 'Organic Chem', 'Web Dev', 'Motivation'].map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 text-sm font-medium cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Top Creators */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Users size={20} className="text-indigo-500" /> Top Creators
        </h3>
        <div className="space-y-4">
          {[
            { name: 'Prof. Ahmed', subs: '1.2M' },
            { name: 'Science Hub', subs: '850K' },
            { name: 'Scholar Insights', subs: '430K' }
          ].map((creator, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-sm">
                {creator.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{creator.name}</h4>
                <p className="text-xs text-slate-500">{creator.subs} learners</p>
              </div>
              <button className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition-colors">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="px-4 text-xs text-slate-400 flex flex-wrap gap-x-3 gap-y-1 justify-center text-center">
        <span>© 2024 Let's Learn and Teach</span>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  );
}
