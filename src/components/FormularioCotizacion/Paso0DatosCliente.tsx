"use client";

import { useFormContext } from "react-hook-form";
import { User, Mail, Building2, Phone } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

export default function Paso0DatosCliente() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
          <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Información de Contacto
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Para poder enviarte la cotización, necesitamos tus datos de contacto
        </p>
      </div>

      <div className="space-y-5">
        {/* Nombre del Cliente */}
        <div>
          <label
            htmlFor="nombreCliente"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <User className="w-4 h-4" />
            Nombre Completo
            <span className="text-red-500">*</span>
          </label>
          <input
            id="nombreCliente"
            type="text"
            {...register("paso0.nombreCliente")}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="Juan Pérez"
          />
          {errors.paso0?.nombreCliente && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.paso0.nombreCliente.message}
            </p>
          )}
        </div>

        {/* Email del Cliente */}
        <div>
          <label
            htmlFor="emailCliente"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <Mail className="w-4 h-4" />
            Email
            <span className="text-red-500">*</span>
          </label>
          <input
            id="emailCliente"
            type="email"
            {...register("paso0.emailCliente")}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="juan.perez@empresa.com"
          />
          {errors.paso0?.emailCliente && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.paso0.emailCliente.message}
            </p>
          )}
        </div>

        {/* Empresa del Cliente */}
        <div>
          <label
            htmlFor="empresaCliente"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <Building2 className="w-4 h-4" />
            Empresa (Opcional)
          </label>
          <input
            id="empresaCliente"
            type="text"
            {...register("paso0.empresaCliente")}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="Mi Empresa S.A."
          />
        </div>

        {/* Teléfono del Cliente */}
        <div>
          <label
            htmlFor="telefonoCliente"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            <Phone className="w-4 h-4" />
            Teléfono (Opcional)
          </label>
          <input
            id="telefonoCliente"
            type="tel"
            {...register("paso0.telefonoCliente")}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
            placeholder="+51 987 654 321"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Nota:</strong> Tus datos están seguros. Solo los usaremos para
          enviarte la cotización y contactarte sobre tu proyecto.
        </p>
      </div>
    </div>
  );
}
