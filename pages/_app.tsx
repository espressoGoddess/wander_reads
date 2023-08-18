// These styles apply to every route in the application
import "@/styles/globals.css";
import { BookInfoProvider } from "@/context/book";

export default function App({ Component, pageProps }) {
  return (
    <BookInfoProvider>
      <Component {...pageProps} />
    </BookInfoProvider>
  );
}
