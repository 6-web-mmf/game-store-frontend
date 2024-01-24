import React from 'react'
import styles from './Header.module.scss'
import 'boxicons'

export default function Profile() {
  return (
    <div className={styles['profile-wrapper']}>
        <div className={styles.notification}>
            <i className='bx bxs-cart'></i>
            <span></span>
        </div>
        <div className={styles.profile}>
            <div>
                <img src="https://srv2.imgonline.com.ua/result_img/imgonline-com-ua-Resize-C116nf396xN5.jpg" alt="" />
            </div>
            <i className='bx bx-caret-down'></i>
        </div>
    </div>
  )
}
