import Image from "next/image";

export default function Rating({ index, rating }) {
  let star = rating - index * 2;
  if (star > 2) {
    star = 2;
  } else if (star < 0) {
    star = 0;
  }
  return (
    <Image
      src={`/star${star}.png`}
      alt={`${rating} stars`}
      width={30}
      height={30}
    />
  );
}
