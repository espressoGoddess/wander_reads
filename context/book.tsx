import { BookType } from "@/types/types";
import { createContext } from "react";

export const BookContext = createContext({
  book: null as BookType | null,
  setBook: (book: BookType) => {},
});
