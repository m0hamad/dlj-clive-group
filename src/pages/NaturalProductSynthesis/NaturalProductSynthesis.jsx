import React, { useContext, useEffect, useState } from 'react'
import './naturalproductsynthesis.css'
import { Link } from 'react-router-dom'
import data from '../../assets/files/nps.json'
import AppContext from '../../context/AppContext'

const NaturalProductSynthesis = () => {

    const { windowWidth } = useContext(AppContext)

    return (
        <>
            <Link className='nps-url' to='/overview' >
                Back to Overview
                <div className='nps-url-underline' />
            </Link>
            <h3 className='nps-h3' >Research on Natural Product Synthesis</h3>
            <p className='nps-h3-text' >The Group's reputation in this area is based on the completed total syntheses of a large number of complex targets. These compounds, many of which are shown below, represent significant challenges to synthetic chemistry, and the research has usually led to the discovery of useful general reagents and methods relevant to the construction of many other types of compounds.</p>
            <hr className='nps-hr' />
            {
                data.map((row, idx) =>
                    <div className='ctr-1' key={idx} >
                        <p dangerouslySetInnerHTML={{ __html: row.name }} className='row-name' />
                        <div
                            style={{
                                flexDirection: (idx % 2 === 1 && windowWidth > 650) && 'row-reverse'
                            }}
                            className='ctr-2'
                        >
                            <img className='row-img' src={`./images/naturalproductsynthesis/${idx + 1}.png`} alt={`${row.name} image`} />
                            <p>{row.text}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default NaturalProductSynthesis