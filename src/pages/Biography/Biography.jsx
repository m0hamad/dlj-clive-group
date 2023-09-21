import React from 'react'
import Banner from '../../components/Banner/Banner'
import './biography.css'

const Biography = () => {
    return (
        <>
            <Banner text="Biography" />
            <div className='biography-ctr' >
                <img className='profile-pic' src='./images/biography/clive.jpg' alt="Clive Profile Pic" />
                <div className='profile-divider' />
                <p className='biography-text' >
                    Derrick Clive was born in London and attended schools in South Africa and England. He received his B.Sc. and Ph.D. (D. H. R. Barton and J. E. Baldwin) from Imperial College, and held a postdoctoral position at Harvard in R. B. Woodward’s group. In 1975 he joined the Chemistry Department of the University of Alberta, where he is now Professor of Chemistry. He has published over 220 papers in two areas: synthetic methods — involving mainly selenium chemistry and radical cyclization — and the synthesis of complex natural products with significant biological properties. He is the recipient of the Canadian Society for Chemistry Alfred Bader Award (2002) and the R. U. Lemieux Award (2010), and is a Fellow of the Royal Society of Chemistry (UK).
                </p>
            </div>
        </>
    )
}

export default Biography