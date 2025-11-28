import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = ({ isOpen, toggleMenu }) => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/quienes-somos', label: 'Quiénes Somos' },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Juegos de David Muñoz
        </motion.h1>
        
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent p-4 md:p-0 ${isOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link) => (
            <li key={link.to} className="md:hover:text-purple-300 transition-colors">
              <Link to={link.to} onClick={toggleMenu} className="text-white font-semibold block py-2 md:py-0 text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;