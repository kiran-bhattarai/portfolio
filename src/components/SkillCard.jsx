function SkillCard({ imageUrl, name }) {

  return (
    <div className="inline-block text-center group">
      <div className="bg-[#141418] p-4 rounded-xl border border-slate-800 mb-1 group-hover:border-slate-600 duration-200">
        <img src={imageUrl} alt="" className="h-14 w-14 group-hover:scale-110 duration-200" />
      </div>
      <span className="font-inter text-sm">{name}</span>
    </div>
  )
}

export default SkillCard