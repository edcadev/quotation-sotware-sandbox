# Skill: Sistema de Cotización de Software

## Contexto del Proyecto

Este es un sistema Next.js para recopilar información de clientes que solicitan cotizaciones de desarrollo de software.

## Objetivo

Crear un formulario web que capture toda la información necesaria según el documento "Preguntas para Cotizar Desarrollo de Software.md"

## Stack Tecnológico

- **Frontend:** Next.js 15 + React + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes
- **Base de Datos:** PostgreSQL (Supabase) + Prisma ORM
- **Validación:** Zod + React Hook Form
- **Deploy:** Vercel

## Estructura de Datos (7 Categorías)

1. **Objetivos y Visión** - Problema principal, objetivos, proceso actual
2. **Usuarios y Roles** - Tipos de usuarios, cantidad, permisos
3. **Alcance y Funcionalidades** - Features esenciales, MVP, fases
4. **Requerimientos Técnicos** - Plataforma, hosting, tecnología
5. **Integraciones** - Sistemas externos, migración de datos
6. **Diseño UI/UX** - Mockups, guía de estilo, entregables
7. **Presupuesto y Tiempos** - Budget, deadline, mantenimiento

## Funcionalidades Clave

### MVP (Fase 1)

- [ ] Formulario multi-paso con las 7 categorías
- [ ] Validación de campos obligatorios
- [ ] Guardado en base de datos PostgreSQL
- [ ] Dashboard admin para ver cotizaciones
- [ ] Exportar a PDF/Excel

### Fase 2 (Futuro)

- [ ] Envío de email automático
- [ ] Cálculo automático de estimación
- [ ] Sistema de autenticación para clientes
- [ ] Historial de cotizaciones por cliente

## Convenciones de Código

- Usar TypeScript estricto
- Componentes funcionales con hooks
- Tailwind para estilos (mobile-first)
- Nombres en español para campos de negocio
- Comentarios en español para lógica de negocio

## Archivos Importantes

- `/prisma/schema.prisma` - Esquema de base de datos
- `/src/app/api/cotizaciones/route.ts` - API endpoints
- `/src/components/FormularioCotizacion.tsx` - Formulario principal
- `/docs/preguntas.md` - Documento fuente con preguntas
