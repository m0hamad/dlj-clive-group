import React from 'react'
import './layout.css'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

const Layout = ({ children }) => {
    return (
        <div className='layout' >
            <NavBar />
            <section className='section'>
                {children}
            </section>
            <Footer />
        </div>
    )
}

export default Layout