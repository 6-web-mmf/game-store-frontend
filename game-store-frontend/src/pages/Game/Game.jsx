import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGameById } from '../../redux/slices/gameSlice'
import style from './game.module.scss'


function Game() {

    const params = useParams()
    const dispatch = useDispatch()
    const { loading, error, game } = useSelector(store => store.game)

    React.useEffect(() => {
        dispatch(getGameById(params.gameId))
    }, [])

    return (
        <div className={style.game}>
            {
                loading
                    ? <p>Loading...</p>
                    : <div>
                        <h2>{game?.title}</h2>
                        <p>{game?.description}</p>
                        <p>{game?.price}</p>
                        <p>{game?.views}</p>
                        <img src={game?.imageId} alt="image" />
                    </div>
            }
            {
                error && <p>Something went wrong...</p>
            }
        </div>
    )
}

export default Game