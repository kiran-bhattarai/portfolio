const Arrow = ({className = ""}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    fill="currentColor"
    className={`text-white transition-colors duration-200 hover:text-white cursor-pointer ${className ? className : "w-7 h-7"}`}
  >
    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
  </svg>
);

export default Arrow;
