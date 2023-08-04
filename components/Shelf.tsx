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
import manSearchCover from "../data/manSearch.jpeg";
import mrFoxCover from "../data/mrFox.jpeg";

export default function Shelf() {
  const book1 = {
    isbn: mrFoxBookByISBN,
    author: mrFoxAuthor,
    works: mrFoxBookByWorks,
    cover: mrFoxCover,
  };
  const book2 = {
    isbn: manSearchByISBN,
    author: manSearchAuthor,
    works: manSearchByWorks,
    cover: manSearchCover,
  };
  const book3 = {
    isbn: mrFoxBookByISBN,
    author: mrFoxAuthor,
    works: mrFoxBookByWorks,
    cover: mrFoxCover,
  };
  const book4 = {
    isbn: manSearchByISBN,
    author: manSearchAuthor,
    works: manSearchByWorks,
    cover: manSearchCover,
  };
  const books = [book1, book2, book3, book4];

  const formattedBooks = books.map((item) => (
    <Book
      ISBNInfo={item.isbn}
      cover={item.cover}
      author={item.author}
      worksInfo={item.works}
    />
  ));
  return <section>{formattedBooks}</section>;
}
