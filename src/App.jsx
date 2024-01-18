import { useState } from "react"
const urlBase = "https://api.openweathermap.org/data/2.5/weather?"
const Api_key = "237b987d029e21160fbf10a4afb7b440"

export const App = () => {

  const [city, setcity] = useState("")
  const [dateweather, setdateweather] = useState(null)
  const fetchData = async () => {
    try {
      const response = await fetch(`${urlBase}q=${city}&appid=${Api_key}`)
      const data = await response.json()
      setdateweather(data)
    } catch (error) {
      console.error("error:", error);
    }
  }



  const handlerChange = (e) => {
    setcity(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <>
      <h1>WheaterAPP</h1>
      <form onSubmit={handlerSubmit} >
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={handlerChange}
        />
        <button type="submit">Search</button>
      </form>
      {dateweather &&
        <div>
          <h2>{dateweather.name}</h2>
          <p>temperature:{parseInt(dateweather.main.temp - 273.15)}°c </p>
          <p> meteorological condition:{dateweather.weather[0].description}</p>

          <img src={dateweather.weather[0].icon} />



        </div>
      }


    </>
  )
}


