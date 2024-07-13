import Image from "next/image";
import Header from "./components/Header";
import { TypewriterEffect } from "./components/ui/TypeWriter";
import { Profile } from "./components/Profile";
import { FlipWords } from "./components/ui/FlipWords";
import { FaDownload } from "react-icons/fa";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa6";
import { AnimatedTooltip } from "./components/ui/Tooltip";

export default function Home() {
  return (
    <div className="h-[50rem] max-w-[1550px] w-full mx-auto dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Header/>
    </div>
  );
}
