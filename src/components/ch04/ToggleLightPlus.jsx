import React, { useState } from 'react';

const ToggleLightPlus = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          fontSize: '100px',
          marginBottom: '20px',
          transition: 'all 0.1s ease', // transition fluide pour l'animation
          color: isOn ? '#FFEB3B' : 'rgba(255, 235, 59, 0.3)', // jaune quand allumé, transparent quand éteint
        }}
      >
        💡
      </div>

      <button onClick={toggleLight}>
        Toggle Light
      </button>

      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        {isOn ? 'The light is on' : 'The light is off'}
      </div>
    </div>
  );
};

export default ToggleLightPlus;
