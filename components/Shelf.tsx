import Book from "./Book";
import {
  mrFoxBookByISBN,
  mrFoxAuthor,
  mrFoxBookByWorks,
} from "../data/mrFox.js";
import {
  manSearchByISBN,
  manSearchAuthor,
  manSearchByWorks,
} from "../data/manSearch";

export default function Shelf() {
  const book1 = {
    isbn: mrFoxBookByISBN,
    author: mrFoxAuthor,
    works: mrFoxBookByWorks,
    cover: `https://covers.openlibrary.org/b/id/${mrFoxBookByISBN.covers[0]}-L.jpg`,
  };
  const book2 = {
    isbn: manSearchByISBN,
    author: manSearchAuthor,
    works: manSearchByWorks,
    cover: `https://covers.openlibrary.org/b/id/${manSearchByISBN.covers[0]}-L.jpg`,
  };
  const book3 = {
    isbn: mrFoxBookByISBN,
    author: mrFoxAuthor,
    works: mrFoxBookByWorks,
    cover: `https://covers.openlibrary.org/b/id/${mrFoxBookByISBN.covers[0]}-L.jpg`,
  };
  const book4 = {
    isbn: manSearchByISBN,
    author: manSearchAuthor,
    works: manSearchByWorks,
    cover: `https://covers.openlibrary.org/b/id/${manSearchByISBN.covers[0]}-L.jpg`,
  };
  const books = [book1, book2, book3, book4];

  const formattedBooks = books.map((item) => (
    <Book
      key={item.isbn.key}
      ISBNInfo={item.isbn}
      cover={item.cover}
      author={item.author}
      worksInfo={item.works}
    />
  ));
  return <section>{formattedBooks}</section>;
}
