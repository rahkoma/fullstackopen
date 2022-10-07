import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showFilter, setShowFilter] = useState(true)

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowFilter(false)
  }
  
  const personsToShow = showFilter
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const isSame = persons.some(person => person.name === newName)

    if (isSame) { window.alert(`${newName} is already on the phonebook`) }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter newFilter={newFilter} handleFilter={handleFilterChange} />
      <h2>add a new</h2>
        <PersonForm 
        newPerson={addPerson} 
        handleNumber={handleNumberChange} 
        handleName={handleNameChange} 
        name={newName} 
        number={newNumber} 
        />
      <h2>Numbers</h2>
        <Persons persons={personsToShow}  />
    </div>
  )

}

export default App