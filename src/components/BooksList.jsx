import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./BookDetails";

export default function BooksList() {
  const { books } = useContext(BookContext);
  return (
    <div className="">
      Books List
      {books.map((book) => (
        <BookDetails book={book} key={book.id} />
      ))}
    </div>
  );
}
