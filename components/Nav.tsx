import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import menuIcon from "../public/menu.png";
import Image from "next/image";
import { useRouter } from "next/router";

export function Nav() {
  const router = useRouter();
  return (
    <Menu>
      <MenuHandler>
        <Button variant="text">
          <Image
            alt="hamburger menu icon"
            src={menuIcon}
            width={30}
            height={30}
          />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => router.push("/")}>Add a book</MenuItem>
        <MenuItem onClick={() => router.push("/bookshelf/already-read")}>
          Already Read Bookshelf
        </MenuItem>
        <MenuItem onClick={() => router.push("/bookshelf/want-to-read")}>
          Want to Read Bookshelf
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
