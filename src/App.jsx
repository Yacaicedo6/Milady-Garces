import React from "react";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import coverImage from "./assets/milady.jpg"; // ✔ Imagen real importada

// -----------------
// INFORMACIÓN DEL PORTAFOLIO
// -----------------
const DATA = {
  recipientName: "Milady Yineth Garcés Arboleda",
  recipientRole:
    "Líder en Desarrollo Empresarial, Comercial y Territorial del Pacífico Colombiano",
  senderName: "Yan Caicedo",
  coverImage: coverImage, // ✔ Ya NO apunta a '/milady.jpg'
  introText:
    "Consultora, asesora y conferencista experta en desarrollo productivo, fortalecimiento empresarial, liderazgo femenino y construcción de paz territorial. Reconocida por su impacto en procesos de transformación social y económica en comunidades étnicas y rurales del Pacífico colombiano.",
  biography:
    "Milady Yineth Garcés Arboleda ha liderado la Cámara de Comercio de Buenaventura impulsando más de 27 programas y proyectos socioeconómicos que han beneficiado a miles de personas. Ha sido reconocida como una de las 100 personas de ascendencia africana más influyentes del mundo en la categoría Export & International Trade (MIPAD 2024). Su gestión se ha caracterizado por la creación de alianzas estratégicas, el fortalecimiento empresarial y el empoderamiento de mujeres y jóvenes en el Pacífico Colombiano.",
};

// -----------------
// COMPONENTE PRINCIPAL
// -----------------
export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      {/* Imagen de portada */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={DATA.coverImage}
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow z-50">
        <nav className="max-w-6xl mx-auto flex justify-between py-4 px-4">
          <h1 className="text-lg font-bold">Milady Yineth Garcés</h1>

          <ul className="flex space-x-6 font-medium">
            <li><a href="#conoceme">Conóceme</a></li>
            <li><a href="#iniciativas">Iniciativas</a></li>
            <li><a href="#prensa">Prensa</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Sección Conóceme */}
      <section id="conoceme" className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Conóceme</h2>
        <p className="text-lg leading-relaxed">{DATA.biography}</p>
      </section>

    </div>
  );
}
