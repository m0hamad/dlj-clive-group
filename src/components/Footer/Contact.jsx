import React from 'react'

const Contact = () => {
    return (
        <div className='address' >
            <h3 style={{ fontWeight: 400 }} >CONTACT</h3>
            <hr className='divider' />
            <br />
            <p><b>Professor Derrick L. J. Clive</b></p>
            <p><i>Department of Chemistry</i></p>
            <p>Gunning-Lemieux Chemistry Centre</p>
            <p>University of Alberta</p>
            <p>Edmonton, AB T6G 2G2</p>
            <br />
            <p className='url' >
                <a
                    className='url'
                    href="mailto:derrick.clive@ualberta.ca">
                    derrick.clive@ualberta.ca
                </a>

            </p>
            <p className='url' >
                <a
                    className='url'
                    href="tel:780-492-3251">
                    780-492-3251
                </a>
            </p>
        </div>
    )
}

export default Contact