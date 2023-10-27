import { useEffect, useState } from 'react'
import axios from 'axios'
import {Filter, Countries} from './Components/Components.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleClick = (event) => {
    setNewFilter(event.target.value)
  }
 
    return ( 
    <>
     <Filter newFilter={newFilter} handleFilter={handleFilterChange} />
     <Countries countries={countriesToShow} handleClick={handleClick} />
    </>
    
  );
}

export default App;
