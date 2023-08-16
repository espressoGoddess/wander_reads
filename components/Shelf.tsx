import { useRouter } from "next/router";
import Book from "./Book";
import { BookContext } from "@/context/book";
import { useContext, useEffect } from "react";

export default function Shelf({ books }) {
  const [book, setBook] = useContext(BookContext);
  const router = useRouter();
  useEffect(() => console.log(book), [book]);
  const formattedBooks = books.map((item) => (
    <button
      key={item.id}
      onClick={() => {
        setBook(item);
        router.push(`/add-book-to-shelf/${item.title}&${item.author}`);
      }}
    >
      <Book
        title={item.title}
        cover={item.cover}
        author={item.author}
        description={item.description}
        rating={item.rating}
        review={item.review}
      />
    </button>
  ));
  return <section>{formattedBooks.length ? formattedBooks : null}</section>;
}
