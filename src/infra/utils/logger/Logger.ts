import winston from 'winston'

const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    )
});

type TLoggerLog = {
    message: string
    additionalInfo?: any
}

enum EAvailableType {
    ERROR = 'error',
    INFO = 'info',
    WARN = 'warn'
}

function logMessage(availableType: EAvailableType, request: TLoggerLog) {
    const { message, additionalInfo } = request
    logger[availableType](message, { additionalInfo })
}

export class Logger {
    static info(request: TLoggerLog): void {
        logMessage(EAvailableType.INFO, request)
    }

    static error(request: TLoggerLog): void {
        logMessage(EAvailableType.ERROR, request)
    }

    static warn(request: TLoggerLog): void {
        logMessage(EAvailableType.WARN, request)
    }
}