import React from 'react';
import { TabType } from '../types';
import { cn } from '../lib/utils';
import { Home, Film, Music, Smile, BookOpen, FlaskConical, Book, HelpCircle, Heart, Star, Sparkles, TrendingUp } from 'lucide-react';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'videos', label: 'Videos', icon: <Film size={18} /> },
  { id: 'songs', label: 'Songs', icon: <Music size={18} /> },
  { id: 'comedy', label: 'Comedy', icon: <Smile size={18} /> },
  { id: 'education', label: 'Education', icon: <BookOpen size={18} /> },
  { id: 'science', label: 'Science', icon: <FlaskConical size={18} /> },
  { id: 'religious', label: 'Religious', icon: <Heart size={18} /> },
  { id: 'student-qa', label: 'Student Q&A', icon: <HelpCircle size={18} /> },
  { id: 'religious-qa', label: 'Religious Q&A', icon: <Book size={18} /> },
  { id: 'creative', label: 'Creative Corner', icon: <Star size={18} /> },
  { id: 'premium', label: 'Premium', icon: <Sparkles size={18} /> },
  { id: 'creator', label: 'Creator Program', icon: <TrendingUp size={18} /> },
];

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  return (
    <div className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-20 z-30">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex space-x-1 overflow-x-auto py-3 scrollbar-hide items-center">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap font-medium text-sm transition-all flex-shrink-0",
                activeTab === tab.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
