import ProjectCard from "./ProjectCard"
import LogBookImg from "../assets/Projects/LogBook.png"
import TicTacToeImg from "../assets/Projects/TicTacToeGUI.png"
import PasswordGenImg from "../assets/Projects/PasswordGenerator.png"
import SectionDivider from "./SectionDivider"

const projectList = [
  {
    image: LogBookImg,
    date: "Jan 2026",
    name: "LogBook",
    desc: "A full-stack MERN note-taking application featuring secure JWT authentication with refresh token rotation, role-based access control, public and private notes, and advanced search and sorting functionality.",
    tags: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    github: "https://github.com/kiran-bhattarai/LogBook",
  },

  {
    image: PasswordGenImg,
    date: "Dec 2025",
    name: "Password Generator",
    desc: "An interactive web-based password generator that creates secure random passwords with customizable length and character options, featuring clipboard copy and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/kiran-bhattarai/secure-password-generator",
  },

  {
    image: TicTacToeImg,
    date: "Nov 2025",
    name: "TicTacToe GUI",
    desc: "A desktop TicTacToe game built with Python and CustomTkinter (CTk), featuring Player vs Player and Player vs Bot modes, win detection, scoreboard tracking, and responsive UI scaling across screen sizes.",
    tags: ["Python", "CustomTkinter"],
    github: "https://github.com/kiran-bhattarai/tictactoe-gui",
  }
];

function Projects() {

  return (
    <div id="projects" className="pt-6 text-white ">
      <div className="relative bg-white/2 backdrop-blur-sm rounded-4xl px-10 py-10">
        <SectionDivider />
        <h2 className="text-5xl font-bold tracking-wide text-white text-center mb-6">
          <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="gap-4 columns-1 sm:columns-1 lg:columns-2 xl:columns-3 2xl:columns-3 justify-self-center">
          {projectList.map((p) =>
            <div key={p.name} className="break-inside-avoid mb-4">
              <ProjectCard {...p} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects