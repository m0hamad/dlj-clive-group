import React, { useContext, useEffect, useState } from 'react'
import './naturalproductsynthesis.css'
import { Link } from 'react-router-dom'
import data from '../../assets/files/nps.json'
import AppContext from '../../context/AppContext'

const NaturalProductSynthesis = () => {

    const { npsImages } = useContext(AppContext)

    return (
        <div>
            <Link to='/overview' >
                Back to Overview
            </Link>
            {
                data.map((row, idx) =>
                    <div className='ctr-1' key={idx} >
                        <p>{row.name}</p>
                        <img src={npsImages[idx]?.default} alt={`${row.name} image`} />
                        <div className='ctr-2' >
                            {row.text}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NaturalProductSynthesis