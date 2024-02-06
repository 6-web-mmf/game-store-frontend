import React from 'react'
import style from './game.module.scss'
import {Link} from 'react-router-dom'

function GameComponent({ game }) {
    return (
        <Link to={'game/' + game.id}>
            <div className={style.game}>
                <h2 >{game.title}</h2>
                <p>{game.description}</p>
                <p>{game.price}</p>
                <p>{game.views}</p>
                <img src={game.imageId} alt="image" />
            </div>
        </Link>
    )
}

export default GameComponent