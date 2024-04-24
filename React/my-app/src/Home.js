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
export default HomeButton;
