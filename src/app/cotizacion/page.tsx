import { FormularioMultiPaso } from "@/components/FormularioCotizacion";

export const metadata = {
  title: "Solicitar Cotización | Quotation Software",
  description: "Completa el formulario para recibir una cotización personalizada de tu proyecto de software",
};

export default function CotizacionPage() {
  return (
    <main className="min-h-screen">
      <FormularioMultiPaso />
    </main>
  );
}
