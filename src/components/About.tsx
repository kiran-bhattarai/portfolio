import Section from "./Section.tsx";
import Location from "@/assets/icons/Location.tsx";
import Code from "@/assets/icons/Code.tsx";

function About() {
  return (
    <Section id={"about"} text={"About"}>
      <p className="text-sm">
        I started in Python, scripting game automation bots and coding troll
        files to prank my friends—like changing their wallpapers or playing
        goofy audio. But I was missing a GUI interface for further ideas, I
        tried Tkinter, but I quickly encountered styling and performance limits.
        That frustration pushed me directly into full-stack web development.
        <br />
        <br />
        I’m a perfectionist about the apps I build, pairing sharp user
        interfaces with structured backend logic. I’m still early in my journey
        and don't pretend to know everything, but I’m constantly learning,
        refining and building projects to bridge the gap between where I am and
        what I want to build next.
      </p>
      <div className="flex mt-5 gap-10">
        <div className="flex gap-2 uppercase text-neutral-400">
          <Location />
          <span>Nepal</span>
        </div>
        <div className="flex gap-2 uppercase text-neutral-400">
          <Code />
          <span>Full-Stack</span>
        </div>
      </div>
    </Section>
  );
}

export default About;
