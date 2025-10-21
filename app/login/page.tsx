'use client'
import { useState, useEffect } from 'react'
// import { useAuth } from "@contexts/AuthContext";
import { Button } from '@components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@components/ui/card'
import { Input } from '@components/ui/input'
import { Label } from '@components/ui/label'
import { ArrowLeft, LogIn } from 'lucide-react'
import { toast } from 'sonner'
import { t } from '@lib/translations'
import Link from 'next/link'
import { useAuth } from '@contexts/AuthContext'
import { usePathname } from 'next/navigation'

const Login = () => {
  const { user, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const path = usePathname()

  useEffect(() => {
    if (user) {
      location.replace(
        path + user.role === 'vet' ? '/vet-dashboard' : '/admin-dashboard'
      )
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const result = await login(email, password)

    if (result.success) {
      toast.success(t('login.loginSuccess'))
    } else {
      toast.error(result.error || t('login.loginFailed'))
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          className="mb-6"
        >
          <ArrowLeft className="mr-2" />
          <Link href={'/'}>{t('login.backToHome')}</Link>
        </Button>

        <Card className="border-border shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl">{t('login.title')}</CardTitle>
            <CardDescription className="text-base">
              {t('login.subtitle')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="email">{t('login.emailLabel')}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('login.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('login.passwordLabel')}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={t('login.passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? t('login.signingIn') : t('login.signInButton')}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground">
                <strong>{t('login.demoCredentials')}</strong>
                <br />
                {t('login.demoVet')}
                <br />
                {t('login.demoAdmin')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Login
