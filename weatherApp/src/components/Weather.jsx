import React, { useEffect, useState } from 'react'

const Weather = () => {

   let [search, setSearch] = useState(null)

   let [citydata , setCitydata] = useState(null);

   let getData = async()=>{

    let res = await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={}`)

    let data = await res.json()
    // console.log(data)
    setCitydata(data)
    // console.log(citydata)
   }

    useEffect(()=>{
        getData()
    },[citydata])
  return (
    <div className='inner'>

        <div className="box">
            <input type="text" placeholder='enter city' onChange={(e)=> setSearch(e.target.value)} />
            <button onClick={getData}>search</button>
        </div>

         {
             !citydata ?
            (<p> data not found</p>) : 
            (<div className="info">
            <h2>{search}</h2>
            <h1>{citydata.main.temp}&deg; C</h1>
            <p>Min: {citydata.main.temp_min}&deg; C | Max: {citydata.main.temp_max}&deg; C</p>
            
         </div> )
         }

    </div>
  )
}

export default Weather