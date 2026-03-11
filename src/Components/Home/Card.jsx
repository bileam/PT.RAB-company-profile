import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = ({ logo, title, desc, buttonTitle, aos, delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi
      once: true, // animasi hanya sekali
      offset: 100, // jarak trigger
    });
  }, []);
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      className="py-2 px-4 flex-1   shadow-2xl group  rounded-md flex flex-col  gap-5 md:gap-2"
    >
      <img src={logo} alt={logo} className="w-15 h-15  " />
      <div className="flex flex-col">
        <h1 className="text-rab-navy font-bold">{title}</h1>
        <p className="text-[0.9rem]">{desc}</p>
        <div className="">
          <button className="font-bold text-sm  mt-2 text-rab-green cursor-pointer  overflow-hidden  flex flex-col transition duration-500 hover:brightness-110">
            {buttonTitle} {"->"}
            <span className=" h-0.5 bg-rab-neon -translate-x-full group-hover:translate-x-0 w-[85%] transition-transform duration-500"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
