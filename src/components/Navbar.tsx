import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useEffect } from "react";

function Navbar() {
  const { navLinks, socials } = PORTFOLIO_DATA;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 70;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
    });

    element.classList.add("custom-blink-effect");

    setTimeout(() => {
      element.classList.remove("custom-blink-effect");
    }, 1000);
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <nav className="border-b border-neutral-800 flex justify-center sticky top-0 bg-black z-10">
      <div className="h-15 text-white flex min-[620px]:justify-between justify-center items-center min-[490px]:px-5 px-2 max-w-7xl grow">
        <div className="font-mono min-[430px]:gap-3 gap-1 flex uppercase text-sm tracking-wide w-full justify-baseline max-[620px]:justify-between">
          <span className="mr-3">
            <span className="text-secondary text-4xl absolute min-[430px]:py-2 py-1 min-[430px]:mr-0 mr-0 -translate-y-5">
              .
            </span>
          </span>

          {navLinks.map((e) => (
            <span
              key={e}
              className="hover:text-secondary cursor-pointer min-[430px]:px-4 min-[430px]:py-2 px-2 py-1  hover:bg-neutral-800 transition-all duration-200"
              onClick={() => scrollToSection(e)}
            >
              {e}
            </span>
          ))}
        </div>

        <div className="min-[620px]:flex gap-8 hidden">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <span key={s.link}>
                <a
                  href={s.link}
                  target="_blank"
                  className="group"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
