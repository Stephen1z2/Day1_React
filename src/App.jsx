import { useState } from 'react'
import './App.css'
import { CardLog } from './Card.jsx'
import MyButton from './Button.jsx'
import StarrySky from './Stars.jsx'
import { logs } from './logs.js' // Import the logs

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarrySky></StarrySky>
      <h1>Starlog – Captain's Personal Log</h1>
      <h2>USS Endeavour, Sector 001</h2>
      {logs.map((log, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <CardLog stardate={log.stardate} logText={log.text}></CardLog>
        </div>
      ))}
      <MyButton></MyButton>
    </>
  )
}

export default App