# Formulario de Cotización Multipaso

Sistema de formulario multipaso para recopilar información de proyectos de software y generar cotizaciones.

## Estructura del Proyecto

```
FormularioCotizacion/
├── FormularioMultiPaso.tsx    # Componente principal orquestador
├── BarraProgreso.tsx          # Indicador de progreso visual
├── Paso1Objetivos.tsx         # Información general del proyecto
├── Paso2Usuarios.tsx          # Perfiles y tipos de usuarios
├── Paso3Funcionalidades.tsx   # Características del sistema
├── Paso4Tecnicos.tsx          # Requisitos técnicos y de seguridad
├── Paso5Integraciones.tsx     # Integraciones con sistemas externos
├── Paso6Diseno.tsx            # Aspectos de diseño y UX/UI
├── Paso7Presupuesto.tsx       # Presupuesto y tiempos
├── ResumenFinal.tsx           # Resumen completo antes de enviar
├── schemas.ts                 # Schemas de validación con Zod
├── index.ts                   # Archivo de exportaciones
└── README.md                  # Esta documentación
```

## Tecnologías Utilizadas

- **React 19.2.0** - Biblioteca de UI
- **React Hook Form 7.66.0** - Manejo de formularios
- **Zod 4.1.12** - Validación de esquemas
- **@hookform/resolvers 5.2.2** - Integración Zod + React Hook Form
- **Tailwind CSS v4** - Estilos
- **Lucide React** - Iconos
- **TypeScript 5** - Type safety

## Uso

### Importación Básica

```tsx
import { FormularioMultiPaso } from "@/components/FormularioCotizacion";

export default function PaginaCotizacion() {
  return <FormularioMultiPaso />;
}
```

### Importaciones Individuales

```tsx
import {
  FormularioMultiPaso,
  Paso1Objetivos,
  BarraProgreso,
  type FormularioCompleto,
  type Paso1Data,
} from "@/components/FormularioCotizacion";
```

## Características

### 1. Validación en Tiempo Real
- Validación con Zod en cada paso
- Mensajes de error descriptivos
- Prevención de avance sin completar campos requeridos

### 2. Diseño Responsive
- Mobile-first approach
- Adaptación automática a diferentes tamaños de pantalla
- Barra de progreso con vista desktop y mobile

### 3. Dark Mode
- Soporte completo para modo oscuro
- Transiciones suaves entre temas

### 4. Navegación Fluida
- Botones Anterior/Siguiente intuitivos
- Scroll automático al cambiar de paso
- Indicador visual del paso actual

### 5. Resumen Final
- Secciones colapsables
- Vista completa de toda la información
- Posibilidad de editar antes de enviar

## Pasos del Formulario

### Paso 1: Objetivos
- Nombre del proyecto
- Descripción general
- Objetivo principal
- Tipo de software (Web, Mobile, Desktop, Híbrido)
- Industria/Sector

### Paso 2: Usuarios
- Número estimado de usuarios
- Tipos de usuario (Admins, Empleados, Clientes, etc.)
- Perfiles de usuario personalizados
- Requisitos de accesibilidad

### Paso 3: Funcionalidades
- Funcionalidades principales (CRUD, Dashboard, Reportes, etc.)
- Funcionalidades adicionales (Chat, Pagos, Notificaciones, etc.)
- Módulos personalizados
- Nivel de complejidad (Básica, Media, Alta, Muy Alta)

### Paso 4: Requisitos Técnicos
- Plataformas objetivo
- Navegadores a soportar
- Dispositivos móviles
- Requisitos de rendimiento
- Seguridad (Encriptación, 2FA, SSO, etc.)
- Cumplimiento normativo (GDPR, HIPAA, PCI DSS, etc.)

### Paso 5: Integraciones
- Sistemas a integrar (ERP, CRM, Pagos, etc.)
- APIs externas (Google Maps, Redes Sociales, etc.)
- Tipo de integración (REST, GraphQL, SOAP, WebSockets)
- Detalles técnicos de integración

### Paso 6: Diseño
- Disponibilidad de diseños existentes
- Tipo de diseño (Completo, Wireframes, Referencias)
- Preferencias de estilo visual
- Manual de marca existente
- Necesidad de servicios UX/UI

### Paso 7: Presupuesto y Tiempos
- Rango de presupuesto estimado
- Flexibilidad presupuestaria
- Tiempo estimado de desarrollo
- Fecha de inicio deseada
- Nivel de prioridad
- Observaciones adicionales

### Paso 8: Resumen
- Vista completa de toda la información
- Secciones organizadas y colapsables
- Confirmación antes de envío

## Personalización

### Modificar Validación

Edita `schemas.ts` para ajustar las reglas de validación:

```typescript
export const paso1Schema = z.object({
  nombreProyecto: z.string().min(3, "Mínimo 3 caracteres"),
  // ... más campos
});
```

### Agregar Nuevos Campos

1. Actualiza el schema correspondiente en `schemas.ts`
2. Añade el campo en el componente del paso correspondiente
3. Incluye el campo en el `ResumenFinal.tsx`

### Personalizar Estilos

Todos los componentes usan clases de Tailwind CSS v4. Modifica las clases directamente en cada componente.

## Envío del Formulario

Actualmente, el formulario tiene un `TODO` para implementar el envío real. Para conectarlo a tu API:

1. Abre `FormularioMultiPaso.tsx`
2. Busca la función `onSubmit`
3. Reemplaza la simulación con tu llamada API:

```typescript
const onSubmit = async (data: FormularioCompleto) => {
  setEnviando(true);
  try {
    const response = await fetch("/api/cotizaciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Error al enviar");

    // Éxito
    alert("¡Formulario enviado con éxito!");
    methods.reset();
    setPasoActual(1);
  } catch (error) {
    console.error(error);
    alert("Error al enviar el formulario");
  } finally {
    setEnviando(false);
  }
};
```

## Tipos TypeScript

Todos los tipos están exportados desde `schemas.ts`:

```typescript
import type {
  FormularioCompleto,
  Paso1Data,
  Paso2Data,
  // ... etc
} from "@/components/FormularioCotizacion";
```

## Mejoras Futuras

- [ ] Guardar progreso en localStorage
- [ ] Exportar a PDF
- [ ] Envío por email
- [ ] Integración con CRM
- [ ] Analytics de completación
- [ ] Tests unitarios
- [ ] Modo wizard con animaciones

## Licencia

Proyecto privado para uso interno.
