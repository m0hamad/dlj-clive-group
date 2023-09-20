import React from 'react'
import Banner from '../../components/Banner/Banner'
import './overview.css'
import { Link } from 'react-router-dom'

const Overview = () => {
    return (
        <>
            <Banner text="Overview" />
            <br />
            <h2 className='overview-h2' >Synthesis in the Clive Research Team</h2>
            <h4 className='overview-h4' >The General Research Area</h4>
            <hr className='overview-hr' />
            <p className='overview-p' >The Clive Research team studies a wide range of synthetic projects dealing with the construction of complex natural products with important medical properties and the development of new reactions and reagents.</p>
            <br />
            <h4 className='overview-h4' >Research on Natural Product Synthesis</h4>
            <hr className='overview-hr' />
            <p className='overview-p' >The Group has completed the total syntheses of a large number of very complicated targets. These compounds, many of which are shown below, represent significant challenges to synthetic chemistry, and the research has usually led to the discovery of useful general reagents and methods relevant to the construction of many other types of compounds.</p>
            <Link
                className='overview-url'
                to='/natural-product-synthesis'
                onClick={() => window.scrollTo({ top: 0 })}
            >
                Click here for more information on Natural Products Synthesis
                <div className='url-underline' />
            </Link>
            <h4 className='overview-h4' >Research on Methodology</h4>
            <hr className='overview-hr' />
            <p className='overview-p' >In the area of Synthetic Methodology, the Clive Group has made a number of contributions that have withstood the test of time and have become common reactions that are widely used in synthesis. These contributions have mainly involved the invention of selenium and tellurium reagents, and the development of radical cyclization, which is an area that has become an extremely large and valuable part of Synthetic Organic Chemistry.</p>
            <Link
                className='overview-url'
                to='/reaction-methodology'
                onClick={() => window.scrollTo({ top: 0 })}
            >
                Click here for more information on Reaction Methodology
                <div className='url-underline' />
            </Link>
            <br />
            <h2 className='overview-h2' >Current Interests</h2>
            <h4 className='overview-h4' >Current Synthetic Targets</h4>
            <hr className='overview-hr' />
            <p className='overview-p' >Several Group Members are presently involved in the synthesis of some complex natural products having properties that make them relevant to the treatment of serious diseases. The synthesis of these compounds is likely to lead to the invention of new chemistry, as was the case with the targets already completed.</p>
            <br />
            <h4 className='overview-h4' >Current Methodology</h4>
            <hr className='overview-hr' />
            <p className='overview-p' >Several methodology projects are under investigation aimed mainly at inventing new methods for making carbon-carbon bonds and for assembly of very large bioactive peptides.</p>
        </>
    )
}

export default Overview