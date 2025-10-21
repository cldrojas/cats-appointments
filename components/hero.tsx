import { Calendar } from 'lucide-react'
import heroImage from '@assets/princesa.webp'
import { Button } from '@components/ui/button'
import { t } from '@lib/translations'

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-[#fafafa]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage.src})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 to-secondary/70 backdrop-blur-[2px]" />
      </div>
      <div className="z-10 max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Cuidado Experto para Tus Amigos Felinos
        </h1>
        <p className="font-semibold my-4">
          Servicios veterinarios especializados dedicados exclusivamente a
          gatos. Cuidado compasivo, tratamientos avanzados, experiencia
          confiable.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            size="lg"
            variant="hero"
            className="text-lg"
          >
            <Calendar className="mr-2" />
            Agendar Cita
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg"
          >
            {t('hero.ourServices')}
          </Button>
        </div>
      </div>
    </section>
  )
}
