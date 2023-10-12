import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      animate={{ rotate: 3600 }}
      transition={{ duration: 10, loop: Infinity }}
      style={{ border: '4px solid #eee', borderTop: '4px solid #333', borderRadius: '50%', width: '40px', height: '40px' }}
    />
  );
};
