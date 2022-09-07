
const Header = (props) => {
  console.log(props)
  return(
  <div>
      <h1>
        {props.course}
        </h1>
  </div>
  )
}
const Content = (props) => {
  return(
  <div>
        <Part part={props.part1} exercises={props.exercises1}/>
        <Part part={props.part2} exercises={props.exercises2}/>
        <Part part={props.part3} exercises={props.exercises3}/>
  </div>
  )
}
const Part = (props) => {
  return(
  <div>
    <p>
      {props.part} {props.exercises}
    </p>
  </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {parts}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
 {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App