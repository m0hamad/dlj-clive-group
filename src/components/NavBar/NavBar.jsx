import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import NavBarLogo from './NavBarLogo'
import NavBarItems from './NavBarItems'
import AppContext from '../../context/AppContext';
import { TABLET_WIDTH } from '../../utils/constants';
import NavButton from './NavButton';

const NavBar = () => {

    const { windowWidth } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        if (windowWidth > TABLET_WIDTH) {
            setIsOpen(c => !c)
        }
    }, [windowWidth])

    return (
        <>
            {
                windowWidth > TABLET_WIDTH ?
                    <nav className='navbar'>
                        <NavBarLogo />
                        <NavBarItems setIsOpen={setIsOpen} />
                    </nav> :
                    <nav
                        className='navbar'
                        style={{
                            flexDirection: 'column',
                            alignItems: isOpen && 'flex-start',
                            height: isOpen && 'fit-content',
                        }}
                    >
                        <div className='navbar-menu-responsive' >
                            <NavBarLogo />
                            <NavButton
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        </div>
                        {isOpen && <NavBarItems setIsOpen={setIsOpen} />}
                    </nav>
            }
        </>
    )
}

export default NavBar