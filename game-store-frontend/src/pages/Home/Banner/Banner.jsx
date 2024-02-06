import React from 'react'
import style from './Banner.module.scss'

function Banner() {
  return (
    <div className={style.banner}>
        <div className={style.content}>
            <div className={style.textContent}>
                <h2 className={style.title}>The Best Game Store</h2>
                <p>We have collected the best games in the world. All games are divided into categories, discounts and companies. Come and buy only from us.</p>
                <button>More</button>
            </div>
            
        </div>
    </div>
  )
}

export default Banner