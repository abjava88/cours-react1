import React from "react";

const Book1 = ({ children, titre }) => {
  console.log(`Titre : ${titre}`);
  return <div>{children}</div>;
};

export default Book1;
