import Header from "./components/Header";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa6";
import { TechnologyStack } from "./components/TechnologyStack";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Projects2 } from "./components/Projects2";
import { MyWorkingProcess } from "./components/MyWorkingProcess";
import { ContactMe } from "./components/ContactMe";
export default function Home() {
  return (
    <div className="h-auto max-w-[1550px] w-full mx-auto dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="space-y-48 mt-24">
        <Header />
        <TechnologyStack />
        <Education />
        <MyWorkingProcess />
        <Projects />
        <ContactMe />
        <div className="h-96 w-full">

        </div>
      </div>
    </div>
  );
}
