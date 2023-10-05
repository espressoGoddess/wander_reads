import SearchResults from "@/components/SearchResults";
import Shelf from "@/components/Shelf";
import { SearchResult } from "@/types/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Results() {
  const { query } = useRouter();
  const [bookData, setBookData] = useState<SearchResult[]>([]);
  const [noBooksFound, setNoBooksFound] = useState(false);

  useEffect(() => {
    searchAPI(
      query?.isbn as string,
      query?.author as string,
      query?.title as string
    ).then((data) => {
      if (data.length) {
        setBookData(data);
      } else {
        setNoBooksFound(true);
      }
    });
  }, [query]);

  if (bookData.length) {
    return <SearchResults results={bookData} />;
  } else if (noBooksFound) {
    return (
      <h1 className="text-2xl text-center m-4">{`Sorry, no books matching '${
        query?.isbn || query?.author || query?.title
      }' were found 😿`}</h1>
    );
  } else {
    return <h1 className="text-2xl text-center m-4">Loading...</h1>;
  }
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
