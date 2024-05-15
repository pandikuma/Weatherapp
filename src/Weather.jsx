import { useState } from "react";
import axios from "axios"

function Weather()
{


  const [city,setcity] = useState("")

  const [weather,setweather] = useState("")
  const [temp,settemp] = useState("")
  const [desc,setdesc] = useState("")

  function hendlecity(evt)
   {
    setcity(evt.target.value)
  }

  function getWeather()
  {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c4304615e1109b946b5221b9cd6a6f5`)

    weatherData.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(success.data.main.temp)
    })
  }

    return (
        <div className=' bg-black p-20 flex-col'>
          <div className=' bg-green-500 p-10 gap-5'>
            <h1>Weather App</h1>
            <p>I can give you a weather report about your city</p>
            <input type="text" onChange={hendlecity}  className=' w-40 border rounded-md my-2 p-1 ' placeholder='Type your city'/>
            <button onClick={getWeather} className=' bg-black text-white w-24 h-10 p-2 border rounded-md'>Get report</button>
            <div className=' font-bold my-2'>
              <h5><b>Weather:</b>{weather}</h5>
              <h5><b>Temprature:</b>{temp}</h5>
              <h5><b>Description:</b>{desc}</h5>
            </div>
          </div>
        </div>
      );
}

export default Weather