import { useEffect, useState } from 'react'
import axios from 'axios'
import {Filter, Countries, Weather} from './Components/Components.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  useEffect(() => {
    axios
    .get('https://api.open-meteo.com/v1/forecast')
    .then(response => {
      setWeather(response.data)
    })
  }, [])

  const setCapital = Countries.capital
  console.log((setCapital))

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleClick = (event) => {
    setNewFilter(event.target.value)
  }
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <>
     <Filter newFilter={newFilter} handleFilter={handleFilterChange} />
     <Countries countries={countriesToShow} handleClick={handleClick} />
     <Weather weather={weather} />
    </>
    
  );
}

export default App;
