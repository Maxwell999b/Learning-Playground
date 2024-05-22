import { useState } from "react";

const UseStateObject = () => {
  let [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("Read Books");
  const handleButton = () => {
    setName("John");
    setAge(28);
    setHobby("Screaming At The Computer");
  };
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h4>{hobby}</h4>
      <button className="btn" onClick={handleButton}>
        Change the Data
      </button>
    </div>
  );
};

export default UseStateObject;
