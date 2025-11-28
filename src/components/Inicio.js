import React from 'react';
import { motion } from 'framer-motion';
import Carrusel from './Carrusel';
import { Play, Download, Star } from 'lucide-react';

const Inicio = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-black via-purple-900 to-pink-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            David Muñoz
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Sumérgete en un mundo cyberpunk donde cada píxel explota en adrenalina. ¡El juego de Steam que te hará cuestionar la realidad!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <Play className="inline mr-2" size={20} />
              Jugar Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/30 transition-all"
            >
              <Download className="inline mr-2" size={20} />
              Descargar en Steam
            </motion.button>
          </div>
          <div className="flex justify-center items-center mt-8 text-yellow-400">
            <Star className="mr-2" size={24} />
            <span className="text-lg font-semibold">4.8/5 - 10K Reseñas</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Carrusel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            ¿Por Qué Descargar el juego?
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Gráficos que te dejan ciego de lo épicos, jugabilidad adictiva como un loop infinito y una historia que te hace odiar el botón de pausa. Ideal para gamers que duermen poco y sueñan con victorias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Inicio;