import { useEffect, useState } from 'react'
import axios from 'axios'
import {Filter, Countries} from './Components/Components.js'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <>
     <Filter newFilter={newFilter} handleFilter={handleFilterChange} />
     <Countries countries={countriesToShow} />
    </>
    
  );
}

export default App;
