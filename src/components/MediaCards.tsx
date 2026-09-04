import React from 'react';
import { VideoItem } from '../types';
import { Play, MoreVertical, ThumbsUp, Share2, Bookmark, Clock, User } from 'lucide-react';

export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all cursor-pointer">
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs font-medium rounded-lg flex items-center gap-1 backdrop-blur-sm">
          <Clock size={12}/> {video.duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
             <Play className="text-white fill-white ml-1" size={24} />
          </div>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start gap-3">
          <h3 className="font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
            {video.title}
          </h3>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><MoreVertical size={16}/></button>
        </div>
        
        <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <User size={14} className="text-slate-400"/>
          <span className="font-medium hover:text-blue-600 dark:hover:text-blue-400">{video.creator}</span>
        </div>
        
        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {video.views} views • 2 days ago
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-slate-500 dark:text-slate-400">
          <button className="flex items-center gap-1.5 text-xs font-medium hover:text-blue-600 transition-colors"><ThumbsUp size={16}/> Like</button>
          <button className="flex items-center gap-1.5 text-xs font-medium hover:text-indigo-600 transition-colors"><Share2 size={16}/> Share</button>
          <button className="flex items-center gap-1.5 text-xs font-medium hover:text-orange-500 transition-colors"><Bookmark size={16}/> Save</button>
        </div>
      </div>
    </div>
  );
}

export function AudioCard() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl border border-indigo-100 dark:border-slate-700 w-full mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center">
         <Music size={40} className="text-white opacity-90" />
      </div>

      <div className="flex-1 w-full space-y-4 z-10">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Beautiful Morning Recitation</h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Scholar Audio Collection</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:scale-105 transition-transform shadow-md">
            <Play size={18} className="fill-current ml-0.5" />
          </button>
          
          <div className="flex-1 flex items-center gap-3">
             <div className="text-xs font-medium text-slate-500">1:12</div>
             <div className="flex-1 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
               <div className="w-1/3 h-full bg-indigo-500 rounded-full" />
             </div>
             <div className="text-xs font-medium text-slate-500">4:30</div>
          </div>
        </div>
      </div>
    </div>
  );
}
