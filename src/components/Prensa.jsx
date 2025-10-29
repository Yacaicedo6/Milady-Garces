import React from "react";

const pressLinks = [
  {
    title: "Milady Garcés entre las 100 personas afrodescendientes más influyentes del mundo",
    link: "https://mipad.org/milady-garces-afrodescendiente-destacada/",
  },
  {
    title: "Reconocimiento a su gestión en la Cámara de Comercio de Buenaventura",
    link: "https://ccbun.org.co/reconocimiento-milady-garces/",
  },
];

export default function Prensa() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Prensa</h2>
      {pressLinks.length === 0 ? (
        <p className="text-gray-500 italic">Muy pronto</p>
      ) : (
        <ul className="list-disc pl-5 space-y-3 text-blue-700">
          {pressLinks.map((item, idx) => (
            <li key={idx}>
              <a href={item.link} className="hover:underline" target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
