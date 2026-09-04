import React from 'react';
import { QaItem } from '../types';
import { MessageSquare, ArrowUp, CheckCircle, Eye, ShieldCheck, HelpCircle } from 'lucide-react';

export function QaCard({ item }: { item: QaItem }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm mb-4 transition-all hover:shadow-md">
      <div className="flex items-start gap-4">
        
        {/* Voting Column */}
        <div className="hidden sm:flex flex-col items-center gap-1 min-w-[48px]">
          <button className="p-1 text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-slate-700 rounded transition-colors"><ArrowUp size={20}/></button>
          <span className="font-bold text-slate-700 dark:text-slate-300">{item.upvotes}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
              {item.subject}
            </span>
            {item.hasBestAnswer && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">
                <CheckCircle size={12} /> Solved
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">{item.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{item.description}</p>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                {item.author.charAt(0)}
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
                {item.author}
                {item.isScholar && <ShieldCheck size={14} className="text-emerald-500" title="Verified Scholar" />}
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
              <div className="flex items-center gap-1.5"><MessageSquare size={16}/> {item.answersCount} Answers</div>
              <div className="flex items-center gap-1.5"><Eye size={16}/> {item.views} Views</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export function QnASection({ title, items, onAsk }: { title: string, items: QaItem[], onAsk: () => void }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Ask. Learn. Solve.</p>
        </div>
        <button 
          onClick={onAsk}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors"
        >
          <HelpCircle size={18} /> Ask Question
        </button>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
        {['Latest', 'Most Answered', 'Trending', 'Unanswered'].map(filter => (
          <button key={filter} className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 whitespace-nowrap">
            {filter}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {items.map(item => <QaCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
