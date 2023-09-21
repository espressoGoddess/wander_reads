import Shelf from "@/components/Shelf";
import { useEffect, useState } from "react";
import { getBooks } from "./already-read";

export default function WantToRead() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    getBooks("want_to_read").then((data) => setBooks(data));
  }, []);
  return books ? (
    <Shelf books={books} heading={"Books You Want to Read"} type={"want"} />
  ) : null;
}
