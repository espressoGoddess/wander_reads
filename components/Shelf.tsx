import Book from "./Book";

export default function Shelf({ books }) {
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
  return <section>{formattedBooks.length ? formattedBooks : null}</section>;
}
