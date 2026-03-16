import { useEffect } from "react";
const Card = ({
  logo,
  title,
  desc,
  buttonTitle,
  aos,
  delay,
  className = " ",
}) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      className="py-2 px-4 flex-1   shadow-[0_0_20px_rgba(0,0,0,0.15)] group  rounded-md flex flex-col  gap-5 md:gap-2"
    >
      <img src={logo} alt={logo} className="w-15 h-15  " />
      <div className="flex flex-col">
        <h1 className=" rab-title font-bold">{title}</h1>
        <p className="text-[0.9rem] rab-p">{desc}</p>
        <div>
          <button
            className={`font-bold  text-sm rab-button ${className}   mt-2  cursor-pointer  overflow-hidden  flex flex-col hover:brightness-110`}
          >
            {buttonTitle} {"->"}
            <span className=" h-0.5 rab-button-row   -translate-x-full group-hover:translate-x-0 w-[85%] "></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
