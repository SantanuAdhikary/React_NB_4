

// ! 1st create the context 

import { createContext, useContext } from "react";


export let userContextdata =  createContext()

 let {Provider} = userContextdata


//  ! povide the values 

 let UserContext =({children})=>{
        return(
            <Provider value={{e_name:"santanu",age:15,phNo:9087564545}}>
                {children}
            </Provider>
        )
 }


 export let useMyHook = ()=>{
     
    let a = useContext(userContextdata)
    return a;
 }

 export default UserContext