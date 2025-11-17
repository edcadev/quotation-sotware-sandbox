"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import {
  CheckCircle2,
  FileText,
  Users,
  User,
  Layers,
  Cpu,
  Plug,
  Palette,
  DollarSign,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import type { FormularioCompleto } from "./schemas";

interface SeccionResumenProps {
  icono: React.ReactNode;
  titulo: string;
  datos: Array<{ label: string; valor: React.ReactNode }>;
  defaultOpen?: boolean;
}

function SeccionResumen({ icono, titulo, datos, defaultOpen = false }: SeccionResumenProps) {
  const [abierto, setAbierto] = useState(defaultOpen);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icono}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {titulo}
          </h3>
        </div>
        {abierto ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {abierto && (
        <div className="p-4 space-y-3">
          {datos.map((dato, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 sm:w-1/3">
                {dato.label}:
              </span>
              <span className="text-sm text-gray-900 dark:text-white sm:w-2/3">
                {dato.valor || <span className="text-gray-400">No especificado</span>}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ResumenFinal() {
  const { getValues } = useFormContext<FormularioCompleto>();
  const formData = getValues();

  const formatearArray = (arr?: string[]) => {
    if (!arr || arr.length === 0) return null;
    return arr.join(", ");
  };

  const formatearBooleano = (valor?: boolean) => {
    return valor ? "Sí" : "No";
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Resumen de tu Solicitud
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Revisa la información antes de enviar
        </p>
      </div>

      <div className="space-y-4">
        {/* Paso 0: Datos del Cliente */}
        <SeccionResumen
          icono={<User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
          titulo="Datos de Contacto"
          defaultOpen={true}
          datos={[
            { label: "Nombre", valor: formData.paso0?.nombreCliente },
            { label: "Email", valor: formData.paso0?.emailCliente },
            { label: "Empresa", valor: formData.paso0?.empresaCliente },
            { label: "Teléfono", valor: formData.paso0?.telefonoCliente },
          ]}
        />

        {/* Paso 1: Objetivos */}
        <SeccionResumen
          icono={<FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
          titulo="Objetivos del Proyecto"
          datos={[
            { label: "Nombre del Proyecto", valor: formData.paso1?.nombreProyecto },
            { label: "Descripción", valor: formData.paso1?.descripcion },
            { label: "Objetivo Principal", valor: formData.paso1?.objetivoPrincipal },
            { label: "Tipo de Software", valor: formData.paso1?.tipoSoftware },
            { label: "Industria", valor: formData.paso1?.industria },
          ]}
        />

        {/* Paso 2: Usuarios */}
        <SeccionResumen
          icono={<Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />}
          titulo="Usuarios del Sistema"
          datos={[
            { label: "Número de Usuarios", valor: formData.paso2?.numeroUsuarios },
            { label: "Tipos de Usuario", valor: formatearArray(formData.paso2?.tiposUsuario) },
            { label: "Perfiles de Usuario", valor: formData.paso2?.perfilesUsuario },
            {
              label: "Accesibilidad",
              valor: formatearBooleano(formData.paso2?.necesidadesAccesibilidad),
            },
            {
              label: "Detalles Accesibilidad",
              valor: formData.paso2?.detallesAccesibilidad,
            },
          ]}
        />

        {/* Paso 3: Funcionalidades */}
        <SeccionResumen
          icono={<Layers className="w-5 h-5 text-green-600 dark:text-green-400" />}
          titulo="Funcionalidades"
          datos={[
            {
              label: "Funcionalidades Principales",
              valor: formatearArray(formData.paso3?.funcionalidadesCore),
            },
            {
              label: "Funcionalidades Adicionales",
              valor: formatearArray(formData.paso3?.funcionalidadesOpcionales),
            },
            {
              label: "Módulos Personalizados",
              valor: formData.paso3?.modulosPersonalizados,
            },
            { label: "Nivel de Complejidad", valor: formData.paso3?.nivelComplejidad },
          ]}
        />

        {/* Paso 4: Requisitos Técnicos */}
        <SeccionResumen
          icono={<Cpu className="w-5 h-5 text-orange-600 dark:text-orange-400" />}
          titulo="Requisitos Técnicos"
          datos={[
            { label: "Plataformas", valor: formatearArray(formData.paso4?.plataformas) },
            { label: "Navegadores", valor: formatearArray(formData.paso4?.navegadores) },
            {
              label: "Dispositivos Móviles",
              valor: formatearArray(formData.paso4?.dispositivosMoviles),
            },
            {
              label: "Requisitos de Rendimiento",
              valor: formData.paso4?.requisitosRendimiento,
            },
            {
              label: "Seguridad",
              valor: formatearArray(formData.paso4?.seguridadRequerida),
            },
            {
              label: "Cumplimiento Normativo",
              valor: formatearArray(formData.paso4?.cumplimientoNormativo),
            },
          ]}
        />

        {/* Paso 5: Integraciones */}
        <SeccionResumen
          icono={<Plug className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
          titulo="Integraciones"
          datos={[
            {
              label: "Requiere Integraciones",
              valor: formatearBooleano(formData.paso5?.necesitaIntegraciones),
            },
            {
              label: "Sistemas a Integrar",
              valor: formatearArray(formData.paso5?.sistemasIntegrar),
            },
            { label: "APIs Externas", valor: formatearArray(formData.paso5?.apisExternas) },
            { label: "Tipo de Integración", valor: formData.paso5?.tipoIntegracion },
            {
              label: "Detalles de Integración",
              valor: formData.paso5?.detallesIntegracion,
            },
          ]}
        />

        {/* Paso 6: Diseño */}
        <SeccionResumen
          icono={<Palette className="w-5 h-5 text-pink-600 dark:text-pink-400" />}
          titulo="Diseño y UX/UI"
          datos={[
            { label: "Tiene Diseño", valor: formatearBooleano(formData.paso6?.tieneDiseno) },
            { label: "Tipo de Diseño", valor: formData.paso6?.tipoDiseno },
            {
              label: "Preferencias de Estilo",
              valor: formatearArray(formData.paso6?.preferenciaEstilo),
            },
            {
              label: "Branding Existente",
              valor: formatearBooleano(formData.paso6?.brandingExistente),
            },
            {
              label: "Necesita Diseño UX/UI",
              valor: formatearBooleano(formData.paso6?.necesitaUXUI),
            },
            { label: "Comentarios de Diseño", valor: formData.paso6?.comentariosDiseno },
          ]}
        />

        {/* Paso 7: Presupuesto */}
        <SeccionResumen
          icono={<DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
          titulo="Presupuesto y Tiempos"
          datos={[
            { label: "Presupuesto Estimado", valor: formData.paso7?.presupuestoEstimado },
            {
              label: "Presupuesto Flexible",
              valor: formatearBooleano(formData.paso7?.presupuestoFlexible),
            },
            { label: "Tiempo Estimado", valor: formData.paso7?.tiempoEstimado },
            { label: "Fecha de Inicio", valor: formData.paso7?.fechaInicio },
            { label: "Prioridad", valor: formData.paso7?.prioridad },
            {
              label: "Observaciones Adicionales",
              valor: formData.paso7?.observacionesAdicionales,
            },
          ]}
        />
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-6">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          <strong>Nota:</strong> Una vez enviado el formulario, procesaremos tu solicitud y
          te contactaremos en las próximas 24-48 horas con una cotización detallada.
        </p>
      </div>
    </div>
  );
}
