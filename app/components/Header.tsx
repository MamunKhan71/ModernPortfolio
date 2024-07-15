import React from 'react'
import { GridBackground } from './ui/GridBackground'
import { FlipWords } from './ui/FlipWords'
import { AnimatedTooltip } from './ui/Tooltip'
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaVoicemail } from 'react-icons/fa6'
import { TypewriterEffectSmooth } from './ui/TypeWriter'
import { Profile } from './Profile'

const Header = () => {
    const words = ["Full Stack Web Developer", "MERN Stack Developer"];

    return (
        <div className="text-center flex justify-between items-center w-full" id='about'>
            <div className="flex-1 w-full flex items-center gap-12 justify-center">
                <div>
                    <TypewriterEffectSmooth className="text-left" words={[
                        { text: "Hi", className: "text-purple" },
                        { text: ",", className: "text-purple" },
                        { text: "I", className: "text-purple" },
                        { text: "'", className: "text-purple" },
                        { text: "m", className: "text-purple" },
                        { text: " ", className: "text-purple" },
                        { text: "Md.", className: "text-purple" },
                        { text: "Mamun", className: "text-purple" },
                    ]}
                    />
                    <div className="text-left mt-4">
                        I&apos;m a
                        <FlipWords words={words} /> <br />
                        <p className="text-justify max-w-2xl  mt-4">Highly motivated Junior Software Developer skilled in HTML, CSS, JavaScript, DOM manipulation, OOP, ES6, React, and Tailwind CSS, with proficiency in Firebase, Next.js, Axios, Node.js, Vite, MongoDB, Express, and more. Seeking an entry-level position to enhance skills and contribute to impactful software projects.</p>
                    </div>
                    <div className="flex items-start justify-start gap-6 flex-col">
                        <div className="flex items-start justify-start mt-4 gap-6">
                            <a href="https://github.com/MamunKhan71"><AnimatedTooltip items={[{ id: 1, name: "Github", icon: <FaGithub className="w-1/2 h-1/2" color="rgb(71 85 105)" /> }]} /></a>
                            <a href="https://www.linkedin.com/in/mdmamun99/"><AnimatedTooltip items={[{ id: 2, name: "Linkedin", icon: <FaLinkedin className="w-1/2 h-1/2" color="rgb(71 85 105)" /> }]} /></a>
                            <a href="https://www.facebook.com/mkmamun111"><AnimatedTooltip items={[{ id: 3, name: "Facebook", icon: <FaFacebook className="w-1/2 h-1/2" color="rgb(71 85 105)" /> }]} /></a>
                            <a href="https://x.com/MdMamun30226822"><AnimatedTooltip items={[{ id: 4, name: "Twitter", icon: <FaTwitter className="w-1/2 h-1/2" color="rgb(71 85 105)" /> }]} /></a>
                            <a href="mailto:mkmamun031@gmail.com"><AnimatedTooltip items={[{ id: 4, name: "Email", icon: <FaVoicemail className="w-1/2 h-1/2" color="rgb(71 85 105)" /> }]} /></a>
                        </div>
                        <a href="MyResume.pdf" download={true}>
                            <button className="inline-flex gap-2 items-center h-12 animate-shimmer justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                Download My Resume <FaDownload />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 w-full">
                <Profile />
            </div>
        </div>
    )
}

export default Header