import { TypeAnimation } from "react-type-animation"
import Social from "./Social"

const texts = [
  "MERN Full-Stack Dev", 2000,
  "Building Scalable Apps", 2000,
  "Clean Architecture", 2000,
  "Turning Ideas Into Code", 2000,
  "Clean Code Enthusiast", 2000,
  "Creative Problem Solver", 2000
]

function About() {

  return (
    <div id="about" className="text-white text-2xl flex font-poppins font-medium pt-[58px] sm:pt-[clamp(52px,12vh,80px)] flex-col items-center justify-center relative">
      <div className="relative bg-white/2 backdrop-blur-sm rounded-4xl py-10 px-5 md:px-10 xl:px-20 w-[99%]">
        <div className="text-center ">
          <div className="text-[clamp(62px,15vmin,112px)] ">
            <p className="tracking-tighter text-neutral-300 text-3xl -translate-y-4">Hi, I'm </p>
            <h1 className="tracking-tight  font-semibold bg-linear-to-r sm:leading-24 leading-16 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block">Kiran Bhattarai</h1>
            <div className="py-6 pb-10 pl-0 font-inter text-[clamp(24px,4vmin,36px)] text-neutral-300">
              <TypeAnimation sequence={texts} wrapper="span" speed={40} repeat={Infinity}></TypeAnimation>
            </div>
          </div>
          <p className="text-[clamp(14px,3vmin,20px)] font-light text-neutral-400">
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