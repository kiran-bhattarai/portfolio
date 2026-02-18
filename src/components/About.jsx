import { TypeAnimation } from "react-type-animation"
import Social from "./Social"

const texts = ["Full-Stack MERN Developer ", 2000, "Building Scalable Web Applications ", 2000, "Focused on Clean Architecture ", 2000, "Turning Ideas into Real Projects ", 2000, "Obsessed with Clean Code ", 2000, "Problem Solver & System Thinker ", 2000]

function About() {

  return (
    <div id="about" className="text-white text-2xl flex font-poppins font-medium pt-[clamp(52px,12vh,80px)] flex-col items-center justify-center relative">
      <div className="relative bg-white/2 backdrop-blur-sm rounded-4xl py-10 px-10 xl:px-20">
        <div className="text-center ">
          <div className="text-[clamp(96px,13vmin,112px)]">
            <p className="tracking-tighter text-neutral-300 text-3xl -translate-y-4">Hi, I'm </p>
            <h1 className="tracking-tight  font-semibold bg-linear-to-r leading-24 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block">Kiran Bhattarai</h1>
            <div className="py-6 pb-10 pl-0 font-inter text-[clamp(30px,4vmin,36px)] text-neutral-300">
              <TypeAnimation sequence={texts} wrapper="span" speed={30} repeat={Infinity}></TypeAnimation>
            </div>
          </div>
          <p className="text-[clamp(18px,2.6vmin,20px)] font-light text-neutral-400">
            I’m a self-taught MERN developer focused on building real-world projects and continuously improving my problem-solving skills. I enjoy breaking complex systems down, rebuilding them with cleaner structure, and understanding how things work under the hood. I value clean architecture, thoughtful UI design, and steady progress. Every project I build is another step toward mastering my craft and pushing my limits further.</p>
        </div>
        <div className="mt-10 w-min justify-self-center">
          <Social></Social>
        </div>
      </div>
    </div>
  )
}

export default About