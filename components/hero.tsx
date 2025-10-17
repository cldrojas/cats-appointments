import heroImage from '@assets/princesa.webp'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden w-full px-2">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage.src})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/90 to-emerald-800/80 backdrop-blur-[2px]" />
      </div>
      <div className="z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Cuidado Experto para Tus Amigos Felinos
        </h1>
        <p className="font-semibold my-4">
          Servicios veterinarios especializados dedicados exclusivamente a
          gatos. Cuidado compasivo, tratamientos avanzados, experiencia
          confiable.
        </p>
        <div>
          <Button variant="default">Agendar Cita</Button>
          <Button>Nuestros Servicios</Button>
        </div>
      </div>
    </section>
  )
}
