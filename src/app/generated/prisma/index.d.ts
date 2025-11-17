
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cotizacion
 * 
 */
export type Cotizacion = $Result.DefaultSelection<Prisma.$CotizacionPayload>
/**
 * Model ObjetivosVision
 * 
 */
export type ObjetivosVision = $Result.DefaultSelection<Prisma.$ObjetivosVisionPayload>
/**
 * Model UsuariosRoles
 * 
 */
export type UsuariosRoles = $Result.DefaultSelection<Prisma.$UsuariosRolesPayload>
/**
 * Model AlcanceFuncionalidades
 * 
 */
export type AlcanceFuncionalidades = $Result.DefaultSelection<Prisma.$AlcanceFuncionalidadesPayload>
/**
 * Model RequerimientosTecnicos
 * 
 */
export type RequerimientosTecnicos = $Result.DefaultSelection<Prisma.$RequerimientosTecnicosPayload>
/**
 * Model Integraciones
 * 
 */
export type Integraciones = $Result.DefaultSelection<Prisma.$IntegracionesPayload>
/**
 * Model DisenoUX
 * 
 */
export type DisenoUX = $Result.DefaultSelection<Prisma.$DisenoUXPayload>
/**
 * Model PresupuestoTiempos
 * 
 */
export type PresupuestoTiempos = $Result.DefaultSelection<Prisma.$PresupuestoTiemposPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EstadoCotizacion: {
  BORRADOR: 'BORRADOR',
  ENVIADA: 'ENVIADA',
  EN_REVISION: 'EN_REVISION',
  APROBADA: 'APROBADA',
  RECHAZADA: 'RECHAZADA',
  CANCELADA: 'CANCELADA'
};

export type EstadoCotizacion = (typeof EstadoCotizacion)[keyof typeof EstadoCotizacion]


export const Plataforma: {
  WEB: 'WEB',
  MOBILE_IOS: 'MOBILE_IOS',
  MOBILE_ANDROID: 'MOBILE_ANDROID',
  DESKTOP_WINDOWS: 'DESKTOP_WINDOWS',
  DESKTOP_MAC: 'DESKTOP_MAC',
  DESKTOP_LINUX: 'DESKTOP_LINUX',
  PROGRESSIVE_WEB_APP: 'PROGRESSIVE_WEB_APP'
};

export type Plataforma = (typeof Plataforma)[keyof typeof Plataforma]


export const TipoMoneda: {
  USD: 'USD',
  EUR: 'EUR',
  MXN: 'MXN',
  COP: 'COP',
  ARS: 'ARS',
  CLP: 'CLP',
  PEN: 'PEN'
};

export type TipoMoneda = (typeof TipoMoneda)[keyof typeof TipoMoneda]


export const EscalaUsuarios: {
  PEQUENA: 'PEQUENA',
  MEDIANA: 'MEDIANA',
  GRANDE: 'GRANDE',
  MUY_GRANDE: 'MUY_GRANDE'
};

export type EscalaUsuarios = (typeof EscalaUsuarios)[keyof typeof EscalaUsuarios]

}

export type EstadoCotizacion = $Enums.EstadoCotizacion

export const EstadoCotizacion: typeof $Enums.EstadoCotizacion

export type Plataforma = $Enums.Plataforma

export const Plataforma: typeof $Enums.Plataforma

export type TipoMoneda = $Enums.TipoMoneda

export const TipoMoneda: typeof $Enums.TipoMoneda

export type EscalaUsuarios = $Enums.EscalaUsuarios

export const EscalaUsuarios: typeof $Enums.EscalaUsuarios

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cotizacions
 * const cotizacions = await prisma.cotizacion.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cotizacions
   * const cotizacions = await prisma.cotizacion.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cotizacion`: Exposes CRUD operations for the **Cotizacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cotizacions
    * const cotizacions = await prisma.cotizacion.findMany()
    * ```
    */
  get cotizacion(): Prisma.CotizacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objetivosVision`: Exposes CRUD operations for the **ObjetivosVision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObjetivosVisions
    * const objetivosVisions = await prisma.objetivosVision.findMany()
    * ```
    */
  get objetivosVision(): Prisma.ObjetivosVisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuariosRoles`: Exposes CRUD operations for the **UsuariosRoles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuariosRoles
    * const usuariosRoles = await prisma.usuariosRoles.findMany()
    * ```
    */
  get usuariosRoles(): Prisma.UsuariosRolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alcanceFuncionalidades`: Exposes CRUD operations for the **AlcanceFuncionalidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlcanceFuncionalidades
    * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findMany()
    * ```
    */
  get alcanceFuncionalidades(): Prisma.AlcanceFuncionalidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requerimientosTecnicos`: Exposes CRUD operations for the **RequerimientosTecnicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RequerimientosTecnicos
    * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findMany()
    * ```
    */
  get requerimientosTecnicos(): Prisma.RequerimientosTecnicosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integraciones`: Exposes CRUD operations for the **Integraciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integraciones
    * const integraciones = await prisma.integraciones.findMany()
    * ```
    */
  get integraciones(): Prisma.IntegracionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disenoUX`: Exposes CRUD operations for the **DisenoUX** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DisenoUXES
    * const disenoUXES = await prisma.disenoUX.findMany()
    * ```
    */
  get disenoUX(): Prisma.DisenoUXDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presupuestoTiempos`: Exposes CRUD operations for the **PresupuestoTiempos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresupuestoTiempos
    * const presupuestoTiempos = await prisma.presupuestoTiempos.findMany()
    * ```
    */
  get presupuestoTiempos(): Prisma.PresupuestoTiemposDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cotizacion: 'Cotizacion',
    ObjetivosVision: 'ObjetivosVision',
    UsuariosRoles: 'UsuariosRoles',
    AlcanceFuncionalidades: 'AlcanceFuncionalidades',
    RequerimientosTecnicos: 'RequerimientosTecnicos',
    Integraciones: 'Integraciones',
    DisenoUX: 'DisenoUX',
    PresupuestoTiempos: 'PresupuestoTiempos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cotizacion" | "objetivosVision" | "usuariosRoles" | "alcanceFuncionalidades" | "requerimientosTecnicos" | "integraciones" | "disenoUX" | "presupuestoTiempos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cotizacion: {
        payload: Prisma.$CotizacionPayload<ExtArgs>
        fields: Prisma.CotizacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CotizacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CotizacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          findFirst: {
            args: Prisma.CotizacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CotizacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          findMany: {
            args: Prisma.CotizacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>[]
          }
          create: {
            args: Prisma.CotizacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          createMany: {
            args: Prisma.CotizacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CotizacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>[]
          }
          delete: {
            args: Prisma.CotizacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          update: {
            args: Prisma.CotizacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          deleteMany: {
            args: Prisma.CotizacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CotizacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CotizacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>[]
          }
          upsert: {
            args: Prisma.CotizacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CotizacionPayload>
          }
          aggregate: {
            args: Prisma.CotizacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCotizacion>
          }
          groupBy: {
            args: Prisma.CotizacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CotizacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CotizacionCountArgs<ExtArgs>
            result: $Utils.Optional<CotizacionCountAggregateOutputType> | number
          }
        }
      }
      ObjetivosVision: {
        payload: Prisma.$ObjetivosVisionPayload<ExtArgs>
        fields: Prisma.ObjetivosVisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjetivosVisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjetivosVisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          findFirst: {
            args: Prisma.ObjetivosVisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjetivosVisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          findMany: {
            args: Prisma.ObjetivosVisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>[]
          }
          create: {
            args: Prisma.ObjetivosVisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          createMany: {
            args: Prisma.ObjetivosVisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjetivosVisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>[]
          }
          delete: {
            args: Prisma.ObjetivosVisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          update: {
            args: Prisma.ObjetivosVisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          deleteMany: {
            args: Prisma.ObjetivosVisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjetivosVisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjetivosVisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>[]
          }
          upsert: {
            args: Prisma.ObjetivosVisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetivosVisionPayload>
          }
          aggregate: {
            args: Prisma.ObjetivosVisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjetivosVision>
          }
          groupBy: {
            args: Prisma.ObjetivosVisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjetivosVisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjetivosVisionCountArgs<ExtArgs>
            result: $Utils.Optional<ObjetivosVisionCountAggregateOutputType> | number
          }
        }
      }
      UsuariosRoles: {
        payload: Prisma.$UsuariosRolesPayload<ExtArgs>
        fields: Prisma.UsuariosRolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariosRolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariosRolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          findFirst: {
            args: Prisma.UsuariosRolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariosRolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          findMany: {
            args: Prisma.UsuariosRolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>[]
          }
          create: {
            args: Prisma.UsuariosRolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          createMany: {
            args: Prisma.UsuariosRolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuariosRolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>[]
          }
          delete: {
            args: Prisma.UsuariosRolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          update: {
            args: Prisma.UsuariosRolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          deleteMany: {
            args: Prisma.UsuariosRolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariosRolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuariosRolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>[]
          }
          upsert: {
            args: Prisma.UsuariosRolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariosRolesPayload>
          }
          aggregate: {
            args: Prisma.UsuariosRolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuariosRoles>
          }
          groupBy: {
            args: Prisma.UsuariosRolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosRolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariosRolesCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosRolesCountAggregateOutputType> | number
          }
        }
      }
      AlcanceFuncionalidades: {
        payload: Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>
        fields: Prisma.AlcanceFuncionalidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlcanceFuncionalidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlcanceFuncionalidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          findFirst: {
            args: Prisma.AlcanceFuncionalidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlcanceFuncionalidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          findMany: {
            args: Prisma.AlcanceFuncionalidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>[]
          }
          create: {
            args: Prisma.AlcanceFuncionalidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          createMany: {
            args: Prisma.AlcanceFuncionalidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlcanceFuncionalidadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>[]
          }
          delete: {
            args: Prisma.AlcanceFuncionalidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          update: {
            args: Prisma.AlcanceFuncionalidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          deleteMany: {
            args: Prisma.AlcanceFuncionalidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlcanceFuncionalidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlcanceFuncionalidadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>[]
          }
          upsert: {
            args: Prisma.AlcanceFuncionalidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlcanceFuncionalidadesPayload>
          }
          aggregate: {
            args: Prisma.AlcanceFuncionalidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlcanceFuncionalidades>
          }
          groupBy: {
            args: Prisma.AlcanceFuncionalidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlcanceFuncionalidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlcanceFuncionalidadesCountArgs<ExtArgs>
            result: $Utils.Optional<AlcanceFuncionalidadesCountAggregateOutputType> | number
          }
        }
      }
      RequerimientosTecnicos: {
        payload: Prisma.$RequerimientosTecnicosPayload<ExtArgs>
        fields: Prisma.RequerimientosTecnicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequerimientosTecnicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequerimientosTecnicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          findFirst: {
            args: Prisma.RequerimientosTecnicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequerimientosTecnicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          findMany: {
            args: Prisma.RequerimientosTecnicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>[]
          }
          create: {
            args: Prisma.RequerimientosTecnicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          createMany: {
            args: Prisma.RequerimientosTecnicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequerimientosTecnicosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>[]
          }
          delete: {
            args: Prisma.RequerimientosTecnicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          update: {
            args: Prisma.RequerimientosTecnicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          deleteMany: {
            args: Prisma.RequerimientosTecnicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequerimientosTecnicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequerimientosTecnicosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>[]
          }
          upsert: {
            args: Prisma.RequerimientosTecnicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequerimientosTecnicosPayload>
          }
          aggregate: {
            args: Prisma.RequerimientosTecnicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequerimientosTecnicos>
          }
          groupBy: {
            args: Prisma.RequerimientosTecnicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequerimientosTecnicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequerimientosTecnicosCountArgs<ExtArgs>
            result: $Utils.Optional<RequerimientosTecnicosCountAggregateOutputType> | number
          }
        }
      }
      Integraciones: {
        payload: Prisma.$IntegracionesPayload<ExtArgs>
        fields: Prisma.IntegracionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegracionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegracionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          findFirst: {
            args: Prisma.IntegracionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegracionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          findMany: {
            args: Prisma.IntegracionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>[]
          }
          create: {
            args: Prisma.IntegracionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          createMany: {
            args: Prisma.IntegracionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegracionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>[]
          }
          delete: {
            args: Prisma.IntegracionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          update: {
            args: Prisma.IntegracionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          deleteMany: {
            args: Prisma.IntegracionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegracionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegracionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>[]
          }
          upsert: {
            args: Prisma.IntegracionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegracionesPayload>
          }
          aggregate: {
            args: Prisma.IntegracionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegraciones>
          }
          groupBy: {
            args: Prisma.IntegracionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegracionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegracionesCountArgs<ExtArgs>
            result: $Utils.Optional<IntegracionesCountAggregateOutputType> | number
          }
        }
      }
      DisenoUX: {
        payload: Prisma.$DisenoUXPayload<ExtArgs>
        fields: Prisma.DisenoUXFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisenoUXFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisenoUXFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          findFirst: {
            args: Prisma.DisenoUXFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisenoUXFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          findMany: {
            args: Prisma.DisenoUXFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>[]
          }
          create: {
            args: Prisma.DisenoUXCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          createMany: {
            args: Prisma.DisenoUXCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisenoUXCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>[]
          }
          delete: {
            args: Prisma.DisenoUXDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          update: {
            args: Prisma.DisenoUXUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          deleteMany: {
            args: Prisma.DisenoUXDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisenoUXUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisenoUXUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>[]
          }
          upsert: {
            args: Prisma.DisenoUXUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisenoUXPayload>
          }
          aggregate: {
            args: Prisma.DisenoUXAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisenoUX>
          }
          groupBy: {
            args: Prisma.DisenoUXGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisenoUXGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisenoUXCountArgs<ExtArgs>
            result: $Utils.Optional<DisenoUXCountAggregateOutputType> | number
          }
        }
      }
      PresupuestoTiempos: {
        payload: Prisma.$PresupuestoTiemposPayload<ExtArgs>
        fields: Prisma.PresupuestoTiemposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresupuestoTiemposFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresupuestoTiemposFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          findFirst: {
            args: Prisma.PresupuestoTiemposFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresupuestoTiemposFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          findMany: {
            args: Prisma.PresupuestoTiemposFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>[]
          }
          create: {
            args: Prisma.PresupuestoTiemposCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          createMany: {
            args: Prisma.PresupuestoTiemposCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresupuestoTiemposCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>[]
          }
          delete: {
            args: Prisma.PresupuestoTiemposDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          update: {
            args: Prisma.PresupuestoTiemposUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          deleteMany: {
            args: Prisma.PresupuestoTiemposDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresupuestoTiemposUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresupuestoTiemposUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>[]
          }
          upsert: {
            args: Prisma.PresupuestoTiemposUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresupuestoTiemposPayload>
          }
          aggregate: {
            args: Prisma.PresupuestoTiemposAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresupuestoTiempos>
          }
          groupBy: {
            args: Prisma.PresupuestoTiemposGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresupuestoTiemposGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresupuestoTiemposCountArgs<ExtArgs>
            result: $Utils.Optional<PresupuestoTiemposCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cotizacion?: CotizacionOmit
    objetivosVision?: ObjetivosVisionOmit
    usuariosRoles?: UsuariosRolesOmit
    alcanceFuncionalidades?: AlcanceFuncionalidadesOmit
    requerimientosTecnicos?: RequerimientosTecnicosOmit
    integraciones?: IntegracionesOmit
    disenoUX?: DisenoUXOmit
    presupuestoTiempos?: PresupuestoTiemposOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Cotizacion
   */

  export type AggregateCotizacion = {
    _count: CotizacionCountAggregateOutputType | null
    _min: CotizacionMinAggregateOutputType | null
    _max: CotizacionMaxAggregateOutputType | null
  }

  export type CotizacionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nombreCliente: string | null
    emailCliente: string | null
    empresaCliente: string | null
    telefonoCliente: string | null
    estado: $Enums.EstadoCotizacion | null
    notasInternas: string | null
  }

  export type CotizacionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    nombreCliente: string | null
    emailCliente: string | null
    empresaCliente: string | null
    telefonoCliente: string | null
    estado: $Enums.EstadoCotizacion | null
    notasInternas: string | null
  }

  export type CotizacionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    nombreCliente: number
    emailCliente: number
    empresaCliente: number
    telefonoCliente: number
    estado: number
    notasInternas: number
    _all: number
  }


  export type CotizacionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nombreCliente?: true
    emailCliente?: true
    empresaCliente?: true
    telefonoCliente?: true
    estado?: true
    notasInternas?: true
  }

  export type CotizacionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nombreCliente?: true
    emailCliente?: true
    empresaCliente?: true
    telefonoCliente?: true
    estado?: true
    notasInternas?: true
  }

  export type CotizacionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nombreCliente?: true
    emailCliente?: true
    empresaCliente?: true
    telefonoCliente?: true
    estado?: true
    notasInternas?: true
    _all?: true
  }

  export type CotizacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotizacion to aggregate.
     */
    where?: CotizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotizacions to fetch.
     */
    orderBy?: CotizacionOrderByWithRelationInput | CotizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CotizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cotizacions
    **/
    _count?: true | CotizacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CotizacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CotizacionMaxAggregateInputType
  }

  export type GetCotizacionAggregateType<T extends CotizacionAggregateArgs> = {
        [P in keyof T & keyof AggregateCotizacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCotizacion[P]>
      : GetScalarType<T[P], AggregateCotizacion[P]>
  }




  export type CotizacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CotizacionWhereInput
    orderBy?: CotizacionOrderByWithAggregationInput | CotizacionOrderByWithAggregationInput[]
    by: CotizacionScalarFieldEnum[] | CotizacionScalarFieldEnum
    having?: CotizacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CotizacionCountAggregateInputType | true
    _min?: CotizacionMinAggregateInputType
    _max?: CotizacionMaxAggregateInputType
  }

  export type CotizacionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    nombreCliente: string
    emailCliente: string
    empresaCliente: string | null
    telefonoCliente: string | null
    estado: $Enums.EstadoCotizacion
    notasInternas: string | null
    _count: CotizacionCountAggregateOutputType | null
    _min: CotizacionMinAggregateOutputType | null
    _max: CotizacionMaxAggregateOutputType | null
  }

  type GetCotizacionGroupByPayload<T extends CotizacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CotizacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CotizacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CotizacionGroupByOutputType[P]>
            : GetScalarType<T[P], CotizacionGroupByOutputType[P]>
        }
      >
    >


  export type CotizacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nombreCliente?: boolean
    emailCliente?: boolean
    empresaCliente?: boolean
    telefonoCliente?: boolean
    estado?: boolean
    notasInternas?: boolean
    objetivosVision?: boolean | Cotizacion$objetivosVisionArgs<ExtArgs>
    usuariosRoles?: boolean | Cotizacion$usuariosRolesArgs<ExtArgs>
    alcanceFuncionalidades?: boolean | Cotizacion$alcanceFuncionalidadesArgs<ExtArgs>
    requerimientosTecnicos?: boolean | Cotizacion$requerimientosTecnicosArgs<ExtArgs>
    integraciones?: boolean | Cotizacion$integracionesArgs<ExtArgs>
    disenoUX?: boolean | Cotizacion$disenoUXArgs<ExtArgs>
    presupuestoTiempos?: boolean | Cotizacion$presupuestoTiemposArgs<ExtArgs>
  }, ExtArgs["result"]["cotizacion"]>

  export type CotizacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nombreCliente?: boolean
    emailCliente?: boolean
    empresaCliente?: boolean
    telefonoCliente?: boolean
    estado?: boolean
    notasInternas?: boolean
  }, ExtArgs["result"]["cotizacion"]>

  export type CotizacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nombreCliente?: boolean
    emailCliente?: boolean
    empresaCliente?: boolean
    telefonoCliente?: boolean
    estado?: boolean
    notasInternas?: boolean
  }, ExtArgs["result"]["cotizacion"]>

  export type CotizacionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nombreCliente?: boolean
    emailCliente?: boolean
    empresaCliente?: boolean
    telefonoCliente?: boolean
    estado?: boolean
    notasInternas?: boolean
  }

  export type CotizacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "nombreCliente" | "emailCliente" | "empresaCliente" | "telefonoCliente" | "estado" | "notasInternas", ExtArgs["result"]["cotizacion"]>
  export type CotizacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    objetivosVision?: boolean | Cotizacion$objetivosVisionArgs<ExtArgs>
    usuariosRoles?: boolean | Cotizacion$usuariosRolesArgs<ExtArgs>
    alcanceFuncionalidades?: boolean | Cotizacion$alcanceFuncionalidadesArgs<ExtArgs>
    requerimientosTecnicos?: boolean | Cotizacion$requerimientosTecnicosArgs<ExtArgs>
    integraciones?: boolean | Cotizacion$integracionesArgs<ExtArgs>
    disenoUX?: boolean | Cotizacion$disenoUXArgs<ExtArgs>
    presupuestoTiempos?: boolean | Cotizacion$presupuestoTiemposArgs<ExtArgs>
  }
  export type CotizacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CotizacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CotizacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cotizacion"
    objects: {
      objetivosVision: Prisma.$ObjetivosVisionPayload<ExtArgs> | null
      usuariosRoles: Prisma.$UsuariosRolesPayload<ExtArgs> | null
      alcanceFuncionalidades: Prisma.$AlcanceFuncionalidadesPayload<ExtArgs> | null
      requerimientosTecnicos: Prisma.$RequerimientosTecnicosPayload<ExtArgs> | null
      integraciones: Prisma.$IntegracionesPayload<ExtArgs> | null
      disenoUX: Prisma.$DisenoUXPayload<ExtArgs> | null
      presupuestoTiempos: Prisma.$PresupuestoTiemposPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      nombreCliente: string
      emailCliente: string
      empresaCliente: string | null
      telefonoCliente: string | null
      estado: $Enums.EstadoCotizacion
      notasInternas: string | null
    }, ExtArgs["result"]["cotizacion"]>
    composites: {}
  }

  type CotizacionGetPayload<S extends boolean | null | undefined | CotizacionDefaultArgs> = $Result.GetResult<Prisma.$CotizacionPayload, S>

  type CotizacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CotizacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CotizacionCountAggregateInputType | true
    }

  export interface CotizacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cotizacion'], meta: { name: 'Cotizacion' } }
    /**
     * Find zero or one Cotizacion that matches the filter.
     * @param {CotizacionFindUniqueArgs} args - Arguments to find a Cotizacion
     * @example
     * // Get one Cotizacion
     * const cotizacion = await prisma.cotizacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CotizacionFindUniqueArgs>(args: SelectSubset<T, CotizacionFindUniqueArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cotizacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CotizacionFindUniqueOrThrowArgs} args - Arguments to find a Cotizacion
     * @example
     * // Get one Cotizacion
     * const cotizacion = await prisma.cotizacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CotizacionFindUniqueOrThrowArgs>(args: SelectSubset<T, CotizacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotizacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionFindFirstArgs} args - Arguments to find a Cotizacion
     * @example
     * // Get one Cotizacion
     * const cotizacion = await prisma.cotizacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CotizacionFindFirstArgs>(args?: SelectSubset<T, CotizacionFindFirstArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cotizacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionFindFirstOrThrowArgs} args - Arguments to find a Cotizacion
     * @example
     * // Get one Cotizacion
     * const cotizacion = await prisma.cotizacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CotizacionFindFirstOrThrowArgs>(args?: SelectSubset<T, CotizacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cotizacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cotizacions
     * const cotizacions = await prisma.cotizacion.findMany()
     * 
     * // Get first 10 Cotizacions
     * const cotizacions = await prisma.cotizacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cotizacionWithIdOnly = await prisma.cotizacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CotizacionFindManyArgs>(args?: SelectSubset<T, CotizacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cotizacion.
     * @param {CotizacionCreateArgs} args - Arguments to create a Cotizacion.
     * @example
     * // Create one Cotizacion
     * const Cotizacion = await prisma.cotizacion.create({
     *   data: {
     *     // ... data to create a Cotizacion
     *   }
     * })
     * 
     */
    create<T extends CotizacionCreateArgs>(args: SelectSubset<T, CotizacionCreateArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cotizacions.
     * @param {CotizacionCreateManyArgs} args - Arguments to create many Cotizacions.
     * @example
     * // Create many Cotizacions
     * const cotizacion = await prisma.cotizacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CotizacionCreateManyArgs>(args?: SelectSubset<T, CotizacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cotizacions and returns the data saved in the database.
     * @param {CotizacionCreateManyAndReturnArgs} args - Arguments to create many Cotizacions.
     * @example
     * // Create many Cotizacions
     * const cotizacion = await prisma.cotizacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cotizacions and only return the `id`
     * const cotizacionWithIdOnly = await prisma.cotizacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CotizacionCreateManyAndReturnArgs>(args?: SelectSubset<T, CotizacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cotizacion.
     * @param {CotizacionDeleteArgs} args - Arguments to delete one Cotizacion.
     * @example
     * // Delete one Cotizacion
     * const Cotizacion = await prisma.cotizacion.delete({
     *   where: {
     *     // ... filter to delete one Cotizacion
     *   }
     * })
     * 
     */
    delete<T extends CotizacionDeleteArgs>(args: SelectSubset<T, CotizacionDeleteArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cotizacion.
     * @param {CotizacionUpdateArgs} args - Arguments to update one Cotizacion.
     * @example
     * // Update one Cotizacion
     * const cotizacion = await prisma.cotizacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CotizacionUpdateArgs>(args: SelectSubset<T, CotizacionUpdateArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cotizacions.
     * @param {CotizacionDeleteManyArgs} args - Arguments to filter Cotizacions to delete.
     * @example
     * // Delete a few Cotizacions
     * const { count } = await prisma.cotizacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CotizacionDeleteManyArgs>(args?: SelectSubset<T, CotizacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotizacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cotizacions
     * const cotizacion = await prisma.cotizacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CotizacionUpdateManyArgs>(args: SelectSubset<T, CotizacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cotizacions and returns the data updated in the database.
     * @param {CotizacionUpdateManyAndReturnArgs} args - Arguments to update many Cotizacions.
     * @example
     * // Update many Cotizacions
     * const cotizacion = await prisma.cotizacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cotizacions and only return the `id`
     * const cotizacionWithIdOnly = await prisma.cotizacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CotizacionUpdateManyAndReturnArgs>(args: SelectSubset<T, CotizacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cotizacion.
     * @param {CotizacionUpsertArgs} args - Arguments to update or create a Cotizacion.
     * @example
     * // Update or create a Cotizacion
     * const cotizacion = await prisma.cotizacion.upsert({
     *   create: {
     *     // ... data to create a Cotizacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cotizacion we want to update
     *   }
     * })
     */
    upsert<T extends CotizacionUpsertArgs>(args: SelectSubset<T, CotizacionUpsertArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cotizacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionCountArgs} args - Arguments to filter Cotizacions to count.
     * @example
     * // Count the number of Cotizacions
     * const count = await prisma.cotizacion.count({
     *   where: {
     *     // ... the filter for the Cotizacions we want to count
     *   }
     * })
    **/
    count<T extends CotizacionCountArgs>(
      args?: Subset<T, CotizacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CotizacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cotizacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CotizacionAggregateArgs>(args: Subset<T, CotizacionAggregateArgs>): Prisma.PrismaPromise<GetCotizacionAggregateType<T>>

    /**
     * Group by Cotizacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CotizacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CotizacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CotizacionGroupByArgs['orderBy'] }
        : { orderBy?: CotizacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CotizacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCotizacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cotizacion model
   */
  readonly fields: CotizacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cotizacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CotizacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    objetivosVision<T extends Cotizacion$objetivosVisionArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$objetivosVisionArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuariosRoles<T extends Cotizacion$usuariosRolesArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$usuariosRolesArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alcanceFuncionalidades<T extends Cotizacion$alcanceFuncionalidadesArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$alcanceFuncionalidadesArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requerimientosTecnicos<T extends Cotizacion$requerimientosTecnicosArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$requerimientosTecnicosArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    integraciones<T extends Cotizacion$integracionesArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$integracionesArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    disenoUX<T extends Cotizacion$disenoUXArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$disenoUXArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    presupuestoTiempos<T extends Cotizacion$presupuestoTiemposArgs<ExtArgs> = {}>(args?: Subset<T, Cotizacion$presupuestoTiemposArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cotizacion model
   */
  interface CotizacionFieldRefs {
    readonly id: FieldRef<"Cotizacion", 'String'>
    readonly createdAt: FieldRef<"Cotizacion", 'DateTime'>
    readonly updatedAt: FieldRef<"Cotizacion", 'DateTime'>
    readonly nombreCliente: FieldRef<"Cotizacion", 'String'>
    readonly emailCliente: FieldRef<"Cotizacion", 'String'>
    readonly empresaCliente: FieldRef<"Cotizacion", 'String'>
    readonly telefonoCliente: FieldRef<"Cotizacion", 'String'>
    readonly estado: FieldRef<"Cotizacion", 'EstadoCotizacion'>
    readonly notasInternas: FieldRef<"Cotizacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cotizacion findUnique
   */
  export type CotizacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter, which Cotizacion to fetch.
     */
    where: CotizacionWhereUniqueInput
  }

  /**
   * Cotizacion findUniqueOrThrow
   */
  export type CotizacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter, which Cotizacion to fetch.
     */
    where: CotizacionWhereUniqueInput
  }

  /**
   * Cotizacion findFirst
   */
  export type CotizacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter, which Cotizacion to fetch.
     */
    where?: CotizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotizacions to fetch.
     */
    orderBy?: CotizacionOrderByWithRelationInput | CotizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotizacions.
     */
    cursor?: CotizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotizacions.
     */
    distinct?: CotizacionScalarFieldEnum | CotizacionScalarFieldEnum[]
  }

  /**
   * Cotizacion findFirstOrThrow
   */
  export type CotizacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter, which Cotizacion to fetch.
     */
    where?: CotizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotizacions to fetch.
     */
    orderBy?: CotizacionOrderByWithRelationInput | CotizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cotizacions.
     */
    cursor?: CotizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotizacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cotizacions.
     */
    distinct?: CotizacionScalarFieldEnum | CotizacionScalarFieldEnum[]
  }

  /**
   * Cotizacion findMany
   */
  export type CotizacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter, which Cotizacions to fetch.
     */
    where?: CotizacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cotizacions to fetch.
     */
    orderBy?: CotizacionOrderByWithRelationInput | CotizacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cotizacions.
     */
    cursor?: CotizacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cotizacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cotizacions.
     */
    skip?: number
    distinct?: CotizacionScalarFieldEnum | CotizacionScalarFieldEnum[]
  }

  /**
   * Cotizacion create
   */
  export type CotizacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Cotizacion.
     */
    data: XOR<CotizacionCreateInput, CotizacionUncheckedCreateInput>
  }

  /**
   * Cotizacion createMany
   */
  export type CotizacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cotizacions.
     */
    data: CotizacionCreateManyInput | CotizacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cotizacion createManyAndReturn
   */
  export type CotizacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * The data used to create many Cotizacions.
     */
    data: CotizacionCreateManyInput | CotizacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cotizacion update
   */
  export type CotizacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Cotizacion.
     */
    data: XOR<CotizacionUpdateInput, CotizacionUncheckedUpdateInput>
    /**
     * Choose, which Cotizacion to update.
     */
    where: CotizacionWhereUniqueInput
  }

  /**
   * Cotizacion updateMany
   */
  export type CotizacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cotizacions.
     */
    data: XOR<CotizacionUpdateManyMutationInput, CotizacionUncheckedUpdateManyInput>
    /**
     * Filter which Cotizacions to update
     */
    where?: CotizacionWhereInput
    /**
     * Limit how many Cotizacions to update.
     */
    limit?: number
  }

  /**
   * Cotizacion updateManyAndReturn
   */
  export type CotizacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * The data used to update Cotizacions.
     */
    data: XOR<CotizacionUpdateManyMutationInput, CotizacionUncheckedUpdateManyInput>
    /**
     * Filter which Cotizacions to update
     */
    where?: CotizacionWhereInput
    /**
     * Limit how many Cotizacions to update.
     */
    limit?: number
  }

  /**
   * Cotizacion upsert
   */
  export type CotizacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Cotizacion to update in case it exists.
     */
    where: CotizacionWhereUniqueInput
    /**
     * In case the Cotizacion found by the `where` argument doesn't exist, create a new Cotizacion with this data.
     */
    create: XOR<CotizacionCreateInput, CotizacionUncheckedCreateInput>
    /**
     * In case the Cotizacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CotizacionUpdateInput, CotizacionUncheckedUpdateInput>
  }

  /**
   * Cotizacion delete
   */
  export type CotizacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
    /**
     * Filter which Cotizacion to delete.
     */
    where: CotizacionWhereUniqueInput
  }

  /**
   * Cotizacion deleteMany
   */
  export type CotizacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cotizacions to delete
     */
    where?: CotizacionWhereInput
    /**
     * Limit how many Cotizacions to delete.
     */
    limit?: number
  }

  /**
   * Cotizacion.objetivosVision
   */
  export type Cotizacion$objetivosVisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    where?: ObjetivosVisionWhereInput
  }

  /**
   * Cotizacion.usuariosRoles
   */
  export type Cotizacion$usuariosRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    where?: UsuariosRolesWhereInput
  }

  /**
   * Cotizacion.alcanceFuncionalidades
   */
  export type Cotizacion$alcanceFuncionalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    where?: AlcanceFuncionalidadesWhereInput
  }

  /**
   * Cotizacion.requerimientosTecnicos
   */
  export type Cotizacion$requerimientosTecnicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    where?: RequerimientosTecnicosWhereInput
  }

  /**
   * Cotizacion.integraciones
   */
  export type Cotizacion$integracionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    where?: IntegracionesWhereInput
  }

  /**
   * Cotizacion.disenoUX
   */
  export type Cotizacion$disenoUXArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    where?: DisenoUXWhereInput
  }

  /**
   * Cotizacion.presupuestoTiempos
   */
  export type Cotizacion$presupuestoTiemposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    where?: PresupuestoTiemposWhereInput
  }

  /**
   * Cotizacion without action
   */
  export type CotizacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cotizacion
     */
    select?: CotizacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cotizacion
     */
    omit?: CotizacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CotizacionInclude<ExtArgs> | null
  }


  /**
   * Model ObjetivosVision
   */

  export type AggregateObjetivosVision = {
    _count: ObjetivosVisionCountAggregateOutputType | null
    _min: ObjetivosVisionMinAggregateOutputType | null
    _max: ObjetivosVisionMaxAggregateOutputType | null
  }

  export type ObjetivosVisionMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    problemaPrincipal: string | null
    objetivoPrincipal: string | null
    procesoActual: string | null
    competenciaReferencia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjetivosVisionMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    problemaPrincipal: string | null
    objetivoPrincipal: string | null
    procesoActual: string | null
    competenciaReferencia: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObjetivosVisionCountAggregateOutputType = {
    id: number
    cotizacionId: number
    problemaPrincipal: number
    objetivoPrincipal: number
    procesoActual: number
    competenciaReferencia: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObjetivosVisionMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    problemaPrincipal?: true
    objetivoPrincipal?: true
    procesoActual?: true
    competenciaReferencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjetivosVisionMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    problemaPrincipal?: true
    objetivoPrincipal?: true
    procesoActual?: true
    competenciaReferencia?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObjetivosVisionCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    problemaPrincipal?: true
    objetivoPrincipal?: true
    procesoActual?: true
    competenciaReferencia?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObjetivosVisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjetivosVision to aggregate.
     */
    where?: ObjetivosVisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetivosVisions to fetch.
     */
    orderBy?: ObjetivosVisionOrderByWithRelationInput | ObjetivosVisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjetivosVisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetivosVisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetivosVisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObjetivosVisions
    **/
    _count?: true | ObjetivosVisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjetivosVisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjetivosVisionMaxAggregateInputType
  }

  export type GetObjetivosVisionAggregateType<T extends ObjetivosVisionAggregateArgs> = {
        [P in keyof T & keyof AggregateObjetivosVision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjetivosVision[P]>
      : GetScalarType<T[P], AggregateObjetivosVision[P]>
  }




  export type ObjetivosVisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetivosVisionWhereInput
    orderBy?: ObjetivosVisionOrderByWithAggregationInput | ObjetivosVisionOrderByWithAggregationInput[]
    by: ObjetivosVisionScalarFieldEnum[] | ObjetivosVisionScalarFieldEnum
    having?: ObjetivosVisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjetivosVisionCountAggregateInputType | true
    _min?: ObjetivosVisionMinAggregateInputType
    _max?: ObjetivosVisionMaxAggregateInputType
  }

  export type ObjetivosVisionGroupByOutputType = {
    id: string
    cotizacionId: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual: string | null
    competenciaReferencia: string | null
    createdAt: Date
    updatedAt: Date
    _count: ObjetivosVisionCountAggregateOutputType | null
    _min: ObjetivosVisionMinAggregateOutputType | null
    _max: ObjetivosVisionMaxAggregateOutputType | null
  }

  type GetObjetivosVisionGroupByPayload<T extends ObjetivosVisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjetivosVisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjetivosVisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjetivosVisionGroupByOutputType[P]>
            : GetScalarType<T[P], ObjetivosVisionGroupByOutputType[P]>
        }
      >
    >


  export type ObjetivosVisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    problemaPrincipal?: boolean
    objetivoPrincipal?: boolean
    procesoActual?: boolean
    competenciaReferencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivosVision"]>

  export type ObjetivosVisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    problemaPrincipal?: boolean
    objetivoPrincipal?: boolean
    procesoActual?: boolean
    competenciaReferencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivosVision"]>

  export type ObjetivosVisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    problemaPrincipal?: boolean
    objetivoPrincipal?: boolean
    procesoActual?: boolean
    competenciaReferencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetivosVision"]>

  export type ObjetivosVisionSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    problemaPrincipal?: boolean
    objetivoPrincipal?: boolean
    procesoActual?: boolean
    competenciaReferencia?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObjetivosVisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "problemaPrincipal" | "objetivoPrincipal" | "procesoActual" | "competenciaReferencia" | "createdAt" | "updatedAt", ExtArgs["result"]["objetivosVision"]>
  export type ObjetivosVisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type ObjetivosVisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type ObjetivosVisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $ObjetivosVisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObjetivosVision"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      problemaPrincipal: string
      objetivoPrincipal: string
      procesoActual: string | null
      competenciaReferencia: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["objetivosVision"]>
    composites: {}
  }

  type ObjetivosVisionGetPayload<S extends boolean | null | undefined | ObjetivosVisionDefaultArgs> = $Result.GetResult<Prisma.$ObjetivosVisionPayload, S>

  type ObjetivosVisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjetivosVisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjetivosVisionCountAggregateInputType | true
    }

  export interface ObjetivosVisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObjetivosVision'], meta: { name: 'ObjetivosVision' } }
    /**
     * Find zero or one ObjetivosVision that matches the filter.
     * @param {ObjetivosVisionFindUniqueArgs} args - Arguments to find a ObjetivosVision
     * @example
     * // Get one ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjetivosVisionFindUniqueArgs>(args: SelectSubset<T, ObjetivosVisionFindUniqueArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObjetivosVision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjetivosVisionFindUniqueOrThrowArgs} args - Arguments to find a ObjetivosVision
     * @example
     * // Get one ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjetivosVisionFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjetivosVisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjetivosVision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionFindFirstArgs} args - Arguments to find a ObjetivosVision
     * @example
     * // Get one ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjetivosVisionFindFirstArgs>(args?: SelectSubset<T, ObjetivosVisionFindFirstArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjetivosVision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionFindFirstOrThrowArgs} args - Arguments to find a ObjetivosVision
     * @example
     * // Get one ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjetivosVisionFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjetivosVisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObjetivosVisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObjetivosVisions
     * const objetivosVisions = await prisma.objetivosVision.findMany()
     * 
     * // Get first 10 ObjetivosVisions
     * const objetivosVisions = await prisma.objetivosVision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objetivosVisionWithIdOnly = await prisma.objetivosVision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjetivosVisionFindManyArgs>(args?: SelectSubset<T, ObjetivosVisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObjetivosVision.
     * @param {ObjetivosVisionCreateArgs} args - Arguments to create a ObjetivosVision.
     * @example
     * // Create one ObjetivosVision
     * const ObjetivosVision = await prisma.objetivosVision.create({
     *   data: {
     *     // ... data to create a ObjetivosVision
     *   }
     * })
     * 
     */
    create<T extends ObjetivosVisionCreateArgs>(args: SelectSubset<T, ObjetivosVisionCreateArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObjetivosVisions.
     * @param {ObjetivosVisionCreateManyArgs} args - Arguments to create many ObjetivosVisions.
     * @example
     * // Create many ObjetivosVisions
     * const objetivosVision = await prisma.objetivosVision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjetivosVisionCreateManyArgs>(args?: SelectSubset<T, ObjetivosVisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObjetivosVisions and returns the data saved in the database.
     * @param {ObjetivosVisionCreateManyAndReturnArgs} args - Arguments to create many ObjetivosVisions.
     * @example
     * // Create many ObjetivosVisions
     * const objetivosVision = await prisma.objetivosVision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObjetivosVisions and only return the `id`
     * const objetivosVisionWithIdOnly = await prisma.objetivosVision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjetivosVisionCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjetivosVisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObjetivosVision.
     * @param {ObjetivosVisionDeleteArgs} args - Arguments to delete one ObjetivosVision.
     * @example
     * // Delete one ObjetivosVision
     * const ObjetivosVision = await prisma.objetivosVision.delete({
     *   where: {
     *     // ... filter to delete one ObjetivosVision
     *   }
     * })
     * 
     */
    delete<T extends ObjetivosVisionDeleteArgs>(args: SelectSubset<T, ObjetivosVisionDeleteArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObjetivosVision.
     * @param {ObjetivosVisionUpdateArgs} args - Arguments to update one ObjetivosVision.
     * @example
     * // Update one ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjetivosVisionUpdateArgs>(args: SelectSubset<T, ObjetivosVisionUpdateArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObjetivosVisions.
     * @param {ObjetivosVisionDeleteManyArgs} args - Arguments to filter ObjetivosVisions to delete.
     * @example
     * // Delete a few ObjetivosVisions
     * const { count } = await prisma.objetivosVision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjetivosVisionDeleteManyArgs>(args?: SelectSubset<T, ObjetivosVisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjetivosVisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObjetivosVisions
     * const objetivosVision = await prisma.objetivosVision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjetivosVisionUpdateManyArgs>(args: SelectSubset<T, ObjetivosVisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjetivosVisions and returns the data updated in the database.
     * @param {ObjetivosVisionUpdateManyAndReturnArgs} args - Arguments to update many ObjetivosVisions.
     * @example
     * // Update many ObjetivosVisions
     * const objetivosVision = await prisma.objetivosVision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObjetivosVisions and only return the `id`
     * const objetivosVisionWithIdOnly = await prisma.objetivosVision.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjetivosVisionUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjetivosVisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObjetivosVision.
     * @param {ObjetivosVisionUpsertArgs} args - Arguments to update or create a ObjetivosVision.
     * @example
     * // Update or create a ObjetivosVision
     * const objetivosVision = await prisma.objetivosVision.upsert({
     *   create: {
     *     // ... data to create a ObjetivosVision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObjetivosVision we want to update
     *   }
     * })
     */
    upsert<T extends ObjetivosVisionUpsertArgs>(args: SelectSubset<T, ObjetivosVisionUpsertArgs<ExtArgs>>): Prisma__ObjetivosVisionClient<$Result.GetResult<Prisma.$ObjetivosVisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObjetivosVisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionCountArgs} args - Arguments to filter ObjetivosVisions to count.
     * @example
     * // Count the number of ObjetivosVisions
     * const count = await prisma.objetivosVision.count({
     *   where: {
     *     // ... the filter for the ObjetivosVisions we want to count
     *   }
     * })
    **/
    count<T extends ObjetivosVisionCountArgs>(
      args?: Subset<T, ObjetivosVisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjetivosVisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObjetivosVision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjetivosVisionAggregateArgs>(args: Subset<T, ObjetivosVisionAggregateArgs>): Prisma.PrismaPromise<GetObjetivosVisionAggregateType<T>>

    /**
     * Group by ObjetivosVision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetivosVisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjetivosVisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjetivosVisionGroupByArgs['orderBy'] }
        : { orderBy?: ObjetivosVisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjetivosVisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetivosVisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObjetivosVision model
   */
  readonly fields: ObjetivosVisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObjetivosVision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjetivosVisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObjetivosVision model
   */
  interface ObjetivosVisionFieldRefs {
    readonly id: FieldRef<"ObjetivosVision", 'String'>
    readonly cotizacionId: FieldRef<"ObjetivosVision", 'String'>
    readonly problemaPrincipal: FieldRef<"ObjetivosVision", 'String'>
    readonly objetivoPrincipal: FieldRef<"ObjetivosVision", 'String'>
    readonly procesoActual: FieldRef<"ObjetivosVision", 'String'>
    readonly competenciaReferencia: FieldRef<"ObjetivosVision", 'String'>
    readonly createdAt: FieldRef<"ObjetivosVision", 'DateTime'>
    readonly updatedAt: FieldRef<"ObjetivosVision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ObjetivosVision findUnique
   */
  export type ObjetivosVisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetivosVision to fetch.
     */
    where: ObjetivosVisionWhereUniqueInput
  }

  /**
   * ObjetivosVision findUniqueOrThrow
   */
  export type ObjetivosVisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetivosVision to fetch.
     */
    where: ObjetivosVisionWhereUniqueInput
  }

  /**
   * ObjetivosVision findFirst
   */
  export type ObjetivosVisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetivosVision to fetch.
     */
    where?: ObjetivosVisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetivosVisions to fetch.
     */
    orderBy?: ObjetivosVisionOrderByWithRelationInput | ObjetivosVisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjetivosVisions.
     */
    cursor?: ObjetivosVisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetivosVisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetivosVisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjetivosVisions.
     */
    distinct?: ObjetivosVisionScalarFieldEnum | ObjetivosVisionScalarFieldEnum[]
  }

  /**
   * ObjetivosVision findFirstOrThrow
   */
  export type ObjetivosVisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetivosVision to fetch.
     */
    where?: ObjetivosVisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetivosVisions to fetch.
     */
    orderBy?: ObjetivosVisionOrderByWithRelationInput | ObjetivosVisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjetivosVisions.
     */
    cursor?: ObjetivosVisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetivosVisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetivosVisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjetivosVisions.
     */
    distinct?: ObjetivosVisionScalarFieldEnum | ObjetivosVisionScalarFieldEnum[]
  }

  /**
   * ObjetivosVision findMany
   */
  export type ObjetivosVisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetivosVisions to fetch.
     */
    where?: ObjetivosVisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetivosVisions to fetch.
     */
    orderBy?: ObjetivosVisionOrderByWithRelationInput | ObjetivosVisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObjetivosVisions.
     */
    cursor?: ObjetivosVisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetivosVisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetivosVisions.
     */
    skip?: number
    distinct?: ObjetivosVisionScalarFieldEnum | ObjetivosVisionScalarFieldEnum[]
  }

  /**
   * ObjetivosVision create
   */
  export type ObjetivosVisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * The data needed to create a ObjetivosVision.
     */
    data: XOR<ObjetivosVisionCreateInput, ObjetivosVisionUncheckedCreateInput>
  }

  /**
   * ObjetivosVision createMany
   */
  export type ObjetivosVisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObjetivosVisions.
     */
    data: ObjetivosVisionCreateManyInput | ObjetivosVisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObjetivosVision createManyAndReturn
   */
  export type ObjetivosVisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * The data used to create many ObjetivosVisions.
     */
    data: ObjetivosVisionCreateManyInput | ObjetivosVisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObjetivosVision update
   */
  export type ObjetivosVisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * The data needed to update a ObjetivosVision.
     */
    data: XOR<ObjetivosVisionUpdateInput, ObjetivosVisionUncheckedUpdateInput>
    /**
     * Choose, which ObjetivosVision to update.
     */
    where: ObjetivosVisionWhereUniqueInput
  }

  /**
   * ObjetivosVision updateMany
   */
  export type ObjetivosVisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObjetivosVisions.
     */
    data: XOR<ObjetivosVisionUpdateManyMutationInput, ObjetivosVisionUncheckedUpdateManyInput>
    /**
     * Filter which ObjetivosVisions to update
     */
    where?: ObjetivosVisionWhereInput
    /**
     * Limit how many ObjetivosVisions to update.
     */
    limit?: number
  }

  /**
   * ObjetivosVision updateManyAndReturn
   */
  export type ObjetivosVisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * The data used to update ObjetivosVisions.
     */
    data: XOR<ObjetivosVisionUpdateManyMutationInput, ObjetivosVisionUncheckedUpdateManyInput>
    /**
     * Filter which ObjetivosVisions to update
     */
    where?: ObjetivosVisionWhereInput
    /**
     * Limit how many ObjetivosVisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ObjetivosVision upsert
   */
  export type ObjetivosVisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * The filter to search for the ObjetivosVision to update in case it exists.
     */
    where: ObjetivosVisionWhereUniqueInput
    /**
     * In case the ObjetivosVision found by the `where` argument doesn't exist, create a new ObjetivosVision with this data.
     */
    create: XOR<ObjetivosVisionCreateInput, ObjetivosVisionUncheckedCreateInput>
    /**
     * In case the ObjetivosVision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjetivosVisionUpdateInput, ObjetivosVisionUncheckedUpdateInput>
  }

  /**
   * ObjetivosVision delete
   */
  export type ObjetivosVisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
    /**
     * Filter which ObjetivosVision to delete.
     */
    where: ObjetivosVisionWhereUniqueInput
  }

  /**
   * ObjetivosVision deleteMany
   */
  export type ObjetivosVisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjetivosVisions to delete
     */
    where?: ObjetivosVisionWhereInput
    /**
     * Limit how many ObjetivosVisions to delete.
     */
    limit?: number
  }

  /**
   * ObjetivosVision without action
   */
  export type ObjetivosVisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetivosVision
     */
    select?: ObjetivosVisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetivosVision
     */
    omit?: ObjetivosVisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetivosVisionInclude<ExtArgs> | null
  }


  /**
   * Model UsuariosRoles
   */

  export type AggregateUsuariosRoles = {
    _count: UsuariosRolesCountAggregateOutputType | null
    _min: UsuariosRolesMinAggregateOutputType | null
    _max: UsuariosRolesMaxAggregateOutputType | null
  }

  export type UsuariosRolesMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    usuariosFinales: string | null
    tiposRoles: string | null
    descripcionRoles: string | null
    cantidadUsuarios: string | null
    escalaUsuarios: $Enums.EscalaUsuarios | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosRolesMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    usuariosFinales: string | null
    tiposRoles: string | null
    descripcionRoles: string | null
    cantidadUsuarios: string | null
    escalaUsuarios: $Enums.EscalaUsuarios | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuariosRolesCountAggregateOutputType = {
    id: number
    cotizacionId: number
    usuariosFinales: number
    tiposRoles: number
    descripcionRoles: number
    cantidadUsuarios: number
    escalaUsuarios: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuariosRolesMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    usuariosFinales?: true
    tiposRoles?: true
    descripcionRoles?: true
    cantidadUsuarios?: true
    escalaUsuarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosRolesMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    usuariosFinales?: true
    tiposRoles?: true
    descripcionRoles?: true
    cantidadUsuarios?: true
    escalaUsuarios?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuariosRolesCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    usuariosFinales?: true
    tiposRoles?: true
    descripcionRoles?: true
    cantidadUsuarios?: true
    escalaUsuarios?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuariosRolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosRoles to aggregate.
     */
    where?: UsuariosRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosRoles to fetch.
     */
    orderBy?: UsuariosRolesOrderByWithRelationInput | UsuariosRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariosRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuariosRoles
    **/
    _count?: true | UsuariosRolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosRolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosRolesMaxAggregateInputType
  }

  export type GetUsuariosRolesAggregateType<T extends UsuariosRolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuariosRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuariosRoles[P]>
      : GetScalarType<T[P], AggregateUsuariosRoles[P]>
  }




  export type UsuariosRolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariosRolesWhereInput
    orderBy?: UsuariosRolesOrderByWithAggregationInput | UsuariosRolesOrderByWithAggregationInput[]
    by: UsuariosRolesScalarFieldEnum[] | UsuariosRolesScalarFieldEnum
    having?: UsuariosRolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosRolesCountAggregateInputType | true
    _min?: UsuariosRolesMinAggregateInputType
    _max?: UsuariosRolesMaxAggregateInputType
  }

  export type UsuariosRolesGroupByOutputType = {
    id: string
    cotizacionId: string
    usuariosFinales: string
    tiposRoles: string | null
    descripcionRoles: string | null
    cantidadUsuarios: string | null
    escalaUsuarios: $Enums.EscalaUsuarios | null
    createdAt: Date
    updatedAt: Date
    _count: UsuariosRolesCountAggregateOutputType | null
    _min: UsuariosRolesMinAggregateOutputType | null
    _max: UsuariosRolesMaxAggregateOutputType | null
  }

  type GetUsuariosRolesGroupByPayload<T extends UsuariosRolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosRolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosRolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosRolesGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosRolesGroupByOutputType[P]>
        }
      >
    >


  export type UsuariosRolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    usuariosFinales?: boolean
    tiposRoles?: boolean
    descripcionRoles?: boolean
    cantidadUsuarios?: boolean
    escalaUsuarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosRoles"]>

  export type UsuariosRolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    usuariosFinales?: boolean
    tiposRoles?: boolean
    descripcionRoles?: boolean
    cantidadUsuarios?: boolean
    escalaUsuarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosRoles"]>

  export type UsuariosRolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    usuariosFinales?: boolean
    tiposRoles?: boolean
    descripcionRoles?: boolean
    cantidadUsuarios?: boolean
    escalaUsuarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariosRoles"]>

  export type UsuariosRolesSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    usuariosFinales?: boolean
    tiposRoles?: boolean
    descripcionRoles?: boolean
    cantidadUsuarios?: boolean
    escalaUsuarios?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuariosRolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "usuariosFinales" | "tiposRoles" | "descripcionRoles" | "cantidadUsuarios" | "escalaUsuarios" | "createdAt" | "updatedAt", ExtArgs["result"]["usuariosRoles"]>
  export type UsuariosRolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type UsuariosRolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type UsuariosRolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $UsuariosRolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuariosRoles"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      usuariosFinales: string
      tiposRoles: string | null
      descripcionRoles: string | null
      cantidadUsuarios: string | null
      escalaUsuarios: $Enums.EscalaUsuarios | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuariosRoles"]>
    composites: {}
  }

  type UsuariosRolesGetPayload<S extends boolean | null | undefined | UsuariosRolesDefaultArgs> = $Result.GetResult<Prisma.$UsuariosRolesPayload, S>

  type UsuariosRolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuariosRolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosRolesCountAggregateInputType | true
    }

  export interface UsuariosRolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuariosRoles'], meta: { name: 'UsuariosRoles' } }
    /**
     * Find zero or one UsuariosRoles that matches the filter.
     * @param {UsuariosRolesFindUniqueArgs} args - Arguments to find a UsuariosRoles
     * @example
     * // Get one UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariosRolesFindUniqueArgs>(args: SelectSubset<T, UsuariosRolesFindUniqueArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuariosRoles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuariosRolesFindUniqueOrThrowArgs} args - Arguments to find a UsuariosRoles
     * @example
     * // Get one UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariosRolesFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariosRolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuariosRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesFindFirstArgs} args - Arguments to find a UsuariosRoles
     * @example
     * // Get one UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariosRolesFindFirstArgs>(args?: SelectSubset<T, UsuariosRolesFindFirstArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuariosRoles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesFindFirstOrThrowArgs} args - Arguments to find a UsuariosRoles
     * @example
     * // Get one UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariosRolesFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariosRolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuariosRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findMany()
     * 
     * // Get first 10 UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosRolesWithIdOnly = await prisma.usuariosRoles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuariosRolesFindManyArgs>(args?: SelectSubset<T, UsuariosRolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuariosRoles.
     * @param {UsuariosRolesCreateArgs} args - Arguments to create a UsuariosRoles.
     * @example
     * // Create one UsuariosRoles
     * const UsuariosRoles = await prisma.usuariosRoles.create({
     *   data: {
     *     // ... data to create a UsuariosRoles
     *   }
     * })
     * 
     */
    create<T extends UsuariosRolesCreateArgs>(args: SelectSubset<T, UsuariosRolesCreateArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuariosRoles.
     * @param {UsuariosRolesCreateManyArgs} args - Arguments to create many UsuariosRoles.
     * @example
     * // Create many UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariosRolesCreateManyArgs>(args?: SelectSubset<T, UsuariosRolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuariosRoles and returns the data saved in the database.
     * @param {UsuariosRolesCreateManyAndReturnArgs} args - Arguments to create many UsuariosRoles.
     * @example
     * // Create many UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuariosRoles and only return the `id`
     * const usuariosRolesWithIdOnly = await prisma.usuariosRoles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuariosRolesCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuariosRolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuariosRoles.
     * @param {UsuariosRolesDeleteArgs} args - Arguments to delete one UsuariosRoles.
     * @example
     * // Delete one UsuariosRoles
     * const UsuariosRoles = await prisma.usuariosRoles.delete({
     *   where: {
     *     // ... filter to delete one UsuariosRoles
     *   }
     * })
     * 
     */
    delete<T extends UsuariosRolesDeleteArgs>(args: SelectSubset<T, UsuariosRolesDeleteArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuariosRoles.
     * @param {UsuariosRolesUpdateArgs} args - Arguments to update one UsuariosRoles.
     * @example
     * // Update one UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariosRolesUpdateArgs>(args: SelectSubset<T, UsuariosRolesUpdateArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuariosRoles.
     * @param {UsuariosRolesDeleteManyArgs} args - Arguments to filter UsuariosRoles to delete.
     * @example
     * // Delete a few UsuariosRoles
     * const { count } = await prisma.usuariosRoles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariosRolesDeleteManyArgs>(args?: SelectSubset<T, UsuariosRolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuariosRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariosRolesUpdateManyArgs>(args: SelectSubset<T, UsuariosRolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuariosRoles and returns the data updated in the database.
     * @param {UsuariosRolesUpdateManyAndReturnArgs} args - Arguments to update many UsuariosRoles.
     * @example
     * // Update many UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuariosRoles and only return the `id`
     * const usuariosRolesWithIdOnly = await prisma.usuariosRoles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuariosRolesUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuariosRolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuariosRoles.
     * @param {UsuariosRolesUpsertArgs} args - Arguments to update or create a UsuariosRoles.
     * @example
     * // Update or create a UsuariosRoles
     * const usuariosRoles = await prisma.usuariosRoles.upsert({
     *   create: {
     *     // ... data to create a UsuariosRoles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuariosRoles we want to update
     *   }
     * })
     */
    upsert<T extends UsuariosRolesUpsertArgs>(args: SelectSubset<T, UsuariosRolesUpsertArgs<ExtArgs>>): Prisma__UsuariosRolesClient<$Result.GetResult<Prisma.$UsuariosRolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuariosRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesCountArgs} args - Arguments to filter UsuariosRoles to count.
     * @example
     * // Count the number of UsuariosRoles
     * const count = await prisma.usuariosRoles.count({
     *   where: {
     *     // ... the filter for the UsuariosRoles we want to count
     *   }
     * })
    **/
    count<T extends UsuariosRolesCountArgs>(
      args?: Subset<T, UsuariosRolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosRolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuariosRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosRolesAggregateArgs>(args: Subset<T, UsuariosRolesAggregateArgs>): Prisma.PrismaPromise<GetUsuariosRolesAggregateType<T>>

    /**
     * Group by UsuariosRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosRolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariosRolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariosRolesGroupByArgs['orderBy'] }
        : { orderBy?: UsuariosRolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariosRolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuariosRoles model
   */
  readonly fields: UsuariosRolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuariosRoles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariosRolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsuariosRoles model
   */
  interface UsuariosRolesFieldRefs {
    readonly id: FieldRef<"UsuariosRoles", 'String'>
    readonly cotizacionId: FieldRef<"UsuariosRoles", 'String'>
    readonly usuariosFinales: FieldRef<"UsuariosRoles", 'String'>
    readonly tiposRoles: FieldRef<"UsuariosRoles", 'String'>
    readonly descripcionRoles: FieldRef<"UsuariosRoles", 'String'>
    readonly cantidadUsuarios: FieldRef<"UsuariosRoles", 'String'>
    readonly escalaUsuarios: FieldRef<"UsuariosRoles", 'EscalaUsuarios'>
    readonly createdAt: FieldRef<"UsuariosRoles", 'DateTime'>
    readonly updatedAt: FieldRef<"UsuariosRoles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsuariosRoles findUnique
   */
  export type UsuariosRolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosRoles to fetch.
     */
    where: UsuariosRolesWhereUniqueInput
  }

  /**
   * UsuariosRoles findUniqueOrThrow
   */
  export type UsuariosRolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosRoles to fetch.
     */
    where: UsuariosRolesWhereUniqueInput
  }

  /**
   * UsuariosRoles findFirst
   */
  export type UsuariosRolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosRoles to fetch.
     */
    where?: UsuariosRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosRoles to fetch.
     */
    orderBy?: UsuariosRolesOrderByWithRelationInput | UsuariosRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosRoles.
     */
    cursor?: UsuariosRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosRoles.
     */
    distinct?: UsuariosRolesScalarFieldEnum | UsuariosRolesScalarFieldEnum[]
  }

  /**
   * UsuariosRoles findFirstOrThrow
   */
  export type UsuariosRolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosRoles to fetch.
     */
    where?: UsuariosRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosRoles to fetch.
     */
    orderBy?: UsuariosRolesOrderByWithRelationInput | UsuariosRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuariosRoles.
     */
    cursor?: UsuariosRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuariosRoles.
     */
    distinct?: UsuariosRolesScalarFieldEnum | UsuariosRolesScalarFieldEnum[]
  }

  /**
   * UsuariosRoles findMany
   */
  export type UsuariosRolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter, which UsuariosRoles to fetch.
     */
    where?: UsuariosRolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuariosRoles to fetch.
     */
    orderBy?: UsuariosRolesOrderByWithRelationInput | UsuariosRolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuariosRoles.
     */
    cursor?: UsuariosRolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuariosRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuariosRoles.
     */
    skip?: number
    distinct?: UsuariosRolesScalarFieldEnum | UsuariosRolesScalarFieldEnum[]
  }

  /**
   * UsuariosRoles create
   */
  export type UsuariosRolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuariosRoles.
     */
    data: XOR<UsuariosRolesCreateInput, UsuariosRolesUncheckedCreateInput>
  }

  /**
   * UsuariosRoles createMany
   */
  export type UsuariosRolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuariosRoles.
     */
    data: UsuariosRolesCreateManyInput | UsuariosRolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuariosRoles createManyAndReturn
   */
  export type UsuariosRolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * The data used to create many UsuariosRoles.
     */
    data: UsuariosRolesCreateManyInput | UsuariosRolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuariosRoles update
   */
  export type UsuariosRolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuariosRoles.
     */
    data: XOR<UsuariosRolesUpdateInput, UsuariosRolesUncheckedUpdateInput>
    /**
     * Choose, which UsuariosRoles to update.
     */
    where: UsuariosRolesWhereUniqueInput
  }

  /**
   * UsuariosRoles updateMany
   */
  export type UsuariosRolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuariosRoles.
     */
    data: XOR<UsuariosRolesUpdateManyMutationInput, UsuariosRolesUncheckedUpdateManyInput>
    /**
     * Filter which UsuariosRoles to update
     */
    where?: UsuariosRolesWhereInput
    /**
     * Limit how many UsuariosRoles to update.
     */
    limit?: number
  }

  /**
   * UsuariosRoles updateManyAndReturn
   */
  export type UsuariosRolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * The data used to update UsuariosRoles.
     */
    data: XOR<UsuariosRolesUpdateManyMutationInput, UsuariosRolesUncheckedUpdateManyInput>
    /**
     * Filter which UsuariosRoles to update
     */
    where?: UsuariosRolesWhereInput
    /**
     * Limit how many UsuariosRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuariosRoles upsert
   */
  export type UsuariosRolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuariosRoles to update in case it exists.
     */
    where: UsuariosRolesWhereUniqueInput
    /**
     * In case the UsuariosRoles found by the `where` argument doesn't exist, create a new UsuariosRoles with this data.
     */
    create: XOR<UsuariosRolesCreateInput, UsuariosRolesUncheckedCreateInput>
    /**
     * In case the UsuariosRoles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariosRolesUpdateInput, UsuariosRolesUncheckedUpdateInput>
  }

  /**
   * UsuariosRoles delete
   */
  export type UsuariosRolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
    /**
     * Filter which UsuariosRoles to delete.
     */
    where: UsuariosRolesWhereUniqueInput
  }

  /**
   * UsuariosRoles deleteMany
   */
  export type UsuariosRolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuariosRoles to delete
     */
    where?: UsuariosRolesWhereInput
    /**
     * Limit how many UsuariosRoles to delete.
     */
    limit?: number
  }

  /**
   * UsuariosRoles without action
   */
  export type UsuariosRolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosRoles
     */
    select?: UsuariosRolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuariosRoles
     */
    omit?: UsuariosRolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariosRolesInclude<ExtArgs> | null
  }


  /**
   * Model AlcanceFuncionalidades
   */

  export type AggregateAlcanceFuncionalidades = {
    _count: AlcanceFuncionalidadesCountAggregateOutputType | null
    _min: AlcanceFuncionalidadesMinAggregateOutputType | null
    _max: AlcanceFuncionalidadesMaxAggregateOutputType | null
  }

  export type AlcanceFuncionalidadesMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    funcionalidadesClave: string | null
    flujosPrincipales: string | null
    funcionalidadesFase1: string | null
    funcionalidadesFase2: string | null
    fueraDeAlcance: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlcanceFuncionalidadesMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    funcionalidadesClave: string | null
    flujosPrincipales: string | null
    funcionalidadesFase1: string | null
    funcionalidadesFase2: string | null
    fueraDeAlcance: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlcanceFuncionalidadesCountAggregateOutputType = {
    id: number
    cotizacionId: number
    funcionalidadesClave: number
    flujosPrincipales: number
    funcionalidadesFase1: number
    funcionalidadesFase2: number
    fueraDeAlcance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlcanceFuncionalidadesMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    funcionalidadesClave?: true
    flujosPrincipales?: true
    funcionalidadesFase1?: true
    funcionalidadesFase2?: true
    fueraDeAlcance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlcanceFuncionalidadesMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    funcionalidadesClave?: true
    flujosPrincipales?: true
    funcionalidadesFase1?: true
    funcionalidadesFase2?: true
    fueraDeAlcance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlcanceFuncionalidadesCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    funcionalidadesClave?: true
    flujosPrincipales?: true
    funcionalidadesFase1?: true
    funcionalidadesFase2?: true
    fueraDeAlcance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlcanceFuncionalidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlcanceFuncionalidades to aggregate.
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlcanceFuncionalidades to fetch.
     */
    orderBy?: AlcanceFuncionalidadesOrderByWithRelationInput | AlcanceFuncionalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlcanceFuncionalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlcanceFuncionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlcanceFuncionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlcanceFuncionalidades
    **/
    _count?: true | AlcanceFuncionalidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlcanceFuncionalidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlcanceFuncionalidadesMaxAggregateInputType
  }

  export type GetAlcanceFuncionalidadesAggregateType<T extends AlcanceFuncionalidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateAlcanceFuncionalidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlcanceFuncionalidades[P]>
      : GetScalarType<T[P], AggregateAlcanceFuncionalidades[P]>
  }




  export type AlcanceFuncionalidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlcanceFuncionalidadesWhereInput
    orderBy?: AlcanceFuncionalidadesOrderByWithAggregationInput | AlcanceFuncionalidadesOrderByWithAggregationInput[]
    by: AlcanceFuncionalidadesScalarFieldEnum[] | AlcanceFuncionalidadesScalarFieldEnum
    having?: AlcanceFuncionalidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlcanceFuncionalidadesCountAggregateInputType | true
    _min?: AlcanceFuncionalidadesMinAggregateInputType
    _max?: AlcanceFuncionalidadesMaxAggregateInputType
  }

  export type AlcanceFuncionalidadesGroupByOutputType = {
    id: string
    cotizacionId: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1: string | null
    funcionalidadesFase2: string | null
    fueraDeAlcance: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlcanceFuncionalidadesCountAggregateOutputType | null
    _min: AlcanceFuncionalidadesMinAggregateOutputType | null
    _max: AlcanceFuncionalidadesMaxAggregateOutputType | null
  }

  type GetAlcanceFuncionalidadesGroupByPayload<T extends AlcanceFuncionalidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlcanceFuncionalidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlcanceFuncionalidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlcanceFuncionalidadesGroupByOutputType[P]>
            : GetScalarType<T[P], AlcanceFuncionalidadesGroupByOutputType[P]>
        }
      >
    >


  export type AlcanceFuncionalidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    funcionalidadesClave?: boolean
    flujosPrincipales?: boolean
    funcionalidadesFase1?: boolean
    funcionalidadesFase2?: boolean
    fueraDeAlcance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alcanceFuncionalidades"]>

  export type AlcanceFuncionalidadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    funcionalidadesClave?: boolean
    flujosPrincipales?: boolean
    funcionalidadesFase1?: boolean
    funcionalidadesFase2?: boolean
    fueraDeAlcance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alcanceFuncionalidades"]>

  export type AlcanceFuncionalidadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    funcionalidadesClave?: boolean
    flujosPrincipales?: boolean
    funcionalidadesFase1?: boolean
    funcionalidadesFase2?: boolean
    fueraDeAlcance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alcanceFuncionalidades"]>

  export type AlcanceFuncionalidadesSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    funcionalidadesClave?: boolean
    flujosPrincipales?: boolean
    funcionalidadesFase1?: boolean
    funcionalidadesFase2?: boolean
    fueraDeAlcance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlcanceFuncionalidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "funcionalidadesClave" | "flujosPrincipales" | "funcionalidadesFase1" | "funcionalidadesFase2" | "fueraDeAlcance" | "createdAt" | "updatedAt", ExtArgs["result"]["alcanceFuncionalidades"]>
  export type AlcanceFuncionalidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type AlcanceFuncionalidadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type AlcanceFuncionalidadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $AlcanceFuncionalidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlcanceFuncionalidades"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      funcionalidadesClave: string
      flujosPrincipales: string
      funcionalidadesFase1: string | null
      funcionalidadesFase2: string | null
      fueraDeAlcance: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alcanceFuncionalidades"]>
    composites: {}
  }

  type AlcanceFuncionalidadesGetPayload<S extends boolean | null | undefined | AlcanceFuncionalidadesDefaultArgs> = $Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload, S>

  type AlcanceFuncionalidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlcanceFuncionalidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlcanceFuncionalidadesCountAggregateInputType | true
    }

  export interface AlcanceFuncionalidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlcanceFuncionalidades'], meta: { name: 'AlcanceFuncionalidades' } }
    /**
     * Find zero or one AlcanceFuncionalidades that matches the filter.
     * @param {AlcanceFuncionalidadesFindUniqueArgs} args - Arguments to find a AlcanceFuncionalidades
     * @example
     * // Get one AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlcanceFuncionalidadesFindUniqueArgs>(args: SelectSubset<T, AlcanceFuncionalidadesFindUniqueArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AlcanceFuncionalidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlcanceFuncionalidadesFindUniqueOrThrowArgs} args - Arguments to find a AlcanceFuncionalidades
     * @example
     * // Get one AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlcanceFuncionalidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, AlcanceFuncionalidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlcanceFuncionalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesFindFirstArgs} args - Arguments to find a AlcanceFuncionalidades
     * @example
     * // Get one AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlcanceFuncionalidadesFindFirstArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesFindFirstArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AlcanceFuncionalidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesFindFirstOrThrowArgs} args - Arguments to find a AlcanceFuncionalidades
     * @example
     * // Get one AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlcanceFuncionalidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AlcanceFuncionalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findMany()
     * 
     * // Get first 10 AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alcanceFuncionalidadesWithIdOnly = await prisma.alcanceFuncionalidades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlcanceFuncionalidadesFindManyArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesCreateArgs} args - Arguments to create a AlcanceFuncionalidades.
     * @example
     * // Create one AlcanceFuncionalidades
     * const AlcanceFuncionalidades = await prisma.alcanceFuncionalidades.create({
     *   data: {
     *     // ... data to create a AlcanceFuncionalidades
     *   }
     * })
     * 
     */
    create<T extends AlcanceFuncionalidadesCreateArgs>(args: SelectSubset<T, AlcanceFuncionalidadesCreateArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesCreateManyArgs} args - Arguments to create many AlcanceFuncionalidades.
     * @example
     * // Create many AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlcanceFuncionalidadesCreateManyArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlcanceFuncionalidades and returns the data saved in the database.
     * @param {AlcanceFuncionalidadesCreateManyAndReturnArgs} args - Arguments to create many AlcanceFuncionalidades.
     * @example
     * // Create many AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlcanceFuncionalidades and only return the `id`
     * const alcanceFuncionalidadesWithIdOnly = await prisma.alcanceFuncionalidades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlcanceFuncionalidadesCreateManyAndReturnArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesDeleteArgs} args - Arguments to delete one AlcanceFuncionalidades.
     * @example
     * // Delete one AlcanceFuncionalidades
     * const AlcanceFuncionalidades = await prisma.alcanceFuncionalidades.delete({
     *   where: {
     *     // ... filter to delete one AlcanceFuncionalidades
     *   }
     * })
     * 
     */
    delete<T extends AlcanceFuncionalidadesDeleteArgs>(args: SelectSubset<T, AlcanceFuncionalidadesDeleteArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesUpdateArgs} args - Arguments to update one AlcanceFuncionalidades.
     * @example
     * // Update one AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlcanceFuncionalidadesUpdateArgs>(args: SelectSubset<T, AlcanceFuncionalidadesUpdateArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesDeleteManyArgs} args - Arguments to filter AlcanceFuncionalidades to delete.
     * @example
     * // Delete a few AlcanceFuncionalidades
     * const { count } = await prisma.alcanceFuncionalidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlcanceFuncionalidadesDeleteManyArgs>(args?: SelectSubset<T, AlcanceFuncionalidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlcanceFuncionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlcanceFuncionalidadesUpdateManyArgs>(args: SelectSubset<T, AlcanceFuncionalidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlcanceFuncionalidades and returns the data updated in the database.
     * @param {AlcanceFuncionalidadesUpdateManyAndReturnArgs} args - Arguments to update many AlcanceFuncionalidades.
     * @example
     * // Update many AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AlcanceFuncionalidades and only return the `id`
     * const alcanceFuncionalidadesWithIdOnly = await prisma.alcanceFuncionalidades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlcanceFuncionalidadesUpdateManyAndReturnArgs>(args: SelectSubset<T, AlcanceFuncionalidadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AlcanceFuncionalidades.
     * @param {AlcanceFuncionalidadesUpsertArgs} args - Arguments to update or create a AlcanceFuncionalidades.
     * @example
     * // Update or create a AlcanceFuncionalidades
     * const alcanceFuncionalidades = await prisma.alcanceFuncionalidades.upsert({
     *   create: {
     *     // ... data to create a AlcanceFuncionalidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlcanceFuncionalidades we want to update
     *   }
     * })
     */
    upsert<T extends AlcanceFuncionalidadesUpsertArgs>(args: SelectSubset<T, AlcanceFuncionalidadesUpsertArgs<ExtArgs>>): Prisma__AlcanceFuncionalidadesClient<$Result.GetResult<Prisma.$AlcanceFuncionalidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AlcanceFuncionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesCountArgs} args - Arguments to filter AlcanceFuncionalidades to count.
     * @example
     * // Count the number of AlcanceFuncionalidades
     * const count = await prisma.alcanceFuncionalidades.count({
     *   where: {
     *     // ... the filter for the AlcanceFuncionalidades we want to count
     *   }
     * })
    **/
    count<T extends AlcanceFuncionalidadesCountArgs>(
      args?: Subset<T, AlcanceFuncionalidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlcanceFuncionalidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlcanceFuncionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlcanceFuncionalidadesAggregateArgs>(args: Subset<T, AlcanceFuncionalidadesAggregateArgs>): Prisma.PrismaPromise<GetAlcanceFuncionalidadesAggregateType<T>>

    /**
     * Group by AlcanceFuncionalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlcanceFuncionalidadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlcanceFuncionalidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlcanceFuncionalidadesGroupByArgs['orderBy'] }
        : { orderBy?: AlcanceFuncionalidadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlcanceFuncionalidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlcanceFuncionalidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlcanceFuncionalidades model
   */
  readonly fields: AlcanceFuncionalidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlcanceFuncionalidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlcanceFuncionalidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlcanceFuncionalidades model
   */
  interface AlcanceFuncionalidadesFieldRefs {
    readonly id: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly cotizacionId: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly funcionalidadesClave: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly flujosPrincipales: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly funcionalidadesFase1: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly funcionalidadesFase2: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly fueraDeAlcance: FieldRef<"AlcanceFuncionalidades", 'String'>
    readonly createdAt: FieldRef<"AlcanceFuncionalidades", 'DateTime'>
    readonly updatedAt: FieldRef<"AlcanceFuncionalidades", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlcanceFuncionalidades findUnique
   */
  export type AlcanceFuncionalidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter, which AlcanceFuncionalidades to fetch.
     */
    where: AlcanceFuncionalidadesWhereUniqueInput
  }

  /**
   * AlcanceFuncionalidades findUniqueOrThrow
   */
  export type AlcanceFuncionalidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter, which AlcanceFuncionalidades to fetch.
     */
    where: AlcanceFuncionalidadesWhereUniqueInput
  }

  /**
   * AlcanceFuncionalidades findFirst
   */
  export type AlcanceFuncionalidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter, which AlcanceFuncionalidades to fetch.
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlcanceFuncionalidades to fetch.
     */
    orderBy?: AlcanceFuncionalidadesOrderByWithRelationInput | AlcanceFuncionalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlcanceFuncionalidades.
     */
    cursor?: AlcanceFuncionalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlcanceFuncionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlcanceFuncionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlcanceFuncionalidades.
     */
    distinct?: AlcanceFuncionalidadesScalarFieldEnum | AlcanceFuncionalidadesScalarFieldEnum[]
  }

  /**
   * AlcanceFuncionalidades findFirstOrThrow
   */
  export type AlcanceFuncionalidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter, which AlcanceFuncionalidades to fetch.
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlcanceFuncionalidades to fetch.
     */
    orderBy?: AlcanceFuncionalidadesOrderByWithRelationInput | AlcanceFuncionalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlcanceFuncionalidades.
     */
    cursor?: AlcanceFuncionalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlcanceFuncionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlcanceFuncionalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlcanceFuncionalidades.
     */
    distinct?: AlcanceFuncionalidadesScalarFieldEnum | AlcanceFuncionalidadesScalarFieldEnum[]
  }

  /**
   * AlcanceFuncionalidades findMany
   */
  export type AlcanceFuncionalidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter, which AlcanceFuncionalidades to fetch.
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlcanceFuncionalidades to fetch.
     */
    orderBy?: AlcanceFuncionalidadesOrderByWithRelationInput | AlcanceFuncionalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlcanceFuncionalidades.
     */
    cursor?: AlcanceFuncionalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlcanceFuncionalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlcanceFuncionalidades.
     */
    skip?: number
    distinct?: AlcanceFuncionalidadesScalarFieldEnum | AlcanceFuncionalidadesScalarFieldEnum[]
  }

  /**
   * AlcanceFuncionalidades create
   */
  export type AlcanceFuncionalidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a AlcanceFuncionalidades.
     */
    data: XOR<AlcanceFuncionalidadesCreateInput, AlcanceFuncionalidadesUncheckedCreateInput>
  }

  /**
   * AlcanceFuncionalidades createMany
   */
  export type AlcanceFuncionalidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlcanceFuncionalidades.
     */
    data: AlcanceFuncionalidadesCreateManyInput | AlcanceFuncionalidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlcanceFuncionalidades createManyAndReturn
   */
  export type AlcanceFuncionalidadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * The data used to create many AlcanceFuncionalidades.
     */
    data: AlcanceFuncionalidadesCreateManyInput | AlcanceFuncionalidadesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlcanceFuncionalidades update
   */
  export type AlcanceFuncionalidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a AlcanceFuncionalidades.
     */
    data: XOR<AlcanceFuncionalidadesUpdateInput, AlcanceFuncionalidadesUncheckedUpdateInput>
    /**
     * Choose, which AlcanceFuncionalidades to update.
     */
    where: AlcanceFuncionalidadesWhereUniqueInput
  }

  /**
   * AlcanceFuncionalidades updateMany
   */
  export type AlcanceFuncionalidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlcanceFuncionalidades.
     */
    data: XOR<AlcanceFuncionalidadesUpdateManyMutationInput, AlcanceFuncionalidadesUncheckedUpdateManyInput>
    /**
     * Filter which AlcanceFuncionalidades to update
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * Limit how many AlcanceFuncionalidades to update.
     */
    limit?: number
  }

  /**
   * AlcanceFuncionalidades updateManyAndReturn
   */
  export type AlcanceFuncionalidadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * The data used to update AlcanceFuncionalidades.
     */
    data: XOR<AlcanceFuncionalidadesUpdateManyMutationInput, AlcanceFuncionalidadesUncheckedUpdateManyInput>
    /**
     * Filter which AlcanceFuncionalidades to update
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * Limit how many AlcanceFuncionalidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AlcanceFuncionalidades upsert
   */
  export type AlcanceFuncionalidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the AlcanceFuncionalidades to update in case it exists.
     */
    where: AlcanceFuncionalidadesWhereUniqueInput
    /**
     * In case the AlcanceFuncionalidades found by the `where` argument doesn't exist, create a new AlcanceFuncionalidades with this data.
     */
    create: XOR<AlcanceFuncionalidadesCreateInput, AlcanceFuncionalidadesUncheckedCreateInput>
    /**
     * In case the AlcanceFuncionalidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlcanceFuncionalidadesUpdateInput, AlcanceFuncionalidadesUncheckedUpdateInput>
  }

  /**
   * AlcanceFuncionalidades delete
   */
  export type AlcanceFuncionalidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
    /**
     * Filter which AlcanceFuncionalidades to delete.
     */
    where: AlcanceFuncionalidadesWhereUniqueInput
  }

  /**
   * AlcanceFuncionalidades deleteMany
   */
  export type AlcanceFuncionalidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlcanceFuncionalidades to delete
     */
    where?: AlcanceFuncionalidadesWhereInput
    /**
     * Limit how many AlcanceFuncionalidades to delete.
     */
    limit?: number
  }

  /**
   * AlcanceFuncionalidades without action
   */
  export type AlcanceFuncionalidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlcanceFuncionalidades
     */
    select?: AlcanceFuncionalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AlcanceFuncionalidades
     */
    omit?: AlcanceFuncionalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlcanceFuncionalidadesInclude<ExtArgs> | null
  }


  /**
   * Model RequerimientosTecnicos
   */

  export type AggregateRequerimientosTecnicos = {
    _count: RequerimientosTecnicosCountAggregateOutputType | null
    _min: RequerimientosTecnicosMinAggregateOutputType | null
    _max: RequerimientosTecnicosMaxAggregateOutputType | null
  }

  export type RequerimientosTecnicosMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    detallesPlataforma: string | null
    hosting: string | null
    tecnologias: string | null
    requisitoRendimiento: string | null
    requisitoSeguridad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequerimientosTecnicosMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    detallesPlataforma: string | null
    hosting: string | null
    tecnologias: string | null
    requisitoRendimiento: string | null
    requisitoSeguridad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RequerimientosTecnicosCountAggregateOutputType = {
    id: number
    cotizacionId: number
    plataformas: number
    detallesPlataforma: number
    hosting: number
    tecnologias: number
    requisitoRendimiento: number
    requisitoSeguridad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RequerimientosTecnicosMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    detallesPlataforma?: true
    hosting?: true
    tecnologias?: true
    requisitoRendimiento?: true
    requisitoSeguridad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequerimientosTecnicosMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    detallesPlataforma?: true
    hosting?: true
    tecnologias?: true
    requisitoRendimiento?: true
    requisitoSeguridad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RequerimientosTecnicosCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    plataformas?: true
    detallesPlataforma?: true
    hosting?: true
    tecnologias?: true
    requisitoRendimiento?: true
    requisitoSeguridad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RequerimientosTecnicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequerimientosTecnicos to aggregate.
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequerimientosTecnicos to fetch.
     */
    orderBy?: RequerimientosTecnicosOrderByWithRelationInput | RequerimientosTecnicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequerimientosTecnicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequerimientosTecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequerimientosTecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RequerimientosTecnicos
    **/
    _count?: true | RequerimientosTecnicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequerimientosTecnicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequerimientosTecnicosMaxAggregateInputType
  }

  export type GetRequerimientosTecnicosAggregateType<T extends RequerimientosTecnicosAggregateArgs> = {
        [P in keyof T & keyof AggregateRequerimientosTecnicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequerimientosTecnicos[P]>
      : GetScalarType<T[P], AggregateRequerimientosTecnicos[P]>
  }




  export type RequerimientosTecnicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequerimientosTecnicosWhereInput
    orderBy?: RequerimientosTecnicosOrderByWithAggregationInput | RequerimientosTecnicosOrderByWithAggregationInput[]
    by: RequerimientosTecnicosScalarFieldEnum[] | RequerimientosTecnicosScalarFieldEnum
    having?: RequerimientosTecnicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequerimientosTecnicosCountAggregateInputType | true
    _min?: RequerimientosTecnicosMinAggregateInputType
    _max?: RequerimientosTecnicosMaxAggregateInputType
  }

  export type RequerimientosTecnicosGroupByOutputType = {
    id: string
    cotizacionId: string
    plataformas: $Enums.Plataforma[]
    detallesPlataforma: string | null
    hosting: string | null
    tecnologias: string | null
    requisitoRendimiento: string | null
    requisitoSeguridad: string | null
    createdAt: Date
    updatedAt: Date
    _count: RequerimientosTecnicosCountAggregateOutputType | null
    _min: RequerimientosTecnicosMinAggregateOutputType | null
    _max: RequerimientosTecnicosMaxAggregateOutputType | null
  }

  type GetRequerimientosTecnicosGroupByPayload<T extends RequerimientosTecnicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequerimientosTecnicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequerimientosTecnicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequerimientosTecnicosGroupByOutputType[P]>
            : GetScalarType<T[P], RequerimientosTecnicosGroupByOutputType[P]>
        }
      >
    >


  export type RequerimientosTecnicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    plataformas?: boolean
    detallesPlataforma?: boolean
    hosting?: boolean
    tecnologias?: boolean
    requisitoRendimiento?: boolean
    requisitoSeguridad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requerimientosTecnicos"]>

  export type RequerimientosTecnicosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    plataformas?: boolean
    detallesPlataforma?: boolean
    hosting?: boolean
    tecnologias?: boolean
    requisitoRendimiento?: boolean
    requisitoSeguridad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requerimientosTecnicos"]>

  export type RequerimientosTecnicosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    plataformas?: boolean
    detallesPlataforma?: boolean
    hosting?: boolean
    tecnologias?: boolean
    requisitoRendimiento?: boolean
    requisitoSeguridad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requerimientosTecnicos"]>

  export type RequerimientosTecnicosSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    plataformas?: boolean
    detallesPlataforma?: boolean
    hosting?: boolean
    tecnologias?: boolean
    requisitoRendimiento?: boolean
    requisitoSeguridad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RequerimientosTecnicosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "plataformas" | "detallesPlataforma" | "hosting" | "tecnologias" | "requisitoRendimiento" | "requisitoSeguridad" | "createdAt" | "updatedAt", ExtArgs["result"]["requerimientosTecnicos"]>
  export type RequerimientosTecnicosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type RequerimientosTecnicosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type RequerimientosTecnicosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $RequerimientosTecnicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RequerimientosTecnicos"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      plataformas: $Enums.Plataforma[]
      detallesPlataforma: string | null
      hosting: string | null
      tecnologias: string | null
      requisitoRendimiento: string | null
      requisitoSeguridad: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["requerimientosTecnicos"]>
    composites: {}
  }

  type RequerimientosTecnicosGetPayload<S extends boolean | null | undefined | RequerimientosTecnicosDefaultArgs> = $Result.GetResult<Prisma.$RequerimientosTecnicosPayload, S>

  type RequerimientosTecnicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequerimientosTecnicosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequerimientosTecnicosCountAggregateInputType | true
    }

  export interface RequerimientosTecnicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RequerimientosTecnicos'], meta: { name: 'RequerimientosTecnicos' } }
    /**
     * Find zero or one RequerimientosTecnicos that matches the filter.
     * @param {RequerimientosTecnicosFindUniqueArgs} args - Arguments to find a RequerimientosTecnicos
     * @example
     * // Get one RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequerimientosTecnicosFindUniqueArgs>(args: SelectSubset<T, RequerimientosTecnicosFindUniqueArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RequerimientosTecnicos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequerimientosTecnicosFindUniqueOrThrowArgs} args - Arguments to find a RequerimientosTecnicos
     * @example
     * // Get one RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequerimientosTecnicosFindUniqueOrThrowArgs>(args: SelectSubset<T, RequerimientosTecnicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequerimientosTecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosFindFirstArgs} args - Arguments to find a RequerimientosTecnicos
     * @example
     * // Get one RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequerimientosTecnicosFindFirstArgs>(args?: SelectSubset<T, RequerimientosTecnicosFindFirstArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RequerimientosTecnicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosFindFirstOrThrowArgs} args - Arguments to find a RequerimientosTecnicos
     * @example
     * // Get one RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequerimientosTecnicosFindFirstOrThrowArgs>(args?: SelectSubset<T, RequerimientosTecnicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RequerimientosTecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findMany()
     * 
     * // Get first 10 RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requerimientosTecnicosWithIdOnly = await prisma.requerimientosTecnicos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequerimientosTecnicosFindManyArgs>(args?: SelectSubset<T, RequerimientosTecnicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RequerimientosTecnicos.
     * @param {RequerimientosTecnicosCreateArgs} args - Arguments to create a RequerimientosTecnicos.
     * @example
     * // Create one RequerimientosTecnicos
     * const RequerimientosTecnicos = await prisma.requerimientosTecnicos.create({
     *   data: {
     *     // ... data to create a RequerimientosTecnicos
     *   }
     * })
     * 
     */
    create<T extends RequerimientosTecnicosCreateArgs>(args: SelectSubset<T, RequerimientosTecnicosCreateArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RequerimientosTecnicos.
     * @param {RequerimientosTecnicosCreateManyArgs} args - Arguments to create many RequerimientosTecnicos.
     * @example
     * // Create many RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequerimientosTecnicosCreateManyArgs>(args?: SelectSubset<T, RequerimientosTecnicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RequerimientosTecnicos and returns the data saved in the database.
     * @param {RequerimientosTecnicosCreateManyAndReturnArgs} args - Arguments to create many RequerimientosTecnicos.
     * @example
     * // Create many RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RequerimientosTecnicos and only return the `id`
     * const requerimientosTecnicosWithIdOnly = await prisma.requerimientosTecnicos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequerimientosTecnicosCreateManyAndReturnArgs>(args?: SelectSubset<T, RequerimientosTecnicosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RequerimientosTecnicos.
     * @param {RequerimientosTecnicosDeleteArgs} args - Arguments to delete one RequerimientosTecnicos.
     * @example
     * // Delete one RequerimientosTecnicos
     * const RequerimientosTecnicos = await prisma.requerimientosTecnicos.delete({
     *   where: {
     *     // ... filter to delete one RequerimientosTecnicos
     *   }
     * })
     * 
     */
    delete<T extends RequerimientosTecnicosDeleteArgs>(args: SelectSubset<T, RequerimientosTecnicosDeleteArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RequerimientosTecnicos.
     * @param {RequerimientosTecnicosUpdateArgs} args - Arguments to update one RequerimientosTecnicos.
     * @example
     * // Update one RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequerimientosTecnicosUpdateArgs>(args: SelectSubset<T, RequerimientosTecnicosUpdateArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RequerimientosTecnicos.
     * @param {RequerimientosTecnicosDeleteManyArgs} args - Arguments to filter RequerimientosTecnicos to delete.
     * @example
     * // Delete a few RequerimientosTecnicos
     * const { count } = await prisma.requerimientosTecnicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequerimientosTecnicosDeleteManyArgs>(args?: SelectSubset<T, RequerimientosTecnicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequerimientosTecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequerimientosTecnicosUpdateManyArgs>(args: SelectSubset<T, RequerimientosTecnicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RequerimientosTecnicos and returns the data updated in the database.
     * @param {RequerimientosTecnicosUpdateManyAndReturnArgs} args - Arguments to update many RequerimientosTecnicos.
     * @example
     * // Update many RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RequerimientosTecnicos and only return the `id`
     * const requerimientosTecnicosWithIdOnly = await prisma.requerimientosTecnicos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequerimientosTecnicosUpdateManyAndReturnArgs>(args: SelectSubset<T, RequerimientosTecnicosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RequerimientosTecnicos.
     * @param {RequerimientosTecnicosUpsertArgs} args - Arguments to update or create a RequerimientosTecnicos.
     * @example
     * // Update or create a RequerimientosTecnicos
     * const requerimientosTecnicos = await prisma.requerimientosTecnicos.upsert({
     *   create: {
     *     // ... data to create a RequerimientosTecnicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RequerimientosTecnicos we want to update
     *   }
     * })
     */
    upsert<T extends RequerimientosTecnicosUpsertArgs>(args: SelectSubset<T, RequerimientosTecnicosUpsertArgs<ExtArgs>>): Prisma__RequerimientosTecnicosClient<$Result.GetResult<Prisma.$RequerimientosTecnicosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RequerimientosTecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosCountArgs} args - Arguments to filter RequerimientosTecnicos to count.
     * @example
     * // Count the number of RequerimientosTecnicos
     * const count = await prisma.requerimientosTecnicos.count({
     *   where: {
     *     // ... the filter for the RequerimientosTecnicos we want to count
     *   }
     * })
    **/
    count<T extends RequerimientosTecnicosCountArgs>(
      args?: Subset<T, RequerimientosTecnicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequerimientosTecnicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RequerimientosTecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequerimientosTecnicosAggregateArgs>(args: Subset<T, RequerimientosTecnicosAggregateArgs>): Prisma.PrismaPromise<GetRequerimientosTecnicosAggregateType<T>>

    /**
     * Group by RequerimientosTecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequerimientosTecnicosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequerimientosTecnicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequerimientosTecnicosGroupByArgs['orderBy'] }
        : { orderBy?: RequerimientosTecnicosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequerimientosTecnicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequerimientosTecnicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RequerimientosTecnicos model
   */
  readonly fields: RequerimientosTecnicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RequerimientosTecnicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequerimientosTecnicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RequerimientosTecnicos model
   */
  interface RequerimientosTecnicosFieldRefs {
    readonly id: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly cotizacionId: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly plataformas: FieldRef<"RequerimientosTecnicos", 'Plataforma[]'>
    readonly detallesPlataforma: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly hosting: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly tecnologias: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly requisitoRendimiento: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly requisitoSeguridad: FieldRef<"RequerimientosTecnicos", 'String'>
    readonly createdAt: FieldRef<"RequerimientosTecnicos", 'DateTime'>
    readonly updatedAt: FieldRef<"RequerimientosTecnicos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RequerimientosTecnicos findUnique
   */
  export type RequerimientosTecnicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter, which RequerimientosTecnicos to fetch.
     */
    where: RequerimientosTecnicosWhereUniqueInput
  }

  /**
   * RequerimientosTecnicos findUniqueOrThrow
   */
  export type RequerimientosTecnicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter, which RequerimientosTecnicos to fetch.
     */
    where: RequerimientosTecnicosWhereUniqueInput
  }

  /**
   * RequerimientosTecnicos findFirst
   */
  export type RequerimientosTecnicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter, which RequerimientosTecnicos to fetch.
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequerimientosTecnicos to fetch.
     */
    orderBy?: RequerimientosTecnicosOrderByWithRelationInput | RequerimientosTecnicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequerimientosTecnicos.
     */
    cursor?: RequerimientosTecnicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequerimientosTecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequerimientosTecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequerimientosTecnicos.
     */
    distinct?: RequerimientosTecnicosScalarFieldEnum | RequerimientosTecnicosScalarFieldEnum[]
  }

  /**
   * RequerimientosTecnicos findFirstOrThrow
   */
  export type RequerimientosTecnicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter, which RequerimientosTecnicos to fetch.
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequerimientosTecnicos to fetch.
     */
    orderBy?: RequerimientosTecnicosOrderByWithRelationInput | RequerimientosTecnicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RequerimientosTecnicos.
     */
    cursor?: RequerimientosTecnicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequerimientosTecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequerimientosTecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RequerimientosTecnicos.
     */
    distinct?: RequerimientosTecnicosScalarFieldEnum | RequerimientosTecnicosScalarFieldEnum[]
  }

  /**
   * RequerimientosTecnicos findMany
   */
  export type RequerimientosTecnicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter, which RequerimientosTecnicos to fetch.
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RequerimientosTecnicos to fetch.
     */
    orderBy?: RequerimientosTecnicosOrderByWithRelationInput | RequerimientosTecnicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RequerimientosTecnicos.
     */
    cursor?: RequerimientosTecnicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RequerimientosTecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RequerimientosTecnicos.
     */
    skip?: number
    distinct?: RequerimientosTecnicosScalarFieldEnum | RequerimientosTecnicosScalarFieldEnum[]
  }

  /**
   * RequerimientosTecnicos create
   */
  export type RequerimientosTecnicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * The data needed to create a RequerimientosTecnicos.
     */
    data: XOR<RequerimientosTecnicosCreateInput, RequerimientosTecnicosUncheckedCreateInput>
  }

  /**
   * RequerimientosTecnicos createMany
   */
  export type RequerimientosTecnicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RequerimientosTecnicos.
     */
    data: RequerimientosTecnicosCreateManyInput | RequerimientosTecnicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RequerimientosTecnicos createManyAndReturn
   */
  export type RequerimientosTecnicosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * The data used to create many RequerimientosTecnicos.
     */
    data: RequerimientosTecnicosCreateManyInput | RequerimientosTecnicosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequerimientosTecnicos update
   */
  export type RequerimientosTecnicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * The data needed to update a RequerimientosTecnicos.
     */
    data: XOR<RequerimientosTecnicosUpdateInput, RequerimientosTecnicosUncheckedUpdateInput>
    /**
     * Choose, which RequerimientosTecnicos to update.
     */
    where: RequerimientosTecnicosWhereUniqueInput
  }

  /**
   * RequerimientosTecnicos updateMany
   */
  export type RequerimientosTecnicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RequerimientosTecnicos.
     */
    data: XOR<RequerimientosTecnicosUpdateManyMutationInput, RequerimientosTecnicosUncheckedUpdateManyInput>
    /**
     * Filter which RequerimientosTecnicos to update
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * Limit how many RequerimientosTecnicos to update.
     */
    limit?: number
  }

  /**
   * RequerimientosTecnicos updateManyAndReturn
   */
  export type RequerimientosTecnicosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * The data used to update RequerimientosTecnicos.
     */
    data: XOR<RequerimientosTecnicosUpdateManyMutationInput, RequerimientosTecnicosUncheckedUpdateManyInput>
    /**
     * Filter which RequerimientosTecnicos to update
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * Limit how many RequerimientosTecnicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RequerimientosTecnicos upsert
   */
  export type RequerimientosTecnicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * The filter to search for the RequerimientosTecnicos to update in case it exists.
     */
    where: RequerimientosTecnicosWhereUniqueInput
    /**
     * In case the RequerimientosTecnicos found by the `where` argument doesn't exist, create a new RequerimientosTecnicos with this data.
     */
    create: XOR<RequerimientosTecnicosCreateInput, RequerimientosTecnicosUncheckedCreateInput>
    /**
     * In case the RequerimientosTecnicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequerimientosTecnicosUpdateInput, RequerimientosTecnicosUncheckedUpdateInput>
  }

  /**
   * RequerimientosTecnicos delete
   */
  export type RequerimientosTecnicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
    /**
     * Filter which RequerimientosTecnicos to delete.
     */
    where: RequerimientosTecnicosWhereUniqueInput
  }

  /**
   * RequerimientosTecnicos deleteMany
   */
  export type RequerimientosTecnicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RequerimientosTecnicos to delete
     */
    where?: RequerimientosTecnicosWhereInput
    /**
     * Limit how many RequerimientosTecnicos to delete.
     */
    limit?: number
  }

  /**
   * RequerimientosTecnicos without action
   */
  export type RequerimientosTecnicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequerimientosTecnicos
     */
    select?: RequerimientosTecnicosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RequerimientosTecnicos
     */
    omit?: RequerimientosTecnicosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequerimientosTecnicosInclude<ExtArgs> | null
  }


  /**
   * Model Integraciones
   */

  export type AggregateIntegraciones = {
    _count: IntegracionesCountAggregateOutputType | null
    _min: IntegracionesMinAggregateOutputType | null
    _max: IntegracionesMaxAggregateOutputType | null
  }

  export type IntegracionesMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    sistemasExternos: string | null
    apisTerceros: string | null
    migracionDatos: string | null
    reportes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegracionesMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    sistemasExternos: string | null
    apisTerceros: string | null
    migracionDatos: string | null
    reportes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegracionesCountAggregateOutputType = {
    id: number
    cotizacionId: number
    sistemasExternos: number
    apisTerceros: number
    migracionDatos: number
    reportes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegracionesMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    sistemasExternos?: true
    apisTerceros?: true
    migracionDatos?: true
    reportes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegracionesMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    sistemasExternos?: true
    apisTerceros?: true
    migracionDatos?: true
    reportes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegracionesCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    sistemasExternos?: true
    apisTerceros?: true
    migracionDatos?: true
    reportes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegracionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integraciones to aggregate.
     */
    where?: IntegracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integraciones to fetch.
     */
    orderBy?: IntegracionesOrderByWithRelationInput | IntegracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integraciones
    **/
    _count?: true | IntegracionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegracionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegracionesMaxAggregateInputType
  }

  export type GetIntegracionesAggregateType<T extends IntegracionesAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegraciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegraciones[P]>
      : GetScalarType<T[P], AggregateIntegraciones[P]>
  }




  export type IntegracionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegracionesWhereInput
    orderBy?: IntegracionesOrderByWithAggregationInput | IntegracionesOrderByWithAggregationInput[]
    by: IntegracionesScalarFieldEnum[] | IntegracionesScalarFieldEnum
    having?: IntegracionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegracionesCountAggregateInputType | true
    _min?: IntegracionesMinAggregateInputType
    _max?: IntegracionesMaxAggregateInputType
  }

  export type IntegracionesGroupByOutputType = {
    id: string
    cotizacionId: string
    sistemasExternos: string | null
    apisTerceros: string | null
    migracionDatos: string | null
    reportes: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntegracionesCountAggregateOutputType | null
    _min: IntegracionesMinAggregateOutputType | null
    _max: IntegracionesMaxAggregateOutputType | null
  }

  type GetIntegracionesGroupByPayload<T extends IntegracionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegracionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegracionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegracionesGroupByOutputType[P]>
            : GetScalarType<T[P], IntegracionesGroupByOutputType[P]>
        }
      >
    >


  export type IntegracionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    sistemasExternos?: boolean
    apisTerceros?: boolean
    migracionDatos?: boolean
    reportes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integraciones"]>

  export type IntegracionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    sistemasExternos?: boolean
    apisTerceros?: boolean
    migracionDatos?: boolean
    reportes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integraciones"]>

  export type IntegracionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    sistemasExternos?: boolean
    apisTerceros?: boolean
    migracionDatos?: boolean
    reportes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integraciones"]>

  export type IntegracionesSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    sistemasExternos?: boolean
    apisTerceros?: boolean
    migracionDatos?: boolean
    reportes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegracionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "sistemasExternos" | "apisTerceros" | "migracionDatos" | "reportes" | "createdAt" | "updatedAt", ExtArgs["result"]["integraciones"]>
  export type IntegracionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type IntegracionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type IntegracionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $IntegracionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integraciones"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      sistemasExternos: string | null
      apisTerceros: string | null
      migracionDatos: string | null
      reportes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integraciones"]>
    composites: {}
  }

  type IntegracionesGetPayload<S extends boolean | null | undefined | IntegracionesDefaultArgs> = $Result.GetResult<Prisma.$IntegracionesPayload, S>

  type IntegracionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegracionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegracionesCountAggregateInputType | true
    }

  export interface IntegracionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integraciones'], meta: { name: 'Integraciones' } }
    /**
     * Find zero or one Integraciones that matches the filter.
     * @param {IntegracionesFindUniqueArgs} args - Arguments to find a Integraciones
     * @example
     * // Get one Integraciones
     * const integraciones = await prisma.integraciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegracionesFindUniqueArgs>(args: SelectSubset<T, IntegracionesFindUniqueArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integraciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegracionesFindUniqueOrThrowArgs} args - Arguments to find a Integraciones
     * @example
     * // Get one Integraciones
     * const integraciones = await prisma.integraciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegracionesFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegracionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesFindFirstArgs} args - Arguments to find a Integraciones
     * @example
     * // Get one Integraciones
     * const integraciones = await prisma.integraciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegracionesFindFirstArgs>(args?: SelectSubset<T, IntegracionesFindFirstArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integraciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesFindFirstOrThrowArgs} args - Arguments to find a Integraciones
     * @example
     * // Get one Integraciones
     * const integraciones = await prisma.integraciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegracionesFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegracionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integraciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integraciones
     * const integraciones = await prisma.integraciones.findMany()
     * 
     * // Get first 10 Integraciones
     * const integraciones = await prisma.integraciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integracionesWithIdOnly = await prisma.integraciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegracionesFindManyArgs>(args?: SelectSubset<T, IntegracionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integraciones.
     * @param {IntegracionesCreateArgs} args - Arguments to create a Integraciones.
     * @example
     * // Create one Integraciones
     * const Integraciones = await prisma.integraciones.create({
     *   data: {
     *     // ... data to create a Integraciones
     *   }
     * })
     * 
     */
    create<T extends IntegracionesCreateArgs>(args: SelectSubset<T, IntegracionesCreateArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integraciones.
     * @param {IntegracionesCreateManyArgs} args - Arguments to create many Integraciones.
     * @example
     * // Create many Integraciones
     * const integraciones = await prisma.integraciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegracionesCreateManyArgs>(args?: SelectSubset<T, IntegracionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integraciones and returns the data saved in the database.
     * @param {IntegracionesCreateManyAndReturnArgs} args - Arguments to create many Integraciones.
     * @example
     * // Create many Integraciones
     * const integraciones = await prisma.integraciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integraciones and only return the `id`
     * const integracionesWithIdOnly = await prisma.integraciones.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegracionesCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegracionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integraciones.
     * @param {IntegracionesDeleteArgs} args - Arguments to delete one Integraciones.
     * @example
     * // Delete one Integraciones
     * const Integraciones = await prisma.integraciones.delete({
     *   where: {
     *     // ... filter to delete one Integraciones
     *   }
     * })
     * 
     */
    delete<T extends IntegracionesDeleteArgs>(args: SelectSubset<T, IntegracionesDeleteArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integraciones.
     * @param {IntegracionesUpdateArgs} args - Arguments to update one Integraciones.
     * @example
     * // Update one Integraciones
     * const integraciones = await prisma.integraciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegracionesUpdateArgs>(args: SelectSubset<T, IntegracionesUpdateArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integraciones.
     * @param {IntegracionesDeleteManyArgs} args - Arguments to filter Integraciones to delete.
     * @example
     * // Delete a few Integraciones
     * const { count } = await prisma.integraciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegracionesDeleteManyArgs>(args?: SelectSubset<T, IntegracionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integraciones
     * const integraciones = await prisma.integraciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegracionesUpdateManyArgs>(args: SelectSubset<T, IntegracionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integraciones and returns the data updated in the database.
     * @param {IntegracionesUpdateManyAndReturnArgs} args - Arguments to update many Integraciones.
     * @example
     * // Update many Integraciones
     * const integraciones = await prisma.integraciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integraciones and only return the `id`
     * const integracionesWithIdOnly = await prisma.integraciones.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegracionesUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegracionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integraciones.
     * @param {IntegracionesUpsertArgs} args - Arguments to update or create a Integraciones.
     * @example
     * // Update or create a Integraciones
     * const integraciones = await prisma.integraciones.upsert({
     *   create: {
     *     // ... data to create a Integraciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integraciones we want to update
     *   }
     * })
     */
    upsert<T extends IntegracionesUpsertArgs>(args: SelectSubset<T, IntegracionesUpsertArgs<ExtArgs>>): Prisma__IntegracionesClient<$Result.GetResult<Prisma.$IntegracionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesCountArgs} args - Arguments to filter Integraciones to count.
     * @example
     * // Count the number of Integraciones
     * const count = await prisma.integraciones.count({
     *   where: {
     *     // ... the filter for the Integraciones we want to count
     *   }
     * })
    **/
    count<T extends IntegracionesCountArgs>(
      args?: Subset<T, IntegracionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegracionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegracionesAggregateArgs>(args: Subset<T, IntegracionesAggregateArgs>): Prisma.PrismaPromise<GetIntegracionesAggregateType<T>>

    /**
     * Group by Integraciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegracionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegracionesGroupByArgs['orderBy'] }
        : { orderBy?: IntegracionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegracionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegracionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integraciones model
   */
  readonly fields: IntegracionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integraciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegracionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Integraciones model
   */
  interface IntegracionesFieldRefs {
    readonly id: FieldRef<"Integraciones", 'String'>
    readonly cotizacionId: FieldRef<"Integraciones", 'String'>
    readonly sistemasExternos: FieldRef<"Integraciones", 'String'>
    readonly apisTerceros: FieldRef<"Integraciones", 'String'>
    readonly migracionDatos: FieldRef<"Integraciones", 'String'>
    readonly reportes: FieldRef<"Integraciones", 'String'>
    readonly createdAt: FieldRef<"Integraciones", 'DateTime'>
    readonly updatedAt: FieldRef<"Integraciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Integraciones findUnique
   */
  export type IntegracionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter, which Integraciones to fetch.
     */
    where: IntegracionesWhereUniqueInput
  }

  /**
   * Integraciones findUniqueOrThrow
   */
  export type IntegracionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter, which Integraciones to fetch.
     */
    where: IntegracionesWhereUniqueInput
  }

  /**
   * Integraciones findFirst
   */
  export type IntegracionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter, which Integraciones to fetch.
     */
    where?: IntegracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integraciones to fetch.
     */
    orderBy?: IntegracionesOrderByWithRelationInput | IntegracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integraciones.
     */
    cursor?: IntegracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integraciones.
     */
    distinct?: IntegracionesScalarFieldEnum | IntegracionesScalarFieldEnum[]
  }

  /**
   * Integraciones findFirstOrThrow
   */
  export type IntegracionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter, which Integraciones to fetch.
     */
    where?: IntegracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integraciones to fetch.
     */
    orderBy?: IntegracionesOrderByWithRelationInput | IntegracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integraciones.
     */
    cursor?: IntegracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integraciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integraciones.
     */
    distinct?: IntegracionesScalarFieldEnum | IntegracionesScalarFieldEnum[]
  }

  /**
   * Integraciones findMany
   */
  export type IntegracionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter, which Integraciones to fetch.
     */
    where?: IntegracionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integraciones to fetch.
     */
    orderBy?: IntegracionesOrderByWithRelationInput | IntegracionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integraciones.
     */
    cursor?: IntegracionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integraciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integraciones.
     */
    skip?: number
    distinct?: IntegracionesScalarFieldEnum | IntegracionesScalarFieldEnum[]
  }

  /**
   * Integraciones create
   */
  export type IntegracionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * The data needed to create a Integraciones.
     */
    data: XOR<IntegracionesCreateInput, IntegracionesUncheckedCreateInput>
  }

  /**
   * Integraciones createMany
   */
  export type IntegracionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integraciones.
     */
    data: IntegracionesCreateManyInput | IntegracionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integraciones createManyAndReturn
   */
  export type IntegracionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * The data used to create many Integraciones.
     */
    data: IntegracionesCreateManyInput | IntegracionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integraciones update
   */
  export type IntegracionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * The data needed to update a Integraciones.
     */
    data: XOR<IntegracionesUpdateInput, IntegracionesUncheckedUpdateInput>
    /**
     * Choose, which Integraciones to update.
     */
    where: IntegracionesWhereUniqueInput
  }

  /**
   * Integraciones updateMany
   */
  export type IntegracionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integraciones.
     */
    data: XOR<IntegracionesUpdateManyMutationInput, IntegracionesUncheckedUpdateManyInput>
    /**
     * Filter which Integraciones to update
     */
    where?: IntegracionesWhereInput
    /**
     * Limit how many Integraciones to update.
     */
    limit?: number
  }

  /**
   * Integraciones updateManyAndReturn
   */
  export type IntegracionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * The data used to update Integraciones.
     */
    data: XOR<IntegracionesUpdateManyMutationInput, IntegracionesUncheckedUpdateManyInput>
    /**
     * Filter which Integraciones to update
     */
    where?: IntegracionesWhereInput
    /**
     * Limit how many Integraciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integraciones upsert
   */
  export type IntegracionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * The filter to search for the Integraciones to update in case it exists.
     */
    where: IntegracionesWhereUniqueInput
    /**
     * In case the Integraciones found by the `where` argument doesn't exist, create a new Integraciones with this data.
     */
    create: XOR<IntegracionesCreateInput, IntegracionesUncheckedCreateInput>
    /**
     * In case the Integraciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegracionesUpdateInput, IntegracionesUncheckedUpdateInput>
  }

  /**
   * Integraciones delete
   */
  export type IntegracionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
    /**
     * Filter which Integraciones to delete.
     */
    where: IntegracionesWhereUniqueInput
  }

  /**
   * Integraciones deleteMany
   */
  export type IntegracionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integraciones to delete
     */
    where?: IntegracionesWhereInput
    /**
     * Limit how many Integraciones to delete.
     */
    limit?: number
  }

  /**
   * Integraciones without action
   */
  export type IntegracionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integraciones
     */
    select?: IntegracionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integraciones
     */
    omit?: IntegracionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegracionesInclude<ExtArgs> | null
  }


  /**
   * Model DisenoUX
   */

  export type AggregateDisenoUX = {
    _count: DisenoUXCountAggregateOutputType | null
    _min: DisenoUXMinAggregateOutputType | null
    _max: DisenoUXMaxAggregateOutputType | null
  }

  export type DisenoUXMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    tieneDisenoVisual: boolean | null
    disenoVisualUrl: string | null
    tieneGuiaEstilo: boolean | null
    guiaEstilo: string | null
    requiereDiseno: boolean | null
    entregables: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisenoUXMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    tieneDisenoVisual: boolean | null
    disenoVisualUrl: string | null
    tieneGuiaEstilo: boolean | null
    guiaEstilo: string | null
    requiereDiseno: boolean | null
    entregables: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisenoUXCountAggregateOutputType = {
    id: number
    cotizacionId: number
    tieneDisenoVisual: number
    disenoVisualUrl: number
    tieneGuiaEstilo: number
    guiaEstilo: number
    requiereDiseno: number
    entregables: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisenoUXMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    tieneDisenoVisual?: true
    disenoVisualUrl?: true
    tieneGuiaEstilo?: true
    guiaEstilo?: true
    requiereDiseno?: true
    entregables?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisenoUXMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    tieneDisenoVisual?: true
    disenoVisualUrl?: true
    tieneGuiaEstilo?: true
    guiaEstilo?: true
    requiereDiseno?: true
    entregables?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisenoUXCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    tieneDisenoVisual?: true
    disenoVisualUrl?: true
    tieneGuiaEstilo?: true
    guiaEstilo?: true
    requiereDiseno?: true
    entregables?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisenoUXAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisenoUX to aggregate.
     */
    where?: DisenoUXWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisenoUXES to fetch.
     */
    orderBy?: DisenoUXOrderByWithRelationInput | DisenoUXOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisenoUXWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisenoUXES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisenoUXES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DisenoUXES
    **/
    _count?: true | DisenoUXCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisenoUXMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisenoUXMaxAggregateInputType
  }

  export type GetDisenoUXAggregateType<T extends DisenoUXAggregateArgs> = {
        [P in keyof T & keyof AggregateDisenoUX]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisenoUX[P]>
      : GetScalarType<T[P], AggregateDisenoUX[P]>
  }




  export type DisenoUXGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisenoUXWhereInput
    orderBy?: DisenoUXOrderByWithAggregationInput | DisenoUXOrderByWithAggregationInput[]
    by: DisenoUXScalarFieldEnum[] | DisenoUXScalarFieldEnum
    having?: DisenoUXScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisenoUXCountAggregateInputType | true
    _min?: DisenoUXMinAggregateInputType
    _max?: DisenoUXMaxAggregateInputType
  }

  export type DisenoUXGroupByOutputType = {
    id: string
    cotizacionId: string
    tieneDisenoVisual: boolean
    disenoVisualUrl: string | null
    tieneGuiaEstilo: boolean
    guiaEstilo: string | null
    requiereDiseno: boolean
    entregables: string | null
    createdAt: Date
    updatedAt: Date
    _count: DisenoUXCountAggregateOutputType | null
    _min: DisenoUXMinAggregateOutputType | null
    _max: DisenoUXMaxAggregateOutputType | null
  }

  type GetDisenoUXGroupByPayload<T extends DisenoUXGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisenoUXGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisenoUXGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisenoUXGroupByOutputType[P]>
            : GetScalarType<T[P], DisenoUXGroupByOutputType[P]>
        }
      >
    >


  export type DisenoUXSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: boolean
    tieneGuiaEstilo?: boolean
    guiaEstilo?: boolean
    requiereDiseno?: boolean
    entregables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disenoUX"]>

  export type DisenoUXSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: boolean
    tieneGuiaEstilo?: boolean
    guiaEstilo?: boolean
    requiereDiseno?: boolean
    entregables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disenoUX"]>

  export type DisenoUXSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: boolean
    tieneGuiaEstilo?: boolean
    guiaEstilo?: boolean
    requiereDiseno?: boolean
    entregables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disenoUX"]>

  export type DisenoUXSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: boolean
    tieneGuiaEstilo?: boolean
    guiaEstilo?: boolean
    requiereDiseno?: boolean
    entregables?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisenoUXOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "tieneDisenoVisual" | "disenoVisualUrl" | "tieneGuiaEstilo" | "guiaEstilo" | "requiereDiseno" | "entregables" | "createdAt" | "updatedAt", ExtArgs["result"]["disenoUX"]>
  export type DisenoUXInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type DisenoUXIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type DisenoUXIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $DisenoUXPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DisenoUX"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      tieneDisenoVisual: boolean
      disenoVisualUrl: string | null
      tieneGuiaEstilo: boolean
      guiaEstilo: string | null
      requiereDiseno: boolean
      entregables: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["disenoUX"]>
    composites: {}
  }

  type DisenoUXGetPayload<S extends boolean | null | undefined | DisenoUXDefaultArgs> = $Result.GetResult<Prisma.$DisenoUXPayload, S>

  type DisenoUXCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisenoUXFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisenoUXCountAggregateInputType | true
    }

  export interface DisenoUXDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DisenoUX'], meta: { name: 'DisenoUX' } }
    /**
     * Find zero or one DisenoUX that matches the filter.
     * @param {DisenoUXFindUniqueArgs} args - Arguments to find a DisenoUX
     * @example
     * // Get one DisenoUX
     * const disenoUX = await prisma.disenoUX.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisenoUXFindUniqueArgs>(args: SelectSubset<T, DisenoUXFindUniqueArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DisenoUX that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisenoUXFindUniqueOrThrowArgs} args - Arguments to find a DisenoUX
     * @example
     * // Get one DisenoUX
     * const disenoUX = await prisma.disenoUX.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisenoUXFindUniqueOrThrowArgs>(args: SelectSubset<T, DisenoUXFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisenoUX that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXFindFirstArgs} args - Arguments to find a DisenoUX
     * @example
     * // Get one DisenoUX
     * const disenoUX = await prisma.disenoUX.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisenoUXFindFirstArgs>(args?: SelectSubset<T, DisenoUXFindFirstArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DisenoUX that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXFindFirstOrThrowArgs} args - Arguments to find a DisenoUX
     * @example
     * // Get one DisenoUX
     * const disenoUX = await prisma.disenoUX.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisenoUXFindFirstOrThrowArgs>(args?: SelectSubset<T, DisenoUXFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DisenoUXES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DisenoUXES
     * const disenoUXES = await prisma.disenoUX.findMany()
     * 
     * // Get first 10 DisenoUXES
     * const disenoUXES = await prisma.disenoUX.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disenoUXWithIdOnly = await prisma.disenoUX.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisenoUXFindManyArgs>(args?: SelectSubset<T, DisenoUXFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DisenoUX.
     * @param {DisenoUXCreateArgs} args - Arguments to create a DisenoUX.
     * @example
     * // Create one DisenoUX
     * const DisenoUX = await prisma.disenoUX.create({
     *   data: {
     *     // ... data to create a DisenoUX
     *   }
     * })
     * 
     */
    create<T extends DisenoUXCreateArgs>(args: SelectSubset<T, DisenoUXCreateArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DisenoUXES.
     * @param {DisenoUXCreateManyArgs} args - Arguments to create many DisenoUXES.
     * @example
     * // Create many DisenoUXES
     * const disenoUX = await prisma.disenoUX.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisenoUXCreateManyArgs>(args?: SelectSubset<T, DisenoUXCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DisenoUXES and returns the data saved in the database.
     * @param {DisenoUXCreateManyAndReturnArgs} args - Arguments to create many DisenoUXES.
     * @example
     * // Create many DisenoUXES
     * const disenoUX = await prisma.disenoUX.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DisenoUXES and only return the `id`
     * const disenoUXWithIdOnly = await prisma.disenoUX.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisenoUXCreateManyAndReturnArgs>(args?: SelectSubset<T, DisenoUXCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DisenoUX.
     * @param {DisenoUXDeleteArgs} args - Arguments to delete one DisenoUX.
     * @example
     * // Delete one DisenoUX
     * const DisenoUX = await prisma.disenoUX.delete({
     *   where: {
     *     // ... filter to delete one DisenoUX
     *   }
     * })
     * 
     */
    delete<T extends DisenoUXDeleteArgs>(args: SelectSubset<T, DisenoUXDeleteArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DisenoUX.
     * @param {DisenoUXUpdateArgs} args - Arguments to update one DisenoUX.
     * @example
     * // Update one DisenoUX
     * const disenoUX = await prisma.disenoUX.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisenoUXUpdateArgs>(args: SelectSubset<T, DisenoUXUpdateArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DisenoUXES.
     * @param {DisenoUXDeleteManyArgs} args - Arguments to filter DisenoUXES to delete.
     * @example
     * // Delete a few DisenoUXES
     * const { count } = await prisma.disenoUX.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisenoUXDeleteManyArgs>(args?: SelectSubset<T, DisenoUXDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisenoUXES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DisenoUXES
     * const disenoUX = await prisma.disenoUX.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisenoUXUpdateManyArgs>(args: SelectSubset<T, DisenoUXUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DisenoUXES and returns the data updated in the database.
     * @param {DisenoUXUpdateManyAndReturnArgs} args - Arguments to update many DisenoUXES.
     * @example
     * // Update many DisenoUXES
     * const disenoUX = await prisma.disenoUX.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DisenoUXES and only return the `id`
     * const disenoUXWithIdOnly = await prisma.disenoUX.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisenoUXUpdateManyAndReturnArgs>(args: SelectSubset<T, DisenoUXUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DisenoUX.
     * @param {DisenoUXUpsertArgs} args - Arguments to update or create a DisenoUX.
     * @example
     * // Update or create a DisenoUX
     * const disenoUX = await prisma.disenoUX.upsert({
     *   create: {
     *     // ... data to create a DisenoUX
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DisenoUX we want to update
     *   }
     * })
     */
    upsert<T extends DisenoUXUpsertArgs>(args: SelectSubset<T, DisenoUXUpsertArgs<ExtArgs>>): Prisma__DisenoUXClient<$Result.GetResult<Prisma.$DisenoUXPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DisenoUXES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXCountArgs} args - Arguments to filter DisenoUXES to count.
     * @example
     * // Count the number of DisenoUXES
     * const count = await prisma.disenoUX.count({
     *   where: {
     *     // ... the filter for the DisenoUXES we want to count
     *   }
     * })
    **/
    count<T extends DisenoUXCountArgs>(
      args?: Subset<T, DisenoUXCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisenoUXCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DisenoUX.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisenoUXAggregateArgs>(args: Subset<T, DisenoUXAggregateArgs>): Prisma.PrismaPromise<GetDisenoUXAggregateType<T>>

    /**
     * Group by DisenoUX.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisenoUXGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisenoUXGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisenoUXGroupByArgs['orderBy'] }
        : { orderBy?: DisenoUXGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisenoUXGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisenoUXGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DisenoUX model
   */
  readonly fields: DisenoUXFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DisenoUX.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisenoUXClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DisenoUX model
   */
  interface DisenoUXFieldRefs {
    readonly id: FieldRef<"DisenoUX", 'String'>
    readonly cotizacionId: FieldRef<"DisenoUX", 'String'>
    readonly tieneDisenoVisual: FieldRef<"DisenoUX", 'Boolean'>
    readonly disenoVisualUrl: FieldRef<"DisenoUX", 'String'>
    readonly tieneGuiaEstilo: FieldRef<"DisenoUX", 'Boolean'>
    readonly guiaEstilo: FieldRef<"DisenoUX", 'String'>
    readonly requiereDiseno: FieldRef<"DisenoUX", 'Boolean'>
    readonly entregables: FieldRef<"DisenoUX", 'String'>
    readonly createdAt: FieldRef<"DisenoUX", 'DateTime'>
    readonly updatedAt: FieldRef<"DisenoUX", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DisenoUX findUnique
   */
  export type DisenoUXFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter, which DisenoUX to fetch.
     */
    where: DisenoUXWhereUniqueInput
  }

  /**
   * DisenoUX findUniqueOrThrow
   */
  export type DisenoUXFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter, which DisenoUX to fetch.
     */
    where: DisenoUXWhereUniqueInput
  }

  /**
   * DisenoUX findFirst
   */
  export type DisenoUXFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter, which DisenoUX to fetch.
     */
    where?: DisenoUXWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisenoUXES to fetch.
     */
    orderBy?: DisenoUXOrderByWithRelationInput | DisenoUXOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisenoUXES.
     */
    cursor?: DisenoUXWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisenoUXES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisenoUXES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisenoUXES.
     */
    distinct?: DisenoUXScalarFieldEnum | DisenoUXScalarFieldEnum[]
  }

  /**
   * DisenoUX findFirstOrThrow
   */
  export type DisenoUXFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter, which DisenoUX to fetch.
     */
    where?: DisenoUXWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisenoUXES to fetch.
     */
    orderBy?: DisenoUXOrderByWithRelationInput | DisenoUXOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DisenoUXES.
     */
    cursor?: DisenoUXWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisenoUXES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisenoUXES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DisenoUXES.
     */
    distinct?: DisenoUXScalarFieldEnum | DisenoUXScalarFieldEnum[]
  }

  /**
   * DisenoUX findMany
   */
  export type DisenoUXFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter, which DisenoUXES to fetch.
     */
    where?: DisenoUXWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DisenoUXES to fetch.
     */
    orderBy?: DisenoUXOrderByWithRelationInput | DisenoUXOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DisenoUXES.
     */
    cursor?: DisenoUXWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DisenoUXES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DisenoUXES.
     */
    skip?: number
    distinct?: DisenoUXScalarFieldEnum | DisenoUXScalarFieldEnum[]
  }

  /**
   * DisenoUX create
   */
  export type DisenoUXCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * The data needed to create a DisenoUX.
     */
    data: XOR<DisenoUXCreateInput, DisenoUXUncheckedCreateInput>
  }

  /**
   * DisenoUX createMany
   */
  export type DisenoUXCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DisenoUXES.
     */
    data: DisenoUXCreateManyInput | DisenoUXCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DisenoUX createManyAndReturn
   */
  export type DisenoUXCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * The data used to create many DisenoUXES.
     */
    data: DisenoUXCreateManyInput | DisenoUXCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisenoUX update
   */
  export type DisenoUXUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * The data needed to update a DisenoUX.
     */
    data: XOR<DisenoUXUpdateInput, DisenoUXUncheckedUpdateInput>
    /**
     * Choose, which DisenoUX to update.
     */
    where: DisenoUXWhereUniqueInput
  }

  /**
   * DisenoUX updateMany
   */
  export type DisenoUXUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DisenoUXES.
     */
    data: XOR<DisenoUXUpdateManyMutationInput, DisenoUXUncheckedUpdateManyInput>
    /**
     * Filter which DisenoUXES to update
     */
    where?: DisenoUXWhereInput
    /**
     * Limit how many DisenoUXES to update.
     */
    limit?: number
  }

  /**
   * DisenoUX updateManyAndReturn
   */
  export type DisenoUXUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * The data used to update DisenoUXES.
     */
    data: XOR<DisenoUXUpdateManyMutationInput, DisenoUXUncheckedUpdateManyInput>
    /**
     * Filter which DisenoUXES to update
     */
    where?: DisenoUXWhereInput
    /**
     * Limit how many DisenoUXES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DisenoUX upsert
   */
  export type DisenoUXUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * The filter to search for the DisenoUX to update in case it exists.
     */
    where: DisenoUXWhereUniqueInput
    /**
     * In case the DisenoUX found by the `where` argument doesn't exist, create a new DisenoUX with this data.
     */
    create: XOR<DisenoUXCreateInput, DisenoUXUncheckedCreateInput>
    /**
     * In case the DisenoUX was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisenoUXUpdateInput, DisenoUXUncheckedUpdateInput>
  }

  /**
   * DisenoUX delete
   */
  export type DisenoUXDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
    /**
     * Filter which DisenoUX to delete.
     */
    where: DisenoUXWhereUniqueInput
  }

  /**
   * DisenoUX deleteMany
   */
  export type DisenoUXDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DisenoUXES to delete
     */
    where?: DisenoUXWhereInput
    /**
     * Limit how many DisenoUXES to delete.
     */
    limit?: number
  }

  /**
   * DisenoUX without action
   */
  export type DisenoUXDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisenoUX
     */
    select?: DisenoUXSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DisenoUX
     */
    omit?: DisenoUXOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisenoUXInclude<ExtArgs> | null
  }


  /**
   * Model PresupuestoTiempos
   */

  export type AggregatePresupuestoTiempos = {
    _count: PresupuestoTiemposCountAggregateOutputType | null
    _avg: PresupuestoTiemposAvgAggregateOutputType | null
    _sum: PresupuestoTiemposSumAggregateOutputType | null
    _min: PresupuestoTiemposMinAggregateOutputType | null
    _max: PresupuestoTiemposMaxAggregateOutputType | null
  }

  export type PresupuestoTiemposAvgAggregateOutputType = {
    presupuestoMin: Decimal | null
    presupuestoMax: Decimal | null
  }

  export type PresupuestoTiemposSumAggregateOutputType = {
    presupuestoMin: Decimal | null
    presupuestoMax: Decimal | null
  }

  export type PresupuestoTiemposMinAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    tienePresupuesto: boolean | null
    presupuestoMin: Decimal | null
    presupuestoMax: Decimal | null
    moneda: $Enums.TipoMoneda | null
    tieneFechaLimite: boolean | null
    fechaLimite: Date | null
    razonFechaLimite: string | null
    planMantenimiento: string | null
    nombreDecidor: string | null
    cargoDecidor: string | null
    contactoDecidor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresupuestoTiemposMaxAggregateOutputType = {
    id: string | null
    cotizacionId: string | null
    tienePresupuesto: boolean | null
    presupuestoMin: Decimal | null
    presupuestoMax: Decimal | null
    moneda: $Enums.TipoMoneda | null
    tieneFechaLimite: boolean | null
    fechaLimite: Date | null
    razonFechaLimite: string | null
    planMantenimiento: string | null
    nombreDecidor: string | null
    cargoDecidor: string | null
    contactoDecidor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresupuestoTiemposCountAggregateOutputType = {
    id: number
    cotizacionId: number
    tienePresupuesto: number
    presupuestoMin: number
    presupuestoMax: number
    moneda: number
    tieneFechaLimite: number
    fechaLimite: number
    razonFechaLimite: number
    planMantenimiento: number
    nombreDecidor: number
    cargoDecidor: number
    contactoDecidor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresupuestoTiemposAvgAggregateInputType = {
    presupuestoMin?: true
    presupuestoMax?: true
  }

  export type PresupuestoTiemposSumAggregateInputType = {
    presupuestoMin?: true
    presupuestoMax?: true
  }

  export type PresupuestoTiemposMinAggregateInputType = {
    id?: true
    cotizacionId?: true
    tienePresupuesto?: true
    presupuestoMin?: true
    presupuestoMax?: true
    moneda?: true
    tieneFechaLimite?: true
    fechaLimite?: true
    razonFechaLimite?: true
    planMantenimiento?: true
    nombreDecidor?: true
    cargoDecidor?: true
    contactoDecidor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresupuestoTiemposMaxAggregateInputType = {
    id?: true
    cotizacionId?: true
    tienePresupuesto?: true
    presupuestoMin?: true
    presupuestoMax?: true
    moneda?: true
    tieneFechaLimite?: true
    fechaLimite?: true
    razonFechaLimite?: true
    planMantenimiento?: true
    nombreDecidor?: true
    cargoDecidor?: true
    contactoDecidor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresupuestoTiemposCountAggregateInputType = {
    id?: true
    cotizacionId?: true
    tienePresupuesto?: true
    presupuestoMin?: true
    presupuestoMax?: true
    moneda?: true
    tieneFechaLimite?: true
    fechaLimite?: true
    razonFechaLimite?: true
    planMantenimiento?: true
    nombreDecidor?: true
    cargoDecidor?: true
    contactoDecidor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresupuestoTiemposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresupuestoTiempos to aggregate.
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresupuestoTiempos to fetch.
     */
    orderBy?: PresupuestoTiemposOrderByWithRelationInput | PresupuestoTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresupuestoTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresupuestoTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresupuestoTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresupuestoTiempos
    **/
    _count?: true | PresupuestoTiemposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresupuestoTiemposAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresupuestoTiemposSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresupuestoTiemposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresupuestoTiemposMaxAggregateInputType
  }

  export type GetPresupuestoTiemposAggregateType<T extends PresupuestoTiemposAggregateArgs> = {
        [P in keyof T & keyof AggregatePresupuestoTiempos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresupuestoTiempos[P]>
      : GetScalarType<T[P], AggregatePresupuestoTiempos[P]>
  }




  export type PresupuestoTiemposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresupuestoTiemposWhereInput
    orderBy?: PresupuestoTiemposOrderByWithAggregationInput | PresupuestoTiemposOrderByWithAggregationInput[]
    by: PresupuestoTiemposScalarFieldEnum[] | PresupuestoTiemposScalarFieldEnum
    having?: PresupuestoTiemposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresupuestoTiemposCountAggregateInputType | true
    _avg?: PresupuestoTiemposAvgAggregateInputType
    _sum?: PresupuestoTiemposSumAggregateInputType
    _min?: PresupuestoTiemposMinAggregateInputType
    _max?: PresupuestoTiemposMaxAggregateInputType
  }

  export type PresupuestoTiemposGroupByOutputType = {
    id: string
    cotizacionId: string
    tienePresupuesto: boolean
    presupuestoMin: Decimal | null
    presupuestoMax: Decimal | null
    moneda: $Enums.TipoMoneda | null
    tieneFechaLimite: boolean
    fechaLimite: Date | null
    razonFechaLimite: string | null
    planMantenimiento: string | null
    nombreDecidor: string | null
    cargoDecidor: string | null
    contactoDecidor: string | null
    createdAt: Date
    updatedAt: Date
    _count: PresupuestoTiemposCountAggregateOutputType | null
    _avg: PresupuestoTiemposAvgAggregateOutputType | null
    _sum: PresupuestoTiemposSumAggregateOutputType | null
    _min: PresupuestoTiemposMinAggregateOutputType | null
    _max: PresupuestoTiemposMaxAggregateOutputType | null
  }

  type GetPresupuestoTiemposGroupByPayload<T extends PresupuestoTiemposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresupuestoTiemposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresupuestoTiemposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresupuestoTiemposGroupByOutputType[P]>
            : GetScalarType<T[P], PresupuestoTiemposGroupByOutputType[P]>
        }
      >
    >


  export type PresupuestoTiemposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tienePresupuesto?: boolean
    presupuestoMin?: boolean
    presupuestoMax?: boolean
    moneda?: boolean
    tieneFechaLimite?: boolean
    fechaLimite?: boolean
    razonFechaLimite?: boolean
    planMantenimiento?: boolean
    nombreDecidor?: boolean
    cargoDecidor?: boolean
    contactoDecidor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presupuestoTiempos"]>

  export type PresupuestoTiemposSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tienePresupuesto?: boolean
    presupuestoMin?: boolean
    presupuestoMax?: boolean
    moneda?: boolean
    tieneFechaLimite?: boolean
    fechaLimite?: boolean
    razonFechaLimite?: boolean
    planMantenimiento?: boolean
    nombreDecidor?: boolean
    cargoDecidor?: boolean
    contactoDecidor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presupuestoTiempos"]>

  export type PresupuestoTiemposSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cotizacionId?: boolean
    tienePresupuesto?: boolean
    presupuestoMin?: boolean
    presupuestoMax?: boolean
    moneda?: boolean
    tieneFechaLimite?: boolean
    fechaLimite?: boolean
    razonFechaLimite?: boolean
    planMantenimiento?: boolean
    nombreDecidor?: boolean
    cargoDecidor?: boolean
    contactoDecidor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["presupuestoTiempos"]>

  export type PresupuestoTiemposSelectScalar = {
    id?: boolean
    cotizacionId?: boolean
    tienePresupuesto?: boolean
    presupuestoMin?: boolean
    presupuestoMax?: boolean
    moneda?: boolean
    tieneFechaLimite?: boolean
    fechaLimite?: boolean
    razonFechaLimite?: boolean
    planMantenimiento?: boolean
    nombreDecidor?: boolean
    cargoDecidor?: boolean
    contactoDecidor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PresupuestoTiemposOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cotizacionId" | "tienePresupuesto" | "presupuestoMin" | "presupuestoMax" | "moneda" | "tieneFechaLimite" | "fechaLimite" | "razonFechaLimite" | "planMantenimiento" | "nombreDecidor" | "cargoDecidor" | "contactoDecidor" | "createdAt" | "updatedAt", ExtArgs["result"]["presupuestoTiempos"]>
  export type PresupuestoTiemposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type PresupuestoTiemposIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }
  export type PresupuestoTiemposIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cotizacion?: boolean | CotizacionDefaultArgs<ExtArgs>
  }

  export type $PresupuestoTiemposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PresupuestoTiempos"
    objects: {
      cotizacion: Prisma.$CotizacionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cotizacionId: string
      tienePresupuesto: boolean
      presupuestoMin: Prisma.Decimal | null
      presupuestoMax: Prisma.Decimal | null
      moneda: $Enums.TipoMoneda | null
      tieneFechaLimite: boolean
      fechaLimite: Date | null
      razonFechaLimite: string | null
      planMantenimiento: string | null
      nombreDecidor: string | null
      cargoDecidor: string | null
      contactoDecidor: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["presupuestoTiempos"]>
    composites: {}
  }

  type PresupuestoTiemposGetPayload<S extends boolean | null | undefined | PresupuestoTiemposDefaultArgs> = $Result.GetResult<Prisma.$PresupuestoTiemposPayload, S>

  type PresupuestoTiemposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresupuestoTiemposFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresupuestoTiemposCountAggregateInputType | true
    }

  export interface PresupuestoTiemposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PresupuestoTiempos'], meta: { name: 'PresupuestoTiempos' } }
    /**
     * Find zero or one PresupuestoTiempos that matches the filter.
     * @param {PresupuestoTiemposFindUniqueArgs} args - Arguments to find a PresupuestoTiempos
     * @example
     * // Get one PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresupuestoTiemposFindUniqueArgs>(args: SelectSubset<T, PresupuestoTiemposFindUniqueArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PresupuestoTiempos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresupuestoTiemposFindUniqueOrThrowArgs} args - Arguments to find a PresupuestoTiempos
     * @example
     * // Get one PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresupuestoTiemposFindUniqueOrThrowArgs>(args: SelectSubset<T, PresupuestoTiemposFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresupuestoTiempos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposFindFirstArgs} args - Arguments to find a PresupuestoTiempos
     * @example
     * // Get one PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresupuestoTiemposFindFirstArgs>(args?: SelectSubset<T, PresupuestoTiemposFindFirstArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresupuestoTiempos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposFindFirstOrThrowArgs} args - Arguments to find a PresupuestoTiempos
     * @example
     * // Get one PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresupuestoTiemposFindFirstOrThrowArgs>(args?: SelectSubset<T, PresupuestoTiemposFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PresupuestoTiempos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findMany()
     * 
     * // Get first 10 PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presupuestoTiemposWithIdOnly = await prisma.presupuestoTiempos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresupuestoTiemposFindManyArgs>(args?: SelectSubset<T, PresupuestoTiemposFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PresupuestoTiempos.
     * @param {PresupuestoTiemposCreateArgs} args - Arguments to create a PresupuestoTiempos.
     * @example
     * // Create one PresupuestoTiempos
     * const PresupuestoTiempos = await prisma.presupuestoTiempos.create({
     *   data: {
     *     // ... data to create a PresupuestoTiempos
     *   }
     * })
     * 
     */
    create<T extends PresupuestoTiemposCreateArgs>(args: SelectSubset<T, PresupuestoTiemposCreateArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PresupuestoTiempos.
     * @param {PresupuestoTiemposCreateManyArgs} args - Arguments to create many PresupuestoTiempos.
     * @example
     * // Create many PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresupuestoTiemposCreateManyArgs>(args?: SelectSubset<T, PresupuestoTiemposCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PresupuestoTiempos and returns the data saved in the database.
     * @param {PresupuestoTiemposCreateManyAndReturnArgs} args - Arguments to create many PresupuestoTiempos.
     * @example
     * // Create many PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PresupuestoTiempos and only return the `id`
     * const presupuestoTiemposWithIdOnly = await prisma.presupuestoTiempos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresupuestoTiemposCreateManyAndReturnArgs>(args?: SelectSubset<T, PresupuestoTiemposCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PresupuestoTiempos.
     * @param {PresupuestoTiemposDeleteArgs} args - Arguments to delete one PresupuestoTiempos.
     * @example
     * // Delete one PresupuestoTiempos
     * const PresupuestoTiempos = await prisma.presupuestoTiempos.delete({
     *   where: {
     *     // ... filter to delete one PresupuestoTiempos
     *   }
     * })
     * 
     */
    delete<T extends PresupuestoTiemposDeleteArgs>(args: SelectSubset<T, PresupuestoTiemposDeleteArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PresupuestoTiempos.
     * @param {PresupuestoTiemposUpdateArgs} args - Arguments to update one PresupuestoTiempos.
     * @example
     * // Update one PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresupuestoTiemposUpdateArgs>(args: SelectSubset<T, PresupuestoTiemposUpdateArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PresupuestoTiempos.
     * @param {PresupuestoTiemposDeleteManyArgs} args - Arguments to filter PresupuestoTiempos to delete.
     * @example
     * // Delete a few PresupuestoTiempos
     * const { count } = await prisma.presupuestoTiempos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresupuestoTiemposDeleteManyArgs>(args?: SelectSubset<T, PresupuestoTiemposDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresupuestoTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresupuestoTiemposUpdateManyArgs>(args: SelectSubset<T, PresupuestoTiemposUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresupuestoTiempos and returns the data updated in the database.
     * @param {PresupuestoTiemposUpdateManyAndReturnArgs} args - Arguments to update many PresupuestoTiempos.
     * @example
     * // Update many PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PresupuestoTiempos and only return the `id`
     * const presupuestoTiemposWithIdOnly = await prisma.presupuestoTiempos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PresupuestoTiemposUpdateManyAndReturnArgs>(args: SelectSubset<T, PresupuestoTiemposUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PresupuestoTiempos.
     * @param {PresupuestoTiemposUpsertArgs} args - Arguments to update or create a PresupuestoTiempos.
     * @example
     * // Update or create a PresupuestoTiempos
     * const presupuestoTiempos = await prisma.presupuestoTiempos.upsert({
     *   create: {
     *     // ... data to create a PresupuestoTiempos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresupuestoTiempos we want to update
     *   }
     * })
     */
    upsert<T extends PresupuestoTiemposUpsertArgs>(args: SelectSubset<T, PresupuestoTiemposUpsertArgs<ExtArgs>>): Prisma__PresupuestoTiemposClient<$Result.GetResult<Prisma.$PresupuestoTiemposPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PresupuestoTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposCountArgs} args - Arguments to filter PresupuestoTiempos to count.
     * @example
     * // Count the number of PresupuestoTiempos
     * const count = await prisma.presupuestoTiempos.count({
     *   where: {
     *     // ... the filter for the PresupuestoTiempos we want to count
     *   }
     * })
    **/
    count<T extends PresupuestoTiemposCountArgs>(
      args?: Subset<T, PresupuestoTiemposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresupuestoTiemposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresupuestoTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PresupuestoTiemposAggregateArgs>(args: Subset<T, PresupuestoTiemposAggregateArgs>): Prisma.PrismaPromise<GetPresupuestoTiemposAggregateType<T>>

    /**
     * Group by PresupuestoTiempos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresupuestoTiemposGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PresupuestoTiemposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresupuestoTiemposGroupByArgs['orderBy'] }
        : { orderBy?: PresupuestoTiemposGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PresupuestoTiemposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresupuestoTiemposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PresupuestoTiempos model
   */
  readonly fields: PresupuestoTiemposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresupuestoTiempos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresupuestoTiemposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cotizacion<T extends CotizacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CotizacionDefaultArgs<ExtArgs>>): Prisma__CotizacionClient<$Result.GetResult<Prisma.$CotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PresupuestoTiempos model
   */
  interface PresupuestoTiemposFieldRefs {
    readonly id: FieldRef<"PresupuestoTiempos", 'String'>
    readonly cotizacionId: FieldRef<"PresupuestoTiempos", 'String'>
    readonly tienePresupuesto: FieldRef<"PresupuestoTiempos", 'Boolean'>
    readonly presupuestoMin: FieldRef<"PresupuestoTiempos", 'Decimal'>
    readonly presupuestoMax: FieldRef<"PresupuestoTiempos", 'Decimal'>
    readonly moneda: FieldRef<"PresupuestoTiempos", 'TipoMoneda'>
    readonly tieneFechaLimite: FieldRef<"PresupuestoTiempos", 'Boolean'>
    readonly fechaLimite: FieldRef<"PresupuestoTiempos", 'DateTime'>
    readonly razonFechaLimite: FieldRef<"PresupuestoTiempos", 'String'>
    readonly planMantenimiento: FieldRef<"PresupuestoTiempos", 'String'>
    readonly nombreDecidor: FieldRef<"PresupuestoTiempos", 'String'>
    readonly cargoDecidor: FieldRef<"PresupuestoTiempos", 'String'>
    readonly contactoDecidor: FieldRef<"PresupuestoTiempos", 'String'>
    readonly createdAt: FieldRef<"PresupuestoTiempos", 'DateTime'>
    readonly updatedAt: FieldRef<"PresupuestoTiempos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PresupuestoTiempos findUnique
   */
  export type PresupuestoTiemposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter, which PresupuestoTiempos to fetch.
     */
    where: PresupuestoTiemposWhereUniqueInput
  }

  /**
   * PresupuestoTiempos findUniqueOrThrow
   */
  export type PresupuestoTiemposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter, which PresupuestoTiempos to fetch.
     */
    where: PresupuestoTiemposWhereUniqueInput
  }

  /**
   * PresupuestoTiempos findFirst
   */
  export type PresupuestoTiemposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter, which PresupuestoTiempos to fetch.
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresupuestoTiempos to fetch.
     */
    orderBy?: PresupuestoTiemposOrderByWithRelationInput | PresupuestoTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresupuestoTiempos.
     */
    cursor?: PresupuestoTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresupuestoTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresupuestoTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresupuestoTiempos.
     */
    distinct?: PresupuestoTiemposScalarFieldEnum | PresupuestoTiemposScalarFieldEnum[]
  }

  /**
   * PresupuestoTiempos findFirstOrThrow
   */
  export type PresupuestoTiemposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter, which PresupuestoTiempos to fetch.
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresupuestoTiempos to fetch.
     */
    orderBy?: PresupuestoTiemposOrderByWithRelationInput | PresupuestoTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresupuestoTiempos.
     */
    cursor?: PresupuestoTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresupuestoTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresupuestoTiempos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresupuestoTiempos.
     */
    distinct?: PresupuestoTiemposScalarFieldEnum | PresupuestoTiemposScalarFieldEnum[]
  }

  /**
   * PresupuestoTiempos findMany
   */
  export type PresupuestoTiemposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter, which PresupuestoTiempos to fetch.
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresupuestoTiempos to fetch.
     */
    orderBy?: PresupuestoTiemposOrderByWithRelationInput | PresupuestoTiemposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresupuestoTiempos.
     */
    cursor?: PresupuestoTiemposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresupuestoTiempos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresupuestoTiempos.
     */
    skip?: number
    distinct?: PresupuestoTiemposScalarFieldEnum | PresupuestoTiemposScalarFieldEnum[]
  }

  /**
   * PresupuestoTiempos create
   */
  export type PresupuestoTiemposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * The data needed to create a PresupuestoTiempos.
     */
    data: XOR<PresupuestoTiemposCreateInput, PresupuestoTiemposUncheckedCreateInput>
  }

  /**
   * PresupuestoTiempos createMany
   */
  export type PresupuestoTiemposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PresupuestoTiempos.
     */
    data: PresupuestoTiemposCreateManyInput | PresupuestoTiemposCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PresupuestoTiempos createManyAndReturn
   */
  export type PresupuestoTiemposCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * The data used to create many PresupuestoTiempos.
     */
    data: PresupuestoTiemposCreateManyInput | PresupuestoTiemposCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PresupuestoTiempos update
   */
  export type PresupuestoTiemposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * The data needed to update a PresupuestoTiempos.
     */
    data: XOR<PresupuestoTiemposUpdateInput, PresupuestoTiemposUncheckedUpdateInput>
    /**
     * Choose, which PresupuestoTiempos to update.
     */
    where: PresupuestoTiemposWhereUniqueInput
  }

  /**
   * PresupuestoTiempos updateMany
   */
  export type PresupuestoTiemposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PresupuestoTiempos.
     */
    data: XOR<PresupuestoTiemposUpdateManyMutationInput, PresupuestoTiemposUncheckedUpdateManyInput>
    /**
     * Filter which PresupuestoTiempos to update
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * Limit how many PresupuestoTiempos to update.
     */
    limit?: number
  }

  /**
   * PresupuestoTiempos updateManyAndReturn
   */
  export type PresupuestoTiemposUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * The data used to update PresupuestoTiempos.
     */
    data: XOR<PresupuestoTiemposUpdateManyMutationInput, PresupuestoTiemposUncheckedUpdateManyInput>
    /**
     * Filter which PresupuestoTiempos to update
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * Limit how many PresupuestoTiempos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PresupuestoTiempos upsert
   */
  export type PresupuestoTiemposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * The filter to search for the PresupuestoTiempos to update in case it exists.
     */
    where: PresupuestoTiemposWhereUniqueInput
    /**
     * In case the PresupuestoTiempos found by the `where` argument doesn't exist, create a new PresupuestoTiempos with this data.
     */
    create: XOR<PresupuestoTiemposCreateInput, PresupuestoTiemposUncheckedCreateInput>
    /**
     * In case the PresupuestoTiempos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresupuestoTiemposUpdateInput, PresupuestoTiemposUncheckedUpdateInput>
  }

  /**
   * PresupuestoTiempos delete
   */
  export type PresupuestoTiemposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
    /**
     * Filter which PresupuestoTiempos to delete.
     */
    where: PresupuestoTiemposWhereUniqueInput
  }

  /**
   * PresupuestoTiempos deleteMany
   */
  export type PresupuestoTiemposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresupuestoTiempos to delete
     */
    where?: PresupuestoTiemposWhereInput
    /**
     * Limit how many PresupuestoTiempos to delete.
     */
    limit?: number
  }

  /**
   * PresupuestoTiempos without action
   */
  export type PresupuestoTiemposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresupuestoTiempos
     */
    select?: PresupuestoTiemposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresupuestoTiempos
     */
    omit?: PresupuestoTiemposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresupuestoTiemposInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CotizacionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nombreCliente: 'nombreCliente',
    emailCliente: 'emailCliente',
    empresaCliente: 'empresaCliente',
    telefonoCliente: 'telefonoCliente',
    estado: 'estado',
    notasInternas: 'notasInternas'
  };

  export type CotizacionScalarFieldEnum = (typeof CotizacionScalarFieldEnum)[keyof typeof CotizacionScalarFieldEnum]


  export const ObjetivosVisionScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    problemaPrincipal: 'problemaPrincipal',
    objetivoPrincipal: 'objetivoPrincipal',
    procesoActual: 'procesoActual',
    competenciaReferencia: 'competenciaReferencia',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObjetivosVisionScalarFieldEnum = (typeof ObjetivosVisionScalarFieldEnum)[keyof typeof ObjetivosVisionScalarFieldEnum]


  export const UsuariosRolesScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    usuariosFinales: 'usuariosFinales',
    tiposRoles: 'tiposRoles',
    descripcionRoles: 'descripcionRoles',
    cantidadUsuarios: 'cantidadUsuarios',
    escalaUsuarios: 'escalaUsuarios',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuariosRolesScalarFieldEnum = (typeof UsuariosRolesScalarFieldEnum)[keyof typeof UsuariosRolesScalarFieldEnum]


  export const AlcanceFuncionalidadesScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    funcionalidadesClave: 'funcionalidadesClave',
    flujosPrincipales: 'flujosPrincipales',
    funcionalidadesFase1: 'funcionalidadesFase1',
    funcionalidadesFase2: 'funcionalidadesFase2',
    fueraDeAlcance: 'fueraDeAlcance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlcanceFuncionalidadesScalarFieldEnum = (typeof AlcanceFuncionalidadesScalarFieldEnum)[keyof typeof AlcanceFuncionalidadesScalarFieldEnum]


  export const RequerimientosTecnicosScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    plataformas: 'plataformas',
    detallesPlataforma: 'detallesPlataforma',
    hosting: 'hosting',
    tecnologias: 'tecnologias',
    requisitoRendimiento: 'requisitoRendimiento',
    requisitoSeguridad: 'requisitoSeguridad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RequerimientosTecnicosScalarFieldEnum = (typeof RequerimientosTecnicosScalarFieldEnum)[keyof typeof RequerimientosTecnicosScalarFieldEnum]


  export const IntegracionesScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    sistemasExternos: 'sistemasExternos',
    apisTerceros: 'apisTerceros',
    migracionDatos: 'migracionDatos',
    reportes: 'reportes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegracionesScalarFieldEnum = (typeof IntegracionesScalarFieldEnum)[keyof typeof IntegracionesScalarFieldEnum]


  export const DisenoUXScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    tieneDisenoVisual: 'tieneDisenoVisual',
    disenoVisualUrl: 'disenoVisualUrl',
    tieneGuiaEstilo: 'tieneGuiaEstilo',
    guiaEstilo: 'guiaEstilo',
    requiereDiseno: 'requiereDiseno',
    entregables: 'entregables',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisenoUXScalarFieldEnum = (typeof DisenoUXScalarFieldEnum)[keyof typeof DisenoUXScalarFieldEnum]


  export const PresupuestoTiemposScalarFieldEnum: {
    id: 'id',
    cotizacionId: 'cotizacionId',
    tienePresupuesto: 'tienePresupuesto',
    presupuestoMin: 'presupuestoMin',
    presupuestoMax: 'presupuestoMax',
    moneda: 'moneda',
    tieneFechaLimite: 'tieneFechaLimite',
    fechaLimite: 'fechaLimite',
    razonFechaLimite: 'razonFechaLimite',
    planMantenimiento: 'planMantenimiento',
    nombreDecidor: 'nombreDecidor',
    cargoDecidor: 'cargoDecidor',
    contactoDecidor: 'contactoDecidor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresupuestoTiemposScalarFieldEnum = (typeof PresupuestoTiemposScalarFieldEnum)[keyof typeof PresupuestoTiemposScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EstadoCotizacion'
   */
  export type EnumEstadoCotizacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCotizacion'>
    


  /**
   * Reference to a field of type 'EstadoCotizacion[]'
   */
  export type ListEnumEstadoCotizacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoCotizacion[]'>
    


  /**
   * Reference to a field of type 'EscalaUsuarios'
   */
  export type EnumEscalaUsuariosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscalaUsuarios'>
    


  /**
   * Reference to a field of type 'EscalaUsuarios[]'
   */
  export type ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscalaUsuarios[]'>
    


  /**
   * Reference to a field of type 'Plataforma[]'
   */
  export type ListEnumPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plataforma[]'>
    


  /**
   * Reference to a field of type 'Plataforma'
   */
  export type EnumPlataformaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plataforma'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'TipoMoneda'
   */
  export type EnumTipoMonedaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMoneda'>
    


  /**
   * Reference to a field of type 'TipoMoneda[]'
   */
  export type ListEnumTipoMonedaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoMoneda[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CotizacionWhereInput = {
    AND?: CotizacionWhereInput | CotizacionWhereInput[]
    OR?: CotizacionWhereInput[]
    NOT?: CotizacionWhereInput | CotizacionWhereInput[]
    id?: StringFilter<"Cotizacion"> | string
    createdAt?: DateTimeFilter<"Cotizacion"> | Date | string
    updatedAt?: DateTimeFilter<"Cotizacion"> | Date | string
    nombreCliente?: StringFilter<"Cotizacion"> | string
    emailCliente?: StringFilter<"Cotizacion"> | string
    empresaCliente?: StringNullableFilter<"Cotizacion"> | string | null
    telefonoCliente?: StringNullableFilter<"Cotizacion"> | string | null
    estado?: EnumEstadoCotizacionFilter<"Cotizacion"> | $Enums.EstadoCotizacion
    notasInternas?: StringNullableFilter<"Cotizacion"> | string | null
    objetivosVision?: XOR<ObjetivosVisionNullableScalarRelationFilter, ObjetivosVisionWhereInput> | null
    usuariosRoles?: XOR<UsuariosRolesNullableScalarRelationFilter, UsuariosRolesWhereInput> | null
    alcanceFuncionalidades?: XOR<AlcanceFuncionalidadesNullableScalarRelationFilter, AlcanceFuncionalidadesWhereInput> | null
    requerimientosTecnicos?: XOR<RequerimientosTecnicosNullableScalarRelationFilter, RequerimientosTecnicosWhereInput> | null
    integraciones?: XOR<IntegracionesNullableScalarRelationFilter, IntegracionesWhereInput> | null
    disenoUX?: XOR<DisenoUXNullableScalarRelationFilter, DisenoUXWhereInput> | null
    presupuestoTiempos?: XOR<PresupuestoTiemposNullableScalarRelationFilter, PresupuestoTiemposWhereInput> | null
  }

  export type CotizacionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    empresaCliente?: SortOrderInput | SortOrder
    telefonoCliente?: SortOrderInput | SortOrder
    estado?: SortOrder
    notasInternas?: SortOrderInput | SortOrder
    objetivosVision?: ObjetivosVisionOrderByWithRelationInput
    usuariosRoles?: UsuariosRolesOrderByWithRelationInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesOrderByWithRelationInput
    requerimientosTecnicos?: RequerimientosTecnicosOrderByWithRelationInput
    integraciones?: IntegracionesOrderByWithRelationInput
    disenoUX?: DisenoUXOrderByWithRelationInput
    presupuestoTiempos?: PresupuestoTiemposOrderByWithRelationInput
  }

  export type CotizacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CotizacionWhereInput | CotizacionWhereInput[]
    OR?: CotizacionWhereInput[]
    NOT?: CotizacionWhereInput | CotizacionWhereInput[]
    createdAt?: DateTimeFilter<"Cotizacion"> | Date | string
    updatedAt?: DateTimeFilter<"Cotizacion"> | Date | string
    nombreCliente?: StringFilter<"Cotizacion"> | string
    emailCliente?: StringFilter<"Cotizacion"> | string
    empresaCliente?: StringNullableFilter<"Cotizacion"> | string | null
    telefonoCliente?: StringNullableFilter<"Cotizacion"> | string | null
    estado?: EnumEstadoCotizacionFilter<"Cotizacion"> | $Enums.EstadoCotizacion
    notasInternas?: StringNullableFilter<"Cotizacion"> | string | null
    objetivosVision?: XOR<ObjetivosVisionNullableScalarRelationFilter, ObjetivosVisionWhereInput> | null
    usuariosRoles?: XOR<UsuariosRolesNullableScalarRelationFilter, UsuariosRolesWhereInput> | null
    alcanceFuncionalidades?: XOR<AlcanceFuncionalidadesNullableScalarRelationFilter, AlcanceFuncionalidadesWhereInput> | null
    requerimientosTecnicos?: XOR<RequerimientosTecnicosNullableScalarRelationFilter, RequerimientosTecnicosWhereInput> | null
    integraciones?: XOR<IntegracionesNullableScalarRelationFilter, IntegracionesWhereInput> | null
    disenoUX?: XOR<DisenoUXNullableScalarRelationFilter, DisenoUXWhereInput> | null
    presupuestoTiempos?: XOR<PresupuestoTiemposNullableScalarRelationFilter, PresupuestoTiemposWhereInput> | null
  }, "id">

  export type CotizacionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    empresaCliente?: SortOrderInput | SortOrder
    telefonoCliente?: SortOrderInput | SortOrder
    estado?: SortOrder
    notasInternas?: SortOrderInput | SortOrder
    _count?: CotizacionCountOrderByAggregateInput
    _max?: CotizacionMaxOrderByAggregateInput
    _min?: CotizacionMinOrderByAggregateInput
  }

  export type CotizacionScalarWhereWithAggregatesInput = {
    AND?: CotizacionScalarWhereWithAggregatesInput | CotizacionScalarWhereWithAggregatesInput[]
    OR?: CotizacionScalarWhereWithAggregatesInput[]
    NOT?: CotizacionScalarWhereWithAggregatesInput | CotizacionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cotizacion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cotizacion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cotizacion"> | Date | string
    nombreCliente?: StringWithAggregatesFilter<"Cotizacion"> | string
    emailCliente?: StringWithAggregatesFilter<"Cotizacion"> | string
    empresaCliente?: StringNullableWithAggregatesFilter<"Cotizacion"> | string | null
    telefonoCliente?: StringNullableWithAggregatesFilter<"Cotizacion"> | string | null
    estado?: EnumEstadoCotizacionWithAggregatesFilter<"Cotizacion"> | $Enums.EstadoCotizacion
    notasInternas?: StringNullableWithAggregatesFilter<"Cotizacion"> | string | null
  }

  export type ObjetivosVisionWhereInput = {
    AND?: ObjetivosVisionWhereInput | ObjetivosVisionWhereInput[]
    OR?: ObjetivosVisionWhereInput[]
    NOT?: ObjetivosVisionWhereInput | ObjetivosVisionWhereInput[]
    id?: StringFilter<"ObjetivosVision"> | string
    cotizacionId?: StringFilter<"ObjetivosVision"> | string
    problemaPrincipal?: StringFilter<"ObjetivosVision"> | string
    objetivoPrincipal?: StringFilter<"ObjetivosVision"> | string
    procesoActual?: StringNullableFilter<"ObjetivosVision"> | string | null
    competenciaReferencia?: StringNullableFilter<"ObjetivosVision"> | string | null
    createdAt?: DateTimeFilter<"ObjetivosVision"> | Date | string
    updatedAt?: DateTimeFilter<"ObjetivosVision"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type ObjetivosVisionOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    problemaPrincipal?: SortOrder
    objetivoPrincipal?: SortOrder
    procesoActual?: SortOrderInput | SortOrder
    competenciaReferencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type ObjetivosVisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: ObjetivosVisionWhereInput | ObjetivosVisionWhereInput[]
    OR?: ObjetivosVisionWhereInput[]
    NOT?: ObjetivosVisionWhereInput | ObjetivosVisionWhereInput[]
    problemaPrincipal?: StringFilter<"ObjetivosVision"> | string
    objetivoPrincipal?: StringFilter<"ObjetivosVision"> | string
    procesoActual?: StringNullableFilter<"ObjetivosVision"> | string | null
    competenciaReferencia?: StringNullableFilter<"ObjetivosVision"> | string | null
    createdAt?: DateTimeFilter<"ObjetivosVision"> | Date | string
    updatedAt?: DateTimeFilter<"ObjetivosVision"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type ObjetivosVisionOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    problemaPrincipal?: SortOrder
    objetivoPrincipal?: SortOrder
    procesoActual?: SortOrderInput | SortOrder
    competenciaReferencia?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ObjetivosVisionCountOrderByAggregateInput
    _max?: ObjetivosVisionMaxOrderByAggregateInput
    _min?: ObjetivosVisionMinOrderByAggregateInput
  }

  export type ObjetivosVisionScalarWhereWithAggregatesInput = {
    AND?: ObjetivosVisionScalarWhereWithAggregatesInput | ObjetivosVisionScalarWhereWithAggregatesInput[]
    OR?: ObjetivosVisionScalarWhereWithAggregatesInput[]
    NOT?: ObjetivosVisionScalarWhereWithAggregatesInput | ObjetivosVisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ObjetivosVision"> | string
    cotizacionId?: StringWithAggregatesFilter<"ObjetivosVision"> | string
    problemaPrincipal?: StringWithAggregatesFilter<"ObjetivosVision"> | string
    objetivoPrincipal?: StringWithAggregatesFilter<"ObjetivosVision"> | string
    procesoActual?: StringNullableWithAggregatesFilter<"ObjetivosVision"> | string | null
    competenciaReferencia?: StringNullableWithAggregatesFilter<"ObjetivosVision"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ObjetivosVision"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ObjetivosVision"> | Date | string
  }

  export type UsuariosRolesWhereInput = {
    AND?: UsuariosRolesWhereInput | UsuariosRolesWhereInput[]
    OR?: UsuariosRolesWhereInput[]
    NOT?: UsuariosRolesWhereInput | UsuariosRolesWhereInput[]
    id?: StringFilter<"UsuariosRoles"> | string
    cotizacionId?: StringFilter<"UsuariosRoles"> | string
    usuariosFinales?: StringFilter<"UsuariosRoles"> | string
    tiposRoles?: StringNullableFilter<"UsuariosRoles"> | string | null
    descripcionRoles?: StringNullableFilter<"UsuariosRoles"> | string | null
    cantidadUsuarios?: StringNullableFilter<"UsuariosRoles"> | string | null
    escalaUsuarios?: EnumEscalaUsuariosNullableFilter<"UsuariosRoles"> | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFilter<"UsuariosRoles"> | Date | string
    updatedAt?: DateTimeFilter<"UsuariosRoles"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type UsuariosRolesOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    usuariosFinales?: SortOrder
    tiposRoles?: SortOrderInput | SortOrder
    descripcionRoles?: SortOrderInput | SortOrder
    cantidadUsuarios?: SortOrderInput | SortOrder
    escalaUsuarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type UsuariosRolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: UsuariosRolesWhereInput | UsuariosRolesWhereInput[]
    OR?: UsuariosRolesWhereInput[]
    NOT?: UsuariosRolesWhereInput | UsuariosRolesWhereInput[]
    usuariosFinales?: StringFilter<"UsuariosRoles"> | string
    tiposRoles?: StringNullableFilter<"UsuariosRoles"> | string | null
    descripcionRoles?: StringNullableFilter<"UsuariosRoles"> | string | null
    cantidadUsuarios?: StringNullableFilter<"UsuariosRoles"> | string | null
    escalaUsuarios?: EnumEscalaUsuariosNullableFilter<"UsuariosRoles"> | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFilter<"UsuariosRoles"> | Date | string
    updatedAt?: DateTimeFilter<"UsuariosRoles"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type UsuariosRolesOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    usuariosFinales?: SortOrder
    tiposRoles?: SortOrderInput | SortOrder
    descripcionRoles?: SortOrderInput | SortOrder
    cantidadUsuarios?: SortOrderInput | SortOrder
    escalaUsuarios?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuariosRolesCountOrderByAggregateInput
    _max?: UsuariosRolesMaxOrderByAggregateInput
    _min?: UsuariosRolesMinOrderByAggregateInput
  }

  export type UsuariosRolesScalarWhereWithAggregatesInput = {
    AND?: UsuariosRolesScalarWhereWithAggregatesInput | UsuariosRolesScalarWhereWithAggregatesInput[]
    OR?: UsuariosRolesScalarWhereWithAggregatesInput[]
    NOT?: UsuariosRolesScalarWhereWithAggregatesInput | UsuariosRolesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsuariosRoles"> | string
    cotizacionId?: StringWithAggregatesFilter<"UsuariosRoles"> | string
    usuariosFinales?: StringWithAggregatesFilter<"UsuariosRoles"> | string
    tiposRoles?: StringNullableWithAggregatesFilter<"UsuariosRoles"> | string | null
    descripcionRoles?: StringNullableWithAggregatesFilter<"UsuariosRoles"> | string | null
    cantidadUsuarios?: StringNullableWithAggregatesFilter<"UsuariosRoles"> | string | null
    escalaUsuarios?: EnumEscalaUsuariosNullableWithAggregatesFilter<"UsuariosRoles"> | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeWithAggregatesFilter<"UsuariosRoles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UsuariosRoles"> | Date | string
  }

  export type AlcanceFuncionalidadesWhereInput = {
    AND?: AlcanceFuncionalidadesWhereInput | AlcanceFuncionalidadesWhereInput[]
    OR?: AlcanceFuncionalidadesWhereInput[]
    NOT?: AlcanceFuncionalidadesWhereInput | AlcanceFuncionalidadesWhereInput[]
    id?: StringFilter<"AlcanceFuncionalidades"> | string
    cotizacionId?: StringFilter<"AlcanceFuncionalidades"> | string
    funcionalidadesClave?: StringFilter<"AlcanceFuncionalidades"> | string
    flujosPrincipales?: StringFilter<"AlcanceFuncionalidades"> | string
    funcionalidadesFase1?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    funcionalidadesFase2?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    fueraDeAlcance?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    createdAt?: DateTimeFilter<"AlcanceFuncionalidades"> | Date | string
    updatedAt?: DateTimeFilter<"AlcanceFuncionalidades"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type AlcanceFuncionalidadesOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    funcionalidadesClave?: SortOrder
    flujosPrincipales?: SortOrder
    funcionalidadesFase1?: SortOrderInput | SortOrder
    funcionalidadesFase2?: SortOrderInput | SortOrder
    fueraDeAlcance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type AlcanceFuncionalidadesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: AlcanceFuncionalidadesWhereInput | AlcanceFuncionalidadesWhereInput[]
    OR?: AlcanceFuncionalidadesWhereInput[]
    NOT?: AlcanceFuncionalidadesWhereInput | AlcanceFuncionalidadesWhereInput[]
    funcionalidadesClave?: StringFilter<"AlcanceFuncionalidades"> | string
    flujosPrincipales?: StringFilter<"AlcanceFuncionalidades"> | string
    funcionalidadesFase1?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    funcionalidadesFase2?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    fueraDeAlcance?: StringNullableFilter<"AlcanceFuncionalidades"> | string | null
    createdAt?: DateTimeFilter<"AlcanceFuncionalidades"> | Date | string
    updatedAt?: DateTimeFilter<"AlcanceFuncionalidades"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type AlcanceFuncionalidadesOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    funcionalidadesClave?: SortOrder
    flujosPrincipales?: SortOrder
    funcionalidadesFase1?: SortOrderInput | SortOrder
    funcionalidadesFase2?: SortOrderInput | SortOrder
    fueraDeAlcance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlcanceFuncionalidadesCountOrderByAggregateInput
    _max?: AlcanceFuncionalidadesMaxOrderByAggregateInput
    _min?: AlcanceFuncionalidadesMinOrderByAggregateInput
  }

  export type AlcanceFuncionalidadesScalarWhereWithAggregatesInput = {
    AND?: AlcanceFuncionalidadesScalarWhereWithAggregatesInput | AlcanceFuncionalidadesScalarWhereWithAggregatesInput[]
    OR?: AlcanceFuncionalidadesScalarWhereWithAggregatesInput[]
    NOT?: AlcanceFuncionalidadesScalarWhereWithAggregatesInput | AlcanceFuncionalidadesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlcanceFuncionalidades"> | string
    cotizacionId?: StringWithAggregatesFilter<"AlcanceFuncionalidades"> | string
    funcionalidadesClave?: StringWithAggregatesFilter<"AlcanceFuncionalidades"> | string
    flujosPrincipales?: StringWithAggregatesFilter<"AlcanceFuncionalidades"> | string
    funcionalidadesFase1?: StringNullableWithAggregatesFilter<"AlcanceFuncionalidades"> | string | null
    funcionalidadesFase2?: StringNullableWithAggregatesFilter<"AlcanceFuncionalidades"> | string | null
    fueraDeAlcance?: StringNullableWithAggregatesFilter<"AlcanceFuncionalidades"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AlcanceFuncionalidades"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlcanceFuncionalidades"> | Date | string
  }

  export type RequerimientosTecnicosWhereInput = {
    AND?: RequerimientosTecnicosWhereInput | RequerimientosTecnicosWhereInput[]
    OR?: RequerimientosTecnicosWhereInput[]
    NOT?: RequerimientosTecnicosWhereInput | RequerimientosTecnicosWhereInput[]
    id?: StringFilter<"RequerimientosTecnicos"> | string
    cotizacionId?: StringFilter<"RequerimientosTecnicos"> | string
    plataformas?: EnumPlataformaNullableListFilter<"RequerimientosTecnicos">
    detallesPlataforma?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    hosting?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    tecnologias?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    requisitoRendimiento?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    requisitoSeguridad?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    createdAt?: DateTimeFilter<"RequerimientosTecnicos"> | Date | string
    updatedAt?: DateTimeFilter<"RequerimientosTecnicos"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type RequerimientosTecnicosOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    plataformas?: SortOrder
    detallesPlataforma?: SortOrderInput | SortOrder
    hosting?: SortOrderInput | SortOrder
    tecnologias?: SortOrderInput | SortOrder
    requisitoRendimiento?: SortOrderInput | SortOrder
    requisitoSeguridad?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type RequerimientosTecnicosWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: RequerimientosTecnicosWhereInput | RequerimientosTecnicosWhereInput[]
    OR?: RequerimientosTecnicosWhereInput[]
    NOT?: RequerimientosTecnicosWhereInput | RequerimientosTecnicosWhereInput[]
    plataformas?: EnumPlataformaNullableListFilter<"RequerimientosTecnicos">
    detallesPlataforma?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    hosting?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    tecnologias?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    requisitoRendimiento?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    requisitoSeguridad?: StringNullableFilter<"RequerimientosTecnicos"> | string | null
    createdAt?: DateTimeFilter<"RequerimientosTecnicos"> | Date | string
    updatedAt?: DateTimeFilter<"RequerimientosTecnicos"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type RequerimientosTecnicosOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    plataformas?: SortOrder
    detallesPlataforma?: SortOrderInput | SortOrder
    hosting?: SortOrderInput | SortOrder
    tecnologias?: SortOrderInput | SortOrder
    requisitoRendimiento?: SortOrderInput | SortOrder
    requisitoSeguridad?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RequerimientosTecnicosCountOrderByAggregateInput
    _max?: RequerimientosTecnicosMaxOrderByAggregateInput
    _min?: RequerimientosTecnicosMinOrderByAggregateInput
  }

  export type RequerimientosTecnicosScalarWhereWithAggregatesInput = {
    AND?: RequerimientosTecnicosScalarWhereWithAggregatesInput | RequerimientosTecnicosScalarWhereWithAggregatesInput[]
    OR?: RequerimientosTecnicosScalarWhereWithAggregatesInput[]
    NOT?: RequerimientosTecnicosScalarWhereWithAggregatesInput | RequerimientosTecnicosScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RequerimientosTecnicos"> | string
    cotizacionId?: StringWithAggregatesFilter<"RequerimientosTecnicos"> | string
    plataformas?: EnumPlataformaNullableListFilter<"RequerimientosTecnicos">
    detallesPlataforma?: StringNullableWithAggregatesFilter<"RequerimientosTecnicos"> | string | null
    hosting?: StringNullableWithAggregatesFilter<"RequerimientosTecnicos"> | string | null
    tecnologias?: StringNullableWithAggregatesFilter<"RequerimientosTecnicos"> | string | null
    requisitoRendimiento?: StringNullableWithAggregatesFilter<"RequerimientosTecnicos"> | string | null
    requisitoSeguridad?: StringNullableWithAggregatesFilter<"RequerimientosTecnicos"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RequerimientosTecnicos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RequerimientosTecnicos"> | Date | string
  }

  export type IntegracionesWhereInput = {
    AND?: IntegracionesWhereInput | IntegracionesWhereInput[]
    OR?: IntegracionesWhereInput[]
    NOT?: IntegracionesWhereInput | IntegracionesWhereInput[]
    id?: StringFilter<"Integraciones"> | string
    cotizacionId?: StringFilter<"Integraciones"> | string
    sistemasExternos?: StringNullableFilter<"Integraciones"> | string | null
    apisTerceros?: StringNullableFilter<"Integraciones"> | string | null
    migracionDatos?: StringNullableFilter<"Integraciones"> | string | null
    reportes?: StringNullableFilter<"Integraciones"> | string | null
    createdAt?: DateTimeFilter<"Integraciones"> | Date | string
    updatedAt?: DateTimeFilter<"Integraciones"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type IntegracionesOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    sistemasExternos?: SortOrderInput | SortOrder
    apisTerceros?: SortOrderInput | SortOrder
    migracionDatos?: SortOrderInput | SortOrder
    reportes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type IntegracionesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: IntegracionesWhereInput | IntegracionesWhereInput[]
    OR?: IntegracionesWhereInput[]
    NOT?: IntegracionesWhereInput | IntegracionesWhereInput[]
    sistemasExternos?: StringNullableFilter<"Integraciones"> | string | null
    apisTerceros?: StringNullableFilter<"Integraciones"> | string | null
    migracionDatos?: StringNullableFilter<"Integraciones"> | string | null
    reportes?: StringNullableFilter<"Integraciones"> | string | null
    createdAt?: DateTimeFilter<"Integraciones"> | Date | string
    updatedAt?: DateTimeFilter<"Integraciones"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type IntegracionesOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    sistemasExternos?: SortOrderInput | SortOrder
    apisTerceros?: SortOrderInput | SortOrder
    migracionDatos?: SortOrderInput | SortOrder
    reportes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegracionesCountOrderByAggregateInput
    _max?: IntegracionesMaxOrderByAggregateInput
    _min?: IntegracionesMinOrderByAggregateInput
  }

  export type IntegracionesScalarWhereWithAggregatesInput = {
    AND?: IntegracionesScalarWhereWithAggregatesInput | IntegracionesScalarWhereWithAggregatesInput[]
    OR?: IntegracionesScalarWhereWithAggregatesInput[]
    NOT?: IntegracionesScalarWhereWithAggregatesInput | IntegracionesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integraciones"> | string
    cotizacionId?: StringWithAggregatesFilter<"Integraciones"> | string
    sistemasExternos?: StringNullableWithAggregatesFilter<"Integraciones"> | string | null
    apisTerceros?: StringNullableWithAggregatesFilter<"Integraciones"> | string | null
    migracionDatos?: StringNullableWithAggregatesFilter<"Integraciones"> | string | null
    reportes?: StringNullableWithAggregatesFilter<"Integraciones"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Integraciones"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integraciones"> | Date | string
  }

  export type DisenoUXWhereInput = {
    AND?: DisenoUXWhereInput | DisenoUXWhereInput[]
    OR?: DisenoUXWhereInput[]
    NOT?: DisenoUXWhereInput | DisenoUXWhereInput[]
    id?: StringFilter<"DisenoUX"> | string
    cotizacionId?: StringFilter<"DisenoUX"> | string
    tieneDisenoVisual?: BoolFilter<"DisenoUX"> | boolean
    disenoVisualUrl?: StringNullableFilter<"DisenoUX"> | string | null
    tieneGuiaEstilo?: BoolFilter<"DisenoUX"> | boolean
    guiaEstilo?: StringNullableFilter<"DisenoUX"> | string | null
    requiereDiseno?: BoolFilter<"DisenoUX"> | boolean
    entregables?: StringNullableFilter<"DisenoUX"> | string | null
    createdAt?: DateTimeFilter<"DisenoUX"> | Date | string
    updatedAt?: DateTimeFilter<"DisenoUX"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type DisenoUXOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tieneDisenoVisual?: SortOrder
    disenoVisualUrl?: SortOrderInput | SortOrder
    tieneGuiaEstilo?: SortOrder
    guiaEstilo?: SortOrderInput | SortOrder
    requiereDiseno?: SortOrder
    entregables?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type DisenoUXWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: DisenoUXWhereInput | DisenoUXWhereInput[]
    OR?: DisenoUXWhereInput[]
    NOT?: DisenoUXWhereInput | DisenoUXWhereInput[]
    tieneDisenoVisual?: BoolFilter<"DisenoUX"> | boolean
    disenoVisualUrl?: StringNullableFilter<"DisenoUX"> | string | null
    tieneGuiaEstilo?: BoolFilter<"DisenoUX"> | boolean
    guiaEstilo?: StringNullableFilter<"DisenoUX"> | string | null
    requiereDiseno?: BoolFilter<"DisenoUX"> | boolean
    entregables?: StringNullableFilter<"DisenoUX"> | string | null
    createdAt?: DateTimeFilter<"DisenoUX"> | Date | string
    updatedAt?: DateTimeFilter<"DisenoUX"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type DisenoUXOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tieneDisenoVisual?: SortOrder
    disenoVisualUrl?: SortOrderInput | SortOrder
    tieneGuiaEstilo?: SortOrder
    guiaEstilo?: SortOrderInput | SortOrder
    requiereDiseno?: SortOrder
    entregables?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisenoUXCountOrderByAggregateInput
    _max?: DisenoUXMaxOrderByAggregateInput
    _min?: DisenoUXMinOrderByAggregateInput
  }

  export type DisenoUXScalarWhereWithAggregatesInput = {
    AND?: DisenoUXScalarWhereWithAggregatesInput | DisenoUXScalarWhereWithAggregatesInput[]
    OR?: DisenoUXScalarWhereWithAggregatesInput[]
    NOT?: DisenoUXScalarWhereWithAggregatesInput | DisenoUXScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DisenoUX"> | string
    cotizacionId?: StringWithAggregatesFilter<"DisenoUX"> | string
    tieneDisenoVisual?: BoolWithAggregatesFilter<"DisenoUX"> | boolean
    disenoVisualUrl?: StringNullableWithAggregatesFilter<"DisenoUX"> | string | null
    tieneGuiaEstilo?: BoolWithAggregatesFilter<"DisenoUX"> | boolean
    guiaEstilo?: StringNullableWithAggregatesFilter<"DisenoUX"> | string | null
    requiereDiseno?: BoolWithAggregatesFilter<"DisenoUX"> | boolean
    entregables?: StringNullableWithAggregatesFilter<"DisenoUX"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DisenoUX"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DisenoUX"> | Date | string
  }

  export type PresupuestoTiemposWhereInput = {
    AND?: PresupuestoTiemposWhereInput | PresupuestoTiemposWhereInput[]
    OR?: PresupuestoTiemposWhereInput[]
    NOT?: PresupuestoTiemposWhereInput | PresupuestoTiemposWhereInput[]
    id?: StringFilter<"PresupuestoTiempos"> | string
    cotizacionId?: StringFilter<"PresupuestoTiempos"> | string
    tienePresupuesto?: BoolFilter<"PresupuestoTiempos"> | boolean
    presupuestoMin?: DecimalNullableFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: DecimalNullableFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    moneda?: EnumTipoMonedaNullableFilter<"PresupuestoTiempos"> | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFilter<"PresupuestoTiempos"> | boolean
    fechaLimite?: DateTimeNullableFilter<"PresupuestoTiempos"> | Date | string | null
    razonFechaLimite?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    planMantenimiento?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    nombreDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    cargoDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    contactoDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    createdAt?: DateTimeFilter<"PresupuestoTiempos"> | Date | string
    updatedAt?: DateTimeFilter<"PresupuestoTiempos"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }

  export type PresupuestoTiemposOrderByWithRelationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tienePresupuesto?: SortOrder
    presupuestoMin?: SortOrderInput | SortOrder
    presupuestoMax?: SortOrderInput | SortOrder
    moneda?: SortOrderInput | SortOrder
    tieneFechaLimite?: SortOrder
    fechaLimite?: SortOrderInput | SortOrder
    razonFechaLimite?: SortOrderInput | SortOrder
    planMantenimiento?: SortOrderInput | SortOrder
    nombreDecidor?: SortOrderInput | SortOrder
    cargoDecidor?: SortOrderInput | SortOrder
    contactoDecidor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cotizacion?: CotizacionOrderByWithRelationInput
  }

  export type PresupuestoTiemposWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cotizacionId?: string
    AND?: PresupuestoTiemposWhereInput | PresupuestoTiemposWhereInput[]
    OR?: PresupuestoTiemposWhereInput[]
    NOT?: PresupuestoTiemposWhereInput | PresupuestoTiemposWhereInput[]
    tienePresupuesto?: BoolFilter<"PresupuestoTiempos"> | boolean
    presupuestoMin?: DecimalNullableFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: DecimalNullableFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    moneda?: EnumTipoMonedaNullableFilter<"PresupuestoTiempos"> | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFilter<"PresupuestoTiempos"> | boolean
    fechaLimite?: DateTimeNullableFilter<"PresupuestoTiempos"> | Date | string | null
    razonFechaLimite?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    planMantenimiento?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    nombreDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    cargoDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    contactoDecidor?: StringNullableFilter<"PresupuestoTiempos"> | string | null
    createdAt?: DateTimeFilter<"PresupuestoTiempos"> | Date | string
    updatedAt?: DateTimeFilter<"PresupuestoTiempos"> | Date | string
    cotizacion?: XOR<CotizacionScalarRelationFilter, CotizacionWhereInput>
  }, "id" | "cotizacionId">

  export type PresupuestoTiemposOrderByWithAggregationInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tienePresupuesto?: SortOrder
    presupuestoMin?: SortOrderInput | SortOrder
    presupuestoMax?: SortOrderInput | SortOrder
    moneda?: SortOrderInput | SortOrder
    tieneFechaLimite?: SortOrder
    fechaLimite?: SortOrderInput | SortOrder
    razonFechaLimite?: SortOrderInput | SortOrder
    planMantenimiento?: SortOrderInput | SortOrder
    nombreDecidor?: SortOrderInput | SortOrder
    cargoDecidor?: SortOrderInput | SortOrder
    contactoDecidor?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PresupuestoTiemposCountOrderByAggregateInput
    _avg?: PresupuestoTiemposAvgOrderByAggregateInput
    _max?: PresupuestoTiemposMaxOrderByAggregateInput
    _min?: PresupuestoTiemposMinOrderByAggregateInput
    _sum?: PresupuestoTiemposSumOrderByAggregateInput
  }

  export type PresupuestoTiemposScalarWhereWithAggregatesInput = {
    AND?: PresupuestoTiemposScalarWhereWithAggregatesInput | PresupuestoTiemposScalarWhereWithAggregatesInput[]
    OR?: PresupuestoTiemposScalarWhereWithAggregatesInput[]
    NOT?: PresupuestoTiemposScalarWhereWithAggregatesInput | PresupuestoTiemposScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PresupuestoTiempos"> | string
    cotizacionId?: StringWithAggregatesFilter<"PresupuestoTiempos"> | string
    tienePresupuesto?: BoolWithAggregatesFilter<"PresupuestoTiempos"> | boolean
    presupuestoMin?: DecimalNullableWithAggregatesFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: DecimalNullableWithAggregatesFilter<"PresupuestoTiempos"> | Decimal | DecimalJsLike | number | string | null
    moneda?: EnumTipoMonedaNullableWithAggregatesFilter<"PresupuestoTiempos"> | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolWithAggregatesFilter<"PresupuestoTiempos"> | boolean
    fechaLimite?: DateTimeNullableWithAggregatesFilter<"PresupuestoTiempos"> | Date | string | null
    razonFechaLimite?: StringNullableWithAggregatesFilter<"PresupuestoTiempos"> | string | null
    planMantenimiento?: StringNullableWithAggregatesFilter<"PresupuestoTiempos"> | string | null
    nombreDecidor?: StringNullableWithAggregatesFilter<"PresupuestoTiempos"> | string | null
    cargoDecidor?: StringNullableWithAggregatesFilter<"PresupuestoTiempos"> | string | null
    contactoDecidor?: StringNullableWithAggregatesFilter<"PresupuestoTiempos"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PresupuestoTiempos"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PresupuestoTiempos"> | Date | string
  }

  export type CotizacionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
  }

  export type CotizacionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CotizacionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ObjetivosVisionCreateInput = {
    id?: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual?: string | null
    competenciaReferencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutObjetivosVisionInput
  }

  export type ObjetivosVisionUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual?: string | null
    competenciaReferencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjetivosVisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutObjetivosVisionNestedInput
  }

  export type ObjetivosVisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjetivosVisionCreateManyInput = {
    id?: string
    cotizacionId: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual?: string | null
    competenciaReferencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjetivosVisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjetivosVisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosRolesCreateInput = {
    id?: string
    usuariosFinales: string
    tiposRoles?: string | null
    descripcionRoles?: string | null
    cantidadUsuarios?: string | null
    escalaUsuarios?: $Enums.EscalaUsuarios | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutUsuariosRolesInput
  }

  export type UsuariosRolesUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    usuariosFinales: string
    tiposRoles?: string | null
    descripcionRoles?: string | null
    cantidadUsuarios?: string | null
    escalaUsuarios?: $Enums.EscalaUsuarios | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosRolesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutUsuariosRolesNestedInput
  }

  export type UsuariosRolesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosRolesCreateManyInput = {
    id?: string
    cotizacionId: string
    usuariosFinales: string
    tiposRoles?: string | null
    descripcionRoles?: string | null
    cantidadUsuarios?: string | null
    escalaUsuarios?: $Enums.EscalaUsuarios | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosRolesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosRolesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlcanceFuncionalidadesCreateInput = {
    id?: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1?: string | null
    funcionalidadesFase2?: string | null
    fueraDeAlcance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutAlcanceFuncionalidadesInput
  }

  export type AlcanceFuncionalidadesUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1?: string | null
    funcionalidadesFase2?: string | null
    fueraDeAlcance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlcanceFuncionalidadesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutAlcanceFuncionalidadesNestedInput
  }

  export type AlcanceFuncionalidadesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlcanceFuncionalidadesCreateManyInput = {
    id?: string
    cotizacionId: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1?: string | null
    funcionalidadesFase2?: string | null
    fueraDeAlcance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlcanceFuncionalidadesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlcanceFuncionalidadesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequerimientosTecnicosCreateInput = {
    id?: string
    plataformas?: RequerimientosTecnicosCreateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: string | null
    hosting?: string | null
    tecnologias?: string | null
    requisitoRendimiento?: string | null
    requisitoSeguridad?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutRequerimientosTecnicosInput
  }

  export type RequerimientosTecnicosUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    plataformas?: RequerimientosTecnicosCreateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: string | null
    hosting?: string | null
    tecnologias?: string | null
    requisitoRendimiento?: string | null
    requisitoSeguridad?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequerimientosTecnicosUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutRequerimientosTecnicosNestedInput
  }

  export type RequerimientosTecnicosUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequerimientosTecnicosCreateManyInput = {
    id?: string
    cotizacionId: string
    plataformas?: RequerimientosTecnicosCreateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: string | null
    hosting?: string | null
    tecnologias?: string | null
    requisitoRendimiento?: string | null
    requisitoSeguridad?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequerimientosTecnicosUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequerimientosTecnicosUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegracionesCreateInput = {
    id?: string
    sistemasExternos?: string | null
    apisTerceros?: string | null
    migracionDatos?: string | null
    reportes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutIntegracionesInput
  }

  export type IntegracionesUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    sistemasExternos?: string | null
    apisTerceros?: string | null
    migracionDatos?: string | null
    reportes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegracionesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutIntegracionesNestedInput
  }

  export type IntegracionesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegracionesCreateManyInput = {
    id?: string
    cotizacionId: string
    sistemasExternos?: string | null
    apisTerceros?: string | null
    migracionDatos?: string | null
    reportes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegracionesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegracionesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisenoUXCreateInput = {
    id?: string
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: string | null
    tieneGuiaEstilo?: boolean
    guiaEstilo?: string | null
    requiereDiseno?: boolean
    entregables?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutDisenoUXInput
  }

  export type DisenoUXUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: string | null
    tieneGuiaEstilo?: boolean
    guiaEstilo?: string | null
    requiereDiseno?: boolean
    entregables?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisenoUXUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutDisenoUXNestedInput
  }

  export type DisenoUXUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisenoUXCreateManyInput = {
    id?: string
    cotizacionId: string
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: string | null
    tieneGuiaEstilo?: boolean
    guiaEstilo?: string | null
    requiereDiseno?: boolean
    entregables?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisenoUXUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisenoUXUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoTiemposCreateInput = {
    id?: string
    tienePresupuesto?: boolean
    presupuestoMin?: Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: Decimal | DecimalJsLike | number | string | null
    moneda?: $Enums.TipoMoneda | null
    tieneFechaLimite?: boolean
    fechaLimite?: Date | string | null
    razonFechaLimite?: string | null
    planMantenimiento?: string | null
    nombreDecidor?: string | null
    cargoDecidor?: string | null
    contactoDecidor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cotizacion: CotizacionCreateNestedOneWithoutPresupuestoTiemposInput
  }

  export type PresupuestoTiemposUncheckedCreateInput = {
    id?: string
    cotizacionId: string
    tienePresupuesto?: boolean
    presupuestoMin?: Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: Decimal | DecimalJsLike | number | string | null
    moneda?: $Enums.TipoMoneda | null
    tieneFechaLimite?: boolean
    fechaLimite?: Date | string | null
    razonFechaLimite?: string | null
    planMantenimiento?: string | null
    nombreDecidor?: string | null
    cargoDecidor?: string | null
    contactoDecidor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoTiemposUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cotizacion?: CotizacionUpdateOneRequiredWithoutPresupuestoTiemposNestedInput
  }

  export type PresupuestoTiemposUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoTiemposCreateManyInput = {
    id?: string
    cotizacionId: string
    tienePresupuesto?: boolean
    presupuestoMin?: Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: Decimal | DecimalJsLike | number | string | null
    moneda?: $Enums.TipoMoneda | null
    tieneFechaLimite?: boolean
    fechaLimite?: Date | string | null
    razonFechaLimite?: string | null
    planMantenimiento?: string | null
    nombreDecidor?: string | null
    cargoDecidor?: string | null
    contactoDecidor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoTiemposUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoTiemposUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cotizacionId?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumEstadoCotizacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCotizacion | EnumEstadoCotizacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCotizacionFilter<$PrismaModel> | $Enums.EstadoCotizacion
  }

  export type ObjetivosVisionNullableScalarRelationFilter = {
    is?: ObjetivosVisionWhereInput | null
    isNot?: ObjetivosVisionWhereInput | null
  }

  export type UsuariosRolesNullableScalarRelationFilter = {
    is?: UsuariosRolesWhereInput | null
    isNot?: UsuariosRolesWhereInput | null
  }

  export type AlcanceFuncionalidadesNullableScalarRelationFilter = {
    is?: AlcanceFuncionalidadesWhereInput | null
    isNot?: AlcanceFuncionalidadesWhereInput | null
  }

  export type RequerimientosTecnicosNullableScalarRelationFilter = {
    is?: RequerimientosTecnicosWhereInput | null
    isNot?: RequerimientosTecnicosWhereInput | null
  }

  export type IntegracionesNullableScalarRelationFilter = {
    is?: IntegracionesWhereInput | null
    isNot?: IntegracionesWhereInput | null
  }

  export type DisenoUXNullableScalarRelationFilter = {
    is?: DisenoUXWhereInput | null
    isNot?: DisenoUXWhereInput | null
  }

  export type PresupuestoTiemposNullableScalarRelationFilter = {
    is?: PresupuestoTiemposWhereInput | null
    isNot?: PresupuestoTiemposWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CotizacionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    empresaCliente?: SortOrder
    telefonoCliente?: SortOrder
    estado?: SortOrder
    notasInternas?: SortOrder
  }

  export type CotizacionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    empresaCliente?: SortOrder
    telefonoCliente?: SortOrder
    estado?: SortOrder
    notasInternas?: SortOrder
  }

  export type CotizacionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nombreCliente?: SortOrder
    emailCliente?: SortOrder
    empresaCliente?: SortOrder
    telefonoCliente?: SortOrder
    estado?: SortOrder
    notasInternas?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumEstadoCotizacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCotizacion | EnumEstadoCotizacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCotizacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCotizacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCotizacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoCotizacionFilter<$PrismaModel>
  }

  export type CotizacionScalarRelationFilter = {
    is?: CotizacionWhereInput
    isNot?: CotizacionWhereInput
  }

  export type ObjetivosVisionCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    problemaPrincipal?: SortOrder
    objetivoPrincipal?: SortOrder
    procesoActual?: SortOrder
    competenciaReferencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjetivosVisionMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    problemaPrincipal?: SortOrder
    objetivoPrincipal?: SortOrder
    procesoActual?: SortOrder
    competenciaReferencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObjetivosVisionMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    problemaPrincipal?: SortOrder
    objetivoPrincipal?: SortOrder
    procesoActual?: SortOrder
    competenciaReferencia?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEscalaUsuariosNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EscalaUsuarios | EnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel> | $Enums.EscalaUsuarios | null
  }

  export type UsuariosRolesCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    usuariosFinales?: SortOrder
    tiposRoles?: SortOrder
    descripcionRoles?: SortOrder
    cantidadUsuarios?: SortOrder
    escalaUsuarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuariosRolesMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    usuariosFinales?: SortOrder
    tiposRoles?: SortOrder
    descripcionRoles?: SortOrder
    cantidadUsuarios?: SortOrder
    escalaUsuarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuariosRolesMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    usuariosFinales?: SortOrder
    tiposRoles?: SortOrder
    descripcionRoles?: SortOrder
    cantidadUsuarios?: SortOrder
    escalaUsuarios?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumEscalaUsuariosNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscalaUsuarios | EnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscalaUsuariosNullableWithAggregatesFilter<$PrismaModel> | $Enums.EscalaUsuarios | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel>
    _max?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel>
  }

  export type AlcanceFuncionalidadesCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    funcionalidadesClave?: SortOrder
    flujosPrincipales?: SortOrder
    funcionalidadesFase1?: SortOrder
    funcionalidadesFase2?: SortOrder
    fueraDeAlcance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlcanceFuncionalidadesMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    funcionalidadesClave?: SortOrder
    flujosPrincipales?: SortOrder
    funcionalidadesFase1?: SortOrder
    funcionalidadesFase2?: SortOrder
    fueraDeAlcance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlcanceFuncionalidadesMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    funcionalidadesClave?: SortOrder
    flujosPrincipales?: SortOrder
    funcionalidadesFase1?: SortOrder
    funcionalidadesFase2?: SortOrder
    fueraDeAlcance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlataformaNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Plataforma[] | ListEnumPlataformaFieldRefInput<$PrismaModel> | null
    has?: $Enums.Plataforma | EnumPlataformaFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Plataforma[] | ListEnumPlataformaFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Plataforma[] | ListEnumPlataformaFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RequerimientosTecnicosCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    plataformas?: SortOrder
    detallesPlataforma?: SortOrder
    hosting?: SortOrder
    tecnologias?: SortOrder
    requisitoRendimiento?: SortOrder
    requisitoSeguridad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequerimientosTecnicosMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    detallesPlataforma?: SortOrder
    hosting?: SortOrder
    tecnologias?: SortOrder
    requisitoRendimiento?: SortOrder
    requisitoSeguridad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RequerimientosTecnicosMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    detallesPlataforma?: SortOrder
    hosting?: SortOrder
    tecnologias?: SortOrder
    requisitoRendimiento?: SortOrder
    requisitoSeguridad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegracionesCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    sistemasExternos?: SortOrder
    apisTerceros?: SortOrder
    migracionDatos?: SortOrder
    reportes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegracionesMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    sistemasExternos?: SortOrder
    apisTerceros?: SortOrder
    migracionDatos?: SortOrder
    reportes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegracionesMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    sistemasExternos?: SortOrder
    apisTerceros?: SortOrder
    migracionDatos?: SortOrder
    reportes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DisenoUXCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tieneDisenoVisual?: SortOrder
    disenoVisualUrl?: SortOrder
    tieneGuiaEstilo?: SortOrder
    guiaEstilo?: SortOrder
    requiereDiseno?: SortOrder
    entregables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisenoUXMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tieneDisenoVisual?: SortOrder
    disenoVisualUrl?: SortOrder
    tieneGuiaEstilo?: SortOrder
    guiaEstilo?: SortOrder
    requiereDiseno?: SortOrder
    entregables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisenoUXMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tieneDisenoVisual?: SortOrder
    disenoVisualUrl?: SortOrder
    tieneGuiaEstilo?: SortOrder
    guiaEstilo?: SortOrder
    requiereDiseno?: SortOrder
    entregables?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumTipoMonedaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMoneda | EnumTipoMonedaFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoMonedaNullableFilter<$PrismaModel> | $Enums.TipoMoneda | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PresupuestoTiemposCountOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tienePresupuesto?: SortOrder
    presupuestoMin?: SortOrder
    presupuestoMax?: SortOrder
    moneda?: SortOrder
    tieneFechaLimite?: SortOrder
    fechaLimite?: SortOrder
    razonFechaLimite?: SortOrder
    planMantenimiento?: SortOrder
    nombreDecidor?: SortOrder
    cargoDecidor?: SortOrder
    contactoDecidor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresupuestoTiemposAvgOrderByAggregateInput = {
    presupuestoMin?: SortOrder
    presupuestoMax?: SortOrder
  }

  export type PresupuestoTiemposMaxOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tienePresupuesto?: SortOrder
    presupuestoMin?: SortOrder
    presupuestoMax?: SortOrder
    moneda?: SortOrder
    tieneFechaLimite?: SortOrder
    fechaLimite?: SortOrder
    razonFechaLimite?: SortOrder
    planMantenimiento?: SortOrder
    nombreDecidor?: SortOrder
    cargoDecidor?: SortOrder
    contactoDecidor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresupuestoTiemposMinOrderByAggregateInput = {
    id?: SortOrder
    cotizacionId?: SortOrder
    tienePresupuesto?: SortOrder
    presupuestoMin?: SortOrder
    presupuestoMax?: SortOrder
    moneda?: SortOrder
    tieneFechaLimite?: SortOrder
    fechaLimite?: SortOrder
    razonFechaLimite?: SortOrder
    planMantenimiento?: SortOrder
    nombreDecidor?: SortOrder
    cargoDecidor?: SortOrder
    contactoDecidor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresupuestoTiemposSumOrderByAggregateInput = {
    presupuestoMin?: SortOrder
    presupuestoMax?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumTipoMonedaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMoneda | EnumTipoMonedaFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoMonedaNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoMoneda | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoMonedaNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoMonedaNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ObjetivosVisionCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: ObjetivosVisionCreateOrConnectWithoutCotizacionInput
    connect?: ObjetivosVisionWhereUniqueInput
  }

  export type UsuariosRolesCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: UsuariosRolesCreateOrConnectWithoutCotizacionInput
    connect?: UsuariosRolesWhereUniqueInput
  }

  export type AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: AlcanceFuncionalidadesCreateOrConnectWithoutCotizacionInput
    connect?: AlcanceFuncionalidadesWhereUniqueInput
  }

  export type RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: RequerimientosTecnicosCreateOrConnectWithoutCotizacionInput
    connect?: RequerimientosTecnicosWhereUniqueInput
  }

  export type IntegracionesCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: IntegracionesCreateOrConnectWithoutCotizacionInput
    connect?: IntegracionesWhereUniqueInput
  }

  export type DisenoUXCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: DisenoUXCreateOrConnectWithoutCotizacionInput
    connect?: DisenoUXWhereUniqueInput
  }

  export type PresupuestoTiemposCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: PresupuestoTiemposCreateOrConnectWithoutCotizacionInput
    connect?: PresupuestoTiemposWhereUniqueInput
  }

  export type ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: ObjetivosVisionCreateOrConnectWithoutCotizacionInput
    connect?: ObjetivosVisionWhereUniqueInput
  }

  export type UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: UsuariosRolesCreateOrConnectWithoutCotizacionInput
    connect?: UsuariosRolesWhereUniqueInput
  }

  export type AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: AlcanceFuncionalidadesCreateOrConnectWithoutCotizacionInput
    connect?: AlcanceFuncionalidadesWhereUniqueInput
  }

  export type RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: RequerimientosTecnicosCreateOrConnectWithoutCotizacionInput
    connect?: RequerimientosTecnicosWhereUniqueInput
  }

  export type IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: IntegracionesCreateOrConnectWithoutCotizacionInput
    connect?: IntegracionesWhereUniqueInput
  }

  export type DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: DisenoUXCreateOrConnectWithoutCotizacionInput
    connect?: DisenoUXWhereUniqueInput
  }

  export type PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput = {
    create?: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: PresupuestoTiemposCreateOrConnectWithoutCotizacionInput
    connect?: PresupuestoTiemposWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumEstadoCotizacionFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCotizacion
  }

  export type ObjetivosVisionUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: ObjetivosVisionCreateOrConnectWithoutCotizacionInput
    upsert?: ObjetivosVisionUpsertWithoutCotizacionInput
    disconnect?: ObjetivosVisionWhereInput | boolean
    delete?: ObjetivosVisionWhereInput | boolean
    connect?: ObjetivosVisionWhereUniqueInput
    update?: XOR<XOR<ObjetivosVisionUpdateToOneWithWhereWithoutCotizacionInput, ObjetivosVisionUpdateWithoutCotizacionInput>, ObjetivosVisionUncheckedUpdateWithoutCotizacionInput>
  }

  export type UsuariosRolesUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: UsuariosRolesCreateOrConnectWithoutCotizacionInput
    upsert?: UsuariosRolesUpsertWithoutCotizacionInput
    disconnect?: UsuariosRolesWhereInput | boolean
    delete?: UsuariosRolesWhereInput | boolean
    connect?: UsuariosRolesWhereUniqueInput
    update?: XOR<XOR<UsuariosRolesUpdateToOneWithWhereWithoutCotizacionInput, UsuariosRolesUpdateWithoutCotizacionInput>, UsuariosRolesUncheckedUpdateWithoutCotizacionInput>
  }

  export type AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: AlcanceFuncionalidadesCreateOrConnectWithoutCotizacionInput
    upsert?: AlcanceFuncionalidadesUpsertWithoutCotizacionInput
    disconnect?: AlcanceFuncionalidadesWhereInput | boolean
    delete?: AlcanceFuncionalidadesWhereInput | boolean
    connect?: AlcanceFuncionalidadesWhereUniqueInput
    update?: XOR<XOR<AlcanceFuncionalidadesUpdateToOneWithWhereWithoutCotizacionInput, AlcanceFuncionalidadesUpdateWithoutCotizacionInput>, AlcanceFuncionalidadesUncheckedUpdateWithoutCotizacionInput>
  }

  export type RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: RequerimientosTecnicosCreateOrConnectWithoutCotizacionInput
    upsert?: RequerimientosTecnicosUpsertWithoutCotizacionInput
    disconnect?: RequerimientosTecnicosWhereInput | boolean
    delete?: RequerimientosTecnicosWhereInput | boolean
    connect?: RequerimientosTecnicosWhereUniqueInput
    update?: XOR<XOR<RequerimientosTecnicosUpdateToOneWithWhereWithoutCotizacionInput, RequerimientosTecnicosUpdateWithoutCotizacionInput>, RequerimientosTecnicosUncheckedUpdateWithoutCotizacionInput>
  }

  export type IntegracionesUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: IntegracionesCreateOrConnectWithoutCotizacionInput
    upsert?: IntegracionesUpsertWithoutCotizacionInput
    disconnect?: IntegracionesWhereInput | boolean
    delete?: IntegracionesWhereInput | boolean
    connect?: IntegracionesWhereUniqueInput
    update?: XOR<XOR<IntegracionesUpdateToOneWithWhereWithoutCotizacionInput, IntegracionesUpdateWithoutCotizacionInput>, IntegracionesUncheckedUpdateWithoutCotizacionInput>
  }

  export type DisenoUXUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: DisenoUXCreateOrConnectWithoutCotizacionInput
    upsert?: DisenoUXUpsertWithoutCotizacionInput
    disconnect?: DisenoUXWhereInput | boolean
    delete?: DisenoUXWhereInput | boolean
    connect?: DisenoUXWhereUniqueInput
    update?: XOR<XOR<DisenoUXUpdateToOneWithWhereWithoutCotizacionInput, DisenoUXUpdateWithoutCotizacionInput>, DisenoUXUncheckedUpdateWithoutCotizacionInput>
  }

  export type PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: PresupuestoTiemposCreateOrConnectWithoutCotizacionInput
    upsert?: PresupuestoTiemposUpsertWithoutCotizacionInput
    disconnect?: PresupuestoTiemposWhereInput | boolean
    delete?: PresupuestoTiemposWhereInput | boolean
    connect?: PresupuestoTiemposWhereUniqueInput
    update?: XOR<XOR<PresupuestoTiemposUpdateToOneWithWhereWithoutCotizacionInput, PresupuestoTiemposUpdateWithoutCotizacionInput>, PresupuestoTiemposUncheckedUpdateWithoutCotizacionInput>
  }

  export type ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: ObjetivosVisionCreateOrConnectWithoutCotizacionInput
    upsert?: ObjetivosVisionUpsertWithoutCotizacionInput
    disconnect?: ObjetivosVisionWhereInput | boolean
    delete?: ObjetivosVisionWhereInput | boolean
    connect?: ObjetivosVisionWhereUniqueInput
    update?: XOR<XOR<ObjetivosVisionUpdateToOneWithWhereWithoutCotizacionInput, ObjetivosVisionUpdateWithoutCotizacionInput>, ObjetivosVisionUncheckedUpdateWithoutCotizacionInput>
  }

  export type UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: UsuariosRolesCreateOrConnectWithoutCotizacionInput
    upsert?: UsuariosRolesUpsertWithoutCotizacionInput
    disconnect?: UsuariosRolesWhereInput | boolean
    delete?: UsuariosRolesWhereInput | boolean
    connect?: UsuariosRolesWhereUniqueInput
    update?: XOR<XOR<UsuariosRolesUpdateToOneWithWhereWithoutCotizacionInput, UsuariosRolesUpdateWithoutCotizacionInput>, UsuariosRolesUncheckedUpdateWithoutCotizacionInput>
  }

  export type AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: AlcanceFuncionalidadesCreateOrConnectWithoutCotizacionInput
    upsert?: AlcanceFuncionalidadesUpsertWithoutCotizacionInput
    disconnect?: AlcanceFuncionalidadesWhereInput | boolean
    delete?: AlcanceFuncionalidadesWhereInput | boolean
    connect?: AlcanceFuncionalidadesWhereUniqueInput
    update?: XOR<XOR<AlcanceFuncionalidadesUpdateToOneWithWhereWithoutCotizacionInput, AlcanceFuncionalidadesUpdateWithoutCotizacionInput>, AlcanceFuncionalidadesUncheckedUpdateWithoutCotizacionInput>
  }

  export type RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: RequerimientosTecnicosCreateOrConnectWithoutCotizacionInput
    upsert?: RequerimientosTecnicosUpsertWithoutCotizacionInput
    disconnect?: RequerimientosTecnicosWhereInput | boolean
    delete?: RequerimientosTecnicosWhereInput | boolean
    connect?: RequerimientosTecnicosWhereUniqueInput
    update?: XOR<XOR<RequerimientosTecnicosUpdateToOneWithWhereWithoutCotizacionInput, RequerimientosTecnicosUpdateWithoutCotizacionInput>, RequerimientosTecnicosUncheckedUpdateWithoutCotizacionInput>
  }

  export type IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: IntegracionesCreateOrConnectWithoutCotizacionInput
    upsert?: IntegracionesUpsertWithoutCotizacionInput
    disconnect?: IntegracionesWhereInput | boolean
    delete?: IntegracionesWhereInput | boolean
    connect?: IntegracionesWhereUniqueInput
    update?: XOR<XOR<IntegracionesUpdateToOneWithWhereWithoutCotizacionInput, IntegracionesUpdateWithoutCotizacionInput>, IntegracionesUncheckedUpdateWithoutCotizacionInput>
  }

  export type DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: DisenoUXCreateOrConnectWithoutCotizacionInput
    upsert?: DisenoUXUpsertWithoutCotizacionInput
    disconnect?: DisenoUXWhereInput | boolean
    delete?: DisenoUXWhereInput | boolean
    connect?: DisenoUXWhereUniqueInput
    update?: XOR<XOR<DisenoUXUpdateToOneWithWhereWithoutCotizacionInput, DisenoUXUpdateWithoutCotizacionInput>, DisenoUXUncheckedUpdateWithoutCotizacionInput>
  }

  export type PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput = {
    create?: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
    connectOrCreate?: PresupuestoTiemposCreateOrConnectWithoutCotizacionInput
    upsert?: PresupuestoTiemposUpsertWithoutCotizacionInput
    disconnect?: PresupuestoTiemposWhereInput | boolean
    delete?: PresupuestoTiemposWhereInput | boolean
    connect?: PresupuestoTiemposWhereUniqueInput
    update?: XOR<XOR<PresupuestoTiemposUpdateToOneWithWhereWithoutCotizacionInput, PresupuestoTiemposUpdateWithoutCotizacionInput>, PresupuestoTiemposUncheckedUpdateWithoutCotizacionInput>
  }

  export type CotizacionCreateNestedOneWithoutObjetivosVisionInput = {
    create?: XOR<CotizacionCreateWithoutObjetivosVisionInput, CotizacionUncheckedCreateWithoutObjetivosVisionInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutObjetivosVisionInput
    connect?: CotizacionWhereUniqueInput
  }

  export type CotizacionUpdateOneRequiredWithoutObjetivosVisionNestedInput = {
    create?: XOR<CotizacionCreateWithoutObjetivosVisionInput, CotizacionUncheckedCreateWithoutObjetivosVisionInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutObjetivosVisionInput
    upsert?: CotizacionUpsertWithoutObjetivosVisionInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutObjetivosVisionInput, CotizacionUpdateWithoutObjetivosVisionInput>, CotizacionUncheckedUpdateWithoutObjetivosVisionInput>
  }

  export type CotizacionCreateNestedOneWithoutUsuariosRolesInput = {
    create?: XOR<CotizacionCreateWithoutUsuariosRolesInput, CotizacionUncheckedCreateWithoutUsuariosRolesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutUsuariosRolesInput
    connect?: CotizacionWhereUniqueInput
  }

  export type NullableEnumEscalaUsuariosFieldUpdateOperationsInput = {
    set?: $Enums.EscalaUsuarios | null
  }

  export type CotizacionUpdateOneRequiredWithoutUsuariosRolesNestedInput = {
    create?: XOR<CotizacionCreateWithoutUsuariosRolesInput, CotizacionUncheckedCreateWithoutUsuariosRolesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutUsuariosRolesInput
    upsert?: CotizacionUpsertWithoutUsuariosRolesInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutUsuariosRolesInput, CotizacionUpdateWithoutUsuariosRolesInput>, CotizacionUncheckedUpdateWithoutUsuariosRolesInput>
  }

  export type CotizacionCreateNestedOneWithoutAlcanceFuncionalidadesInput = {
    create?: XOR<CotizacionCreateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedCreateWithoutAlcanceFuncionalidadesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutAlcanceFuncionalidadesInput
    connect?: CotizacionWhereUniqueInput
  }

  export type CotizacionUpdateOneRequiredWithoutAlcanceFuncionalidadesNestedInput = {
    create?: XOR<CotizacionCreateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedCreateWithoutAlcanceFuncionalidadesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutAlcanceFuncionalidadesInput
    upsert?: CotizacionUpsertWithoutAlcanceFuncionalidadesInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutAlcanceFuncionalidadesInput, CotizacionUpdateWithoutAlcanceFuncionalidadesInput>, CotizacionUncheckedUpdateWithoutAlcanceFuncionalidadesInput>
  }

  export type RequerimientosTecnicosCreateplataformasInput = {
    set: $Enums.Plataforma[]
  }

  export type CotizacionCreateNestedOneWithoutRequerimientosTecnicosInput = {
    create?: XOR<CotizacionCreateWithoutRequerimientosTecnicosInput, CotizacionUncheckedCreateWithoutRequerimientosTecnicosInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutRequerimientosTecnicosInput
    connect?: CotizacionWhereUniqueInput
  }

  export type RequerimientosTecnicosUpdateplataformasInput = {
    set?: $Enums.Plataforma[]
    push?: $Enums.Plataforma | $Enums.Plataforma[]
  }

  export type CotizacionUpdateOneRequiredWithoutRequerimientosTecnicosNestedInput = {
    create?: XOR<CotizacionCreateWithoutRequerimientosTecnicosInput, CotizacionUncheckedCreateWithoutRequerimientosTecnicosInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutRequerimientosTecnicosInput
    upsert?: CotizacionUpsertWithoutRequerimientosTecnicosInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutRequerimientosTecnicosInput, CotizacionUpdateWithoutRequerimientosTecnicosInput>, CotizacionUncheckedUpdateWithoutRequerimientosTecnicosInput>
  }

  export type CotizacionCreateNestedOneWithoutIntegracionesInput = {
    create?: XOR<CotizacionCreateWithoutIntegracionesInput, CotizacionUncheckedCreateWithoutIntegracionesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutIntegracionesInput
    connect?: CotizacionWhereUniqueInput
  }

  export type CotizacionUpdateOneRequiredWithoutIntegracionesNestedInput = {
    create?: XOR<CotizacionCreateWithoutIntegracionesInput, CotizacionUncheckedCreateWithoutIntegracionesInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutIntegracionesInput
    upsert?: CotizacionUpsertWithoutIntegracionesInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutIntegracionesInput, CotizacionUpdateWithoutIntegracionesInput>, CotizacionUncheckedUpdateWithoutIntegracionesInput>
  }

  export type CotizacionCreateNestedOneWithoutDisenoUXInput = {
    create?: XOR<CotizacionCreateWithoutDisenoUXInput, CotizacionUncheckedCreateWithoutDisenoUXInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutDisenoUXInput
    connect?: CotizacionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CotizacionUpdateOneRequiredWithoutDisenoUXNestedInput = {
    create?: XOR<CotizacionCreateWithoutDisenoUXInput, CotizacionUncheckedCreateWithoutDisenoUXInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutDisenoUXInput
    upsert?: CotizacionUpsertWithoutDisenoUXInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutDisenoUXInput, CotizacionUpdateWithoutDisenoUXInput>, CotizacionUncheckedUpdateWithoutDisenoUXInput>
  }

  export type CotizacionCreateNestedOneWithoutPresupuestoTiemposInput = {
    create?: XOR<CotizacionCreateWithoutPresupuestoTiemposInput, CotizacionUncheckedCreateWithoutPresupuestoTiemposInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutPresupuestoTiemposInput
    connect?: CotizacionWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumTipoMonedaFieldUpdateOperationsInput = {
    set?: $Enums.TipoMoneda | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CotizacionUpdateOneRequiredWithoutPresupuestoTiemposNestedInput = {
    create?: XOR<CotizacionCreateWithoutPresupuestoTiemposInput, CotizacionUncheckedCreateWithoutPresupuestoTiemposInput>
    connectOrCreate?: CotizacionCreateOrConnectWithoutPresupuestoTiemposInput
    upsert?: CotizacionUpsertWithoutPresupuestoTiemposInput
    connect?: CotizacionWhereUniqueInput
    update?: XOR<XOR<CotizacionUpdateToOneWithWhereWithoutPresupuestoTiemposInput, CotizacionUpdateWithoutPresupuestoTiemposInput>, CotizacionUncheckedUpdateWithoutPresupuestoTiemposInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumEstadoCotizacionFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCotizacion | EnumEstadoCotizacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCotizacionFilter<$PrismaModel> | $Enums.EstadoCotizacion
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumEstadoCotizacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoCotizacion | EnumEstadoCotizacionFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoCotizacion[] | ListEnumEstadoCotizacionFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoCotizacionWithAggregatesFilter<$PrismaModel> | $Enums.EstadoCotizacion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoCotizacionFilter<$PrismaModel>
    _max?: NestedEnumEstadoCotizacionFilter<$PrismaModel>
  }

  export type NestedEnumEscalaUsuariosNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EscalaUsuarios | EnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel> | $Enums.EscalaUsuarios | null
  }

  export type NestedEnumEscalaUsuariosNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscalaUsuarios | EnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscalaUsuarios[] | ListEnumEscalaUsuariosFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscalaUsuariosNullableWithAggregatesFilter<$PrismaModel> | $Enums.EscalaUsuarios | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel>
    _max?: NestedEnumEscalaUsuariosNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumTipoMonedaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMoneda | EnumTipoMonedaFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoMonedaNullableFilter<$PrismaModel> | $Enums.TipoMoneda | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoMonedaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoMoneda | EnumTipoMonedaFieldRefInput<$PrismaModel> | null
    in?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TipoMoneda[] | ListEnumTipoMonedaFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTipoMonedaNullableWithAggregatesFilter<$PrismaModel> | $Enums.TipoMoneda | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTipoMonedaNullableFilter<$PrismaModel>
    _max?: NestedEnumTipoMonedaNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ObjetivosVisionCreateWithoutCotizacionInput = {
    id?: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual?: string | null
    competenciaReferencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjetivosVisionUncheckedCreateWithoutCotizacionInput = {
    id?: string
    problemaPrincipal: string
    objetivoPrincipal: string
    procesoActual?: string | null
    competenciaReferencia?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ObjetivosVisionCreateOrConnectWithoutCotizacionInput = {
    where: ObjetivosVisionWhereUniqueInput
    create: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
  }

  export type UsuariosRolesCreateWithoutCotizacionInput = {
    id?: string
    usuariosFinales: string
    tiposRoles?: string | null
    descripcionRoles?: string | null
    cantidadUsuarios?: string | null
    escalaUsuarios?: $Enums.EscalaUsuarios | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosRolesUncheckedCreateWithoutCotizacionInput = {
    id?: string
    usuariosFinales: string
    tiposRoles?: string | null
    descripcionRoles?: string | null
    cantidadUsuarios?: string | null
    escalaUsuarios?: $Enums.EscalaUsuarios | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuariosRolesCreateOrConnectWithoutCotizacionInput = {
    where: UsuariosRolesWhereUniqueInput
    create: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
  }

  export type AlcanceFuncionalidadesCreateWithoutCotizacionInput = {
    id?: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1?: string | null
    funcionalidadesFase2?: string | null
    fueraDeAlcance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput = {
    id?: string
    funcionalidadesClave: string
    flujosPrincipales: string
    funcionalidadesFase1?: string | null
    funcionalidadesFase2?: string | null
    fueraDeAlcance?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlcanceFuncionalidadesCreateOrConnectWithoutCotizacionInput = {
    where: AlcanceFuncionalidadesWhereUniqueInput
    create: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
  }

  export type RequerimientosTecnicosCreateWithoutCotizacionInput = {
    id?: string
    plataformas?: RequerimientosTecnicosCreateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: string | null
    hosting?: string | null
    tecnologias?: string | null
    requisitoRendimiento?: string | null
    requisitoSeguridad?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput = {
    id?: string
    plataformas?: RequerimientosTecnicosCreateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: string | null
    hosting?: string | null
    tecnologias?: string | null
    requisitoRendimiento?: string | null
    requisitoSeguridad?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequerimientosTecnicosCreateOrConnectWithoutCotizacionInput = {
    where: RequerimientosTecnicosWhereUniqueInput
    create: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
  }

  export type IntegracionesCreateWithoutCotizacionInput = {
    id?: string
    sistemasExternos?: string | null
    apisTerceros?: string | null
    migracionDatos?: string | null
    reportes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegracionesUncheckedCreateWithoutCotizacionInput = {
    id?: string
    sistemasExternos?: string | null
    apisTerceros?: string | null
    migracionDatos?: string | null
    reportes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegracionesCreateOrConnectWithoutCotizacionInput = {
    where: IntegracionesWhereUniqueInput
    create: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
  }

  export type DisenoUXCreateWithoutCotizacionInput = {
    id?: string
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: string | null
    tieneGuiaEstilo?: boolean
    guiaEstilo?: string | null
    requiereDiseno?: boolean
    entregables?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisenoUXUncheckedCreateWithoutCotizacionInput = {
    id?: string
    tieneDisenoVisual?: boolean
    disenoVisualUrl?: string | null
    tieneGuiaEstilo?: boolean
    guiaEstilo?: string | null
    requiereDiseno?: boolean
    entregables?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisenoUXCreateOrConnectWithoutCotizacionInput = {
    where: DisenoUXWhereUniqueInput
    create: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
  }

  export type PresupuestoTiemposCreateWithoutCotizacionInput = {
    id?: string
    tienePresupuesto?: boolean
    presupuestoMin?: Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: Decimal | DecimalJsLike | number | string | null
    moneda?: $Enums.TipoMoneda | null
    tieneFechaLimite?: boolean
    fechaLimite?: Date | string | null
    razonFechaLimite?: string | null
    planMantenimiento?: string | null
    nombreDecidor?: string | null
    cargoDecidor?: string | null
    contactoDecidor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoTiemposUncheckedCreateWithoutCotizacionInput = {
    id?: string
    tienePresupuesto?: boolean
    presupuestoMin?: Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: Decimal | DecimalJsLike | number | string | null
    moneda?: $Enums.TipoMoneda | null
    tieneFechaLimite?: boolean
    fechaLimite?: Date | string | null
    razonFechaLimite?: string | null
    planMantenimiento?: string | null
    nombreDecidor?: string | null
    cargoDecidor?: string | null
    contactoDecidor?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PresupuestoTiemposCreateOrConnectWithoutCotizacionInput = {
    where: PresupuestoTiemposWhereUniqueInput
    create: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
  }

  export type ObjetivosVisionUpsertWithoutCotizacionInput = {
    update: XOR<ObjetivosVisionUpdateWithoutCotizacionInput, ObjetivosVisionUncheckedUpdateWithoutCotizacionInput>
    create: XOR<ObjetivosVisionCreateWithoutCotizacionInput, ObjetivosVisionUncheckedCreateWithoutCotizacionInput>
    where?: ObjetivosVisionWhereInput
  }

  export type ObjetivosVisionUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: ObjetivosVisionWhereInput
    data: XOR<ObjetivosVisionUpdateWithoutCotizacionInput, ObjetivosVisionUncheckedUpdateWithoutCotizacionInput>
  }

  export type ObjetivosVisionUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ObjetivosVisionUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemaPrincipal?: StringFieldUpdateOperationsInput | string
    objetivoPrincipal?: StringFieldUpdateOperationsInput | string
    procesoActual?: NullableStringFieldUpdateOperationsInput | string | null
    competenciaReferencia?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosRolesUpsertWithoutCotizacionInput = {
    update: XOR<UsuariosRolesUpdateWithoutCotizacionInput, UsuariosRolesUncheckedUpdateWithoutCotizacionInput>
    create: XOR<UsuariosRolesCreateWithoutCotizacionInput, UsuariosRolesUncheckedCreateWithoutCotizacionInput>
    where?: UsuariosRolesWhereInput
  }

  export type UsuariosRolesUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: UsuariosRolesWhereInput
    data: XOR<UsuariosRolesUpdateWithoutCotizacionInput, UsuariosRolesUncheckedUpdateWithoutCotizacionInput>
  }

  export type UsuariosRolesUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuariosRolesUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuariosFinales?: StringFieldUpdateOperationsInput | string
    tiposRoles?: NullableStringFieldUpdateOperationsInput | string | null
    descripcionRoles?: NullableStringFieldUpdateOperationsInput | string | null
    cantidadUsuarios?: NullableStringFieldUpdateOperationsInput | string | null
    escalaUsuarios?: NullableEnumEscalaUsuariosFieldUpdateOperationsInput | $Enums.EscalaUsuarios | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlcanceFuncionalidadesUpsertWithoutCotizacionInput = {
    update: XOR<AlcanceFuncionalidadesUpdateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedUpdateWithoutCotizacionInput>
    create: XOR<AlcanceFuncionalidadesCreateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedCreateWithoutCotizacionInput>
    where?: AlcanceFuncionalidadesWhereInput
  }

  export type AlcanceFuncionalidadesUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: AlcanceFuncionalidadesWhereInput
    data: XOR<AlcanceFuncionalidadesUpdateWithoutCotizacionInput, AlcanceFuncionalidadesUncheckedUpdateWithoutCotizacionInput>
  }

  export type AlcanceFuncionalidadesUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlcanceFuncionalidadesUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    funcionalidadesClave?: StringFieldUpdateOperationsInput | string
    flujosPrincipales?: StringFieldUpdateOperationsInput | string
    funcionalidadesFase1?: NullableStringFieldUpdateOperationsInput | string | null
    funcionalidadesFase2?: NullableStringFieldUpdateOperationsInput | string | null
    fueraDeAlcance?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequerimientosTecnicosUpsertWithoutCotizacionInput = {
    update: XOR<RequerimientosTecnicosUpdateWithoutCotizacionInput, RequerimientosTecnicosUncheckedUpdateWithoutCotizacionInput>
    create: XOR<RequerimientosTecnicosCreateWithoutCotizacionInput, RequerimientosTecnicosUncheckedCreateWithoutCotizacionInput>
    where?: RequerimientosTecnicosWhereInput
  }

  export type RequerimientosTecnicosUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: RequerimientosTecnicosWhereInput
    data: XOR<RequerimientosTecnicosUpdateWithoutCotizacionInput, RequerimientosTecnicosUncheckedUpdateWithoutCotizacionInput>
  }

  export type RequerimientosTecnicosUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequerimientosTecnicosUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    plataformas?: RequerimientosTecnicosUpdateplataformasInput | $Enums.Plataforma[]
    detallesPlataforma?: NullableStringFieldUpdateOperationsInput | string | null
    hosting?: NullableStringFieldUpdateOperationsInput | string | null
    tecnologias?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoRendimiento?: NullableStringFieldUpdateOperationsInput | string | null
    requisitoSeguridad?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegracionesUpsertWithoutCotizacionInput = {
    update: XOR<IntegracionesUpdateWithoutCotizacionInput, IntegracionesUncheckedUpdateWithoutCotizacionInput>
    create: XOR<IntegracionesCreateWithoutCotizacionInput, IntegracionesUncheckedCreateWithoutCotizacionInput>
    where?: IntegracionesWhereInput
  }

  export type IntegracionesUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: IntegracionesWhereInput
    data: XOR<IntegracionesUpdateWithoutCotizacionInput, IntegracionesUncheckedUpdateWithoutCotizacionInput>
  }

  export type IntegracionesUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegracionesUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sistemasExternos?: NullableStringFieldUpdateOperationsInput | string | null
    apisTerceros?: NullableStringFieldUpdateOperationsInput | string | null
    migracionDatos?: NullableStringFieldUpdateOperationsInput | string | null
    reportes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisenoUXUpsertWithoutCotizacionInput = {
    update: XOR<DisenoUXUpdateWithoutCotizacionInput, DisenoUXUncheckedUpdateWithoutCotizacionInput>
    create: XOR<DisenoUXCreateWithoutCotizacionInput, DisenoUXUncheckedCreateWithoutCotizacionInput>
    where?: DisenoUXWhereInput
  }

  export type DisenoUXUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: DisenoUXWhereInput
    data: XOR<DisenoUXUpdateWithoutCotizacionInput, DisenoUXUncheckedUpdateWithoutCotizacionInput>
  }

  export type DisenoUXUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisenoUXUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tieneDisenoVisual?: BoolFieldUpdateOperationsInput | boolean
    disenoVisualUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGuiaEstilo?: BoolFieldUpdateOperationsInput | boolean
    guiaEstilo?: NullableStringFieldUpdateOperationsInput | string | null
    requiereDiseno?: BoolFieldUpdateOperationsInput | boolean
    entregables?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoTiemposUpsertWithoutCotizacionInput = {
    update: XOR<PresupuestoTiemposUpdateWithoutCotizacionInput, PresupuestoTiemposUncheckedUpdateWithoutCotizacionInput>
    create: XOR<PresupuestoTiemposCreateWithoutCotizacionInput, PresupuestoTiemposUncheckedCreateWithoutCotizacionInput>
    where?: PresupuestoTiemposWhereInput
  }

  export type PresupuestoTiemposUpdateToOneWithWhereWithoutCotizacionInput = {
    where?: PresupuestoTiemposWhereInput
    data: XOR<PresupuestoTiemposUpdateWithoutCotizacionInput, PresupuestoTiemposUncheckedUpdateWithoutCotizacionInput>
  }

  export type PresupuestoTiemposUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresupuestoTiemposUncheckedUpdateWithoutCotizacionInput = {
    id?: StringFieldUpdateOperationsInput | string
    tienePresupuesto?: BoolFieldUpdateOperationsInput | boolean
    presupuestoMin?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    presupuestoMax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    moneda?: NullableEnumTipoMonedaFieldUpdateOperationsInput | $Enums.TipoMoneda | null
    tieneFechaLimite?: BoolFieldUpdateOperationsInput | boolean
    fechaLimite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    razonFechaLimite?: NullableStringFieldUpdateOperationsInput | string | null
    planMantenimiento?: NullableStringFieldUpdateOperationsInput | string | null
    nombreDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    cargoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    contactoDecidor?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CotizacionCreateWithoutObjetivosVisionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutObjetivosVisionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutObjetivosVisionInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutObjetivosVisionInput, CotizacionUncheckedCreateWithoutObjetivosVisionInput>
  }

  export type CotizacionUpsertWithoutObjetivosVisionInput = {
    update: XOR<CotizacionUpdateWithoutObjetivosVisionInput, CotizacionUncheckedUpdateWithoutObjetivosVisionInput>
    create: XOR<CotizacionCreateWithoutObjetivosVisionInput, CotizacionUncheckedCreateWithoutObjetivosVisionInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutObjetivosVisionInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutObjetivosVisionInput, CotizacionUncheckedUpdateWithoutObjetivosVisionInput>
  }

  export type CotizacionUpdateWithoutObjetivosVisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutObjetivosVisionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutUsuariosRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutUsuariosRolesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutUsuariosRolesInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutUsuariosRolesInput, CotizacionUncheckedCreateWithoutUsuariosRolesInput>
  }

  export type CotizacionUpsertWithoutUsuariosRolesInput = {
    update: XOR<CotizacionUpdateWithoutUsuariosRolesInput, CotizacionUncheckedUpdateWithoutUsuariosRolesInput>
    create: XOR<CotizacionCreateWithoutUsuariosRolesInput, CotizacionUncheckedCreateWithoutUsuariosRolesInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutUsuariosRolesInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutUsuariosRolesInput, CotizacionUncheckedUpdateWithoutUsuariosRolesInput>
  }

  export type CotizacionUpdateWithoutUsuariosRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutUsuariosRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutAlcanceFuncionalidadesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutAlcanceFuncionalidadesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutAlcanceFuncionalidadesInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedCreateWithoutAlcanceFuncionalidadesInput>
  }

  export type CotizacionUpsertWithoutAlcanceFuncionalidadesInput = {
    update: XOR<CotizacionUpdateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedUpdateWithoutAlcanceFuncionalidadesInput>
    create: XOR<CotizacionCreateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedCreateWithoutAlcanceFuncionalidadesInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutAlcanceFuncionalidadesInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutAlcanceFuncionalidadesInput, CotizacionUncheckedUpdateWithoutAlcanceFuncionalidadesInput>
  }

  export type CotizacionUpdateWithoutAlcanceFuncionalidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutAlcanceFuncionalidadesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutRequerimientosTecnicosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutRequerimientosTecnicosInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutRequerimientosTecnicosInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutRequerimientosTecnicosInput, CotizacionUncheckedCreateWithoutRequerimientosTecnicosInput>
  }

  export type CotizacionUpsertWithoutRequerimientosTecnicosInput = {
    update: XOR<CotizacionUpdateWithoutRequerimientosTecnicosInput, CotizacionUncheckedUpdateWithoutRequerimientosTecnicosInput>
    create: XOR<CotizacionCreateWithoutRequerimientosTecnicosInput, CotizacionUncheckedCreateWithoutRequerimientosTecnicosInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutRequerimientosTecnicosInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutRequerimientosTecnicosInput, CotizacionUncheckedUpdateWithoutRequerimientosTecnicosInput>
  }

  export type CotizacionUpdateWithoutRequerimientosTecnicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutRequerimientosTecnicosInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutIntegracionesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutIntegracionesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutIntegracionesInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutIntegracionesInput, CotizacionUncheckedCreateWithoutIntegracionesInput>
  }

  export type CotizacionUpsertWithoutIntegracionesInput = {
    update: XOR<CotizacionUpdateWithoutIntegracionesInput, CotizacionUncheckedUpdateWithoutIntegracionesInput>
    create: XOR<CotizacionCreateWithoutIntegracionesInput, CotizacionUncheckedCreateWithoutIntegracionesInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutIntegracionesInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutIntegracionesInput, CotizacionUncheckedUpdateWithoutIntegracionesInput>
  }

  export type CotizacionUpdateWithoutIntegracionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutIntegracionesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutDisenoUXInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutDisenoUXInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutDisenoUXInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutDisenoUXInput, CotizacionUncheckedCreateWithoutDisenoUXInput>
  }

  export type CotizacionUpsertWithoutDisenoUXInput = {
    update: XOR<CotizacionUpdateWithoutDisenoUXInput, CotizacionUncheckedUpdateWithoutDisenoUXInput>
    create: XOR<CotizacionCreateWithoutDisenoUXInput, CotizacionUncheckedCreateWithoutDisenoUXInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutDisenoUXInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutDisenoUXInput, CotizacionUncheckedUpdateWithoutDisenoUXInput>
  }

  export type CotizacionUpdateWithoutDisenoUXInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutDisenoUXInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    presupuestoTiempos?: PresupuestoTiemposUncheckedUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionCreateWithoutPresupuestoTiemposInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionUncheckedCreateWithoutPresupuestoTiemposInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    nombreCliente: string
    emailCliente: string
    empresaCliente?: string | null
    telefonoCliente?: string | null
    estado?: $Enums.EstadoCotizacion
    notasInternas?: string | null
    objetivosVision?: ObjetivosVisionUncheckedCreateNestedOneWithoutCotizacionInput
    usuariosRoles?: UsuariosRolesUncheckedCreateNestedOneWithoutCotizacionInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedCreateNestedOneWithoutCotizacionInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedCreateNestedOneWithoutCotizacionInput
    integraciones?: IntegracionesUncheckedCreateNestedOneWithoutCotizacionInput
    disenoUX?: DisenoUXUncheckedCreateNestedOneWithoutCotizacionInput
  }

  export type CotizacionCreateOrConnectWithoutPresupuestoTiemposInput = {
    where: CotizacionWhereUniqueInput
    create: XOR<CotizacionCreateWithoutPresupuestoTiemposInput, CotizacionUncheckedCreateWithoutPresupuestoTiemposInput>
  }

  export type CotizacionUpsertWithoutPresupuestoTiemposInput = {
    update: XOR<CotizacionUpdateWithoutPresupuestoTiemposInput, CotizacionUncheckedUpdateWithoutPresupuestoTiemposInput>
    create: XOR<CotizacionCreateWithoutPresupuestoTiemposInput, CotizacionUncheckedCreateWithoutPresupuestoTiemposInput>
    where?: CotizacionWhereInput
  }

  export type CotizacionUpdateToOneWithWhereWithoutPresupuestoTiemposInput = {
    where?: CotizacionWhereInput
    data: XOR<CotizacionUpdateWithoutPresupuestoTiemposInput, CotizacionUncheckedUpdateWithoutPresupuestoTiemposInput>
  }

  export type CotizacionUpdateWithoutPresupuestoTiemposInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUpdateOneWithoutCotizacionNestedInput
  }

  export type CotizacionUncheckedUpdateWithoutPresupuestoTiemposInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nombreCliente?: StringFieldUpdateOperationsInput | string
    emailCliente?: StringFieldUpdateOperationsInput | string
    empresaCliente?: NullableStringFieldUpdateOperationsInput | string | null
    telefonoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: EnumEstadoCotizacionFieldUpdateOperationsInput | $Enums.EstadoCotizacion
    notasInternas?: NullableStringFieldUpdateOperationsInput | string | null
    objetivosVision?: ObjetivosVisionUncheckedUpdateOneWithoutCotizacionNestedInput
    usuariosRoles?: UsuariosRolesUncheckedUpdateOneWithoutCotizacionNestedInput
    alcanceFuncionalidades?: AlcanceFuncionalidadesUncheckedUpdateOneWithoutCotizacionNestedInput
    requerimientosTecnicos?: RequerimientosTecnicosUncheckedUpdateOneWithoutCotizacionNestedInput
    integraciones?: IntegracionesUncheckedUpdateOneWithoutCotizacionNestedInput
    disenoUX?: DisenoUXUncheckedUpdateOneWithoutCotizacionNestedInput
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}