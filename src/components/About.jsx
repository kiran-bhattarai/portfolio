import { TypeAnimation } from "react-type-animation"
import Social from "./Social"
import { motion } from "framer-motion"

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
    <div id="about" className="text-white text-2xl flex font-poppins font-medium pt-14.5 sm:pt-[clamp(48px,12vh,70px)] flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/2 backdrop-blur-sm rounded-4xl py-10 px-5 md:px-10 xl:px-20 w-[99%]">
        <div className="text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}

            className="text-[clamp(62px,15vmin,112px)] ">

            <p className="tracking-tighter text-neutral-300 text-3xl -translate-y-2">Hi, I'm </p>
            <h1 className="tracking-tight  font-semibold bg-linear-to-r sm:leading-24 leading-16 from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text inline-block">Kiran Bhattarai</h1>
            <div className="py-6 pb-10 pl-0 font-inter text-[clamp(24px,4vmin,36px)] text-neutral-300">
              <TypeAnimation sequence={texts} wrapper="span" speed={40} repeat={Infinity}></TypeAnimation>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}

            className="text-[clamp(14px,3vmin,20px)] font-light text-neutral-400">
            I’m a self-taught MERN developer focused on building real-world projects and continuously improving my problem-solving skills. I enjoy breaking complex systems down, rebuilding them with cleaner structure, and understanding how things work under the hood. I value clean architecture, thoughtful UI design, and steady progress. Every project I build is another step toward mastering my craft and pushing my limits further.</motion.p>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}

          className="mt-10 w-min justify-self-center">
          <Social></Social>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About