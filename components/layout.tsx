import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../public/logo.svg";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <header>
        <button onClick={() => router.push("/")}>
          <Image
            src={logo}
            alt={"wander reads logo"}
            width={500}
            height={100}
          />
        </button>
      </header>
      {children}
    </>
  );
}
