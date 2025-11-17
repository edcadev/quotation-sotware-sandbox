import type { FormularioCompleto } from "@/components/FormularioCotizacion/schemas";
import type { CreateCotizacionInput } from "@/lib/validations/cotizacion";
import type { Plataforma, EscalaUsuarios } from "@/app/generated/prisma";

/**
 * Mapea los datos del formulario del cliente al formato esperado por la API
 */
export function mapFormularioToCotizacion(
  formData: FormularioCompleto
): CreateCotizacionInput {
  // Mapear escala de usuarios
  const mapEscalaUsuarios = (rango: string): EscalaUsuarios | undefined => {
    switch (rango) {
      case "1-10":
        return "PEQUENA";
      case "11-50":
        return "PEQUENA";
      case "51-200":
        return "MEDIANA";
      case "201-1000":
        return "GRANDE";
      case "1000+":
        return "MUY_GRANDE";
      default:
        return undefined;
    }
  };

  // Mapear plataformas
  const mapPlataformas = (plataformas: string[]): Plataforma[] => {
    const plataformaMap: Record<string, Plataforma> = {
      web: "WEB",
      "mobile-ios": "MOBILE_IOS",
      "mobile-android": "MOBILE_ANDROID",
      "desktop-windows": "DESKTOP_WINDOWS",
      "desktop-mac": "DESKTOP_MAC",
      "desktop-linux": "DESKTOP_LINUX",
      pwa: "PROGRESSIVE_WEB_APP",
    };

    return plataformas
      .map((p) => plataformaMap[p])
      .filter((p): p is Plataforma => p !== undefined);
  };

  // Construir el objeto de cotización
  const cotizacion: CreateCotizacionInput = {
    // Datos del cliente (Paso 0)
    nombreCliente: formData.paso0.nombreCliente,
    emailCliente: formData.paso0.emailCliente,
    empresaCliente: formData.paso0.empresaCliente || undefined,
    telefonoCliente: formData.paso0.telefonoCliente || undefined,
    estado: "ENVIADA", // El cliente envía la solicitud

    // ObjetivosVision (Paso 1)
    objetivosVision: {
      problemaPrincipal: formData.paso1.descripcion,
      objetivoPrincipal: formData.paso1.objetivoPrincipal,
      procesoActual: `Proyecto: ${formData.paso1.nombreProyecto}. Tipo: ${formData.paso1.tipoSoftware}. Industria: ${formData.paso1.industria}`,
      competenciaReferencia: undefined,
    },

    // UsuariosRoles (Paso 2)
    usuariosRoles: {
      usuariosFinales: formData.paso2.tiposUsuario.join(", "),
      tiposRoles: formData.paso2.tiposUsuario.join(", "),
      descripcionRoles: formData.paso2.perfilesUsuario || undefined,
      cantidadUsuarios: formData.paso2.numeroUsuarios,
      escalaUsuarios: mapEscalaUsuarios(formData.paso2.numeroUsuarios),
    },

    // AlcanceFuncionalidades (Paso 3)
    alcanceFuncionalidades: {
      funcionalidadesClave: formData.paso3.funcionalidadesCore.join(", "),
      flujosPrincipales: `Complejidad: ${formData.paso3.nivelComplejidad}`,
      funcionalidadesFase1: formData.paso3.funcionalidadesCore.join(", "),
      funcionalidadesFase2: formData.paso3.funcionalidadesOpcionales?.join(", ") || undefined,
      fueraDeAlcance: formData.paso3.modulosPersonalizados || undefined,
    },

    // RequerimientosTecnicos (Paso 4)
    requerimientosTecnicos: {
      plataformas: mapPlataformas(formData.paso4.plataformas),
      detallesPlataforma: [
        formData.paso4.navegadores?.length
          ? `Navegadores: ${formData.paso4.navegadores.join(", ")}`
          : "",
        formData.paso4.dispositivosMoviles?.length
          ? `Dispositivos: ${formData.paso4.dispositivosMoviles.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(". "),
      hosting: undefined,
      tecnologias: undefined,
      requisitoRendimiento: formData.paso4.requisitosRendimiento || undefined,
      requisitoSeguridad: [
        formData.paso4.seguridadRequerida?.join(", "),
        formData.paso4.cumplimientoNormativo?.length
          ? `Normativas: ${formData.paso4.cumplimientoNormativo.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(". ") || undefined,
    },

    // Integraciones (Paso 5)
    integraciones: {
      sistemasExternos: formData.paso5.sistemasIntegrar?.join(", ") || undefined,
      apisTerceros: formData.paso5.apisExternas?.join(", ") || undefined,
      migracionDatos: formData.paso5.detallesIntegracion || undefined,
      reportes: formData.paso5.necesitaIntegraciones
        ? `Tipo: ${formData.paso5.tipoIntegracion || "No especificado"}`
        : undefined,
    },

    // DisenoUX (Paso 6)
    disenoUX: {
      tieneDisenoVisual: formData.paso6.tieneDiseno,
      disenoVisualUrl: undefined,
      tieneGuiaEstilo: formData.paso6.brandingExistente,
      guiaEstilo: formData.paso6.comentariosDiseno || undefined,
      requiereDiseno: formData.paso6.necesitaUXUI,
      entregables: [
        formData.paso6.tipoDiseno ? `Tipo: ${formData.paso6.tipoDiseno}` : "",
        formData.paso6.preferenciaEstilo?.length
          ? `Estilos: ${formData.paso6.preferenciaEstilo.join(", ")}`
          : "",
      ]
        .filter(Boolean)
        .join(". ") || undefined,
    },

    // PresupuestoTiempos (Paso 7)
    presupuestoTiempos: {
      tienePresupuesto: formData.paso7.presupuestoEstimado !== undefined,
      presupuestoMin: undefined, // No se captura en el formulario
      presupuestoMax: undefined, // No se captura en el formulario
      moneda: undefined, // Podría asumirse USD por defecto
      tieneFechaLimite: formData.paso7.fechaInicio !== undefined && formData.paso7.fechaInicio !== "",
      fechaLimite: formData.paso7.fechaInicio
        ? new Date(formData.paso7.fechaInicio).toISOString()
        : undefined,
      razonFechaLimite: `Prioridad: ${formData.paso7.prioridad}. Tiempo estimado: ${formData.paso7.tiempoEstimado}`,
      planMantenimiento: formData.paso7.observacionesAdicionales || undefined,
      nombreDecidor: formData.paso0.nombreCliente,
      cargoDecidor: undefined,
      contactoDecidor: formData.paso0.emailCliente,
    },

    // Notas internas con información adicional del formulario
    notasInternas: [
      `Presupuesto estimado: ${formData.paso7.presupuestoEstimado || "No especificado"}`,
      `Flexible: ${formData.paso7.presupuestoFlexible ? "Sí" : "No"}`,
      `Accesibilidad: ${formData.paso2.necesidadesAccesibilidad ? "Sí" : "No"}`,
      formData.paso2.detallesAccesibilidad
        ? `Detalles accesibilidad: ${formData.paso2.detallesAccesibilidad}`
        : "",
    ]
      .filter(Boolean)
      .join(" | "),
  };

  return cotizacion;
}
