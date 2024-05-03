import { useState } from "react";
const UseStateObject = () => {
  const [person, setPerson] = useState({ name: "Max", age: 21, hobby: "read books" });
  const UpdateStateObject = () => {
    setPerson({ name: "john", age: 28, hobby: "scream at the computer" });
  };
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>{person.hobby}</h3>
      <button type="button" onClick={UpdateStateObject} className="btn">
        change state
      </button>
    </div>
  );
};

export default UseStateObject;
