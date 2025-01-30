import React from "react";

const who = "Alex John";
const greet = <p>Hello {who}</p>;

function helloWorld() {
  return "Hello World!";
}
const Test = () => {
  return (
    <div>
      <div>{greet}</div>
      <div>{helloWorld()}</div>
    </div>
  );
};

export default Test;
