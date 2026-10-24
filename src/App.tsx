import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

/** Scrolls to `#section` hashes (also when arriving from another route) and to the top on page changes. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      // "instant" overrides the html's scroll-smooth so a new page doesn't glide up from the bottom.
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    // Wait a frame so a freshly mounted page has rendered its sections.
    const id = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash, key]);

  return null;
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
      <ScrollManager />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}
