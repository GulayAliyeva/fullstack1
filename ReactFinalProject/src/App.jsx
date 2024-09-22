import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home/Home'
import Navbar from './Components/Navbar/Navbar'
import AppRoutes from './routes/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <AppRoutes/>

    </>
      
  )
}

export default App
