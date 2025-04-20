import { EHttpStatusCode } from "@infra/http/protocols/EHttpStatusCode";
import { HttpError } from "./HttpError";

export class InternalServerError extends HttpError {
  constructor(message: string, additionalInfo?: any) {
    super(EHttpStatusCode.INTERNAL_SERVER_ERROR, message, additionalInfo);
  }
}