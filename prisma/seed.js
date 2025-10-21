import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create veterinarians first
  const veterinarians = await Promise.all([
    prisma.veterinarian.upsert({
      where: { email: 'dr.smith@vetclinic.com' },
      update: {},
      create: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'dr.smith@vetclinic.com',
        phone: '+1234567890',
        specialty: 'General Practice',
        password: await bcrypt.hash('password123', 10),
        role: 'veterinarian',
        isActive: true
      }
    }),
    prisma.veterinarian.upsert({
      where: { email: 'dr.johnson@vetclinic.com' },
      update: {},
      create: {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'dr.johnson@vetclinic.com',
        phone: '+1234567891',
        specialty: 'Surgery',
        password: await bcrypt.hash('password123', 10),
        role: 'veterinarian',
        isActive: true
      }
    }),
    prisma.veterinarian.upsert({
      where: { email: 'admin@vetclinic.com' },
      update: {},
      create: {
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@vetclinic.com',
        phone: '+1234567892',
        specialty: 'Administration',
        password: await bcrypt.hash('admin123', 10),
        role: 'admin',
        isActive: true
      }
    })
  ])

  console.log(`✅ Created ${veterinarians.length} veterinarians`)

  // Create veterinarian schedules
  const schedules = []
  for (const vet of veterinarians) {
    // Monday to Friday schedules
    for (let day = 1; day <= 5; day++) {
      schedules.push(
        await prisma.veterinarianSchedule.upsert({
          where: { id: undefined, veterinarianId: vet.id, dayOfWeek: day },
          update: {},
          create: {
            veterinarianId: vet.id,
            dayOfWeek: day,
            startTime: '09:00',
            endTime: '17:00',
            isActive: true
          }
        })
      )
    }
  }

  console.log(`✅ Created ${schedules.length} veterinarian schedules`)

  // Create clients
  const clients = await Promise.all([
    prisma.client.upsert({
      where: { email: 'alice.johnson@email.com' },
      update: {},
      create: {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@email.com',
        phone: '+1555123456',
        address: '123 Main St',
        city: 'Springfield'
      }
    }),
    prisma.client.upsert({
      where: { email: 'bob.wilson@email.com' },
      update: {},
      create: {
        firstName: 'Bob',
        lastName: 'Wilson',
        email: 'bob.wilson@email.com',
        phone: '+1555123457',
        address: '456 Oak Ave',
        city: 'Springfield'
      }
    }),
    prisma.client.upsert({
      where: { email: 'carol.davis@email.com' },
      update: {},
      create: {
        firstName: 'Carol',
        lastName: 'Davis',
        email: 'carol.davis@email.com',
        phone: '+1555123458',
        address: '789 Pine St',
        city: 'Springfield'
      }
    })
  ])

  console.log(`✅ Created ${clients.length} clients`)

  // Create pets
  const pets = await Promise.all([
    prisma.pet.upsert({
      where: {
        id: 'pet-1'
      },
      update: {},
      create: {
        id: 'pet-1',
        name: 'Whiskers',
        species: 'Cat',
        breed: 'Siamese',
        birthDate: new Date('2020-03-15'),
        weight: 4.2,
        color: 'Cream',
        gender: 'Female',
        clientId: clients[0].id,
        notes: 'Allergic to fish'
      }
    }),
    prisma.pet.upsert({
      where: {
        id: 'pet-2'
      },
      update: {},
      create: {
        id: 'pet-2',
        name: 'Buddy',
        species: 'Dog',
        breed: 'Golden Retriever',
        birthDate: new Date('2019-07-20'),
        weight: 25.5,
        color: 'Golden',
        gender: 'Male',
        clientId: clients[1].id,
        notes: 'Very energetic, loves treats'
      }
    }),
    prisma.pet.upsert({
      where: {
        id: 'pet-3'
      },
      update: {},
      create: {
        id: 'pet-3',
        name: 'Luna',
        species: 'Cat',
        breed: 'Persian',
        birthDate: new Date('2021-01-10'),
        weight: 3.8,
        color: 'White',
        gender: 'Female',
        clientId: clients[2].id,
        notes: 'Requires regular grooming'
      }
    }),
    prisma.pet.upsert({
      where: {
        id: 'pet-4'
      },
      update: {},
      create: {
        id: 'pet-4',
        name: 'Max',
        species: 'Dog',
        breed: 'German Shepherd',
        birthDate: new Date('2018-11-05'),
        weight: 32.0,
        color: 'Black and Tan',
        gender: 'Male',
        clientId: clients[1].id,
        notes: 'Protective of family, good with kids'
      }
    })
  ])

  console.log(`✅ Created ${pets.length} pets`)

  // Create appointments
  const appointments = await Promise.all([
    prisma.appointment.upsert({
      where: {
        id: 'appointment-1'
      },
      update: {},
      create: {
        id: 'appointment-1',
        petId: pets[0].id,
        veterinarianId: veterinarians[0].id,
        dateTime: new Date('2024-12-20T10:00:00Z'),
        duration: 30,
        serviceType: 'General checkup',
        reason: 'Annual wellness exam',
        status: 'confirmed',
        bookingChannel: 'web'
      }
    }),
    prisma.appointment.upsert({
      where: {
        id: 'appointment-2'
      },
      update: {},
      create: {
        id: 'appointment-2',
        petId: pets[1].id,
        veterinarianId: veterinarians[1].id,
        dateTime: new Date('2024-12-21T14:30:00Z'),
        duration: 45,
        serviceType: 'Vaccination',
        reason: 'DHPP booster vaccination',
        status: 'pending',
        bookingChannel: 'phone'
      }
    }),
    prisma.appointment.upsert({
      where: {
        id: 'appointment-3'
      },
      update: {},
      create: {
        id: 'appointment-3',
        petId: pets[2].id,
        veterinarianId: veterinarians[0].id,
        dateTime: new Date('2024-12-22T09:15:00Z'),
        duration: 60,
        serviceType: 'Grooming',
        reason: 'Professional grooming and nail trim',
        status: 'confirmed',
        bookingChannel: 'in_person'
      }
    }),
    prisma.appointment.upsert({
      where: {
        id: 'appointment-4'
      },
      update: {},
      create: {
        id: 'appointment-4',
        petId: pets[3].id,
        veterinarianId: veterinarians[1].id,
        dateTime: new Date('2024-12-23T16:00:00Z'),
        duration: 30,
        serviceType: 'Emergency',
        reason: 'Limping on right hind leg',
        status: 'in_progress',
        bookingChannel: 'phone'
      }
    })
  ])

  console.log(`✅ Created ${appointments.length} appointments`)

  // Create activity logs
  const activityLogs = await Promise.all([
    prisma.activityLog.create({
      data: {
        entity: 'appointment',
        entityId: appointments[0].id,
        action: 'create',
        details: JSON.stringify({ serviceType: 'General checkup' }),
        userId: veterinarians[0].id,
        channel: 'web'
      }
    }),
    prisma.activityLog.create({
      data: {
        entity: 'pet',
        entityId: pets[0].id,
        action: 'create',
        details: JSON.stringify({ species: 'Cat', name: 'Whiskers' }),
        userId: veterinarians[2].id,
        channel: 'web'
      }
    }),
    prisma.activityLog.create({
      data: {
        entity: 'appointment',
        entityId: appointments[1].id,
        action: 'update',
        details: JSON.stringify({ status: 'confirmed' }),
        userId: veterinarians[1].id,
        channel: 'phone'
      }
    })
  ])

  console.log(`✅ Created ${activityLogs.length} activity logs`)

  console.log('🎉 Database seeding completed successfully!')
  console.log(`📊 Summary:`)
  console.log(`   • ${veterinarians.length} veterinarians`)
  console.log(`   • ${schedules.length} schedules`)
  console.log(`   • ${clients.length} clients`)
  console.log(`   • ${pets.length} pets`)
  console.log(`   • ${appointments.length} appointments`)
  console.log(`   • ${activityLogs.length} activity logs`)
}

main()
  .catch((e) => {
    console.error('❌ Error during database seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
