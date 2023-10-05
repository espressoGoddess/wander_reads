import { BaseBook } from "@/types/types";

async function addBookToShelf(
  shelf: string,
  book: BaseBook,
  review?: string,
  rating?: number
) {
  const res = await fetch("http://localhost:3001/api/v1/bookshelf", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      author: book.author,
      title: book.title,
      shelfType: shelf,
      cover: book.cover,
      description: book.description,
      rating: Math.round(rating / 10),
      review: review,
    }),
  });
  const data = await res.json();
  return data;
}

async function getBooks(shelf: string) {
  const res = await fetch(
    `http://localhost:3001/api/v1/bookshelf?shelfType=${shelf}`
  );
  const data = await res.json();
  return data.books;
}

module.exports = {
  getBooks,
  addBookToShelf,
};
