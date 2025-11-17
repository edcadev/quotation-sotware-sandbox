"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { DollarSign, Clock, Calendar, AlertCircle, FileText } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const rangosPresupuesto = [
  { value: "menos-10k", label: "Menos de €10,000", descripcion: "Proyecto pequeño" },
  { value: "10k-25k", label: "€10,000 - €25,000", descripcion: "Proyecto mediano" },
  { value: "25k-50k", label: "€25,000 - €50,000", descripcion: "Proyecto grande" },
  { value: "50k-100k", label: "€50,000 - €100,000", descripcion: "Proyecto empresarial" },
  { value: "100k+", label: "Más de €100,000", descripcion: "Proyecto corporativo" },
];

const tiemposEstimados = [
  { value: "1-3meses", label: "1-3 meses", descripcion: "Desarrollo rápido" },
  { value: "3-6meses", label: "3-6 meses", descripcion: "Desarrollo estándar" },
  { value: "6-12meses", label: "6-12 meses", descripcion: "Proyecto complejo" },
  { value: "12meses+", label: "Más de 12 meses", descripcion: "Proyecto a largo plazo" },
];

const nivelesPrioridad = [
  {
    value: "baja",
    label: "Baja",
    descripcion: "Sin urgencia, podemos esperar",
    color: "bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600",
  },
  {
    value: "media",
    label: "Media",
    descripcion: "Importante pero flexible",
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700",
  },
  {
    value: "alta",
    label: "Alta",
    descripcion: "Necesario pronto",
    color: "bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700",
  },
  {
    value: "urgente",
    label: "Urgente",
    descripcion: "Necesario cuanto antes",
    color: "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700",
  },
];

export default function Paso7Presupuesto() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Presupuesto y Tiempos
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Ayúdanos a entender tus expectativas de presupuesto y plazos
        </p>
      </div>

      {/* Presupuesto Estimado */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <DollarSign className="w-4 h-4" />
          Presupuesto Estimado (opcional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rangosPresupuesto.map((rango) => (
            <label
              key={rango.value}
              className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <input
                type="radio"
                {...register("paso7.presupuestoEstimado")}
                value={rango.value}
                className="sr-only peer"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white peer-checked:text-blue-600 dark:peer-checked:text-blue-400">
                {rango.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {rango.descripcion}
              </span>
              <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Esta información nos ayuda a preparar una propuesta adecuada a tus expectativas
        </p>
      </div>

      {/* Presupuesto Flexible */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso7.presupuestoFlexible")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Mi presupuesto es flexible
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Estoy abierto a ajustar el presupuesto según las necesidades del proyecto
            </span>
          </div>
        </label>
      </div>

      {/* Tiempo Estimado */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Clock className="w-4 h-4" />
          Tiempo Estimado de Desarrollo
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiemposEstimados.map((tiempo) => (
            <label
              key={tiempo.value}
              className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <input
                type="radio"
                {...register("paso7.tiempoEstimado")}
                value={tiempo.value}
                className="sr-only peer"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white peer-checked:text-blue-600 dark:peer-checked:text-blue-400">
                {tiempo.label}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {tiempo.descripcion}
              </span>
              <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </label>
          ))}
        </div>
        {errors.paso7?.tiempoEstimado && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso7.tiempoEstimado.message}
          </p>
        )}
      </div>

      {/* Fecha de Inicio */}
      <div>
        <label
          htmlFor="fechaInicio"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <Calendar className="w-4 h-4" />
          Fecha de Inicio Deseada (opcional)
        </label>
        <input
          id="fechaInicio"
          type="date"
          {...register("paso7.fechaInicio")}
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          ¿Cuándo te gustaría comenzar el proyecto?
        </p>
      </div>

      {/* Prioridad */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <AlertCircle className="w-4 h-4" />
          Nivel de Prioridad
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nivelesPrioridad.map((prioridad) => (
            <label
              key={prioridad.value}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer hover:shadow-md transition-all ${prioridad.color}`}
            >
              <input
                type="radio"
                {...register("paso7.prioridad")}
                value={prioridad.value}
                className="sr-only peer"
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white peer-checked:font-bold">
                {prioridad.label}
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {prioridad.descripcion}
              </span>
              <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
            </label>
          ))}
        </div>
        {errors.paso7?.prioridad && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso7.prioridad.message}
          </p>
        )}
      </div>

      {/* Observaciones Adicionales */}
      <div>
        <label
          htmlFor="observacionesAdicionales"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <FileText className="w-4 h-4" />
          Observaciones Adicionales (opcional)
        </label>
        <textarea
          id="observacionesAdicionales"
          {...register("paso7.observacionesAdicionales")}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Comparte cualquier información adicional que consideres relevante para la cotización..."
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Restricciones técnicas, preferencias de metodología de trabajo, requisitos especiales, etc.
        </p>
      </div>
    </div>
  );
}
