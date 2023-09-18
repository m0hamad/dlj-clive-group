import React, { useContext, useEffect, useRef, useState } from 'react'
import './navbar.css'
import NavBarLogo from './NavBarLogo'
import NavBarItems from './NavBarItems'
import AppContext from '../../context/AppContext';
import { TABLET_WIDTH } from '../../utils/constants';
import NavButton from './NavButton';

const NavBar = () => {

    const { windowWidth } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const navBarRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        if (windowWidth > TABLET_WIDTH) {
            setIsOpen(c => !c)
        }
    }, [windowWidth])

    useEffect(() => {

        const handleScroll = () => {
            if (navBarRef && navBarRef?.current) {
                if (document.body.scrollTop > 0 ||
                    document.documentElement.scrollTop > 0) {
                    navBarRef.current.style.visibility = 'hidden'
                    navBarRef.current.style.opacity = '0'
                    setIsOpen(false)
                } else {
                    navBarRef.current.style.visibility = 'visible'
                    navBarRef.current.style.opacity = '1'
                }
            }
        }

        document.addEventListener("scroll", handleScroll)

    }, [])

    return (
        <>
            {
                windowWidth > TABLET_WIDTH ?
                    <nav ref={navBarRef} className='navbar'>
                        <NavBarLogo />
                        <NavBarItems setIsOpen={setIsOpen} />
                    </nav> :
                    <nav
                        ref={navBarRef}
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