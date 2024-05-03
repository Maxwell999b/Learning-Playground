import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const updateValue = () => {
    setValue((prevState) => {
      const newState = prevState + 1;
      console.log(newState);
      return newState;
    });
    // console.log("old : " + value);
  };
  return (
    <>
      <h2>{`You have Clicked: ${value}`}</h2>
      <button type="button" onClick={updateValue} className="btn">
        update Number
      </button>
    </>
  );
};

export default UseStateGotcha;
