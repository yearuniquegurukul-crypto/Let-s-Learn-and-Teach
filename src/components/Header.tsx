import React from 'react';
import { Search, Languages, Plus, Bell, User, Menu } from 'lucide-react';
import { ModalType } from '../types';
import { SEARCH_CATEGORIES } from '../data';

interface HeaderProps {
  setModal: (type: ModalType) => void;
}

export function Header({ setModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <button className="p-2 -ml-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden text-slate-700 dark:text-slate-300">
            <Menu size={24} />
          </button>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Let's Learn and Teach
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              চলো শিখি ও শেখাই
            </span>
          </div>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="flex w-full bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-400 transition-all">
            <select className="bg-slate-200/50 dark:bg-slate-700 px-4 py-2 text-sm font-medium outline-none border-r border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 cursor-pointer">
              {SEARCH_CATEGORIES.map(c => <option key={c}>{c}</option>)}
            </select>
            <input 
              type="text" 
              placeholder="Search videos, questions, stories, creators..." 
              className="bg-transparent px-4 py-2 w-full outline-none text-slate-900 dark:text-slate-100 placeholder-slate-500"
            />
            <button className="px-5 text-slate-500 hover:text-blue-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => setModal('translate')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
          >
            <Languages size={18} />
            <span className="hidden lg:inline">AI Translate</span>
          </button>
          
          <button 
            onClick={() => setModal('create')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors shadow-sm shadow-orange-500/20"
          >
            <Plus size={18} />
            <span className="hidden sm:inline">Create Post</span>
          </button>

          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          
          <button 
            onClick={() => setModal('auth')}
            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 overflow-hidden hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer"
          >
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
