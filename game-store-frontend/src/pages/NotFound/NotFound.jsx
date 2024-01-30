import React from 'react'
import styles from './NotFound.module.scss'
import { NavLink } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className={styles.notFound}>
        <span>Not Found</span>
        <NavLink to={"/"}>Back to Home</NavLink>
    </div>
  )
}
