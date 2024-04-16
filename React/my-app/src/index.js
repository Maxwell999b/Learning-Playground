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
      {books.map(({ img, title, author, id }) => {
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
