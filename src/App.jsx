import React, { useEffect, useState } from "react";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import coverImage from "./assets/milady.jpg";

// -----------------
// INFORMACIÓN DEL PORTAFOLIO
// -----------------
const DATA = {
  recipientName: "Milady Yineth Garcés Arboleda",
  recipientRole:
    "Líder en Desarrollo Empresarial, Comercial y Territorial del Pacífico Colombiano",
  introText:
    "Consultora, asesora y conferencista experta en desarrollo productivo, fortalecimiento empresarial, liderazgo femenino y construcción de paz territorial.",
  biography:
    "Milady Yineth Garcés Arboleda ha liderado la Cámara de Comercio de Buenaventura impulsando más de 27 programas y proyectos socioeconómicos que han beneficiado a miles de personas. Ha sido reconocida como una de las 100 personas de ascendencia africana más influyentes del mundo en la categoría Export & International Trade (MIPAD 2024). Su gestión se ha caracterizado por la creación de alianzas estratégicas, el fortalecimiento empresarial y el empoderamiento de mujeres y jóvenes en el Pacífico Colombiano.",
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // fade-in suave
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ----------------------------- */}
      {/* PORTADA */}
      {/* ----------------------------- */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        
        {/* Imagen con zoom-out + fade-in */}
        <img
          src={coverImage}
          alt="Milady"
          className={`w-full h-full object-cover transition-all duration-[2500ms] ease-out 
          ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
        />

        {/* Overlay oscuro para mejorar lectura del texto */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl">
            {DATA.recipientName}
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light drop-shadow-md">
            {DATA.recipientRole}
          </p>
        </div>

        {/* HEADER SOBRE LA PORTADA */}
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
          <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4 text-white font-medium">
            <span className="text-lg font-bold drop-shadow-md">
              Milady Yineth Garcés
            </span>

            <ul className="hidden md:flex space-x-8">
              <li><a href="#conoceme" className="hover:text-gray-200">Conóceme</a></li>
              <li><a href="#iniciativas" className="hover:text-gray-200">Iniciativas</a></li>
              <li><a href="#prensa" className="hover:text-gray-200">Prensa</a></li>
              <li><a href="#contacto" className="hover:text-gray-200">Contacto</a></li>
            </ul>
          </nav>
        </header>

      </div>

      {/* ----------------------------- */}
      {/* SECCIÓN: CONÓCEME */}
      {/* ----------------------------- */}
      <section id="conoceme" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Conóceme</h2>
        <p className="text-lg leading-relaxed">{DATA.biography}</p>
      </section>

    </div>
  );
}
