import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../elements/Header/Header'

const Layout = () => {
    return (
        <div>
            <Header/>
            
                
                <Outlet />
            
            <footer>

            </footer>
        </div>
    )
}

export default Layout