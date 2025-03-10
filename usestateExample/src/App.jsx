
// import React, { use, useState } from 'react'

// const App = () => {

//   let [num , setNum]   = useState(0)

//   let [player, setPlayer] = useState("")

//   let [isKing, setIsKing] = useState(true)

//   let [count , setCount] = useState(100)
//   let increase =()=>{
//     setNum(num+1)
//   }

//   let decrease =()=>{
//     // setNum(num - 1)

//     setNum((pre)=>{

//          console.log(pre)
//         return pre - 1
//     })
//   }

//   let changeName =()=>{
//     setIsKing(!isKing)
//     setPlayer( 
//       isKing ? "virat" : "rohit"
//     )
//   }
//   return (
//     <>
//           <h2> {num}</h2>

//          <button onClick={increase}> increase</button> 

//          <button onClick={decrease}> decrease</button>    


//          <button onClick={()=>setNum(num + 1)}> increment</button>

//          <button onClick={()=> setNum(num - 1 )}> decrement</button>

//          <h2> palyer name is : {player}</h2>

//           <button onClick={changeName}>change name</button>



//             <h2> {count}</h2>

//           <button onClick={()=> setCount((pre)=> pre + 1 )}> click </button>


  
//     </>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {

         let [count , setCount] =   useState(20)

         let increase =()=>{
            setCount(count + 1)
         }

         let increment =()=>{
            setCount((pre)=>{
                  return  pre + 1
            })
         }
  return (
    <>


          <h1> {count}</h1>

      <button onClick={increase}> click</button>

      <button onClick={()=>setCount(count - 1)}> decrement</button>

      <button onClick={increment}> increment</button>

      <button onClick={()=> setCount((pre)=> pre - 1)}> decrease</button>
    
    </>
  )
}

export default App