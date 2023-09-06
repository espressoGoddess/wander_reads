export interface BookType {
  title: string;
  cover: string;
  author: string;
  description: string;
  rating?: number;
  review?: string;
  id: number;
}

export interface RatingProps {
  rating: number;
  index: number;
}
