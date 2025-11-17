import { z } from 'zod';
import type {
  EstadoCotizacion,
  Plataforma,
  TipoMoneda,
  EscalaUsuarios
} from '@/app/generated/prisma';

// Enum schemas
export const EstadoCotizacionSchema = z.enum([
  'BORRADOR',
  'ENVIADA',
  'EN_REVISION',
  'APROBADA',
  'RECHAZADA',
  'CANCELADA',
]);

export const PlataformaSchema = z.enum([
  'WEB',
  'MOBILE_IOS',
  'MOBILE_ANDROID',
  'DESKTOP_WINDOWS',
  'DESKTOP_MAC',
  'DESKTOP_LINUX',
  'PROGRESSIVE_WEB_APP',
]);

export const TipoMonedaSchema = z.enum([
  'USD',
  'EUR',
  'MXN',
  'COP',
  'ARS',
  'CLP',
  'PEN',
]);

export const EscalaUsuariosSchema = z.enum([
  'PEQUENA',
  'MEDIANA',
  'GRANDE',
  'MUY_GRANDE',
]);

// Nested object schemas
export const ObjetivosVisionSchema = z.object({
  problemaPrincipal: z.string().min(1, 'El problema principal es requerido'),
  objetivoPrincipal: z.string().min(1, 'El objetivo principal es requerido'),
  procesoActual: z.string().optional(),
  competenciaReferencia: z.string().optional(),
}).optional();

export const UsuariosRolesSchema = z.object({
  usuariosFinales: z.string().min(1, 'Los usuarios finales son requeridos'),
  tiposRoles: z.string().optional(),
  descripcionRoles: z.string().optional(),
  cantidadUsuarios: z.string().optional(),
  escalaUsuarios: EscalaUsuariosSchema.optional(),
}).optional();

export const AlcanceFuncionalidadesSchema = z.object({
  funcionalidadesClave: z.string().min(1, 'Las funcionalidades clave son requeridas'),
  flujosPrincipales: z.string().min(1, 'Los flujos principales son requeridos'),
  funcionalidadesFase1: z.string().optional(),
  funcionalidadesFase2: z.string().optional(),
  fueraDeAlcance: z.string().optional(),
}).optional();

export const RequerimientosTecnicosSchema = z.object({
  plataformas: z.array(PlataformaSchema),
  detallesPlataforma: z.string().optional(),
  hosting: z.string().optional(),
  tecnologias: z.string().optional(),
  requisitoRendimiento: z.string().optional(),
  requisitoSeguridad: z.string().optional(),
}).optional();

export const IntegracionesSchema = z.object({
  sistemasExternos: z.string().optional(),
  apisTerceros: z.string().optional(),
  migracionDatos: z.string().optional(),
  reportes: z.string().optional(),
}).optional();

export const DisenoUXSchema = z.object({
  tieneDisenoVisual: z.boolean().default(false),
  disenoVisualUrl: z.string().optional(),
  tieneGuiaEstilo: z.boolean().default(false),
  guiaEstilo: z.string().optional(),
  requiereDiseno: z.boolean().default(false),
  entregables: z.string().optional(),
}).optional();

export const PresupuestoTiemposSchema = z.object({
  tienePresupuesto: z.boolean().default(false),
  presupuestoMin: z.number().positive().optional(),
  presupuestoMax: z.number().positive().optional(),
  moneda: TipoMonedaSchema.optional(),
  tieneFechaLimite: z.boolean().default(false),
  fechaLimite: z.string().datetime().optional(),
  razonFechaLimite: z.string().optional(),
  planMantenimiento: z.string().optional(),
  nombreDecidor: z.string().optional(),
  cargoDecidor: z.string().optional(),
  contactoDecidor: z.string().optional(),
}).optional();

// Main cotizacion schema for creation
export const CreateCotizacionSchema = z.object({
  nombreCliente: z.string().min(1, 'El nombre del cliente es requerido'),
  emailCliente: z.string().email('Email inválido'),
  empresaCliente: z.string().optional(),
  telefonoCliente: z.string().optional(),
  estado: EstadoCotizacionSchema.default('BORRADOR'),
  notasInternas: z.string().optional(),
  objetivosVision: ObjetivosVisionSchema,
  usuariosRoles: UsuariosRolesSchema,
  alcanceFuncionalidades: AlcanceFuncionalidadesSchema,
  requerimientosTecnicos: RequerimientosTecnicosSchema,
  integraciones: IntegracionesSchema,
  disenoUX: DisenoUXSchema,
  presupuestoTiempos: PresupuestoTiemposSchema,
});

// Schema for updating cotizacion (all fields optional)
export const UpdateCotizacionSchema = z.object({
  nombreCliente: z.string().min(1).optional(),
  emailCliente: z.string().email().optional(),
  empresaCliente: z.string().optional(),
  telefonoCliente: z.string().optional(),
  estado: EstadoCotizacionSchema.optional(),
  notasInternas: z.string().optional(),
  objetivosVision: ObjetivosVisionSchema,
  usuariosRoles: UsuariosRolesSchema,
  alcanceFuncionalidades: AlcanceFuncionalidadesSchema,
  requerimientosTecnicos: RequerimientosTecnicosSchema,
  integraciones: IntegracionesSchema,
  disenoUX: DisenoUXSchema,
  presupuestoTiempos: PresupuestoTiemposSchema,
});

// Query params schema for listing
export const CotizacionesQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(10),
  estado: EstadoCotizacionSchema.optional(),
  search: z.string().optional(),
});

export type CreateCotizacionInput = z.infer<typeof CreateCotizacionSchema>;
export type UpdateCotizacionInput = z.infer<typeof UpdateCotizacionSchema>;
export type CotizacionesQuery = z.infer<typeof CotizacionesQuerySchema>;
