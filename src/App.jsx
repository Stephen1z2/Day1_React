import React, { useState, useEffect } from 'react'
import './App.css'
import { CardLog } from './Card.jsx'
import StarrySky from './Stars.jsx'


function App() {
  const [logs, setLogs] = useState([]);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://18.117.78.76:3000/logs')
    .then(response => response.json())
    .then(data => setLogs(data))
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
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