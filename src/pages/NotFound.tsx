function NotFound() {

  return (
    <div className="text-white font-mono flex flex-col justify-center items-center min-h-screen">
        <span className="text-5xl text-secondary">¯\_(ツ)_/¯</span>
        <span className="mt-10 ">404</span>
        <p>This page could not be found.</p>
        <a href="/" className="underline hover:text-secondary/65 text-sm transition duration-200 text-secondary/90 mt-4">Go back</a>
    </div>
  )
}

export default NotFound