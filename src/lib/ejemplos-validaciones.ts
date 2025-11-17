/**
 * Ejemplos prácticos de uso de las validaciones
 *
 * Este archivo contiene ejemplos de cómo usar las validaciones
 * en diferentes contextos de la aplicación.
 */

import { z } from "zod";
import {
  paso1Schema,
  paso2Schema,
  paso3Schema,
  paso4Schema,
  paso5Schema,
  paso6Schema,
  paso7Schema,
  contactoSchema,
  formularioCompletoSchema,
  validarPaso,
  obtenerErroresValidacion,
  esEmailValido,
  esFechaFutura,
  type FormularioCompleto,
  type Paso1Data,
} from "./validaciones";

// ============================================================================
// EJEMPLO 1: Validación Simple
// ============================================================================

export function ejemploValidacionSimple() {
  const datos = {
    nombreProyecto: "Mi Proyecto",
    descripcion: "Una descripción detallada con más de cinco palabras aquí",
    objetivoPrincipal: "Resolver problema X",
    tipoSoftware: "web" as const,
    industria: "E-commerce",
  };

  try {
    const datosValidados = paso1Schema.parse(datos);
    console.log("✅ Datos validados:", datosValidados);
    return { success: true, data: datosValidados };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Errores de validación:", error.issues);
      return { success: false, errors: error.issues };
    }
    throw error;
  }
}

// ============================================================================
// EJEMPLO 2: Validación con safeParse (Recomendado)
// ============================================================================

export function ejemploValidacionSegura(datos: unknown) {
  const resultado = paso1Schema.safeParse(datos);

  if (resultado.success) {
    console.log("✅ Datos válidos:", resultado.data);
    // TypeScript sabe que resultado.data es de tipo Paso1Data
    return resultado.data;
  } else {
    console.error("❌ Errores:", resultado.error.issues);
    // Manejar errores de forma segura
    const erroresLegibles = obtenerErroresValidacion(resultado.error);
    return { errores: erroresLegibles };
  }
}

// ============================================================================
// EJEMPLO 3: Validación con React Hook Form
// ============================================================================

/**
 * Ejemplo de cómo usar las validaciones con React Hook Form
 */
export function ejemploReactHookForm() {
  /*
  import { useForm } from "react-hook-form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { paso1Schema } from "@/lib/validaciones";

  function MiComponente() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Paso1Data>({
      resolver: zodResolver(paso1Schema),
      mode: "onChange", // Validar mientras escribe
    });

    const onSubmit = (data: Paso1Data) => {
      console.log("Datos validados:", data);
      // Enviar a la API
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("nombreProyecto")} />
          {errors.nombreProyecto && (
            <span className="error">{errors.nombreProyecto.message}</span>
          )}
        </div>

        <div>
          <textarea {...register("descripcion")} />
          {errors.descripcion && (
            <span className="error">{errors.descripcion.message}</span>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>
    );
  }
  */
}

// ============================================================================
// EJEMPLO 4: Validación Paso a Paso
// ============================================================================

export function ejemploValidacionPorPasos() {
  const pasos = [
    {
      nombreProyecto: "Proyecto Test",
      descripcion: "Descripción válida con más de cinco palabras necesarias",
      objetivoPrincipal: "Objetivo",
      tipoSoftware: "web" as const,
      industria: "Test",
    },
    {
      numeroUsuarios: "11-50" as const,
      tiposUsuario: ["Administradores"],
      necesidadesAccesibilidad: false,
    },
    // ... más pasos
  ];

  pasos.forEach((datos, index) => {
    const resultado = validarPaso(index + 1, datos);

    if (resultado.success) {
      console.log(`✅ Paso ${index + 1} válido`);
    } else {
      console.error(`❌ Paso ${index + 1} inválido:`, resultado.error.issues);
    }
  });
}

// ============================================================================
// EJEMPLO 5: Validación en API Route (Next.js)
// ============================================================================

/**
 * Ejemplo de validación en un API route de Next.js
 */
export async function ejemploAPIRoute() {
  /*
  // app/api/cotizaciones/route.ts
  import { NextRequest, NextResponse } from "next/server";
  import { formularioCompletoSchema, obtenerErroresValidacion } from "@/lib/validaciones";

  export async function POST(request: NextRequest) {
    try {
      const body = await request.json();

      // Validar datos recibidos
      const resultado = formularioCompletoSchema.safeParse(body);

      if (!resultado.success) {
        const errores = obtenerErroresValidacion(resultado.error);
        return NextResponse.json(
          { error: "Datos inválidos", detalles: errores },
          { status: 400 }
        );
      }

      // Datos validados y con tipos correctos
      const datosValidados = resultado.data;

      // Guardar en base de datos
      // await db.cotizaciones.create({ data: datosValidados });

      return NextResponse.json({
        success: true,
        mensaje: "Cotización creada exitosamente",
      });
    } catch (error) {
      console.error("Error en API:", error);
      return NextResponse.json(
        { error: "Error interno del servidor" },
        { status: 500 }
      );
    }
  }
  */
}

// ============================================================================
// EJEMPLO 6: Validación con Transformaciones
// ============================================================================

export function ejemploConTransformaciones() {
  // Crear un schema que transforma los datos
  const schemaConTransformacion = paso1Schema.transform((data) => ({
    ...data,
    nombreProyecto: data.nombreProyecto.toUpperCase(),
    descripcion: data.descripcion.trim(),
    // Añadir campos calculados
    fechaCreacion: new Date().toISOString(),
    slug: data.nombreProyecto.toLowerCase().replace(/\s+/g, "-"),
  }));

  const datos = {
    nombreProyecto: "mi proyecto",
    descripcion: "  Descripción con espacios extra y más de cinco palabras  ",
    objetivoPrincipal: "Objetivo",
    tipoSoftware: "web" as const,
    industria: "Test",
  };

  const resultado = schemaConTransformacion.safeParse(datos);

  if (resultado.success) {
    console.log("Datos transformados:", resultado.data);
    // {
    //   nombreProyecto: "MI PROYECTO",
    //   descripcion: "Descripción con espacios extra...",
    //   fechaCreacion: "2025-11-15T...",
    //   slug: "mi-proyecto"
    // }
  }
}

// ============================================================================
// EJEMPLO 7: Validación Condicional
// ============================================================================

export function ejemploValidacionCondicional() {
  // Schema que valida condicionalmente según el tipo de software
  const schemaCondicional = paso1Schema.refine(
    (data) => {
      if (data.tipoSoftware === "mobile" && !data.empresaSitioWeb) {
        return false;
      }
      return true;
    },
    {
      message: "Las apps móviles requieren un sitio web de la empresa",
      path: ["empresaSitioWeb"],
    }
  );

  const datos = {
    nombreProyecto: "App Móvil",
    descripcion: "Una app móvil con descripción válida de palabras",
    objetivoPrincipal: "Objetivo",
    tipoSoftware: "mobile" as const,
    industria: "Test",
    // empresaSitioWeb: falta!
  };

  const resultado = schemaCondicional.safeParse(datos);
  console.log(resultado.success ? "✅ Válido" : "❌ Inválido");
}

// ============================================================================
// EJEMPLO 8: Validación con Errores Personalizados
// ============================================================================

export function ejemploErroresPersonalizados() {
  const datosInvalidos = {
    nombreProyecto: "AB", // Muy corto
    descripcion: "Corto", // Muy corto
    objetivoPrincipal: "X", // Muy corto
    tipoSoftware: "invalido" as any,
    industria: "",
  };

  const resultado = paso1Schema.safeParse(datosInvalidos);

  if (!resultado.success) {
    // Formatear errores para mostrar al usuario
    const erroresFormateados = resultado.error.issues.map((err) => ({
      campo: err.path.join("."),
      mensaje: err.message,
      codigo: err.code,
    }));

    console.log("Errores encontrados:");
    erroresFormateados.forEach((error) => {
      console.log(`- ${error.campo}: ${error.mensaje}`);
    });

    // Agrupar errores por campo
    const erroresPorCampo = resultado.error.flatten();
    console.log("Errores agrupados:", erroresPorCampo.fieldErrors);
  }
}

// ============================================================================
// EJEMPLO 9: Validación Async con Base de Datos
// ============================================================================

/**
 * Ejemplo de validación asíncrona (por ejemplo, verificar duplicados en BD)
 */
export async function ejemploValidacionAsync(datos: Paso1Data) {
  /*
  // Crear schema con validación async
  const schemaAsync = paso1Schema.refine(
    async (data) => {
      // Verificar si el nombre del proyecto ya existe en la BD
      const existe = await db.proyectos.findUnique({
        where: { nombre: data.nombreProyecto }
      });
      return !existe;
    },
    {
      message: "Ya existe un proyecto con este nombre",
      path: ["nombreProyecto"],
    }
  );

  // Usar parseAsync para validaciones asíncronas
  try {
    const datosValidados = await schemaAsync.parseAsync(datos);
    console.log("✅ Proyecto único:", datosValidados);
    return { success: true, data: datosValidados };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("❌ Nombre duplicado");
      return { success: false, errors: error.issues };
    }
    throw error;
  }
  */
}

// ============================================================================
// EJEMPLO 10: Validación Parcial (Updates)
// ============================================================================

export function ejemploValidacionParcial() {
  // Para actualizaciones, hacer todos los campos opcionales
  const schemaActualizacion = paso1Schema.partial();

  // Ahora puedes actualizar solo algunos campos
  const actualizacion = {
    nombreProyecto: "Nuevo Nombre",
    // Otros campos no son necesarios
  };

  const resultado = schemaActualizacion.safeParse(actualizacion);

  if (resultado.success) {
    console.log("✅ Actualización válida:", resultado.data);
    // Solo actualizar los campos proporcionados en la BD
  }
}

// ============================================================================
// EJEMPLO 11: Validación con Defaults
// ============================================================================

export function ejemploConDefaults() {
  // Extender el schema con valores por defecto
  const schemaConDefaults = paso2Schema.extend({
    necesidadesAccesibilidad: z.boolean().default(false),
    perfilesUsuario: z.string().default("Sin especificar"),
  });

  const datosMinimos = {
    numeroUsuarios: "11-50" as const,
    tiposUsuario: ["Administradores"],
  };

  const resultado = schemaConDefaults.safeParse(datosMinimos);

  if (resultado.success) {
    console.log("Datos con defaults:", resultado.data);
    // {
    //   numeroUsuarios: "11-50",
    //   tiposUsuario: ["Administradores"],
    //   necesidadesAccesibilidad: false,
    //   perfilesUsuario: "Sin especificar"
    // }
  }
}

// ============================================================================
// EJEMPLO 12: Validación de Múltiples Pasos a la Vez
// ============================================================================

export function ejemploValidacionCompleta() {
  const formularioCompleto: FormularioCompleto = {
    paso1: {
      nombreProyecto: "Proyecto Completo",
      descripcion: "Descripción completa con más de cinco palabras necesarias",
      objetivoPrincipal: "Objetivo principal del proyecto",
      tipoSoftware: "web",
      industria: "E-commerce",
    },
    paso2: {
      numeroUsuarios: "51-200",
      tiposUsuario: ["Administradores", "Clientes"],
      necesidadesAccesibilidad: false,
    },
    paso3: {
      funcionalidadesCore: ["CRUD", "Dashboard"],
      nivelComplejidad: "media",
    },
    paso4: {
      plataformas: ["Web (Navegadores)"],
    },
    paso5: {
      necesitaIntegraciones: false,
    },
    paso6: {
      tieneDiseno: false,
      brandingExistente: false,
      necesitaUXUI: true,
    },
    paso7: {
      presupuestoFlexible: false,
      tiempoEstimado: "3-6meses",
      prioridad: "media",
    },
  };

  const resultado = formularioCompletoSchema.safeParse(formularioCompleto);

  if (resultado.success) {
    console.log("✅ Formulario completo válido");
    // Guardar en base de datos o enviar email
    return resultado.data;
  } else {
    console.error("❌ Errores en el formulario:");
    const errores = obtenerErroresValidacion(resultado.error);
    errores.forEach((err: any) => {
      console.log(`- ${err.campo}: ${err.mensaje}`);
    });
  }
}

// ============================================================================
// EJEMPLO 13: Validación con Utilidades
// ============================================================================

export function ejemploUtilidades() {
  // Validar email rápidamente
  if (esEmailValido("usuario@ejemplo.com")) {
    console.log("✅ Email válido");
  }

  // Validar fecha
  const fechaInicio = "2025-12-31";
  if (esFechaFutura(fechaInicio)) {
    console.log("✅ Fecha es futura");
  }

  // Obtener errores legibles
  try {
    paso1Schema.parse({ nombreProyecto: "AB" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errores = obtenerErroresValidacion(error);
      console.log("Errores legibles:", errores);
      // [{ campo: "nombreProyecto", mensaje: "El nombre debe..." }]
    }
  }
}

// ============================================================================
// EJEMPLO 14: Integración con Estado (React)
// ============================================================================

/**
 * Ejemplo de cómo validar mientras el usuario escribe
 */
export function ejemploValidacionEnTiempoReal() {
  /*
  import { useState } from "react";
  import { paso1Schema } from "@/lib/validaciones";

  function Formulario() {
    const [datos, setDatos] = useState<Partial<Paso1Data>>({});
    const [errores, setErrores] = useState<Record<string, string>>({});

    const validarCampo = (campo: keyof Paso1Data, valor: any) => {
      const parcial = paso1Schema.pick({ [campo]: true });
      const resultado = parcial.safeParse({ [campo]: valor });

      if (!resultado.success) {
        const error = resultado.error.issues[0];
        setErrores(prev => ({ ...prev, [campo]: error.message }));
      } else {
        setErrores(prev => {
          const nuevos = { ...prev };
          delete nuevos[campo];
          return nuevos;
        });
      }
    };

    const handleChange = (campo: keyof Paso1Data) => (e: any) => {
      const valor = e.target.value;
      setDatos(prev => ({ ...prev, [campo]: valor }));
      validarCampo(campo, valor);
    };

    return (
      <form>
        <input
          value={datos.nombreProyecto || ""}
          onChange={handleChange("nombreProyecto")}
          onBlur={() => validarCampo("nombreProyecto", datos.nombreProyecto)}
        />
        {errores.nombreProyecto && (
          <span className="error">{errores.nombreProyecto}</span>
        )}
      </form>
    );
  }
  */
}

// ============================================================================
// EJEMPLO 15: Validación con Mensajes Personalizados por Idioma
// ============================================================================

export function ejemploMultiidioma() {
  // Crear schemas con mensajes en diferentes idiomas
  const schemaIngles = z.object({
    nombreProyecto: z
      .string()
      .min(3, "Project name must be at least 3 characters"),
  });

  const schemaEspanol = z.object({
    nombreProyecto: z
      .string()
      .min(3, "El nombre del proyecto debe tener al menos 3 caracteres"),
  });

  // Usar según el idioma del usuario
  const idioma = "es"; // Obtener del contexto
  const schema = idioma === "es" ? schemaEspanol : schemaIngles;

  const resultado = schema.safeParse({ nombreProyecto: "AB" });
  console.log(resultado.success ? "✅" : resultado.error.issues[0].message);
}
