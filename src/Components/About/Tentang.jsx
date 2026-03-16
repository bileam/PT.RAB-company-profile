import Gambar from "../../assets/image/home.jpg";
import Button from "../ButtonKatalok";
import Title from "../Title";
import VisiMisi from "./VisiMisi";
const Tentang = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <Title aos="fade-up" delay={400}>
          Tentang Perusahaan
        </Title>
      </div>

      <div className="flex justify-between md:flex-row flex-col md:gap-10 gap-2">
        <img
          data-aos="fade-up"
          data-aos-delay="600"
          src={Gambar}
          alt="gambar.jpg"
          className="md:order-2  order-1 md:w-full w-[80%]  h-50  md:h-50 lg:h-80 shadow rounded-lg object-cover"
        />
        <div data-aos="fade-up" className="md:order-1 order-2 w-full md:mt-6">
          <h2 className="tx-navy block  font-bold mt-2 mb-2">
            PT. Renol Anugrah Bersama
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-wrap mt-2 md:mt-0  md:text-justify text-[0.8rem] md:text-[0.9rem] tx-light"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            aperiam, dolores quas voluptatem eos hic, enim rerum aspernatur
            voluptate harum at expedita nulla? Repellendus aperiam optio
            reprehenderit, ducimus ratione saepe?
          </p>
          <VisiMisi />
          <Button aos="fade-up" delay={1000} className="mt-2 md:mt-4 ">
            Lihat katalog
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
