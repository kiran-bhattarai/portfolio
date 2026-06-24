function Section({text, id, children}) {
  return (
    <div id={id} className="font-mono text-neutral-400">
      <div className="flex items-center">
        <div className="flex flex-col">
          <h3 className="text-white uppercase tracking-widest text-2xl">{text}</h3>
          <span className="border-b-2 border-b-secondary w-8"></span>
        </div>
        <span className="border-b border-b-neutral-800 grow mx-3"></span>
      </div>
      <div className="py-4 mr-5 ">
        {children}
      </div>
    </div>
  );
}

export default Section;
