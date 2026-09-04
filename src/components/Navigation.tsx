import React from 'react';
import { TabType } from '../types';
import { cn } from '../lib/utils';
import { Home, Tv, Heart, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string; icon: React.ReactNode; color: string }[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} />, color: 'from-blue-500 to-cyan-500' },
  { id: 'entertainments', label: 'Entertainments', icon: <Tv size={20} />, color: 'from-purple-500 to-rose-500' },
  { id: 'religious', label: 'Religious', icon: <Heart size={20} />, color: 'from-emerald-400 to-teal-500' },
  { id: 'students-corner', label: "Students' Corner", icon: <HelpCircle size={20} />, color: 'from-pink-500 to-rose-500' },
];

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex space-x-3 overflow-x-auto py-4 scrollbar-hide items-center pb-5">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative flex items-center gap-2 px-5 py-2.5 rounded-xl whitespace-nowrap font-bold text-sm transition-all flex-shrink-0 border",
                  isActive
                    ? "text-white border-transparent shadow-md"
                    : "text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-slate-50 dark:bg-slate-800"
                )}
              >
                {isActive && (
                  <div className={cn("absolute inset-0 rounded-xl bg-gradient-to-r opacity-100", tab.color)} style={{ zIndex: -1 }} />
                )}
                <div className={cn(
                  "flex items-center justify-center transition-colors", 
                  isActive ? "text-white" : "text-slate-500 dark:text-slate-400"
                )}>
                  {tab.icon}
                </div>
                <span className="tracking-wide">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
