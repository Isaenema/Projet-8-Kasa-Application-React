import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Logement from "./Pages/Logement/Logement";
import Error from "./Pages/Error/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
export default Router;
