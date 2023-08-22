import { useRouter } from "next/router";
import Book from "./Book";
import { BookContext } from "@/context/book";
import { useContext } from "react";

export default function Shelf({ books, type, heading }) {
  const [book, setBook] = useContext(BookContext);
  const router = useRouter();

  const formattedBooks = books.map((item) => (
    <button
      key={item.id}
      onClick={() => {
        setBook(item);
        if (type === "search") {
          router.push(`/add-book?${item.title}&${item.author}`);
        } else {
          router.push(`/book-details?${item.title}&${item.author}`);
        }
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
  return (
    <section>
      <h1 className="m-6">{heading}</h1>
      {formattedBooks.length ? (
        formattedBooks
      ) : (
        <p>You don't have any books on this shelf yet.</p>
      )}
    </section>
  );
}
