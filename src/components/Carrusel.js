import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const imagenes = [
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop&crop=entropy&auto=format',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop&crop=entropy&auto=format',
  'https://images.unsplash.com/photo-1570549717069-33bed1cd4b82?w=800&h=400&fit=crop&crop=entropy&auto=format',
  'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=entropy&auto=format',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=entropy&auto=format'
];

const Carrusel = () => {
  const [indiceActual, setIndiceActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  const irASiguiente = () => setIndiceActual((prev) => (prev + 1) % imagenes.length);
  const irAnterior = () => setIndiceActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={indiceActual}
          src={imagenes[indiceActual]}
          alt={`Imagen de juego ${indiceActual + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <button
        onClick={irAnterior}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={irASiguiente}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
      >
        <ArrowRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imagenes.map((_, indice) => (
          <button
            key={indice}
            onClick={() => setIndiceActual(indice)}
            className={`w-3 h-3 rounded-full transition-all ${indice === indiceActual ? 'bg-cyan-400' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrusel;