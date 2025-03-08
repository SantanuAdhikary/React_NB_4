import React from 'react'

const Events = () => {

    let display =()=>{
        alert("display function")
    }
  return (
    <>

    <h1> I am events component</h1>

      <button onClick={display}> click me</button>

      <button onClick={()=>display()}>display</button>
    
    </>
  )
}

export default Events