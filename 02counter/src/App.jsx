import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
//let counter = 15

const addValue =()=>{
  console.log("clicked",counter);
  counter = counter+1;
  setCounter(counter)
}

const removeValue = () => {
  console.log("clicked",counter);
  counter = counter-1;
  setCounter(counter)
}

const getcalculatedValue = () => {
  console.log("clicked",(removeValue.counter+ addValue.counter))
}

  return (
    <>
      <h1>Cahi aur React!</h1>
      <h2>Counter value: {counter}</h2>
      {/* <h3>getcalculatedValue: {(removeValue.counter+ addValue.counter)}</h3> */}

      <button
      onClick={addValue}
      >Add value</button>

      <br />

      <button
      onClick={removeValue}
      >remove value</button>
      <br />

      {/* <button
      onClick={getcalculatedValue}
      >getcalculatedValue</button> */}

    </>
  )
}

export default App
