# 🪒 Landing Barber - Sitio Web Moderno para Barbería

Un sitio web moderno, rápido y completamente responsivo para barberías, construido con Next.js 14, TypeScript, Tailwind CSS y animaciones GSAP.

## ✨ Características

### 🎨 Diseño y UX
- **Diseño moderno y profesional** con colores cálidos (ámbar/dorado)
- **Completamente responsivo** - optimizado para móviles, tablets y desktop
- **Animaciones fluidas** con GSAP y Framer Motion
- **Navegación sticky** con efectos de scroll
- **Accesibilidad completa** con etiquetas ARIA y navegación por teclado

### 🚀 Tecnologías
- **Next.js 14** con App Router
- **TypeScript** para type safety
- **Tailwind CSS** para estilos responsivos
- **GSAP** para animaciones profesionales
- **Framer Motion** para interacciones
- **Lucide React** para iconos

### 📱 Secciones Incluidas
1. **Header** - Navegación sticky con logo y menú
2. **Hero** - Sección principal con CTA y animaciones
3. **Servicios** - Tarjetas de servicios con precios
4. **Barberos** - Equipo profesional con perfiles
5. **Galería** - Carrusel automático de trabajos
6. **Ubicación y Horarios** - Mapa integrado y horarios
7. **Contacto CTA** - Sección final de conversión
8. **Footer** - Información completa y redes sociales

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación
```bash
# Clonar el repositorio
git clone <tu-repositorio>
cd landing-barber

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install

# Ejecutar en modo desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
landing-barber/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales y utilidades
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── BotonCTA.tsx      # Botón de llamada a la acción
│   ├── ServicioCard.tsx  # Tarjeta de servicio
│   ├── BarberoCard.tsx   # Tarjeta de barbero
│   ├── Carrusel.tsx      # Carrusel de imágenes
│   ├── MapaHorario.tsx   # Mapa y horarios
│   ├── Header.tsx        # Navegación principal
│   └── Footer.tsx        # Pie de página
├── sections/             # Secciones de la página
│   ├── Hero.tsx         # Sección principal
│   ├── Servicios.tsx    # Sección de servicios
│   ├── Barberos.tsx     # Sección de barberos
│   ├── Galeria.tsx      # Galería de trabajos
│   ├── UbicacionHorario.tsx # Ubicación y horarios
│   └── ContactoCTA.tsx  # Sección de contacto
├── data/                # Datos y configuración
│   ├── config.ts        # Configuración general
│   ├── servicios.ts     # Datos de servicios
│   ├── barberos.ts      # Datos de barberos
│   └── galeria.ts       # Datos de galería
└── public/              # Archivos estáticos
    └── images/          # Imágenes (placeholders)
```

## ⚙️ Configuración

### Personalizar Datos
Edita los archivos en `/data/` para personalizar:

- **`config.ts`** - Información de la barbería, contacto, horarios
- **`servicios.ts`** - Servicios ofrecidos con precios
- **`barberos.ts`** - Información del equipo
- **`galeria.ts`** - Imágenes de trabajos realizados

### Ejemplo de configuración:
```typescript
// data/config.ts
export const config = {
  barberia: {
    nombre: "Tu Barbería",
    telefono: "+56 9 1234 5678",
    direccion: "Tu dirección",
    // ... más configuración
  }
}
```

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.ts`:
- **Primario**: Ámbar (#d97706)
- **Secundario**: Grises
- **Acentos**: Verde para WhatsApp

### Animaciones
- **GSAP** para animaciones complejas y scroll triggers
- **Framer Motion** para interacciones simples
- **CSS** para animaciones básicas

### Responsividad
- **Mobile First** - Optimizado para móviles
- **Breakpoints**: 360px, 768px, 1024px, 1440px
- **Grid responsivo** en todas las secciones

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify
```bash
# Build del proyecto
npm run build

# Subir carpeta 'out' a Netlify
```

### Otros proveedores
El proyecto es compatible con cualquier proveedor que soporte Next.js estático.

## 📱 Características Móviles

- **Touch optimizado** - Gestos táctiles en carrusel
- **Menú hamburguesa** - Navegación móvil
- **Botones grandes** - Fáciles de tocar
- **Carga rápida** - Optimizado para conexiones lentas

## ♿ Accesibilidad

- **Etiquetas ARIA** en todos los elementos interactivos
- **Navegación por teclado** completa
- **Contraste adecuado** en todos los textos
- **Alt text** en todas las imágenes
- **Focus visible** en elementos interactivos

## 🔧 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter de código
```

## 📈 Optimizaciones

- **Lazy loading** de imágenes
- **Code splitting** automático
- **Compresión** de assets
- **SEO optimizado** con metadatos
- **Performance** optimizado

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si tienes preguntas o necesitas ayuda:
- Abre un issue en GitHub
- Contacta al desarrollador
- Revisa la documentación de Next.js

## 🎯 Roadmap

- [ ] Modo oscuro
- [ ] Sistema de reservas online
- [ ] Integración con Google Calendar
- [ ] Blog de la barbería
- [ ] Sistema de reviews
- [ ] PWA (Progressive Web App)

---

**Desarrollado con ❤️ para barberías modernas**
