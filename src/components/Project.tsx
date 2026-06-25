import ProjectCard from "./ProjectCard";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import useMediaQuery from "../hooks/useMediaQuery";

function Project() {
  const { projects } = PORTFOLIO_DATA;

  const isLargeScreen = useMediaQuery("(min-width: 1040px)");
  const isMidScreen = useMediaQuery("(min-width: 820px)");
  const isSmallScreen = useMediaQuery("(max-width: 550px)");
  

  return (
    <div id="projects" className="max-w-6xl justify-self-center">
      <div className="flex justify-between font-mono sm:mb-4 mb-2 mx-1 uppercase items-center whitespace-nowrap">
        <span className="text-base sm:text-xl tracking-widest">Selected Projects</span>
        <span className="border-b border-b-neutral-800 grow mx-3"></span>
        <span className="text-neutral-400 sm:text-base text-xs">
          {`${projects.length}`.padStart(2, "0")} / Projects
        </span>
      </div>
      <div className="grid grid-cols-1 min-[820px]:grid-cols-2 gap-5 max-w-7xl bg-black text-white">
        {projects.map((p, index) => {
          const isFeatured = isLargeScreen
            ? index === 0
            : isMidScreen
              ? true
              : false;

          return (
            <div
              key={p.title}
              className={`flex min-h-80 items-center justify-center transition-all
              ${isFeatured ? "min-[820px]:col-span-2 flex-row gap-8" : "flex-col gap-4"}
            `}
            >
              {
                <ProjectCard
                  key={index}
                  index={index}
                  isFeatured={isFeatured}
                  isSmallScreen={isSmallScreen}
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  tech={p.tech}
                  liveLink={p.liveLink}
                  githubLink={p.githubLink}
                />
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
