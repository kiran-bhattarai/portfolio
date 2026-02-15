import downloadIcon from "../assets/download_icon.svg"

function Navbar() {

    return (
        <div className="w-screen bg-linear-120 from-[#202020] to-neutral-900 shadow-[0px_0px_10px_1px] shadow-[#b1b1b131] flex justify-center items-center">
            <div className="max-w-220 justify-self-center w-220 items-center flex justify-between py-1 px-6">
                <a href="" className="translate-y-0.5">
                    <span className="font-bulletin text-bold text-2xl font-medium text-black tracking-tighter bg-[#4efa96d3] px-2 pl-2.5 pb-0.5 rounded-lg">KB</span>
                </a>
                <div className="font-mododica text-[28px] flex gap-8 leading-10 text-white relative">
                    <a href="#about" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">About</a>
                    <a href="#skills" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Skills</a>
                    <a href="#projects" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Projects</a>
                    <a href="#contact" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Contact</a>
                    <a className="bg-[#246b50] hover:bg-[#1a4e3a] self-center transition duration-300 text-white px-5  text-[20px] gap-1 rounded-4xl font-homevideo flex items-center cursor-pointer">
                        <img src={downloadIcon} className="h-[full]" />
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar