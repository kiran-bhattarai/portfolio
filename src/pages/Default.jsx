import { Link } from "react-router"

function Default() {

  return (
    <div className="min-h-screen text-white text-center font-poppins overflow-x-hidden">
      <div className="relative max-w-7xl w-full h-screen flex flex-col items-center justify-center justify-self-center">
        <div className="flex flex-col items-center">
          <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div> <div className="absolute bottom-[10%] right-[10%] w-96 h-106 bg-purple-500/15 rounded-full blur-3xl"></div>
          <div className="flex flex-col items-center z-10">
            <h1 className="text-8xl">404</h1>
            <p className="text-3xl">This page doesn't exist</p>
            <span className="pointer-cursor mt-6 hover:scale-110 duration-300 flex bg-linear-60 from-blue-500 to-green-600 p-0.5 rounded-4xl hover:from-green-600 hover:to-blue-700">
              <span className="text-3xl rounded-4xl bg-black px-5 py-1 text-white font-medium">
                <Link to={"/"}>
                  Go Back
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Default