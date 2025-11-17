"use client";

import type React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Palette, Layout, Image, Sparkles, FileText } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const tiposDiseno = [
  {
    value: "completo",
    label: "Diseño Completo",
    descripcion: "Tengo diseños finales listos (Figma, Adobe XD, etc.)",
  },
  {
    value: "wireframes",
    label: "Wireframes/Bocetos",
    descripcion: "Tengo bocetos o wireframes básicos",
  },
  {
    value: "referencias",
    label: "Referencias",
    descripcion: "Tengo referencias de otros sitios/apps",
  },
  {
    value: "ninguno",
    label: "Sin Diseño",
    descripcion: "Necesito que diseñen desde cero",
  },
];

const estilosPreferencia = [
  "Minimalista",
  "Moderno",
  "Corporativo",
  "Creativo/Artístico",
  "Material Design",
  "Flat Design",
  "Neumorfismo",
  "Glassmorphism",
];

export default function Paso6Diseno() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  const tieneDiseno = useWatch({
    control,
    name: "paso6.tieneDiseno",
  });

  const tipoDiseno = useWatch({
    control,
    name: "paso6.tipoDiseno",
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Diseño y UX/UI
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Cuéntanos sobre los aspectos visuales y de experiencia de usuario
        </p>
      </div>

      {/* ¿Tiene Diseño? */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso6.tieneDiseno")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <Layout className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Ya cuento con diseños o referencias visuales
            </span>
          </div>
        </label>
      </div>

      {tieneDiseno && (
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            <Image className="w-4 h-4" />
            Tipo de Diseño Disponible
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tiposDiseno.map((tipo) => (
              <label
                key={tipo.value}
                className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <input
                  type="radio"
                  {...register("paso6.tipoDiseno")}
                  value={tipo.value}
                  className="sr-only peer"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white peer-checked:text-blue-600 dark:peer-checked:text-blue-400">
                  {tipo.label}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {tipo.descripcion}
                </span>
                <div className="absolute inset-0 border-2 border-blue-600 dark:border-blue-400 rounded-lg opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Preferencia de Estilo */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Palette className="w-4 h-4" />
          Preferencia de Estilo Visual (opcional)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {estilosPreferencia.map((estilo) => (
            <label
              key={estilo}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso6.preferenciaEstilo")}
                value={estilo}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {estilo}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Branding Existente */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso6.brandingExistente")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Tengo manual de marca/branding existente
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Logo, colores corporativos, tipografías, guías de estilo, etc.
            </span>
          </div>
        </label>
      </div>

      {/* Necesita UX/UI */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-blue-50 dark:bg-blue-900/20">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso6.necesitaUXUI")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Necesito servicios de diseño UX/UI profesional
              </span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              Incluye investigación de usuarios, arquitectura de información, diseño de interfaz
            </span>
          </div>
        </label>
      </div>

      {/* Comentarios de Diseño */}
      <div>
        <label
          htmlFor="comentariosDiseno"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <FileText className="w-4 h-4" />
          Comentarios Adicionales sobre Diseño (opcional)
        </label>
        <textarea
          id="comentariosDiseno"
          {...register("paso6.comentariosDiseno")}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Comparte cualquier idea, preferencia o requisito adicional sobre el diseño..."
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Ejemplo: "Busco un diseño limpio con predominancia de azules, inspirado en aplicaciones financieras modernas..."
        </p>
      </div>
    </div>
  );
}
