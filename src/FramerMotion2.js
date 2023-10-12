import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Visibility</button>
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Hello, I'm animated!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MyComponent;
