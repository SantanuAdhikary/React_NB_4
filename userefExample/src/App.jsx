

import React, { useRef, useState } from 'react'

const App = () => {

  let [count , setCount] = useState(0)

     let num1 = 0
    
    let num = useRef(0)

    let increase =()=>{

      num.current = num.current + 1 ;
      console.log(num.current)

      num1 = num1+100 
      console.log(num1)

      setCount(count + 1)
    }

    let headingRef = useRef()

    let changeColor=()=>{

      console.log(headingRef.current)

      headingRef.current.style.color="red"

    }


    let vdoRef = useRef()

    let playVdo =()=>{
        //  console.log(vdoRef.current)

        vdoRef.current.play()
    }

    let pauseVdo =()=>{

      vdoRef.current.pause()

    }
  return (
    <>

          <h2> {count}</h2>

          <h3> number is : {num.current}</h3>

          <button onClick={increase}> increase</button>


          <h1 ref={headingRef} > I will change the color</h1>

           <button onClick={changeColor}> change color</button>


           <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={vdoRef}></video>

           <button onClick={playVdo}> play</button>
           <button onClick={pauseVdo}> pause</button>

    
    </>
  )
}

export default App


