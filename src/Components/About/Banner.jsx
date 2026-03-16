import banner from "../../assets/image/home.jpg";
const Banner = ({ image, children }) => {
  return (
    <div className="h-50 md:h-100 2xl:h-150 banner-diagonal overflow-hidden relative">
      <img src={image} alt="" className="w-full    h-full object-cover " />
      {/* <div className="absolute inset-0 "></div> */}
      <div className=" absolute flex items-center   inset-0 bg-black/50">
        <h1
          data-aos="fade-up"
          className=" font-heading text-4xl md:text-5xl xl:text-6xl transition-colors duration-700 2xl:text-7xl text-rab-light dark:text-rab-neon font-bold leading-tight flex flex-wrap items-center gap-2  text-rab-light px-2 md:px-4 container mx-auto"
        >
          {children}
        </h1>
      </div>
    </div>
  );
};
export default Banner;
