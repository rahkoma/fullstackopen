import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showFilter, setShowFilter] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

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

  const handleDelete = personId => {
    const personToDelete = persons.find(n => n.id === personId)
    console.log(personToDelete)
    console.log(personId)
    
    if (window.confirm(`Delete ${personToDelete.name}?`)) {
      personService
        .deletePerson(personId)
      
      setPersons(persons.filter(person => person.id !== personId))
      
      setErrorMessage(
        `Person '${personToDelete.name}' was deleted`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  
  const personsToShow = showFilter
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const isSame = persons.some(person => person.name === newName)
    const personToUpdate = persons.find(person => person.name === newName)
    const updatedPerson = { ...personToUpdate, number: newNumber }
    
    if (isSame) {
      if (window.confirm(`${newName} is already on the phonebook, replace old number with new one?`)) {
        personService
          .update(personToUpdate.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== personToUpdate.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')

            setErrorMessage(
              `Person '${personToUpdate.name}' was updated`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
    }
    else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      personService
        .create(personObject)
        .then(returnedPerson => {  
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          
          setErrorMessage(
            `Person '${personObject.name}' was added`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={errorMessage} />
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
        <Persons persons={personsToShow} handleDelete={handleDelete} />
      
    </div>
  )
}

export default App