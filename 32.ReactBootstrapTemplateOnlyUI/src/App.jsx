import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Services from './components/Services/Services'
import WelcomeToNextWebsite from './components/WelcomeToNextWebsite/WelcomeToNextWebsite'
import RecentProjects from './components/RecentProjects/RecentProjects'
import Buttons  from './components/Buttons/Buttons'
import Map from './components/Map/Map'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Services/>
     <WelcomeToNextWebsite/>
     <RecentProjects/>
     <Buttons/>
     <Map/>
     <Footer/>
    </>
  )
}

export default App
