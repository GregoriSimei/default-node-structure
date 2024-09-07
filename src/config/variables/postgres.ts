import env from 'env-var'

export const envPostgres = Object.freeze({
    host: env.get('POSTGRES_HOST').asString(),
    port: env.get('POSTGRES_PORT').asInt(),
    user: env.get('POSTGRES_USER').asString(),
    pass: env.get('POSTGRES_PASS').asString(),
    database: env.get('POSTGRES_DB').asString(),
    schema: env.get('POSTGRES_SCHEMA').asString()
})