import React from 'react'
import { LINKS } from '../../utils/constants'

const Links = () => {
    return (
        <div className='links' >
            <h3 style={{ fontWeight: 400 }} >LINKS</h3>
            <hr className='divider' />
            <br />
            {
                LINKS.map(link =>
                    <p key={link.url} className='url' >
                        <a
                            className='url'
                            target='_blank'
                            href={link.url}>
                            {link.name}
                        </a>
                    </p>
                )
            }
        </div>
    )
}

export default Links