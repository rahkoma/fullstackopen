
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, your are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name="Pekka" age={ika}/>
    </div>
  )
}

export default App;
