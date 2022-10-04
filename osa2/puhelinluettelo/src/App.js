import { useState } from 'react'
import Person from './components/Person'

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
      <form>
        <div>filter shown with
          <input
            value={newFilter} 
            onChange={handleFilterChange}
          />
        </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>name:
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>number: 
          <input
            value={newNumber}
            onChange={handleNumberChange}
          /> 
        </div>
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
        <Person persons={personsToShow} />
    </div>
  )

}

export default App