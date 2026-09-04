import { VideoItem, QaItem } from './types';

export const MOCK_VIDEOS: VideoItem[] = [
  { id: '1', title: 'Advanced Calculus: Limits and Continuity', thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600', creator: 'Prof. Ahmed', views: '12K', duration: '45:20', category: 'Religious' },
  { id: '4', title: 'Funny Standup 2024', thumbnail: 'https://images.unsplash.com/photo-1527224857830-43a7eaa58f72?auto=format&fit=crop&q=80&w=600', creator: 'Comedy Central BD', views: '2.1M', duration: '12:05', category: 'Comedy' },
  { id: '5', title: 'Beautiful Acoustic Cover', thumbnail: 'https://images.unsplash.com/photo-1516280440502-85f81014e7a2?auto=format&fit=crop&q=80&w=600', creator: 'Music Studio', views: '450K', duration: '4:30', category: 'Songs' },
  { id: '6', title: 'Introduction to Organic Chemistry', thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600', creator: 'EduMaster', views: '8K', duration: '25:10', category: 'Religious' },
];

export const MOCK_STUDENT_QA: QaItem[] = [
  { id: '1', author: 'Rahul D.', title: 'How to solve second-order differential equations?', description: 'I am stuck on understanding the characteristic equation part. Can someone explain with a simple example?', subject: 'Mathematics', answersCount: 4, upvotes: 24, views: 156, hasBestAnswer: true },
  { id: '2', author: 'Sarah K.', title: 'What is the main difference between mitosis and meiosis?', description: 'Preparing for my biology finals. Need a clear distinction between the two processes.', subject: 'Biology', answersCount: 2, upvotes: 12, views: 89 },
  { id: '3', author: 'Aman H.', title: 'Why does light bend when passing through water?', description: 'Is it just refraction or something more?', subject: 'Physics', answersCount: 7, upvotes: 45, views: 320, hasBestAnswer: true },
];

export const SEARCH_CATEGORIES = ['All', 'Entertainments', 'Religious', "Students' Corner", 'Stories', 'Poems', 'Creators'];

export const LANGUAGES = ['Bengali', 'English', 'Hindi', 'Arabic', 'Urdu', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];
