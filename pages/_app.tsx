// These styles apply to every route in the application
import "@/styles/globals.css";
import Layout from "../components/layout";
import { BookInfoProvider } from "@/context/book";

export default function App({ Component, pageProps }) {
  return (
    <BookInfoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookInfoProvider>
  );
}
