import Hello from "./comoponents/Hello"
import ProfileCard from "./comoponents/ProfileCard"


let App =()=>{


   let student ={
    sname:"abc",
    sage:10,
    phNo:9878123234
   }

  return(

    <div>
         <h1> hello</h1>


         <div className="con">

         <ProfileCard productName={"mobile"} price={20000}/>
         <ProfileCard productName={"tv"} price={35000}/>
         <ProfileCard productName={"laptop"} price={50000}/>
        
         </div>

         <Hello stu={student}/>

        
    </div>
  )
}

export default App