import React, { useState } from 'react'

export default function Counter() {
    const[counter,setCounter] = useState(0);
    const decrease = () => {
        setCounter(counter-1);
    }
    const increase = () => {
        setCounter(counter+1);
    }
  return (
    <div>
        <h1>Counter Application</h1>
        <button onClick={decrease}>Decrement</button>
        <div style={{fontSize:50}}>
        {counter}
        </div>
        <button onClick={increase}>Increment</button>
        <button onClick={()=> setCounter(counter+1)}>Increase 2</button>
    </div>
  )
}
