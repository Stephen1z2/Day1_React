import React, { useState, useEffect } from 'react'
import './App.css'
import { CardLog } from './Card.jsx'
import StarrySky from './Stars.jsx'
import ShootingStars from './ShootingStar.jsx'


function App() {
  const [logs, setLogs] = useState([]);
  const [data, setData] = React.useState(null);

 

  return (
    <>
      <ShootingStars></ShootingStars>
      <StarrySky></StarrySky>
      <h1>Starlog – Captain's Personal Log</h1>
      <h2>USS Endeavour, Sector 001</h2>
      {logs.map((log, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <CardLog stardate={log.stardate} logtext={log.logtext} components={log.components}></CardLog>
        </div>
      ))}
    </>
  )
}

export default App
