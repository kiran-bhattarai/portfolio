import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project.jsx";
import Section from "@/components/Section.jsx";
import About from "@/components/About.jsx";
import Skills from "@/components/Skills.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";
import Grain from "@/components/Grain.jsx";
import CursorGlow from "@/components/CursorGlow.jsx";

function Layout() {
  return (
    <>
      <Grain />
      <CursorGlow></CursorGlow>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto min-[500px]:px-6 px-3 text-white">
        <Hero></Hero>
        <Project />
        <div className="mt-20 max-w-6xl mx-auto">
          <About></About>
          <div className="flex flex-col md:flex-row justify-between mt-10 gap-6 mb-10">
            <Skills></Skills>
            <Contact></Contact>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Layout;
