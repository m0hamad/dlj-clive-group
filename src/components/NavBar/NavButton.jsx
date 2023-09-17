import React from 'react'
import './navbar.css'

const NavButton = ({ isOpen, setIsOpen }) => {

    return (
        <button
            className='nav-button'
            style={{
                gap: !isOpen ? '.375rem' : 0,
                alignItems: isOpen ? 'center' : 'stretch',
            }}
            onClick={() => setIsOpen(c => !c)}
        >
            <div className={!isOpen ? 'nav-button-line-1' : 'nav-button-line-1-open'} />
            {!isOpen && <div className='nav-button-line-2' />}
            <div className={!isOpen ? 'nav-button-line-1' : 'nav-button-line-1-open-opp'} />
        </button>
    )
}

export default NavButton