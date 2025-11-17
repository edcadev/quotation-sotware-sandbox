import type React from "react";
import { Check } from "lucide-react";

interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
}

interface BarraProgresoProps {
  pasoActual: number;
  pasos: Paso[];
}

export default function BarraProgreso({ pasoActual, pasos }: BarraProgresoProps) {
  const progreso = ((pasoActual) / pasos.length) * 100;

  return (
    <div className="w-full mb-8">
      {/* Barra de progreso visual */}
      <div className="relative mb-8">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progreso}%` }}
          />
        </div>
        <div className="absolute -top-1 right-0 text-xs font-medium text-gray-600 dark:text-gray-400">
          {Math.round(progreso)}%
        </div>
      </div>

      {/* Lista de pasos - Desktop */}
      <div className="hidden md:flex justify-between items-start">
        {pasos.map((paso, index) => {
          const estaCompleto = index < pasoActual - 1;
          const esActual = index === pasoActual - 1;
          const estaPendiente = index > pasoActual - 1;

          return (
            <div
              key={paso.numero}
              className="flex flex-col items-center flex-1 relative"
            >
              {/* Línea conectora */}
              {index < pasos.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 w-full h-0.5 -z-10 ${
                    estaCompleto
                      ? "bg-blue-600 dark:bg-blue-500"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              )}

              {/* Círculo del paso */}
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold mb-2 transition-all duration-300
                  ${
                    estaCompleto
                      ? "bg-blue-600 dark:bg-blue-500 text-white"
                      : esActual
                      ? "bg-blue-600 dark:bg-blue-500 text-white ring-4 ring-blue-200 dark:ring-blue-900"
                      : "bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
                  }
                `}
              >
                {estaCompleto ? <Check className="w-5 h-5" /> : paso.numero}
              </div>

              {/* Título y descripción */}
              <div className="text-center max-w-32">
                <p
                  className={`text-sm font-medium ${
                    esActual
                      ? "text-blue-600 dark:text-blue-400"
                      : estaPendiente
                      ? "text-gray-500 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {paso.titulo}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicador de paso - Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-blue-600 dark:bg-blue-500 text-white"
            >
              {pasoActual}
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {pasos[pasoActual - 1]?.titulo}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Paso {pasoActual} de {pasos.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
