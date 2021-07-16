import logo from './logo.svg'
import './App.css'
import Product from './components/Product'
import Cats from './components/Cats'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. React is good asdfasdf
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <Product />
        <Cats />
      </main>
    </div>
  )
}

export default App
