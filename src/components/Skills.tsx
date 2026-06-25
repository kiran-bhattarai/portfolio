import Section from "./Section";
import { PORTFOLIO_DATA } from "@/data/portfolio.ts";

function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <Section id={"skills"} text={"Skills & tools"}>
      {Object.entries(skills).map(([category, techArr]: [string, string[]]) => (
        <div className="font-mono text-white mb-2 border-b border-b-neutral-900 tex">
          <span className="uppercase">{category}</span>
          <div className="flex gap-x-6 gap-y-1 text-sm mt-1 mb-1 flex-wrap text-neutral-400 ml-1">
            {techArr.map((t) => (
              <span className="hover:text-secondary cursor-default transition duration-200">{t}</span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Skills;
