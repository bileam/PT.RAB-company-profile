import { useState } from "react";
import Banner from "../Components/About/Banner";
import banner from "../assets/image/home.jpg";
import Button from "../Components/Portofolio/Button";
import { projects } from "../Data/projects";
import CardPorto from "../Components/Portofolio/CardPorto";
import { Helmet } from "react-helmet-async";
import Modal from "../Components/Portofolio/Modal";
const NewPorto = () => {
  const [active, setActive] = useState("Semua");
  const [modal, setmodal] = useState(false);
  const filterkategori =
    active === "Semua"
      ? projects
      : projects.filter((item) => item.kategori === active);
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
      <Banner image={banner}>PORTOFOLIO</Banner>
      <div className="section-container flex flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Portofolio</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="grid grid-cols-2 md:grid-cols-6 gap-2"
        >
          <Button
            active={active === "Semua"}
            onClick={() => {
              setActive("Semua");
              //   setCurrentPage(1);
            }}
          >
            Semua Project
          </Button>
          <Button
            active={active === "Rumah"}
            onClick={() => {
              setActive("Rumah");
              //   setCurrentPage(1);
            }}
          >
            Desain Rumah
          </Button>

          <Button
            active={active === "Interior"}
            onClick={() => {
              setActive("Interior");
              //   setCurrentPage(1);
            }}
          >
            Renovasi
          </Button>
          <Button
            active={active === "Waterprooping"}
            onClick={() => {
              setActive("Waterprooping");
              //   setCurrentPage(1);
            }}
          >
            Waterprooping
          </Button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="800"
          className="
          grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-4
        "
        >
          {filterkategori.map((item, index) => (
            <CardPorto
              key={item.id}
              item={item}
              index={index}
              onClick={() => setmodal(true)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={modal} onCloce={() => setmodal(false)} />
    </div>
  );
};
export default NewPorto;
