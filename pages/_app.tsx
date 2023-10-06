// These styles apply to every route in the application
import "@/styles/globals.css";
import Layout from "../components/layout";
import { BookContext, GenericBook } from "@/context/book";
import { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [book, setBook] = useState(null as GenericBook);
  return (
    <BookContext.Provider value={{ book, setBook }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookContext.Provider>
  );
}
