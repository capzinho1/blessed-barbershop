'use client';

import { motion } from 'framer-motion';
import { config } from '@/data/config';

export default function MapHorario() {
  const horarios = Object.entries(config.horarios);

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Mapa */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-80 lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.123456789!2d-71.51567361546768!3d-35.30403958980141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE4JzE0LjUiUyA3McKwMzAnNTYuNCJX!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Blessed Barbershop en San Rafael, Chile"
          className="rounded-xl"
        />
        
        {/* Overlay con información */}
        <div className="absolute top-4 left-4 bg-black-800/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gold-600/20">
          <h3 className="font-bold text-white text-sm">📍 Ubicación</h3>
          <p className="text-xs text-gold-200">{config.barberia.direccion}</p>
        </div>
      </motion.div>

      {/* Horarios y contacto */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Horarios */}
        <div className="bg-black-800 rounded-xl shadow-lg p-6 border border-gold-600/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Horarios de Atención
          </h3>
          
          <div className="space-y-3">
            {horarios.map(([dia, horario], index) => (
              <motion.div
                key={dia}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  horario === 'Cerrado' 
                    ? 'bg-red-900/20 text-red-400 border border-red-600/20' 
                    : 'bg-gold-600/10 text-gold-200 border border-gold-600/20'
                }`}
              >
                <span className="font-semibold capitalize">
                  {dia === 'lunes' ? 'Lunes' :
                   dia === 'martes' ? 'Martes' :
                   dia === 'miercoles' ? 'Miércoles' :
                   dia === 'jueves' ? 'Jueves' :
                   dia === 'viernes' ? 'Viernes' :
                   dia === 'sabado' ? 'Sábado' :
                   dia === 'domingo' ? 'Domingo' : dia}
                </span>
                <span className={`font-bold ${
                  horario === 'Cerrado' ? 'text-red-400' : 'text-gold-400'
                }`}>
                  {horario}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Información de contacto */}
        <div className="bg-black-800 rounded-xl shadow-lg p-6 border border-gold-600/20">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <svg className="w-6 h-6 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contacto
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gold-200">{config.barberia.direccion}</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${config.barberia.telefono}`} className="text-gold-200 hover:text-gold-500 transition-colors">
                {config.barberia.telefono}
              </a>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${config.barberia.email}`} className="text-gold-200 hover:text-gold-500 transition-colors">
                {config.barberia.email}
              </a>
            </div>
          </div>
        </div>


      </motion.div>
    </div>
  );
}
