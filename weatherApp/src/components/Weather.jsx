import React, { useEffect, useState } from "react";

const Weather = () => {
  let [search, setSearch] = useState("chennai");

  let [city, setCity] = useState(null);

  let getData = async () => {
    let res = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ef5b95d8355e3f0dba83ba065f29f15a`
    );


    let data = await res.json();

    // console.log(data)

    setCity(data.main);

    console.log(city);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="inner">
      <div className="box">
        <input
          type="text"
          placeholder="enter city"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getData}>search</button>
      </div>

      <div className="info">
        {!city ? (
          <p> data is not found</p>
        ) : (
          <div>
            <h2> {search}</h2>
            <h1> {city.temp} &deg; C</h1>
            <p>
              Min: {city.temp_min}&deg; C | Max:{city.temp_max}&deg; C
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
