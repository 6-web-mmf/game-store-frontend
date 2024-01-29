import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../elements/Header/Header'
import { NavLink, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation()
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