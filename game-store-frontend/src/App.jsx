import { useState } from 'react'
import Header from './components/elements/Header/Header'
import Footer from './components/elements/Footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='container'>
      <Header/>
    </div>
  )
}

export default App
