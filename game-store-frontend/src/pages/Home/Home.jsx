import React from 'react'
import Search from '../../components/UI/Search'
import { useSelector } from 'react-redux'
import GameComponent from '../../components/Game/GameComponent'
import style from './home.module.scss'

function Home() {

  const { loading, error, games } = useSelector(store => store.game)
  const category = useSelector(store => store.category)

  return (
    <div className={style.home}>
      <Search />
      {
        category.loading
        ? <p>Loading...</p>
        : category.categories?.map(cat => (
          <div key={cat.id}>
            <p>{cat.title}</p>
          </div>
        ))
      }
      {
        loading
          ? <p>Loading...</p>
          : games?.map(game => (
            <GameComponent key={game.id} game={game} />
          ))
      } 
      {
        error && <p>Something went wrong...</p>
      }
    </div>
  )
}

export default Home