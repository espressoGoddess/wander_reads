import { createContext, useContext, useState } from "react";

export const BookContext = createContext(null);

export function BookInfoProvider({ children }) {
  const [book, setBook] = useState(null);
  return (
    <BookContext.Provider value={[book, setBook]}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
