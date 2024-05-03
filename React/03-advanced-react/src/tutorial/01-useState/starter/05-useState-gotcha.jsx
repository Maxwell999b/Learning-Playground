import { useState } from "react";
const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const updateValue = () => {
    setValue(value + 1);
    console.log(value);
  };
  return (
    <>
      <h2>{value}</h2>
      <button type="button" onClick={updateValue} className="btn">
        update Number
      </button>
    </>
  );
};

export default UseStateGotcha;
