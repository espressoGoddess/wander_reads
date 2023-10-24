import { BaseBook, BookType, SearchResult } from '@/types/types';
import { createContext } from 'react';
export type GenericBook = BaseBook | SearchResult | null;

export const BookContext = createContext({
  book: null as GenericBook,
  setBook: (book: GenericBook) => {},
});
