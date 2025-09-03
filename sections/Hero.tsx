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

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animación del título principal
      gsap.fromTo(titleRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        }
      );

      // Animación del subtítulo
      gsap.fromTo(subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.8
        }
      );

      // Animación del botón con bounce
      gsap.fromTo(buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.2
        }
      );

      // Animación del fondo
      gsap.fromTo(backgroundRef.current,
        {
          scale: 1.1,
          opacity: 0.8
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        }
      );

      // Efecto parallax en el fondo
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con imagen/video */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0"
      >

        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')"
          }}
        />
        
        {/* Overlay con patrón */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Título principal */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Estilo</span>
            <span className="block text-gold-400">& Tradición</span>
          </h1>

          {/* Subtítulo */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gold-200 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Descubre la experiencia de un corte perfecto en {config.barberia.nombre}. 
            Nuestros barberos profesionales te brindan el estilo que mereces.
          </p>

          {/* Botones CTA */}
          <div 
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BotonCTA 
              texto="Reserva tu hora"
              variante="whatsapp"
              tamaño="lg"
            />
            <BotonCTA 
              texto="Ver servicios"
              variante="secundario"
              tamaño="lg"
              href="#servicios"
            />
          </div>


        </motion.div>
      </div>


    </section>
  );
}
