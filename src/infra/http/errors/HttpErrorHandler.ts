import { NextFunction, Response, Request } from 'express'
import { EHttpStatusCode } from '../protocols/EHttpStatusCode'
import { HttpError } from './HttpError'
import { Logger } from '@infra/utils/logger/Logger'
import { ErrorCustom } from '@infra/utils/ErrorCustom/ErrorCustom'

type TLog = {
    statusCode: number,
    fileName: string,
    functionName: string,
    additionalInfo?: any
}

export class HttpErrorHandler {
    static handle(err: any, _: Request, res: Response, next: NextFunction) {
        let statusCode: number = EHttpStatusCode.INTERNAL_SERVER_ERROR
        let respMessage: string = 'Internal Server Error'

        if (err instanceof HttpError) {
            statusCode = err.getStatusCode()
            respMessage = err.message
        }

        let log: TLog = createHttpErrorLog(err, statusCode)
        Logger.error({
            message: respMessage,
            additionalInfo: log
        })

        res.status(statusCode).send(respMessage)
        next()
    }
}

function createHttpErrorLog(err: any, statusCode: number): TLog {
    let additionalErrorInfo = null
    if (err instanceof HttpError) {
        additionalErrorInfo = err.additionalInfo
    }

    let log: TLog | null = null
    if (!(err instanceof ErrorCustom)) {
        const errorCustom: ErrorCustom = new ErrorCustom({ error: err })
        log = createLogFromErrorCustom(errorCustom, statusCode)
    } else {
        log = createLogFromErrorCustom(err, statusCode)
    }

    return {
        ...log,
        additionalInfo: additionalErrorInfo
    }
}

function createLogFromErrorCustom(errorCustom: ErrorCustom, statusCode: EHttpStatusCode): TLog {
    return {
        fileName: errorCustom.getFileName(),
        functionName: errorCustom.getFunctionName(),
        statusCode
    }
}