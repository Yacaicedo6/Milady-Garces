import React, { useState } from "react";
import { Mail, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Hablemos</h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            placeholder="Correo"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            placeholder="Mensaje"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Enviar
          </button>
        </form>

        <div className="mt-8 flex gap-6 text-blue-700">
          <a href="https://www.linkedin.com/in/milady-garces-arboleda-34820226a" className="flex items-center gap-2 hover:underline">
            <Linkedin className="h-5 w-5" /> LinkedIn
          </a>
          <a href="mailto:miyi.garces@gmail.com" className="flex items-center gap-2 hover:underline">
            <Mail className="h-5 w-5" /> Email
          </a>
          <a href="https://www.instagram.com/milady.garces/" className="flex items-center gap-2 hover:underline">
            <Instagram className="h-5 w-5" /> Instagram
          </a>
          <a href="https://www.facebook.com/milady.garcesarboleda" className="flex items-center gap-2 hover:underline">
            <Facebook className="h-5 w-5" /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
