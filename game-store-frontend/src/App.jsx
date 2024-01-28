import { useState } from 'react'
import Header from './components/elements/Header/Header'
import Footer from './components/elements/Footer/Footer'
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
=======
import { Provider } from 'react-redux'
import { store } from './redux'
>>>>>>> e3a9074f7b2544254142ab089da44b4be6aef7b0

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
