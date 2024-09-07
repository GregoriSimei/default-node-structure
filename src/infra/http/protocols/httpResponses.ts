import { EHttpStatusCode } from "./EHttpStatusCode";
import { HttpResponse } from "./http";

type ResponseTypes = 'json' | 'message'

export function ok(data: any, type: ResponseTypes = 'json'): HttpResponse {
    return {
        body: data,
        statusCode: EHttpStatusCode.OK,
        type
    }
}

export function okNoData(): HttpResponse {
    return {
        statusCode: EHttpStatusCode.OK,
        body: 'OK',
        type: 'message'
    }
}

export function created(data: any): HttpResponse {
    return {
        body: data,
        statusCode: EHttpStatusCode.CREATED
    }
}