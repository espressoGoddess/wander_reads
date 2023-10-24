import Book from './Book';
import { BookType } from '@/types/types';

type ShelfProps = { books: BookType[]; shelfType: string };

export default function Shelf({ books, shelfType }: ShelfProps) {
  const formattedBooks = books.map((item) => (
    <Book
      key={item.id}
      title={item.title}
      cover={item.cover}
      author={item.author}
      description={item.description}
      rating={item.rating}
      review={item.review}
    />
  ));
  return (
    <section>
      <h1 className="m-6 text-2xl ">{shelfType}</h1>
      {formattedBooks.length ? (
        formattedBooks
      ) : (
        <p>You don&apos;t have any books on this shelf yet.</p>
        //this is showing up after searching for a book and the fetch is taking place (loading) momentarily before
      )}
    </section>
  );
}
