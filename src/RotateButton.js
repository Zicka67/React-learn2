import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RotateButton = () => {
  const [rotationState, setRotationState] = useState('notRotated');

  const variants = {
    rotated: { rotateX: 360 },
    notRotated: { rotateX: 0 }
  };

  const transition = {
    duration: 2, 
    ease: [0.6, 0.01, -0.05, 0.95]
  };

  const handleClick = () => {
    setRotationState(rotationState === 'notRotated' ? 'rotated' : 'notRotated');
  };

  return (
    <motion.button className="rotate-button"
      initial="notRotated"
      animate={rotationState}
      variants={variants}
      transition={transition}
      onClick={handleClick}
    >
      Clic moi !
    </motion.button>
  );
};

export default RotateButton;
