"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { DiJavascript } from "react-icons/di";
import { FaCookie, FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAntdesign, SiAxios, SiDaisyui, SiExpress, SiJsonwebtokens, SiMailtrap, SiMongodb, SiMongoose, SiNetlify, SiReactrouter, SiTailwindcss, SiVite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import Image from "next/image";
import { MdNoEncryption } from "react-icons/md";
import { TbBrandFramerMotion } from "react-icons/tb";
const Skeleton = ({ imageLink }: { imageLink: string }) => (
    <div className="flex flex-1 w-full h-96 rounded-xl">
        <Image src={imageLink} height={0} width={0} sizes="100vw" className="w-full h-96 object-cover rounded-xl" alt="" />
    </div>
);
const items = [
    {
        "Project Name": "Pranighor",
        "Project Type": "Pet Adoption Platform",
        "Description": "An online platform designed for pet adoption, allowing users to find and adopt pets in need of a new home.",
        "Live Link": "https://pranighor-1658d.web.app/",
        "Thumbnail URL": "https://i.ibb.co/7bSCYK6/Fire-Shot-Capture-038-Pranighor-com-A-New-Home-for-Every-Pet-pranighor-1658d-web-app.png",
        "Source Code": "https://github.com/MamunKhan71/PraniGhor",
        "Project ID": "PG-000",
        "core_features": [
            "Pet Listings",
            "Pet Management",
            "Real-time Notifications"
        ],
        "technology_used": [
            <FaGithub key="github" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <IoLogoFirebase key="firebase" />,
            <FaHtml5 key="html5" />,
            <SiMongodb key="mongodb" />,
            <FaCss3Alt key="css3" />,
            <FaReact key="react" />,
            <SiExpress key="express" />,
            <RiTailwindCssFill key="tailwind" />,
            <SiJsonwebtokens key="jwt" />
        ]
    },
    {
        "Project Name": "RuposhiBhojon",
        "Project Type": "Food Sharing Website",
        "Description": "A food sharing website connecting individuals to share homemade meals, fostering community engagement and reducing food waste.",
        "Live Link": "https://ruposhibhojon.web.app/",
        "Thumbnail URL": "https://i.ibb.co/JCR5cVd/Available.png",
        "Source Code": "https://github.com/MamunKhan71/RuposhiBhojon",
        "Project ID": "RB-001",
        "core_features": [
            "Food Sharing",
            "Search and Filter",
            "Donator Profiles"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <IoLogoFirebase key="firebase" />,
            <FaHtml5 key="html5" />,
            <SiMongodb key="mongodb" />,
            <FaCss3Alt key="css3" />,
            <SiExpress key="express" />,
            <SiJsonwebtokens key="jwt" />,
            <SiAntdesign key="antdesign" />,
            <FaGithub key="github" />,
            <SiDaisyui key="daisyui" />
        ]
    },
    {
        "Project Name": "Real Estate Portal",
        "Project Type": "Property Management Platform",
        "Description": "A platform designed for property management, facilitating real estate transactions, listings, and property information.",
        "Live Link": "https://bd-corporate.web.app/",
        "Thumbnail URL": "https://i.ibb.co/KVvM83K/corporate.png",
        "Source Code": "https://github.com/MamunKhan71/Bd-Corporate",
        "Project ID": "RE-002",
        "core_features": [
            "Property Listings",
            "Transaction",
            "User Authentication"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <IoLogoFirebase key="firebase" />,
            <FaHtml5 key="html5" />,
            <SiMongodb key="mongodb" />,
            <FaCss3Alt key="css3" />,
            <SiExpress key="express" />,
            <SiJsonwebtokens key="jwt" />,
            <SiAntdesign key="antdesign" />,
            <FaGithub key="github" />,
            <SiDaisyui key="daisyui" />
        ]
    },
    {
        "Project Name": "AuthMaster",
        "Project Type": "Authentication Platform",
        "Description": "A MERN-based platform for secure user authentication, including signup, login, email verification, and password recovery.",
        "Live Link": "https://authmaster-fo5w.onrender.com",
        "Thumbnail URL": "https://res.cloudinary.com/dfwmhlhyo/image/upload/v1724911189/second_page_mkti7y.png",
        "Source Code": "https://github.com/MamunKhan71/AuthMaster",
        "Project ID": "AM-001",
        "core_features": [
            "Signup & Verification",
            "Recovery & Welcome",
            "OTP & Reset"
        ],
        "technology_used": [
            <FaReact key='react' />,
            <FaNodeJs key='nodejs' />,
            <DiJavascript key='javascript' />,
            <FaHtml5 key='html5' />,
            <SiMongodb key='mongodb' />,
            <SiExpress key='express' />,
            <SiJsonwebtokens key='jwt' />,
            <SiTailwindcss key='tailwindcss' />,
            <SiMailtrap key='mailtrap' />,
            <SiMongoose key='mongoose' />,
            <TbBrandFramerMotion key='framer-motion' />,
            <SiReactrouter key='react-router-dom' />,
        ]
    },
    {
        "Project Name": "Online Art Shop",
        "Project Type": "E-Commerce Website",
        "Description": "An e-commerce website specializing in selling various art-related products such as paintings, sculptures, and artistic accessories.",
        "Live Link": "https://craftifybd-dd2ee.web.app/",
        "Thumbnail URL": "https://i.ibb.co/FBv1cNR/craftify.png",
        "Source Code": "https://github.com/MamunKhan71/CraftifyBD",
        "Project ID": "OA-003",
        "core_features": [
            "Product Listings",
            "Shopping Cart",
            "Payment Integration"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <IoLogoFirebase key="firebase" />,
            <FaHtml5 key="html5" />,
            <SiMongodb key="mongodb" />,
            <FaCss3Alt key="css3" />,
            <SiExpress key="express" />,
            <SiJsonwebtokens key="jwt" />,
            <SiAntdesign key="antdesign" />,
            <FaGithub key="github" />,
            <SiDaisyui key="daisyui" />
        ]
    },
    {
        "Project Name": "React Setup Essentials",
        "Project Type": "Utility",
        "Description": "A utility website offering essential tools, resources, and guides for setting up React.js projects efficiently.",
        "Live Link": "https://react-setup.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/nC7SzQm/react-Setup.png",
        "Source Code": "https://github.com/MamunKhan71/react-setup",
        "Project ID": "RS-004",
        "core_features": [
            "Setup Guides",
            "Tool Recommendations",
            "Resource Links"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiVite key="vite" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />
        ]
    },
    {
        "Project Name": "Boi Bazaar",
        "Project Type": "Online Bookstore",
        "Description": "An online bookstore providing a vast collection of books across different genres, enabling users to explore, purchase, and read books online.",
        "Live Link": "https://boi-bazaar.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/GJdVsnZ/boi-Bazaar.png",
        "Source Code": "https://github.com/MamunKhan71/Boi-Bazaar",
        "Project ID": "BB-005",
        "core_features": [
            "Book Listings",
            "Search and Filter",
            "User Reviews"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Ostad Website Clone",
        "Project Type": "E-Learning Platform",
        "Description": "An e-learning platform designed to replicate the features and functionalities of the Ostad website, offering educational courses and materials.",
        "Live Link": "https://guru-learning.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/T4Kdr1r/guru-Learning.png",
        "Source Code": "https://github.com/MamunKhan71/GuruLearning",
        "Project ID": "OWC-006",
        "core_features": [
            "Course Listings",
            "User Authentication",
            "Progress Tracking"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Dua Ruqyah Home Page",
        "Project Type": "Online Quran Platform",
        "Description": "An online Quran platform focusing on providing Islamic content, including Quranic verses, prayers (duas), and Ruqyah (spiritual healing) resources.",
        "Live Link": "https://dua-ruqyah-mamun.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/zXyjrV2/dua.png",
        "Source Code": "https://github.com/MamunKhan71/dua-ruqyah",
        "Project ID": "DRH-007",
        "core_features": [
            "Quranic Content",
            "Prayer Resources",
            "Spiritual Healing Guides"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Flavor Quest Website",
        "Project Type": "Online Food Recipe Website",
        "Description": "An online platform dedicated to food enthusiasts, offering a wide array of recipes, cooking tips, and culinary inspirations.",
        "Live Link": "https://flavorquest-md-mamun-07.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/KKbHKrJ/cook.png",
        "Source Code": "https://github.com/MamunKhan71/flavor-quest",
        "Project ID": "FQW-008",
        "core_features": [
            "Recipe Listings",
            "Cooking Tips",
            "User Submissions"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Online Bus Ticketing",
        "Project Type": "Online Bus Ticketing System",
        "Description": "A comprehensive platform for booking bus tickets online, providing users with easy access to bus schedules, routes, and ticket reservations.",
        "Live Link": "https://gari-lagbe.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/2PZnLP6/car-Booking.png",
        "Source Code": "https://github.com/MamunKhan71/Gari-Lagbe",
        "Project ID": "OBT-009",
        "core_features": [
            "Bus Schedules",
            "Route Information",
            "Ticket Reservations"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "RGB Color Code",
        "Project Type": "RGB Code Generator",
        "Description": "A web-based tool for generating RGB color codes, assisting designers and developers in choosing and visualizing colors for their projects.",
        "Live Link": "https://rgb-converter.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/TLQjs0w/rgb.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/rgb%20color%20generator",
        "Project ID": "RGB-010",
        "core_features": [
            "Color Picker",
            "RGB Code Display",
            "Hex Code Conversion"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Key Code Generator",
        "Project Type": "ASCII Code Generator",
        "Description": "An online utility tool for generating ASCII codes corresponding to keyboard keys, facilitating the creation of key-based functionalities.",
        "Live Link": "https://keycode-generator-mk.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/dr8w9mV/keyCode.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/key%20codes",
        "Project ID": "KCG-011",
        "core_features": [
            "Key Code Generation",
            "ASCII Code Display",
            "Copy to Clipboard"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Clash Alpha Game",
        "Project Type": "Typing Game",
        "Description": "A typing game designed to enhance typing speed and accuracy through fun and engaging gameplay mechanics.",
        "Live Link": "https://clash-alpha-game.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/vhF5tPZ/alpha.png",
        "Source Code": "https://github.com/MamunKhan71/Alpha-Clash",
        "Project ID": "CAG-012",
        "core_features": [
            "Typing Challenges",
            "Speed Tracking",
            "Leaderboard"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "Coin Flipper",
        "Project Type": "Coin Flipping Simulator",
        "Description": "An online coin flipping tool for simulating random coin tosses, commonly used for decision-making purposes.",
        "Live Link": "https://coin-flipper-mk.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/0rTh5QC/coin.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/coin%20flipper",
        "Project ID": "CF-013",
        "core_features": [
            "Random Coin Flip",
            "Heads or Tails Display",
            "Flip Animation"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
    {
        "Project Name": "QR Code Generator",
        "Project Type": "QR Code Generator",
        "Description": "An online utility for generating QR codes for various types of data, such as URLs, text, and contact information.",
        "Live Link": "https://qr-code-generator-mk.netlify.app/",
        "Thumbnail URL": "https://res.cloudinary.com/dfwmhlhyo/image/upload/v1724916964/qrcode_qsrcsb.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/qr%20code%20generator",
        "Project ID": "QRG-014",
        "core_features": [
            "QR Generation",
            "Data Input",
            "Downloadable QR Codes"
        ],
        "technology_used": [
            <FaReact key="react" />,
            <FaNodeJs key="nodejs" />,
            <DiJavascript key="javascript" />,
            <FaHtml5 key="html5" />,
            <FaCss3Alt key="css3" />,
            <SiNetlify key="netlify" />,
            <FaGithub key="github" />,
            <SiAntdesign key="antdesign" />
        ]
    },
];



export function Projects() {
    const [startIndex, setStartIndex] = useState(0)
    const [length, setLength] = useState(0)
    const [endIndex, setEndIndex] = useState(6)
    const [showButton, setShowButton] = useState(false)
    useEffect(() => {
        setLength(items.length - 1);
    }, [items])
    const handleMore = () => {
        if (endIndex < length) {
            const newEndIndex = Math.min(endIndex + 6, length);
            setEndIndex(newEndIndex);
        }
        setShowButton(endIndex < length);
    };
    useEffect(() => {
        setShowButton(endIndex < length);
    }, [endIndex, length]);




    return (
        <div className="space-y-12" id="projects">
            <TextGenerateEffect words="Projects" className="text-4xl text-center" />
            <BentoGrid className="w-full" handleMore={handleMore} showButton={showButton}>
                {items.slice(startIndex, endIndex).map((item, i) => (
                    <BentoGridItem
                        key={item["Project ID"] || i}
                        title={item["Project Name"]}
                        description={item["Description"]}
                        header={<Skeleton imageLink={item["Thumbnail URL"]} />}
                        className={cn("[&>p:text-lg]")}
                        liveLink={item["Live Link"]}
                        projectId={item["Project ID"]}
                        sourceCode={item["Source Code"]}
                        technology={item["technology_used"]}
                        features={item["core_features"]}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
