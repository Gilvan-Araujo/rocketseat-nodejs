
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
 * Model Pet
 * 
 */
export type Pet = $Result.DefaultSelection<Prisma.$PetPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Org
 * 
 */
export type Org = $Result.DefaultSelection<Prisma.$OrgPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Pets
 * const pets = await prisma.pet.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Pets
   * const pets = await prisma.pet.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.pet`: Exposes CRUD operations for the **Pet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pets
    * const pets = await prisma.pet.findMany()
    * ```
    */
  get pet(): Prisma.PetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.org`: Exposes CRUD operations for the **Org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgs
    * const orgs = await prisma.org.findMany()
    * ```
    */
  get org(): Prisma.OrgDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Pet: 'Pet',
    Photo: 'Photo',
    Org: 'Org'
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
      modelProps: "pet" | "photo" | "org"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Pet: {
        payload: Prisma.$PetPayload<ExtArgs>
        fields: Prisma.PetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findFirst: {
            args: Prisma.PetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          findMany: {
            args: Prisma.PetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          create: {
            args: Prisma.PetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          createMany: {
            args: Prisma.PetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          delete: {
            args: Prisma.PetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          update: {
            args: Prisma.PetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          deleteMany: {
            args: Prisma.PetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>[]
          }
          upsert: {
            args: Prisma.PetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetPayload>
          }
          aggregate: {
            args: Prisma.PetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePet>
          }
          groupBy: {
            args: Prisma.PetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetCountArgs<ExtArgs>
            result: $Utils.Optional<PetCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Org: {
        payload: Prisma.$OrgPayload<ExtArgs>
        fields: Prisma.OrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findFirst: {
            args: Prisma.OrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findMany: {
            args: Prisma.OrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          create: {
            args: Prisma.OrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          createMany: {
            args: Prisma.OrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          delete: {
            args: Prisma.OrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          update: {
            args: Prisma.OrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          deleteMany: {
            args: Prisma.OrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          upsert: {
            args: Prisma.OrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          aggregate: {
            args: Prisma.OrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrg>
          }
          groupBy: {
            args: Prisma.OrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgCountArgs<ExtArgs>
            result: $Utils.Optional<OrgCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    pet?: PetOmit
    photo?: PhotoOmit
    org?: OrgOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PetCountOutputType
   */

  export type PetCountOutputType = {
    photos: number
  }

  export type PetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | PetCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PetCountOutputType
     */
    select?: PetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PetCountOutputType without action
   */
  export type PetCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Count Type OrgCountOutputType
   */

  export type OrgCountOutputType = {
    pets: number
  }

  export type OrgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | OrgCountOutputTypeCountPetsArgs
  }

  // Custom InputTypes
  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgCountOutputType
     */
    select?: OrgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountPetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Pet
   */

  export type AggregatePet = {
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  export type PetMinAggregateOutputType = {
    id: string | null
    name: string | null
    about: string | null
    size: string | null
    energy_level: string | null
    independency_level: string | null
    environment: string | null
    town: string | null
    created_at: Date | null
    orgId: string | null
  }

  export type PetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    about: string | null
    size: string | null
    energy_level: string | null
    independency_level: string | null
    environment: string | null
    town: string | null
    created_at: Date | null
    orgId: string | null
  }

  export type PetCountAggregateOutputType = {
    id: number
    name: number
    about: number
    size: number
    energy_level: number
    independency_level: number
    environment: number
    town: number
    created_at: number
    adoption_requirements: number
    orgId: number
    _all: number
  }


  export type PetMinAggregateInputType = {
    id?: true
    name?: true
    about?: true
    size?: true
    energy_level?: true
    independency_level?: true
    environment?: true
    town?: true
    created_at?: true
    orgId?: true
  }

  export type PetMaxAggregateInputType = {
    id?: true
    name?: true
    about?: true
    size?: true
    energy_level?: true
    independency_level?: true
    environment?: true
    town?: true
    created_at?: true
    orgId?: true
  }

  export type PetCountAggregateInputType = {
    id?: true
    name?: true
    about?: true
    size?: true
    energy_level?: true
    independency_level?: true
    environment?: true
    town?: true
    created_at?: true
    adoption_requirements?: true
    orgId?: true
    _all?: true
  }

  export type PetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pet to aggregate.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pets
    **/
    _count?: true | PetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetMaxAggregateInputType
  }

  export type GetPetAggregateType<T extends PetAggregateArgs> = {
        [P in keyof T & keyof AggregatePet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePet[P]>
      : GetScalarType<T[P], AggregatePet[P]>
  }




  export type PetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetWhereInput
    orderBy?: PetOrderByWithAggregationInput | PetOrderByWithAggregationInput[]
    by: PetScalarFieldEnum[] | PetScalarFieldEnum
    having?: PetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetCountAggregateInputType | true
    _min?: PetMinAggregateInputType
    _max?: PetMaxAggregateInputType
  }

  export type PetGroupByOutputType = {
    id: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at: Date
    adoption_requirements: string[]
    orgId: string | null
    _count: PetCountAggregateOutputType | null
    _min: PetMinAggregateOutputType | null
    _max: PetMaxAggregateOutputType | null
  }

  type GetPetGroupByPayload<T extends PetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetGroupByOutputType[P]>
            : GetScalarType<T[P], PetGroupByOutputType[P]>
        }
      >
    >


  export type PetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    size?: boolean
    energy_level?: boolean
    independency_level?: boolean
    environment?: boolean
    town?: boolean
    created_at?: boolean
    adoption_requirements?: boolean
    orgId?: boolean
    photos?: boolean | Pet$photosArgs<ExtArgs>
    Org?: boolean | Pet$OrgArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    size?: boolean
    energy_level?: boolean
    independency_level?: boolean
    environment?: boolean
    town?: boolean
    created_at?: boolean
    adoption_requirements?: boolean
    orgId?: boolean
    Org?: boolean | Pet$OrgArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    about?: boolean
    size?: boolean
    energy_level?: boolean
    independency_level?: boolean
    environment?: boolean
    town?: boolean
    created_at?: boolean
    adoption_requirements?: boolean
    orgId?: boolean
    Org?: boolean | Pet$OrgArgs<ExtArgs>
  }, ExtArgs["result"]["pet"]>

  export type PetSelectScalar = {
    id?: boolean
    name?: boolean
    about?: boolean
    size?: boolean
    energy_level?: boolean
    independency_level?: boolean
    environment?: boolean
    town?: boolean
    created_at?: boolean
    adoption_requirements?: boolean
    orgId?: boolean
  }

  export type PetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "about" | "size" | "energy_level" | "independency_level" | "environment" | "town" | "created_at" | "adoption_requirements" | "orgId", ExtArgs["result"]["pet"]>
  export type PetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | Pet$photosArgs<ExtArgs>
    Org?: boolean | Pet$OrgArgs<ExtArgs>
    _count?: boolean | PetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Org?: boolean | Pet$OrgArgs<ExtArgs>
  }
  export type PetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Org?: boolean | Pet$OrgArgs<ExtArgs>
  }

  export type $PetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pet"
    objects: {
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      Org: Prisma.$OrgPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      about: string
      size: string
      energy_level: string
      independency_level: string
      environment: string
      town: string
      created_at: Date
      adoption_requirements: string[]
      orgId: string | null
    }, ExtArgs["result"]["pet"]>
    composites: {}
  }

  type PetGetPayload<S extends boolean | null | undefined | PetDefaultArgs> = $Result.GetResult<Prisma.$PetPayload, S>

  type PetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetCountAggregateInputType | true
    }

  export interface PetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pet'], meta: { name: 'Pet' } }
    /**
     * Find zero or one Pet that matches the filter.
     * @param {PetFindUniqueArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetFindUniqueArgs>(args: SelectSubset<T, PetFindUniqueArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetFindUniqueOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetFindUniqueOrThrowArgs>(args: SelectSubset<T, PetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetFindFirstArgs>(args?: SelectSubset<T, PetFindFirstArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindFirstOrThrowArgs} args - Arguments to find a Pet
     * @example
     * // Get one Pet
     * const pet = await prisma.pet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetFindFirstOrThrowArgs>(args?: SelectSubset<T, PetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pets
     * const pets = await prisma.pet.findMany()
     * 
     * // Get first 10 Pets
     * const pets = await prisma.pet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petWithIdOnly = await prisma.pet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetFindManyArgs>(args?: SelectSubset<T, PetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pet.
     * @param {PetCreateArgs} args - Arguments to create a Pet.
     * @example
     * // Create one Pet
     * const Pet = await prisma.pet.create({
     *   data: {
     *     // ... data to create a Pet
     *   }
     * })
     * 
     */
    create<T extends PetCreateArgs>(args: SelectSubset<T, PetCreateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pets.
     * @param {PetCreateManyArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetCreateManyArgs>(args?: SelectSubset<T, PetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pets and returns the data saved in the database.
     * @param {PetCreateManyAndReturnArgs} args - Arguments to create many Pets.
     * @example
     * // Create many Pets
     * const pet = await prisma.pet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetCreateManyAndReturnArgs>(args?: SelectSubset<T, PetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pet.
     * @param {PetDeleteArgs} args - Arguments to delete one Pet.
     * @example
     * // Delete one Pet
     * const Pet = await prisma.pet.delete({
     *   where: {
     *     // ... filter to delete one Pet
     *   }
     * })
     * 
     */
    delete<T extends PetDeleteArgs>(args: SelectSubset<T, PetDeleteArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pet.
     * @param {PetUpdateArgs} args - Arguments to update one Pet.
     * @example
     * // Update one Pet
     * const pet = await prisma.pet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetUpdateArgs>(args: SelectSubset<T, PetUpdateArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pets.
     * @param {PetDeleteManyArgs} args - Arguments to filter Pets to delete.
     * @example
     * // Delete a few Pets
     * const { count } = await prisma.pet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetDeleteManyArgs>(args?: SelectSubset<T, PetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetUpdateManyArgs>(args: SelectSubset<T, PetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pets and returns the data updated in the database.
     * @param {PetUpdateManyAndReturnArgs} args - Arguments to update many Pets.
     * @example
     * // Update many Pets
     * const pet = await prisma.pet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pets and only return the `id`
     * const petWithIdOnly = await prisma.pet.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetUpdateManyAndReturnArgs>(args: SelectSubset<T, PetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pet.
     * @param {PetUpsertArgs} args - Arguments to update or create a Pet.
     * @example
     * // Update or create a Pet
     * const pet = await prisma.pet.upsert({
     *   create: {
     *     // ... data to create a Pet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pet we want to update
     *   }
     * })
     */
    upsert<T extends PetUpsertArgs>(args: SelectSubset<T, PetUpsertArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetCountArgs} args - Arguments to filter Pets to count.
     * @example
     * // Count the number of Pets
     * const count = await prisma.pet.count({
     *   where: {
     *     // ... the filter for the Pets we want to count
     *   }
     * })
    **/
    count<T extends PetCountArgs>(
      args?: Subset<T, PetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetAggregateArgs>(args: Subset<T, PetAggregateArgs>): Prisma.PrismaPromise<GetPetAggregateType<T>>

    /**
     * Group by Pet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetGroupByArgs} args - Group by arguments.
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
      T extends PetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetGroupByArgs['orderBy'] }
        : { orderBy?: PetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pet model
   */
  readonly fields: PetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photos<T extends Pet$photosArgs<ExtArgs> = {}>(args?: Subset<T, Pet$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Org<T extends Pet$OrgArgs<ExtArgs> = {}>(args?: Subset<T, Pet$OrgArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pet model
   */
  interface PetFieldRefs {
    readonly id: FieldRef<"Pet", 'String'>
    readonly name: FieldRef<"Pet", 'String'>
    readonly about: FieldRef<"Pet", 'String'>
    readonly size: FieldRef<"Pet", 'String'>
    readonly energy_level: FieldRef<"Pet", 'String'>
    readonly independency_level: FieldRef<"Pet", 'String'>
    readonly environment: FieldRef<"Pet", 'String'>
    readonly town: FieldRef<"Pet", 'String'>
    readonly created_at: FieldRef<"Pet", 'DateTime'>
    readonly adoption_requirements: FieldRef<"Pet", 'String[]'>
    readonly orgId: FieldRef<"Pet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pet findUnique
   */
  export type PetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findUniqueOrThrow
   */
  export type PetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet findFirst
   */
  export type PetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findFirstOrThrow
   */
  export type PetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pet to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pets.
     */
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet findMany
   */
  export type PetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter, which Pets to fetch.
     */
    where?: PetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pets to fetch.
     */
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pets.
     */
    cursor?: PetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pets.
     */
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Pet create
   */
  export type PetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to create a Pet.
     */
    data: XOR<PetCreateInput, PetUncheckedCreateInput>
  }

  /**
   * Pet createMany
   */
  export type PetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pet createManyAndReturn
   */
  export type PetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to create many Pets.
     */
    data: PetCreateManyInput | PetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet update
   */
  export type PetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The data needed to update a Pet.
     */
    data: XOR<PetUpdateInput, PetUncheckedUpdateInput>
    /**
     * Choose, which Pet to update.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet updateMany
   */
  export type PetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
  }

  /**
   * Pet updateManyAndReturn
   */
  export type PetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * The data used to update Pets.
     */
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyInput>
    /**
     * Filter which Pets to update
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pet upsert
   */
  export type PetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * The filter to search for the Pet to update in case it exists.
     */
    where: PetWhereUniqueInput
    /**
     * In case the Pet found by the `where` argument doesn't exist, create a new Pet with this data.
     */
    create: XOR<PetCreateInput, PetUncheckedCreateInput>
    /**
     * In case the Pet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetUpdateInput, PetUncheckedUpdateInput>
  }

  /**
   * Pet delete
   */
  export type PetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    /**
     * Filter which Pet to delete.
     */
    where: PetWhereUniqueInput
  }

  /**
   * Pet deleteMany
   */
  export type PetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pets to delete
     */
    where?: PetWhereInput
    /**
     * Limit how many Pets to delete.
     */
    limit?: number
  }

  /**
   * Pet.photos
   */
  export type Pet$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Pet.Org
   */
  export type Pet$OrgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    where?: OrgWhereInput
  }

  /**
   * Pet without action
   */
  export type PetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    url: string | null
    file_name: string | null
    petId: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    url: string | null
    file_name: string | null
    petId: string | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    url: number
    file_name: number
    petId: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    id?: true
    url?: true
    file_name?: true
    petId?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    url?: true
    file_name?: true
    petId?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    url?: true
    file_name?: true
    petId?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    url: string
    file_name: string
    petId: string | null
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    file_name?: boolean
    petId?: boolean
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    file_name?: boolean
    petId?: boolean
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    file_name?: boolean
    petId?: boolean
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    url?: boolean
    file_name?: boolean
    petId?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "file_name" | "petId", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pet?: boolean | Photo$PetArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      Pet: Prisma.$PetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      file_name: string
      petId: string | null
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Pet<T extends Photo$PetArgs<ExtArgs> = {}>(args?: Subset<T, Photo$PetArgs<ExtArgs>>): Prisma__PetClient<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly file_name: FieldRef<"Photo", 'String'>
    readonly petId: FieldRef<"Photo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo.Pet
   */
  export type Photo$PetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Org
   */

  export type AggregateOrg = {
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  export type OrgMinAggregateOutputType = {
    id: string | null
    responsible_name: string | null
    email: string | null
    zip_code: string | null
    address: string | null
    whatsapp: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type OrgMaxAggregateOutputType = {
    id: string | null
    responsible_name: string | null
    email: string | null
    zip_code: string | null
    address: string | null
    whatsapp: string | null
    password_hash: string | null
    created_at: Date | null
  }

  export type OrgCountAggregateOutputType = {
    id: number
    responsible_name: number
    email: number
    zip_code: number
    address: number
    whatsapp: number
    password_hash: number
    created_at: number
    _all: number
  }


  export type OrgMinAggregateInputType = {
    id?: true
    responsible_name?: true
    email?: true
    zip_code?: true
    address?: true
    whatsapp?: true
    password_hash?: true
    created_at?: true
  }

  export type OrgMaxAggregateInputType = {
    id?: true
    responsible_name?: true
    email?: true
    zip_code?: true
    address?: true
    whatsapp?: true
    password_hash?: true
    created_at?: true
  }

  export type OrgCountAggregateInputType = {
    id?: true
    responsible_name?: true
    email?: true
    zip_code?: true
    address?: true
    whatsapp?: true
    password_hash?: true
    created_at?: true
    _all?: true
  }

  export type OrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Org to aggregate.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orgs
    **/
    _count?: true | OrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMaxAggregateInputType
  }

  export type GetOrgAggregateType<T extends OrgAggregateArgs> = {
        [P in keyof T & keyof AggregateOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrg[P]>
      : GetScalarType<T[P], AggregateOrg[P]>
  }




  export type OrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgWhereInput
    orderBy?: OrgOrderByWithAggregationInput | OrgOrderByWithAggregationInput[]
    by: OrgScalarFieldEnum[] | OrgScalarFieldEnum
    having?: OrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgCountAggregateInputType | true
    _min?: OrgMinAggregateInputType
    _max?: OrgMaxAggregateInputType
  }

  export type OrgGroupByOutputType = {
    id: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at: Date
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  type GetOrgGroupByPayload<T extends OrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgGroupByOutputType[P]>
            : GetScalarType<T[P], OrgGroupByOutputType[P]>
        }
      >
    >


  export type OrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responsible_name?: boolean
    email?: boolean
    zip_code?: boolean
    address?: boolean
    whatsapp?: boolean
    password_hash?: boolean
    created_at?: boolean
    pets?: boolean | Org$petsArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responsible_name?: boolean
    email?: boolean
    zip_code?: boolean
    address?: boolean
    whatsapp?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["org"]>

  export type OrgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    responsible_name?: boolean
    email?: boolean
    zip_code?: boolean
    address?: boolean
    whatsapp?: boolean
    password_hash?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["org"]>

  export type OrgSelectScalar = {
    id?: boolean
    responsible_name?: boolean
    email?: boolean
    zip_code?: boolean
    address?: boolean
    whatsapp?: boolean
    password_hash?: boolean
    created_at?: boolean
  }

  export type OrgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "responsible_name" | "email" | "zip_code" | "address" | "whatsapp" | "password_hash" | "created_at", ExtArgs["result"]["org"]>
  export type OrgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pets?: boolean | Org$petsArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Org"
    objects: {
      pets: Prisma.$PetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      responsible_name: string
      email: string
      zip_code: string
      address: string
      whatsapp: string
      password_hash: string
      created_at: Date
    }, ExtArgs["result"]["org"]>
    composites: {}
  }

  type OrgGetPayload<S extends boolean | null | undefined | OrgDefaultArgs> = $Result.GetResult<Prisma.$OrgPayload, S>

  type OrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgCountAggregateInputType | true
    }

  export interface OrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Org'], meta: { name: 'Org' } }
    /**
     * Find zero or one Org that matches the filter.
     * @param {OrgFindUniqueArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgFindUniqueArgs>(args: SelectSubset<T, OrgFindUniqueArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Org that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgFindUniqueOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgFindFirstArgs>(args?: SelectSubset<T, OrgFindFirstArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orgs
     * const orgs = await prisma.org.findMany()
     * 
     * // Get first 10 Orgs
     * const orgs = await prisma.org.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgWithIdOnly = await prisma.org.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgFindManyArgs>(args?: SelectSubset<T, OrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Org.
     * @param {OrgCreateArgs} args - Arguments to create a Org.
     * @example
     * // Create one Org
     * const Org = await prisma.org.create({
     *   data: {
     *     // ... data to create a Org
     *   }
     * })
     * 
     */
    create<T extends OrgCreateArgs>(args: SelectSubset<T, OrgCreateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orgs.
     * @param {OrgCreateManyArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgCreateManyArgs>(args?: SelectSubset<T, OrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orgs and returns the data saved in the database.
     * @param {OrgCreateManyAndReturnArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Org.
     * @param {OrgDeleteArgs} args - Arguments to delete one Org.
     * @example
     * // Delete one Org
     * const Org = await prisma.org.delete({
     *   where: {
     *     // ... filter to delete one Org
     *   }
     * })
     * 
     */
    delete<T extends OrgDeleteArgs>(args: SelectSubset<T, OrgDeleteArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Org.
     * @param {OrgUpdateArgs} args - Arguments to update one Org.
     * @example
     * // Update one Org
     * const org = await prisma.org.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgUpdateArgs>(args: SelectSubset<T, OrgUpdateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orgs.
     * @param {OrgDeleteManyArgs} args - Arguments to filter Orgs to delete.
     * @example
     * // Delete a few Orgs
     * const { count } = await prisma.org.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgDeleteManyArgs>(args?: SelectSubset<T, OrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgUpdateManyArgs>(args: SelectSubset<T, OrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs and returns the data updated in the database.
     * @param {OrgUpdateManyAndReturnArgs} args - Arguments to update many Orgs.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrgUpdateManyAndReturnArgs>(args: SelectSubset<T, OrgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Org.
     * @param {OrgUpsertArgs} args - Arguments to update or create a Org.
     * @example
     * // Update or create a Org
     * const org = await prisma.org.upsert({
     *   create: {
     *     // ... data to create a Org
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Org we want to update
     *   }
     * })
     */
    upsert<T extends OrgUpsertArgs>(args: SelectSubset<T, OrgUpsertArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgCountArgs} args - Arguments to filter Orgs to count.
     * @example
     * // Count the number of Orgs
     * const count = await prisma.org.count({
     *   where: {
     *     // ... the filter for the Orgs we want to count
     *   }
     * })
    **/
    count<T extends OrgCountArgs>(
      args?: Subset<T, OrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrgAggregateArgs>(args: Subset<T, OrgAggregateArgs>): Prisma.PrismaPromise<GetOrgAggregateType<T>>

    /**
     * Group by Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgGroupByArgs} args - Group by arguments.
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
      T extends OrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgGroupByArgs['orderBy'] }
        : { orderBy?: OrgGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Org model
   */
  readonly fields: OrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Org.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pets<T extends Org$petsArgs<ExtArgs> = {}>(args?: Subset<T, Org$petsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Org model
   */
  interface OrgFieldRefs {
    readonly id: FieldRef<"Org", 'String'>
    readonly responsible_name: FieldRef<"Org", 'String'>
    readonly email: FieldRef<"Org", 'String'>
    readonly zip_code: FieldRef<"Org", 'String'>
    readonly address: FieldRef<"Org", 'String'>
    readonly whatsapp: FieldRef<"Org", 'String'>
    readonly password_hash: FieldRef<"Org", 'String'>
    readonly created_at: FieldRef<"Org", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Org findUnique
   */
  export type OrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findUniqueOrThrow
   */
  export type OrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findFirst
   */
  export type OrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findFirstOrThrow
   */
  export type OrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findMany
   */
  export type OrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Orgs to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org create
   */
  export type OrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to create a Org.
     */
    data: XOR<OrgCreateInput, OrgUncheckedCreateInput>
  }

  /**
   * Org createMany
   */
  export type OrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Org createManyAndReturn
   */
  export type OrgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Org update
   */
  export type OrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to update a Org.
     */
    data: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
    /**
     * Choose, which Org to update.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org updateMany
   */
  export type OrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
  }

  /**
   * Org updateManyAndReturn
   */
  export type OrgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
  }

  /**
   * Org upsert
   */
  export type OrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The filter to search for the Org to update in case it exists.
     */
    where: OrgWhereUniqueInput
    /**
     * In case the Org found by the `where` argument doesn't exist, create a new Org with this data.
     */
    create: XOR<OrgCreateInput, OrgUncheckedCreateInput>
    /**
     * In case the Org was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
  }

  /**
   * Org delete
   */
  export type OrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter which Org to delete.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org deleteMany
   */
  export type OrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgs to delete
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to delete.
     */
    limit?: number
  }

  /**
   * Org.pets
   */
  export type Org$petsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pet
     */
    select?: PetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pet
     */
    omit?: PetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetInclude<ExtArgs> | null
    where?: PetWhereInput
    orderBy?: PetOrderByWithRelationInput | PetOrderByWithRelationInput[]
    cursor?: PetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetScalarFieldEnum | PetScalarFieldEnum[]
  }

  /**
   * Org without action
   */
  export type OrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
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


  export const PetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    about: 'about',
    size: 'size',
    energy_level: 'energy_level',
    independency_level: 'independency_level',
    environment: 'environment',
    town: 'town',
    created_at: 'created_at',
    adoption_requirements: 'adoption_requirements',
    orgId: 'orgId'
  };

  export type PetScalarFieldEnum = (typeof PetScalarFieldEnum)[keyof typeof PetScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    url: 'url',
    file_name: 'file_name',
    petId: 'petId'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const OrgScalarFieldEnum: {
    id: 'id',
    responsible_name: 'responsible_name',
    email: 'email',
    zip_code: 'zip_code',
    address: 'address',
    whatsapp: 'whatsapp',
    password_hash: 'password_hash',
    created_at: 'created_at'
  };

  export type OrgScalarFieldEnum = (typeof OrgScalarFieldEnum)[keyof typeof OrgScalarFieldEnum]


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


  export type PetWhereInput = {
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    about?: StringFilter<"Pet"> | string
    size?: StringFilter<"Pet"> | string
    energy_level?: StringFilter<"Pet"> | string
    independency_level?: StringFilter<"Pet"> | string
    environment?: StringFilter<"Pet"> | string
    town?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    adoption_requirements?: StringNullableListFilter<"Pet">
    orgId?: StringNullableFilter<"Pet"> | string | null
    photos?: PhotoListRelationFilter
    Org?: XOR<OrgNullableScalarRelationFilter, OrgWhereInput> | null
  }

  export type PetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    size?: SortOrder
    energy_level?: SortOrder
    independency_level?: SortOrder
    environment?: SortOrder
    town?: SortOrder
    created_at?: SortOrder
    adoption_requirements?: SortOrder
    orgId?: SortOrderInput | SortOrder
    photos?: PhotoOrderByRelationAggregateInput
    Org?: OrgOrderByWithRelationInput
  }

  export type PetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetWhereInput | PetWhereInput[]
    OR?: PetWhereInput[]
    NOT?: PetWhereInput | PetWhereInput[]
    name?: StringFilter<"Pet"> | string
    about?: StringFilter<"Pet"> | string
    size?: StringFilter<"Pet"> | string
    energy_level?: StringFilter<"Pet"> | string
    independency_level?: StringFilter<"Pet"> | string
    environment?: StringFilter<"Pet"> | string
    town?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    adoption_requirements?: StringNullableListFilter<"Pet">
    orgId?: StringNullableFilter<"Pet"> | string | null
    photos?: PhotoListRelationFilter
    Org?: XOR<OrgNullableScalarRelationFilter, OrgWhereInput> | null
  }, "id">

  export type PetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    size?: SortOrder
    energy_level?: SortOrder
    independency_level?: SortOrder
    environment?: SortOrder
    town?: SortOrder
    created_at?: SortOrder
    adoption_requirements?: SortOrder
    orgId?: SortOrderInput | SortOrder
    _count?: PetCountOrderByAggregateInput
    _max?: PetMaxOrderByAggregateInput
    _min?: PetMinOrderByAggregateInput
  }

  export type PetScalarWhereWithAggregatesInput = {
    AND?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    OR?: PetScalarWhereWithAggregatesInput[]
    NOT?: PetScalarWhereWithAggregatesInput | PetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pet"> | string
    name?: StringWithAggregatesFilter<"Pet"> | string
    about?: StringWithAggregatesFilter<"Pet"> | string
    size?: StringWithAggregatesFilter<"Pet"> | string
    energy_level?: StringWithAggregatesFilter<"Pet"> | string
    independency_level?: StringWithAggregatesFilter<"Pet"> | string
    environment?: StringWithAggregatesFilter<"Pet"> | string
    town?: StringWithAggregatesFilter<"Pet"> | string
    created_at?: DateTimeWithAggregatesFilter<"Pet"> | Date | string
    adoption_requirements?: StringNullableListFilter<"Pet">
    orgId?: StringNullableWithAggregatesFilter<"Pet"> | string | null
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    file_name?: StringFilter<"Photo"> | string
    petId?: StringNullableFilter<"Photo"> | string | null
    Pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    file_name?: SortOrder
    petId?: SortOrderInput | SortOrder
    Pet?: PetOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    url?: StringFilter<"Photo"> | string
    file_name?: StringFilter<"Photo"> | string
    petId?: StringNullableFilter<"Photo"> | string | null
    Pet?: XOR<PetNullableScalarRelationFilter, PetWhereInput> | null
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    file_name?: SortOrder
    petId?: SortOrderInput | SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    url?: StringWithAggregatesFilter<"Photo"> | string
    file_name?: StringWithAggregatesFilter<"Photo"> | string
    petId?: StringNullableWithAggregatesFilter<"Photo"> | string | null
  }

  export type OrgWhereInput = {
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    id?: StringFilter<"Org"> | string
    responsible_name?: StringFilter<"Org"> | string
    email?: StringFilter<"Org"> | string
    zip_code?: StringFilter<"Org"> | string
    address?: StringFilter<"Org"> | string
    whatsapp?: StringFilter<"Org"> | string
    password_hash?: StringFilter<"Org"> | string
    created_at?: DateTimeFilter<"Org"> | Date | string
    pets?: PetListRelationFilter
  }

  export type OrgOrderByWithRelationInput = {
    id?: SortOrder
    responsible_name?: SortOrder
    email?: SortOrder
    zip_code?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    pets?: PetOrderByRelationAggregateInput
  }

  export type OrgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    responsible_name?: StringFilter<"Org"> | string
    email?: StringFilter<"Org"> | string
    zip_code?: StringFilter<"Org"> | string
    address?: StringFilter<"Org"> | string
    whatsapp?: StringFilter<"Org"> | string
    password_hash?: StringFilter<"Org"> | string
    created_at?: DateTimeFilter<"Org"> | Date | string
    pets?: PetListRelationFilter
  }, "id">

  export type OrgOrderByWithAggregationInput = {
    id?: SortOrder
    responsible_name?: SortOrder
    email?: SortOrder
    zip_code?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    _count?: OrgCountOrderByAggregateInput
    _max?: OrgMaxOrderByAggregateInput
    _min?: OrgMinOrderByAggregateInput
  }

  export type OrgScalarWhereWithAggregatesInput = {
    AND?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    OR?: OrgScalarWhereWithAggregatesInput[]
    NOT?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Org"> | string
    responsible_name?: StringWithAggregatesFilter<"Org"> | string
    email?: StringWithAggregatesFilter<"Org"> | string
    zip_code?: StringWithAggregatesFilter<"Org"> | string
    address?: StringWithAggregatesFilter<"Org"> | string
    whatsapp?: StringWithAggregatesFilter<"Org"> | string
    password_hash?: StringWithAggregatesFilter<"Org"> | string
    created_at?: DateTimeWithAggregatesFilter<"Org"> | Date | string
  }

  export type PetCreateInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    photos?: PhotoCreateNestedManyWithoutPetInput
    Org?: OrgCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    orgId?: string | null
    photos?: PhotoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    photos?: PhotoUpdateManyWithoutPetNestedInput
    Org?: OrgUpdateOneWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetCreateManyInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    orgId?: string | null
  }

  export type PetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
  }

  export type PetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateInput = {
    id?: string
    url: string
    file_name: string
    Pet?: PetCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: string
    url: string
    file_name: string
    petId?: string | null
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    Pet?: PetUpdateOneWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    petId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateManyInput = {
    id?: string
    url: string
    file_name: string
    petId?: string | null
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    petId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrgCreateInput = {
    id?: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at?: Date | string
    pets?: PetCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateInput = {
    id?: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at?: Date | string
    pets?: PetUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pets?: PetUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateManyInput = {
    id?: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at?: Date | string
  }

  export type OrgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type OrgNullableScalarRelationFilter = {
    is?: OrgWhereInput | null
    isNot?: OrgWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    size?: SortOrder
    energy_level?: SortOrder
    independency_level?: SortOrder
    environment?: SortOrder
    town?: SortOrder
    created_at?: SortOrder
    adoption_requirements?: SortOrder
    orgId?: SortOrder
  }

  export type PetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    size?: SortOrder
    energy_level?: SortOrder
    independency_level?: SortOrder
    environment?: SortOrder
    town?: SortOrder
    created_at?: SortOrder
    orgId?: SortOrder
  }

  export type PetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    about?: SortOrder
    size?: SortOrder
    energy_level?: SortOrder
    independency_level?: SortOrder
    environment?: SortOrder
    town?: SortOrder
    created_at?: SortOrder
    orgId?: SortOrder
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

  export type PetNullableScalarRelationFilter = {
    is?: PetWhereInput | null
    isNot?: PetWhereInput | null
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    file_name?: SortOrder
    petId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    file_name?: SortOrder
    petId?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    file_name?: SortOrder
    petId?: SortOrder
  }

  export type PetListRelationFilter = {
    every?: PetWhereInput
    some?: PetWhereInput
    none?: PetWhereInput
  }

  export type PetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgCountOrderByAggregateInput = {
    id?: SortOrder
    responsible_name?: SortOrder
    email?: SortOrder
    zip_code?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type OrgMaxOrderByAggregateInput = {
    id?: SortOrder
    responsible_name?: SortOrder
    email?: SortOrder
    zip_code?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type OrgMinOrderByAggregateInput = {
    id?: SortOrder
    responsible_name?: SortOrder
    email?: SortOrder
    zip_code?: SortOrder
    address?: SortOrder
    whatsapp?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
  }

  export type PetCreateadoption_requirementsInput = {
    set: string[]
  }

  export type PhotoCreateNestedManyWithoutPetInput = {
    create?: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput> | PhotoCreateWithoutPetInput[] | PhotoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPetInput | PhotoCreateOrConnectWithoutPetInput[]
    createMany?: PhotoCreateManyPetInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type OrgCreateNestedOneWithoutPetsInput = {
    create?: XOR<OrgCreateWithoutPetsInput, OrgUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutPetsInput
    connect?: OrgWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedManyWithoutPetInput = {
    create?: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput> | PhotoCreateWithoutPetInput[] | PhotoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPetInput | PhotoCreateOrConnectWithoutPetInput[]
    createMany?: PhotoCreateManyPetInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PetUpdateadoption_requirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PhotoUpdateManyWithoutPetNestedInput = {
    create?: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput> | PhotoCreateWithoutPetInput[] | PhotoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPetInput | PhotoCreateOrConnectWithoutPetInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPetInput | PhotoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: PhotoCreateManyPetInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPetInput | PhotoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPetInput | PhotoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type OrgUpdateOneWithoutPetsNestedInput = {
    create?: XOR<OrgCreateWithoutPetsInput, OrgUncheckedCreateWithoutPetsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutPetsInput
    upsert?: OrgUpsertWithoutPetsInput
    disconnect?: OrgWhereInput | boolean
    delete?: OrgWhereInput | boolean
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutPetsInput, OrgUpdateWithoutPetsInput>, OrgUncheckedUpdateWithoutPetsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PhotoUncheckedUpdateManyWithoutPetNestedInput = {
    create?: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput> | PhotoCreateWithoutPetInput[] | PhotoUncheckedCreateWithoutPetInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutPetInput | PhotoCreateOrConnectWithoutPetInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutPetInput | PhotoUpsertWithWhereUniqueWithoutPetInput[]
    createMany?: PhotoCreateManyPetInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutPetInput | PhotoUpdateWithWhereUniqueWithoutPetInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutPetInput | PhotoUpdateManyWithWhereWithoutPetInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PetCreateNestedOneWithoutPhotosInput = {
    create?: XOR<PetCreateWithoutPhotosInput, PetUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PetCreateOrConnectWithoutPhotosInput
    connect?: PetWhereUniqueInput
  }

  export type PetUpdateOneWithoutPhotosNestedInput = {
    create?: XOR<PetCreateWithoutPhotosInput, PetUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: PetCreateOrConnectWithoutPhotosInput
    upsert?: PetUpsertWithoutPhotosInput
    disconnect?: PetWhereInput | boolean
    delete?: PetWhereInput | boolean
    connect?: PetWhereUniqueInput
    update?: XOR<XOR<PetUpdateToOneWithWhereWithoutPhotosInput, PetUpdateWithoutPhotosInput>, PetUncheckedUpdateWithoutPhotosInput>
  }

  export type PetCreateNestedManyWithoutOrgInput = {
    create?: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput> | PetCreateWithoutOrgInput[] | PetUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOrgInput | PetCreateOrConnectWithoutOrgInput[]
    createMany?: PetCreateManyOrgInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput> | PetCreateWithoutOrgInput[] | PetUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOrgInput | PetCreateOrConnectWithoutOrgInput[]
    createMany?: PetCreateManyOrgInputEnvelope
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
  }

  export type PetUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput> | PetCreateWithoutOrgInput[] | PetUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOrgInput | PetCreateOrConnectWithoutOrgInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOrgInput | PetUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PetCreateManyOrgInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOrgInput | PetUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOrgInput | PetUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
  }

  export type PetUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput> | PetCreateWithoutOrgInput[] | PetUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: PetCreateOrConnectWithoutOrgInput | PetCreateOrConnectWithoutOrgInput[]
    upsert?: PetUpsertWithWhereUniqueWithoutOrgInput | PetUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: PetCreateManyOrgInputEnvelope
    set?: PetWhereUniqueInput | PetWhereUniqueInput[]
    disconnect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    delete?: PetWhereUniqueInput | PetWhereUniqueInput[]
    connect?: PetWhereUniqueInput | PetWhereUniqueInput[]
    update?: PetUpdateWithWhereUniqueWithoutOrgInput | PetUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: PetUpdateManyWithWhereWithoutOrgInput | PetUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: PetScalarWhereInput | PetScalarWhereInput[]
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

  export type PhotoCreateWithoutPetInput = {
    id?: string
    url: string
    file_name: string
  }

  export type PhotoUncheckedCreateWithoutPetInput = {
    id?: string
    url: string
    file_name: string
  }

  export type PhotoCreateOrConnectWithoutPetInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput>
  }

  export type PhotoCreateManyPetInputEnvelope = {
    data: PhotoCreateManyPetInput | PhotoCreateManyPetInput[]
    skipDuplicates?: boolean
  }

  export type OrgCreateWithoutPetsInput = {
    id?: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at?: Date | string
  }

  export type OrgUncheckedCreateWithoutPetsInput = {
    id?: string
    responsible_name: string
    email: string
    zip_code: string
    address: string
    whatsapp: string
    password_hash: string
    created_at?: Date | string
  }

  export type OrgCreateOrConnectWithoutPetsInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutPetsInput, OrgUncheckedCreateWithoutPetsInput>
  }

  export type PhotoUpsertWithWhereUniqueWithoutPetInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutPetInput, PhotoUncheckedUpdateWithoutPetInput>
    create: XOR<PhotoCreateWithoutPetInput, PhotoUncheckedCreateWithoutPetInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutPetInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutPetInput, PhotoUncheckedUpdateWithoutPetInput>
  }

  export type PhotoUpdateManyWithWhereWithoutPetInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutPetInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: StringFilter<"Photo"> | string
    url?: StringFilter<"Photo"> | string
    file_name?: StringFilter<"Photo"> | string
    petId?: StringNullableFilter<"Photo"> | string | null
  }

  export type OrgUpsertWithoutPetsInput = {
    update: XOR<OrgUpdateWithoutPetsInput, OrgUncheckedUpdateWithoutPetsInput>
    create: XOR<OrgCreateWithoutPetsInput, OrgUncheckedCreateWithoutPetsInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutPetsInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutPetsInput, OrgUncheckedUpdateWithoutPetsInput>
  }

  export type OrgUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgUncheckedUpdateWithoutPetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    responsible_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    zip_code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetCreateWithoutPhotosInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    Org?: OrgCreateNestedOneWithoutPetsInput
  }

  export type PetUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    orgId?: string | null
  }

  export type PetCreateOrConnectWithoutPhotosInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutPhotosInput, PetUncheckedCreateWithoutPhotosInput>
  }

  export type PetUpsertWithoutPhotosInput = {
    update: XOR<PetUpdateWithoutPhotosInput, PetUncheckedUpdateWithoutPhotosInput>
    create: XOR<PetCreateWithoutPhotosInput, PetUncheckedCreateWithoutPhotosInput>
    where?: PetWhereInput
  }

  export type PetUpdateToOneWithWhereWithoutPhotosInput = {
    where?: PetWhereInput
    data: XOR<PetUpdateWithoutPhotosInput, PetUncheckedUpdateWithoutPhotosInput>
  }

  export type PetUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    Org?: OrgUpdateOneWithoutPetsNestedInput
  }

  export type PetUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    orgId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetCreateWithoutOrgInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    photos?: PhotoCreateNestedManyWithoutPetInput
  }

  export type PetUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
    photos?: PhotoUncheckedCreateNestedManyWithoutPetInput
  }

  export type PetCreateOrConnectWithoutOrgInput = {
    where: PetWhereUniqueInput
    create: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput>
  }

  export type PetCreateManyOrgInputEnvelope = {
    data: PetCreateManyOrgInput | PetCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type PetUpsertWithWhereUniqueWithoutOrgInput = {
    where: PetWhereUniqueInput
    update: XOR<PetUpdateWithoutOrgInput, PetUncheckedUpdateWithoutOrgInput>
    create: XOR<PetCreateWithoutOrgInput, PetUncheckedCreateWithoutOrgInput>
  }

  export type PetUpdateWithWhereUniqueWithoutOrgInput = {
    where: PetWhereUniqueInput
    data: XOR<PetUpdateWithoutOrgInput, PetUncheckedUpdateWithoutOrgInput>
  }

  export type PetUpdateManyWithWhereWithoutOrgInput = {
    where: PetScalarWhereInput
    data: XOR<PetUpdateManyMutationInput, PetUncheckedUpdateManyWithoutOrgInput>
  }

  export type PetScalarWhereInput = {
    AND?: PetScalarWhereInput | PetScalarWhereInput[]
    OR?: PetScalarWhereInput[]
    NOT?: PetScalarWhereInput | PetScalarWhereInput[]
    id?: StringFilter<"Pet"> | string
    name?: StringFilter<"Pet"> | string
    about?: StringFilter<"Pet"> | string
    size?: StringFilter<"Pet"> | string
    energy_level?: StringFilter<"Pet"> | string
    independency_level?: StringFilter<"Pet"> | string
    environment?: StringFilter<"Pet"> | string
    town?: StringFilter<"Pet"> | string
    created_at?: DateTimeFilter<"Pet"> | Date | string
    adoption_requirements?: StringNullableListFilter<"Pet">
    orgId?: StringNullableFilter<"Pet"> | string | null
  }

  export type PhotoCreateManyPetInput = {
    id?: string
    url: string
    file_name: string
  }

  export type PhotoUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutPetInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
  }

  export type PetCreateManyOrgInput = {
    id?: string
    name: string
    about: string
    size: string
    energy_level: string
    independency_level: string
    environment: string
    town: string
    created_at?: Date | string
    adoption_requirements?: PetCreateadoption_requirementsInput | string[]
  }

  export type PetUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    photos?: PhotoUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
    photos?: PhotoUncheckedUpdateManyWithoutPetNestedInput
  }

  export type PetUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    energy_level?: StringFieldUpdateOperationsInput | string
    independency_level?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    adoption_requirements?: PetUpdateadoption_requirementsInput | string[]
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