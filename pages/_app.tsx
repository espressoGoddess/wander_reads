// These styles apply to every route in the application
import "@/styles/globals.css";
import Layout from "../components/layout";
import { BookContext } from "@/context/book";
import { AppProps } from "next/app";
import { useState } from "react";
import { BookType } from "@/types/types";
type BookContextType = BookType | null;

export default function App({ Component, pageProps }: AppProps) {
  const [book, setBook] = useState(null as BookContextType);
  return (
    <BookContext.Provider value={{ book, setBook }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookContext.Provider>
  );
}
