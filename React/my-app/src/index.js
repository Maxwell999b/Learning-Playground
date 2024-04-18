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
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book} />;
      })}
    </section>
  );
}

const EventExample = () => {
  const handleStyle = {
    margin: "5px",
    padding: "5px",
    borderRadius: "5px",
    border: "2px solid black",
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "none",
    width: "300px",
    height: "50px",
  };
  const handleInput = () => {
    console.log("handle_Input_LOG");
  };
  const handleButton = () => {
    console.log("handle_Button_LOG");
  };
  return (
    <div>
      <form>
        <h1>Hello</h1>
        <input
          type="text"
          name="inputName"
          placeholder="Enter your name"
          style={{ handleStyle }}
          onChange={handleInput}
        />

        <button type="button" style={handleStyle} onClick={handleButton}>
          ClickMe
        </button>
      </form>
    </div>
  );
};

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
