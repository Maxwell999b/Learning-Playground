import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const updateValue = () => {
    setTimeout(() => {
      setValue((currentValue) => {
        console.log(currentValue);
        return currentValue + 1;
      });
    }, 3000);
  };
  const logCurrentValue = () => {
    console.log(value); // Log the updated value
  };
  return (
    <>
      <h2>{`You have Clicked: ${value}`}</h2>
      <button type="button" onClick={updateValue} className="btn">
        update Number
      </button>
      <button type="button" onClick={logCurrentValue} className="btn" style={{ marginTop: "2rem", marginLeft: "1rem" }}>
        Log Current Value
      </button>
    </>
  );
};

export default UseStateGotcha;
