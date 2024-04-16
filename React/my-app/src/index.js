import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  img: "./images/book1.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

const secondBook = {
  img: "./images/book2.jpg",
  title: "The Housemaid Paperback",
  author: "Freida McFadden",
};

function BookList() {
  return (
    <section className="bookList">
      <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
      <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
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
