const Button = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-4 text-[0.9rem]  text-wrap  rounded-md shadow-[0_0_20px_rgba(0,0,0,0.15)] transition-colors
        ${
          active
            ? "bg-rab-navy text-rab-light dark:bg-rab-neon dark:text-black  "
            : "bg-white text-rab-dark"
        }`}
    >
      {children}
    </button>
  );
};

export default Button;
