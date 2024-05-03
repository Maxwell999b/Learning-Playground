import React, { useState } from "react";

const UseStateObject = () => {
  const initialPeople = [
    { name: "Max", age: 27, hobby: "read books" },
    { name: "John", age: 30, hobby: "play guitar" },
    { name: "Alice", age: 25, hobby: "painting" },
  ];

  const [personIndex, setPersonIndex] = useState(0);
  const [person, setPerson] = useState(initialPeople[personIndex]);

  const updatePerson = () => {
    const nextIndex = (personIndex + 1) % initialPeople.length;
    setPersonIndex(nextIndex);
    setPerson(initialPeople[nextIndex]);
  };

  return (
    <div>
      <h2>useState object example</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Hobby: {person.hobby}</p>
      <button onClick={updatePerson}>Next Person</button>
    </div>
  );
};

export default UseStateObject;
