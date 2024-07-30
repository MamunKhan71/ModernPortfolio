"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAntdesign, SiDaisyui, SiExpress, SiJsonwebtokens, SiMongodb, SiNetlify, SiVite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import Image from "next/image";
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
            <FaGithub />,
            <FaNodeJs />,
            <DiJavascript />,
            <IoLogoFirebase />,
            <FaHtml5 />,
            <SiMongodb />,
            <FaCss3Alt />,
            <FaReact />,
            <SiExpress />,
            <RiTailwindCssFill />,
            <SiJsonwebtokens />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <IoLogoFirebase />,
            <FaHtml5 />,
            <SiMongodb />,
            <FaCss3Alt />,
            <SiExpress />,
            <SiJsonwebtokens />,
            <SiAntdesign />,
            <FaGithub />,
            <SiDaisyui />
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
            "Transaction Management",
            "User Authentication"
        ],
        "technology_used": [
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <IoLogoFirebase />,
            <FaHtml5 />,
            <SiMongodb />,
            <FaCss3Alt />,
            <SiExpress />,
            <SiJsonwebtokens />,
            <SiAntdesign />,
            <FaGithub />,
            <SiDaisyui />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <IoLogoFirebase />,
            <FaHtml5 />,
            <SiMongodb />,
            <FaCss3Alt />,
            <SiExpress />,
            <SiJsonwebtokens />,
            <SiAntdesign />,
            <FaGithub />,
            <SiDaisyui />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiVite />,
            <SiNetlify />,
            <FaGithub />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />,
            <SiAntdesign />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />,
            <SiAntdesign />
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
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />,
            <SiAntdesign />
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
            "User Reviews"
        ],
        "technology_used": [
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />,
            <SiAntdesign />
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
            "Ticket Booking",
            "Bus Schedules",
            "Route Information"
        ],
        "technology_used": [
            <FaReact />,
            <FaNodeJs />,
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />,
            <SiAntdesign />
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
            "RGB Color Generation",
            "Color Preview",
            "Copy to Clipboard"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
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
            "ASCII Code Generation",
            "Key Press Detection",
            "Copy to Clipboard"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
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
            "Typing Practice",
            "Score Tracking",
            "Interactive Gameplay"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
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
            "Heads or Tails",
            "Flip Animation"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
        ]
    },
    {
        "Project Name": "QR Code Generator",
        "Project Type": "QR Code Generator",
        "Description": "An online utility for generating QR codes, providing users with the ability to create QR codes for URLs, text, and other data.",
        "Live Link": "https://qr-code-generator-mk.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/WPnzrxn/qr.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/qr%20code%20generator",
        "Project ID": "QRG-014",
        "core_features": [
            "QR Code Generation",
            "Data Encoding",
            "Download QR Code"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
        ]
    },
    {
        "Project Name": "Stopwatch",
        "Project Type": "Time Tracking Tool",
        "Description": "A simple and effective stopwatch tool for tracking time intervals, with start, stop, and reset functionalities.",
        "Live Link": "https://stopwatch-mk.netlify.app/",
        "Thumbnail URL": "https://i.ibb.co/FmRZWr3/stopwatch.png",
        "Source Code": "https://github.com/MamunKhan71/JavaScript-MiniProject/tree/main/stopwatch",
        "Project ID": "SW-015",
        "core_features": [
            "Start, Stop, Reset",
            "Lap Timing",
            "Time Display"
        ],
        "technology_used": [
            <DiJavascript />,
            <FaHtml5 />,
            <FaCss3Alt />,
            <SiNetlify />,
            <FaGithub />
        ]
    }
];


export function Projects() {
    return (
        <div className="space-y-12" id="projects">
            <TextGenerateEffect words="Projects" className="text-4xl text-center" />
            <BentoGrid className="w-full">
                {items.slice(0, 6).map((item, i) => (
                    <BentoGridItem
                        key={item["Project ID"] || i}
                        title={item["Project Name"]}
                        description={item["Description"]}
                        header={<Skeleton imageLink={item["Thumbnail URL"]} />}
                        className={cn("[&>p:text-lg]")}
                        liveLink={item["Live Link"]}
                        sourceCode={item["Source Code"]}
                        technology={item["technology_used"]}
                        features={item["core_features"]}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
