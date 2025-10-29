// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Conoceme from "./components/Conoceme";
import Iniciativas from "./components/Iniciativas";
import Prensa from "./components/Prensa";
import Contacto from "./components/Contacto";

export default function App() {
  return (
    <Router basename="/Prueba-Portafolio-Milady-Garces">
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Barra de navegación */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-sm border-b">
          <div className="text-lg font-bold text-blue-900">Milady Garcés</div>
          <div className="space-x-6 text-sm font-semibold">
            <Link to="/" className="hover:text-blue-700">Inicio</Link>
            <Link to="/conoceme" className="hover:text-blue-700">Conóceme</Link>
            <Link to="/iniciativas" className="hover:text-blue-700">Iniciativas</Link>
            <Link to="/prensa" className="hover:text-blue-700">Prensa</Link>
            <Link to="/contacto" className="hover:text-blue-700">Contacto</Link>
          </div>
        </nav>

        {/* Contenido dinámico según ruta */}
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
