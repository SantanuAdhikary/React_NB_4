import React, { useRef } from 'react'

const Hello = () => {

    let c = useRef(0)
    console.log(c.current)
  return (
    <>
     
     <h1> hello component</h1>

      <h2> render count : {c.current++}</h2>
    </>
  )
}

export default React.memo(Hello)