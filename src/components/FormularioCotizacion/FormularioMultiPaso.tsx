"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import BarraProgreso from "./BarraProgreso";
import Paso0DatosCliente from "./Paso0DatosCliente";
import Paso1Objetivos from "./Paso1Objetivos";
import Paso2Usuarios from "./Paso2Usuarios";
import Paso3Funcionalidades from "./Paso3Funcionalidades";
import Paso4Tecnicos from "./Paso4Tecnicos";
import Paso5Integraciones from "./Paso5Integraciones";
import Paso6Diseno from "./Paso6Diseno";
import Paso7Presupuesto from "./Paso7Presupuesto";
import ResumenFinal from "./ResumenFinal";
import {
  formularioCompletoSchema,
  paso0Schema,
  paso1Schema,
  paso2Schema,
  paso3Schema,
  paso4Schema,
  paso5Schema,
  paso6Schema,
  paso7Schema,
  type FormularioCompleto,
} from "./schemas";
import { mapFormularioToCotizacion } from "@/lib/mapFormularioToCotizacion";

const PASOS = [
  { numero: 0, titulo: "Contacto", descripcion: "Datos del cliente", schema: paso0Schema },
  { numero: 1, titulo: "Objetivos", descripcion: "Información general", schema: paso1Schema },
  { numero: 2, titulo: "Usuarios", descripcion: "Perfiles de usuarios", schema: paso2Schema },
  { numero: 3, titulo: "Funcionalidades", descripcion: "Características", schema: paso3Schema },
  { numero: 4, titulo: "Técnicos", descripcion: "Requisitos técnicos", schema: paso4Schema },
  { numero: 5, titulo: "Integraciones", descripcion: "Sistemas externos", schema: paso5Schema },
  { numero: 6, titulo: "Diseño", descripcion: "UX/UI", schema: paso6Schema },
  { numero: 7, titulo: "Presupuesto", descripcion: "Tiempos y costos", schema: paso7Schema },
  { numero: 8, titulo: "Resumen", descripcion: "Revisión final", schema: null },
];

export default function FormularioMultiPaso() {
  const [pasoActual, setPasoActual] = useState(0);
  const [enviando, setEnviando] = useState(false);

  const methods = useForm<FormularioCompleto>({
    resolver: zodResolver(formularioCompletoSchema) as any,
    mode: "onChange",
    defaultValues: {
      paso0: {
        nombreCliente: "",
        emailCliente: "",
        empresaCliente: "",
        telefonoCliente: "",
      },
      paso1: {
        nombreProyecto: "",
        descripcion: "",
        objetivoPrincipal: "",
        tipoSoftware: undefined,
        industria: "",
      },
      paso2: {
        numeroUsuarios: undefined,
        tiposUsuario: [],
        perfilesUsuario: "",
        necesidadesAccesibilidad: false,
        detallesAccesibilidad: "",
      },
      paso3: {
        funcionalidadesCore: [],
        funcionalidadesOpcionales: [],
        modulosPersonalizados: "",
        nivelComplejidad: undefined,
      },
      paso4: {
        plataformas: [],
        navegadores: [],
        dispositivosMoviles: [],
        requisitosRendimiento: "",
        seguridadRequerida: [],
        cumplimientoNormativo: [],
      },
      paso5: {
        necesitaIntegraciones: false,
        sistemasIntegrar: [],
        apisExternas: [],
        tipoIntegracion: undefined,
        detallesIntegracion: "",
      },
      paso6: {
        tieneDiseno: false,
        tipoDiseno: undefined,
        preferenciaEstilo: [],
        brandingExistente: false,
        necesitaUXUI: false,
        comentariosDiseno: "",
      },
      paso7: {
        presupuestoEstimado: undefined,
        presupuestoFlexible: false,
        tiempoEstimado: undefined,
        fechaInicio: "",
        prioridad: undefined,
        observacionesAdicionales: "",
      },
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
  } = methods;

  const validarPasoActual = async (): Promise<boolean> => {
    const pasoSchema = PASOS.find(p => p.numero === pasoActual)?.schema;
    if (!pasoSchema) return true; // El resumen no necesita validación

    const camposPaso = `paso${pasoActual}` as keyof FormularioCompleto;
    const esValido = await trigger(camposPaso);

    return esValido;
  };

  const siguientePaso = async () => {
    const esValido = await validarPasoActual();

    if (esValido) {
      setPasoActual((prev) => Math.min(prev + 1, PASOS.length));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pasoAnterior = () => {
    setPasoActual((prev) => Math.max(prev - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: FormularioCompleto) => {
    setEnviando(true);
    try {
      // Mapear datos del formulario al formato de la API
      const cotizacionData = mapFormularioToCotizacion(data);

      // Enviar a la API
      const response = await fetch("/api/cotizaciones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cotizacionData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar el formulario");
      }

      const result = await response.json();
      console.log("Cotización creada:", result.data);

      // Mostrar mensaje de éxito
      alert("¡Formulario enviado con éxito! Te contactaremos pronto.");

      // Resetear formulario
      methods.reset();
      setPasoActual(0);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert(
        error instanceof Error
          ? error.message
          : "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  const renderizarPaso = () => {
    switch (pasoActual) {
      case 0:
        return <Paso0DatosCliente />;
      case 1:
        return <Paso1Objetivos />;
      case 2:
        return <Paso2Usuarios />;
      case 3:
        return <Paso3Funcionalidades />;
      case 4:
        return <Paso4Tecnicos />;
      case 5:
        return <Paso5Integraciones />;
      case 6:
        return <Paso6Diseno />;
      case 7:
        return <Paso7Presupuesto />;
      case 8:
        return <ResumenFinal />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Barra de Progreso */}
          <BarraProgreso pasoActual={pasoActual} pasos={PASOS} />

          {/* Contenido del Formulario */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-6">
            {renderizarPaso()}

            {/* Mensajes de Error Globales */}
            {Object.keys(errors).length > 0 && pasoActual !== 8 && (
              <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                  Por favor, completa todos los campos requeridos antes de continuar.
                </p>
              </div>
            )}
          </div>

          {/* Botones de Navegación */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {/* Botón Anterior */}
            <button
              type="button"
              onClick={pasoAnterior}
              disabled={pasoActual === 0}
              className={`
                flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                ${
                  pasoActual === 0
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                }
              `}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            {/* Botón Siguiente/Enviar */}
            {pasoActual < PASOS.length ? (
              <button
                type="button"
                onClick={siguientePaso}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
              >
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={enviando}
                className={`
                  flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg
                  ${
                    enviando
                      ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white"
                  }
                `}
              >
                {enviando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
