import express, { Express } from 'express'
import { setupMiddlewares } from './middlewares'
import { TypeOrmConnection } from '@infra/persistence/typeorm/TypeORMConection'
import { Logger } from '@infra/utils/logger/Logger'
import { setupRoutes } from './routes'
import { envApp } from '@config/variables/app'
import { setupServerConfig } from './config'

TypeOrmConnection.initialize()
    .then(() => {
        Logger.info({
            message: '[DATABASE] - Connected'
        })

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
    })
    .catch((err) => {
        Logger.info({
            message: '[DATABASE] - Connection failed',
            additionalInfo: { errorMessage: err.message }
        })
        process.exit()
    })