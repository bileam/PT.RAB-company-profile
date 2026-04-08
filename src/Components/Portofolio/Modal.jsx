import { useEffect, useState } from "react";
import home from "../../assets/image/home.jpg";
import home2 from "../../assets/image/testhouse.jpg";

const Modal = ({ isOpen, onCloce, data }) => {
  if (!isOpen || !data) return null;

  // const images = [home, home2, home, home2];
  const images = data?.imageAll || [];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    setActiveIndex(0);
  }, [data]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 ">
      <div className="flex animate-zoomIn flex-col p-5 md:max-h-[90%] md:max-w-[80%]  bg-white dark:bg-gray-900 transition-colors duration-500 rounded-md relative">
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onCloce}
            className="w-10 h-10 rounded-full shadow-md bg-rab-navy dark:bg-rab-neon dark:text-black text-white"
          >
            X
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:px-6 ">
          <div className="flex flex-col gap-2 md:max-w-[70%] md:min-w-[70%]  md:h-[90%]">
            <div className="relative overflow-hidden rounded-md">
              <div className="w-full bg-black/10 flex items-center justify-center rounded-md overflow-hidden">
                {images.length > 0 && (
                  <img
                    key={activeIndex}
                    src={images[activeIndex]}
                    className="w-full h-62.5 md:h-100.5 2xl:h-150  object-contain rounded-md fade-image"
                  />
                )}
              </div>

              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white w-10 h-10 rounded-full shadow"
              >
                {"<"}
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white w-10 h-10 rounded-full shadow"
              >
                {">"}
              </button>
            </div>

            <div className="flex gap-3">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveIndex(index)}
                  className={`w-16 h-16 object-cover rounded-md cursor-pointer transition-all duration-300
                    ${
                      activeIndex === index
                        ? "border-2 border-rab-navy scale-105"
                        : "opacity-70"
                    }`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 dark:text-white md:w-[30%]">
            <h1 className="font-bold dark:text-white">{data.title}</h1>
            <p className="text-sm">{data.date}</p>

            <p className="text-sm h-50 md:h-80 overflow-hidden">
              {data.description}
            </p>

            <button className="bg-rab-navy  dark:bg-rab-neon  dark:text-black hover:brightness-110 cursor-pointer p-2 rounded-md text-white">
              Konsultasi sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
