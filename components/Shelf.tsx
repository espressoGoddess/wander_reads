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
    />
  ));
  return <section>{formattedBooks}</section>;
}
