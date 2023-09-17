import React from 'react'
import logo from '../../assets/images/chem-department-logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBarLogo = () => {
    return (
        <Link to={`/`}>
            <img
                className='chem-department-logo'
                src={logo}
                alt="University of Alberta Department of Chemistry Logo"
            />
        </Link>
    )
}

export default NavBarLogo