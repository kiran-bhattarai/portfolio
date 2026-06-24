import Section from "./Section";
import { PORTFOLIO_DATA } from "@/data/portfolio.ts";

function Contact() {
  const { socials } = PORTFOLIO_DATA;

  return (
    <Section id={"contact"} text={"Contact"}>
      <div className="text-sm">
        <p className="mb-6">
          I'm currently available for freelance projects, collaborations and
          internships. 
          <br/>
          Let's build something amazing together.
        </p>

        <div className="flex flex-col gap-5">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.link} className="flex">
                <a
                  href={s.link}
                  target="_blank"
                  className="flex gap-3 items-end hover:underline hover:text-white group duration-200"
                  rel="noopener noreferrer"
                >
                  <div className="h-7 w-7 flex items-center justify-center">
                    <Icon />
                  </div>
                  {s.link
                    .replace("https://", "")
                    .replace("www.", "")
                    .replace("mailto:", "")}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default Contact;
