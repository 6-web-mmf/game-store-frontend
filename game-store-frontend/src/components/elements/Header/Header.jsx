import React from 'react'
import styles from './Header.module.scss'
import Profile from './Profile'
import 'boxicons'
import { NavLink, useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'

export default function Header() {
  const location = useLocation()

  const [active, setActive] = React.useState(true)

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
      <Profile setActive={setActive}/>
      <Modal active={active} />
      </div>
      <hr />
    </header>
  )
}
