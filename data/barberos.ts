export interface Barbero {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  experiencia: string;
  descripcion: string;
  foto: string;
  servicios: string[];
  horarios: string;
}

export const barberos: Barbero[] = [
  {
    id: "matias-rodriguez",
    nombre: "Matías",
    apellido: "Rodríguez",
    especialidad: "Cortes Modernos",
    experiencia: "8 años",
    descripcion: "Especialista en cortes modernos y tendencias. Experto en técnicas de degradado y diseño de barba.",
    foto: "https://static.wikia.nocookie.net/rap/images/7/78/Renepuente.jpg/revision/latest?cb=20240124033405&path-prefix=es",
    servicios: ["Corte General", "Corte + Barba", "Diseño de Barba"],
    horarios: "Lun-Vie: 9:00-19:00, Sáb: 9:00-18:00"
  },
  {
    id: "diego-andrade",
    nombre: "Diego",
    apellido: "Andrade", 
    especialidad: "Afeitado Clásico",
    experiencia: "12 años",
    descripcion: "Maestro del afeitado tradicional con navaja. Técnicas clásicas y atención al detalle.",
    foto: "https://static.wikia.nocookie.net/rap/images/7/78/Renepuente.jpg/revision/latest?cb=20240124033405&path-prefix=es",
    servicios: ["Afeitado Clásico", "Corte + Barba", "Tratamientos"],
    horarios: "Mar-Sáb: 10:00-20:00"
  },
  {
    id: "leo-perez",
    nombre: "Leo",
    apellido: "Pérez",
    especialidad: "Estilo Vintage",
    experiencia: "6 años", 
    descripcion: "Especialista en estilos vintage y retro. Creador de looks únicos y personalizados.",
    foto: "https://static.wikia.nocookie.net/rap/images/7/78/Renepuente.jpg/revision/latest?cb=20240124033405&path-prefix=es",
    servicios: ["Corte Vintage", "Barba Estilizada", "Cejas"],
    horarios: "Lun-Jue: 9:00-18:00, Vie-Sáb: 9:00-19:00"
  }
];
