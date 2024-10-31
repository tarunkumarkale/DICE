import { useState } from 'react'

import Home from './Components/Home'
import DicePage from './Components/DicePage'
function App() {

  const [ShowHome,SetShowHome]=useState(true)
const  Toggling=()=>{
SetShowHome((pre)=>!pre)
}

  return (
<>
   {ShowHome==true?<Home checkhome={Toggling}/>:<DicePage checkhome={Toggling} />}

</>
  )
}

export default App
