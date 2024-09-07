import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form/Form'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div > 
      
      
      <div className='mainContainer'>
<div className='container'>
<div className='paragraph'><div > Sosial media shared today,tomorrow </div>  
 
  <div        >or by location</div></div>


 <div className='imgContainer'> <img  className='img'   src="public/smth.jpg"  /></div> 

</div>

<Form  className="formContainer"   />

 </div>
</div>


    </>
  )
}

export default App
