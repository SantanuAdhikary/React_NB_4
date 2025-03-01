
import React, { Fragment } from 'react'

const App = () => {


  let hello =(e)=>{
    
    console.log(e.target)
    alert("hello , this is event")
  }

  let msg =(userName)=>{
   alert(` welcome ${userName}`)
  }

  return (
    <>
       <h1> Event Example</h1>
       <p> Lorem ipsum dolor sit amet </p>

       <button onClick={hello}> click me</button>
       <button onClick={()=>hello()}> click me 2</button>

       <button onClick={()=>msg("san")}> click me 3</button>
    </>
  )
}

export default App