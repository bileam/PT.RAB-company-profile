const CardLayanan = ({ src, children, title }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="600"
      className="relative shadow-[0_0_20px_rgba(0,0,0,0.15)]  rounded-md w-90 overflow-hidden md:w-auto pb-2"
    >
      <img src={src} alt="" className="w-full" />
      <div className="px-2">
        <div className="mt-2">
          <h1 className="tx-rab-navy">{title}</h1>
          <p className="text-[0.8rem] md:text-[0.9rem] text-wrap tx-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            officiis!
          </p>
          <button className="text-[0.8rem] brightness-110 p-2 dark:bg-rab-neon dark:text-rab-navy mt-2 rounded-md bg-rab-navy text-rab-light cursor-pointer transition-colors duration-300">
            Konsultasikan
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardLayanan;
