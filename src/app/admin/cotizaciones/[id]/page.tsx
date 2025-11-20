import { notFound } from 'next/navigation';
import Link from 'next/link';
import type {
  Cotizacion,
  EstadoCotizacion,
  Plataforma,
  TipoMoneda,
  EscalaUsuarios
} from '@/app/generated/prisma';

type CotizacionCompleta = Cotizacion & {
  objetivosVision: {
    problemaPrincipal: string;
    objetivoPrincipal: string;
    procesoActual: string | null;
    competenciaReferencia: string | null;
  } | null;
  usuariosRoles: {
    usuariosFinales: string;
    tiposRoles: string | null;
    descripcionRoles: string | null;
    cantidadUsuarios: string | null;
    escalaUsuarios: EscalaUsuarios | null;
  } | null;
  alcanceFuncionalidades: {
    funcionalidadesClave: string;
    flujosPrincipales: string;
    funcionalidadesFase1: string | null;
    funcionalidadesFase2: string | null;
    fueraDeAlcance: string | null;
  } | null;
  requerimientosTecnicos: {
    plataformas: Plataforma[];
    detallesPlataforma: string | null;
    hosting: string | null;
    tecnologias: string | null;
    requisitoRendimiento: string | null;
    requisitoSeguridad: string | null;
  } | null;
  integraciones: {
    sistemasExternos: string | null;
    apisTerceros: string | null;
    migracionDatos: string | null;
    reportes: string | null;
  } | null;
  disenoUX: {
    tieneDisenoVisual: boolean;
    disenoVisualUrl: string | null;
    tieneGuiaEstilo: boolean;
    guiaEstilo: string | null;
    requiereDiseno: boolean;
    entregables: string | null;
  } | null;
  presupuestoTiempos: {
    tienePresupuesto: boolean;
    presupuestoMin: any | null;
    presupuestoMax: any | null;
    moneda: TipoMoneda | null;
    tieneFechaLimite: boolean;
    fechaLimite: Date | null;
    razonFechaLimite: string | null;
    planMantenimiento: string | null;
    nombreDecidor: string | null;
    cargoDecidor: string | null;
    contactoDecidor: string | null;
  } | null;
};

async function getCotizacion(id: string): Promise<CotizacionCompleta | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/cotizaciones/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching cotizacion:', error);
    return null;
  }
}

const estadoColors: Record<EstadoCotizacion, string> = {
  BORRADOR: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  ENVIADA: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  EN_REVISION: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  APROBADA: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  RECHAZADA: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  CANCELADA: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
};

const estadoLabels: Record<EstadoCotizacion, string> = {
  BORRADOR: 'Borrador',
  ENVIADA: 'Enviada',
  EN_REVISION: 'En Revisión',
  APROBADA: 'Aprobada',
  RECHAZADA: 'Rechazada',
  CANCELADA: 'Cancelada',
};

const plataformaLabels: Record<Plataforma, string> = {
  WEB: 'Web',
  MOBILE_IOS: 'iOS',
  MOBILE_ANDROID: 'Android',
  DESKTOP_WINDOWS: 'Windows',
  DESKTOP_MAC: 'macOS',
  DESKTOP_LINUX: 'Linux',
  PROGRESSIVE_WEB_APP: 'PWA',
};

const escalaUsuariosLabels: Record<EscalaUsuarios, string> = {
  PEQUENA: 'Pequeña (1-50 usuarios)',
  MEDIANA: 'Mediana (51-500 usuarios)',
  GRANDE: 'Grande (501-5000 usuarios)',
  MUY_GRANDE: 'Muy Grande (5000+ usuarios)',
};

const monedaSymbols: Record<TipoMoneda, string> = {
  USD: '$',
  EUR: '€',
  MXN: '$',
  COP: '$',
  ARS: '$',
  CLP: '$',
  PEN: 'S/',
};

export default async function CotizacionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cotizacion = await getCotizacion(id);

  if (!cotizacion) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/admin"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 mb-2 inline-block"
              >
                ← Volver al dashboard
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Cotización #{cotizacion.id.slice(-8).toUpperCase()}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Creada el {new Date(cotizacion.createdAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  estadoColors[cotizacion.estado]
                }`}
              >
                {estadoLabels[cotizacion.estado]}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
              Editar
            </button>
            <a
              href={`/api/cotizaciones/${cotizacion.id}/export/markdown`}
              download
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-colors inline-flex items-center gap-2"
            >
              <span>📄</span>
              Exportar Markdown
            </a>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors">
              Exportar PDF
            </button>
            <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors">
              Enviar Email
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* Client Information */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Información del Cliente
              </h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Nombre</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">{cotizacion.nombreCliente}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                    <a href={`mailto:${cotizacion.emailCliente}`} className="text-blue-600 hover:text-blue-800">
                      {cotizacion.emailCliente}
                    </a>
                  </dd>
                </div>
                {cotizacion.empresaCliente && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Empresa</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{cotizacion.empresaCliente}</dd>
                  </div>
                )}
                {cotizacion.telefonoCliente && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono</dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">{cotizacion.telefonoCliente}</dd>
                  </div>
                )}
              </dl>
            </section>

            {/* 1. Objetivos y Visión */}
            {cotizacion.objetivosVision && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    1
                  </span>
                  Objetivos y Visión del Proyecto
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Problema Principal
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                      {cotizacion.objetivosVision.problemaPrincipal}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Objetivo Principal
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                      {cotizacion.objetivosVision.objetivoPrincipal}
                    </p>
                  </div>
                  {cotizacion.objetivosVision.procesoActual && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Proceso Actual
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.objetivosVision.procesoActual}
                      </p>
                    </div>
                  )}
                  {cotizacion.objetivosVision.competenciaReferencia && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Competencia / Referencias
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.objetivosVision.competenciaReferencia}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 2. Usuarios y Roles */}
            {cotizacion.usuariosRoles && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    2
                  </span>
                  Usuarios y Roles
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Usuarios Finales
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                      {cotizacion.usuariosRoles.usuariosFinales}
                    </p>
                  </div>
                  {cotizacion.usuariosRoles.escalaUsuarios && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Escala de Usuarios
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {escalaUsuariosLabels[cotizacion.usuariosRoles.escalaUsuarios]}
                      </p>
                    </div>
                  )}
                  {cotizacion.usuariosRoles.cantidadUsuarios && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Cantidad Estimada
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {cotizacion.usuariosRoles.cantidadUsuarios}
                      </p>
                    </div>
                  )}
                  {cotizacion.usuariosRoles.tiposRoles && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Tipos de Roles
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.usuariosRoles.tiposRoles}
                      </p>
                    </div>
                  )}
                  {cotizacion.usuariosRoles.descripcionRoles && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Descripción de Roles
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.usuariosRoles.descripcionRoles}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 3. Alcance y Funcionalidades */}
            {cotizacion.alcanceFuncionalidades && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    3
                  </span>
                  Alcance y Funcionalidades
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Funcionalidades Clave
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                      {cotizacion.alcanceFuncionalidades.funcionalidadesClave}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      Flujos Principales
                    </h3>
                    <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                      {cotizacion.alcanceFuncionalidades.flujosPrincipales}
                    </p>
                  </div>
                  {cotizacion.alcanceFuncionalidades.funcionalidadesFase1 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Fase 1 (MVP)
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.alcanceFuncionalidades.funcionalidadesFase1}
                      </p>
                    </div>
                  )}
                  {cotizacion.alcanceFuncionalidades.funcionalidadesFase2 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Fase 2 (Futuro)
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.alcanceFuncionalidades.funcionalidadesFase2}
                      </p>
                    </div>
                  )}
                  {cotizacion.alcanceFuncionalidades.fueraDeAlcance && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Fuera de Alcance
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.alcanceFuncionalidades.fueraDeAlcance}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 4. Requerimientos Técnicos */}
            {cotizacion.requerimientosTecnicos && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    4
                  </span>
                  Requerimientos Técnicos
                </h2>
                <div className="space-y-4">
                  {cotizacion.requerimientosTecnicos.plataformas.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Plataformas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cotizacion.requerimientosTecnicos.plataformas.map((plataforma) => (
                          <span
                            key={plataforma}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                          >
                            {plataformaLabels[plataforma]}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {cotizacion.requerimientosTecnicos.detallesPlataforma && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Detalles de Plataforma
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.requerimientosTecnicos.detallesPlataforma}
                      </p>
                    </div>
                  )}
                  {cotizacion.requerimientosTecnicos.hosting && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Hosting
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.requerimientosTecnicos.hosting}
                      </p>
                    </div>
                  )}
                  {cotizacion.requerimientosTecnicos.tecnologias && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Tecnologías Preferidas
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.requerimientosTecnicos.tecnologias}
                      </p>
                    </div>
                  )}
                  {cotizacion.requerimientosTecnicos.requisitoRendimiento && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Requisitos de Rendimiento
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.requerimientosTecnicos.requisitoRendimiento}
                      </p>
                    </div>
                  )}
                  {cotizacion.requerimientosTecnicos.requisitoSeguridad && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Requisitos de Seguridad
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.requerimientosTecnicos.requisitoSeguridad}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 5. Integraciones */}
            {cotizacion.integraciones && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    5
                  </span>
                  Integraciones y Datos
                </h2>
                <div className="space-y-4">
                  {cotizacion.integraciones.sistemasExternos && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Sistemas Externos
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.integraciones.sistemasExternos}
                      </p>
                    </div>
                  )}
                  {cotizacion.integraciones.apisTerceros && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        APIs de Terceros
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.integraciones.apisTerceros}
                      </p>
                    </div>
                  )}
                  {cotizacion.integraciones.migracionDatos && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Migración de Datos
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.integraciones.migracionDatos}
                      </p>
                    </div>
                  )}
                  {cotizacion.integraciones.reportes && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Reportes y Dashboards
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.integraciones.reportes}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 6. Diseño UX */}
            {cotizacion.disenoUX && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    6
                  </span>
                  Diseño (UI/UX)
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Diseño Visual
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cotizacion.disenoUX.tieneDisenoVisual ? 'Sí' : 'No'}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Guía de Estilo
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cotizacion.disenoUX.tieneGuiaEstilo ? 'Sí' : 'No'}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Requiere Diseño
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cotizacion.disenoUX.requiereDiseno ? 'Sí' : 'No'}
                      </p>
                    </div>
                  </div>
                  {cotizacion.disenoUX.disenoVisualUrl && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        URL de Diseño
                      </h3>
                      <a
                        href={cotizacion.disenoUX.disenoVisualUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-800 underline"
                      >
                        {cotizacion.disenoUX.disenoVisualUrl}
                      </a>
                    </div>
                  )}
                  {cotizacion.disenoUX.guiaEstilo && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Guía de Estilo
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.disenoUX.guiaEstilo}
                      </p>
                    </div>
                  )}
                  {cotizacion.disenoUX.entregables && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Entregables Esperados
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.disenoUX.entregables}
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 7. Presupuesto y Tiempos */}
            {cotizacion.presupuestoTiempos && (
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">
                    7
                  </span>
                  Presupuesto y Tiempos
                </h2>
                <div className="space-y-4">
                  {cotizacion.presupuestoTiempos.tienePresupuesto && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Rango de Presupuesto
                      </h3>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {cotizacion.presupuestoTiempos.presupuestoMin &&
                          `${monedaSymbols[cotizacion.presupuestoTiempos.moneda || 'USD']}${Number(cotizacion.presupuestoTiempos.presupuestoMin).toLocaleString()}`}
                        {cotizacion.presupuestoTiempos.presupuestoMax &&
                          ` - ${monedaSymbols[cotizacion.presupuestoTiempos.moneda || 'USD']}${Number(cotizacion.presupuestoTiempos.presupuestoMax).toLocaleString()}`}
                        {' '}
                        {cotizacion.presupuestoTiempos.moneda || 'USD'}
                      </p>
                    </div>
                  )}
                  {cotizacion.presupuestoTiempos.tieneFechaLimite && cotizacion.presupuestoTiempos.fechaLimite && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Fecha Límite
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {new Date(cotizacion.presupuestoTiempos.fechaLimite).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  )}
                  {cotizacion.presupuestoTiempos.razonFechaLimite && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Razón de la Fecha Límite
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.presupuestoTiempos.razonFechaLimite}
                      </p>
                    </div>
                  )}
                  {cotizacion.presupuestoTiempos.planMantenimiento && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Plan de Mantenimiento
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
                        {cotizacion.presupuestoTiempos.planMantenimiento}
                      </p>
                    </div>
                  )}
                  {cotizacion.presupuestoTiempos.nombreDecidor && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Persona de Contacto
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-white">
                        {cotizacion.presupuestoTiempos.nombreDecidor}
                        {cotizacion.presupuestoTiempos.cargoDecidor &&
                          ` - ${cotizacion.presupuestoTiempos.cargoDecidor}`}
                      </p>
                      {cotizacion.presupuestoTiempos.contactoDecidor && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {cotizacion.presupuestoTiempos.contactoDecidor}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1 space-y-6">
            {/* Internal Notes */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Notas Internas
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Solo visible para el equipo
              </p>
              {cotizacion.notasInternas ? (
                <div className="mb-4">
                  <p className="text-sm text-gray-900 dark:text-white whitespace-pre-wrap bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    {cotizacion.notasInternas}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                  No hay notas internas aún
                </p>
              )}
              <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors text-sm">
                Editar Notas
              </button>
            </section>

            {/* Metadata */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Información
              </h2>
              <dl className="space-y-3">
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">ID</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white font-mono">
                    {cotizacion.id}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">Creada</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                    {new Date(cotizacion.createdAt).toLocaleString('es-ES')}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-gray-500 dark:text-gray-400">Actualizada</dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                    {new Date(cotizacion.updatedAt).toLocaleString('es-ES')}
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
