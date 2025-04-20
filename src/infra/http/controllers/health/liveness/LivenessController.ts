import { ILivenessUseCase } from "@application/usecases/health/liveness/ILivenessUseCase";
import { IController } from "@infra/http/protocols/controller";
import { HttpRequest, HttpResponse } from "@infra/http/protocols/http";
import { ok } from "@infra/http/protocols/httpResponses";
import { inject, injectable } from "tsyringe";

@injectable()
export class LivenessController implements IController {
    constructor(
        @inject("LivenessUseCase")
        private readonly livenessUseCase: ILivenessUseCase
    ) {}

    async handle(req: HttpRequest): Promise<HttpResponse> {
        await this.livenessUseCase.execute();
        return ok({ message: "Service is alive" });
    }
}
