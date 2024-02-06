import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useDispatch } from 'react-redux'
import { getAllGames } from './redux/slices/gameSlice'
import { getAllCategories } from './redux/slices/categorySlice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllGames())
    dispatch(getAllCategories())
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
