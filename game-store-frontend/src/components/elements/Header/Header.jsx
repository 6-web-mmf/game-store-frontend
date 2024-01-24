import React from 'react'
import Search from '../../UI/Search'
import styles from './Header.module.scss'
import Profile from './Profile'
import 'boxicons'

export default function Header() {
  return (
    <header>
      <div className={styles.header}>

      <h1>CD Games</h1>
      <Search/>
      <Profile/>
      </div>
    </header>
  )
}
