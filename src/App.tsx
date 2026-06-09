import { Routes, Route } from "react-router-dom";
import ProgressBar from "@/components/ProgressBar";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import AllProjects from "@/pages/AllProjects";

function MainPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-dark text-white overflow-x-hidden">
      {/* Global smoke background — fixed so it covers the entire site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SmokeBackground smokeColor="#8B1A00" />
      </div>
      <ProgressBar />
      <Cursor />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}
