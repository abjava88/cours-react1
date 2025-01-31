import React from "react";

const TodayDate = () => {
  const getDate = (locale) => {
    const today = new Date();
    return today.toLocaleDateString(locale);
  };

  return (
    <>
      <div>Today Date : {getDate("fr-FR")}</div>
    </>
  );
};

export default TodayDate;
