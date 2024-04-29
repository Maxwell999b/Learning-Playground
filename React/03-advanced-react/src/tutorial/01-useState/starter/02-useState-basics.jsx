import { useState } from "react";
const UseStateBasics = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter(counter + 1);
    // console.log(counter + 1);
  };
  return (
    <div>
      <h1>You have Clicked {counter} times</h1>
      <button type="button" className="btn" onClick={handleCounter}>
        Click
      </button>
    </div>
  );
};

export default UseStateBasics;
