function Tag({ text }) {
  return (
    <span className="w-min py-1 px-3 rounded-2xl text-sm bg-[#041e573f] font-poppins border-sky-600 border">
      {text}
    </span>
  )
}

function ProjectCard({ image, name, date, desc, tags, github }) {
  return (
    <div className="bg-[#020202] rounded-2xl rounded-tl-none rounded-tr-none border border-gray-800 hover:border-gray-700 duration-200">
      <div className="bg-slate-950">
        <img src={image} alt="" className="w-[101%] max-h-70 object-contain" />
      </div>
      <div className="text-white p-5 flex-col flex gap-3">
        <div className="flex justify-between">
          <h1 className="text-3xl font-poppins font-medium">{name}</h1>
          <a href={github} target="_blank">
            <svg className="group-hover:fill-gray-400 hover:scale-110 duration-150" fill="#ffffff" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" /></svg>
          </a>
        </div>
        <span className="font-mono text-neutral-400 text-sm">{date}</span>
        <p className="font-inter text-neutral-200">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((n) =>
            <Tag text={n}></Tag>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard