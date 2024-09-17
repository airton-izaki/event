import { useState } from 'react'
import './App.css'
import FocusBlurExample from './components/FocusBlurExample'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FocusBlurExample/>

    </>
  )
}

export default App
