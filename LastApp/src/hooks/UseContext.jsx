import { createContext, useContext, useState } from "react";


let StudentContext = createContext()


let StudentProvider =({children})=>{

    let [count , setCount] = useState(0)

    let increment =()=>{
        setCount(count + 1)
    }

    let decrement =()=>{
        setCount(count - 1)
    }
    return(
        <StudentContext.Provider value={{sname:"rahul", sage:10, count , increment, decrement}}>

            {children}

        </StudentContext.Provider>
    )
}

export let useMyhook =()=>{
   return  useContext(StudentContext)
}

export default StudentProvider