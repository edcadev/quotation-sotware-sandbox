import { Suspense } from 'react';
import type { EstadoCotizacion } from '@/app/generated/prisma';
import { prisma } from '@/lib/prisma';

// Tipo para las cotizaciones cargadas desde la base de datos
interface Cotizacion {
  id: string;
  nombreCliente: string;
  emailCliente: string;
  empresaCliente: string | null;
  telefonoCliente: string | null;
  estado: EstadoCotizacion;
  createdAt: Date;
  updatedAt: Date;
  presupuestoTiempos: {
    presupuestoMin: any | null;
    presupuestoMax: any | null;
    moneda: string | null;
  } | null;
  objetivosVision: {
    problemaPrincipal: string;
  } | null;
}

// Función para obtener datos reales desde la base de datos
async function getCotizaciones(): Promise<Cotizacion[]> {
  try {
    const cotizaciones = await prisma.cotizacion.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
      include: {
        presupuestoTiempos: {
          select: {
            presupuestoMin: true,
            presupuestoMax: true,
            moneda: true,
          },
        },
        objetivosVision: {
          select: {
            problemaPrincipal: true,
          },
        },
      },
    });

    return cotizaciones;
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    return [];
  }
}

// Mapeo de estados de la base de datos a etiquetas legibles
const estadoLabels: Record<EstadoCotizacion, string> = {
  BORRADOR: 'Borrador',
  ENVIADA: 'Nueva',
  EN_REVISION: 'En Revisión',
  APROBADA: 'Aprobada',
  RECHAZADA: 'Rechazada',
  CANCELADA: 'Cancelada',
};

// Función para calcular estadísticas
function calculateStats(cotizaciones: Cotizacion[]) {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlyQuotations = cotizaciones.filter(q => {
    const qDate = new Date(q.createdAt);
    return qDate.getMonth() === currentMonth && qDate.getFullYear() === currentYear;
  });

  const pendingQuotations = cotizaciones.filter(
    q => q.estado === 'ENVIADA' || q.estado === 'EN_REVISION' || q.estado === 'BORRADOR'
  );

  return {
    totalMonth: monthlyQuotations.length,
    pending: pendingQuotations.length,
    approved: cotizaciones.filter(q => q.estado === 'APROBADA').length,
    rejected: cotizaciones.filter(q => q.estado === 'RECHAZADA').length,
  };
}

// Componente de badge de estado
function StatusBadge({ estado }: { estado: EstadoCotizacion }) {
  const styles: Record<EstadoCotizacion, string> = {
    BORRADOR: 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400',
    ENVIADA: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    EN_REVISION: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    APROBADA: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    RECHAZADA: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    CANCELADA: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400',
  };

  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[estado]}`}>
      {estadoLabels[estado]}
    </span>
  );
}

// Componente de tarjeta de estadística
function StatCard({ title, value, icon, color }: { title: string; value: number; icon: string; color: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-zinc-800">
      <div className="p-6">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="truncate text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</dt>
              <dd className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">{value}</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de gráfico simple (barras)
function TrendsChart({ cotizaciones }: { cotizaciones: Cotizacion[] }) {
  // Calcular cotizaciones de los últimos 6 meses
  const now = new Date();
  const monthsData: { label: string; count: number }[] = [];

  for (let i = 5; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthLabel = date.toLocaleDateString('es-ES', { month: 'short' });
    const count = cotizaciones.filter(c => {
      const cDate = new Date(c.createdAt);
      return cDate.getMonth() === date.getMonth() && cDate.getFullYear() === date.getFullYear();
    }).length;

    monthsData.push({ label: monthLabel, count });
  }

  const maxValue = Math.max(...monthsData.map(m => m.count), 1); // Mínimo 1 para evitar división por 0

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-zinc-800">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
        Tendencia de Cotizaciones (Últimos 6 Meses)
      </h3>
      <div className="flex items-end justify-between gap-2 h-48">
        {monthsData.map((month, index) => {
          const height = maxValue > 0 ? (month.count / maxValue) * 100 : 0;
          return (
            <div key={`${month.label}-${index}`} className="flex flex-1 flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center" style={{ height: '160px' }}>
                <div
                  className="w-full bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                  style={{ height: `${height}%`, minHeight: month.count > 0 ? '4px' : '0' }}
                  title={`${month.count} cotizaciones`}
                />
              </div>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 capitalize">{month.label}</span>
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">{month.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Componente principal del dashboard
export default async function AdminDashboard() {
  const cotizaciones = await getCotizaciones();
  const stats = calculateStats(cotizaciones);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white shadow-sm dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Dashboard Administrativo
              </h1>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Gestión y seguimiento de cotizaciones
              </p>
            </div>
            <a
              href="/"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
            >
              Ir al sitio
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Estadísticas */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total del Mes"
            value={stats.totalMonth}
            icon="📊"
            color="bg-blue-100 dark:bg-blue-900/30"
          />
          <StatCard
            title="Pendientes"
            value={stats.pending}
            icon="⏳"
            color="bg-yellow-100 dark:bg-yellow-900/30"
          />
          <StatCard
            title="Aprobadas"
            value={stats.approved}
            icon="✅"
            color="bg-green-100 dark:bg-green-900/30"
          />
          <StatCard
            title="Rechazadas"
            value={stats.rejected}
            icon="❌"
            color="bg-red-100 dark:bg-red-900/30"
          />
        </div>

        {/* Gráfico de Tendencias */}
        <div className="mb-8">
          <TrendsChart cotizaciones={cotizaciones} />
        </div>

        {/* Filtros - Note: Filters are currently UI-only. To make them functional, convert this page to a Client Component */}
        <div className="mb-6 rounded-lg bg-white p-6 shadow dark:bg-zinc-800">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Filtros</h2>
          <p className="mb-4 text-xs text-zinc-500 dark:text-zinc-400">Los filtros son solo visuales. Para habilitarlos, la página debe convertirse en un Client Component.</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Filtro por fecha */}
            <div>
              <label htmlFor="date-filter" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Fecha
              </label>
              <input
                type="date"
                id="date-filter"
                disabled
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 disabled:opacity-50"
              />
            </div>

            {/* Filtro por estado */}
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Estado
              </label>
              <select
                id="status-filter"
                disabled
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 disabled:opacity-50"
              >
                <option value="">Todos</option>
                <option value="BORRADOR">Borrador</option>
                <option value="ENVIADA">Nueva</option>
                <option value="EN_REVISION">En Revisión</option>
                <option value="APROBADA">Aprobada</option>
                <option value="RECHAZADA">Rechazada</option>
                <option value="CANCELADA">Cancelada</option>
              </select>
            </div>

            {/* Filtro por búsqueda */}
            <div>
              <label htmlFor="search-filter" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Buscar cliente
              </label>
              <input
                type="text"
                id="search-filter"
                disabled
                placeholder="Nombre o email..."
                className="mt-1 block w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 disabled:opacity-50"
              />
            </div>
          </div>
        </div>

        {/* Tabla de Cotizaciones */}
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-zinc-800">
          <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Lista de Cotizaciones
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Cliente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Fecha de Solicitud
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Estado
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Presupuesto Est.
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-700 dark:bg-zinc-800">
                {cotizaciones.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        No hay cotizaciones en la base de datos
                      </p>
                      <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                        Las cotizaciones aparecerán aquí cuando se envíen desde el formulario
                      </p>
                    </td>
                  </tr>
                ) : (
                  cotizaciones.map((cotizacion) => {
                    // Calcular presupuesto estimado
                    let presupuestoDisplay = 'N/A';
                    if (cotizacion.presupuestoTiempos) {
                      const { presupuestoMin, presupuestoMax, moneda } = cotizacion.presupuestoTiempos;
                      const currency = moneda || 'USD';
                      const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency === 'MXN' ? '$' : '$';

                      if (presupuestoMin && presupuestoMax) {
                        presupuestoDisplay = `${symbol}${Number(presupuestoMin).toLocaleString('es-ES')} - ${symbol}${Number(presupuestoMax).toLocaleString('es-ES')} ${currency}`;
                      } else if (presupuestoMin) {
                        presupuestoDisplay = `${symbol}${Number(presupuestoMin).toLocaleString('es-ES')}+ ${currency}`;
                      }
                    }

                    return (
                      <tr key={cotizacion.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors">
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex flex-col">
                            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                              {cotizacion.nombreCliente}
                            </div>
                            <div className="text-sm text-zinc-500 dark:text-zinc-400">
                              {cotizacion.emailCliente}
                            </div>
                            {cotizacion.empresaCliente && (
                              <div className="text-xs text-zinc-400 dark:text-zinc-500">
                                {cotizacion.empresaCliente}
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">
                          {new Date(cotizacion.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <StatusBadge estado={cotizacion.estado} />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">
                          {presupuestoDisplay}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                          <div className="flex justify-end gap-2">
                            <a
                              href={`/admin/cotizaciones/${cotizacion.id}`}
                              className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                              title="Ver detalles"
                            >
                              👁️
                            </a>
                            <button
                              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 disabled:opacity-50"
                              title="Editar (próximamente)"
                              disabled
                            >
                              ✏️
                            </button>
                            <button
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                              title="Eliminar (próximamente)"
                              disabled
                            >
                              🗑️
                            </button>
                            <button
                              className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 disabled:opacity-50"
                              title="Exportar (próximamente)"
                              disabled
                            >
                              📥
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
