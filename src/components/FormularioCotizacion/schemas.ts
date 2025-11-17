import { z } from "zod";

// Schema para Paso 0: Datos del Cliente
export const paso0Schema = z.object({
  nombreCliente: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  emailCliente: z.string({ message: "Ingresa un email válido" }).email({ message: "Ingresa un email válido" }),
  empresaCliente: z.string().optional(),
  telefonoCliente: z.string().optional(),
});

// Schema para Paso 1: Objetivos
export const paso1Schema = z.object({
  nombreProyecto: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  descripcion: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
  objetivoPrincipal: z.string().min(5, "El objetivo debe tener al menos 5 caracteres"),
  tipoSoftware: z.enum(["web", "mobile", "desktop", "hibrido"], {
    message: "Selecciona un tipo de software",
  }),
  industria: z.string().min(1, "Selecciona una industria"),
});

// Schema para Paso 2: Usuarios
export const paso2Schema = z.object({
  numeroUsuarios: z.enum(["1-10", "11-50", "51-200", "201-1000", "1000+"], {
    message: "Selecciona un rango de usuarios",
  }),
  tiposUsuario: z.array(z.string()).min(1, "Selecciona al menos un tipo de usuario"),
  perfilesUsuario: z.string().optional(),
  necesidadesAccesibilidad: z.boolean().default(false),
  detallesAccesibilidad: z.string().optional(),
});

// Schema para Paso 3: Funcionalidades
export const paso3Schema = z.object({
  funcionalidadesCore: z.array(z.string()).min(1, "Selecciona al menos una funcionalidad"),
  funcionalidadesOpcionales: z.array(z.string()).optional(),
  modulosPersonalizados: z.string().optional(),
  nivelComplejidad: z.enum(["basica", "media", "alta", "muy-alta"], {
    message: "Selecciona un nivel de complejidad",
  }),
});

// Schema para Paso 4: Requisitos Técnicos
export const paso4Schema = z.object({
  plataformas: z.array(z.string()).min(1, "Selecciona al menos una plataforma"),
  navegadores: z.array(z.string()).optional(),
  dispositivosMoviles: z.array(z.string()).optional(),
  requisitosRendimiento: z.string().optional(),
  seguridadRequerida: z.array(z.string()).optional(),
  cumplimientoNormativo: z.array(z.string()).optional(),
});

// Schema para Paso 5: Integraciones
export const paso5Schema = z.object({
  necesitaIntegraciones: z.boolean().default(false),
  sistemasIntegrar: z.array(z.string()).optional(),
  apisExternas: z.array(z.string()).optional(),
  tipoIntegracion: z.enum(["rest", "graphql", "soap", "websockets", "otro"]).optional(),
  detallesIntegracion: z.string().optional(),
});

// Schema para Paso 6: Diseño
export const paso6Schema = z.object({
  tieneDiseno: z.boolean().default(false),
  tipoDiseno: z.enum(["completo", "wireframes", "referencias", "ninguno"]).optional(),
  preferenciaEstilo: z.array(z.string()).optional(),
  brandingExistente: z.boolean().default(false),
  necesitaUXUI: z.boolean().default(false),
  comentariosDiseno: z.string().optional(),
});

// Schema para Paso 7: Presupuesto y Tiempos
export const paso7Schema = z.object({
  presupuestoEstimado: z.enum(["menos-10k", "10k-25k", "25k-50k", "50k-100k", "100k+"]).optional(),
  presupuestoFlexible: z.boolean().default(false),
  tiempoEstimado: z.enum(["1-3meses", "3-6meses", "6-12meses", "12meses+"], {
    message: "Selecciona un tiempo estimado",
  }),
  fechaInicio: z.string().optional(),
  prioridad: z.enum(["baja", "media", "alta", "urgente"], {
    message: "Selecciona una prioridad",
  }),
  observacionesAdicionales: z.string().optional(),
});

// Schema completo del formulario
export const formularioCompletoSchema = z.object({
  paso0: paso0Schema,
  paso1: paso1Schema,
  paso2: paso2Schema,
  paso3: paso3Schema,
  paso4: paso4Schema,
  paso5: paso5Schema,
  paso6: paso6Schema,
  paso7: paso7Schema,
});

// Tipos derivados de los schemas
export type Paso0Data = z.infer<typeof paso0Schema>;
export type Paso1Data = z.infer<typeof paso1Schema>;
export type Paso2Data = z.infer<typeof paso2Schema>;
export type Paso3Data = z.infer<typeof paso3Schema>;
export type Paso4Data = z.infer<typeof paso4Schema>;
export type Paso5Data = z.infer<typeof paso5Schema>;
export type Paso6Data = z.infer<typeof paso6Schema>;
export type Paso7Data = z.infer<typeof paso7Schema>;
export type FormularioCompleto = z.infer<typeof formularioCompletoSchema>;
