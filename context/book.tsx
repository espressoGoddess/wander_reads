import { BookType } from "@/types/types";
import { createContext } from "react";

export const BookContext = createContext({
  book: null as BookType | null,
  setBook: (book: BookType) => {},
});

// export function BookInfoProvider({ children }: { children: React.ReactNode }) {
//   const [book, setBook] = useState({});
//   return (
//     <BookContext.Provider value={{book, setBook}}>
//       {children}
//     </BookContext.Provider>
//   );
// }

// export function useBookContext() {
//   return useContext(BookContext);
// }
