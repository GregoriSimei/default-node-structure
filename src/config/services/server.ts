import express, { Express } from 'express'
import { setupMiddlewares } from './middlewares'
import { Logger } from '@infra/utils/logger/Logger'
import { setupRoutes } from './routes'
import { envApp } from '@config/variables/app'
import { setupServerConfig } from './config'

export class Server {
    private static instance: Server

    private constructor() {}

    public static getInstance(): Server {
        if (!Server.instance) {
            Server.instance = new Server()
        }
        return Server.instance
    }

    public inititalize(): boolean {
        const app: Express = express()
        setupServerConfig(app)
        setupMiddlewares(app)
        setupRoutes(app)
        app.get('/', (_, res) => {
            res.status(200).send('OK')
        })

        app.listen(3000, envApp.host, () => {
            Logger.info({
                message: '[APP] - app running on port: 3000'
            })
        })

        return true;
    }
}