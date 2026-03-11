import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import Belajar from "./Pages/Belajar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        /
        <Route path="/belajar" element={<Belajar />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
