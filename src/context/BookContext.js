import { createContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";
export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { title: "Book One", author: "Some Author", id: 1 },
    { title: "Book tow", author: "Some Other Author", id: 2 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuidv1() }]);
  };
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
