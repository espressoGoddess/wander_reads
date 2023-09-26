import React, { FormEvent, useState } from "react";
import { Radio, Button, Textarea, Slider } from "@material-tailwind/react";
import { BookContext } from "@/context/book";
import { useContext } from "react";
import Book from "@/components/Book";
import { BookType } from "@/types/types";
import { useRouter } from "next/router";

function getPageUrl(shelf: string) {
  switch (shelf) {
    case "already_read":
      return "/bookshelf/already-read";
    case "want_to_read":
      return "/bookshelf/want-to-read";
    default:
      return "/404";
  }
}

export default function AddBook() {
  const [shelf, setShelf] = useState("");
  const { book } = useContext(BookContext);
  const [rating, setRating] = useState(50);
  const [review, setReview] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addBookToShelf(shelf, book, review, rating).then((data) => {
      console.log(data);
      router.push(getPageUrl(shelf));
    });
  };

  return book ? (
    <section className="m-6">
      <h1 className="text-xl">Add book to your shelf</h1>
      <Book
        title={book.title}
        author={book.author}
        cover={book.cover}
        description={book.description}
      />
      <form onSubmit={handleSubmit}>
        <h2>Which shelf would you like to add this to?</h2>
        <div className="flex flex-col gap-3 mt-4">
          <Radio
            ripple={false}
            name="type"
            label="Already Read Shelf"
            onChange={() => setShelf("already_read")}
          />
          <Radio
            ripple={false}
            name="type"
            label="Want to Read Shelf"
            onChange={() => setShelf("want_to_read")}
          />
        </div>
        {shelf === "already_read" ? (
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="w-4/5">
                <h2 className="mb-4">What would you rate this book?</h2>
                <Slider
                  size="sm"
                  value={rating}
                  onChange={(e) => {
                    setRating(parseInt(e.target.value));
                  }}
                  className="mb-8"
                />
              </div>
              <p>{Math.round(rating / 10)}</p>
            </div>
            <Textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              label="What did you think about this book?"
            />
          </div>
        ) : null}
        <Button
          className="mt-6"
          variant="outlined"
          ripple={true}
          type="submit"
          disabled={!shelf || (shelf === "already" && !review) || !rating}
        >
          Add book
        </Button>
      </form>
    </section>
  ) : (
    <NoBookAvailable />
  );
}

function NoBookAvailable() {
  return <p>Pls try again</p>;
}

async function addBookToShelf(
  shelf: string,
  book: BookType,
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
