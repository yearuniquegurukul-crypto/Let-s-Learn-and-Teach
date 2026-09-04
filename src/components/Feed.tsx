import React from 'react';
import { TabType, ModalType } from '../types';
import { Hero } from './Hero';
import { VideoCard, AudioCard } from './MediaCards';
import { QnASection } from './QnA';
import { MOCK_VIDEOS, MOCK_STUDENT_QA, MOCK_RELIGIOUS_QA } from '../data';
import { Sparkles } from 'lucide-react';

interface FeedProps {
  activeTab: TabType;
  setModal: (type: ModalType) => void;
}

export function Feed({ activeTab, setModal }: FeedProps) {
  return (
    <div className="w-full">
      {activeTab === 'home' && (
        <>
          <Hero setModal={setModal} />
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Sparkles className="text-orange-500" /> Trending Edutainment
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_VIDEOS.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </>
      )}

      {(activeTab === 'videos' || activeTab === 'education' || activeTab === 'science' || activeTab === 'comedy') && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 capitalize">{activeTab} Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_VIDEOS.filter(v => activeTab === 'videos' || v.category.toLowerCase() === activeTab).map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'songs' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Music & Audio</h2>
          <AudioCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {MOCK_VIDEOS.filter(v => v.category === 'Songs').map(video => (
                <VideoCard key={video.id} video={video} />
             ))}
          </div>
        </div>
      )}

      {activeTab === 'student-qa' && (
        <QnASection 
          title="Student Q&A Community" 
          items={MOCK_STUDENT_QA} 
          onAsk={() => setModal('create')} 
        />
      )}

      {activeTab === 'religious-qa' && (
        <QnASection 
          title="Religious Q&A & Scholars" 
          items={MOCK_RELIGIOUS_QA} 
          onAsk={() => setModal('create')} 
        />
      )}

      {activeTab === 'religious' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Religious Collection</h2>
          <AudioCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {MOCK_VIDEOS.filter(v => v.category === 'Religious').map(video => (
                <VideoCard key={video.id} video={video} />
             ))}
          </div>
        </div>
      )}

      {(activeTab === 'premium' || activeTab === 'creator' || activeTab === 'creative') && (
        <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 capitalize">{activeTab} Section</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
            This module is customized for specialized workflows and is part of the premium and creator ecosystem.
          </p>
          <button 
            onClick={() => setModal(activeTab === 'premium' ? 'premium' : 'creator')}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700"
          >
            Explore {activeTab}
          </button>
        </div>
      )}

    </div>
  );
}
