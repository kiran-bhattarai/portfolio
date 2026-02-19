import SkillCard from "./SkillCard"
import SectionDivider from "./SectionDivider"

function Skills() {

  return (
    <div id="skills" className="text-white pt-6 items-center flex flex-col">
      <div className="relative py-10 px-10 bg-white/2 backdrop-blur-sm rounded-4xl w-[99%] max-w-7xl">
        <SectionDivider />
        <h2 className="text-5xl font-bold tracking-wide text-white text-center ">
          <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Skills & Tools
          </span>
        </h2>
        <div className="max-w-240 flex flex-wrap justify-self-center sm:gap-x-10 sm:gap-y-6 gap-x-5 gap-y-3 justify-center pt-8 ">
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} name={"HTML"} />
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} name={"CSS"} />
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} name={"Javascript"} />
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} name={"React"} />
          <SkillCard imageUrl={"https://cdn.simpleicons.org/tailwindcss/06B6D4"} name={"Tailwindcss"} />
          <SkillCard imageUrl={"https://cdn.simpleicons.org/nodedotjs/339933"} name={"NodeJS"} />
          <SkillCard imageUrl={"https://skillicons.dev/icons?i=express"} name={"Express"} />
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} name={"MongoDB"} />
          <SkillCard imageUrl={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} name={"Git"} />
        </div>
      </div>
    </div>
  )
}

export default Skills