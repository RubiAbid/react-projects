import { useState } from 'react'
import './App.css'
import ApiCheck from './components/ApiCheck'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <ApiCheck/>
   </div>
  )
}

export default App
