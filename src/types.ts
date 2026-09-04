export type ModalType = 'translate' | 'create' | 'auth' | null;

export type TabType = 
  | 'home' 
  | 'entertainments' 
  | 'religious' 
  | 'students-corner';

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
