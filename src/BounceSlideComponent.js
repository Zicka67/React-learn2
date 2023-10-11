import React from 'react';
import { useSpring, animated } from 'react-spring';

function BounceSlideComponent() {
    const props = useSpring({
        to: { transform: 'translateX(50%)' },
        from: { transform: 'translateX(-600%)' },
        config: { mass: 0.8, tension: 100, friction: 10 },
    });

    return (
        <animated.div style={props} className="slideDiv">
            <div className='square'>
              <p>Titre qui slide and bounce !!</p> 
            </div>
            
        </animated.div>
    );
}

export default BounceSlideComponent;
