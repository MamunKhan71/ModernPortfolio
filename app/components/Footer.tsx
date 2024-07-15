import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10 relative' id='footer'>
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold text-center lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span> outside digital presents to the next level?</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today, let&apos;s discuss together!</p>
                <a href="mailto:mkmamun031@gmail.com">
                    <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right' />
                </a>
            </div>
            <div className='mt-16 flex-col md:flex-row justify-between items-center w-full'>
                <p className='text-center md:text-base text-sm font-light md:font-normal'>Copyright &copy; 2024 - Md. Mamun</p>
            </div>
        </footer>
    )
}

export default Footer