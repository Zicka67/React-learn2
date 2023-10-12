import React from "react";
import { motion } from "framer-motion";

const FramerMotion1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -800 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 800 }}
      transition={{ duration: 1.5 }}
    >
      Hello, I'm animated!
    </motion.div>
  );
};

export default FramerMotion1;
