import React from 'react'
import style from './modal.module.scss'

const Modal = ({ active }) => {
    return (
        <>
            {
                active ? <div className={style.wrap}>
                    <div className={style.modal}>
                        <p>Hello</p>
                    </div>
                </div> : ''
            }
        </>
    )
}

export default Modal