import Shelf from "@/components/Shelf";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Results() {
  const { query } = useRouter();
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    if (query?.isbn) {
      loadDataByIsbn(query.isbn).then((data) => {
        setBookData([data]);
      });
    } else if (query?.author) {
      loadDataByAuthor(query.author).then((data) => {
        setBookData(data);
      });
    } else if (query?.title) {
      loadDataByTitle(query.title).then((data) => setBookData(data));
    }
    //need message if none found
  }, [query]);

  return bookData ? <Shelf books={bookData} /> : null;
}

async function loadDataByIsbn(isbn) {
  const res = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
  const data = await res.json();
  const res2 = await fetch(`https://openlibrary.org${data.works[0].key}.json`);
  const data2 = await res2.json();
  let res3, data3;
  if (data2.authors) {
    res3 = await fetch(
      `https://openlibrary.org${data2.authors[0].author.key}.json`
    );
    data3 = await res3.json();
  }
  return formatDataFromIsbn(data, data2, data3);
}

async function loadDataByAuthor(author) {
  const res = await fetch(
    `https://openlibrary.org/search/authors.json?q=${author}`
  );
  const data = await res.json();
  const res2 = await fetch(
    `https://openlibrary.org/authors/${data.docs[0].key}.json`
  );
  const data2 = await res2.json();
  const res3 = await fetch(`https://openlibrary.org${data2.key}/works.json`);
  const data3 = await res3.json();
  const formattedData = formatDataFromAuthor(data3.entries, author);
  //need to filter out duplicates based on title?
  return formattedData;
}

async function loadDataByTitle(title) {
  const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
  const data = await res.json();
  const books = [];
  for (let i = 0; i < Math.min(data.docs.length, 20); i++) {
    const result = await fetch(
      `https://openlibrary.org${data.docs[i].key}.json`
    );
    const bookData = await result.json();
    books.push({
      title: bookData.title,
      cover: `https://covers.openlibrary.org/b/id/${data.docs[i].cover_i}-L.jpg`,
      author: data.docs[i].author_name,
      description: bookData.description?.value,
      id: data.docs[i].key,
    });
  }
  return books;
}

function formatDataFromIsbn(data1, data2, data3) {
  return {
    author: data3.name,
    title: data1.title,
    cover: data1.covers
      ? `https://covers.openlibrary.org/b/id/${data1.covers[0]}-L.jpg`
      : undefined,
    description: data2.description?.value || data3.description?.value,
    id: data1.key || data2.key || data3.key || Date.now(),
  };
}

function formatDataFromAuthor(data, author) {
  return data.map((item) => ({
    author,
    title: item.title,
    cover: item.covers
      ? `https://covers.openlibrary.org/b/id/${item.covers[0]}-L.jpg`
      : undefined,
    description: item.description?.value,
    id: item.key || Date.now(),
  }));
}
