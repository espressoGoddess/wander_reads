import { useRouter } from "next/router";
import Book from "./Book";
import { BookContext } from "@/context/book";
import { useContext } from "react";
import { SearchResult } from "@/types/types";
type SearchResultsProps = { results: SearchResult[] };

export default function SearchResults({ results }: SearchResultsProps) {
  const { setBook } = useContext(BookContext);
  const router = useRouter();

  const formattedBooks = results.map((item) => (
    <button
      key={item.id}
      onClick={() => {
        setBook(item);
        console.log(item);
        router.push(`/add-book?${item.title}&${item.author}`);
      }}
    >
      <Book
        title={item.title}
        cover={item.cover}
        author={item.author}
        description={item.description}
      />
    </button>
  ));
  return (
    <section>
      <h1 className="m-6">Results</h1>
      {formattedBooks.length ? (
        formattedBooks
      ) : (
        <p>You don&apos;t have any books on this shelf yet.</p>
        //this is showing up after searching for a book and the fetch is taking place (loading) momentarily before
      )}
    </section>
  );
}
