"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { TextGenerateEffect } from "./ui/TextGenerate";

export function Projects() {
    return (
        <div className="space-y-12">
            <TextGenerateEffect words="Projects" className="text-4xl text-center" />
            <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item["Project Name"]}
                        description={item["Description"]}
                        header={<Skeleton imageLink={item["Thumbnail URL"]} />}
                        className={cn("[&>p:text-lg]")}
                        liveLink={item["Live Link"]}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}
const Skeleton = ({ imageLink }: { imageLink: string }) => (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl">
        <img src={imageLink} className="w-full object-cover rounded-xl" alt="" />
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
            "nodejs",
            "javascript",
            "firebase",
            "html5",
            "mongodb",
            "stripe",
            "reactjs",
            "expressjs",
            "tailwindcss",
            "shadcn-ui"
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
            "react",
            "nodejs",
            "javascript",
            "firebase",
            "html5",
            "mongodb",
            "stripe",
            "css3",
            "expressjs",
            "jwt-authentication",
            "shadcn-ui"
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
            "Property Management",
            "Transaction Facilitation"
        ],
        "technology_used": [
            "react",
            "nodejs",
            "javascript",
            "firebase",
            "html5",
            "mongodb",
            "stripe",
            "css3",
            "expressjs",
            "jwt-authentication",
            "shadcn-ui"
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
            "Search and Filter",
            "Save Favorites",
            "Responsive Design"
        ],
        "technology_used": [
            "react",
            "nodejs",
            "javascript",
            "firebase",
            "html5",
            "mongodb",
            "stripe",
            "css3",
            "expressjs",
            "jwt-authentication",
            "lottie",
            "toastify",
            "typewriter-animation",
            "tailwindcss"
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
            "All-in-One Setup",
            "Saves Time",
            "Efficient Development"
        ],
        "technology_used": [
            "react",
            "nodejs",
            "javascript",
            "html5",
            "css3",
            "react-icons",
            "tailwindcss"
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
            "Figma-Inspired",
            "Dynamic Banner",
            "Rich Book Data",
            "Books Showcase",
            "Interactive Book Details Page",
            "Toast Notifications",
            "Listed Books Page (Read & Wishlist Management)",
            "Responsive Design",
            "Custom Shape Bar Chart (Pages Read)"
        ],
        "technology_used": [
            "HTML",
            "CSS",
            "Tailwind CSS",
            "JavaScript",
            "React"
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
            "Ostad-Inspired",
            "Responsive Design"
        ],
        "technology_used": [
            "HTML",
            "CSS",
            "Tailwind CSS"
        ]
    }
]