import { IReadinessUseCase } from "@application/usecases/health/readiness/IReadinessUseCase";

export class MockReadinessUseCase implements IReadinessUseCase {
  async execute(): Promise<void> {
    return
  }
}