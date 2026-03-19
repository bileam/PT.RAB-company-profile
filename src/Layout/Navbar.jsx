import { NavLink } from "react-router-dom";
import logoRab from "../assets/image/NobgLogo.png";
import burger from "../assets/logo/burger.svg";
import cancel from "../assets/logo/cancel.svg";
import { useState, useEffect, useRef } from "react";
import DarkModeToggle from "../Components/DarkModeToggle";

const Navbar = () => {
  const [isBurger, setBurger] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [navBg, setNavBg] = useState(false);

  const lastScrollY = useRef(0);

  const Menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portofolio", path: "/portofolio" },
    // { name: "Services", path: "/layanan" },
    { name: "Product", path: "/Product" },
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
      ${
        navBg
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-gray-100 dark:bg-gray-800"
      }
      `}
    >
      <div className="2xl:container mx-auto px-2 py-4 flex justify-between items-center ">
        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <img src={logoRab} alt="logo" className="md:w-15 w-10 object-cover" />
          <div className="flex flex-col justify-center">
            <h1 className="text-rab-navy font-extrabold text-[0.9rem] md:text-[1rem]">
              PT. Renol Anugrah Bersama
            </h1>
            <p className="text-[0.8rem]  md:text-[0.9rem] font-bold text-rab-green">
              General Contractor & Supplier
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex lg:gap-8 md:gap-4">
          {Menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `relative font-heading transition-colors duration-300 ${
                  isActive
                    ? "text-rab-navy dark:text-rab-navy font-bold"
                    : "text-gray-600 dark:text-gray-300 hover:text-rab-navy dark:hover:text-rab-green"
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
          <DarkModeToggle />
        </div>

        {/* BURGER BUTTON */}

        <div className="flex gap-1 items-center md:hidden ">
          <DarkModeToggle />
          <button onClick={() => setBurger((prev) => !prev)} className="">
            <img src={isBurger ? burger : cancel} alt="menu" className="w-8" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden fixed bg-rab-light top-20 w-full left-0 right-0
          flex flex-col gap-6 px-6 pt-6
          transition-all duration-300 ease-in-out dark:dark:bg-gray-900 
          ${
            isBurger
              ? "opacity-0 -translate-y-5 pointer-events-none"
              : "opacity-100 dark:text-rab-light translate-y-0 h-screen"
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
                    : "text-gray-dark hover:text-rab-neon"
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
