import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Starlog></Starlog>

    </>
  )
}

function Starlog() {
  return (
    <>
      <h1>Starlog – Captain's Personal Log</h1>
      <h2>Stardate: 72542.3</h2>
      <h2>USS Endeavour, Sector 001</h2>
      <p>It's been a long stretch in deep space. The crew has adapted to the challenges of isolation, but the constant uncertainty of unexplored regions takes its toll. We’ve encountered yet another uncharted nebula, whose electromagnetic interference is wreaking havoc on our sensors. As usual, Lieutenant Hara is determined to find a way to use it to our advantage, citing that its unique properties might offer new insights into dark matter.

We’ve also had a run-in with a peculiar asteroid field that defies our expectations—seemingly alive, with each fragment of rock moving in ways that no natural formation should. Lieutenant Commander Sato has theorized that we may be dealing with a long-lost ancient artificial structure, and I’ve ordered an away team to investigate. My gut says there’s more to this than meets the eye.

Morale on board is high, despite the hardships. I was especially moved by Lieutenant Garcia’s personal log entry today. She reminded the crew of our shared purpose and the hope we bring to the unknown. It’s this very spirit that continues to fuel our journey into the stars. Still, even as we approach the unknown, the weight of responsibility never lessens. It’s a constant balancing act between exploration and caution, between wonder and duty.

We shall press on, no matter the obstacles.

End of Log</p>
    </>
  )
}

export default App
