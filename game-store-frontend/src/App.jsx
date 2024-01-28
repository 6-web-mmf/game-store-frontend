import { useState } from 'react'
import Header from './components/elements/Header/Header'
import Footer from './components/elements/Footer/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
    
  )
}

export default App
