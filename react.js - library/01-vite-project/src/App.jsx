import { useState } from 'react'
import './App.css'

function App() {
  let [numberCount, setNumberCount] = useState(0) 
  // let numberCount = 0

  function increaseValue() {
    // numberCount = numberCount + 1
    if (numberCount < 20) {
      setNumberCount(numberCount + 1)
    }
  }
  function decreaseValue() {
    if (numberCount > 0) {
      numberCount = numberCount - 1;
    setNumberCount(numberCount)
    }
    // numberCount = numberCount - 1;
    // setNumberCount(numberCount)
  }
  // if used 'const' at the place of let then only evaluated expression to be passed in arguments of set number count.

  return (
    <>
      <h2>Vite + React | Counter Minor Proj | using Hooks</h2>

      <h3>Count is :  {numberCount}</h3>

      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
    </>// <> code here </> is a react fragment encloses all the HTML code.
  )
}

export default App
