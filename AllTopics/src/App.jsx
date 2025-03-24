import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Props from './components/Props'
import Conditions from './components/Conditions'
import List from './components/List'
import UseEffect from './hooks/UseEffect'
import UseRef from './hooks/UseRef'
import UserContext from './context/UserContext'

const App = () => {
  return (
    <>

    <UserContext>

      <BrowserRouter>

       <Navbar/>

         <Routes>
            <Route path='/props' element={<Props/>}></Route>
            <Route path='/conditions' element={<Conditions/>}></Route>
            <Route path='/list' element={<List/>}></Route>
            <Route path='/useeffect' element={<UseEffect/>}></Route>
            <Route path='/useref' element={<UseRef/>}></Route>
             
         </Routes>
      </BrowserRouter>
    </UserContext>

     

    </>
  )
}

export default App