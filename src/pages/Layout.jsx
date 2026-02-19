import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout({ children }) {

    return (
        <div className="min-h-screen flex flex-col overflow-x-clip">
            <Navbar />
            <div className="flex-1 max-w-400 relative self-center w-full py-4 pt-0 flex flex-col mb-20 p-0.5">
                <div className="absoute inset-0 -z-10">
                    <div className="absolute top-[12%] left-[7%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-[65%] left-[18%] w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
                    <div className="absolute top-[30%] right-[12%] w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[8%] right-[5%] w-md h-md bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-[48%] left-[42%] w-[24rem] h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[25%] right-[35%] w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl relative w-full self-center">
                    {children}
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Layout