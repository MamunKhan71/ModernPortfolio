import Header from "./components/Header";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaVoicemail } from "react-icons/fa6";
import { TechnologyStack } from "./components/TechnologyStack";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Projects2 } from "./components/Projects2";
import { MyWorkingProcess } from "./components/MyWorkingProcess";
import { ContactMe } from "./components/ContactMe";
import Footer from "./components/Footer";
import { FloatingNav } from "./components/ui/Navbar";
import { navItems } from "@/data";
export default function Home() {
  return (
    <div className="h-auto lg:max-w-[1550px] w-full mx-auto relative flex items-center justify-center p-4">
      <FloatingNav
        navItems={navItems}
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="space-y-12 lg:space-y-48 lg:mt-24">
        <Header />
          <TechnologyStack />
        <Education />
        <MyWorkingProcess />
        <Projects />
        <ContactMe />
        <Footer />
      </div>

    </div>
  );
}
