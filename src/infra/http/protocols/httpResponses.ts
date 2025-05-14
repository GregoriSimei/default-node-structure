import { EHttpStatusCode } from "./EHttpStatusCode";
import { HttpResponse } from "./http";

type ResponseTypes = 'json' | 'message'

export class HttpResponseHandler {
    static ok(data: any, type: ResponseTypes = 'json'): HttpResponse {
        return {
            body: data,
            statusCode: EHttpStatusCode.OK,
            type
        }
    }

    static okNoData(): HttpResponse {
        return {
            statusCode: EHttpStatusCode.OK,
            body: 'OK',
            type: 'message'
        }
    }

    static notFound(message: string): HttpResponse {
        return {
            statusCode: EHttpStatusCode.NOT_FOUND,
            body: message,
            type: 'message'
        }
    }

    static created(data: any): HttpResponse {
        return {
            body: data,
            statusCode: EHttpStatusCode.CREATED
        }
    }
}