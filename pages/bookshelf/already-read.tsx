import Shelf from "@/components/Shelf";
import { alreadyReadBooks } from "../../data/alreadyReadShelfData.js";

export default function AlreadyRead() {
  return <Shelf books={alreadyReadBooks} />;
}
