import { ILivenessUseCase } from "@application/usecases/health/liveness/ILivenessUseCase";

export class MockLivenessUseCase implements ILivenessUseCase {
    async execute(): Promise<void> {
        return
    }
}