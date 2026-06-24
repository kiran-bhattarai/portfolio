import GitHubIcon from "@/assets/icons/Github";
import LinkedInIcon from "@/assets/icons/Linkedin";
import MailIcon from "@/assets/icons/Mail";

const currentAge = Math.floor(
  (new Date().getTime() - new Date("2006-11-09").getTime()) /
    (365.25 * 24 * 60 * 60 * 1000),
);

export const PORTFOLIO_DATA = {
  profile: {
    fname: "Kiran",
    lname: "Bhattarai",
    title: "Full Stack Developer",
    bio: `${currentAge}-year old developer from Nepal. I build web applications, focus on robust backend systems, and clean data architecture.`,
    info: "Currently exploring system design, clean interfaces and scalability.",
    tags: ["MERN Stack", "Backend Focused", "Auth & Security"],
  },

  navLinks: ["projects", "about", "skills", "contact"],

  socials: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/kiran-bhattarai",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/-kiran-bhattarai",
    },
    {
      name: "Mail",
      icon: MailIcon,
      link: "mailto:official.kiranbhattarai@gmail.com",
    },
  ],

  projects: [
    {
      title: "logBook",
      description:
        "A full-stack MERN note-taking application featuring secure JWT authentication with refresh token rotation, role-based access control, public and private notes, and advanced search and sorting functionality.",
      tech: ["React", "Node.js", "Mongodb", "Express", "Tailwindcss"],
      image: "/projects/LogBook.png",
      githubLink: "https://github.com/kiran-bhattarai/logbook",
      liveLink: "https://logbook-mauve.vercel.app/"
    },
    {
      title: "Password Generator",
      description:
        "A customizable password generator featuring secure random generation, real-time length adjustments, and one-click clipboard copying.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/projects/PasswordGenerator.png",
      githubLink:
        "https://github.com/kiran-bhattarai/secure-password-generator",
    },
    {
      title: "TicTacToe GUI",
      description:
        "A desktop TicTacToe game built with Python and CustomTkinter, featuring local multiplayer, an AI bot mode, win detection, and live scoreboard tracking.",
      tech: ["Python"],
      image: "/projects/TicTacToeGUI.png",
      githubLink: "https://github.com/kiran-bhattarai/tictactoe-gui",
    },
  ],

  skills: {
    frontend: ["React", "Tailwind CSS", "TanStack Query", "Axios"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT Auth"],
    languages: ["JavaScript", "TypeScript"],
    tools: ["Git", "GitHub", "Vercel", "Railway"],
  },
  
};
