import { TypeOrmConnector as DataBaseConnector } from "@infra/persistence/typeorm/typeorm-connector"
import { Server } from "./server"
import { Logger } from "@infra/utils/logger/Logger"

(async () => {
    const dbConnected = await DataBaseConnector.getInstance().connect()
    if(!dbConnected) {
        Logger.error({
            message: '[APP] - Databasee connection failed',
        })
        process.exit()
    }

    const serverInitialized = Server.getInstance().inititalize()
    if(!serverInitialized) {
        Logger.error({
            message: '[APP] - Server initialization failed',
        })
        process.exit()
    }
})()