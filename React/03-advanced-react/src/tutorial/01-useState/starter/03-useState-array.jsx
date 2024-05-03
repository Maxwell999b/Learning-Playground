import React from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" style={{ backgroundColor: "skyblue" }} onClick={() => removeItem(id)}>
              Delete
            </button>
          </div>
        );
      })}
      <button className="btn" type="button" style={{ marginTop: "2rem" }} onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
