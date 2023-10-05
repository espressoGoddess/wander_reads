import { Button } from "@material-tailwind/react";
import catBook from "../public/cat-book.png";
import Image from "next/image";

export default function Error() {
  return (
    <section>
      <h1 className="mt-6 text-9xl text-center">404</h1>
      <div className="flex justify-center">
        <Image
          className="max-w-lg"
          src={catBook}
          alt="cat sleeping on top of books"
          width={400}
          height={600}
        />
      </div>
      <div className="text-center">
        <h2 className="mt-2">This page appears to be sleeping...</h2>
        <Button className="mt-6" variant="outlined" ripple={true}>
          Go Home
        </Button>
      </div>
    </section>
  );
}
