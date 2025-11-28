import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contacto = () => {
  const datosContacto = [
    { icon: Mail, label: 'Email', info: 'contacto@gameflash.com' },
    { icon: Phone, label: 'Teléfono', info: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Dirección', info: 'Calle Pixel 404, Cyber City, Neo-Tokio' }
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 bg-clip-text text-transparent mb-6">
            Contáctanos
          </h2>
          <p className="text-white/80 text-xl">
            ¿Listo para unirte al hype? Escríbenos y hagamos que Neon Rush conquiste tu Steam.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {datosContacto.map((dato, index) => {
            const Icono = dato.icon;
            return (
              <div key={index} className="text-center p-6 bg-white/10 rounded-xl hover:shadow-xl border border-white/20">
                <Icono className="mx-auto mb-4 text-cyan-400" size={48} />
                <h3 className="text-white font-bold text-lg mb-2">{dato.label}</h3>
                <p className="text-white/80">{dato.info}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;