import { data } from "../../../data";
import { useState } from "react";
const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const handleRemoveItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <h1>List</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => handleRemoveItem(id)}>
              remove item
            </button>
          </div>
        );
      })}
      <button className="btn" style={{ marginTop: "2rem" }} onClick={() => setPeople([])}>
        Clear All Items
      </button>
    </div>
  );
};

export default UseStateArray;
