import { HttpErrorHandler } from '@infra/http/errors/HttpErrorHandler'
import { RequestLogger } from '@infra/utils/logger/RequestLogger'
import { Express, Router } from 'express'
import 'express-async-errors'

export async function setupMiddlewares(app: Express): Promise<void> {
    app.use(RequestLogger.log())
    app.use(HttpErrorHandler.handle)
}