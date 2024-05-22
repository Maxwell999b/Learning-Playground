import { useState } from "react";

const UseStateObject = () => {
  let [person, setPerson] = useState({ name: "peter", age: 24, hobby: "Read Books" });
  const { name, age, hobby } = person;
  const handleButton = () => {
    setPerson({
      name: "John",
      age: 28,
      hobby: "Screaming At The Computer",
    });
    // setPerson({ ...person, name: "Max" });
    // setPerson({ name: "Max" });
  };
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h4>{hobby}</h4>
      <button className="btn" onClick={handleButton}>
        Change the Data
      </button>
    </>
  );
};

export default UseStateObject;
