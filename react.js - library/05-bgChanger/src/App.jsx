import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



// only using 'useState' hook : 

// function App() {
//     const [bgColor, setBgColor] = useState('pink');
//     document.body.style.backgroundColor = bgColor; // have to apply, bcz browser is rendering for the first time

//     const changeBackgroundColor = (bgColor) => {
//         setBgColor(bgColor);                            // update the state
//         document.body.style.backgroundColor = bgColor;  // apply the updated state
//     };

//     return (
//         <div className="App">
//             <button onClick={() => changeBackgroundColor('violet')}>Violet</button>
//             <button onClick={() => changeBackgroundColor('indigo')}>Indigo</button>
//             <button onClick={() => changeBackgroundColor('blue')}>Blue</button>
//             <button onClick={() => changeBackgroundColor('green')}>Green</button>
//             <button onClick={() => changeBackgroundColor('yellow')}>Yellow</button>
//             <button onClick={() => changeBackgroundColor('orange')}>Orange</button>
//             <button onClick={() => changeBackgroundColor('red')}>Red</button>
//         </div>
//     );
// }




// another method : using 'useState' & 'useEffect' both :

function App() {
  
  const [bgColor, setBgColor] = useState('pink');

  // useEffect hook to apply the background color whenever bgColor state changes
  useEffect(() => {
      document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
      <div className="App">
          <button onClick={() => setBgColor('violet')}>Violet</button>
          <button onClick={() => setBgColor('indigo')}>Indigo</button>
          <button onClick={() => setBgColor('blue')}>Blue</button>
          <button onClick={() => setBgColor('green')}>Green</button>
          <button onClick={() => setBgColor('yellow')}>Yellow</button>
          <button onClick={() => setBgColor('orange')}>Orange</button>
          <button onClick={() => setBgColor('red')}>Red</button>
      </div>
  );
}

export default App;
