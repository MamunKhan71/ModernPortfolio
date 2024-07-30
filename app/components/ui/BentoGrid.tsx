import { cn } from "@/lib/utils";
import { FaGithub, FaLink, FaLocationArrow } from "react-icons/fa";
import { HoverBorderGradient } from "./BorderGradient";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 ",
        className
      )}
    >
      {children}
    </div>
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
  features,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  liveLink?: string;
  technology?: React.ReactNode[];
  sourceCode?: string;
  features?: string[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 d dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-3",
        className
      )}
    >
      <div>
        {header}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-3">
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
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className='flex items-center justify-between mt-7 mb-3'>
          <div className='flex items-center'>
            {technology?.map((tech, index) => {
              const IconComponent = tech;
              return (
                <div key={index} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                  <IconComponent className="text-lg" />
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href={liveLink}>
            <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaLink /> View Project
            </button>
          </a>
          <a href={sourceCode}>
            <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaGithub /> Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
