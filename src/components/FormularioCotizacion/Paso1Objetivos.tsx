"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Target, FileText, Lightbulb, Monitor } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const tiposSoftware = [
  { value: "web", label: "Aplicación Web", icon: Monitor },
  { value: "mobile", label: "Aplicación Móvil", icon: Monitor },
  { value: "desktop", label: "Aplicación Desktop", icon: Monitor },
  { value: "hibrido", label: "Híbrido/Multi-plataforma", icon: Monitor },
];

const industrias = [
  "E-commerce",
  "Finanzas",
  "Salud",
  "Educación",
  "Logística",
  "Manufactura",
  "Entretenimiento",
  "Marketing",
  "Recursos Humanos",
  "Inmobiliaria",
  "Otro",
];

export default function Paso1Objetivos() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Objetivos del Proyecto
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Cuéntanos sobre tu proyecto y sus objetivos principales
        </p>
      </div>

      {/* Nombre del Proyecto */}
      <div>
        <label
          htmlFor="nombreProyecto"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <FileText className="w-4 h-4" />
          Nombre del Proyecto
        </label>
        <input
          id="nombreProyecto"
          type="text"
          {...register("paso1.nombreProyecto")}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          placeholder="Ej: Sistema de gestión de inventario"
        />
        {errors.paso1?.nombreProyecto && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.paso1.nombreProyecto.message}
          </p>
        )}
      </div>

      {/* Descripción */}
      <div>
        <label
          htmlFor="descripcion"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <FileText className="w-4 h-4" />
          Descripción Breve
        </label>
        <textarea
          id="descripcion"
          {...register("paso1.descripcion")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Describe brevemente qué hará tu software..."
        />
        {errors.paso1?.descripcion && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.paso1.descripcion.message}
          </p>
        )}
      </div>

      {/* Objetivo Principal */}
      <div>
        <label
          htmlFor="objetivoPrincipal"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <Target className="w-4 h-4" />
          Objetivo Principal
        </label>
        <textarea
          id="objetivoPrincipal"
          {...register("paso1.objetivoPrincipal")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="¿Qué problema resolverá este software?"
        />
        {errors.paso1?.objetivoPrincipal && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.paso1.objetivoPrincipal.message}
          </p>
        )}
      </div>

      {/* Tipo de Software */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Monitor className="w-4 h-4" />
          Tipo de Software
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiposSoftware.map((tipo) => (
            <label
              key={tipo.value}
              className="relative flex items-center p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <input
                type="radio"
                {...register("paso1.tipoSoftware")}
                value={tipo.value}
                className="sr-only peer"
              />
              <div className="flex items-center gap-3 w-full peer-checked:text-blue-600 dark:peer-checked:text-blue-400">
                <tipo.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{tipo.label}</span>
              </div>
              <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </label>
          ))}
        </div>
        {errors.paso1?.tipoSoftware && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso1.tipoSoftware.message}
          </p>
        )}
      </div>

      {/* Industria */}
      <div>
        <label
          htmlFor="industria"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <Lightbulb className="w-4 h-4" />
          Industria / Sector
        </label>
        <select
          id="industria"
          {...register("paso1.industria")}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="">Selecciona una industria</option>
          {industrias.map((industria) => (
            <option key={industria} value={industria}>
              {industria}
            </option>
          ))}
        </select>
        {errors.paso1?.industria && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.paso1.industria.message}
          </p>
        )}
      </div>
    </div>
  );
}
