import { useState } from "react";
const UseStateBasics = () => {
  const [counter, useCounter] = useState(0);
  const handleButton = () => {
    useCounter(counter + 1);
  };
  return (
    <div>
      <h1>You have Clicked {counter} times</h1>
      <button className="btn" onClick={handleButton}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateBasics;
