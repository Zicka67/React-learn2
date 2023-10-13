// import React from 'react';
import './App.css';

//AVEC FRAMER MOTION
import React, { useState } from 'react';

// Avec Spring
// import AnimatedComponent from './AnimatedComponent';
// import ScaleAndRotateComponent from './ScaleAndRotateComponent';
// import LoopAnimationComponent from './LoopAnimationComponent';
// import BounceSlideComponent from './BounceSlideComponent';
// import LoadingButt:onComponent from './LoadingButtonComponent';
// import WaterEffect from './WaterEffect';

// AVEC FRAMER MOTION
// import FramerMotion1  from './FramerMotion1';
// import FramerMotion2  from './FramerMotion2';
// import { ButtonBounce } from './ButtonBounce';
// import { Loader } from './Loader';
// import { CardShadow } from './CardShadow';
// import { Slowly  } from './Slowly';
// import { AnimatedList } from './AnimatedList';
import RotateButton from './RotateButton';

function App() {
  // AVEC FRAMER MOTION
  // const [items, setItems] = useState([
  //   { id: '1', text: 'Item 1' },
  //   { id: '2', text: 'Item 2' },
  //   { id: '3', text: 'Item 3' },
  // ]);

  // const removeItem = (id) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  // const addItem = () => {
  //   setItems((prevItems) => [...prevItems, { id: Date.now().toString(), text: 'New Item' }]);
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <AnimatedComponent />  */}
        {/* <ScaleAndRotateComponent />  */}
        {/* <LoopAnimationComponent />  */}
        {/* <BounceSlideComponent />  */}
        {/* <LoadingButtonComponent />  */}
        {/* <WaterEffect />  */}

        {/* AVEC FRAMER MOTION */}
        {/* <FramerMotion1 /> */}
        {/* <FramerMotion2 /> */}
        {/* <ButtonBounce /> */}
        {/* <Loader /> */}
        {/* <CardShadow /> */}
        {/* <Slowly>
          <h1>Your Content Here</h1>
        </Slowly>  */}
       
        {/* <button onClick={addItem}>Add Item</button>
        <AnimatedList items={items} removeItem={removeItem} /> */}

        <RotateButton /> 

      </header>
    </div>
  );
}

export default App;
