import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div className="max-w-7xl mx-auto min-[500px]:px-6 px-3 text-white">
        <Hero />
        <Project />
        <div className="mt-20 max-w-6xl mx-auto">
          <About />
          <div className="flex flex-col md:flex-row justify-between mt-10 gap-6 mb-10">
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
