import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function AnimatedComponent() {
  const props = useSpring({
    opacity: 1, 
    from: { opacity: 0 }, 
    marginTop: 0, 
    from: { marginTop: -500 },
    // mass : masse de l'objet animé, affecte comment il réagit à la tension.
    // tension : raideur de la "fente" virtuelle utilisée pour produire l'animation.
    // friction : quantité de résistance que l'objet animé rencontre.
    // config: { mass: 1, tension: 280, friction: 20, duration: 2000 }
    // Animation Douce et Lente
    // config: { mass: 1, tension: 120, friction: 14, duration: 3000 }
    // Animation Rebondissante
    config: { mass: 2, tension: 300, friction: 10}
    // Animation Rigide et Rapide
    // config: { mass: 1, tension: 500, friction: 80, duration: 1000 }
    // Animation Mollesse
    // config: { mass: 2, tension: 150, friction: 10 }
    // gentle, wobbly, stiff, slow, et molasses 
    // config: config.gentle






  });

  return (
    <animated.div style={props}>
      I will fade in and move down!
    </animated.div>
    
  );
}

export default AnimatedComponent;
