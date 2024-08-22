"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { FaGithub } from "react-icons/fa";

export const AnimatedTooltip = ({
    items,
}: {
    items: {
        id: number;
        name: string;
        icon: React.ReactNode;
    }[];
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0); // going to set this value on mouse move
    // rotate the tooltip
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    // translate the tooltip
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    );
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth); 
    };

    return (
        <>
            {items.map((item, idx) => (
                <div
                    className="-mr-4  relative group"
                    key={item.name}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="popLayout">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 160,
                                        damping: 40,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{
                                    translateX: translateX,
                                    rotate: rotate,
                                    whiteSpace: "nowrap",
                                }}
                                className="absolute bottom-16 flex text-xs flex-col items-center justify-center rounded-xl z-50 shadow-xl py-2 bg-slate-900 px-2"
                            >
                                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                                <div className="font-bold text-white relative z-30 text-base">
                                    {item.name}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="object-cover hover:cursor-pointer p-2 !m-0 object-top flex items-center justify-center rounded-lg h-14 w-14 border-[0.2px] group-hover:scale-105 group-hover:z-30 border-slate-800 relative transition duration-500 bg-black">
                        {item.icon}
                    </div>
                </div>
            ))}
        </>
    );
};
