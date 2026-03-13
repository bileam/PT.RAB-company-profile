import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-white dark:bg-gray-900 transition-colors">
      <Navbar />
      <main className="pt-20 md:pt-22 grow">
        <Outlet />
      </main>
      <footer className="w-full  bottom-0   dark:bg-gray-800/20 bg-gray-800 transition-colors duration-300 mt-10 ">
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
