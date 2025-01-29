import { useState, useEffect } from 'react'
import './App.css'
import { CardLog } from './Card.jsx'
import StarrySky from './Stars.jsx'
import MyButton from './Button.jsx'
import { logs } from './logs.js'

function App() {

  const [races, setRaces] = useState([])

    useEffect(() => {
      fetch('https://www.dnd5eapi.co/api/races')
      .then(response => response.json())
      .then(data => setRaces(data.results))
    }, [])

  
  return (
    <>
      <StarrySky></StarrySky>
      <h1>Starlog – Captain's Personal Log</h1>
      <h2>USS Endeavour, Sector 001</h2>
      {logs.map((log)=> (
        <div style={{marginBottom: '20px'}}>
        <CardLog stardate={log.stardate} logtext={log.logtext}></CardLog>
        </div>
       ))}
      <MyButton></MyButton>

      <h2>DND Races</h2>
      <ul>
        {races.map((race) => (
          <li>{race.name}</li>
        ))}
      </ul>
    </>
  )

}
export default App