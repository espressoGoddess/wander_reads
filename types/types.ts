export interface BaseBook {
  author: string;
  title: string;
  cover?: string;
  description?: string;
}

export interface BookType extends BaseBook {
  id: number;
  cover: string;
  description: string;
  rating?: number;
  review?: string;
}

export interface SearchResult extends BaseBook {
  id: string;
}

export interface RatingProps {
  rating: number;
  index: number;
}
