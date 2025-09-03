'use client';

import { motion } from 'framer-motion';
import { Barbero } from '@/data/barberos';

interface BarberoCardProps {
  barbero: Barbero;
  index: number;
}

export default function BarberoCard({ barbero, index }: BarberoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="bg-black-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gold-600/20"
    >
      {/* Imagen del barbero */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={barbero.foto}
          alt={`${barbero.nombre} ${barbero.apellido}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay con información */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium">{barbero.experiencia} de experiencia</p>
        </div>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">
          {barbero.nombre} {barbero.apellido}
        </h3>
        
        <p className="text-gold-500 font-semibold mb-3">
          {barbero.especialidad}
        </p>
        
        <p className="text-gold-200 text-sm mb-4 leading-relaxed">
          {barbero.descripcion}
        </p>
        
        {/* Servicios */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gold-300 mb-2">Servicios:</h4>
          <div className="flex flex-wrap gap-1">
            {barbero.servicios.map((servicio, idx) => (
              <span
                key={idx}
                className="text-xs bg-gold-600/20 text-gold-300 px-2 py-1 rounded-full"
              >
                {servicio}
              </span>
            ))}
          </div>
        </div>
        
        {/* Horarios */}
        <div className="text-xs text-gold-300 bg-gold-600/10 p-2 rounded-lg">
          <strong>Horarios:</strong> {barbero.horarios}
        </div>
        
        {/* Botón de reserva */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 bg-gold-600 hover:bg-gold-700 text-black-950 font-semibold py-2 rounded-lg transition-colors duration-300"
        >
          Reservar con {barbero.nombre}
        </motion.button>
      </div>
    </motion.div>
  );
}
