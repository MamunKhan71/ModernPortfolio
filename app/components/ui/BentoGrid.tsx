"use client"
import { cn } from "@/lib/utils";
import { FaExternalLinkAlt, FaGithub, FaLink, FaLocationArrow } from "react-icons/fa";
import { HoverBorderGradient } from "./BorderGradient";
import { IoCloseCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import { FcNext, FcPrevious } from "react-icons/fc";
import { motion } from 'framer-motion'

export const BentoGrid = ({
  className,
  children,
  showButton,
  handleMore,
}: {
  className?: string;
  children?: React.ReactNode;
  handleMore: any,
  showButton: boolean;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.25 }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ",
          className
        )}
      >
        {children}
      </motion.div>
      <a className="flex items-center gap-4 justify-center w-full">
        <button
          onClick={handleMore}
          className={`inline-flex gap-2 h-12 text-sm lg:text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 lg:px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${!showButton ? 'hidden' : 'block'}`}
        >
          <IoIosMore /> More
        </button>
      </a>

    </>

  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  liveLink,
  technology,
  sourceCode,
  projectId,
  features,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  liveLink?: string;
  projectId?: string;
  technology?: React.ReactNode[];
  sourceCode?: string;
  features?: string[];
}) => {

  const [iframe, setIframe] = useState("")

  const handleViewProjectClick = (projectIds: string, liveLinks: string) => {
    setIframe(liveLinks);
    const modalElement = document.getElementById(`my_modal_2/${projectIds}`) as HTMLDialogElement;

    if (modalElement && typeof modalElement.showModal === 'function') {
      modalElement.showModal();
    } else {
      console.error('Modal element or showModal method not found');
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25}}
      className={cn(
        "row-span-1  bg-black rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 d border-white/[0.2] border justify-between flex flex-col space-y-3",
        className
      )}
    >
      <div>
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-3 font-">
        <div className="font-sans font-bold text-sm flex flex-wrap items-center gap-2">
          {
            features?.map((feature, index) => (
              <button key={index} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-md p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-md bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>
                    {feature}
                  </span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            ))
          }
        </div>
        <div className="font-sans font-bold text-white mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal  text-xs text-white">
          {description}
        </div>
        <div className='flex items-center justify-between mt-7 mb-3 w-full'>
          <div className='flex items-center w-full'>
            {technology?.map((tech, index) => {
              const IconComponent = tech;
              return (
                <div key={index} className='w-full border border-white/[0.2] rounded-full bg-black dark:text-white h-10 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                  {/* <IconComponent  /> */}
                  {IconComponent}
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={liveLink} target="_blank">
            <button className="inline-flex gap-2 text-sm lg:text-base h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 lg:px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaLink /> View Project
            </button>
          </a>
          <a href={sourceCode}>
            <button className="inline-flex gap-2 h-12 text-sm lg:text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2 lg:px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaGithub /> Source Code
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
