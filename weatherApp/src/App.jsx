import React, { useState } from 'react'
import './App.css'


const api = {
  key : "8c2b7b2977df17146e993e1e0358ee14",
  base : "https://api.openweathermap.org/data/2.5/",
}
const App = () => {
  const [selectLocation, setLocation] = useState("");
  const [weather,setWeather] = useState({});
  const onButton = () => {
    fetch(`${api.base}weather?q=${selectLocation}&appid=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      console.log(result)
    })
  }

  return(
    <div id="container">
      <h2>weather app </h2>
      <div>
        <label>location</label>
        <input 
        type="text"
        placeholder='enter city'
        onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={onButton}>Enter</button>
      </div>
      {/* {weather.main.temp} */}
      <div>      
        {/* <p>{weather.main}</p> */}
        <p>{weather.main.temp}°C</p>
      </div>
    </div>
  )

}

export default App
