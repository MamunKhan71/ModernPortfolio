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

export function TechnologyStack() {
    return (
        <div className="space-y-6" id="tech">
            <TextGenerateEffect words="Technology Stack" className="text-4xl text-center"/>
            <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={skillsArray}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
}

export const skillsArray = [
    { id: 1, name: "HTML5", icon: FaHtml5 },
    { id: 2, name: "CSS3", icon: FaCss3Alt },
    { id: 3, name: "JavaScript", icon: DiJavascript },
    { id: 4, name: "Tailwind CSS", icon: RiTailwindCssFill },
    { id: 5, name: "Firebase", icon: IoLogoFirebase },
    { id: 6, name: "Next.js", icon: RiNextjsFill },
    { id: 7, name: "Axios", icon: SiAxios },
    { id: 8, name: "Node.js", icon: FaNodeJs },
    { id: 9, name: "Vite", icon: SiVite },
    { id: 10, name: "React", icon: FaReact },
    { id: 11, name: "MongoDB", icon: SiMongodb },
    { id: 12, name: "Express", icon: SiExpress },
    { id: 13, name: "Vercel", icon: SiVercel },
    { id: 14, name: "Netlify", icon: SiNetlify },
    { id: 15, name: "Postman", icon: SiPostman },
    { id: 16, name: "DaisyUI", icon: SiDaisyui },
    { id: 17, name: "Ant Design", icon: SiAntdesign },
    { id: 18, name: "JSON Web Tokens", icon: SiJsonwebtokens },
    { id: 19, name: "Python", icon: FaPython },
    { id: 20, name: "Flask", icon: SiFlask },
    { id: 21, name: "GitHub", icon: FaGithub }
];
