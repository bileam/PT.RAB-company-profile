import gambar from "../assets/image/home.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi
      once: true, // animasi hanya sekali
      offset: 100, // jarak trigger
    });
  }, []);
  return (
    <section className="bg-rab-light   relative">
      {/* Menggunakan font heading dan warna dark */}
      <div>
        <img src={gambar} alt="" className="w-full h-screen object-cover" />
      </div>
      <div className="absolute top-0 bg-rab-dark/50 shadow-5xl  inset-0 flex flex-col  justify-center ">
        <div className=" section-container">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-heading text-4xl md:text-6xl text-rab-light font-bold leading-tight"
          >
            Solusi Pembangunan <span className="text-rab-neon">Terpercaya</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="mt-4 md:text-lg font-body text-white max-w-2xl"
          >
            PT. Ranol Anugrah Bersama menyediakan alat konstruksi berkualitas
            dan layanan desain renovasi rumah impian.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-8 px-8 py-3 bg-rab-navy text-rab-light font-bold cursor-pointer rounded-lg shadow-lg hover:brightness-110 transition-all"
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
