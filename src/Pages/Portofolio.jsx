import banner from "../assets/image/home.jpg";
import Banner from "../Components/About/Banner";
import CardPorto from "../Components/Portofolio/CardPorto";
import satu from "../assets/image/home.jpg";
import Button from "../Components/Portofolio/Button";
import { useState, useEffect } from "react";
import { projects } from "../Data/projects";
const Portofolio = () => {
  const [active, setActive] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // responsive items per page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setItemsPerPage(8); // lg
      } else if (width >= 768) {
        setItemsPerPage(6); // md
      } else {
        setItemsPerPage(4); // mobile
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // reset page ketika ukuran berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  //   const projects = [
  //     {
  //       id: 1,
  //       title: "Renovasi Rumah Modern",
  //       kategori: "Interior",
  //       location: "Tangerang",
  //       date: "09 Januari 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 2,
  //       title: "Desain Interior Minimalis",
  //       kategori: "Rumah",
  //       location: "Jakarta",
  //       date: "12 Februari 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 3,
  //       title: "Pembangunan Rumah",
  //       kategori: "Interior",
  //       location: "Bandung",
  //       date: "05 Maret 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 4,
  //       title: "Renovasi Kantor",
  //       kategori: "Rumah",
  //       location: "Surabaya",
  //       date: "20 April 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 5,
  //       title: "Interior Apartemen",
  //       kategori: "Interior",
  //       location: "Bekasi",
  //       date: "10 Mei 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 6,
  //       title: "Renovasi Villa",
  //       kategori: "Rumah",
  //       location: "Bali",
  //       date: "15 Juni 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 7,
  //       title: "Interior Hotel",
  //       kategori: "Interior",
  //       location: "Yogyakarta",
  //       date: "10 Juli 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 8,
  //       title: "Pembangunan Ruko",
  //       kategori: "Rumah",
  //       location: "Makassar",
  //       date: "20 Juli 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 9,
  //       title: "Desain Cafe",
  //       kategori: "Interior",
  //       location: "Bandung",
  //       date: "01 Agustus 2026",
  //       image: satu,
  //     },
  //     {
  //       id: 10,
  //       title: "Desain Cafe",
  //       kategori: "Interior",
  //       location: "Bandung",
  //       date: "01 Agustus 2026",
  //       image: satu,
  //     },
  //   ];

  // filter kategori
  const filteredProjects =
    active === "Semua"
      ? projects
      : projects.filter((item) => item.kategori === active);

  // pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const getPagination = () => {
    const pages = [];
    const maxVisible = 3;

    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="md:mt-4">
      <Banner image={banner}>PORTOFOLIO</Banner>
      <div className="section-container flex flex-col gap-4">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="inline-block  md:-translate-y-5 -translate-y-2  items-center tx-navy text-[0.9rem] md:text-[1.2rem]"
        >
          <span className="font-extrabold">Home</span> <span>{">"}</span>{" "}
          <span>Tentang Kami</span>
        </h1>
        <div data-aos="fade-up" data-aos-delay="400" className="flex gap-2">
          <Button
            active={active === "Semua"}
            onClick={() => {
              setActive("Semua");
              setCurrentPage(1);
            }}
          >
            Semua
          </Button>

          <Button
            active={active === "Rumah"}
            onClick={() => {
              setActive("Rumah");
              setCurrentPage(1);
            }}
          >
            Rumah
          </Button>

          <Button
            active={active === "Interior"}
            onClick={() => {
              setActive("Interior");
              setCurrentPage(1);
            }}
          >
            Interior
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
          
          md:min-h-130
          lg:min-h-135
        "
        >
          {currentProjects.map((item, index) => (
            <CardPorto key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-40"
            >
              Prev
            </button>

            {getPagination().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-2">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === page
                      ? "bg-[#adff2f] text-black"
                      : "bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-gray-200 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portofolio;
