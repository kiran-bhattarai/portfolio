import { PORTFOLIO_DATA } from "@/data/portfolio";
import gritTexture from "/gritty.avif";

function Hero() {
  const { fname, lname, title, bio, info, tags } = PORTFOLIO_DATA.profile;

  return (
    <div className="py-15 max-[1024px]:w-min w-full h-min justify-self-center flex lg:flex-row items-center flex-col  max-w-6xl px-4 md:px-0 max-[360px]:h-125 max-[360px]:-translate-y-18 max-[360px]:scale-62 max-[390px]:h-135 max-[390px]:-translate-y-17 max-[390px]:scale-68 max-[440px]:h-142 max-[440px]:-translate-y-15 max-[440px]:scale-74 max-[490px]:h-160 max-[490px]:-translate-y-9 max-[490px]:scale-80 max-[490px]:py-4 max-[560px]:scale-90 max-[560px]:py-8  max-[560px]:h-178 max-[560px]:-translate-y-5 max-[600px]:px-0 max-[660px]:scale-100 max-[660px]:py-12  max-[600px]:h-195 max-[600px]:-translate-y-1 max-[1024px]:scale-120 max-[1024px]:py-30  max-[1024px]:h-235 min-[1024px]:justify-between">
      <div className="text-white uppercase font-mono">
        <div
          className="text-9xl tracking-wider leading-26 text-transparent bg-clip-text bg-cover bg-center -translate-x-1"
          style={{
            backgroundImage: `url(${gritTexture})`,
            backgroundColor: "#ffffff",
          }}
        >
          <h1>{fname}</h1>
          <h1>{lname}</h1>
        </div>

        <h2 className="text-2xl tracking-widest uppercase font-mono my-6">
          {title}
          <span className="text-secondary"> _</span>
        </h2>
        <div className="text-neutral-400 tracking-widest flex gap-1 font-extralight whitespace-nowrap">
          {tags.map((t, index) => (
            <div key={index} className="flex gap-1">
              <h3>{t}</h3>
              {index !== tags.length - 1 && (
                <span className="text-secondary text-4xl py-2 -translate-y-7">
                  .
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full py-10 gap-20 justify-between lg:contents">
        <div className="flex flex-col gap-10">
          <p className="text-neutral-300 font-extralight tracking-tight font-mono  w-80">
            {bio}
            <br />
            <br />
            {info}
          </p>
          <div className="flex justify-between">
            <img src="pac2.gif" className="w-45 " alt="" />
            <a
              href="/CV_KiranBhattarai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono border text-lg hover:font-extrabold border-secondary hover:bg-secondary bg-secondary/30 shadow-secondary hover:text-black pt-1.75 px-3 py-1.5 rounded transition-colors"
            >
              VIEW CV
            </a>
          </div>
        </div>

        <div className="text-neutral-500 flex font-mono uppercase gap-5 items-center -translate-y-5">
          <img src="/download.gif" alt="" className="brightness-50 w-8 h-80" />
          <span className="whitespace-nowrap tracking-widest text-sm [writing-mode:vertical-lr] rotate-180 self-center">
            building • learning • sharing
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
