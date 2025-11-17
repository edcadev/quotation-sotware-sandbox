/**
 * Tests de ejemplo para las validaciones
 *
 * Para ejecutar estos tests, necesitas instalar:
 * npm install -D vitest @vitest/ui
 *
 * Y añadir en package.json:
 * "scripts": {
 *   "test": "vitest",
 *   "test:ui": "vitest --ui"
 * }
 */

import { describe, it, expect } from "vitest";
import {
  emailSchema,
  telefonoSchema,
  urlSchema,
  fechaFuturaSchema,
  rangoNumericoSchema,
  textoConLongitudSchema,
  nifCifSchema,
  paso1Schema,
  paso2Schema,
  paso3Schema,
  paso4Schema,
  paso5Schema,
  paso6Schema,
  paso7Schema,
  contactoSchema,
  validarPaso,
  esEmailValido,
  esFechaFutura,
  esTelefonoValido,
} from "../validaciones";

// ============================================================================
// VALIDACIONES BÁSICAS
// ============================================================================

describe("Email Schema", () => {
  it("debería validar emails correctos", () => {
    expect(emailSchema.parse("usuario@ejemplo.com")).toBe("usuario@ejemplo.com");
    expect(emailSchema.parse("test.user@empresa.co.uk")).toBe("test.user@empresa.co.uk");
  });

  it("debería convertir a minúsculas", () => {
    expect(emailSchema.parse("Usuario@EJEMPLO.COM")).toBe("usuario@ejemplo.com");
  });

  it("debería rechazar emails inválidos", () => {
    expect(() => emailSchema.parse("no-es-email")).toThrow("Email inválido");
    expect(() => emailSchema.parse("@ejemplo.com")).toThrow();
    expect(() => emailSchema.parse("usuario@")).toThrow();
  });

  it("debería rechazar emails vacíos", () => {
    expect(() => emailSchema.parse("")).toThrow("El email es obligatorio");
  });
});

describe("Teléfono Schema", () => {
  it("debería validar teléfonos correctos", () => {
    expect(telefonoSchema.parse("+34612345678")).toBeTruthy();
    expect(telefonoSchema.parse("612345678")).toBeTruthy();
    expect(telefonoSchema.parse("+1-555-123-4567")).toBeTruthy();
    expect(telefonoSchema.parse("+44 20 7123 4567")).toBeTruthy();
  });

  it("debería rechazar teléfonos inválidos", () => {
    expect(() => telefonoSchema.parse("abc")).toThrow();
    expect(() => telefonoSchema.parse("123")).toThrow();
  });

  it("debería aceptar vacío (opcional)", () => {
    expect(telefonoSchema.parse("")).toBeTruthy();
  });
});

describe("URL Schema", () => {
  it("debería validar URLs correctas", () => {
    expect(urlSchema.parse("https://ejemplo.com")).toBeTruthy();
    expect(urlSchema.parse("http://ejemplo.com")).toBeTruthy();
    expect(urlSchema.parse("https://sub.ejemplo.com/path?query=value")).toBeTruthy();
  });

  it("debería rechazar URLs inválidas", () => {
    expect(() => urlSchema.parse("ejemplo.com")).toThrow("URL inválida");
    expect(() => urlSchema.parse("htp://ejemplo.com")).toThrow();
  });

  it("debería aceptar vacío (opcional)", () => {
    expect(urlSchema.parse("")).toBeTruthy();
  });
});

describe("Fecha Futura Schema", () => {
  it("debería validar fechas futuras", () => {
    const futuro = new Date();
    futuro.setDate(futuro.getDate() + 10);
    const fechaString = futuro.toISOString().split("T")[0];

    expect(fechaFuturaSchema.parse(fechaString)).toBeTruthy();
  });

  it("debería validar fecha de hoy", () => {
    const hoy = new Date().toISOString().split("T")[0];
    expect(fechaFuturaSchema.parse(hoy)).toBeTruthy();
  });

  it("debería rechazar fechas pasadas", () => {
    expect(() => fechaFuturaSchema.parse("2020-01-01")).toThrow(
      "La fecha debe ser hoy o en el futuro"
    );
  });

  it("debería aceptar vacío (opcional)", () => {
    expect(fechaFuturaSchema.parse("")).toBeTruthy();
  });
});

describe("Rango Numérico Schema", () => {
  it("debería validar números en rango", () => {
    const schema = rangoNumericoSchema(1, 100);
    expect(schema.parse(50)).toBe(50);
    expect(schema.parse(1)).toBe(1);
    expect(schema.parse(100)).toBe(100);
  });

  it("debería rechazar números fuera de rango", () => {
    const schema = rangoNumericoSchema(1, 100);
    expect(() => schema.parse(0)).toThrow("El valor mínimo es 1");
    expect(() => schema.parse(101)).toThrow("El valor máximo es 100");
  });
});

describe("Texto con Longitud Schema", () => {
  it("debería validar textos en rango", () => {
    const schema = textoConLongitudSchema(3, 10, "El texto");
    expect(schema.parse("Hola")).toBe("Hola");
    expect(schema.parse("Hola Mundo")).toBe("Hola Mundo");
  });

  it("debería rechazar textos muy cortos", () => {
    const schema = textoConLongitudSchema(3, 10, "El texto");
    expect(() => schema.parse("Hi")).toThrow("El texto debe tener al menos 3 caracteres");
  });

  it("debería rechazar textos muy largos", () => {
    const schema = textoConLongitudSchema(3, 10, "El texto");
    expect(() => schema.parse("Texto muy largo")).toThrow(
      "El texto no puede exceder 10 caracteres"
    );
  });

  it("debería eliminar espacios en blanco", () => {
    const schema = textoConLongitudSchema(3, 10, "El texto");
    expect(schema.parse("  Hola  ")).toBe("Hola");
  });
});

describe("NIF/CIF Schema", () => {
  it("debería validar NIFs correctos", () => {
    expect(nifCifSchema.parse("12345678A")).toBeTruthy();
    expect(nifCifSchema.parse("87654321B")).toBeTruthy();
  });

  it("debería validar NIEs correctos", () => {
    expect(nifCifSchema.parse("X1234567L")).toBeTruthy();
    expect(nifCifSchema.parse("Y7654321M")).toBeTruthy();
  });

  it("debería rechazar formatos inválidos", () => {
    expect(() => nifCifSchema.parse("123456")).toThrow();
    expect(() => nifCifSchema.parse("123456789")).toThrow();
  });
});

// ============================================================================
// PASO 1: OBJETIVOS
// ============================================================================

describe("Paso 1 Schema", () => {
  const datosValidos = {
    nombreProyecto: "Mi Proyecto Test",
    descripcion: "Esta es una descripción válida con más de cinco palabras necesarias",
    objetivoPrincipal: "Resolver el problema X de manera eficiente",
    tipoSoftware: "web" as const,
    industria: "E-commerce",
  };

  it("debería validar datos correctos", () => {
    expect(() => paso1Schema.parse(datosValidos)).not.toThrow();
  });

  it("debería rechazar nombre muy corto", () => {
    const datos = { ...datosValidos, nombreProyecto: "AB" };
    expect(() => paso1Schema.parse(datos)).toThrow();
  });

  it("debería rechazar descripción muy corta", () => {
    const datos = { ...datosValidos, descripcion: "Corta" };
    expect(() => paso1Schema.parse(datos)).toThrow();
  });

  it("debería rechazar descripción sin suficientes palabras", () => {
    const datos = { ...datosValidos, descripcion: "Solo tres palabras" };
    expect(() => paso1Schema.parse(datos)).toThrow(
      "La descripción debe tener al menos 5 palabras"
    );
  });

  it("debería validar con campos opcionales", () => {
    const datos = {
      ...datosValidos,
      empresaSitioWeb: "https://miempresa.com",
      contactoEmail: "contacto@empresa.com",
      contactoTelefono: "+34612345678",
    };
    expect(() => paso1Schema.parse(datos)).not.toThrow();
  });
});

// ============================================================================
// PASO 2: USUARIOS
// ============================================================================

describe("Paso 2 Schema", () => {
  const datosValidos = {
    numeroUsuarios: "11-50" as const,
    tiposUsuario: ["Administradores", "Empleados"],
    perfilesUsuario: "Descripción de perfiles",
    necesidadesAccesibilidad: false,
  };

  it("debería validar datos correctos", () => {
    expect(() => paso2Schema.parse(datosValidos)).not.toThrow();
  });

  it("debería requerir al menos un tipo de usuario", () => {
    const datos = { ...datosValidos, tiposUsuario: [] };
    expect(() => paso2Schema.parse(datos)).toThrow(
      "Selecciona al menos un tipo de usuario"
    );
  });

  it("debería rechazar más de 10 tipos de usuario", () => {
    const datos = {
      ...datosValidos,
      tiposUsuario: Array(11).fill("Tipo"),
    };
    expect(() => paso2Schema.parse(datos)).toThrow(
      "No puedes seleccionar más de 10 tipos de usuario"
    );
  });

  it("debería validar usuarios concurrentes en rango", () => {
    const datos = { ...datosValidos, usuariosConcurrentes: 50 };
    expect(() => paso2Schema.parse(datos)).not.toThrow();
  });

  it("debería rechazar usuarios concurrentes fuera de rango", () => {
    const datos = { ...datosValidos, usuariosConcurrentes: 0 };
    expect(() => paso2Schema.parse(datos)).toThrow();
  });
});

// ============================================================================
// PASO 3: FUNCIONALIDADES
// ============================================================================

describe("Paso 3 Schema", () => {
  const datosValidos = {
    funcionalidadesCore: ["CRUD", "Dashboard"],
    funcionalidadesOpcionales: ["Chat"],
    nivelComplejidad: "media" as const,
  };

  it("debería validar datos correctos", () => {
    expect(() => paso3Schema.parse(datosValidos)).not.toThrow();
  });

  it("debería requerir al menos una funcionalidad core", () => {
    const datos = { ...datosValidos, funcionalidadesCore: [] };
    expect(() => paso3Schema.parse(datos)).toThrow(
      "Selecciona al menos una funcionalidad principal"
    );
  });

  it("debería rechazar más de 20 funcionalidades core", () => {
    const datos = {
      ...datosValidos,
      funcionalidadesCore: Array(21).fill("Func"),
    };
    expect(() => paso3Schema.parse(datos)).toThrow();
  });

  it("debería validar número de pantallas", () => {
    const datos = { ...datosValidos, numeroPantallas: 25 };
    expect(() => paso3Schema.parse(datos)).not.toThrow();
  });
});

// ============================================================================
// PASO 5: INTEGRACIONES
// ============================================================================

describe("Paso 5 Schema - Validación Cruzada", () => {
  it("debería requerir sistemas o APIs si necesita integraciones", () => {
    const datos = {
      necesitaIntegraciones: true,
      sistemasIntegrar: [],
      apisExternas: [],
    };

    expect(() => paso5Schema.parse(datos)).toThrow(
      "Si necesitas integraciones, debes seleccionar al menos un sistema o API"
    );
  });

  it("debería validar con sistemas", () => {
    const datos = {
      necesitaIntegraciones: true,
      sistemasIntegrar: ["ERP"],
    };

    expect(() => paso5Schema.parse(datos)).not.toThrow();
  });

  it("debería validar con APIs", () => {
    const datos = {
      necesitaIntegraciones: true,
      apisExternas: ["Google Maps"],
    };

    expect(() => paso5Schema.parse(datos)).not.toThrow();
  });
});

// ============================================================================
// PASO 7: PRESUPUESTO
// ============================================================================

describe("Paso 7 Schema - Validación Cruzada", () => {
  const datosBase = {
    tiempoEstimado: "3-6meses" as const,
    prioridad: "media" as const,
  };

  it("debería requerir fecha de inicio para prioridad urgente", () => {
    const datos = {
      ...datosBase,
      prioridad: "urgente" as const,
      fechaInicio: undefined,
    };

    expect(() => paso7Schema.parse(datos)).toThrow(
      "Para proyectos urgentes debes especificar una fecha de inicio"
    );
  });

  it("debería validar fecha límite al menos 30 días futuros", () => {
    const manana = new Date();
    manana.setDate(manana.getDate() + 1);
    const fechaString = manana.toISOString().split("T")[0];

    const datos = {
      ...datosBase,
      fechaLimiteEntrega: fechaString,
    };

    expect(() => paso7Schema.parse(datos)).toThrow(
      "La fecha límite debe ser al menos 30 días en el futuro"
    );
  });

  it("debería validar presupuesto exacto en rango", () => {
    const datos = {
      ...datosBase,
      presupuestoExacto: 50000,
    };

    expect(() => paso7Schema.parse(datos)).not.toThrow();
  });
});

// ============================================================================
// INFORMACIÓN DE CONTACTO
// ============================================================================

describe("Contacto Schema", () => {
  const datosValidos = {
    nombreCompleto: "Juan Pérez García",
    email: "juan@empresa.com",
    telefono: "+34612345678",
    empresa: "Mi Empresa SL",
    pais: "España",
    ciudad: "Madrid",
    aceptaTerminos: true,
    aceptaPrivacidad: true,
  };

  it("debería validar datos correctos", () => {
    expect(() => contactoSchema.parse(datosValidos)).not.toThrow();
  });

  it("debería requerir aceptación de términos", () => {
    const datos = { ...datosValidos, aceptaTerminos: false };
    expect(() => contactoSchema.parse(datos)).toThrow(
      "Debes aceptar los términos y condiciones"
    );
  });

  it("debería requerir aceptación de privacidad", () => {
    const datos = { ...datosValidos, aceptaPrivacidad: false };
    expect(() => contactoSchema.parse(datos)).toThrow(
      "Debes aceptar la política de privacidad"
    );
  });

  it("debería validar código postal español", () => {
    const datos = { ...datosValidos, codigoPostal: "28001" };
    expect(() => contactoSchema.parse(datos)).not.toThrow();
  });

  it("debería rechazar código postal inválido", () => {
    const datos = { ...datosValidos, codigoPostal: "123" };
    expect(() => contactoSchema.parse(datos)).toThrow();
  });
});

// ============================================================================
// UTILIDADES
// ============================================================================

describe("Utilidades de Validación", () => {
  it("validarPaso - debería validar paso correcto", () => {
    const datos = {
      nombreProyecto: "Test",
      descripcion: "Descripción válida con más de cinco palabras aquí",
      objetivoPrincipal: "Objetivo",
      tipoSoftware: "web",
      industria: "Test",
    };

    const resultado = validarPaso(1, datos);
    expect(resultado.success).toBe(true);
  });

  it("validarPaso - debería rechazar paso inválido", () => {
    const datos = { nombreProyecto: "AB" }; // Muy corto

    const resultado = validarPaso(1, datos);
    expect(resultado.success).toBe(false);
  });

  it("esEmailValido - debería validar emails", () => {
    expect(esEmailValido("usuario@ejemplo.com")).toBe(true);
    expect(esEmailValido("no-es-email")).toBe(false);
  });

  it("esFechaFutura - debería validar fechas", () => {
    const futuro = new Date();
    futuro.setDate(futuro.getDate() + 10);
    const fechaString = futuro.toISOString().split("T")[0];

    expect(esFechaFutura(fechaString)).toBe(true);
    expect(esFechaFutura("2020-01-01")).toBe(false);
  });

  it("esTelefonoValido - debería validar teléfonos", () => {
    expect(esTelefonoValido("+34612345678")).toBe(true);
    expect(esTelefonoValido("abc")).toBe(false);
  });
});
