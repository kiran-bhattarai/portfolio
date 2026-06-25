function Footer() {
    
  return (
    <footer className="text-neutral-500 font-mono py-5 flex border-t justify-center border-t-neutral-800 text-xs sm:text-sm px-4">
      <div className="max-w-6xl min-[700px]:w-full flex min-[700px]:justify-between min-[700px]:flex-row flex-col text-center whitespace-nowrap ">
        <span>
          &copy; {new Date().getFullYear()} Kiran Bhattarai. All rights
          reserved.
        </span>
        <span>
            Building • Learning • Sharing
        </span>
      </div>
    </footer>
  );
}

export default Footer;
