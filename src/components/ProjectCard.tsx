import Arrow from "@/assets/icons/Arrow";
import type { Project } from "@/types";

interface ProjectCardProps extends Project {
  index: number;
  isFeatured: boolean;
  isSmallScreen: boolean;
}

function ProjectCard({
  index,
  isFeatured,
  isSmallScreen,
  title,
  description,
  image,
  tech,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div
      className={`p-6 border h-full w-full max-w-6xl  border-neutral-800 rounded-md text-white bg-[#0a0a0c] flex ${isFeatured ? "gap-10" : "gap-5"}`}
    >
      <div
        className={`font-mono flex flex-col justify-between ${isFeatured ? "max-w-110" : "max-w-70"} ${isSmallScreen ? "max-w-full" : ""}`}
      >
        <div>
          <span className="text-secondary">
            {`${index + 1}`.padStart(2, "0")}
          </span>
          <h1
            className={`${isFeatured ? "text-4xl my-4" : "text-3xl my-3"} tracking-wider whitespace-nowrap`}
          >
            {title}
          </h1>
          {isSmallScreen && (
            <div className="flex items-center my-5">
              <img
                className="border border-neutral-800 rounded-xl max-h-80 w-full h-auto object-contain"
                src={image}
                alt={`${title} image`}
              />
            </div>
          )}
          <p className={`text-neutral-400 mb-6 ${!isFeatured && "text-sm"} `}>
            {description}
          </p>

          <div className="uppercase flex flex-wrap gap-2 text-sm tracking-wider text-neutral-100">
            {tech.map((i) => (
              <span
                key={i}
                className="px-4 py-1 bg-[#1b1b1b] hover:text-secondary cursor-default hover:bg-[#2c2c2c] transition duration-200"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        {(githubLink || liveLink) && (
          <div
            className={`${isFeatured ? "text-xl mt-10" : "text-md mt-4"} uppercase flex gap-6 whitespace-nowrap`}
          >
            {liveLink && (
              <a
                className="flex gap-2 border-b-2 border-secondary hover:brightness-70 transition duration-200"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <Arrow className={!isFeatured ? "w-6 h-7" : ""} />
              </a>
            )}
            {githubLink && (
              <a
                className="flex gap-2 border-b-2 border-secondary hover:brightness-70 transition duration-200"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub 
                <Arrow className={!isFeatured ? "w-6 h-7 -translate-y-px" : ""} />
              </a>
            )}
          </div>
        )}
      </div>

      {!isSmallScreen && (
        <div className="flex items-center">
          <img
            className="border border-neutral-800 rounded-xl max-h-80 w-full h-auto object-cover"
            src={image}
            alt={`${title} image`}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
