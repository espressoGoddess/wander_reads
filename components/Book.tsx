import Image from "next/image";
export default function Book({ ISBNInfo, cover, author, worksInfo }) {
  return (
    <article className="m-5 flex flex-col">
      <div className="flex">
        <Image
          className="object-cover"
          alt={`${ISBNInfo.title} cover`}
          src={cover}
          width={100}
          height={150}
        />
        <div className="flex mx-4 w-full flex-col">
          <p className="mt-4 text-2xl">{ISBNInfo.title}</p>
          <p className="mx-2 mt-6">By {author.name}</p>
        </div>
      </div>
      <p className="mt-4 h-24 line-clamp-4">{worksInfo.description}</p>
    </article>
  );
}
