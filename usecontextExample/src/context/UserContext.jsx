import {  createContext, useContext } from "react";

// !  first step

 const AirtelContext = createContext()

// ! second step

const AirtelProvider =({children})=>{
    return(
    <AirtelContext.Provider  value={{sim:"airtel" , price:399 , type:"micro"}}>
    
        {children}
    </AirtelContext.Provider>
    )
}

// ! fourth step

export const useCustom =()=>{

    let p = useContext(AirtelContext)
    return p
}


export default AirtelProvider