import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Banner from "./Components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Belajar from "./Pages/Belajar";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import Layanan from "./Pages/Layanan";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        /
        <Route path="/belajar" element={<Belajar />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/layanan" element={<Layanan />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
