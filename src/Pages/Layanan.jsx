import Banner from "../Components/About/Banner";
import Proses from "../Components/Layanan/ProsesKerja";
import Service from "../Components/Layanan/Services";
import logo from "../assets/image/home.jpg";

const Layanan = () => {
  return (
    <div className="md:mt-4">
      <Banner image={logo}>Layanan Kami</Banner>
      <div className="section-container flex flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block h-10 overflow-hidden  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Layanan kami</span>
        </h1>
        <Service />
        {/* <Proses /> */}
      </div>
    </div>
  );
};

export default Layanan;
