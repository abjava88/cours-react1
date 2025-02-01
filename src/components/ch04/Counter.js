import React, { useState } from "react";

const Counter = () => {
  const [click, setClick] = useState(0);
  console.log(`Counter render`);

  return (
    <>
      <div>
        <p>Nombre de clics : {click}</p>
        <button onClick={() => setClick(click + 1)}>Cliquez ici</button>
      </div>
    </>
  );
};

export default Counter;
