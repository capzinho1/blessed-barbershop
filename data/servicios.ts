export interface Servicio {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  duracion: string;
  icono: string;
  destacado?: boolean;
}

export const servicios: Servicio[] = [
  {
    id: "corte-general",
    nombre: "Corte General",
    descripcion: "Corte de cabello profesional con lavado incluido. Estilo moderno y clásico.",
    precio: "$15.000",
    duracion: "45 min",
    icono: "✂️",
    destacado: true
  },
  {
    id: "corte-barba",
    nombre: "Corte + Barba",
    descripcion: "Corte de cabello completo con arreglo de barba y bigote. El combo perfecto.",
    precio: "$25.000",
    duracion: "60 min",
    icono: "🧔",
    destacado: true
  },
  {
    id: "barba-sola",
    nombre: "Solo Barba",
    descripcion: "Arreglo completo de barba y bigote con diseño personalizado.",
    precio: "$12.000",
    duracion: "30 min",
    icono: "🪒"
  },
  {
    id: "afeitado-clasico",
    nombre: "Afeitado Clásico",
    descripcion: "Afeitado tradicional con navaja, toalla caliente y productos premium.",
    precio: "$18.000",
    duracion: "40 min",
    icono: "🪒"
  },
  {
    id: "tratamiento-capilar",
    nombre: "Tratamiento Capilar",
    descripcion: "Tratamiento hidratante y nutritivo para el cabello y cuero cabelludo.",
    precio: "$20.000",
    duracion: "50 min",
    icono: "💆"
  },
  {
    id: "cejas",
    nombre: "Arreglo de Cejas",
    descripcion: "Diseño y arreglo profesional de cejas para un look perfecto.",
    precio: "$8.000",
    duracion: "20 min",
    icono: "👁️"
  }
];
