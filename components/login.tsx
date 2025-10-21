'use client'

import { UserCircle } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'
import { Button } from '@components/ui/button'
import { t } from '@lib/translations'
import Link from 'next/link'

export const Login = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('loginSection.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('loginSection.subtitle')}
          </p>
        </div>
        <Card className="transition-all duration-300 hover:shadow-lg border-border">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <UserCircle className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">
              {t('loginSection.cardTitle')}
            </CardTitle>
            <CardDescription className="text-base">
              {t('loginSection.cardDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              size="lg"
              onClick={() => console.log('navigate')}
            >
              <Link
                href="/login"
                className="w-full"
              >
                {t('loginSection.loginButton')}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
