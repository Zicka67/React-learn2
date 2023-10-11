// LoadingButtonComponent.js
import React, { useState } from 'react';
import './App.css';

function LoadingButtonComponent() {
  const [loading, setLoading] = useState(false);

  return (
    <button 
      className="loadingButton" 
      onClick={() => setLoading(!loading)}
    >
      {loading ? <div className="loader"></div> : "Load me!"}
    </button>
  );
}

export default LoadingButtonComponent;

