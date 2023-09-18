import React, { useContext } from 'react'
import { NAV_ITEMS, PINK, TABLET_WIDTH } from '../../utils/constants'
import { Link } from 'react-router-dom'
import './navbar.css';
import AppContext from '../../context/AppContext';

const NavBarItems = ({ setIsOpen }) => {

    const { windowWidth } = useContext(AppContext);

    return (
        <div
            className='nav-items'
            style={{
                flexDirection: windowWidth <= TABLET_WIDTH && 'column',
            }}
        >
            {
                NAV_ITEMS.slice(1).map(navItem =>
                    <Link
                        className='nav-item'
                        key={navItem.name}
                        to={navItem.path}
                        onClick={() => setIsOpen(c => !c)}
                    >
                        {navItem.name}
                        <div className='nav-item-underline' />
                    </Link>
                )
            }
            <a
                className='nav-item'
                onClick={() => {
                    document.getElementById('footer').scrollIntoView();
                    setIsOpen(c => !c)
                }}
            >
                Contact
                <div className='nav-item-underline' />
            </a>
        </div>
    )
}

export default NavBarItems