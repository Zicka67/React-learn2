import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const Slowly = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1.5 }}
      // POUR HAUT BAS
      // variants={{
      //   visible: { opacity: 1, y: 0 },
      //   hidden: { opacity: 0, y: 100 }
      // }}
      // POUR DROITE ET GAUCHE
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -800 }
        }}
        
    >
      {children}
    </motion.div>
  );
};
