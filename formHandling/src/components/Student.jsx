import React, { useState } from 'react'

const Student = () => {

   let [sname, setSname] = useState("")
   let [phno , setPhno] = useState("")
   let [pass, setPass] = useState("")

   
  let handleSubmit =(e)=>{

    e.preventDefault()

    console.log({sname,pass,phno})

    
    console.log("form submitted....")
    setPass("")
    setPhno("")
    setSname("")

    
  }

  let nameChange =(e)=>{

    // console.log(e.target.value)

    setSname(e.target.value)

  }

  return (
    <>

    <h1> student form</h1>

    <div className="card">

        <form action="" onSubmit={handleSubmit}>

             <label htmlFor="">student Name</label>
             <input type="text" placeholder="enter name" onChange={nameChange} value={sname}/>

             <label htmlFor=""> student Phno</label>
             <input type="text" placeholder='enter student ph no' onChange={(e)=>setPhno(e.target.value)} value={phno}/>

             <label htmlFor="">password</label>
             <input type="text" placeholder='enter password' onChange={(e)=> setPass(e.target.value)} value={pass}/>

             <button> signup </button>
        </form>
    </div>
    
    </>
  )
}

export default Student