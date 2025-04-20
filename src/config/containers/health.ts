import { ILivenessUseCase } from "@application/usecases/health/liveness/ILivenessUseCase";
import { LivenessUseCase } from "@application/usecases/health/liveness/LivenessUseCase";
import { IReadinessUseCase } from "@application/usecases/health/readiness/IReadinessUseCase";
import { ReadinessUseCase } from "@application/usecases/health/readiness/ReadinessUseCase";
import { LivenessController } from "@infra/http/controllers/health/liveness/LivenessController";
import { ReadinessController } from "@infra/http/controllers/health/readiness/ReadinessController";
import { IController } from "@infra/http/protocols/controller";
import { container } from "tsyringe";

container.registerSingleton<ILivenessUseCase>("LivenessUseCase", LivenessUseCase);
container.registerSingleton<IController>("LivenessController", LivenessController);

container.registerSingleton<IReadinessUseCase>("ReadinessUseCase", ReadinessUseCase);
container.registerSingleton<IController>("ReadinessController", ReadinessController);