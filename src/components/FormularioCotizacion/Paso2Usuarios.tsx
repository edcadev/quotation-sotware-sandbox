"use client";

import type React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Users, User, UserCheck, Accessibility } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const rangosUsuarios = [
  { value: "1-10", label: "1-10 usuarios", descripcion: "Equipo pequeño" },
  { value: "11-50", label: "11-50 usuarios", descripcion: "Empresa pequeña" },
  { value: "51-200", label: "51-200 usuarios", descripcion: "Empresa mediana" },
  { value: "201-1000", label: "201-1000 usuarios", descripcion: "Empresa grande" },
  { value: "1000+", label: "Más de 1000", descripcion: "Corporativo" },
];

const tiposUsuario = [
  "Administradores",
  "Gestores/Managers",
  "Empleados/Staff",
  "Clientes",
  "Proveedores",
  "Público general",
  "Técnicos/Especialistas",
];

export default function Paso2Usuarios() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  const necesidadesAccesibilidad = useWatch({
    control,
    name: "paso2.necesidadesAccesibilidad",
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Usuarios del Sistema
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Define quiénes usarán tu software y sus características
        </p>
      </div>

      {/* Número de Usuarios */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Users className="w-4 h-4" />
          Número Estimado de Usuarios
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {rangosUsuarios.map((rango) => (
            <label
              key={rango.value}
              className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <input
                type="radio"
                {...register("paso2.numeroUsuarios")}
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
        {errors.paso2?.numeroUsuarios && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso2.numeroUsuarios.message}
          </p>
        )}
      </div>

      {/* Tipos de Usuario */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <UserCheck className="w-4 h-4" />
          Tipos de Usuario (selecciona todos los que apliquen)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tiposUsuario.map((tipo) => (
            <label
              key={tipo}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso2.tiposUsuario")}
                value={tipo}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {tipo}
              </span>
            </label>
          ))}
        </div>
        {errors.paso2?.tiposUsuario && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso2.tiposUsuario.message}
          </p>
        )}
      </div>

      {/* Perfiles de Usuario */}
      <div>
        <label
          htmlFor="perfilesUsuario"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <User className="w-4 h-4" />
          Perfiles de Usuario (opcional)
        </label>
        <textarea
          id="perfilesUsuario"
          {...register("paso2.perfilesUsuario")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Describe los diferentes perfiles o roles que tendrán los usuarios..."
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Ejemplo: "Administradores con acceso total, usuarios normales solo lectura..."
        </p>
      </div>

      {/* Accesibilidad */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso2.necesidadesAccesibilidad")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <Accessibility className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Requiere características de accesibilidad
            </span>
          </div>
        </label>

        {necesidadesAccesibilidad && (
          <div className="mt-4">
            <label
              htmlFor="detallesAccesibilidad"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block"
            >
              Detalles de Accesibilidad
            </label>
            <textarea
              id="detallesAccesibilidad"
              {...register("paso2.detallesAccesibilidad")}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
              placeholder="Describe las necesidades específicas de accesibilidad (WCAG, lectores de pantalla, navegación por teclado, etc.)"
            />
          </div>
        )}
      </div>
    </div>
  );
}
