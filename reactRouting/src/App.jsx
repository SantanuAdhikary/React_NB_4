import React from 'react'

import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>

    <BrowserRouter>

     <Navbar/>

      <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App