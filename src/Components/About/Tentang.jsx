import Gambar from "../../assets/image/home.jpg";
import Button from "../ButtonKatalok";
import Title from "../Title";
import RvVisiMisi from "./RvVisiMisi";
import VisiMisi from "./VisiMisi";
const Tentang = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <Title aos="fade-up" delay={400}>
          Tentang Kami
        </Title>
      </div>

      <div className="flex justify-between md:items-center md:flex-row flex-col md:gap-10 gap-2">
        <img
          // data-aos="fade-up"
          // data-aos-delay="600"
          src={Gambar}
          alt="gambar.jpg"
          className="md:order-2  order-1 md:w-full   h-50  md:h-50 lg:h-80 shadow rounded-lg object-cover"
        />
        <div data-aos="fade-up" className="md:order-1 order-2 w-full md:mt-6">
          <h1 className="tx-navy block  font-bold mt-2 mb-2">
            PT. Renol Anugrah Bersama
          </h1>
          <p
            // data-aos="fade-up"
            // data-aos-delay="600"
            className="text-wrap mt-2 md:mt-0  md:text-justify text-[0.9rem] md:text-[0.9rem] tx-light"
          >
            <span>PT Renol Anugrah Bersama</span> ada perusahaan terpercaya yang
            bergerak di bidang konstruksi dan suplier material. berdiri dengan
            visi untuk menghadirkan pembangunan yang berkualitas dan menyediakan
            material yang andal. Kami mengedepankan keahlian, ketepatan, serta
            inovasi dalam setiap proyek dan layanan yang kami berikan.
          </p>
          {/* <VisiMisi /> */}

          {/* <Button aos="fade-up" delay={1000} className="mt-2 md:mt-4 ">
            Lihat katalog
          </Button> */}
        </div>
      </div>
      <RvVisiMisi />
    </div>
  );
};

export default Tentang;
