const PersonForm = ({newPerson, handleNumber, handleName, name, number}) => {
  return(
    <form onSubmit={newPerson}>
        <div>name:
          <input 
            value={name}
            onChange={handleName}
          />
        </div>
        <div>number: 
          <input
            value={number}
            onChange={handleNumber}
          /> 
        </div>
          <button type="submit">add</button>
    </form>
  )
    
}

export default PersonForm