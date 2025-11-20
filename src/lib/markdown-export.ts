import type {
  Plataforma,
  TipoMoneda,
  EscalaUsuarios,
  EstadoCotizacion,
} from '@/app/generated/prisma';

// Tipo para la cotización completa con todas las relaciones
type CotizacionCompleta = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  nombreCliente: string;
  emailCliente: string;
  empresaCliente: string | null;
  telefonoCliente: string | null;
  estado: EstadoCotizacion;
  notasInternas: string | null;
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

// Mapeos de enums a etiquetas legibles
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
  PROGRESSIVE_WEB_APP: 'Progressive Web App (PWA)',
};

const escalaUsuariosLabels: Record<EscalaUsuarios, string> = {
  PEQUENA: 'Pequeña (1-50 usuarios)',
  MEDIANA: 'Mediana (51-500 usuarios)',
  GRANDE: 'Grande (501-5000 usuarios)',
  MUY_GRANDE: 'Muy Grande (5000+ usuarios)',
};

const monedaLabels: Record<TipoMoneda, string> = {
  USD: 'Dólar estadounidense',
  EUR: 'Euro',
  MXN: 'Peso mexicano',
  COP: 'Peso colombiano',
  ARS: 'Peso argentino',
  CLP: 'Peso chileno',
  PEN: 'Sol peruano',
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

/**
 * Convierte una cotización completa a formato Markdown
 */
export function cotizacionToMarkdown(cotizacion: CotizacionCompleta): string {
  const lines: string[] = [];

  // Encabezado principal
  lines.push(`# Cotización - ${cotizacion.nombreCliente}`);
  lines.push('');
  lines.push(`**ID:** ${cotizacion.id}`);
  lines.push(`**Estado:** ${estadoLabels[cotizacion.estado]}`);
  lines.push(`**Fecha de creación:** ${formatDate(cotizacion.createdAt)}`);
  lines.push(`**Última actualización:** ${formatDate(cotizacion.updatedAt)}`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // Información del Cliente
  lines.push('## 📋 Información del Cliente');
  lines.push('');
  lines.push(`- **Nombre:** ${cotizacion.nombreCliente}`);
  lines.push(`- **Email:** ${cotizacion.emailCliente}`);

  if (cotizacion.empresaCliente) {
    lines.push(`- **Empresa:** ${cotizacion.empresaCliente}`);
  }

  if (cotizacion.telefonoCliente) {
    lines.push(`- **Teléfono:** ${cotizacion.telefonoCliente}`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');

  // 1. Objetivos y Visión
  if (cotizacion.objetivosVision) {
    lines.push('## 1. 🎯 Objetivos y Visión del Proyecto');
    lines.push('');

    lines.push('### Problema Principal');
    lines.push('');
    lines.push(cotizacion.objetivosVision.problemaPrincipal);
    lines.push('');

    lines.push('### Objetivo Principal');
    lines.push('');
    lines.push(cotizacion.objetivosVision.objetivoPrincipal);
    lines.push('');

    if (cotizacion.objetivosVision.procesoActual) {
      lines.push('### Proceso Actual');
      lines.push('');
      lines.push(cotizacion.objetivosVision.procesoActual);
      lines.push('');
    }

    if (cotizacion.objetivosVision.competenciaReferencia) {
      lines.push('### Competencia / Referencias');
      lines.push('');
      lines.push(cotizacion.objetivosVision.competenciaReferencia);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // 2. Usuarios y Roles
  if (cotizacion.usuariosRoles) {
    lines.push('## 2. 👥 Usuarios y Roles');
    lines.push('');

    lines.push('### Usuarios Finales');
    lines.push('');
    lines.push(cotizacion.usuariosRoles.usuariosFinales);
    lines.push('');

    if (cotizacion.usuariosRoles.escalaUsuarios) {
      lines.push('### Escala de Usuarios');
      lines.push('');
      lines.push(`**${escalaUsuariosLabels[cotizacion.usuariosRoles.escalaUsuarios]}**`);
      lines.push('');
    }

    if (cotizacion.usuariosRoles.cantidadUsuarios) {
      lines.push('### Cantidad Estimada');
      lines.push('');
      lines.push(cotizacion.usuariosRoles.cantidadUsuarios);
      lines.push('');
    }

    if (cotizacion.usuariosRoles.tiposRoles) {
      lines.push('### Tipos de Roles');
      lines.push('');
      lines.push(cotizacion.usuariosRoles.tiposRoles);
      lines.push('');
    }

    if (cotizacion.usuariosRoles.descripcionRoles) {
      lines.push('### Descripción de Roles');
      lines.push('');
      lines.push(cotizacion.usuariosRoles.descripcionRoles);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // 3. Alcance y Funcionalidades
  if (cotizacion.alcanceFuncionalidades) {
    lines.push('## 3. 🔧 Alcance y Funcionalidades');
    lines.push('');

    lines.push('### Funcionalidades Clave');
    lines.push('');
    lines.push(cotizacion.alcanceFuncionalidades.funcionalidadesClave);
    lines.push('');

    lines.push('### Flujos Principales');
    lines.push('');
    lines.push(cotizacion.alcanceFuncionalidades.flujosPrincipales);
    lines.push('');

    if (cotizacion.alcanceFuncionalidades.funcionalidadesFase1) {
      lines.push('### Fase 1 (MVP)');
      lines.push('');
      lines.push(cotizacion.alcanceFuncionalidades.funcionalidadesFase1);
      lines.push('');
    }

    if (cotizacion.alcanceFuncionalidades.funcionalidadesFase2) {
      lines.push('### Fase 2 (Futuro)');
      lines.push('');
      lines.push(cotizacion.alcanceFuncionalidades.funcionalidadesFase2);
      lines.push('');
    }

    if (cotizacion.alcanceFuncionalidades.fueraDeAlcance) {
      lines.push('### Fuera de Alcance');
      lines.push('');
      lines.push(cotizacion.alcanceFuncionalidades.fueraDeAlcance);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // 4. Requerimientos Técnicos
  if (cotizacion.requerimientosTecnicos) {
    lines.push('## 4. 💻 Requerimientos Técnicos');
    lines.push('');

    if (cotizacion.requerimientosTecnicos.plataformas.length > 0) {
      lines.push('### Plataformas');
      lines.push('');
      cotizacion.requerimientosTecnicos.plataformas.forEach((plataforma) => {
        lines.push(`- ${plataformaLabels[plataforma]}`);
      });
      lines.push('');
    }

    if (cotizacion.requerimientosTecnicos.detallesPlataforma) {
      lines.push('### Detalles de Plataforma');
      lines.push('');
      lines.push(cotizacion.requerimientosTecnicos.detallesPlataforma);
      lines.push('');
    }

    if (cotizacion.requerimientosTecnicos.hosting) {
      lines.push('### Hosting');
      lines.push('');
      lines.push(cotizacion.requerimientosTecnicos.hosting);
      lines.push('');
    }

    if (cotizacion.requerimientosTecnicos.tecnologias) {
      lines.push('### Tecnologías Preferidas');
      lines.push('');
      lines.push(cotizacion.requerimientosTecnicos.tecnologias);
      lines.push('');
    }

    if (cotizacion.requerimientosTecnicos.requisitoRendimiento) {
      lines.push('### Requisitos de Rendimiento');
      lines.push('');
      lines.push(cotizacion.requerimientosTecnicos.requisitoRendimiento);
      lines.push('');
    }

    if (cotizacion.requerimientosTecnicos.requisitoSeguridad) {
      lines.push('### Requisitos de Seguridad');
      lines.push('');
      lines.push(cotizacion.requerimientosTecnicos.requisitoSeguridad);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // 5. Integraciones
  if (cotizacion.integraciones) {
    const hasAnyIntegration =
      cotizacion.integraciones.sistemasExternos ||
      cotizacion.integraciones.apisTerceros ||
      cotizacion.integraciones.migracionDatos ||
      cotizacion.integraciones.reportes;

    if (hasAnyIntegration) {
      lines.push('## 5. 🔌 Integraciones y Datos');
      lines.push('');

      if (cotizacion.integraciones.sistemasExternos) {
        lines.push('### Sistemas Externos');
        lines.push('');
        lines.push(cotizacion.integraciones.sistemasExternos);
        lines.push('');
      }

      if (cotizacion.integraciones.apisTerceros) {
        lines.push('### APIs de Terceros');
        lines.push('');
        lines.push(cotizacion.integraciones.apisTerceros);
        lines.push('');
      }

      if (cotizacion.integraciones.migracionDatos) {
        lines.push('### Migración de Datos');
        lines.push('');
        lines.push(cotizacion.integraciones.migracionDatos);
        lines.push('');
      }

      if (cotizacion.integraciones.reportes) {
        lines.push('### Reportes y Dashboards');
        lines.push('');
        lines.push(cotizacion.integraciones.reportes);
        lines.push('');
      }

      lines.push('---');
      lines.push('');
    }
  }

  // 6. Diseño UX
  if (cotizacion.disenoUX) {
    lines.push('## 6. 🎨 Diseño (UI/UX)');
    lines.push('');

    lines.push('### Estado del Diseño');
    lines.push('');
    lines.push(`- **Tiene diseño visual:** ${cotizacion.disenoUX.tieneDisenoVisual ? 'Sí' : 'No'}`);
    lines.push(`- **Tiene guía de estilo:** ${cotizacion.disenoUX.tieneGuiaEstilo ? 'Sí' : 'No'}`);
    lines.push(`- **Requiere diseño:** ${cotizacion.disenoUX.requiereDiseno ? 'Sí' : 'No'}`);
    lines.push('');

    if (cotizacion.disenoUX.disenoVisualUrl) {
      lines.push('### URL de Diseño');
      lines.push('');
      lines.push(`[${cotizacion.disenoUX.disenoVisualUrl}](${cotizacion.disenoUX.disenoVisualUrl})`);
      lines.push('');
    }

    if (cotizacion.disenoUX.guiaEstilo) {
      lines.push('### Guía de Estilo');
      lines.push('');
      lines.push(cotizacion.disenoUX.guiaEstilo);
      lines.push('');
    }

    if (cotizacion.disenoUX.entregables) {
      lines.push('### Entregables Esperados');
      lines.push('');
      lines.push(cotizacion.disenoUX.entregables);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // 7. Presupuesto y Tiempos
  if (cotizacion.presupuestoTiempos) {
    lines.push('## 7. 💰 Presupuesto y Tiempos');
    lines.push('');

    if (cotizacion.presupuestoTiempos.tienePresupuesto) {
      lines.push('### Rango de Presupuesto');
      lines.push('');

      const moneda = cotizacion.presupuestoTiempos.moneda || 'USD';
      const symbol = monedaSymbols[moneda];
      const monedaLabel = monedaLabels[moneda];

      if (cotizacion.presupuestoTiempos.presupuestoMin && cotizacion.presupuestoTiempos.presupuestoMax) {
        const min = Number(cotizacion.presupuestoTiempos.presupuestoMin).toLocaleString();
        const max = Number(cotizacion.presupuestoTiempos.presupuestoMax).toLocaleString();
        lines.push(`**${symbol}${min} - ${symbol}${max} ${moneda}** (${monedaLabel})`);
      } else if (cotizacion.presupuestoTiempos.presupuestoMin) {
        const min = Number(cotizacion.presupuestoTiempos.presupuestoMin).toLocaleString();
        lines.push(`**${symbol}${min}+ ${moneda}** (${monedaLabel})`);
      }

      lines.push('');
    }

    if (cotizacion.presupuestoTiempos.tieneFechaLimite && cotizacion.presupuestoTiempos.fechaLimite) {
      lines.push('### Fecha Límite');
      lines.push('');
      lines.push(`**${formatDate(cotizacion.presupuestoTiempos.fechaLimite)}**`);
      lines.push('');

      if (cotizacion.presupuestoTiempos.razonFechaLimite) {
        lines.push('#### Razón de la Fecha Límite');
        lines.push('');
        lines.push(cotizacion.presupuestoTiempos.razonFechaLimite);
        lines.push('');
      }
    }

    if (cotizacion.presupuestoTiempos.planMantenimiento) {
      lines.push('### Plan de Mantenimiento');
      lines.push('');
      lines.push(cotizacion.presupuestoTiempos.planMantenimiento);
      lines.push('');
    }

    if (cotizacion.presupuestoTiempos.nombreDecidor) {
      lines.push('### Persona de Contacto');
      lines.push('');
      lines.push(`- **Nombre:** ${cotizacion.presupuestoTiempos.nombreDecidor}`);

      if (cotizacion.presupuestoTiempos.cargoDecidor) {
        lines.push(`- **Cargo:** ${cotizacion.presupuestoTiempos.cargoDecidor}`);
      }

      if (cotizacion.presupuestoTiempos.contactoDecidor) {
        lines.push(`- **Contacto:** ${cotizacion.presupuestoTiempos.contactoDecidor}`);
      }

      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  // Notas Internas
  if (cotizacion.notasInternas) {
    lines.push('## 📝 Notas Internas');
    lines.push('');
    lines.push('> **Nota:** Esta sección es solo visible para el equipo interno.');
    lines.push('');
    lines.push(cotizacion.notasInternas);
    lines.push('');
  }

  // Footer
  lines.push('---');
  lines.push('');
  lines.push('*Documento generado automáticamente el ' + formatDate(new Date()) + '*');

  return lines.join('\n');
}

/**
 * Formatea una fecha a un string legible
 */
function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
