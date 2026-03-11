import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#f8fafc]">
      <Navbar />
      <main className="pt-20 md:pt-22 h-[200vh]">
        <Outlet />
      </main>
      <footer className="w-full absolute bottom-0 h-40 bg-gray-100 ">
        <Footer />
      </footer>
    </div>
  );
};
export default MainLayout;
