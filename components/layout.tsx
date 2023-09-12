import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.svg";
import { Nav } from "./Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <header className="flex justify-between m-2">
        <button className="ml-2" onClick={() => router.push("/")}>
          <Image src={logo} alt={"wander reads logo"} width={300} height={75} />
        </button>
        <Nav />
      </header>
      {children}
    </>
  );
}
