import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import { BookContextProvider } from "./context/BookContext";
import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookContextProvider>
      <App />
      <div className="w-[960px] mx-auto p-5 bg-slate-400">
        <AddBook />
        <BooksList />
      </div>
    </BookContextProvider>
  </React.StrictMode>
);

