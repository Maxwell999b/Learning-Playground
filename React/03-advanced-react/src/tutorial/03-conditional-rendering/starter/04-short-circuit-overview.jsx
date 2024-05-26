import { useState } from "react";

const ShortCircuitOverview = () => {
  const [empty, SetEmpty] = useState("");
  const [name, SetName] = useState("Maxwell");
  const codeExample = name || "hello world";
  const EmptyString = "";
  const InlineStyle2 = { border: "Skyblue dotted 5px" };
  // can't use if statements
  return (
    <div>
      <h1> with first param : empty / second param : string </h1>
      <h2>OR</h2>
      <h4 style={InlineStyle2}>{empty || "hello world"}</h4>
      <h4 style={InlineStyle2}>{name || "hello world"}</h4>
      <h2>AND</h2>
      <h4 style={InlineStyle2}>...{empty && "hello world"}</h4>
      <h4 style={InlineStyle2}>{name && "hello world"}</h4>
      {/* {codeExample} */}
      <h2>MIX</h2>
      <h4 style={InlineStyle2}>{empty && EmptyString}</h4>
      <h4 style={InlineStyle2}>{empty || null}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
