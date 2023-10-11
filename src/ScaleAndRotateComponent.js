import React from 'react';
import { useSpring, animated, config } from 'react-spring';

function ScaleAndRotateComponent() {
    // Douce et Lente
//     const props = useSpring({
//     to: { transform: 'scale(1.5) rotate(90deg)', color: 'orange' },
//     from: { transform: 'scale(1) rotate(0deg)', color: 'blue' },
//     config: { tension: 120, friction: 20, duration: 3000 }
//   });
//Rebondissante
// const props = useSpring({
//     to: { transform: 'scale(3) rotate(360deg)', color: 'orange' },
//     from: { transform: 'scale(1) rotate(0deg)', color: 'blue' },
//     config: { tension: 280, friction: 60, duration: 2000 }
//   });

//Boucle continue de rotation 
// const props = useSpring({
//     to: [{ transform: 'rotate(360deg)' }],
//     from: { transform: 'rotate(0deg)' },
//     loop: true,
//     config: { duration: 2000 }
// });

// Pulsation 
// const props = useSpring({
//     to: [
//         { transform: 'scale(1.5)' },
//         { transform: 'scale(1)' }
//     ],
//     from: { transform: 'scale(1)' },
//     loop: true,
//     config: { tension: 250, friction: 20, duration: 300 }
// });

// Va-et-vient (scale et rotation)
// const props = useSpring({
//     to: [
//         { transform: 'scale(2) rotate(45deg)', color: 'orange' },
//         { transform: 'scale(1) rotate(0deg)', color: 'blue' }
//     ],
//     from: { transform: 'scale(1) rotate(0deg)', color: 'blue' },
//     loop: { reverse: true },
//     config: { tension: 250, friction: 15 }
// });

// Rotation infinie lente 
// const props = useSpring({
//     to: { transform: 'rotate(360deg)' },
//     from: { transform: 'rotate(0deg)' },
//     loop: true,
//     config: { duration: 10000 }  // 10 secondes pour une rotation complète
// });

// Vibration
// const props = useSpring({
//     to: [
//         { transform: 'scale(1.1)' },
//         { transform: 'scale(0.9)' }
//     ],
//     from: { transform: 'scale(1)' },
//     loop: true,
//     config: { tension: 1000, friction: 3, duration: 100 }
// });

// Coeur
  const props = useSpring({
    to: [
        { transform: 'scale(1.5)' }, // Augmente la taille 
        { transform: 'scale(1)' },    // Retour à la taille normale
        { transform: 'scale(1.5)' }, // Augmente la taille
        { transform: 'scale(1)' },   // Retour à la taille normale
    ],
    from: { transform: 'scale(1)' }, //Commence par la taille normale
    loop: { reverse: true },// Répéte l'animation indéfiniment
    config: { duration: 300 } // Durée de l'animation pour chaque transition
});


  return (
    <animated.div style={props}>
      I will scale up and rotate!
      ❤️
    </animated.div>
  );
}

export default ScaleAndRotateComponent;
