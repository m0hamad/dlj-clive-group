import { useEffect, useRef } from 'react'
import './scrollupbutton.css'
import { FiArrowUp } from 'react-icons/fi'

const ScrollUpButton = () => {

    const scrollButtonRef = useRef(null);

    useEffect(() => {

        const handleScroll = () => {
            if (scrollButtonRef && scrollButtonRef?.current) {
                if (document.body.scrollTop > 30 ||
                    document.documentElement.scrollTop > 30) {
                    scrollButtonRef.current.style.visibility = 'visible'
                    scrollButtonRef.current.style.opacity = '1'
                    scrollButtonRef.current.style.bottom = '3rem'
                } else {
                    scrollButtonRef.current.style.visibility = 'hidden'
                    scrollButtonRef.current.style.opacity = '0'
                    scrollButtonRef.current.style.bottom = '0'
                }
            }
        }

        document.addEventListener("scroll", handleScroll)

    }, [])

    return (
        <button
            ref={scrollButtonRef}
            className='scroll-btn'
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
        >
            <FiArrowUp className='icon'
            />
        </button>
    )
}

export default ScrollUpButton