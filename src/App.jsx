import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1_Card from './Components/Componente1_Card'
import Componente2_Contador from './Components/Componente2_Contador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Mundial Femenino 2023</h2>
    <Componente1_Card count={count}/>

    <h3>Contador:{count}</h3>
    <Componente2_Contador count={count} setCount={setCount} />

      
    </>
  )
}

export default App
