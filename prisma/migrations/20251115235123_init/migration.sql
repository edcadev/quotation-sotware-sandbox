-- CreateEnum
CREATE TYPE "EstadoCotizacion" AS ENUM ('BORRADOR', 'ENVIADA', 'EN_REVISION', 'APROBADA', 'RECHAZADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "Plataforma" AS ENUM ('WEB', 'MOBILE_IOS', 'MOBILE_ANDROID', 'DESKTOP_WINDOWS', 'DESKTOP_MAC', 'DESKTOP_LINUX', 'PROGRESSIVE_WEB_APP');

-- CreateEnum
CREATE TYPE "TipoMoneda" AS ENUM ('USD', 'EUR', 'MXN', 'COP', 'ARS', 'CLP', 'PEN');

-- CreateEnum
CREATE TYPE "EscalaUsuarios" AS ENUM ('PEQUENA', 'MEDIANA', 'GRANDE', 'MUY_GRANDE');

-- CreateTable
CREATE TABLE "cotizaciones" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombreCliente" TEXT NOT NULL,
    "emailCliente" TEXT NOT NULL,
    "empresaCliente" TEXT,
    "telefonoCliente" TEXT,
    "estado" "EstadoCotizacion" NOT NULL DEFAULT 'BORRADOR',
    "notasInternas" TEXT,

    CONSTRAINT "cotizaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objetivos_vision" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "problemaPrincipal" TEXT NOT NULL,
    "objetivoPrincipal" TEXT NOT NULL,
    "procesoActual" TEXT,
    "competenciaReferencia" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "objetivos_vision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_roles" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "usuariosFinales" TEXT NOT NULL,
    "tiposRoles" TEXT,
    "descripcionRoles" TEXT,
    "cantidadUsuarios" TEXT,
    "escalaUsuarios" "EscalaUsuarios",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alcance_funcionalidades" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "funcionalidadesClave" TEXT NOT NULL,
    "flujosPrincipales" TEXT NOT NULL,
    "funcionalidadesFase1" TEXT,
    "funcionalidadesFase2" TEXT,
    "fueraDeAlcance" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "alcance_funcionalidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "requerimientos_tecnicos" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "plataformas" "Plataforma"[],
    "detallesPlataforma" TEXT,
    "hosting" TEXT,
    "tecnologias" TEXT,
    "requisitoRendimiento" TEXT,
    "requisitoSeguridad" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "requerimientos_tecnicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "integraciones" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "sistemasExternos" TEXT,
    "apisTerceros" TEXT,
    "migracionDatos" TEXT,
    "reportes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "integraciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diseno_ux" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "tieneDisenoVisual" BOOLEAN NOT NULL DEFAULT false,
    "disenoVisualUrl" TEXT,
    "tieneGuiaEstilo" BOOLEAN NOT NULL DEFAULT false,
    "guiaEstilo" TEXT,
    "requiereDiseno" BOOLEAN NOT NULL DEFAULT false,
    "entregables" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "diseno_ux_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "presupuesto_tiempos" (
    "id" TEXT NOT NULL,
    "cotizacionId" TEXT NOT NULL,
    "tienePresupuesto" BOOLEAN NOT NULL DEFAULT false,
    "presupuestoMin" DECIMAL(10,2),
    "presupuestoMax" DECIMAL(10,2),
    "moneda" "TipoMoneda" DEFAULT 'USD',
    "tieneFechaLimite" BOOLEAN NOT NULL DEFAULT false,
    "fechaLimite" TIMESTAMP(3),
    "razonFechaLimite" TEXT,
    "planMantenimiento" TEXT,
    "nombreDecidor" TEXT,
    "cargoDecidor" TEXT,
    "contactoDecidor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presupuesto_tiempos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "objetivos_vision_cotizacionId_key" ON "objetivos_vision"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_roles_cotizacionId_key" ON "usuarios_roles"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "alcance_funcionalidades_cotizacionId_key" ON "alcance_funcionalidades"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "requerimientos_tecnicos_cotizacionId_key" ON "requerimientos_tecnicos"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "integraciones_cotizacionId_key" ON "integraciones"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "diseno_ux_cotizacionId_key" ON "diseno_ux"("cotizacionId");

-- CreateIndex
CREATE UNIQUE INDEX "presupuesto_tiempos_cotizacionId_key" ON "presupuesto_tiempos"("cotizacionId");

-- AddForeignKey
ALTER TABLE "objetivos_vision" ADD CONSTRAINT "objetivos_vision_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_roles" ADD CONSTRAINT "usuarios_roles_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alcance_funcionalidades" ADD CONSTRAINT "alcance_funcionalidades_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "requerimientos_tecnicos" ADD CONSTRAINT "requerimientos_tecnicos_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "integraciones" ADD CONSTRAINT "integraciones_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diseno_ux" ADD CONSTRAINT "diseno_ux_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "presupuesto_tiempos" ADD CONSTRAINT "presupuesto_tiempos_cotizacionId_fkey" FOREIGN KEY ("cotizacionId") REFERENCES "cotizaciones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
