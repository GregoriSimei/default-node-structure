import { IReadinessUseCase } from "@application/usecases/health/readiness/IReadinessUseCase";
import { IController } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { ok } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";

@injectable()
export class ReadinessController implements IController {
    constructor(
        @inject("ReadinessUseCase")
        private readonly readinessUseCase: IReadinessUseCase
    ) {}
    
    async handle(req: HttpRequest): Promise<HttpResponse> {
        await this.readinessUseCase.execute();
        return ok({ message: "Service is ready" });
    }
}