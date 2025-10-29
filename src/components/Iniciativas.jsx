import React from "react";

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

export default function Iniciativas() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-900">Iniciativas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((init, idx) => (
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
  );
}
