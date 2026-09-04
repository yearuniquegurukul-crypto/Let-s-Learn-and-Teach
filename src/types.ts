export type ModalType = 'translate' | 'create' | 'premium' | 'auth' | 'creator' | null;

export type TabType = 
  | 'home' 
  | 'videos' 
  | 'songs' 
  | 'comedy' 
  | 'education' 
  | 'science' 
  | 'religious' 
  | 'student-qa' 
  | 'religious-qa' 
  | 'creative' 
  | 'premium' 
  | 'creator';

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  views: string;
  duration: string;
  category: string;
}

export interface QaItem {
  id: string;
  author: string;
  title: string;
  description: string;
  subject: string;
  answersCount: number;
  upvotes: number;
  views: number;
  hasBestAnswer?: boolean;
  isScholar?: boolean;
}
