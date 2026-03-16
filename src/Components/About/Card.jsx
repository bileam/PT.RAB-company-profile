const Card = ({ gambar, children, jabatan, delay }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      className="flex flex-col  md:gap-2 md:w-60      rounded-md  "
    >
      <img
        src={gambar}
        alt=""
        className="  object-cover object-center  rounded-md"
      />
      <h1 className="text-[0.9rem] tx-navy md:text-[1rem] font-bold">
        {children}
      </h1>
      <p className=" tx-navy text-[0.8rem] md:text-[1rem]">{jabatan}</p>
    </div>
  );
};

export default Card;
