import Image from "next/image";
import Header from "./components/Header";
import { TypewriterEffect } from "./components/ui/TypeWriter";
import { Profile } from "./components/Profile";
import { FlipWords } from "./components/ui/FlipWords";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  const words = ["Full Stack Web Developer", "MERN Stack Developer"];
  return (
    <div className="h-[50rem] max-w-[1550px] w-full mx-auto dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center flex justify-between items-center w-full">
        <div className="flex-1 w-full flex items-center gap-12 justify-center">
          <div>
            <TypewriterEffect className="text-left" words={[
              { text: "Hi", className: "text-purple" },
              { text: ",", className: "text-purple" },
              { text: "I", className: "text-purple" },
              { text: "'", className: "text-purple" },
              { text: "m", className: "text-purple" },
              { text: " ", className: "text-purple" },
              { text: "Md.", className: "text-purple" },
              { text: "Mamun", className: "text-purple" },
            ]}
            />
            <div className="text-left mt-4">
              I&apos;m a
              <FlipWords words={words} /> <br />
              <p className="text-justify max-w-2xl  mt-4">Highly motivated Junior Software Developer skilled in HTML, CSS, JavaScript, DOM manipulation, OOP, ES6, React, and Tailwind CSS, with proficiency in Firebase, Next.js, Axios, Node.js, Vite, MongoDB, Express, and more. Seeking an entry-level position to enhance skills and contribute to impactful software projects.</p>
            </div>
            <div className="flex flex-col items-start justify-start mt-4">
              <a href="MyResume.pdf" download={true}>
                <button className="inline-flex gap-2 items-center h-12 animate-shimmer justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  Download My CV <FaDownload />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <Profile />
        </div>
      </div>
    </div>
  );
}
