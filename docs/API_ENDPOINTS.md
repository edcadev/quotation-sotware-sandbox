# API Endpoints - Cotizaciones

Este documento describe los endpoints de la API para gestionar cotizaciones.

## Estructura de Archivos

```
src/
├── lib/
│   ├── prisma.ts                          # Cliente Prisma singleton
│   └── validations/
│       └── cotizacion.ts                  # Schemas de validación Zod
└── app/
    └── api/
        └── cotizaciones/
            ├── route.ts                   # GET (listar), POST (crear)
            └── [id]/
                └── route.ts               # GET (obtener), PUT (actualizar), DELETE (eliminar)
```

## Endpoints

### 1. POST /api/cotizaciones
Crea una nueva cotización con todas sus relaciones.

**Request Body:**
```json
{
  "nombreCliente": "string",
  "emailCliente": "string (email)",
  "empresaCliente": "string (opcional)",
  "telefonoCliente": "string (opcional)",
  "estado": "BORRADOR | ENVIADA | EN_REVISION | APROBADA | RECHAZADA | CANCELADA",
  "notasInternas": "string (opcional)",
  "objetivosVision": {
    "problemaPrincipal": "string",
    "objetivoPrincipal": "string",
    "procesoActual": "string (opcional)",
    "competenciaReferencia": "string (opcional)"
  },
  "usuariosRoles": {
    "usuariosFinales": "string",
    "tiposRoles": "string (opcional)",
    "descripcionRoles": "string (opcional)",
    "cantidadUsuarios": "string (opcional)",
    "escalaUsuarios": "PEQUENA | MEDIANA | GRANDE | MUY_GRANDE (opcional)"
  },
  "alcanceFuncionalidades": {
    "funcionalidadesClave": "string",
    "flujosPrincipales": "string",
    "funcionalidadesFase1": "string (opcional)",
    "funcionalidadesFase2": "string (opcional)",
    "fueraDeAlcance": "string (opcional)"
  },
  "requerimientosTecnicos": {
    "plataformas": ["WEB", "MOBILE_IOS", "MOBILE_ANDROID", ...],
    "detallesPlataforma": "string (opcional)",
    "hosting": "string (opcional)",
    "tecnologias": "string (opcional)",
    "requisitoRendimiento": "string (opcional)",
    "requisitoSeguridad": "string (opcional)"
  },
  "integraciones": {
    "sistemasExternos": "string (opcional)",
    "apisTerceros": "string (opcional)",
    "migracionDatos": "string (opcional)",
    "reportes": "string (opcional)"
  },
  "disenoUX": {
    "tieneDisenoVisual": "boolean",
    "disenoVisualUrl": "string (opcional)",
    "tieneGuiaEstilo": "boolean",
    "guiaEstilo": "string (opcional)",
    "requiereDiseno": "boolean",
    "entregables": "string (opcional)"
  },
  "presupuestoTiempos": {
    "tienePresupuesto": "boolean",
    "presupuestoMin": "number (opcional)",
    "presupuestoMax": "number (opcional)",
    "moneda": "USD | EUR | MXN | COP | ARS | CLP | PEN (opcional)",
    "tieneFechaLimite": "boolean",
    "fechaLimite": "string (ISO datetime, opcional)",
    "razonFechaLimite": "string (opcional)",
    "planMantenimiento": "string (opcional)",
    "nombreDecidor": "string (opcional)",
    "cargoDecidor": "string (opcional)",
    "contactoDecidor": "string (opcional)"
  }
}
```

**Response (201):**
```json
{
  "message": "Cotización creada exitosamente",
  "data": { /* Cotización completa con todas las relaciones */ }
}
```

**Errores:**
- `400`: Datos inválidos
- `409`: Conflicto (datos duplicados)
- `500`: Error del servidor

---

### 2. GET /api/cotizaciones
Lista todas las cotizaciones con paginación y filtros opcionales.

**Query Parameters:**
- `page` (number, default: 1): Número de página
- `limit` (number, default: 10, max: 100): Elementos por página
- `estado` (EstadoCotizacion, opcional): Filtrar por estado
- `search` (string, opcional): Buscar en nombre, email o empresa del cliente

**Ejemplo:**
```
GET /api/cotizaciones?page=1&limit=20&estado=BORRADOR&search=acme
```

**Response (200):**
```json
{
  "data": [
    { /* Cotización completa con relaciones */ }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 45,
    "totalPages": 5,
    "hasMore": true
  }
}
```

**Errores:**
- `400`: Parámetros inválidos
- `500`: Error del servidor

---

### 3. GET /api/cotizaciones/[id]
Obtiene una cotización específica por ID.

**Response (200):**
```json
{
  "data": { /* Cotización completa con todas las relaciones */ }
}
```

**Errores:**
- `400`: ID no proporcionado
- `404`: Cotización no encontrada
- `500`: Error del servidor

---

### 4. PUT /api/cotizaciones/[id]
Actualiza una cotización existente. Todos los campos son opcionales.

**Request Body:**
Similar al POST pero todos los campos son opcionales. Se pueden actualizar tanto los campos principales como las relaciones anidadas.

**Response (200):**
```json
{
  "message": "Cotización actualizada exitosamente",
  "data": { /* Cotización completa con todas las relaciones */ }
}
```

**Errores:**
- `400`: ID no proporcionado o datos inválidos
- `404`: Cotización no encontrada
- `409`: Conflicto (datos duplicados)
- `500`: Error del servidor

---

### 5. DELETE /api/cotizaciones/[id]
Elimina una cotización (las relaciones se eliminan en cascada).

**Response (200):**
```json
{
  "message": "Cotización eliminada exitosamente",
  "data": { "id": "cuid_del_registro" }
}
```

**Errores:**
- `400`: ID no proporcionado
- `404`: Cotización no encontrada
- `500`: Error del servidor

---

## Características Implementadas

### ✅ Validación con Zod
- Todos los endpoints validan los datos de entrada usando schemas Zod
- Validación de tipos, formatos y restricciones
- Mensajes de error descriptivos

### ✅ Manejo de Errores
- Errores de validación (400)
- Recursos no encontrados (404)
- Conflictos de datos (409)
- Errores del servidor (500)
- Códigos específicos de Prisma (P2002, P2025, etc.)

### ✅ Paginación
- Soporte para paginación en GET /api/cotizaciones
- Metadatos de paginación incluidos en la respuesta
- Límite máximo de 100 elementos por página

### ✅ Filtros y Búsqueda
- Filtrado por estado de cotización
- Búsqueda por texto en nombre, email y empresa del cliente
- Búsqueda case-insensitive

### ✅ Relaciones Anidadas
- Creación y actualización de todas las 7 categorías
- Actualización inteligente (update si existe, create si no)
- Eliminación en cascada

### ✅ TypeScript
- Tipos completos y seguros
- Inferencia de tipos desde Zod schemas
- Tipos generados desde Prisma

### ✅ Prisma Client Singleton
- Implementación correcta para Next.js
- Previene múltiples instancias en desarrollo
- Optimizado para producción

---

## Ejemplo de Uso

### Crear una cotización mínima:

```typescript
const response = await fetch('/api/cotizaciones', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombreCliente: 'Juan Pérez',
    emailCliente: 'juan@example.com',
    empresaCliente: 'ACME Corp',
    estado: 'BORRADOR',
  }),
});

const { data } = await response.json();
```

### Listar cotizaciones con filtros:

```typescript
const response = await fetch(
  '/api/cotizaciones?page=1&limit=20&estado=ENVIADA&search=acme'
);

const { data, pagination } = await response.json();
```

### Actualizar una cotización:

```typescript
const response = await fetch(`/api/cotizaciones/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    estado: 'APROBADA',
    objetivosVision: {
      problemaPrincipal: 'Nuevo problema',
      objetivoPrincipal: 'Nuevo objetivo',
    },
  }),
});
```

### Eliminar una cotización:

```typescript
const response = await fetch(`/api/cotizaciones/${id}`, {
  method: 'DELETE',
});
```

---

## Notas Técnicas

1. **Prisma Client**: El cliente se genera en `app/generated/prisma` según la configuración del schema.

2. **Validación**: Los schemas de Zod están en [src/lib/validations/cotizacion.ts](../src/lib/validations/cotizacion.ts).

3. **Singleton Pattern**: El cliente Prisma usa el patrón singleton en [src/lib/prisma.ts](../src/lib/prisma.ts) para evitar múltiples conexiones.

4. **Manejo de Fechas**: Las fechas en formato ISO string se convierten automáticamente a objetos Date para Prisma.

5. **Búsqueda**: La búsqueda usa `mode: 'insensitive'` para PostgreSQL (case-insensitive).

6. **Cascada**: Las relaciones se eliminan automáticamente con `onDelete: Cascade` en el schema Prisma.
