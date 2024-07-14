"use client";

import Image from "next/image";
import { Tabs } from "./ui/Tabs";
import { TextGenerateEffect } from "./ui/TextGenerate";

export function Projects2() {
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Content",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Content tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Random",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Random tab</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-12">
            <TextGenerateEffect words="Projects" className="text-4xl text-center" />
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

const DummyContent = () => {
    return (
        <Image
            src="https://i.ibb.co/T4Kdr1r/guru-Learning.png"
            alt="dummy image"
            width="2000"
            height="2000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
