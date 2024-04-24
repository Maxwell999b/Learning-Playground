import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import HomeButton from "./Home";
import Book from "./Book";
import { books } from "./books";

function BookList() {
  return (
    <section className="bookList">
      <HomeButton />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
