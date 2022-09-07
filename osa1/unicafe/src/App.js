import { useState } from 'react'

const StatisticLine = ({ value, text }) => <div> {text} {value}</div>
const Header = () => {return(<h1>give feedback</h1>)}
const Header2 = () => { return(<h1>statistics</h1>)}

const Statistics = ({ good, bad, neutral }) => {
  if ((good || bad || neutral) === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <StatisticLine value={good} text='good'/>
      <StatisticLine value={neutral} text='neutral'/>
      <StatisticLine value={bad} text='bad'/>
      <StatisticLine value={good + neutral + bad} text='all'/>
      <StatisticLine value={(good - bad)/(good + neutral + bad)} text='average'/>
      <StatisticLine value={(good/(good + bad + neutral) * 100) + " %" } text='positive'/>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Header/>
      <Button handleClick={handleGood} text='good'/>
      <Button handleClick={handleNeutral} text='neutral'/>
      <Button handleClick={handleBad} text='bad'/>
      <Header2/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App