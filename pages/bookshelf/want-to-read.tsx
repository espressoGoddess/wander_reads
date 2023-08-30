import Shelf from "@/components/Shelf";
import { toReadBooks } from "../../data/toReadShelfData.js";

export default function WantToRead() {
  return (
    <Shelf
      books={toReadBooks}
      heading={"Books You Want to Read"}
      type={"want"}
    />
  );
}
