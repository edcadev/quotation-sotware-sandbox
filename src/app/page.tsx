import FormularioMultiPaso from "@/components/FormularioCotizacion/FormularioMultiPaso";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Sistema de Cotización
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Complete el siguiente formulario para generar su cotización
              personalizada. Nuestro sistema le guiará paso a paso para obtener
              la mejor propuesta para sus necesidades.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#formulario"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Comenzar Cotización
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Formulario Section */}
      <section id="formulario" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <FormularioMultiPaso />
      </section>
    </div>
  );
}
