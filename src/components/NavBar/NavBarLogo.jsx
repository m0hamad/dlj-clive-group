import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const NavBarLogo = () => {
    return (
        <Link target='_blank' to={`https://www.ualberta.ca/chemistry/index.html`}>
            <img
                className='chem-department-logo'
                src="./images/chem-department-logo.png"
                alt="University of Alberta Department of Chemistry Logo"
            />
        </Link>
    )
}

export default NavBarLogo