"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { CheckSquare, Sparkles, Layers, Gauge } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const funcionalidadesCore = [
  "Autenticación y autorización",
  "Gestión de usuarios",
  "Dashboard/Panel de control",
  "Reportes y estadísticas",
  "CRUD básico",
  "Búsqueda y filtros",
  "Notificaciones",
  "Exportación de datos",
  "Carga de archivos",
  "Sistema de roles y permisos",
];

const funcionalidadesOpcionales = [
  "Chat en tiempo real",
  "Notificaciones push",
  "Geolocalización",
  "Pagos en línea",
  "Firma electrónica",
  "Generación de PDFs",
  "Calendario/Agenda",
  "Sistema de comentarios",
  "Versionado de documentos",
  "Flujos de aprobación",
  "Analytics avanzado",
  "Inteligencia Artificial",
];

const nivelesComplejidad = [
  {
    value: "basica",
    label: "Básica",
    descripcion: "Funcionalidades estándar, sin personalizaciones complejas",
  },
  {
    value: "media",
    label: "Media",
    descripcion: "Algunas personalizaciones y lógica de negocio específica",
  },
  {
    value: "alta",
    label: "Alta",
    descripcion: "Lógica compleja, múltiples integraciones y personalizaciones",
  },
  {
    value: "muy-alta",
    label: "Muy Alta",
    descripcion: "Solución empresarial con requisitos técnicos avanzados",
  },
];

export default function Paso3Funcionalidades() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Funcionalidades
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Selecciona las funcionalidades que necesitas para tu proyecto
        </p>
      </div>

      {/* Funcionalidades Core */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <CheckSquare className="w-4 h-4" />
          Funcionalidades Principales (selecciona al menos una)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {funcionalidadesCore.map((func) => (
            <label
              key={func}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso3.funcionalidadesCore")}
                value={func}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {func}
              </span>
            </label>
          ))}
        </div>
        {errors.paso3?.funcionalidadesCore && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso3.funcionalidadesCore.message}
          </p>
        )}
      </div>

      {/* Funcionalidades Opcionales */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Sparkles className="w-4 h-4" />
          Funcionalidades Adicionales (opcional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {funcionalidadesOpcionales.map((func) => (
            <label
              key={func}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso3.funcionalidadesOpcionales")}
                value={func}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {func}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Módulos Personalizados */}
      <div>
        <label
          htmlFor="modulosPersonalizados"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <Layers className="w-4 h-4" />
          Módulos o Funcionalidades Personalizadas (opcional)
        </label>
        <textarea
          id="modulosPersonalizados"
          {...register("paso3.modulosPersonalizados")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Describe cualquier funcionalidad específica que no esté en la lista anterior..."
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Ejemplo: "Sistema de reservas con calendario interactivo y recordatorios automáticos"
        </p>
      </div>

      {/* Nivel de Complejidad */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Gauge className="w-4 h-4" />
          Nivel de Complejidad Estimado
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nivelesComplejidad.map((nivel) => (
            <label
              key={nivel.value}
              className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <input
                type="radio"
                {...register("paso3.nivelComplejidad")}
                value={nivel.value}
                className="sr-only peer"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white peer-checked:text-blue-600 dark:peer-checked:text-blue-400">
                {nivel.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {nivel.descripcion}
              </span>
              <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </label>
          ))}
        </div>
        {errors.paso3?.nivelComplejidad && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso3.nivelComplejidad.message}
          </p>
        )}
      </div>
    </div>
  );
}
