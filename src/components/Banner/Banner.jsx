import React from 'react'
import './banner.css'

const Banner = ({ text, isPrimary }) => {
    return (
        <div
            style={{
                fontWeight: isPrimary && 500,
                fontSize: isPrimary && '2rem',
                textAlign: isPrimary && 'center'
            }}
            className='banner-ctr'
        >
            {text}
        </div>
    )
}

export default Banner