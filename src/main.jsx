import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Info from "./components/Info/Info";
import App from "./App";
import "./styles/global.scss";
import Search from "./components/Search/Search";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/search/:movie" element={<Search />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

