import React, { useEffect, useState } from 'react'

const App = () => {

  let [count , setCount] =  useState(0)

  let [num , setNum] = useState(100)

  let increment =()=>{
    setCount(count + 1)
  }


  useEffect(()=>{
    console.log("I am normal useEffect")
  })

  useEffect(()=>{
       console.log("I will give output only one time...")
  },[])

  useEffect(()=>{
     console.log("hello I am useEffect with dependency")
  },[num])

  let mynum = 20

  let increase =()=>{

    mynum = mynum + 1;

    console.log(mynum)
  }

  return (
    <>
    <h1> useeffect example</h1>

    <h2>count is : {count}</h2>

    <button onClick={increment}>increment</button>

    <h2> my num is : {mynum}</h2>

    <button onClick={increase}> increase myNum</button>


      <h2> {num}</h2>

    <button onClick={()=> setNum(num-1)}> decrease num</button>

    </>
  )
}

export default App
