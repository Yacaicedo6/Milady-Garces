import React from "react";
import coverImage from "../assets/milady.jpg";

const DATA = {
  recipientName: "Milady Yineth Garcés Arboleda",
  recipientRole: "Líder en Desarrollo Empresarial, Comercial y Territorial del Pacífico Colombiano",
  introText:
    "Consultora, asesora y conferencista experta en desarrollo productivo, fortalecimiento empresarial, liderazgo femenino y construcción de paz territorial. Reconocida por su impacto en procesos de transformación social y económica en comunidades étnicas y rurales del Pacífico colombiano.",
  initiatives: [
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
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Header con imagen de fondo */}
      <header className="relative w-full h-[90vh] overflow-hidden">
        <img
          src={coverImage}
          alt="Portada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
            {DATA.recipientName}
          </h1>
          <p className="text-lg md:text-2xl mt-2 font-medium drop-shadow">
            {DATA.recipientRole}
          </p>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed drop-shadow">
            {DATA.introText}
          </p>
        </div>
      </header>

      {/* Carrusel de iniciativas */}
      <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciativas Destacadas</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-4 w-max">
            {DATA.initiatives.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[260px] bg-white border rounded-xl shadow p-4"
              >
                <div className="text-xs font-bold text-blue-700 mb-2">
                  Imagen {idx + 1}
                </div>
                <h3 className="text-md font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
