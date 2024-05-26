import { useState, useEffect } from "react";
const CleanupFunction = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShow(!show)}>
        Toggle
      </button>
      {show && <ShowFirst />}
    </div>
  );
};
const ShowFirst = () => {
  useEffect(() => {
    console.log("toggle is there...");
  }, []);
  return <h1>Show Text Toggling..</h1>;
};

export default CleanupFunction;
