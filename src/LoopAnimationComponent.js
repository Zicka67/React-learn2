import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function LoopAnimationComponent() {
//   const props = useSpring({
//     to: [{ opacity: 1 }, { opacity: 0.5 }],
//     from: { opacity: 0 },
//     loop: { reverse: true }
//   });

//Fade In & Out avec Variation de Taille
//   const props = useSpring({
//     to: [
//       { opacity: 1, transform: 'scale(1.5)' },
//       { opacity: 0.5, transform: 'scale(1)' }
//     ],
//     from: { opacity: 0, transform: 'scale(1)' },
//     loop: true,
//   });

//Déplacement Vertical
// const props = useSpring({
//     to: [
//       { transform: 'translateY(0px)' },
//       { transform: 'translateY(-30px)' }
//     ],
//     from: { transform: 'translateY(0px)' },
//     loop: true,
//     config: config.wobbly
//   });

//Changer de Couleur
// const props = useSpring({
//     to: [
//       { backgroundColor: '#ff4757' },
//       { backgroundColor: '#1e90ff' }
//     ],
//     from: { backgroundColor: '#ff4757' },
//     loop: true,
//     config: config.slow
//   });

//Rotation en boucle
    const props = useSpring({
        to: [
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
        ],
        from: { transform: 'rotate(0deg)' },
        loop: true,
        config: config.slow
    });


  return (
    <animated.div style={props}>
      I will fade in and out in a loop!
    </animated.div>
  );
}

export default LoopAnimationComponent;
