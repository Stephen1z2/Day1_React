import { useState } from 'react'
import './App.css'
import CardLog from './Card.jsx'
import MyButton from './Button.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <CardLog></CardLog>
      <MyButton></MyButton>
      
   
    </>
  )
}

export default App
