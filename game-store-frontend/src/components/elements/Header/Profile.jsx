import React from 'react'
import styles from './Header.module.scss'
import 'boxicons'

export default function Profile({setActive, active}) {
  return (
    <div className={styles['profile-wrapper']}>
        <div className={styles.notification}>
            <i className='bx bxs-cart'></i>
            <span></span>
        </div>
        <div  onClick={() => setActive(!active)} className={styles.profile}>
            <div>
                <img src="../../../../public/img/userIcon.jpg" alt="" />
            </div>
            <i className='bx bx-caret-down'></i>
        </div>
    </div>
  )
}
