import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Feed } from './components/Feed';
import { Sidebar } from './components/Sidebar';
import { Modals } from './components/Modals';
import { TabType, ModalType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 transition-colors duration-200">
      <Header setModal={setActiveModal} />
      
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 py-8 flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Content Area (70%) */}
        <div className="w-full lg:w-[70%]">
          <Feed activeTab={activeTab} setModal={setActiveModal} />
        </div>
        
        {/* Sidebar Area (30%) */}
        <aside className="w-full lg:w-[30%] lg:sticky lg:top-[140px]">
          <Sidebar />
        </aside>
      </main>

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}

