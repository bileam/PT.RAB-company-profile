import gambar from "../assets/image/home.jpg";
const Hubungi = () => {
  return (
    <div className="relative md:h-100 h-50 overflow-hidden p">
      <img src={gambar} alt="" className=" w-full object-cover" />
      <div className="absolute inset-0 bg-black/80 dark:bg-black/90 transition-colors duration-300 "></div>
      <div className="pt-10 pb-5 section-container transition-colors duration-300 absolute top-0 flex flex-col justify-center items-center inset-0">
        <div className="w-full">
          <h1 className="text-start font-bold text-rab-light dark:text-rab-neon  transition-colors duration-300">
            Percayakan Setiap Project anda Kepada kami
          </h1>
        </div>
        <div className="flex justify-start">
          <p className=" text-wrap text-[0.7rem] md:w-[70%] md:text-[0.9rem] text-rab-light  transition-colors duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            repellat assumenda numquam beatae illo incidunt. At nobis iure
            temporibus soluta culpa recusandae. Rerum velit asperiores placeat
            voluptatibus nobis expedita culpa.
          </p>
        </div>
        <div className="w-full flex justify-start">
          <a
            href=""
            className="py-1  px-4 md:p-2 Button-navy  rounded-md mt-2 text-[0.7rem] md:text-[0.9rem] "
          >
            Konsultasi dengan Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hubungi;
