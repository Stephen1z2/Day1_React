import { useState } from 'react'
import './App.css'
import {CardLog} from './Card.jsx'
import MyButton from './Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Starlog – Captain's Personal Log</h1>
      <h2>USS Endeavour, Sector 001</h2>
      <CardLog stardate="2023.10.01"></CardLog>
      <CardLog stardate="2023.10.02"></CardLog>
      <CardLog stardate="2023.10.03"></CardLog>
      <MyButton></MyButton>
    </>
  )
}

export default App