import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./Info";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

