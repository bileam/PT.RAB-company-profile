const Button = ({ children, onClick, className = " ", aos, delay }) => {
  return (
    <div data-aos={aos} data-aos-delay={delay} className={`${className}`}>
      <button
        onClick={onClick}
        className="font-bold text-sm dark:text-rab-neon text-rab-navy transition-colors duration-300   group  cursor-pointer  overflow-hidden  flex flex-col hover:brightness-110"
      >
        {children} {"->"}
        <span className=" h-0.5 rab-button-row   -translate-x-full group-hover:translate-x-0 w-[85%] "></span>
      </button>
    </div>
  );
};
export default Button;
