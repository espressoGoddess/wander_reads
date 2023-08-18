import Search from "@/components/Search";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <header>
        <Image
          src={"logo.svg"}
          alt={"wander reads logo"}
          width={500}
          height={100}
        />
      </header>
      <Search />
    </>
  );
}
