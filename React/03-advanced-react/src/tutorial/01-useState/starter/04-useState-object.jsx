import { useState } from "react";
const UseStateObject = () => {
  const [name, setName] = useState("Max");
  const [age, setAge] = useState(21);
  const [hobby, setHobby] = useState("read books");
  const UpdateStateObject = () => {
    setName("John");
    setAge(28);
    setHobby("scream at the computer");
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{hobby}</h3>
      <button type="button" onClick={UpdateStateObject} className="btn">
        change state
      </button>
    </div>
  );
};

export default UseStateObject;
