import Title from "../Title";
import satu from "../../assets/image/home.jpg";
const Portofolio = () => {
  const projects = [
    {
      id: 1,
      title: "Renovasi Rumah Modern",
      location: "Tangerang",
      date: "09 Januari 2026",
      image: satu,
    },
    {
      id: 2,
      title: "Desain Interior Minimalis",
      location: "Jakarta",
      date: "12 Februari 2026",
      image: satu,
    },
    {
      id: 3,
      title: "Pembangunan Rumah",
      location: "Bandung",
      date: "05 Maret 2026",
      image: satu,
    },
    {
      id: 4,
      title: "Renovasi Kantor",
      location: "Surabaya",
      date: "20 April 2026",
      image: satu,
    },
    {
      id: 5,
      title: "Interior Apartemen",
      location: "Bekasi",
      date: "10 Mei 2026",
      image: satu,
    },
  ];

  return (
    <div className="flex flex-col gap-4 py-6 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.15)] px-4 rounded-md">
      <div className="flex">
        <Title aos="fade-up">New Portofolio</Title>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.slice(0, 4).map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index + 200}
            key={item.id}
            className={`flex flex-col gap-1 h-80 md:h-60 group rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] w-full
            ${index >= 2 ? "hidden md:flex" : ""}`}
          >
            <div className="md:h-[70%]  h-[90%] relative  overflow-hidden rounded-lg group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-115"
              />

              <div className="absolute inset-0  dark:bg-rab-dark/40 rounded-lg transition"></div>
            </div>

            <h1 className="px-4 font-semibold tx-rab-navy transition-colors duration-300">
              {item.title}
            </h1>

            <p className="px-4 text-sm dark:text-rab-light transition-colors duration-300">
              {item.location}, {item.date}
            </p>
          </div>
        ))}
      </div>
      <div
        data-aos="fade-up"
        // data-aos-delay={delay}
        className="flex md:justify-end justify-center"
      >
        <button className="md:px-10 px-6 py-2  text-[0.9rem] dark:bg-rab-neon bg-rab-navy dark:text-black text-rab-light transition-colors duration-300 rounded-lg hover:brightness-110 ">
          lihat selengkapnya
        </button>
      </div>
    </div>
  );
};

export default Portofolio;
