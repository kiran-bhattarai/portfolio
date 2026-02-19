function SkillCard({ imageUrl, name }) {

  return (
    <div className="flex flex-col items-center text-center group p-0.5">
      <div className="bg-[#141418] h-16 w-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl border border-slate-800 mb-1 group-hover:border-slate-600 duration-200">
        <img src={imageUrl} alt="" className="sm:h-14 sm:w-14 w-10 h-10 group-hover:scale-110 duration-200" />
      </div>
      <span className="font-inter text-sm justify-self-center">{name}</span>
    </div>
  )
}

export default SkillCard