import { Helmet } from "react-helmet";
import Banner from "../Components/About/Banner";
import MemiliKami from "../Components/About/MemiliKami";
import Tentang from "../Components/About/Tentang";
import Tim from "../Components/About/Tim";
import banner from "../assets/image/home.jpg";

const About = () => {
  return (
    <div className="md:mt-4">
      <Helmet>
        <title>Jasa Konstraksi & renovasi Rumah terpercaya</title>
        <meta
          name="Description"
          content="Jasa  Pembangungan rumah, Renovasi,Desain, dan waterproofing dengan hasil dan harga terjangkau"
        />
        {/* open graph (biar bagus kalau di share) */}
        <meta property="og:title" content="jasa kontruksi terpercaya" />
        <meta
          property="og:description"
          content="Layanan bangunan, desain dan renovasi rumah prefesional"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Banner image={banner}>Tentang Kami</Banner>
      <div className="section-container flex flex-col gap-2">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Tentang Kami</span>
        </h1>
        <Tentang />
        <Tim />
        <MemiliKami />
      </div>
    </div>
  );
};
export default About;
