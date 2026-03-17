import gambar from "../assets/image/home.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import RotatingText from "./Animation/RotatingText";
const Banner = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // durasi animasi
  //     once: true, // animasi hanya sekali
  //     offset: 100, // jarak trigger
  //   });
  // }, []);
  return (
    <section className="bg-rab-light   relative">
      {/* Menggunakan font heading dan warna dark */}
      <div>
        <img src={gambar} alt="" className="w-full h-screen object-cover" />
      </div>
      <div className="absolute top-0 bg-rab-dark/40 dark:bg-rab-dark/70  transition-colors duration-300  shadow-5xl  inset-0 flex flex-col  justify-center ">
        <div className=" section-container">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-heading text-4xl md:text-5xl xl:text-6xl transition-colors duration-700 2xl:text-7xl text-rab-light dark:text-rab-neon font-bold leading-tight flex flex-wrap items-center gap-2"
          >
            Solusi Pembangunan
            <RotatingText
              texts={["Berkualitas", "Kokoh", "Modern", "Elegan", "Terpercaya"]}
              mainClassName="px-2 md:px-3 text-[#adff2f] dark:text-[#1d4e89]  overflow-hidden py-1 md:py-2 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 md:text-lg font-body text-white max-w-2xl"
          >
            PT. Ranol Anugrah Bersama menyediakan bahan-bahan konstruksi dan
            design & build bagunan hunian, waterproofing, flooring ( epoxy &
            Floorhardener), concrite Repair, dan pekerjaan chemical konstruksi
            lainnya.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            // shadow-lg bg-rab-navy
            className="mt-8 px-8 py-3  border-2 shadow-lg border-rab-neon hover:bg-rab-neon hover:text-rab-dark  text-rab-light font-bold cursor-pointer rounded-lg duration-500  transition-all"
          >
            Mulai Konsultasi
          </button>
        </div>

        {/* Menggunakan warna neon sebagai tombol aksen */}
      </div>
    </section>
  );
};
export default Banner;
