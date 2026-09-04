import { VideoItem, QaItem } from './types';

export const MOCK_VIDEOS: VideoItem[] = [
  { id: '1', title: 'Advanced Calculus: Limits and Continuity', thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80&w=600', creator: 'Prof. Ahmed', views: '12K', duration: '45:20', category: 'Education' },
  { id: '3', title: 'Modern Islamic History', thumbnail: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=600', creator: 'Scholar Insights', views: '34K', duration: '1:12:00', category: 'Religious' },
  { id: '4', title: 'Funny Standup 2024', thumbnail: 'https://images.unsplash.com/photo-1527224857830-43a7eaa58f72?auto=format&fit=crop&q=80&w=600', creator: 'Comedy Central BD', views: '2.1M', duration: '12:05', category: 'Comedy' },
  { id: '5', title: 'Beautiful Acoustic Cover', thumbnail: 'https://images.unsplash.com/photo-1516280440502-85f81014e7a2?auto=format&fit=crop&q=80&w=600', creator: 'Music Studio', views: '450K', duration: '4:30', category: 'Songs' },
  { id: '6', title: 'Introduction to Organic Chemistry', thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600', creator: 'EduMaster', views: '8K', duration: '25:10', category: 'Education' },
];

export const MOCK_STUDENT_QA: QaItem[] = [
  { id: '1', author: 'Rahul D.', title: 'How to solve second-order differential equations?', description: 'I am stuck on understanding the characteristic equation part. Can someone explain with a simple example?', subject: 'Mathematics', answersCount: 4, upvotes: 24, views: 156, hasBestAnswer: true },
  { id: '2', author: 'Sarah K.', title: 'What is the main difference between mitosis and meiosis?', description: 'Preparing for my biology finals. Need a clear distinction between the two processes.', subject: 'Biology', answersCount: 2, upvotes: 12, views: 89 },
  { id: '3', author: 'Aman H.', title: 'Why does light bend when passing through water?', description: 'Is it just refraction or something more?', subject: 'Physics', answersCount: 7, upvotes: 45, views: 320, hasBestAnswer: true },
];

export const MOCK_RELIGIOUS_QA: QaItem[] = [
  { id: '101', author: 'Anonymous', title: 'What are the core ethics of daily business dealings?', description: 'Looking for guidance on maintaining honesty and ethics in a competitive market.', subject: 'Ethics', answersCount: 1, upvotes: 56, views: 412, isScholar: true, hasBestAnswer: true },
  { id: '102', author: 'Tariq', title: 'Historical context of the golden age of science?', description: 'How did the spiritual environment foster scientific discovery?', subject: 'History', answersCount: 3, upvotes: 34, views: 201, isScholar: true },
];

export const SEARCH_CATEGORIES = ['All', 'Videos', 'Songs', 'Comedy', 'Education', 'Science', 'Religious', 'Questions', 'Stories', 'Poems', 'Creators'];

export const LANGUAGES = ['Bengali', 'English', 'Hindi', 'Arabic', 'Urdu', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean'];
