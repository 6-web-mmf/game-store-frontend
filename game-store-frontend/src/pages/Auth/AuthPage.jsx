import React from 'react'
import styles from './AuthPage.module.scss'
export default function AuthPage() {
  const [status, setStatus] = React.useState("Sign Up")
  return (
    <form className={styles.form}>
        <h1>{status}</h1>
        {
            status.includes("Up")
            && <input
                className={styles.userName}
                type="text"
                placeholder="Username" />
        }
        <input
            className=''
            placeholder="Email" />
        <input
            className=''
            type="password"
            placeholder="Password" />
        {
            status.includes("Up")
            && <input
                className=''
                type="password"
                placeholder="Repeat password" />
        }
        <button
            className=''
            type='submit'>{status}</button>
        <div className={styles.subtitle}>
            {
                status.includes("Up")
                    ? <p className='underline text-sm cursor-pointer' onClick={() => setStatus("Sign In")}>Login here</p>
                    : <p className='underline text-sm cursor-pointer' onClick={() => setStatus("Sign Up")}>Register here</p>
            }
        </div>
    </form>
)
}
