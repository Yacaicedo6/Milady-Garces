import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Conoceme from "./components/Conoceme";
import Iniciativas from "./components/Iniciativas";
import Prensa from "./components/Prensa";
import Contacto from "./components/Contacto";
import Home from "./components/Home"; // Página de inicio con header y carrusel

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shadow-sm sticky top-0 bg-white z-50">
          <Link to="/" className="text-base font-semibold hover:text-blue-700">
            Milady Garcés
          </Link>
          <div className="space-x-4 hidden sm:flex">
            <Link to="/conoceme" className="text-base font-semibold hover:text-blue-700">
              Conóceme
            </Link>
            <Link to="/iniciativas" className="text-base font-semibold hover:text-blue-700">
              Iniciativas
            </Link>
            <Link to="/prensa" className="text-base font-semibold hover:text-blue-700">
              Prensa
            </Link>
            <Link to="/contacto" className="text-base font-semibold hover:text-blue-700">
              Contacto
            </Link>
          </div>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conoceme" element={<Conoceme />} />
          <Route path="/iniciativas" element={<Iniciativas />} />
          <Route path="/prensa" element={<Prensa />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}
