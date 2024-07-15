"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/StickyScrool";
import { TextGenerateEffect } from "./ui/TextGenerate";

const content = [
    {
        title: "BSc. in Computer Science and Engineering",
        description:
            "Studying Computer Science at Daffodil International University offers a blend of theory and practical skills. Excelling in this program showcases strong knowledge, coding proficiency, and problem-solving abilities.",
        grade: "CGPA - 3.64 out of 4.00",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src={"/diu.webp"} height={1000} width={1000} alt="profile" />
            </div>
        ),
    },
    {
        title: "Higher Secondary School Certificate",
        description:
            "Studying Science at Uttara High School and College provided a strong foundation in scientific principles and analytical skills. Excelling in this program reflects dedication, a deep understanding of science, and a commitment to academic excellence.",
        grade: "GPA - 3.92 out of 5.00",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src={"/uhsc.jpg"} height={1000} width={1000} alt="profile" className="object-cover" />
            </div>
        ),
    },
    {
        title: "Secondary School Certificate",
        description:
            "Studying Science at Chandina Pilot Model High School provided a solid foundation in scientific principles and analytical skills. Achieving a GPA of 5 out of 5 reflects exceptional dedication, understanding, and academic excellence.",
        grade: "GPA - 5.00 out of 5.00",
        content: (
            <div className="h-full w-full flex items-center justify-center text-white">
                <Image src={"/pilot.jpg"} height={1000} width={1000} alt="profile" className="object-cover" />
            </div>
        ),
    },
];
export function Education() {
    return (
        <div className="space-y-12" id="education">
            <TextGenerateEffect words="Education" className="text-4xl text-center" />
            <StickyScroll content={content} />
        </div>
    );
}
