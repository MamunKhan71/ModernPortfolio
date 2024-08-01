import React from "react";
import Image from "next/image";
import { GlareCard } from "./ui/GlareCard";

export function Profile() {
    return (
        <div className="flex items-center justify-center w-60 lg:w-full h-60 lg:h-full mx-auto">
            <div className=" w-full relative max-w-md">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black to-blue-800 transform scale-[0.90] bg-amber-500 rounded-full  blur-3xl" />
                <div className="relative">
                    <GlareCard>
                        <Image
                            src={'/profile-black.png'}
                            height={1000}
                            width={1000}
                            alt="profile-image"
                            className="rounded-full lg:rounded-[var(--radius)] z-10 p-2"
                        />
                    </GlareCard>
                    {/* <Button duration={5000} children={<Image src={'/profile-black.png'} height={1000} width={1000} alt="profile-image" className="rounded-[1.75rem] z-10 p-2" />} /> */}
                </div>
            </div>
        </div>
    );
}
