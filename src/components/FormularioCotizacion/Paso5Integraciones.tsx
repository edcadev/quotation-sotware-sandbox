"use client";

import type React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Plug, Link2, Database, Code, FileText } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const sistemasPopulares = [
  "ERP (SAP, Odoo, etc.)",
  "CRM (Salesforce, HubSpot, etc.)",
  "Sistemas de pago (Stripe, PayPal, etc.)",
  "Email marketing (Mailchimp, SendGrid, etc.)",
  "Almacenamiento en la nube (AWS, Google Cloud, Azure)",
  "Bases de datos existentes",
  "Sistemas legacy",
  "Software contable",
];

const apisExternas = [
  "Google Maps",
  "Redes sociales (Facebook, Twitter, LinkedIn)",
  "Servicios de mensajería (WhatsApp, Telegram)",
  "Pasarelas de pago",
  "Servicios de envío",
  "APIs gubernamentales",
  "APIs de terceros personalizadas",
];

const tiposIntegracion = [
  { value: "rest", label: "REST API", descripcion: "Más común y flexible" },
  { value: "graphql", label: "GraphQL", descripcion: "Consultas optimizadas" },
  { value: "soap", label: "SOAP", descripcion: "Sistemas empresariales legacy" },
  { value: "websockets", label: "WebSockets", descripcion: "Tiempo real" },
  { value: "otro", label: "Otro", descripcion: "Especificar en detalles" },
];

export default function Paso5Integraciones() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  const necesitaIntegraciones = useWatch({
    control,
    name: "paso5.necesitaIntegraciones",
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Integraciones
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Define las integraciones necesarias con sistemas externos
        </p>
      </div>

      {/* Necesita Integraciones */}
      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-800/50">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("paso5.necesitaIntegraciones")}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center gap-2">
            <Plug className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              El proyecto requiere integraciones con sistemas externos
            </span>
          </div>
        </label>
      </div>

      {necesitaIntegraciones && (
        <>
          {/* Sistemas a Integrar */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Database className="w-4 h-4" />
              Sistemas a Integrar (opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sistemasPopulares.map((sistema) => (
                <label
                  key={sistema}
                  className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <input
                    type="checkbox"
                    {...register("paso5.sistemasIntegrar")}
                    value={sistema}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-900 dark:text-white">
                    {sistema}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* APIs Externas */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Link2 className="w-4 h-4" />
              APIs Externas (opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {apisExternas.map((api) => (
                <label
                  key={api}
                  className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <input
                    type="checkbox"
                    {...register("paso5.apisExternas")}
                    value={api}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-gray-900 dark:text-white">
                    {api}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Tipo de Integración */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Code className="w-4 h-4" />
              Tipo de Integración Preferido (opcional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tiposIntegracion.map((tipo) => (
                <label
                  key={tipo.value}
                  className="relative flex flex-col p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                >
                  <input
                    type="radio"
                    {...register("paso5.tipoIntegracion")}
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

          {/* Detalles de Integración */}
          <div>
            <label
              htmlFor="detallesIntegracion"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              <FileText className="w-4 h-4" />
              Detalles Adicionales de Integración (opcional)
            </label>
            <textarea
              id="detallesIntegracion"
              {...register("paso5.detallesIntegracion")}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
              placeholder="Describe los detalles específicos de las integraciones necesarias..."
            />
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Ejemplo: "Sincronización bidireccional con ERP cada 15 minutos, webhooks para notificaciones en tiempo real..."
            </p>
          </div>
        </>
      )}

      {!necesitaIntegraciones && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <Plug className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>No se requieren integraciones con sistemas externos</p>
        </div>
      )}
    </div>
  );
}
