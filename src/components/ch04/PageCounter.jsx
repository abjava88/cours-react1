import React, { useState } from "react";
import Counter from "./Counter";
import Counter1 from "./Counter1";

const PageCounter = () => {
  const [click, setClick] = useState(0);
  const handleClick = (count) => {
    setClick(count);
  };
  console.log(`Counter render`);
  return (
    <>
      <div style={{ border: "1px solid" }}>
        <p>Nombre de clics : {click}</p>
        <button onClick={() => handleClick(click + 1)}>Cliquez ici</button>
        <Counter />
        <Counter1 click = {click}/>
      </div>
    </>
  );
};

export default PageCounter;
