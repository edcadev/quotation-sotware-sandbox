import { z } from "zod";

// ============================================================================
// VALIDACIONES REUTILIZABLES
// ============================================================================

/**
 * Validación de email
 */
export const emailSchema = z
  .string()
  .min(1, "El email es obligatorio")
  .email("Email inválido")
  .toLowerCase()
  .trim();

/**
 * Validación de teléfono (formato internacional)
 */
export const telefonoSchema = z
  .string()
  .regex(
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
    "Formato de teléfono inválido"
  )
  .optional()
  .or(z.literal(""));

/**
 * Validación de URL
 */
export const urlSchema = z
  .string()
  .url("URL inválida")
  .optional()
  .or(z.literal(""));

/**
 * Validación de fecha futura
 */
export const fechaFuturaSchema = z
  .string()
  .refine(
    (fecha) => {
      if (!fecha) return true; // Opcional
      const fechaSeleccionada = new Date(fecha);
      const hoy = new Date();
      hoy.setHours(0, 0, 0, 0);
      return fechaSeleccionada >= hoy;
    },
    { message: "La fecha debe ser hoy o en el futuro" }
  )
  .optional();

/**
 * Validación de rango numérico
 */
export const rangoNumericoSchema = (min: number, max: number, mensaje?: string) =>
  z
    .number({
      message: "Debe ser un número",
    })
    .min(min, `El valor mínimo es ${min}`)
    .max(max, `El valor máximo es ${max}`);

/**
 * Validación de texto con longitud mínima y máxima
 */
export const textoConLongitudSchema = (min: number, max: number, campo: string) =>
  z
    .string()
    .min(min, `${campo} debe tener al menos ${min} caracteres`)
    .max(max, `${campo} no puede exceder ${max} caracteres`)
    .trim();

/**
 * Validación de NIF/CIF/NIE español
 */
export const nifCifSchema = z
  .string()
  .regex(
    /^[XYZ]?\d{7,8}[A-Z]$/i,
    "Formato de NIF/CIF/NIE inválido"
  )
  .optional()
  .or(z.literal(""));

// ============================================================================
// PASO 1: OBJETIVOS DEL PROYECTO
// ============================================================================

export const paso1Schema = z.object({
  // Información básica
  nombreProyecto: textoConLongitudSchema(3, 100, "El nombre del proyecto"),

  descripcion: textoConLongitudSchema(10, 1000, "La descripción")
    .refine(
      (desc) => desc.split(" ").length >= 5,
      "La descripción debe tener al menos 5 palabras"
    ),

  objetivoPrincipal: textoConLongitudSchema(5, 500, "El objetivo principal"),

  tipoSoftware: z.enum(["web", "mobile", "desktop", "hibrido"], {
    message: "Selecciona un tipo de software",
    // invalid_type_error: "Tipo de software inválido",
  }),

  industria: z.string().min(1, "Selecciona una industria"),

  // Campos opcionales adicionales
  empresaNombre: z.string().optional(),
  empresaSitioWeb: urlSchema,
  contactoEmail: emailSchema.optional(),
  contactoTelefono: telefonoSchema,
});

// ============================================================================
// PASO 2: USUARIOS DEL SISTEMA
// ============================================================================

export const paso2Schema = z.object({
  numeroUsuarios: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"], {
    message: "Selecciona un rango de usuarios",
  }),

  tiposUsuario: z
    .array(z.string())
    .min(1, "Selecciona al menos un tipo de usuario")
    .max(10, "No puedes seleccionar más de 10 tipos de usuario"),

  perfilesUsuario: z
    .string()
    .max(500, "La descripción de perfiles no puede exceder 500 caracteres")
    .optional(),

  necesidadesAccesibilidad: z.boolean().default(false),

  detallesAccesibilidad: z
    .string()
    .max(500, "Los detalles de accesibilidad no pueden exceder 500 caracteres")
    .optional(),

  // Usuarios concurrentes esperados
  usuariosConcurrentes: z
    .number()
    .min(1, "Debe haber al menos 1 usuario concurrente")
    .max(100000, "El máximo es 100,000 usuarios concurrentes")
    .optional(),
});

// ============================================================================
// PASO 3: FUNCIONALIDADES
// ============================================================================

export const paso3Schema = z.object({
  funcionalidadesCore: z
    .array(z.string())
    .min(1, "Selecciona al menos una funcionalidad principal")
    .max(20, "No puedes seleccionar más de 20 funcionalidades"),

  funcionalidadesOpcionales: z
    .array(z.string())
    .max(15, "No puedes seleccionar más de 15 funcionalidades opcionales")
    .optional(),

  modulosPersonalizados: z
    .string()
    .max(1000, "La descripción de módulos no puede exceder 1000 caracteres")
    .optional(),

  nivelComplejidad: z.enum(["basica", "media", "alta", "muy-alta"], {
    message: "Selecciona un nivel de complejidad",
  }),

  // Estimación de pantallas/vistas
  numeroPantallas: z
    .number()
    .min(1, "Debe haber al menos 1 pantalla")
    .max(500, "El máximo es 500 pantallas")
    .optional(),
});

// ============================================================================
// PASO 4: REQUISITOS TÉCNICOS
// ============================================================================

export const paso4Schema = z.object({
  plataformas: z
    .array(z.string())
    .min(1, "Selecciona al menos una plataforma"),

  navegadores: z.array(z.string()).optional(),

  dispositivosMoviles: z.array(z.string()).optional(),

  requisitosRendimiento: z
    .string()
    .max(1000, "Los requisitos de rendimiento no pueden exceder 1000 caracteres")
    .optional(),

  seguridadRequerida: z.array(z.string()).optional(),

  cumplimientoNormativo: z.array(z.string()).optional(),

  // Métricas de rendimiento
  tiempoCargaMaximo: z
    .number()
    .min(0.1, "El tiempo mínimo es 0.1 segundos")
    .max(60, "El tiempo máximo es 60 segundos")
    .optional(),

  disponibilidadSLA: z
    .number()
    .min(90, "La disponibilidad mínima es 90%")
    .max(100, "La disponibilidad máxima es 100%")
    .optional(),
});

// ============================================================================
// PASO 5: INTEGRACIONES
// ============================================================================

export const paso5Schema = z.object({
  necesitaIntegraciones: z.boolean().default(false),

  sistemasIntegrar: z.array(z.string()).optional(),

  apisExternas: z.array(z.string()).optional(),

  tipoIntegracion: z
    .enum(["rest", "graphql", "soap", "websockets", "otro"])
    .optional(),

  detallesIntegracion: z
    .string()
    .max(1000, "Los detalles de integración no pueden exceder 1000 caracteres")
    .optional(),

  // Número de integraciones
  numeroIntegraciones: z
    .number()
    .min(0, "El mínimo es 0 integraciones")
    .max(50, "El máximo es 50 integraciones")
    .optional(),

  // Frecuencia de sincronización
  frecuenciaSincronizacion: z
    .enum(["tiempo-real", "minutos", "horas", "diaria", "semanal", "manual"])
    .optional(),
}).refine(
  (data) => {
    // Si necesita integraciones, debe tener al menos un sistema o API
    if (data.necesitaIntegraciones) {
      const tieneSistemas = data.sistemasIntegrar && data.sistemasIntegrar.length > 0;
      const tieneApis = data.apisExternas && data.apisExternas.length > 0;
      return tieneSistemas || tieneApis;
    }
    return true;
  },
  {
    message: "Si necesitas integraciones, debes seleccionar al menos un sistema o API",
    path: ["sistemasIntegrar"],
  }
);

// ============================================================================
// PASO 6: DISEÑO Y UX/UI
// ============================================================================

export const paso6Schema = z.object({
  tieneDiseno: z.boolean().default(false),

  tipoDiseno: z
    .enum(["completo", "wireframes", "referencias", "ninguno"])
    .optional(),

  preferenciaEstilo: z.array(z.string()).optional(),

  brandingExistente: z.boolean().default(false),

  necesitaUXUI: z.boolean().default(false),

  comentariosDiseno: z
    .string()
    .max(1000, "Los comentarios de diseño no pueden exceder 1000 caracteres")
    .optional(),

  // URLs de referencias de diseño
  urlsReferencia: z
    .array(urlSchema)
    .max(10, "Máximo 10 URLs de referencia")
    .optional(),

  // Paleta de colores existente
  coloresPrimarios: z
    .array(z.string().regex(/^#[0-9A-Fa-f]{6}$/, "Color hexadecimal inválido"))
    .max(5, "Máximo 5 colores primarios")
    .optional(),
});

// ============================================================================
// PASO 7: PRESUPUESTO Y TIEMPOS
// ============================================================================

export const paso7Schema = z.object({
  presupuestoEstimado: z
    .enum(["menos-10k", "10k-25k", "25k-50k", "50k-100k", "100k+"])
    .optional(),

  presupuestoFlexible: z.boolean().default(false),

  tiempoEstimado: z.enum(["1-3meses", "3-6meses", "6-12meses", "12meses+"], {
    message: "Selecciona un tiempo estimado",
  }),

  fechaInicio: fechaFuturaSchema,

  prioridad: z.enum(["baja", "media", "alta", "urgente"], {
    message: "Selecciona una prioridad",
  }),

  observacionesAdicionales: z
    .string()
    .max(2000, "Las observaciones no pueden exceder 2000 caracteres")
    .optional(),

  // Presupuesto exacto (opcional)
  presupuestoExacto: z
    .number()
    .min(0, "El presupuesto no puede ser negativo")
    .max(10000000, "El presupuesto máximo es €10,000,000")
    .optional(),

  // Fecha límite de entrega
  fechaLimiteEntrega: z
    .string()
    .refine(
      (fecha) => {
        if (!fecha) return true;
        const fechaLimite = new Date(fecha);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        // La fecha límite debe ser al menos 30 días en el futuro
        const treintaDiasDespues = new Date(hoy);
        treintaDiasDespues.setDate(treintaDiasDespues.getDate() + 30);
        return fechaLimite >= treintaDiasDespues;
      },
      { message: "La fecha límite debe ser al menos 30 días en el futuro" }
    )
    .optional(),
}).refine(
  (data) => {
    // Si la prioridad es urgente, debe tener una fecha de inicio
    if (data.prioridad === "urgente" && !data.fechaInicio) {
      return false;
    }
    return true;
  },
  {
    message: "Para proyectos urgentes debes especificar una fecha de inicio",
    path: ["fechaInicio"],
  }
);

// ============================================================================
// INFORMACIÓN DE CONTACTO (PASO ADICIONAL OPCIONAL)
// ============================================================================

export const contactoSchema = z.object({
  nombreCompleto: textoConLongitudSchema(3, 100, "El nombre completo"),

  email: emailSchema,

  telefono: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
      "Formato de teléfono inválido"
    ),

  empresa: textoConLongitudSchema(2, 100, "El nombre de la empresa"),

  cargo: z.string().max(100, "El cargo no puede exceder 100 caracteres").optional(),

  pais: z.string().min(1, "Selecciona un país"),

  ciudad: z.string().min(1, "La ciudad es obligatoria"),

  codigoPostal: z
    .string()
    .regex(/^[0-9]{5}$/, "Código postal inválido (5 dígitos)")
    .optional(),

  nifCif: nifCifSchema,

  aceptaTerminos: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),

  aceptaPrivacidad: z
    .boolean()
    .refine((val) => val === true, {
      message: "Debes aceptar la política de privacidad",
    }),

  aceptaComunicaciones: z.boolean().default(false),
});

// ============================================================================
// SCHEMA COMPLETO DEL FORMULARIO
// ============================================================================

export const formularioCompletoSchema = z.object({
  paso1: paso1Schema,
  paso2: paso2Schema,
  paso3: paso3Schema,
  paso4: paso4Schema,
  paso5: paso5Schema,
  paso6: paso6Schema,
  paso7: paso7Schema,
  contacto: contactoSchema.optional(), // Opcional si ya tienes los datos del usuario
});

// ============================================================================
// VALIDACIONES PERSONALIZADAS ADICIONALES
// ============================================================================

/**
 * Valida que el formulario completo sea coherente
 */
export const validarFormularioCompleto = formularioCompletoSchema.refine(
  (data) => {
    // Si el proyecto es muy complejo, el tiempo no debería ser muy corto
    if (
      data.paso3.nivelComplejidad === "muy-alta" &&
      data.paso7.tiempoEstimado === "1-3meses"
    ) {
      return false;
    }
    return true;
  },
  {
    message: "Un proyecto de muy alta complejidad requiere más de 3 meses de desarrollo",
    path: ["paso7", "tiempoEstimado"],
  }
).refine(
  (data) => {
    // Si requiere muchas integraciones, la complejidad no debería ser básica
    const numIntegraciones =
      (data.paso5.sistemasIntegrar?.length || 0) +
      (data.paso5.apisExternas?.length || 0);

    if (numIntegraciones > 5 && data.paso3.nivelComplejidad === "basica") {
      return false;
    }
    return true;
  },
  {
    message: "Un proyecto con más de 5 integraciones no puede tener complejidad básica",
    path: ["paso3", "nivelComplejidad"],
  }
);

// ============================================================================
// TIPOS DERIVADOS
// ============================================================================

export type Paso1Data = z.infer<typeof paso1Schema>;
export type Paso2Data = z.infer<typeof paso2Schema>;
export type Paso3Data = z.infer<typeof paso3Schema>;
export type Paso4Data = z.infer<typeof paso4Schema>;
export type Paso5Data = z.infer<typeof paso5Schema>;
export type Paso6Data = z.infer<typeof paso6Schema>;
export type Paso7Data = z.infer<typeof paso7Schema>;
export type ContactoData = z.infer<typeof contactoSchema>;
export type FormularioCompleto = z.infer<typeof formularioCompletoSchema>;

// ============================================================================
// UTILIDADES DE VALIDACIÓN
// ============================================================================

/**
 * Valida un paso individual del formulario
 */
export function validarPaso(numeroPaso: number, data: unknown) {
  const schemas = {
    1: paso1Schema,
    2: paso2Schema,
    3: paso3Schema,
    4: paso4Schema,
    5: paso5Schema,
    6: paso6Schema,
    7: paso7Schema,
  };

  const schema = schemas[numeroPaso as keyof typeof schemas];
  if (!schema) {
    throw new Error(`Paso ${numeroPaso} no válido`);
  }

  return schema.safeParse(data);
}

/**
 * Obtiene los errores de validación en formato legible
 */
export function obtenerErroresValidacion(error: z.ZodError) {
  return error.issues.map((err) => ({
    campo: err.path.join("."),
    mensaje: err.message,
  }));
}

/**
 * Valida un email de forma aislada
 */
export function esEmailValido(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

/**
 * Valida una fecha futura de forma aislada
 */
export function esFechaFutura(fecha: string): boolean {
  return fechaFuturaSchema.safeParse(fecha).success;
}

/**
 * Valida un teléfono de forma aislada
 */
export function esTelefonoValido(telefono: string): boolean {
  return telefonoSchema.safeParse(telefono).success;
}
