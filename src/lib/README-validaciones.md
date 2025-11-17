# Validaciones con Zod

Sistema completo de validación para el formulario de cotización usando Zod.

## Contenido

- [Instalación](#instalación)
- [Validaciones Reutilizables](#validaciones-reutilizables)
- [Schemas por Paso](#schemas-por-paso)
- [Validaciones Cruzadas](#validaciones-cruzadas)
- [Utilidades](#utilidades)
- [Ejemplos de Uso](#ejemplos-de-uso)

## Instalación

Las dependencias ya están instaladas en el proyecto:

```json
{
  "zod": "^4.1.12",
  "@hookform/resolvers": "^5.2.2",
  "react-hook-form": "^7.66.0"
}
```

## Validaciones Reutilizables

### Email

```typescript
import { emailSchema } from "@/lib/validaciones";

// Uso
const resultado = emailSchema.safeParse("usuario@ejemplo.com");
if (resultado.success) {
  console.log(resultado.data); // "usuario@ejemplo.com"
}
```

**Características:**
- ✅ Obligatorio
- ✅ Formato email válido
- ✅ Convertido a minúsculas
- ✅ Sin espacios en blanco

### Teléfono

```typescript
import { telefonoSchema } from "@/lib/validaciones";

// Acepta formatos internacionales
telefonoSchema.parse("+34 612 345 678"); // ✅
telefonoSchema.parse("612345678");       // ✅
telefonoSchema.parse("+1-555-123-4567"); // ✅
```

### URL

```typescript
import { urlSchema } from "@/lib/validaciones";

urlSchema.parse("https://ejemplo.com"); // ✅
urlSchema.parse("http://ejemplo.com");  // ✅
urlSchema.parse("ejemplo.com");         // ❌ Error
```

### Fecha Futura

```typescript
import { fechaFuturaSchema } from "@/lib/validaciones";

// La fecha debe ser hoy o en el futuro
fechaFuturaSchema.parse("2025-12-31"); // ✅
fechaFuturaSchema.parse("2020-01-01"); // ❌ Error: fecha pasada
```

### Rango Numérico

```typescript
import { rangoNumericoSchema } from "@/lib/validaciones";

const edadSchema = rangoNumericoSchema(18, 100, "La edad");
edadSchema.parse(25); // ✅
edadSchema.parse(15); // ❌ Error: menor a 18
```

### Texto con Longitud

```typescript
import { textoConLongitudSchema } from "@/lib/validaciones";

const nombreSchema = textoConLongitudSchema(3, 50, "El nombre");
nombreSchema.parse("Juan Pérez"); // ✅
nombreSchema.parse("A");          // ❌ Error: muy corto
```

### NIF/CIF/NIE

```typescript
import { nifCifSchema } from "@/lib/validaciones";

nifCifSchema.parse("12345678A");  // ✅
nifCifSchema.parse("X1234567L");  // ✅ NIE
nifCifSchema.parse("12345");      // ❌ Error: formato inválido
```

## Schemas por Paso

### Paso 1: Objetivos del Proyecto

```typescript
import { paso1Schema } from "@/lib/validaciones";

const datos = {
  nombreProyecto: "Mi Proyecto",
  descripcion: "Una descripción detallada del proyecto...",
  objetivoPrincipal: "Resolver problema X",
  tipoSoftware: "web",
  industria: "E-commerce",
  empresaSitioWeb: "https://miempresa.com", // opcional
  contactoEmail: "contacto@empresa.com",     // opcional
};

const resultado = paso1Schema.safeParse(datos);
```

**Validaciones incluidas:**
- ✅ Nombre: 3-100 caracteres
- ✅ Descripción: 10-1000 caracteres, mínimo 5 palabras
- ✅ Objetivo: 5-500 caracteres
- ✅ Tipo de software: enum válido
- ✅ Email opcional pero válido si se proporciona

### Paso 2: Usuarios

```typescript
import { paso2Schema } from "@/lib/validaciones";

const datos = {
  numeroUsuarios: "11-50",
  tiposUsuario: ["Administradores", "Empleados"],
  necesidadesAccesibilidad: false,
  usuariosConcurrentes: 25, // opcional: 1-100,000
};

paso2Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Número de usuarios: enum requerido
- ✅ Tipos de usuario: 1-10 selecciones
- ✅ Usuarios concurrentes: rango 1-100,000 (opcional)

### Paso 3: Funcionalidades

```typescript
import { paso3Schema } from "@/lib/validaciones";

const datos = {
  funcionalidadesCore: ["CRUD básico", "Dashboard"],
  funcionalidadesOpcionales: ["Chat", "Notificaciones"],
  nivelComplejidad: "media",
  numeroPantallas: 15, // opcional: 1-500
};

paso3Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Funcionalidades core: mínimo 1, máximo 20
- ✅ Funcionalidades opcionales: máximo 15
- ✅ Complejidad: enum requerido
- ✅ Número de pantallas: 1-500 (opcional)

### Paso 4: Requisitos Técnicos

```typescript
import { paso4Schema } from "@/lib/validaciones";

const datos = {
  plataformas: ["Web (Navegadores)", "iOS"],
  navegadores: ["Chrome", "Firefox"],
  tiempoCargaMaximo: 2.5,      // segundos (0.1-60)
  disponibilidadSLA: 99.9,     // porcentaje (90-100)
};

paso4Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Plataformas: mínimo 1 requerida
- ✅ Tiempo de carga: 0.1-60 segundos (opcional)
- ✅ SLA: 90-100% (opcional)

### Paso 5: Integraciones

```typescript
import { paso5Schema } from "@/lib/validaciones";

const datos = {
  necesitaIntegraciones: true,
  sistemasIntegrar: ["ERP", "CRM"],
  tipoIntegracion: "rest",
  numeroIntegraciones: 3,              // 0-50
  frecuenciaSincronizacion: "horas",
};

paso5Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Si necesita integraciones, debe especificar sistemas o APIs
- ✅ Número de integraciones: 0-50 (opcional)
- ✅ Frecuencia de sincronización: enum (opcional)

### Paso 6: Diseño

```typescript
import { paso6Schema } from "@/lib/validaciones";

const datos = {
  tieneDiseno: true,
  tipoDiseno: "wireframes",
  preferenciaEstilo: ["Minimalista", "Moderno"],
  urlsReferencia: ["https://ejemplo1.com", "https://ejemplo2.com"],
  coloresPrimarios: ["#FF5733", "#33FF57"], // Hex válido
};

paso6Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ URLs de referencia: máximo 10, formato URL válido
- ✅ Colores: formato hexadecimal válido, máximo 5

### Paso 7: Presupuesto y Tiempos

```typescript
import { paso7Schema } from "@/lib/validaciones";

const datos = {
  presupuestoEstimado: "10k-25k",
  presupuestoFlexible: true,
  tiempoEstimado: "3-6meses",
  fechaInicio: "2025-06-01",
  prioridad: "alta",
  presupuestoExacto: 15000,           // €0 - €10M
  fechaLimiteEntrega: "2025-12-31",   // Mínimo 30 días futuros
};

paso7Schema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Fecha de inicio: debe ser futura
- ✅ Fecha límite: mínimo 30 días en el futuro
- ✅ Si es urgente, debe tener fecha de inicio
- ✅ Presupuesto exacto: €0 - €10M (opcional)

### Información de Contacto (Opcional)

```typescript
import { contactoSchema } from "@/lib/validaciones";

const datos = {
  nombreCompleto: "Juan Pérez García",
  email: "juan@empresa.com",
  telefono: "+34612345678",
  empresa: "Mi Empresa SL",
  pais: "España",
  ciudad: "Madrid",
  codigoPostal: "28001",
  nifCif: "12345678A",
  aceptaTerminos: true,
  aceptaPrivacidad: true,
  aceptaComunicaciones: false,
};

contactoSchema.parse(datos);
```

**Validaciones incluidas:**
- ✅ Términos y privacidad: obligatorio aceptar
- ✅ NIF/CIF: formato español válido
- ✅ Código postal: 5 dígitos
- ✅ Teléfono: formato internacional

## Validaciones Cruzadas

### Coherencia entre Complejidad y Tiempo

```typescript
// Si el proyecto es muy complejo, no puede ser de 1-3 meses
const datos = {
  paso3: { nivelComplejidad: "muy-alta" },
  paso7: { tiempoEstimado: "1-3meses" }
};

// ❌ Error: proyecto muy complejo requiere más tiempo
formularioCompletoSchema.parse(datos);
```

### Coherencia entre Integraciones y Complejidad

```typescript
// Si hay muchas integraciones, la complejidad no puede ser básica
const datos = {
  paso3: { nivelComplejidad: "basica" },
  paso5: { sistemasIntegrar: ["ERP", "CRM", "Pagos", "Email", "Analytics", "CMS"] }
};

// ❌ Error: más de 5 integraciones requiere mayor complejidad
formularioCompletoSchema.parse(datos);
```

### Prioridad Urgente Requiere Fecha

```typescript
const datos = {
  prioridad: "urgente",
  fechaInicio: undefined
};

// ❌ Error: proyectos urgentes deben especificar fecha de inicio
paso7Schema.parse(datos);
```

## Utilidades

### Validar Paso Individual

```typescript
import { validarPaso } from "@/lib/validaciones";

const resultado = validarPaso(1, datosPaso1);
if (!resultado.success) {
  console.error(resultado.error.errors);
}
```

### Obtener Errores Legibles

```typescript
import { obtenerErroresValidacion } from "@/lib/validaciones";

try {
  paso1Schema.parse(datos);
} catch (error) {
  if (error instanceof z.ZodError) {
    const errores = obtenerErroresValidacion(error);
    // [{ campo: "nombreProyecto", mensaje: "El nombre debe..." }]
  }
}
```

### Validaciones Individuales

```typescript
import {
  esEmailValido,
  esFechaFutura,
  esTelefonoValido
} from "@/lib/validaciones";

if (esEmailValido("usuario@ejemplo.com")) {
  // Email válido
}

if (esFechaFutura("2025-12-31")) {
  // Fecha es futura
}

if (esTelefonoValido("+34612345678")) {
  // Teléfono válido
}
```

## Ejemplos de Uso

### Con React Hook Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paso1Schema } from "@/lib/validaciones";

function MiFormulario() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(paso1Schema)
  });

  const onSubmit = (data) => {
    console.log("Datos validados:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombreProyecto")} />
      {errors.nombreProyecto && <p>{errors.nombreProyecto.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Validación Manual

```typescript
import { paso1Schema } from "@/lib/validaciones";

const datos = {
  nombreProyecto: "Mi Proyecto",
  // ...
};

const resultado = paso1Schema.safeParse(datos);

if (resultado.success) {
  // Datos válidos
  console.log(resultado.data);
} else {
  // Errores de validación
  console.error(resultado.error.errors);
}
```

### Validación Async (ejemplo con API)

```typescript
import { formularioCompletoSchema } from "@/lib/validaciones";

async function enviarFormulario(datos) {
  try {
    // Validar antes de enviar
    const datosValidados = formularioCompletoSchema.parse(datos);

    // Enviar a la API
    const response = await fetch("/api/cotizaciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosValidados),
    });

    return await response.json();
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Errores de validación
      return { errores: obtenerErroresValidacion(error) };
    }
    throw error;
  }
}
```

## Mensajes de Error Personalizados

Todos los mensajes de error están en español y son descriptivos:

```typescript
// ❌ "El email es obligatorio"
// ❌ "Email inválido"
// ❌ "El nombre del proyecto debe tener al menos 3 caracteres"
// ❌ "La descripción debe tener al menos 5 palabras"
// ❌ "La fecha debe ser hoy o en el futuro"
// ❌ "Para proyectos urgentes debes especificar una fecha de inicio"
```

## Testing

```typescript
import { describe, it, expect } from "vitest";
import { paso1Schema } from "@/lib/validaciones";

describe("Paso 1 Validaciones", () => {
  it("debería validar datos correctos", () => {
    const datos = {
      nombreProyecto: "Proyecto Test",
      descripcion: "Una descripción válida con más de cinco palabras aquí",
      objetivoPrincipal: "Objetivo principal",
      tipoSoftware: "web",
      industria: "E-commerce"
    };

    expect(() => paso1Schema.parse(datos)).not.toThrow();
  });

  it("debería rechazar nombre corto", () => {
    const datos = { nombreProyecto: "AB" };

    expect(() => paso1Schema.parse(datos)).toThrow();
  });
});
```

## Tipos TypeScript

Todos los tipos están exportados:

```typescript
import type {
  Paso1Data,
  Paso2Data,
  Paso3Data,
  Paso4Data,
  Paso5Data,
  Paso6Data,
  Paso7Data,
  ContactoData,
  FormularioCompleto
} from "@/lib/validaciones";

const datos: Paso1Data = {
  nombreProyecto: "Mi Proyecto",
  // TypeScript te ayudará con autocompletado
};
```

## Mejores Prácticas

1. **Siempre valida en el cliente Y en el servidor**
   ```typescript
   // Cliente: validación inmediata
   // Servidor: validación antes de guardar en DB
   ```

2. **Usa safeParse para manejo de errores**
   ```typescript
   const resultado = schema.safeParse(datos);
   if (!resultado.success) {
     // Manejar errores
   }
   ```

3. **Combina con React Hook Form para mejor UX**
   ```typescript
   resolver: zodResolver(schema)
   ```

4. **Añade validaciones personalizadas cuando sea necesario**
   ```typescript
   .refine((data) => /* validación custom */, { message: "..." })
   ```

## Recursos

- [Zod Documentation](https://zod.dev)
- [React Hook Form + Zod](https://react-hook-form.com/get-started#SchemaValidation)
- [TypeScript with Zod](https://zod.dev/?id=type-inference)
