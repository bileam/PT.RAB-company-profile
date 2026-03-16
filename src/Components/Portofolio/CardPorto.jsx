const CardPorto = ({ index, item }) => {
  return (
    <div
      // data-aos="fade-up"
      // data-aos-delay={index + 200}
      // key={item.id}
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
  );
};
export default CardPorto;
