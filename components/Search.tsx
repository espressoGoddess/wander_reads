import { useState } from "react";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  // on submit - validate that either isbn or author/title is filled out
  // if isbn has text, make sure they are valid with regex
  // then call api with isbn

  const [isbn, setIsbn] = useState("");
  const [searchTerm, setSearchTerm] = useState({ type: "", value: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isbn) {
      const isbnRegex =
        /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
      //thank you Lokesh Gupta @ https://howtodoinjava.com/java/regex/java-regex-validate-international-standard-book-number-isbns/

      if (isbnRegex.test(isbn)) {
        router.push(`/results?isbn=${encodeURIComponent(isbn)}`);
      }
    }
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)} className="w-11/12 m-6">
        <Input
          label="ISBN"
          // type="number"
          id="isbn"
          name="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <p className="mt-16 text-center">OR</p>
        <div className="mt-16">
          <div className="mb-4">
            <Select
              onChange={(value) => {
                setSearchTerm((prevState) => ({
                  ...prevState,
                  type: value,
                }));
                console.log(searchTerm);
              }}
              value={searchTerm.type}
              variant="outlined"
              label="Select Search Type"
            >
              <Option value="author">Author</Option>
              <Option value="title">Title</Option>
            </Select>
          </div>
          <Input
            type="text"
            id="search-term"
            name="search-term"
            value={searchTerm.value}
            label={searchTerm.type || "Author or Title Name"}
            onChange={(e) =>
              setSearchTerm((prevState) => ({
                ...prevState,
                value: e.target.value,
              }))
            }
          />
        </div>
        <Button className="mt-6" variant="outlined" ripple={true} type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
}
