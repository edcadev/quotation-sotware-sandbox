import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UpdateCotizacionSchema } from '@/lib/validations/cotizacion';
import { Prisma } from '@/app/generated/prisma';

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * GET /api/cotizaciones/[id]
 * Obtiene una cotización específica por ID
 */
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID de cotización no proporcionado' },
        { status: 400 }
      );
    }

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

    return NextResponse.json({
      data: cotizacion,
    });
  } catch (error) {
    console.error('Error al obtener cotización:', error);
    return NextResponse.json(
      {
        error: 'Error al obtener la cotización',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/cotizaciones/[id]
 * Actualiza una cotización existente
 */
export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID de cotización no proporcionado' },
        { status: 400 }
      );
    }

    // Verificar que la cotización existe
    const existingCotizacion = await prisma.cotizacion.findUnique({
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

    if (!existingCotizacion) {
      return NextResponse.json(
        { error: 'Cotización no encontrada' },
        { status: 404 }
      );
    }

    const body = await request.json();

    // Validar datos de entrada
    const validationResult = UpdateCotizacionSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Datos de actualización inválidos',
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Actualizar cotización con todas sus relaciones
    const cotizacion = await prisma.cotizacion.update({
      where: { id },
      data: {
        ...(data.nombreCliente && { nombreCliente: data.nombreCliente }),
        ...(data.emailCliente && { emailCliente: data.emailCliente }),
        ...(data.empresaCliente !== undefined && { empresaCliente: data.empresaCliente }),
        ...(data.telefonoCliente !== undefined && { telefonoCliente: data.telefonoCliente }),
        ...(data.estado && { estado: data.estado }),
        ...(data.notasInternas !== undefined && { notasInternas: data.notasInternas }),

        // Actualizar o crear relaciones anidadas
        ...(data.objetivosVision && {
          objetivosVision: existingCotizacion.objetivosVision
            ? {
                update: data.objetivosVision,
              }
            : {
                create: data.objetivosVision,
              },
        }),

        ...(data.usuariosRoles && {
          usuariosRoles: existingCotizacion.usuariosRoles
            ? {
                update: data.usuariosRoles,
              }
            : {
                create: data.usuariosRoles,
              },
        }),

        ...(data.alcanceFuncionalidades && {
          alcanceFuncionalidades: existingCotizacion.alcanceFuncionalidades
            ? {
                update: data.alcanceFuncionalidades,
              }
            : {
                create: data.alcanceFuncionalidades,
              },
        }),

        ...(data.requerimientosTecnicos && {
          requerimientosTecnicos: existingCotizacion.requerimientosTecnicos
            ? {
                update: data.requerimientosTecnicos,
              }
            : {
                create: data.requerimientosTecnicos,
              },
        }),

        ...(data.integraciones && {
          integraciones: existingCotizacion.integraciones
            ? {
                update: data.integraciones,
              }
            : {
                create: data.integraciones,
              },
        }),

        ...(data.disenoUX && {
          disenoUX: existingCotizacion.disenoUX
            ? {
                update: data.disenoUX,
              }
            : {
                create: data.disenoUX,
              },
        }),

        ...(data.presupuestoTiempos && {
          presupuestoTiempos: existingCotizacion.presupuestoTiempos
            ? {
                update: {
                  ...data.presupuestoTiempos,
                  // Convertir string a Date si existe fechaLimite
                  ...(data.presupuestoTiempos.fechaLimite && {
                    fechaLimite: new Date(data.presupuestoTiempos.fechaLimite),
                  }),
                },
              }
            : {
                create: {
                  ...data.presupuestoTiempos,
                  // Convertir string a Date si existe fechaLimite
                  ...(data.presupuestoTiempos.fechaLimite && {
                    fechaLimite: new Date(data.presupuestoTiempos.fechaLimite),
                  }),
                },
              },
        }),
      },
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

    return NextResponse.json({
      message: 'Cotización actualizada exitosamente',
      data: cotizacion,
    });
  } catch (error) {
    console.error('Error al actualizar cotización:', error);

    // Manejar errores específicos de Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return NextResponse.json(
          {
            error: 'Ya existe una cotización con estos datos',
            details: error.meta,
          },
          { status: 409 }
        );
      }
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: 'Cotización no encontrada' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Error al actualizar la cotización',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/cotizaciones/[id]
 * Elimina una cotización
 */
export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        { error: 'ID de cotización no proporcionado' },
        { status: 400 }
      );
    }

    // Verificar que la cotización existe antes de eliminar
    const existingCotizacion = await prisma.cotizacion.findUnique({
      where: { id },
    });

    if (!existingCotizacion) {
      return NextResponse.json(
        { error: 'Cotización no encontrada' },
        { status: 404 }
      );
    }

    // Eliminar cotización (las relaciones se eliminan en cascada según el schema)
    await prisma.cotizacion.delete({
      where: { id },
    });

    return NextResponse.json({
      message: 'Cotización eliminada exitosamente',
      data: { id },
    });
  } catch (error) {
    console.error('Error al eliminar cotización:', error);

    // Manejar errores específicos de Prisma
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2025') {
        return NextResponse.json(
          { error: 'Cotización no encontrada' },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Error al eliminar la cotización',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
