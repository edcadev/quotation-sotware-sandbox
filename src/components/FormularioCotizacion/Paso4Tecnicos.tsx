"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Cpu, Globe, Smartphone, Zap, Shield, FileCheck } from "lucide-react";
import type { FormularioCompleto } from "./schemas";

const plataformas = [
  "Web (Navegadores)",
  "iOS",
  "Android",
  "Windows",
  "macOS",
  "Linux",
];

const navegadores = [
  "Chrome",
  "Firefox",
  "Safari",
  "Edge",
  "Opera",
];

const dispositivosMoviles = [
  "Smartphone",
  "Tablet",
  "Smart TV",
  "Wearables",
];

const requisitosSeguridad = [
  "Encriptación de datos",
  "Autenticación de dos factores (2FA)",
  "Single Sign-On (SSO)",
  "Control de sesiones",
  "Logs de auditoría",
  "Prevención de ataques (CSRF, XSS, SQL Injection)",
  "Copias de seguridad automatizadas",
];

const normativasComplimiento = [
  "GDPR (Europa)",
  "LOPD (España)",
  "HIPAA (Salud - USA)",
  "PCI DSS (Pagos)",
  "ISO 27001",
  "SOC 2",
];

export default function Paso4Tecnicos() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormularioCompleto>();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Requisitos Técnicos
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Define los requisitos técnicos y de seguridad del proyecto
        </p>
      </div>

      {/* Plataformas */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Cpu className="w-4 h-4" />
          Plataformas Objetivo (selecciona al menos una)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {plataformas.map((plataforma) => (
            <label
              key={plataforma}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso4.plataformas")}
                value={plataforma}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {plataforma}
              </span>
            </label>
          ))}
        </div>
        {errors.paso4?.plataformas && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-400">
            {errors.paso4.plataformas.message}
          </p>
        )}
      </div>

      {/* Navegadores */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Globe className="w-4 h-4" />
          Navegadores a Soportar (opcional)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {navegadores.map((navegador) => (
            <label
              key={navegador}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso4.navegadores")}
                value={navegador}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {navegador}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dispositivos Móviles */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Smartphone className="w-4 h-4" />
          Dispositivos Móviles (opcional)
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {dispositivosMoviles.map((dispositivo) => (
            <label
              key={dispositivo}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso4.dispositivosMoviles")}
                value={dispositivo}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {dispositivo}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Requisitos de Rendimiento */}
      <div>
        <label
          htmlFor="requisitosRendimiento"
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          <Zap className="w-4 h-4" />
          Requisitos de Rendimiento (opcional)
        </label>
        <textarea
          id="requisitosRendimiento"
          {...register("paso4.requisitosRendimiento")}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
          placeholder="Ej: Tiempo de carga < 2 segundos, soportar 1000 usuarios concurrentes..."
        />
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          Especifica tiempos de respuesta, usuarios concurrentes, etc.
        </p>
      </div>

      {/* Seguridad */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <Shield className="w-4 h-4" />
          Requisitos de Seguridad (opcional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {requisitosSeguridad.map((requisito) => (
            <label
              key={requisito}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso4.seguridadRequerida")}
                value={requisito}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {requisito}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Cumplimiento Normativo */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          <FileCheck className="w-4 h-4" />
          Cumplimiento Normativo (opcional)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {normativasComplimiento.map((normativa) => (
            <label
              key={normativa}
              className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <input
                type="checkbox"
                {...register("paso4.cumplimientoNormativo")}
                value={normativa}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="ml-3 text-sm text-gray-900 dark:text-white">
                {normativa}
              </span>
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Selecciona las normativas que tu software debe cumplir
        </p>
      </div>
    </div>
  );
}
