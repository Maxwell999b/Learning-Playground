import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "Max", age: 21, hobby: "read books" });

  const UpdateStateObject = () => {
    if (person.name === "Max") {
      setPerson({ name: "John", age: 28, hobby: "scream at the computer" });
    } else {
      setPerson({ name: "Max", age: 21, hobby: "read books" });
    }
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.hobby}</h3>
      <button type="button" onClick={UpdateStateObject} className="btn">
        Change State
      </button>
    </div>
  );
};

export default UseStateObject;
