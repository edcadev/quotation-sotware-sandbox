# Biblioteca de Validaciones

Sistema completo de validaciones con Zod para el formulario de cotización.

## 📁 Estructura

```
src/lib/
├── validaciones.ts              # Schemas de Zod y validaciones
├── ejemplos-validaciones.ts     # 15 ejemplos prácticos de uso
├── README-validaciones.md       # Documentación completa
├── README.md                    # Este archivo
└── __tests__/
    └── validaciones.test.ts     # Tests unitarios (70+ tests)
```

## 🚀 Inicio Rápido

### Importación Básica

```typescript
import {
  paso1Schema,
  paso2Schema,
  // ... más schemas
  formularioCompletoSchema,
  validarPaso,
  esEmailValido,
  type FormularioCompleto,
} from "@/lib/validaciones";
```

### Validación Simple

```typescript
const datos = {
  nombreProyecto: "Mi Proyecto",
  descripcion: "Descripción con más de cinco palabras necesarias",
  objetivoPrincipal: "Resolver problema X",
  tipoSoftware: "web",
  industria: "E-commerce",
};

const resultado = paso1Schema.safeParse(datos);

if (resultado.success) {
  console.log("✅ Datos válidos:", resultado.data);
} else {
  console.log("❌ Errores:", resultado.error.errors);
}
```

### Con React Hook Form

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paso1Schema } from "@/lib/validaciones";

function MiFormulario() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(paso1Schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nombreProyecto")} />
      {errors.nombreProyecto && <p>{errors.nombreProyecto.message}</p>}
    </form>
  );
}
```

## 📚 Validaciones Disponibles

### Validaciones Reutilizables

| Validación | Descripción | Ejemplo |
|------------|-------------|---------|
| `emailSchema` | Email válido, obligatorio | `"usuario@ejemplo.com"` |
| `telefonoSchema` | Teléfono internacional, opcional | `"+34612345678"` |
| `urlSchema` | URL válida, opcional | `"https://ejemplo.com"` |
| `fechaFuturaSchema` | Fecha hoy o futura | `"2025-12-31"` |
| `rangoNumericoSchema` | Número en rango específico | `rangoNumericoSchema(1, 100)` |
| `textoConLongitudSchema` | Texto con min/max caracteres | `textoConLongitudSchema(3, 50, "Nombre")` |
| `nifCifSchema` | NIF/CIF/NIE español | `"12345678A"` |

### Schemas por Paso

| Paso | Schema | Campos Principales |
|------|--------|-------------------|
| **Paso 1** | `paso1Schema` | Nombre, descripción, tipo software, industria |
| **Paso 2** | `paso2Schema` | Usuarios, perfiles, accesibilidad |
| **Paso 3** | `paso3Schema` | Funcionalidades, complejidad |
| **Paso 4** | `paso4Schema` | Plataformas, requisitos técnicos, seguridad |
| **Paso 5** | `paso5Schema` | Integraciones, APIs |
| **Paso 6** | `paso6Schema` | Diseño, UX/UI, branding |
| **Paso 7** | `paso7Schema` | Presupuesto, tiempos, prioridad |
| **Contacto** | `contactoSchema` | Datos de contacto del cliente |

### Schema Completo

```typescript
import { formularioCompletoSchema } from "@/lib/validaciones";

// Valida todos los pasos a la vez
const formulario = {
  paso1: { /* ... */ },
  paso2: { /* ... */ },
  // ...
  paso7: { /* ... */ },
};

const resultado = formularioCompletoSchema.safeParse(formulario);
```

## ✨ Características Especiales

### 1. Validación de Emails

```typescript
import { emailSchema, esEmailValido } from "@/lib/validaciones";

// Con schema
emailSchema.parse("usuario@ejemplo.com"); // ✅

// Con utilidad
if (esEmailValido("usuario@ejemplo.com")) {
  // ✅ Email válido
}
```

**Características:**
- ✅ Formato email válido
- ✅ Convertido a minúsculas automáticamente
- ✅ Sin espacios en blanco

### 2. Validación de Fechas Futuras

```typescript
import { fechaFuturaSchema, esFechaFutura } from "@/lib/validaciones";

// Fecha debe ser hoy o en el futuro
fechaFuturaSchema.parse("2025-12-31"); // ✅
fechaFuturaSchema.parse("2020-01-01"); // ❌ Fecha pasada

// Con utilidad
if (esFechaFutura("2025-12-31")) {
  // ✅ Fecha es futura
}
```

### 3. Validación de Rangos Numéricos

```typescript
import { rangoNumericoSchema } from "@/lib/validaciones";

// Crear schema para edad (18-100)
const edadSchema = rangoNumericoSchema(18, 100, "La edad");

edadSchema.parse(25); // ✅
edadSchema.parse(15); // ❌ "El valor mínimo es 18"
```

### 4. Validaciones Cruzadas

#### Complejidad vs Tiempo

```typescript
// Si el proyecto es muy complejo, no puede ser de 1-3 meses
const datos = {
  paso3: { nivelComplejidad: "muy-alta" },
  paso7: { tiempoEstimado: "1-3meses" }
};

// ❌ Error: proyecto muy complejo requiere más tiempo
```

#### Integraciones vs Complejidad

```typescript
// Muchas integraciones requieren mayor complejidad
const datos = {
  paso3: { nivelComplejidad: "basica" },
  paso5: { sistemasIntegrar: ["ERP", "CRM", "Pagos", "Email", "Analytics", "CMS"] }
};

// ❌ Error: más de 5 integraciones requiere mayor complejidad
```

#### Prioridad Urgente Requiere Fecha

```typescript
const datos = {
  prioridad: "urgente",
  fechaInicio: undefined
};

// ❌ Error: proyectos urgentes deben especificar fecha de inicio
```

## 🛠️ Utilidades

### `validarPaso(numeroPaso, datos)`

Valida un paso individual del formulario.

```typescript
const resultado = validarPaso(1, datosPaso1);

if (resultado.success) {
  console.log("✅ Paso válido");
} else {
  console.log("❌ Errores:", resultado.error.errors);
}
```

### `obtenerErroresValidacion(error)`

Convierte errores de Zod a formato legible.

```typescript
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

// Validar rápidamente sin schema completo
if (esEmailValido("usuario@ejemplo.com")) { /* ... */ }
if (esFechaFutura("2025-12-31")) { /* ... */ }
if (esTelefonoValido("+34612345678")) { /* ... */ }
```

## 📖 Documentación Completa

- **[README-validaciones.md](./README-validaciones.md)** - Documentación exhaustiva con todos los detalles
- **[ejemplos-validaciones.ts](./ejemplos-validaciones.ts)** - 15 ejemplos prácticos de uso
- **[validaciones.test.ts](./__tests__/validaciones.test.ts)** - 70+ tests unitarios

## 🧪 Testing

Para ejecutar los tests:

1. Instalar dependencias de testing:
   ```bash
   pnpm install -D vitest @vitest/ui
   ```

2. Añadir scripts en `package.json`:
   ```json
   {
     "scripts": {
       "test": "vitest",
       "test:ui": "vitest --ui",
       "test:coverage": "vitest --coverage"
     }
   }
   ```

3. Ejecutar tests:
   ```bash
   pnpm test
   ```

## 📝 Tipos TypeScript

Todos los tipos están exportados y disponibles:

```typescript
import type {
  // Tipos de datos
  Paso1Data,
  Paso2Data,
  Paso3Data,
  Paso4Data,
  Paso5Data,
  Paso6Data,
  Paso7Data,
  ContactoData,
  FormularioCompleto,
} from "@/lib/validaciones";

// TypeScript te ayudará con autocompletado
const datos: Paso1Data = {
  nombreProyecto: "Mi Proyecto",
  // ... TypeScript sugiere los campos
};
```

## 🎯 Casos de Uso

### 1. Formulario Multipaso

Usa los schemas individuales para validar cada paso antes de avanzar.

### 2. API Routes

Valida datos recibidos del cliente antes de procesarlos.

```typescript
// app/api/cotizaciones/route.ts
import { formularioCompletoSchema } from "@/lib/validaciones";

export async function POST(request) {
  const body = await request.json();
  const resultado = formularioCompletoSchema.safeParse(body);

  if (!resultado.success) {
    return Response.json({ error: "Datos inválidos" }, { status: 400 });
  }

  // Datos validados y seguros
  const datos = resultado.data;
}
```

### 3. Server Actions

```typescript
"use server";
import { formularioCompletoSchema } from "@/lib/validaciones";

export async function crearCotizacion(formData) {
  const resultado = formularioCompletoSchema.safeParse(formData);

  if (!resultado.success) {
    return { error: "Validación fallida" };
  }

  // Guardar en BD
}
```

## 🔒 Seguridad

Todas las validaciones incluyen:

- ✅ Sanitización de entrada (trim, lowercase, etc.)
- ✅ Límites de longitud para prevenir ataques
- ✅ Validación de formatos (email, URL, teléfono)
- ✅ Validación de rangos numéricos
- ✅ Prevención de valores maliciosos

## 🌍 Internacionalización

Todos los mensajes de error están en español. Para añadir otros idiomas:

```typescript
const schemaIngles = z.object({
  nombreProyecto: z.string().min(3, "Project name must be at least 3 characters"),
});

const schemaEspanol = z.object({
  nombreProyecto: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
});

// Usar según idioma del usuario
const schema = idioma === "es" ? schemaEspanol : schemaIngles;
```

## 📊 Estadísticas

- **7 pasos** de validación + 1 contacto
- **50+ campos** validados
- **15 ejemplos** prácticos
- **70+ tests** unitarios
- **100% type-safe** con TypeScript

## 🔗 Enlaces Útiles

- [Zod Documentation](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)
- [TypeScript](https://www.typescriptlang.org)

## 💡 Tips

1. **Siempre usa `safeParse`** en lugar de `parse` para manejo seguro de errores
2. **Valida en cliente Y servidor** para mejor seguridad
3. **Usa TypeScript** para aprovechar el autocompletado
4. **Revisa los ejemplos** en `ejemplos-validaciones.ts`
5. **Ejecuta los tests** para ver todas las validaciones en acción

## 🤝 Contribuir

Para añadir nuevas validaciones:

1. Añade el schema en `validaciones.ts`
2. Exporta los tipos TypeScript
3. Añade tests en `validaciones.test.ts`
4. Documenta en `README-validaciones.md`
5. Añade ejemplos en `ejemplos-validaciones.ts`

---

**¿Preguntas?** Revisa la [documentación completa](./README-validaciones.md) o los [ejemplos](./ejemplos-validaciones.ts).
