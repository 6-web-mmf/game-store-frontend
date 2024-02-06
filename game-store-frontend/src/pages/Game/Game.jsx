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
                        <div className={style.container}>
                            <div className={style.rightContent}>
                                <div className={style.text}>
                                    <h2 className={style.title}>{game?.title}</h2>
                                    <p className={style.description}>{game?.description}</p>
                                </div>
                                <div className={style.downPart}>
                                    <p className={style.price}>{game?.price} $</p>
                                    <button className={style.buy}>Add to cart</button>
                                </div>
                            </div>
                            <img src={game?.imageId} alt="image" />
                        </div>

                        
                    </div>
            }
            {
                error && <p>Something went wrong...</p>
            }
        </div>
    )
}

export default Game