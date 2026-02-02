import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contacto";
import NotFound from "../pages/NotFound";
import Servicios from "../pages/Servicios";

export default function AppRutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}