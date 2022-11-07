import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      Add Book
      <form onSubmit={handleSubmit} className="space-x-3">
        <input
          className="p-2 rounded-sm"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          className="p-2 rounded-sm"
          type="text"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          className="cursor-pointer bg-slate-200 px-3 py-2 rounded-sm"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
}
