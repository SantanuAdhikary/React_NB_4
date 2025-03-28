
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import UseState from "./hooks/UseState"
import UseEffect from "./hooks/UseEffect"
import UseRef from "./hooks/UseRef"
import StudentProvider from "./hooks/UseContext"

let App =()=>{
  return(
    <>

   <StudentProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/usestate" element={<UseState/>}></Route>
        <Route path="/useeffect" element={<UseEffect/>}></Route>
        <Route path="/useref" element={<UseRef/>}></Route>
      </Routes>
    </BrowserRouter>
    </StudentProvider>  
    </>
  )
}

export default App