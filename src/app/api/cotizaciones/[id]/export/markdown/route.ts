import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { cotizacionToMarkdown } from '@/lib/markdown-export';

/**
 * GET /api/cotizaciones/[id]/export/markdown
 * Exporta una cotización específica en formato Markdown
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Buscar la cotización con todas sus relaciones
    const cotizacion = await prisma.cotizacion.findUnique({
      where: { id },
      include: {
        objetivosVision: true,
        usuariosRoles: true,
        alcanceFuncionalidades: true,
        requerimientosTecnicos: true,
        integraciones: true,
        disenoUX: true,
        presupuestoTiempos: true,
      },
    });

    if (!cotizacion) {
      return NextResponse.json(
        { error: 'Cotización no encontrada' },
        { status: 404 }
      );
    }

    // Convertir a Markdown
    const markdownContent = cotizacionToMarkdown(cotizacion);

    // Generar nombre de archivo
    const fileName = `cotizacion-${cotizacion.nombreCliente.replace(/\s+/g, '-').toLowerCase()}-${id.slice(-8)}.md`;

    // Retornar el archivo Markdown para descarga
    return new NextResponse(markdownContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('Error exporting cotizacion to markdown:', error);
    return NextResponse.json(
      { error: 'Error al exportar la cotización' },
      { status: 500 }
    );
  }
}
