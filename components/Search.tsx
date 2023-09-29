import { useState } from "react";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState({ type: "", value: "" });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm.type === "isbn" && searchTerm.value) {
      const isbnRegex =
        /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
      //thank you Lokesh Gupta @ https://howtodoinjava.com/java/regex/java-regex-validate-international-standard-book-number-isbns/

      if (isbnRegex.test(searchTerm.value)) {
        router.push(`/results?isbn=${encodeURIComponent(searchTerm.value)}`);
      } else {
        setError(`'${searchTerm.value}' is not a valid ISBN`);
      }
    } else if (searchTerm.type && searchTerm.value) {
      router.push(
        `/results?${searchTerm.type}=${encodeURIComponent(searchTerm.value)}`
      );
    } else if (!searchTerm.type && !searchTerm.value) {
      setError("You must enter a search type and a value");
    } else if (!searchTerm.value) {
      setError(`Please enter ${getSnippet(searchTerm.type)}`);
    } else if (!searchTerm.type) {
      setError(`You must select a type for your search of ${searchTerm.value}`);
    }
  };

  return (
    <section>
      <form onSubmit={(e) => handleSubmit(e)} className="w-11/12 m-4 mt-14">
        <div className="mt-16">
          <Select
            onChange={(value) => {
              setSearchTerm((prevState) => ({
                ...prevState,
                type: value ?? "",
              }));
            }}
            value={searchTerm.type}
            variant="outlined"
            label="Select Search Type"
          >
            <Option value="author">Author</Option>
            <Option value="title">Title</Option>
            <Option value="isbn">ISBN</Option>
          </Select>
        </div>
        <Input
          type="text"
          id="search-term"
          name="search-term"
          value={searchTerm.value}
          label={searchTerm.type || "Author, Title, or ISBN"}
          onChange={(e) =>
            setSearchTerm((prevState) => ({
              ...prevState,
              value: e.target.value,
            }))
          }
        />
        <Button
          className="mt-10"
          variant="outlined"
          ripple={true}
          type="submit"
        >
          Find Book
        </Button>
        {error ? <p className="text-red-500">{error}</p> : null}
      </form>
    </section>
  );
}

function getSnippet(type: string) {
  if (type === "title") {
    return `a ${type}`;
  } else {
    return `an ${type}`;
  }
}
