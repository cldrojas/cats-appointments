# 🐾 Veterinary Appointment Booking Platform

A full-stack Next.js application for managing veterinary appointments across multiple booking channels: web, WhatsApp, Instagram, phone, and in-person.

## 🎯 Overview

This platform centralizes appointment scheduling from various sources into a single, unified system. Clients can book appointments through their preferred channel, while veterinary staff manages everything through a comprehensive admin panel.

## ✨ Features

### Multi-Channel Booking
- 🌐 **Web Landing Page**: Public-facing appointment booking interface
- 💬 **WhatsApp Bot**: Conversational booking through WhatsApp Business API
- 📱 **Instagram DM Bot**: Appointment scheduling via Instagram messages
- ☎️ **Phone/In-Person**: Manual entry through admin panel

### Admin Panel
- 📊 Dashboard with real-time statistics
- 📅 Calendar view of all appointments
- 👥 Client and pet management
- 🩺 Veterinarian schedule configuration
- 📝 Appointment notes and medical records
- 📈 Analytics by booking channel
- 🔍 Comprehensive audit logs

### Automated Features
- ✉️ Email/SMS confirmations
- ⏰ Appointment reminders (24h before)
- 🔄 Real-time availability calculation
- 🔐 Secure confirmation codes for self-service

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── (landing)/              # Public-facing pages
│   │   ├── page.tsx            # Landing page
│   │   └── book/               # Booking flow
│   ├── (admin)/                # Admin panel (protected)
│   │   ├── dashboard/
│   │   ├── appointments/
│   │   ├── clients/
│   │   └── veterinarians/
│   ├── api/
│   │   ├── public/             # Public endpoints
│   │   ├── admin/              # Protected admin endpoints
│   │   ├── webhooks/           # WhatsApp, Instagram webhooks
│   │   └── auth/               # NextAuth configuration
│   └── layout.tsx
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/
├── lib/
│   ├── prisma.ts               # Prisma client singleton
│   ├── auth.ts                 # Auth utilities
│   └── validations.ts          # Zod schemas
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── booking/                # Booking flow components
│   └── admin/                  # Admin panel components
└── services/
    ├── appointments.ts         # Business logic
    ├── availability.ts         # Slot calculation
    ├── notifications.ts        # Email/SMS service
    └── bots/
        ├── whatsapp.ts         # WhatsApp bot logic
        └── instagram.ts        # Instagram bot logic
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- WhatsApp Business API credentials (optional)
- Instagram API credentials (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd veterinary-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vetdb"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Email Service (SendGrid, Resend, etc.)
EMAIL_API_KEY="your-email-api-key"
EMAIL_FROM="noreply@yourvet.com"

# SMS Service (Twilio, etc.)
SMS_API_KEY="your-sms-api-key"
SMS_FROM="your-phone-number"

# WhatsApp Business API
WHATSAPP_TOKEN="your-whatsapp-token"
WHATSAPP_PHONE_NUMBER_ID="your-phone-id"
WHATSAPP_VERIFY_TOKEN="your-verify-token"

# Instagram API
INSTAGRAM_TOKEN="your-instagram-token"
INSTAGRAM_VERIFY_TOKEN="your-verify-token"
```

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma db seed  # Optional: adds sample data
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Schema

The platform uses the following main entities:

- **Client**: Pet owners with contact information
- **Pet**: Animals belonging to clients
- **Veterinarian**: Staff members with schedules and specialties
- **VeterinarianSchedule**: Working hours by day of week
- **Appointment**: Bookings with status tracking
- **ActivityLog**: Audit trail for all changes

See `prisma/schema.prisma` for complete schema definition.

## 🔌 API Endpoints

### Public Endpoints
- `GET /api/public/availability` - Available appointment slots
- `POST /api/public/appointments` - Book new appointment
- `GET /api/public/appointments/:code` - Check appointment status
- `PATCH /api/public/appointments/:code/cancel` - Cancel appointment

### Admin Endpoints (Protected)
- `GET /api/admin/appointments` - List all appointments
- `POST /api/admin/appointments` - Create appointment (manual)
- `PATCH /api/admin/appointments/:id` - Update appointment
- `GET /api/admin/clients` - List all clients
- `GET /api/admin/dashboard/stats` - Dashboard metrics

### Webhook Endpoints
- `POST /api/webhooks/whatsapp` - WhatsApp message handler
- `POST /api/webhooks/instagram` - Instagram message handler

Full API documentation available in `/docs/API.md`

## 🤖 Bot Configuration

### WhatsApp Setup

1. Create a WhatsApp Business account at [Meta Business Suite](https://business.facebook.com)
2. Generate access token and add to `.env`
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/whatsapp`
4. Subscribe to message events

### Instagram Setup

1. Connect Instagram Business account to Meta Business Suite
2. Generate access token with `instagram_basic` and `instagram_manage_messages` permissions
3. Configure webhook URL: `https://yourdomain.com/api/webhooks/instagram`
4. Subscribe to message events

## 🔐 Security

- All passwords hashed with bcrypt
- Admin routes protected by NextAuth.js middleware
- Webhook signatures verified for external APIs
- Rate limiting on public endpoints
- SQL injection prevention via Prisma
- CORS configured for known origins only
- Environment variables for sensitive data

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 📦 Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Import project to Vercel
3. Add environment variables
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_SECRET` | Secret for JWT signing | ✅ |
| `NEXTAUTH_URL` | Application base URL | ✅ |
| `EMAIL_API_KEY` | Email service API key | ✅ |
| `SMS_API_KEY` | SMS service API key | ⚠️ Recommended |
| `WHATSAPP_TOKEN` | WhatsApp Business API token | ❌ Optional |
| `INSTAGRAM_TOKEN` | Instagram API token | ❌ Optional |

## 📊 Performance Optimization

- Static pages cached at CDN edge
- API routes cached with stale-while-revalidate
- Database queries optimized with indexes
- Image optimization via Next.js Image component
- Code splitting for reduced bundle size
- Database connection pooling

## 🛠️ Development

```bash
# Format code
npm run format

# Lint code
npm run lint

# Type check
npm run type-check

# Generate Prisma client after schema changes
npx prisma generate

# Create new migration
npx prisma migrate dev --name migration_name

# Open Prisma Studio (database GUI)
npx prisma studio
```

## 📝 License

MIT

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Support

For questions or issues, contact [your-email@example.com]

## 🗺️ Roadmap

- [ ] Mobile app (React Native)
- [ ] SMS-based booking
- [ ] Video consultation integration
- [ ] Prescription management
- [ ] Inventory tracking
- [ ] Multi-location support
- [ ] Payment integration
- [ ] Client portal with medical history