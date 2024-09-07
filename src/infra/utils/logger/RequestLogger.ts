import morgan from "morgan";
import { Logger } from "./Logger";


export class RequestLogger {
    static log() {
        return morgan((tokens, req, res) => {
            const method = tokens.method(req, res);
            const url = tokens.url(req, res);
            const status = tokens.status(req, res);
            const responseTime = tokens['response-time'](req, res);
            const logMessage = `${method} ${url} ${status} - ${responseTime} ms`;

            // Log com o Winston
            Logger.info({
                message: logMessage
            });

            return null;
        })
    }
}