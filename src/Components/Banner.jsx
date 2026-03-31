import gambar from "../assets/image/home.jpg";
import { useEffect, useRef } from "react";
import RotatingText from "./Animation/RotatingText";

const Banner = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    // Lightweight CSS-based entrance animation tanpa AOS
    const elements = [overlayRef, headingRef, paraRef, btnRef];
    elements.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(30px)";
        ref.current.style.transition = `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`;

        // Trigger animation setelah mount
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (ref.current) {
              ref.current.style.opacity = "1";
              ref.current.style.transform = "translateY(0)";
            }
          });
        });
      }
    });
  }, []);

  return (
    <section className="bg-rab-light relative w-full">
      {/* Gambar background — cover penuh tanpa terpotong paksa */}
      <div className="w-full h-[60vh] sm:h-[75vh] md:h-screen">
        <img
          src={gambar}
          alt="Banner PT. Ranol Anugrah Bersama"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay gradient — lebih kaya dari solid color */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex flex-col justify-center
          bg-gradient-to-br from-rab-dark/70 via-rab-dark/50 to-transparent
          dark:from-rab-dark/85 dark:via-rab-dark/65 dark:to-rab-dark/30
          transition-colors duration-300"
      >
        <div className="section-container px-4 sm:px-8">

          {/* Tagline kecil di atas heading */}
          <p
            ref={paraRef}
            className="mb-3 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.25em] uppercase
              text-rab-neon font-semibold font-body"
          >
            PT. Ranol Anugrah Bersama
          </p>

          {/* Heading utama */}
          <h1
            ref={headingRef}
            className="font-heading font-bold leading-tight
              text-2xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl
              text-rab-light dark:text-rab-neon
              flex flex-wrap items-center gap-x-3 gap-y-1
              transition-colors duration-700"
          >
            Solusi Pembangunan
            <RotatingText
              texts={["Berkualitas", "Kokoh", "Modern", "Elegan", "Terpercaya"]}
              mainClassName="px-2 md:px-3 text-[#adff2f] dark:text-[#1d4e89]
                overflow-hidden py-1 md:py-2 rounded-lg"
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

          {/* Deskripsi */}
          <p
            className="mt-4 md:mt-6 max-w-xl font-body leading-relaxed
              text-[0.8rem] sm:text-sm md:text-base
              text-white/90"
          >
            PT. Ranol Anugrah Bersama menyediakan bahan-bahan konstruksi dan
            design &amp; build bangunan hunian, waterproofing, flooring (epoxy
            &amp; Floorhardener), concrete Repair, dan pekerjaan chemical
            konstruksi lainnya.
          </p>

          {/* CTA Button */}
          <div ref={btnRef} className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3
                border-2 border-rab-neon
                text-rab-light font-bold font-body text-sm sm:text-base
                rounded-lg cursor-pointer
                hover:bg-rab-neon hover:text-rab-dark
                active:scale-95
                shadow-lg shadow-rab-neon/20
                transition-all duration-300"
            >
              Mulai Konsultasi
            </button>

            <button
              className="px-6 sm:px-8 py-2.5 sm:py-3
                text-white/80 font-body text-sm sm:text-base
                rounded-lg cursor-pointer
                hover:text-white underline underline-offset-4
                transition-all duration-300"
            >
              Lihat Portofolio →
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-10 md:mt-16 flex items-center gap-2 text-white/50 text-xs font-body">
            <span className="inline-block w-6 h-[1px] bg-white/40" />
            Scroll untuk melihat lebih
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;