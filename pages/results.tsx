import Book from "@/components/Book";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Results() {
  const { query } = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    if (query?.isbn) {
      loadDataByIsbn(query.isbn).then((data) => {
        setData(data);
      });
    }
    // if title and author...
  }, [query]);

  return data ? (
    <Book
      cover={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`}
      title={data.title}
      author={data.author}
      description={data.description?.value}
    />
  ) : null;
}

async function loadDataByIsbn(isbn) {
  const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
  const data = await res.json();
  console.log("data", data);
  const res2 = await fetch(`https://openlibrary.org${data.works[0].key}.json`);
  const data2 = await res2.json();
  console.log("data2", data2);
  let res3, data3;
  if (data2.authors) {
    res3 = await fetch(
      `https://openlibrary.org${data2.authors[0].author.key}.json`
    );
    data3 = await res3.json();
    return { ...data, author: data3.name };
  }
  return data;
}
