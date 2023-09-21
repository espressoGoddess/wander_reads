import Shelf from "@/components/Shelf";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Results() {
  const { query } = useRouter();
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    searchAPI(
      query?.isbn as string,
      query?.author as string,
      query?.title as string
    ).then((data) => setBookData(data));
  }, [query]);

  return bookData.length ? (
    <Shelf
      books={bookData}
      type={"search"}
      heading={`Results for '${Object.values(query)}'`}
    />
  ) : null;
}

async function searchAPI(isbn: string, author: string, title: string) {
  const res = await fetch("http://localhost:3001/api/v1/search", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ isbn, author, title }),
  });
  const data = await res.json();
  return data.data;
}
