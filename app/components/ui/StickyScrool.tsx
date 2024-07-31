"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaUniversity } from "react-icons/fa";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        grade: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--transparent)",
        "var(--transparent)",
        "var(--transparent)",

    ];


    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-[30rem] overflow-y-auto flex flex-col lg:flex-row justify-between relative space-x-10 rounded-md lg:pr-10"
            ref={ref}
        >
            <div className="div relative flex items-start lg:px-4">
                <div className="w-full max-w-2xl lg:mt-20" >
                    {content.map((item, index) => (
                        <div key={item.title + index}>
                            <div className="space-y-6 ">
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-2xl font-bold text-slate-100"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.3,
                                    }}
                                    className="text-lg text-slate-300 mt-10 text-justify"
                                >
                                    {item.description}

                                </motion.p>
                                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px text-xs font-semibold leading-6  text-white inline-block">
                                    <span className="absolute inset-0 overflow-hidden rounded-lg">
                                        <span className="absolute inset-0 rounded-lg  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    </span>
                                    <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                                        <span>
                                            {item.grade}
                                        </span>
                                    </div>
                                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                                </button>
                            </div>
                            <div className="h-20 lg:h-40"></div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className={cn(
                    "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
