import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedList = ({ items, removeItem }) => {
  return (
    <AnimatePresence>
      {items.map(item => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          layout
        >
          {item.text}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
