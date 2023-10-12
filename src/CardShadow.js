import { motion } from 'framer-motion';

export const CardShadow = ({ children, ...props }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
    transition={{ duration: 0.3 }}
    {...props}
    style={{ height: 200, width: 200, backgroundColor: 'lightblue' }}
 >
    {children}
 </motion.div>
 
  );
};
