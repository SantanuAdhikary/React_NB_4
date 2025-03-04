// import React from 'react'
// import Signup from './components/Signup'
// import Login from './components/Login'

// // !  conditional rendering using if-else 

// const App = () => {

//   let hello = true 

//   let a = 30 

//   if(a >20)
//   {
//     return(
//       <Signup/>
//     )
//   }
//   else{

//     return(
//       <Login/>
//     )

//   }
  
// }

// export default App



// ! conditonal rendering using ternary operator



import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import ListComponent from './components/ListComponent';


const App = () => {

  let isLoggedin = true;

  let a = 4


  let num1 = 13

  return (
    <>

      {

        isLoggedin ? <Home/> : <Login/>
         
      }

      {
          a>5 ? <h1>a is greater than 5</h1> : <h1>less than 5</h1>
      }

      {
         (num1 % 2 !==0) && <h1> it is odd </h1> 
      }

     <ListComponent/>

    </>
  )
}

export default App
