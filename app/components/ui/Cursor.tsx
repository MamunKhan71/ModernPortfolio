"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const onMouseMove = (event) => {
            const { clientX, clientY } = event
            gsap.to(cursor, { x: clientX, y: clientY })
        }
        const onMouseEnterLink = (event) => {
            const link = event.target
            if (link.classList.contains('view')) {
                gsap.to(cursor, { scale: 4 })
            }
            else {
                gsap.to(cursor, { scale: 4 })

            }
        }
        const onMouseLeaveLink = () => {
            gsap.to(cursor, { scale: 1 })
        }
        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    }, [])
    return (
        <div id='custom-cursor' className='custom-cursor'>
        </div>
    )
}

export default Cursor;