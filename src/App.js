import { useContext } from "react";
import { BookContext } from "./context/BookContext";

import "./App.css";

function App() {
  const { books } = useContext(BookContext);
  return (
    <div className="text-center font-bold text-3xl p-6 bg-slate-500 w-[960px] mx-auto text-zinc-300">
      You have {books.length} 📚
    </div>
  );
}

export default App;
