import React, { use, useMemo, useState } from 'react'

const App = () => {
  
  let [count, setCount] = useState(0)
  let [num, setNum] = useState(0)

  let multiply =(num)=>{

      console.log("I am inside multiply function")

      for(let i = 1 ; i<1000000000;i++)
      {

      }
     return num * 2 
  }

  // let res = multiply(num)

  let res = useMemo(()=>{
    return multiply(num)
  },[num])
  
  return (
    <>

       <h2> count is : {count}</h2>

      <button onClick={()=>setCount(count+1)}>increment</button>

      <input type="number" placeholder='enter number' onChange={(e)=>setNum(e.target.value) } />

        <h2> result is : {res} </h2>

    </>
  )
}

export default App