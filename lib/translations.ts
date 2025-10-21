// Spanish translations for the veterinary clinic application
export const translations = {
  // Navigation & Common
  navigation: {
    backToHome: "Volver al Inicio",
    home: "Inicio",
    services: "Servicios",
    appointments: "Citas",
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    bookAppointment: "Agendar Cita",
    ourServices: "Nuestros Servicios",
  },

  // Hero Section
  hero: {
    title: "Cuidado Experto para Tus Amigos Felinos",
    subtitle: "Servicios veterinarios especializados exclusivamente para gatos. Cuidado compasivo, tratamiento avanzado, experiencia confiable.",
    bookAppointment: "Agendar Cita",
    ourServices: "Nuestros Servicios",
  },

  // Services Section
  services: {
    title: "Nuestros Servicios",
    subtitle: "Cuidado veterinario integral diseñado específicamente para gatos",
    items: [
      {
        title: "Exámenes de Bienestar",
        description: "Chequeos de salud integrales para mantener a tu gato sano y feliz",
      },
      {
        title: "Vacunación",
        description: "Programas completos de vacunación adaptados al estilo de vida de tu gato",
      },
      {
        title: "Cirugía",
        description: "Procedimientos quirúrgicos avanzados con equipo de última generación",
      },
      {
        title: "Cuidado Dental",
        description: "Limpieza dental profesional y mantenimiento de la salud oral",
      },
      {
        title: "Cuidado de Emergencia",
        description: "Servicios de emergencia 24/7 para necesidades médicas felinas urgentes",
      },
      {
        title: "Peluquería",
        description: "Servicios profesionales de peluquería para que tu gato luzca lo mejor posible",
      },
    ],
  },

  // Appointments Section
  appointments: {
    title: "Agendar una Cita",
    subtitle: "Elige tu forma preferida de programar una visita para tu compañero felino",
    methods: [
      {
        title: "WhatsApp",
        description: "Mensajería rápida y conveniente",
        action: "Abrir WhatsApp",
        successMessage: "Abriendo WhatsApp...",
        successDescription: "Serás redirigido a WhatsApp para programar tu cita",
      },
      {
        title: "Instagram",
        description: "Envíanos un mensaje en redes sociales",
        action: "Abrir Instagram",
        successMessage: "Abriendo Instagram...",
        successDescription: "Envíanos un DM para programar tu cita",
      },
      {
        title: "Teléfono",
        description: "Llámanos directamente",
        action: "Llamar Ahora",
        successMessage: "Llamando...",
        successDescription: "Abriendo el marcador telefónico",
      },
      {
        title: "En Persona",
        description: "Visita nuestra clínica",
        action: "Obtener Direcciones",
        successMessage: "Abriendo Mapas...",
        successDescription: "Serás redirigido a Google Maps",
      },
    ],
  },

  // Login Section
  loginSection: {
    title: "Portal del Personal",
    subtitle: "Acceso seguro para veterinarios y administradores",
    cardTitle: "Inicio de Sesión",
    cardDescription: "Accede a registros de pacientes, horarios e historial médico",
    loginButton: "Inicio de Sesión del Personal",
  },

  // Login Page
  login: {
    title: "Inicio de Sesión del Personal",
    subtitle: "Accede a tu panel de control",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "tu.correo@clinica.com",
    passwordLabel: "Contraseña",
    passwordPlaceholder: "••••••••",
    signInButton: "Iniciar Sesión",
    signingIn: "Iniciando sesión...",
    loginSuccess: "¡Inicio de sesión exitoso!",
    loginFailed: "Error en el inicio de sesión",
    backToHome: "Volver al Inicio",
    demoCredentials: "Credenciales de demostración:",
    demoVet: "Veterinario: vet@clinic.com / vet123",
    demoAdmin: "Administrador: admin@clinic.com / admin123",
  },

  // Booking Page
  booking: {
    title: "Agendar una Cita",
    subtitle: "Programa una visita para tu amigo felino",
    backToHome: "Volver al Inicio",
    petNameLabel: "Nombre de la Mascota *",
    petNamePlaceholder: "Whiskers",
    ownerNameLabel: "Nombre del Propietario *",
    ownerNamePlaceholder: "Juan Pérez",
    phoneLabel: "Teléfono *",
    phonePlaceholder: "+56912345678",
    emailLabel: "Correo Electrónico *",
    emailPlaceholder: "tu@ejemplo.com",
    serviceLabel: "Servicio *",
    servicePlaceholder: "Seleccionar un servicio",
    services: {
      checkup: "Chequeo General",
      vaccination: "Vacunación",
      dental: "Cuidado Dental",
      grooming: "Peluquería",
      surgery: "Consulta de Cirugía",
      emergency: "Emergencia",
    },
    timeLabel: "Hora Preferida *",
    timePlaceholder: "Seleccionar una hora",
    dateLabel: "Seleccionar Fecha *",
    notesLabel: "Notas Adicionales",
    notesPlaceholder: "Algún requisito especial o preocupación...",
    bookButton: "Agendar Cita",
    successMessage: "¡Cita agendada exitosamente!",
    successDescription: "Veremos a",
  },

  // Footer
  footer: {
    clinicName: "Centro Clínico Felino - Cats",
    clinicDescription: "Cuidado especializado para gatos. Tu socio de confianza en salud y bienestar felino.",
    contactTitle: "Contáctanos",
    address: "Chacabuco 1234, Arica",
    phone: "(123) 456-7890",
    email: "info@catsclinicafelina.com",
    hoursTitle: "Horarios de Atención",
    hours: "Lunes - Viernes: 10:00 AM - 7:00 PM",
    copyright: "© 2025 Centro Clínico Felino Cats. Todos los derechos reservados.",
  },

  // Admin Dashboard
  adminDashboard: {
    title: "Panel de Administración",
    welcome: "Bienvenido,",
    logout: "Cerrar Sesión",
    stats: {
      totalAppointments: "Citas Totales",
      pending: "Pendientes",
      confirmed: "Confirmadas",
      completed: "Completadas",
    },
    appointments: {
      title: "Todas las Citas",
      noAppointments: "Aún no hay citas",
      petName: "Nombre de la Mascota",
      ownerName: "Nombre del Propietario",
      phone: "Teléfono",
      email: "Correo Electrónico",
      service: "Servicio",
      date: "Fecha",
      time: "Hora",
      status: "Estado",
      delete: "Eliminar",
      deleted: "Cita eliminada",
    },
    status: {
      pending: "pendiente",
      confirmed: "confirmada",
      completed: "completada",
    },
  },

  // Vet Dashboard
  vetDashboard: {
    title: "Panel del Veterinario",
    welcome: "Bienvenido, Dr.",
    logout: "Cerrar Sesión",
    todayAppointments: "Citas de Hoy",
    upcomingAppointments: "Próximas Citas",
    noAppointments: "No hay citas programadas",
    patientRecords: "Registros de Pacientes",
    viewRecord: "Ver Registro",
    notes: "Notas",
  },

  // Common Actions
  actions: {
    save: "Guardar",
    cancel: "Cancelar",
    edit: "Editar",
    delete: "Eliminar",
    confirm: "Confirmar",
    close: "Cerrar",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
  },

  // Error Messages
  errors: {
    required: "Este campo es requerido",
    invalidEmail: "Correo electrónico inválido",
    invalidPhone: "Número de teléfono inválido",
    loginFailed: "Error en el inicio de sesión",
    appointmentBookingFailed: "Error al agendar la cita",
    genericError: "Ha ocurrido un error",
  },

  // Success Messages
  success: {
    loginSuccessful: "¡Inicio de sesión exitoso!",
    appointmentBooked: "¡Cita agendada exitosamente!",
    appointmentDeleted: "Cita eliminada",
    loggedOut: "Sesión cerrada exitosamente",
  },
};

// Helper function to get nested translations
export const t = (path: string): string => {
  const keys = path.split('.');
  let result: any = translations;

  for (const key of keys) {
    result = result?.[key];
    if (result === undefined) {
      console.warn(`Translation not found for path: ${path}`);
      return path;
    }
  }

  return typeof result === 'string' ? result : path;
};