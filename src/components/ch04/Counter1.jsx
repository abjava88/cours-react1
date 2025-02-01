import React from "react";

const Counter1 = ({ click = 0 }) => {
  console.log("Counter1 has rendered");
  return <div>Counter1 : nombre clicks {click}</div>;
};

export default Counter1;
