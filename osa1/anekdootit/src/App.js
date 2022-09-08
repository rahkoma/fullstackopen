import { useState } from 'react'


const Display = ({selected, anecdotes}) =>  <div> {anecdotes[selected]} </div>
const VoteCount = ({vote, selected}) => <div> has {vote[selected]} votes</div>
const Header = ({text}) => <h1>{text}</h1>
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
  )

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  const handleSelect = () => setSelected(Math.floor(Math.random() * (7- 0) + 0))
  const indexOfMax = votes.indexOf(Math.max(...votes))
  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Display selected={selected} anecdotes={anecdotes}/>
      <VoteCount vote={votes} selected={selected}/>
      <Button onClick={handleVotes} text='vote'/>
      <Button onClick={handleSelect} text='next anecdote'/>
      <Header text='Anecdote with most votes'/>
      <Display selected={indexOfMax} anecdotes={anecdotes}/>
      <VoteCount vote={votes} selected={indexOfMax}/>
    </div>
  )
}

export default App