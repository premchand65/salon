import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)
  return (
    <div className='justify-center'>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={ () => {
    setCount(count + 1);
  }}>Increase</button>
      <button onClick={ () => {
    setCount(count - 1);}}>Decrease</button>
    </div>
  )
}

export default Counter