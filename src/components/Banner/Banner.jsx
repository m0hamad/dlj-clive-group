import React from 'react'
import './banner.css'

const Banner = ({ text }) => {
    return (
        <div className='banner-ctr' >
            {text}
        </div>
    )
}

export default Banner