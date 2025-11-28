import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const QuienesSomos = () => {
  return (
    <section className="pt-20 pb-16 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Users className="mx-auto mb-4 text-purple-400" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            ¿Quiénes Somos?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Somos un equipo de soñadores cyberpunk apasionados por los juegos que cambian el mundo. Desde garajes llenos de cables hasta servidores que ronronean como gatos mutantes, creamos Neon Rush para que tú, sí tú, el que lee esto mientras come papas fritas, vivas aventuras que ni en sueños.
            </p>
            <p className="text-white/80 text-lg">
              Con años de experiencia en el caos digital, nos especializamos en hacer que cada clic sea una explosión de diversión. ¡Únete a la rebelión gamer!
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            alt="Equipo de desarrollo"
            className="rounded-xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default QuienesSomos;