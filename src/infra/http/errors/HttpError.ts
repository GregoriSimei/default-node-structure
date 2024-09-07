import { EHttpStatusCode } from "../protocols/EHttpStatusCode";

export class HttpError extends Error {
    private code: EHttpStatusCode
    public additionalInfo?: any

    constructor(statusCode: EHttpStatusCode, message: string, additionalInfo?: any) {
        super()
        this.message = message
        this.code = statusCode
        this.additionalInfo = additionalInfo
    }

    public getStatusCode(): EHttpStatusCode {
        return this.code
    }
}