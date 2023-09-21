import Shelf from "@/components/Shelf";
import { useEffect, useState } from "react";

export default function AlreadyRead() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    getBooks("already_read").then((data) => setBooks(data));
  }, []);
  return books ? (
    <Shelf
      books={books}
      type={"already"}
      heading={"Books You've Already Read"}
    />
  ) : null;
}

export async function getBooks(shelf: string) {
  const res = await fetch(
    `http://localhost:3001/api/v1/bookshelf?shelfType=${shelf}`
  );
  const data = await res.json();
  return data.books;
}
