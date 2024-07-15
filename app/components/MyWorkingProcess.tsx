import { cn } from "@/lib/utils";
import { FaBolt, FaClock, FaCloud, FaCodeBranch, FaCreditCard, FaDollarSign, FaEraser, FaHeart, FaLaptopCode, FaLink, FaLock, FaMobileAlt, FaRoute, FaServer } from "react-icons/fa";
import { FaHeartPulse, FaTerminal } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/TextGenerate";
// import {
//     IconAdjustmentsBolt,
//     IconCloud,
//     IconCurrencyDollar,
//     IconEaseInOut,
//     IconHeart,
//     IconHelp,
//     IconRouteAltLeft,
//     IconTerminal2,
// } from "@tabler/icons-react";

export function MyWorkingProcess() {
    const features = [
        {
            title: "Frontend Development",
            description:
                "Expertise in HTML, CSS, JavaScript, and React.js to build responsive and user-friendly interfaces.",
            icon: <FaLaptopCode/>,
        },
        {
            title: "Backend Development",
            description:
                "Proficient in Node.js, Express.js, and MongoDB for creating robust backend systems.",
            icon: <FaServer />,
        },
        {
            title: "Authentication & Security",
            description:
                "Implement secure authentication and authorization using JWT and other modern security practices.",
            icon: <FaLock />,
        },
        {
            title: "Real-time Applications",
            description:
                "Develop real-time features and notifications using Firebase and WebSockets.",
            icon: <FaClock />,
        },
        {
            title: "Payment Integration",
            description:
                "Integrate secure payment gateways like Stripe and SSLCommerz for seamless transactions.",
            icon: <FaCreditCard />,
        },
        {
            title: "RESTful APIs",
            description:
                "Design and implement scalable RESTful APIs to connect frontend and backend services.",
            icon: <FaLink />,
        },
        {
            title: "Responsive Design",
            description:
                "Create mobile-first, responsive web designs using Tailwind CSS and other modern frameworks.",
            icon: <FaMobileAlt />,
        },
        {
            title: "Version Control",
            description:
                "Utilize Git and GitHub for efficient version control and collaboration on projects.",
            icon: <FaCodeBranch />,
        },
    ];

    return (
        <div className="space-y-12" id="process">
            <TextGenerateEffect words="My working process" className="text-4xl text-center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
