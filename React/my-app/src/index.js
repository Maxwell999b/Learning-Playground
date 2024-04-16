import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    img: "./images/book1.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 1,
  },
  {
    img: "./images/book2.jpg",
    title: "The Housemaid Paperback",
    author: "Freida McFadden",
    id: 2,
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
