import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import HomeButton from "./Home";
import Book from "./Book";
import { books } from "./books";

function BookList() {
  return (
    <>
      <h1 className="titleHeader">amazon best sellers</h1>
      <section className="bookList">
        <HomeButton />
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
