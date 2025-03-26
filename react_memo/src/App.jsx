import React, { useState } from 'react'
import Hello from './Hello'

const App = () => {

  let [count,setCount]= useState(0)
  return (
    <>

    <h1> {count}</h1>

    <button onClick={()=>setCount(count+1)}>click</button>
    <hr />

    <Hello/>
    
    </>
  )
}

export default App