import Book from "./Book";
import { toReadBooks } from "../data/toReadShelfData";

export default function Shelf() {
  const formattedBooks = toReadBooks.map((item) => (
    <Book
      key={item.id}
      title={item.title}
      cover={item.cover}
      author={item.author}
      description={item.description}
      rating={item.rating}
    />
  ));
  return (
    <section>
      <h2>Want to read books</h2>
      {formattedBooks.length ? formattedBooks : null}
    </section>
  );
}
