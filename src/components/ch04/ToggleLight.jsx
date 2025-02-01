import React, { useState } from "react";

const ToggleLight = () => {
  const [isOn, setIsOn] = useState(false);

  const messageStyle = {
    color: isOn ? "green" : "red",
  };

  return (
    <>
      <div style={messageStyle}>The light is {isOn ? " on" : " off"}</div>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "off" : "on"}</button>
    </>
  );
};

export default ToggleLight;