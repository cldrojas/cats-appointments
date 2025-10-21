'use client'
import { useEffect, useState } from 'react'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'
import { Badge } from '@components/ui/badge'
import { LogOut, Calendar, TrendingUp, Users, Clock } from 'lucide-react'
import { toast } from 'sonner'
import { t } from '@lib/translations'

interface Appointment {
  id: string
  petName: string
  ownerName: string
  phone: string
  email: string
  service: string
  time: string
  date: string
  status: string
  notes?: string
}

const AdminDashboard = () => {
  // const { user, logout } = useAuth() TODO: implement auth from server
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      // return to login
      return
    }

    const stored = JSON.parse(localStorage.getItem('appointments') || '[]')
    setAppointments(stored)
  }, [user])

  const handleLogout = () => {
    logout()
    location.replace('/')
    toast.success(t('success.loggedOut'))
  }

  const deleteAppointment = (id: string) => {
    const updated = appointments.filter((apt) => apt.id !== id)
    setAppointments(updated)
    localStorage.setItem('appointments', JSON.stringify(updated))
    toast.success(t('adminDashboard.appointments.deleted'))
  }

  const stats = {
    total: appointments.length,
    pending: appointments.filter((a) => a.status === 'pending').length,
    confirmed: appointments.filter((a) => a.status === 'confirmed').length,
    completed: appointments.filter((a) => a.status === 'completed').length
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">{t('adminDashboard.title')}</h1>
            <p className="text-muted-foreground">
              {t('adminDashboard.welcome')} {user?.name}
            </p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {t('adminDashboard.logout')}
          </Button>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t('adminDashboard.stats.totalAppointments')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t('adminDashboard.stats.pending')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4" />
                {t('adminDashboard.stats.confirmed')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.confirmed}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                {t('adminDashboard.stats.completed')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completed}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('adminDashboard.appointments.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            {appointments.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                {t('adminDashboard.appointments.noAppointments')}
              </p>
            ) : (
              <div className="space-y-4">
                {appointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex-1">
                      <div className="font-medium">
                        {apt.petName} - {apt.ownerName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(apt.date).toLocaleDateString()} a las{' '}
                        {apt.time} | {apt.service}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {apt.phone} | {apt.email}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          apt.status === 'confirmed'
                            ? 'default'
                            : apt.status === 'completed'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {t(`adminDashboard.status.${apt.status}`)}
                      </Badge>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deleteAppointment(apt.id)}
                      >
                        {t('adminDashboard.appointments.delete')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
