function Navbar() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        const offset = 55;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
        });
    };

    return (
        <div className="w-screen fixed top-0 z-10 bg-black shadow-[0px_0px_1px_1px] shadow-[#b1b1b131] flex justify-center items-center">
            <div className="max-w-300 justify-self-center w-300 items-center flex justify-between py-1 2xl:py-2 px-10">
                <a href="" className="hover:scale-110 duration-300">
                    <span className="font-poppins text-bold text-[26px] font-medium  text-black tracking-tighter bg-[#4efa96d3] px-2 rounded-lg">KB</span>
                </a>
                <div className="font-poppins text-[22px] font-medium flex gap-8 leading-10 text-white relative">
                    <button onClick={() => scrollToSection("about")}
                        className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400 hover:-translate-y-0.75">About</button>
                    <button onClick={() => scrollToSection("skills")}
                        className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400 hover:-translate-y-0.75">Skills</button>
                    <button onClick={() => scrollToSection("projects")}
                        className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400 hover:-translate-y-0.75">Projects</button>
                    <a href="../assets/CV.pdf" download="CV_KiranBhattarai" className="bg-[#1179514f] border border-green-700 group hover:bg-[#22574391] hover:border-green-500 self-center transition duration-300 text-green-400 px-5 text-[20px] gap-1 rounded-4xl font-poppins font-medium flex items-center cursor-pointer">
                        <svg className="group-hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00dd44"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" /></svg>
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar