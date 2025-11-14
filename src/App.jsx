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
  senderName: "Yan Caicedo",
  coverImage: coverImage,
  introText:
    "Consultora, asesora y conferencista experta en desarrollo productivo, fortalecimiento empresarial, liderazgo femenino y construcción de paz territorial. Reconocida por su impacto en procesos de transformación social y económica en comunidades étnicas y rurales del Pacífico colombiano.",
  biography:
    "Milady Yineth Garcés Arboleda ha liderado la Cámara de Comercio de Buenaventura impulsando más de 27 programas y proyectos socioeconómicos que han beneficiado a miles de personas. Ha sido reconocida como una de las 100 personas de ascendencia africana más influyentes del mundo en la categoría Export & International Trade (MIPAD 2024). Su gestión se ha caracterizado por la creación de alianzas estratégicas, el fortalecimiento empresarial y el empoderamiento de mujeres y jóvenes en el Pacífico Colombiano.",
};

// -----------------
// COMPONENTE PRINCIPAL
// -----------------
export default function App() {
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  // --- EFECTOS HERO (fade-in inicial + fade/zoom con scroll) ---
  useEffect(() => {
    setFadeIn(true); // Fade in inicial

    const handleScroll = () => {
      const y = window.scrollY;

      // Fade al hacer scroll
      const fadePoint = 280;
      const newOpacity = Math.max(1 - y / fadePoint, 0);
      setOpacity(newOpacity);

      // Zoom-out progresivo (1 → 0.88)
      const newScale = Math.max(1 - y / 2200, 0.88);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* ============================= */}
      {/*        HERO PROFESIONAL        */}
      {/* ============================= */}
      <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">

        {/* Imagen con Fade + Zoom-out */}
        <img
          src={DATA.coverImage}
          alt="cover"
          style={{
            opacity,
            transform: `scale(${scale})`,
          }}
          className={`w-full h-full object-cover object-center transition-all duration-300 ease-out ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Degradado elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>

        {/* Texto sobre la imagen */}
        <div
          className={`absolute text-center text-white drop-shadow-xl px-4 transition-all duration-700 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            {DATA.recipientName}
          </h1>
          <p className="text-lg md:text-2xl mt-3 font-medium max-w-2xl mx-auto">
            {DATA.recipientRole}
          </p>
        </div>
      </div>

      {/* ============================= */}
      {/*          HEADER NAV            */}
      {/* ============================= */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between py-4 px-4">
          <h1 className="text-lg font-bold">Milady Yineth Garcés</h1>

          <ul className="hidden md:flex space-x-6 font-medium">
            <li><a href="#conoceme">Conóceme</a></li>
            <li><a href="#iniciativas">Iniciativas</a></li>
            <li><a href="#prensa">Prensa</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          {/* Versión móvil: menú simple */}
          <div className="md:hidden text-sm">
            <a href="#conoceme">Menú</a>
          </div>
        </nav>
      </header>

      {/* ============================= */}
      {/*        SECCIÓN CONÓCEME        */}
      {/* ============================= */}
      <section id="conoceme" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Conóceme</h2>
        <p className="text-lg leading-relaxed">{DATA.biography}</p>
      </section>

    </div>
  );
}
