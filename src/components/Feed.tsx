import React from 'react';
import { TabType, ModalType } from '../types';
import { Hero } from './Hero';
import { VideoCard, AudioCard } from './MediaCards';
import { QnASection } from './QnA';
import { MOCK_VIDEOS, MOCK_STUDENT_QA } from '../data';
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

      {activeTab === 'religious' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 capitalize">{activeTab} Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_VIDEOS.filter(v => v.category.toLowerCase() === activeTab).map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'entertainments' && (
        <div className="mb-8 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Comedy & Fun</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_VIDEOS.filter(v => v.category === 'Comedy').map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Music & Audio</h2>
            <AudioCard />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
               {MOCK_VIDEOS.filter(v => v.category === 'Songs').map(video => (
                  <VideoCard key={video.id} video={video} />
               ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'students-corner' && (
        <QnASection 
          title="Students' Corner" 
          items={MOCK_STUDENT_QA} 
          onAsk={() => setModal('create')} 
        />
      )}

    </div>
  );
}
