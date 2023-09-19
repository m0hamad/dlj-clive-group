import React from 'react'
import data from '../../assets/files/members.json'
import './members.css'

const Members = () => {

    return (
        <>
            <div
                className='banner-ctr-img'
            >
                <p className='header-txt' >Members</p>
                <img className='group-img' src={`./images/members/0.jpg`} alt="Members Group Pic" />
            </div>
            <div className='bios-ctr' >
                {
                    data.map((member, idx) =>
                        <div className='bio-ctr' key={idx} >
                            <img className='member-img' src={`./images/members/${idx + 1}.jpg`} alt={`${member.name} image`} />
                            <div className='bio-text-ctr' >
                                <p className='bio-name' >{member.name}</p>
                                <p className='bio-text'>{member.bio}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Members