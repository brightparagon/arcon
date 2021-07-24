import './App.scss'

import { useState, useRef } from 'react'

// import Cats from './components/Cats'
import Counter from './components/Counter'

function App() {
  const [fillNumber, setFillNumber] = useState(1)
  const counterRef = useRef(null)

  const handleClick = () => {
    setFillNumber(previousNumber => previousNumber + 1)
  }

  return (
    <div className="App">
      <main>
        <Counter fillNumber={fillNumber} ref={counterRef} />
        <button onClick={handleClick}>Plus FillNumber 1</button>
      </main>
    </div>
  )
}

export default App
