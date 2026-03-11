import { NavLink } from "react-router-dom";
import logoRab from "../assets/image/NobgLogo.png";
import burger from "../assets/logo/burger.svg";
import cancel from "../assets/logo/cancel.svg";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isBurger, setBurger] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navBg, setNavBg] = useState(false);

  const lastScrollY = useRef(0);

  const Menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portofolio", path: "/portofolio" },
    { name: "Layanan", path: "/layanan" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // hide navbar scroll down
      if (currentScroll > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // change background when scroll
      if (currentScroll > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      ${navBg ? "bg-white shadow-lg" : "bg-gray-100"}
      `}
    >
      <div className="container mx-auto flex justify-between items-center py-4 md:py-2 px-2 md:px-10 2xl:px-24">
        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <img src={logoRab} alt="logo" className="md:w-15 w-10 object-cover" />
          <div className="flex flex-col justify-center">
            <h1 className="text-rab-navy font-extrabold text-[0.9rem] md:text-[1rem]">
              PT. Renol Anugrah Bersama
            </h1>
            <p className="text-[0.8rem] md:text-[0.9rem] font-bold text-rab-green">
              General Contractor & Supplier
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {Menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative font-heading transition-colors duration-300
                ${
                  isActive
                    ? "text-rab-navy font-bold"
                    : "text-gray-dark hover:text-rab-navy"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}

                  {/* ACTIVE UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-rab-green transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* BURGER BUTTON */}
        <button
          onClick={() => setBurger((prev) => !prev)}
          className="md:hidden block"
        >
          <img src={isBurger ? burger : cancel} alt="menu" className="w-8" />
        </button>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed bg-rab-light top-20 w-full left-0 right-0
          flex flex-col gap-6 px-6 pt-6
          transition-all duration-500 ease-in-out
          ${
            isBurger
              ? "opacity-0 -translate-y-5 pointer-events-none"
              : "opacity-100 translate-y-0 h-screen"
          }`}
        >
          {Menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setBurger(true)}
              className={({ isActive }) =>
                `text-lg font-heading transition-colors
                ${
                  isActive
                    ? "text-rab-navy font-bold"
                    : "text-gray-dark hover:text-rab-navy"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* MOBILE LOGO INFO */}
          <div
            className={`flex gap-2 absolute bottom-20 transition-opacity duration-500
            ${isBurger ? "opacity-0" : "opacity-100 delay-300"}`}
          >
            <img src={logoRab} alt="logo" className="w-14" />

            <div className="flex flex-col justify-center">
              <h1 className="text-rab-navy font-extrabold text-[0.9rem]">
                PT. Renol Anugrah Bersama
              </h1>
              <p className="text-[0.8rem] font-bold text-rab-green">
                General Contractor & Supplier
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
