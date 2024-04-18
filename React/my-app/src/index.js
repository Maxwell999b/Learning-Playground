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
      <HomeButton />
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book} />;
      })}
    </section>
  );
}
const HomeButton = () => {
  return (
    <a href="http://localhost:3000/">
      <button
        style={{
          textDecoration: "none",
          margin: "5px",
          padding: "5px",
          borderRadius: "5px",
          border: "2px solid black",
          backgroundColor: "grey",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          width: "100%",
          height: "50px",
        }}>
        Home
      </button>
    </a>
  );
};
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
  const handleInput = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log("handle_Input");
  };
  const handleButton = () => {
    console.log("handle_Button");
  };
  const handleSubmit = () => {
    console.log("handle_Submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 style={{ display: "inline", margin: "5px", padding: "5px" }}>Form</h1>
        <input type="text" name="inputName" placeholder="Enter your name" onChange={handleInput} />
        <button type="submit" style={handleStyle}>
          Submit
        </button>
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
