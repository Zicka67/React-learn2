import React, { useState } from 'react';
import './App.css';

function WaterEffect() {
  const [waterLevel, setWaterLevel] = useState(50); 

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { top, left, width, height } = event.currentTarget.getBoundingClientRect();
    const offsetX = (clientX - left) - width / 2;
    const offsetY = (clientY - top) - height / 2;
    const newWaterLevel = 50 - offsetY / 2; 
    setWaterLevel(newWaterLevel);
  };

  return (
    <div 
      className="container" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setWaterLevel(50)} 
    >
      <div 
        className="water" 
        style={{ transform: `translateY(${waterLevel}%)` }}
      ></div>
    </div>
  );
}

export default WaterEffect;
