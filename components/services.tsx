import {
  Syringe,
  Scissors,
  Activity,
  Stethoscope,
  Pill,
  HeartPulse
} from 'lucide-react'

import { t } from '@lib/translations'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const services = [
  {
    icon: Stethoscope,
    title: t('services.items.0.title'),
    description: t('services.items.0.description')
  },
  {
    icon: Syringe,
    title: t('services.items.1.title'),
    description: t('services.items.1.description')
  },
  {
    icon: Activity,
    title: t('services.items.2.title'),
    description: t('services.items.2.description')
  },
  {
    icon: Pill,
    title: t('services.items.3.title'),
    description: t('services.items.3.description')
  },
  {
    icon: HeartPulse,
    title: t('services.items.4.title'),
    description: t('services.items.4.description')
  },
  {
    icon: Scissors,
    title: t('services.items.5.title'),
    description: t('services.items.5.description')
  }
]

export const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-muted/30"
    >
      <div className="px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
