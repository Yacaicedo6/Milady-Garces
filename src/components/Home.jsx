import React from "react";
import coverImage from "../assets/milady.jpg";

const initiatives = [
  {
    title: "Fortalecimiento Empresarial con Enfoque Étnico",
    description:
      "Acompañamiento a más de 1.200 unidades productivas afrodescendientes y rurales, promoviendo la inclusión económica desde la identidad cultural.",
  },
  {
    title: "Pactos por el Desarrollo Territorial",
    description:
      "Diseño y ejecución de planes de desarrollo productivo con participación comunitaria y enfoque de género en el Pacífico colombiano.",
  },
  {
    title: "Estrategia de Liderazgo Femenino",
    description:
      "Creación de redes de mujeres emprendedoras y procesos formativos para el empoderamiento político y económico.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Portada con imagen y bienvenida */}
      <header className="relative w-full h-[90vh]">
        <img
          src={coverImage}
          alt="Milady Garcés"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Milady Yineth Garcés Arboleda
          </h1>
          <p className="text-lg md:text-2xl mt-2 font-medium">
            Liderazgo, Desarrollo Territorial y Empoderamiento
          </p>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed drop-shadow">
            Experta en desarrollo productivo, fortalecimiento empresarial y construcción de paz territorial, con un enfoque étnico y comunitario en el Pacífico colombiano.
          </p>
        </div>
      </header>

      {/* Carrusel horizontal de iniciativas */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Iniciativas Destacadas
        </h2>
        <div className="flex overflow-x-auto space-x-6 px-4">
          {initiatives.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-xs bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección final de bienvenida u objetivo */}
      <section className="bg-blue-50 py-12 text-center px-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Transformando territorios desde lo local
        </h3>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Este portafolio reúne la trayectoria, visión y acciones de Milady Garcés como lideresa comprometida con el desarrollo del Pacífico colombiano, integrando a mujeres, comunidades afrodescendientes y zonas rurales a la economía y la gobernanza local.
        </p>
      </section>
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4 text-center mt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm">
              <span className="text-gray-300">&copy; {new Date().getFullYear()} Milady Garcés</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300">Todos los derechos reservados</span>
              <span className="hidden md:inline text-gray-500">•</span>
              <a
                href="https://github.com/Yacaicedo6/Milady-Garces"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0 md:ml-2 text-white underline hover:text-gray-300"
                aria-label="Repositorio GitHub de Yacaicedo6 - Milady-Garces"
              >
                Web Yan Caicedo
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }