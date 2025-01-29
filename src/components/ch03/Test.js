import React from "react";

const who = "Alex John";
const greet = <h1>Hello {who}</h1>;

function helloWorld() {
  return "Hello World!";
}
const Test = () => {
  return (<div>
    <p>{greet}</p>
    <p>{helloWorld()}</p>
    </div>);
};

export default Test;
