'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { config } from '@/data/config';
import BotonCTA from '@/components/BotonCTA';

// Registrar el plugin de ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactoCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animación del título
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animación del contenido
      gsap.fromTo(contentRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animación de los botones
      gsap.fromTo(buttonsRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.4,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contacto"
      className="py-20 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            ¿Listo para tu
            <span className="block text-amber-200">próximo corte?</span>
          </h2>

          {/* Contenido */}
          <div ref={contentRef}>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              No esperes más. Reserva tu cita ahora y descubre por qué somos 
              la barbería preferida de nuestros clientes.
            </p>

            {/* Beneficios destacados */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Reserva Rápida</h3>
                <p className="text-amber-100 text-sm">
                  Reserva en segundos por WhatsApp
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Calidad Garantizada</h3>
                <p className="text-amber-100 text-sm">
                  Barberos profesionales certificados
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experiencia Única</h3>
                <p className="text-amber-100 text-sm">
                  Ambiente relajado y profesional
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <BotonCTA 
              texto="Reservar por WhatsApp"
              variante="whatsapp"
              tamaño="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-2xl"
            />
            <BotonCTA 
              texto="Llamar ahora"
              variante="secundario"
              tamaño="lg"
              href={`tel:${config.barberia.telefono}`}
              className="bg-white/20 border-white text-white hover:bg-white hover:text-amber-600 backdrop-blur-sm"
            />
          </div>

          {/* Información de contacto rápida */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <p className="text-amber-200 text-sm mb-1">Teléfono</p>
              <a 
                href={`tel:${config.barberia.telefono}`}
                className="text-white font-semibold hover:text-amber-200 transition-colors"
              >
                {config.barberia.telefono}
              </a>
            </div>
            <div>
              <p className="text-amber-200 text-sm mb-1">Dirección</p>
              <p className="text-white font-semibold">
                {config.barberia.direccion}
              </p>
            </div>
            <div>
              <p className="text-amber-200 text-sm mb-1">Horarios</p>
              <p className="text-white font-semibold">
                Lun-Sáb: 9:00-19:00
              </p>
            </div>
          </motion.div>

          {/* Mensaje motivacional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6"
          >
            <p className="text-amber-100 text-lg italic">
              "Un buen corte de cabello no es solo un servicio, es una experiencia 
              que te hace sentir renovado y confiado."
            </p>
            <p className="text-white font-semibold mt-2">
              - {config.barberia.nombre}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
