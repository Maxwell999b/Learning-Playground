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
    // console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => clearInterval(intID);
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
