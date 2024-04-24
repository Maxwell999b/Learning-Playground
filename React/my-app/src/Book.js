const Book = (props) => {
  const { img, title, author, getBooks, id } = props;
  //   console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => getBooks(id)}>
        Show Title
      </button>
    </article>
  );
};
export default Book;
