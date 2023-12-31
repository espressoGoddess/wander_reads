import Shelf from '@/components/Shelf';
import { BookType } from '@/types/types';
import { useEffect, useState } from 'react';

export default function AlreadyRead() {
  const [books, setBooks] = useState<BookType[] | null>(null);
  useEffect(() => {
    getBooks('already_read').then((data) => setBooks(data));
  }, []);
  return books ? (
    <Shelf books={books} shelfType={"Books You've Already Read"} />
  ) : (
    <h1 className="text-2xl text-center">Loading...</h1>
  );
}

export async function getBooks(shelf: string) {
  const res = await fetch(
    `http://localhost:3001/api/v1/bookshelf?shelfType=${shelf}`,
  );
  const data = await res.json();
  return data.books;
}
