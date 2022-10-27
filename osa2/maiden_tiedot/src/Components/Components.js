import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({newFilter, handleFilter}) => {
  return(
    <form>
        <div>find countries 
            <input
                value={newFilter}
                onChange={handleFilter}
            />
        </div>   
    </form>
)}
const Weather = ({capital}) => {
  const [weather, setWeather] = useState(null)
  const api_key = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
    axios
    .get(url)
    .then(response => {
      setWeather(response.data)
      console.log(url)
    })
  }, [])


    if(weather === null) return null
    else {
      return(
        <>
        <p>temperature {Math.ceil(weather.main.temp - 273.15)} Celcius</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" />
        <p>wind {weather.wind.speed} m/s</p>
        </>
      )}
}

const Country = ({name, capital, area, languages, flag}) => {
    return(
      <>
        <h1>{name}</h1>
        <div>capital {capital}</div>
        <div>area {area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.values(languages).map(language =>
            <li key={language}> {language} </li>)}
        </ul>
        <img src={flag} alt="Flag" />
      </>
    )
}

const Countries = ({countries, handleClick}) => {

  if(countries.length === 1) {
      return(
      <>
          <Country
          name={countries[0].name.common}
          capital={countries[0].capital}
          area={countries[0].area}
          languages={countries[0].languages}
          flag={countries[0].flags.png}
          />
          
          <Weather
          capital={countries[0].capital}
          />
      </>
      )}
      else if (countries.length <= 10 && countries.length > 1) {
          return(
            <>
            {countries.map(country =>
                <div key={country.name.common}> {country.name.common} <button value={country.name.common} onClick={handleClick}>show</button></div>
                )}
            </>
          )}
      else if(countries.length > 10) {
          return(
            <p>Too many matches, specify another filter</p>
      )}
}

export {Filter, Countries};