import React from 'react'
import styles from './Header.module.scss'
import Profile from './Profile'
import 'boxicons'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  return (
    <header>
      <div className={styles.header}>

      <h1>
        <NavLink to={'/'}>CD GAMES</NavLink>
      </h1>
      <nav>
        {
          !location.pathname.includes('auth')?<ul>
          <li>
            <NavLink to={
              '/auth'
            }>Registration</NavLink>
          </li>
        </ul>: ''
        }
        
      </nav>
      <Profile/>
      </div>
     
    </header>
  )
}
