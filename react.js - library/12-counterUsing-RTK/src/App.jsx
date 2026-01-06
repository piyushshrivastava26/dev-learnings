import { useDispatch, useSelector } from 'react-redux'
import './App.css'

import React, { useState } from 'react'
import { decrement, increment,resetCounter, incrementBySomeNumber } from './Features/counter/counterSlice'




function App() {

  
  const counteer = useSelector(state => state.counter.count)

  const dispatch = useDispatch()

  const [val, setValue] = useState()


  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(resetCounter())
  }

  // const handlePayload = () => {
  //   dispatch(incrementBySomeNumber(val))
  // }
  const handlePayload = () => {
    const parsedValue = Number(val)
  
    if (!isNaN(parsedValue)) { 
      dispatch(incrementBySomeNumber(parsedValue));  
    } else {
      alert('Enter an Number to update counter')
    }
  };
  


  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <h3>counter : {counteer}</h3>
      <button onClick={handleDecrement}> - </button>
      <br /><br />
      <button onClick={handleReset}>reset</button>
      <br /><br />
      <input 
        type="number" 
        placeholder='Enter number'
        value={val}
        onChange={(e) => setValue(e.target.value)}
      />
      <br /><br />
      <button onClick={handlePayload}>Update by Num</button>

    </div>
  )
}

export default App

