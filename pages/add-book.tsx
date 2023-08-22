import React, { useState } from "react";
import { Radio, Button, Textarea, Slider } from "@material-tailwind/react";
import { BookContext } from "@/context/book";
import { useContext } from "react";
import Book from "@/components/Book";

export default function AddBook() {
  const [shelf, setShelf] = useState(null);
  const [book] = useContext(BookContext);
  const [rating, setRating] = useState(50);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    console.log;
  };

  return (
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
            onChange={() => setShelf("already")}
          />
          <Radio
            ripple={false}
            name="type"
            label="Want to Read Shelf"
            onChange={() => setShelf("want")}
          />
        </div>
        {shelf === "already" ? (
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="w-4/5">
                <h2 className="mb-4">What would you rate this book?</h2>
                <Slider
                  size="sm"
                  // defaultValue={50}
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
  );
}
