// import data
import {
  mrFoxBookByISBN,
  mrFoxAuthor,
  mrFoxBookByWorks,
} from "../data/mrFox.js";
import Image from "next/image";
import mrFoxCover from "../data/mrFox.jpeg";
export default function Book() {
  return (
    <article className="m-5 flex flex-col">
      <div className="flex">
        <Image
          className="object-cover"
          alt={`${mrFoxBookByISBN.title} cover`}
          src={mrFoxCover}
          width={100}
          height={150}
        />
        <div className="flex mx-4 w-full flex-col">
          <p className="mt-4 text-2xl">{mrFoxBookByISBN.title}</p>
          <p className="mx-2 mt-6">By {mrFoxAuthor.name}</p>
        </div>
      </div>
      <p className="mt-4 h-24 line-clamp-4">{mrFoxBookByWorks.description}</p>
    </article>
  );
}
