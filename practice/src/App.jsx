import Navbar from "./components/Navbar";
import About from "./pages/About";
import Conditions from "./pages/Conditions";
import Events from "./pages/Events";
import Home from "./pages/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom"



let App =()=>{

 
  return(

    <>

      <Navbar/>
       <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/events" element={<Events/>}></Route>
           <Route path="/conditions" element={<Conditions/>}></Route>
           <Route path="/about" element={<About myTeam={"India"} playersCount={15} />}></Route>


       </Routes>
    

        
    </>

   
  )
}

export default App