import { useState, useEffect, useCallback, useRef } from "react";
import homeImg from "../../assets/image/home.jpg";
import testhouse from "../../assets/image/testhouse.jpg";

const slides = [
  {
    img: homeImg,
    title: "Konstruksi Berkualitas",
    subtitle: "Hunian impian Anda, kami wujudkan dengan material terbaik.",
  },
  {
    img: testhouse,
    title: "Design & Build Modern",
    subtitle: "Dari konsep hingga selesai — satu tim, satu visi.",
  },
  // tambah slide baru di sini
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const autoplayRef = useRef(null);

  const goTo = useCallback(
    (index, dir = "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const prev = () =>
    goTo((current - 1 + slides.length) % slides.length, "prev");
  const next = useCallback(
    () => goTo((current + 1) % slides.length, "next"),
    [current, goTo]
  );

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 5000);
  };

  return (
    <div className="relative w-full overflow-hidden group">
      {/* Slides */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-screen">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-700 ease-in-out
              ${i === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}
            `}
            aria-hidden={i !== current}
          >
            {/* Gambar — cover proporsional tanpa paksa tinggi fixed */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Overlay gradient */}
            <div
              className="absolute inset-0
                bg-gradient-to-t from-black/70 via-black/30 to-transparent
                dark:from-black/80 dark:via-black/40"
            />

            {/* Teks per slide */}
            <div
              className={`absolute inset-0 flex flex-col justify-end pb-16 sm:pb-20
                px-6 sm:px-12 md:px-20
                transition-all duration-700
                ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
            >
              <h2
                className="font-heading font-bold text-white
                  text-xl sm:text-3xl md:text-4xl xl:text-5xl
                  leading-tight drop-shadow-lg"
              >
                {slide.title}
              </h2>
              <p className="mt-2 text-white/80 text-sm sm:text-base md:text-lg font-body max-w-lg">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Prev — muncul saat hover */}
      <button
        onClick={() => {
          prev();
          resetAutoplay();
        }}
        aria-label="Slide sebelumnya"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 sm:w-12 sm:h-12
          flex items-center justify-center
          bg-black/40 hover:bg-rab-neon/80
          text-white hover:text-rab-dark
          text-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition-all duration-300 cursor-pointer
          backdrop-blur-sm"
      >
        ‹
      </button>

      {/* Tombol Next */}
      <button
        onClick={() => {
          next();
          resetAutoplay();
        }}
        aria-label="Slide berikutnya"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20
          w-10 h-10 sm:w-12 sm:h-12
          flex items-center justify-center
          bg-black/40 hover:bg-rab-neon/80
          text-white hover:text-rab-dark
          text-2xl rounded-full
          opacity-0 group-hover:opacity-100
          transition-all duration-300 cursor-pointer
          backdrop-blur-sm"
      >
        ›
      </button>

      {/* Progress bar autoplay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-white/20">
        <div
          key={current} // reset animasi tiap ganti slide
          className="h-full bg-rab-neon animate-progress"
          style={{
            animation: "progress-bar 5s linear forwards",
          }}
        />
      </div>

      {/* Dot Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              goTo(i, i > current ? "next" : "prev");
              resetAutoplay();
            }}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 cursor-pointer
              ${i === current
                ? "w-6 h-2.5 bg-rab-neon"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
          />
        ))}
      </div>

      {/* Nomor slide */}
      <div className="absolute top-5 right-5 z-20 text-white/60 text-xs font-body tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* Keyframe untuk progress bar — tambahkan ini ke global CSS atau index.css kamu */}
      {/* 
        @keyframes progress-bar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      */}
    </div>
  );
};

export default BannerSlider;