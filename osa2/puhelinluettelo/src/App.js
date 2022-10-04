import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1231244'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

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
        <Person persons={persons} />
    </div>
  )

}

export default App