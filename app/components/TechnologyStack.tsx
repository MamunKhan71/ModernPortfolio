"use client";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si"
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { InfiniteMovingCards } from "./ui/MovingCards";
import { FaGithub } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerate";
import Marquee from "react-fast-marquee";
import { AnimatedTooltip } from "./ui/Tooltip";
export function TechnologyStack() {
    return (
        <div className="space-y-6 w-full">
            <TextGenerateEffect words="Technology Stack" className="text-4xl text-center" />
            {/* <div className="h-auto rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
                <InfiniteMovingCards
                    items={skillsArray}
                    direction="left"
                    speed="slow"
                />
            </div> */}
            <div className="flex gap-6 items-center justify-center flex-wrap w-full px-4 pt-12">
                <AnimatedTooltip items={skillsArray} />
            </div>
        </div>
    );
}

export const skillsArray = [
    { id: 1, name: "HTML5", icon: <FaHtml5 key="html5" className="text-3xl" /> },
    { id: 2, name: "CSS3", icon: <FaCss3Alt key="css3" className="text-3xl" /> },
    { id: 3, name: "JavaScript", icon: <DiJavascript key="javascript" className="text-3xl" /> },
    { id: 4, name: "Tailwind CSS", icon: <RiTailwindCssFill key="tailwind" className="text-3xl" /> },
    { id: 5, name: "Firebase", icon: <IoLogoFirebase key="firebase" className="text-3xl" /> },
    { id: 6, name: "Next.js", icon: <RiNextjsFill key="nextjs" className="text-3xl" /> },
    { id: 7, name: "Axios", icon: <SiAxios key="axios" className="text-3xl" /> },
    { id: 8, name: "Node.js", icon: <FaNodeJs key="nodejs" className="text-3xl" /> },
    { id: 9, name: "Vite", icon: <SiVite key="vite" className="text-3xl" /> },
    { id: 10, name: "React", icon: <FaReact key="react" className="text-3xl" /> },
    { id: 11, name: "MongoDB", icon: <SiMongodb key="mongodb" className="text-3xl" /> },
    { id: 12, name: "Express", icon: <SiExpress key="express" className="text-3xl" /> },
    { id: 13, name: "Vercel", icon: <SiVercel key="vercel" className="text-3xl" /> },
    { id: 14, name: "Netlify", icon: <SiNetlify key="netlify" className="text-3xl" /> },
    { id: 15, name: "Postman", icon: <SiPostman key="postman" className="text-3xl" /> },
    { id: 16, name: "DaisyUI", icon: <SiDaisyui key="daisyui" className="text-3xl" /> },
    { id: 17, name: "Ant Design", icon: <SiAntdesign key="antdesign" className="text-3xl" /> },
    { id: 18, name: "JSON Web Tokens", icon: <SiJsonwebtokens key="jwt" className="text-3xl" /> },
    { id: 19, name: "Python", icon: <FaPython key="python" className="text-3xl" /> },
    { id: 20, name: "Flask", icon: <SiFlask key="flask" className="text-3xl" /> },
    { id: 22, name: "GitHub", icon: <FaGithub key="github" className="text-3xl" /> },
];


