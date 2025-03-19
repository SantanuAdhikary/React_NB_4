import React from 'react'
import AirtelProvider from './context/UserContext'
import User2 from './components/User2'
import User1 from './components/User1'

const App = () => {
  return (
    <>

     <AirtelProvider>

        <User1/>

        <User2/>
     </AirtelProvider>

    </>
  )
}

export default App