import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyApp from './ReactApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <MyApp />
    
    </div>
  )
}

export default App
