import React, { useState } from "react";
import { Radio, Button, Textarea } from "@material-tailwind/react";
import { BookContext } from "@/context/book";
import { useContext } from "react";
import Book from "@/components/Book";

export default function AddBook() {
  const [shelf, setShelf] = useState(null);
  const [book] = useContext(BookContext);

  return (
    <section className="m-6">
      <h1 className="text-xl">Add book to your shelf</h1>
      <Book
        title={book.title}
        author={book.author}
        cover={book.cover}
        description={book.description}
      />
      <form>
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
        <div className="mt-6">
          <Textarea label="What did you think about this book?" />
        </div>
        <Button
          className="mt-6"
          variant="outlined"
          ripple={true}
          type="submit"
          disabled={!shelf}
        >
          Add book
        </Button>
      </form>
    </section>
  );
}
