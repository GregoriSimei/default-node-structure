import env from 'env-var'

export const envApp = Object.freeze({
    name: env.get('APP_NAME').asString() as string,
    host: env.get('HOST').asString() as string,
    port: env.get('PORT').asInt() as number,
    environment: env.get('ENVIRONMENT').asEnum(['development', 'production'])
})