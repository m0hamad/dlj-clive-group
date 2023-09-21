import React, { useContext, useEffect, useState } from 'react'
import './reactionmethodology.css'
import { Link } from 'react-router-dom'
import data from '../../assets/files/rm.json'
import AppContext from '../../context/AppContext'

const ReactionMethodology = () => {

    const { windowWidth } = useContext(AppContext)

    return (
        <>
            <Link className='nps-url' to='/overview' >
                Back to Overview
                <div className='nps-url-underline' />
            </Link>
            <h3 className='nps-h3' >Research on Methodology</h3>
            <p className='nps-h3-text' >In the area of Synthetic Methodology, the Clive Group has made a number of contributions that have withstood the test of time and have become common reactions that are widely used in synthesis. These contributions mainly involve the invention of <b>selenium</b> and <b>tellurium</b> reagents, and the development of <b>radical cyclization</b>, which is an area that has become an extremely large and valuable part of Synthetic Organic Chemistry.</p>
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
                            {
                                <img className='row-img' src={`./images/reactionmethodology/${idx + 1}.png`} alt={`${row.name} image`} />
                            }
                            <p dangerouslySetInnerHTML={{ __html: row.text }} />
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ReactionMethodology