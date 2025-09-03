'use client';

import { motion } from 'framer-motion';
import { Servicio } from '@/data/servicios';

interface ServicioCardProps {
  servicio: Servicio;
  index: number;
}

export default function ServicioCard({ servicio, index }: ServicioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`
        relative bg-black-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 
        overflow-hidden group cursor-pointer border border-gold-600/20
        ${servicio.destacado ? 'ring-2 ring-gold-500 scale-105' : ''}
      `}
    >
      {servicio.destacado && (
        <div className="absolute top-4 right-4 bg-gold-500 text-black-950 px-2 py-1 rounded-full text-xs font-bold">
          POPULAR
        </div>
      )}
      
      <div className="p-6">
        <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
          {servicio.icono}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 text-center">
          {servicio.nombre}
        </h3>
        
        <p className="text-gold-200 text-sm mb-4 text-center leading-relaxed">
          {servicio.descripcion}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-gold-500">
            {servicio.precio}
          </div>
          <div className="text-sm text-gold-300 bg-gold-600/20 px-3 py-1 rounded-full">
            {servicio.duracion}
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gold-600 hover:bg-gold-700 text-black-950 font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          Reservar
        </motion.button>
      </div>
      
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-10 group-hover:animate-pulse transition-opacity duration-300" />
    </motion.div>
  );
}
