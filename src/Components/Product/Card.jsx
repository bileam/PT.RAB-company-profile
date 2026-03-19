// import gambar from "../../assets/image/home.jpg";
const Card = ({ name, gambar, desc }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-col gap-2 w-full rounded-md overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.15)]"
    >
      <img src={gambar} alt="" className="object-cover" />
      <div className="flex flex-col  p-2">
        <h1 className="text-h1-navy">{name}</h1>
        <p className="text-[0.7rem] md:text-[0.9rem] text-p-dark">{desc}</p>
        <div className="w-full flex justify-start ">
          <a
            href=""
            className="p-2 md:text-[0.9rem] text-[0.8rem] Button-navy hover:brightness-110   rounded-md mt-2 "
          >
            Konsultasi sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
