import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';
import Servicios from '@/sections/Servicios';
import Barberos from '@/sections/Barberos';
import UbicacionHorario from '@/sections/UbicacionHorario';
import ContactoCTA from '@/sections/ContactoCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicios />
      <Barberos />
      <UbicacionHorario />
      <ContactoCTA />
      <Footer />
    </main>
  );
}
