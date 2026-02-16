function Navbar() {

    return (
        <div className="w-screen bg-neutral-900 shadow-[0px_0px_1px_1px] shadow-[#b1b1b131] flex justify-center items-center">
            <div className="max-w-260 justify-self-center w-260 items-center flex justify-between py-1 px-6">
                <a href="" className="hover:scale-110 duration-300">
                    <span className="font-poppins text-bold text-[26px] font-medium  text-black tracking-tighter bg-[#4efa96d3] px-2 rounded-lg">KB</span>
                </a>
                <div className="font-poppins text-[22px] font-medium flex gap-8 leading-10 text-white relative">
                    <a href="#about" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">About</a>
                    <a href="#skills" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Skills</a>
                    <a href="#projects" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Projects</a>
                    <a href="#contact" className="hover:text-green-300 border-2 duration-300 ease-in-out border-transparent hover:leading-8 hover:border-b-green-400">Contact</a>
                    <a className="bg-[#1179514f] border border-green-700 group hover:bg-[#22574391] hover:border-green-500 self-center transition duration-300 text-green-400 px-5 text-[20px] gap-1 rounded-4xl font-poppins font-medium flex items-center cursor-pointer">
                        <svg className="group-hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00dd44"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                        CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar