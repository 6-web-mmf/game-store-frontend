import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames } from './redux/slices/gameSlice'



function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
