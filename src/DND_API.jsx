import { useState, useEffect } from 'react'

export function DND_API() {
  const [races, setRaces] = useState([])

  useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/races')
        .then(response => response.json())
        .then(data => setRaces(data.results))
        .catch(error => console.error('Error fetching data:', error));
      }, [])
  

    return (
        <>
            
        <h2>DND Races</h2>
        <ul>
        {races.map((race, index) => (
            <li key={index}>{race.name}</li>
        ))}
        </ul>
            </>
    )
}

export default DND_API