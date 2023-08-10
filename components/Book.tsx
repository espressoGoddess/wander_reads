import Image from "next/image";
import Rating from "./Rating";
export default function Book({
  title,
  cover,
  author,
  description,
  rating = 0,
  review = "",
}) {
  return (
    <article className="m-5 border rounded-sm p-4 flex flex-col">
      <div className="flex">
        <Image
          className="object-cover"
          alt={`${title} cover`}
          src={cover}
          width={100}
          height={150}
        />
        <div className="flex mx-4 w-full flex-col">
          <h3 className="mt-4 text-2xl">{title}</h3>
          <p className="mx-2 mt-6">By {author}</p>
          <div className="flex mt-3">
            <Rating index={0} rating={rating} />
            <Rating index={1} rating={rating} />
            <Rating index={2} rating={rating} />
            <Rating index={3} rating={rating} />
            <Rating index={4} rating={rating} />
          </div>
        </div>
      </div>
      <p className="mt-4 h-24 line-clamp-4 text-justify">{description}</p>
    </article>
  );
}
