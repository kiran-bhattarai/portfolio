import { Link } from "react-router"

function Default() {

  return (
    <div className="min-h-screen text-white text-center flex flex-col items-center justify-center font-poppins">
        <h1 className="text-8xl">404</h1>
        <p className="text-3xl">This page doesn't exist</p>
        <Link className="mt-10 text-xl text-purple-800 underline hover:scale-110 duration-300" to={"/"}>Go Back</Link>
    </div>
  )
}

export default Default