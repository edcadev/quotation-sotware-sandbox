import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import {
  CreateCotizacionSchema,
  CotizacionesQuerySchema,
  type CreateCotizacionInput,
} from '@/lib/validations/cotizacion';
import { Prisma } from '@/app/generated/prisma';

/**
 * GET /api/cotizaciones
 * Lista todas las cotizaciones con paginación y filtros opcionales
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Validar query params
    const queryResult = CotizacionesQuerySchema.safeParse({
      page: searchParams.get('page'),
      limit: searchParams.get('limit'),
      estado: searchParams.get('estado'),
      search: searchParams.get('search'),
    });

    if (!queryResult.success) {
      return NextResponse.json(
        {
          error: 'Parámetros de consulta inválidos',
          details: queryResult.error.format(),
        },
        { status: 400 }
      );
    }

    const { page, limit, estado, search } = queryResult.data;
    const skip = (page - 1) * limit;

    // Construir filtros
    const where: Prisma.CotizacionWhereInput = {};

    if (estado) {
      where.estado = estado;
    }

    if (search) {
      where.OR = [
        { nombreCliente: { contains: search, mode: 'insensitive' } },
        { emailCliente: { contains: search, mode: 'insensitive' } },
        { empresaCliente: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Ejecutar consulta con paginación
    const [cotizaciones, total] = await Promise.all([
      prisma.cotizacion.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          objetivosVision: true,
          usuariosRoles: true,
          alcanceFuncionalidades: true,
          requerimientosTecnicos: true,
          integraciones: true,
          disenoUX: true,
          presupuestoTiempos: true,
        },
      }),
      prisma.cotizacion.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      data: cotizaciones,
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasMore: page < totalPages,
      },
    });
  } catch (error) {
    console.error('Error al obtener cotizaciones:', error);
    return NextResponse.json(
      {
        error: 'Error al obtener las cotizaciones',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/cotizaciones
 * Crea una nueva cotización
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar datos de entrada
    const validationResult = CreateCotizacionSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Datos de cotización inválidos',
          details: validationResult.error.format(),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Crear cotización con todas sus relaciones
    const cotizacion = await prisma.cotizacion.create({
      data: {
        nombreCliente: data.nombreCliente,
        emailCliente: data.emailCliente,
        empresaCliente: data.empresaCliente,
        telefonoCliente: data.telefonoCliente,
        estado: data.estado,
        notasInternas: data.notasInternas,

        // Crear relaciones anidadas si existen
        ...(data.objetivosVision && {
          objetivosVision: {
            create: data.objetivosVision,
          },
        }),

        ...(data.usuariosRoles && {
          usuariosRoles: {
            create: data.usuariosRoles,
          },
        }),

        ...(data.alcanceFuncionalidades && {
          alcanceFuncionalidades: {
            create: data.alcanceFuncionalidades,
          },
        }),

        ...(data.requerimientosTecnicos && {
          requerimientosTecnicos: {
            create: data.requerimientosTecnicos,
          },
        }),

        ...(data.integraciones && {
          integraciones: {
            create: data.integraciones,
          },
        }),

        ...(data.disenoUX && {
          disenoUX: {
            create: data.disenoUX,
          },
        }),

        ...(data.presupuestoTiempos && {
          presupuestoTiempos: {
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

    return NextResponse.json(
      {
        message: 'Cotización creada exitosamente',
        data: cotizacion,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear cotización:', error);

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
    }

    return NextResponse.json(
      {
        error: 'Error al crear la cotización',
        message: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    );
  }
}
