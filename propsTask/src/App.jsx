import Box from "./components/Box"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

let App =()=>{
  return(

    <div>
         <Navbar/>

         <div className="section1">
           <h1> welcome to first react page</h1>
           <p>Lorem ipsum dolor sit amet consectetur.</p>
         </div>

         <div className="section2">
           
            <Box productName={"mobile"} price={20000} imageSrc = {"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>


            <Box productName={"laptop"} price={40000} imageSrc ={"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />


            <Box productName={"tv"} price={50000} imageSrc={"https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
         </div>

         <Footer/>
    </div>
  )
}

export default App