import { useState } from "react";
import homeImg from "../../assets/image/home.jpg";
import testhouse from "../../assets/image/testhouse.jpg";


const images = [
  homeImg,
  testhouse,
  // nanti tambah gambar baru di sini
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={images[current]}
        alt={`banner-${current}`}
        className="w-full h-[500px] object-cover"
      />

      {/* Tombol Prev */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-4 py-2 rounded-full"
      >
        ‹
      </button>

      {/* Tombol Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-3xl px-4 py-2 rounded-full"
      >
        ›
      </button>

      {/* Dot Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;