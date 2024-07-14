import { cn } from "@/lib/utils";
import { FaLink, FaVoicemail } from "react-icons/fa";
import { StickyScroll } from "./StickyScrool";
import { DiJavascript } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiAntdesign, SiDaisyui, SiExpress, SiJsonwebtokens, SiMongodb, SiNetlify, SiVite } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  liveLink?: string;
  technology?: [];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-4">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
        <div className="flex gap-2 flex-wrap">
          {
            technology?.map((tech, idx) => {
              const IconComponent = tech;
              return (
                <div key={idx}>
                  <IconComponent className="text-lg" />
                </div>
              )
            })
          }
        </div>
        <div className="flex items-center gap-2">
          <a href={liveLink}>
            <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaLink /> View Project
            </button>
          </a>
          <a href={liveLink}>
            <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <FaGithub /> Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
