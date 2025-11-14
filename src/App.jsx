import React, { useMemo, useState } from "react";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";
import coverImage from "./assets/milady.jpg"; 

const DATA = {
  recipientName: "Milady Yineth Garcés Arboleda",
  recipientRole: "Líder en Desarrollo Económico y Empresarial del Pacífico Colombiano",
  senderName: "Yan Caicedo",
  coverImage: "/milady.jpg",
  introText:
    "Liderazgo estratégico y compromiso con el desarrollo socioeconómico del Pacífico Colombiano. Reconocida internacionalmente por su visión, impacto y dedicación a la transformación sostenible de las comunidades y los territorios.",
  biography:
    "Milady Yineth Garcés Arboleda ha liderado la Cámara de Comercio de Buenaventura impulsando más de 27 programas y proyectos socioeconómicos que han beneficiado a miles de personas. Ha sido reconocida como una de las 100 personas de ascendencia africana más influyentes del mundo en la categoría Export & International Trade (MIPAD 2024). Su gestión se ha caracterizado por la creación de alianzas estratégicas, el fortalecimiento empresarial y el empoderamiento de mujeres y jóvenes en el Pacífico Colombiano.",
  initiatives: [
    {
      title: "Buzón Ganador",
      description:
        "Programa para promover la formalización empresarial y fortalecer las capacidades de los emprendedores.",
    },
    {
      title: "Empoderamiento Económico Sostenible (ECOS)",
      description:
        "Iniciativa para potenciar el liderazgo de mujeres en la economía local.",
    },
    {
      title: "Jóvenes en Ciencia para la Paz",
      description:
        "Proyecto que vincula a jóvenes del territorio en procesos de investigación e innovación.",
    },
  ],
  press: [],
  links: {
    email: "mailto:miyi.garces@gmail.com",
    linkedin: "https://www.linkedin.com/in/milady-garces-arboleda-34820226a",
    instagram: "https://www.instagram.com/milady.garces/",
    facebook: "https://www.facebook.com/milady.garcesarboleda",
  },
};

function daysFrom(dateStr) {
  const start = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(start.getTime()))
    return 0; const now = new Date();
  return Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
}

export default function ProfessionalPortfolio() {
  const elapsedDays = useMemo(() => daysFrom(DATA.specialDate), []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="relative">
        <img
          src={DATA.coverImage}
          alt="cover"
          className="w-full h-auto object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            {DATA.recipientName}
          </h1>
          <p className="text-xl md:text-2xl mt-2 opacity-90">
            {DATA.recipientRole}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-95">
            {DATA.introText}
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-center gap-8 py-4 text-sm font-semibold tracking-wide">
          <a href="#biografia" className="hover:text-blue-700 transition-colors">
            Conóceme
          </a>
          <a
            href="#iniciativas"
            className="hover:text-blue-700 transition-colors"
          >
            Iniciativas
          </a>
          <a href="#prensa" className="hover:text-blue-700 transition-colors">
            Prensa
          </a>
          <a href="#contacto" className="hover:text-blue-700 transition-colors">
            Contacto
          </a>
        </div>
      </nav>

      {/* Biography */}
      <section id="biografia" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Conóceme</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          {DATA.biography}
        </p>
      </section>

      {/* Initiatives */}
      <section id="iniciativas" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            Iniciativas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {DATA.initiatives.map((init, idx) => (
              <div
                key={idx}
                className="border rounded-xl p-6 shadow-sm bg-white hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-3 text-blue-700">
                  {init.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {init.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="prensa" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Prensa</h2>
        {DATA.press.length === 0 ? (
          <p className="text-gray-500 italic">Muy pronto</p>
        ) : (
          <ul className="list-disc pl-5 space-y-3 text-blue-700">
            {DATA.press.map((item, idx) => (
              <li key={idx}>
                <a href={item.link} className="hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Contact */}
      <section id="contacto" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Hablemos</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Correo"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Mensaje"
              rows="4"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Enviar
            </button>
          </form>
          <div className="mt-8 flex gap-6 text-blue-700">
            <a
              href={DATA.links.linkedin}
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href={DATA.links.email}
              className="flex items-center gap-2 hover:underline"
            >
              <Mail className="h-5 w-5" />
              Email
            </a>
            <a
              href={DATA.links.instagram}
              className="flex items-center gap-2 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm4.25 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5Zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
              Instagram
            </a>
            <a
              href={DATA.links.facebook}
              className="flex items-center gap-2 hover:underline"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {DATA.senderName}
      </footer>
    </div>
  );
}
