import { ILivenessUseCase } from "./ILivenessUseCase";
import { TLivenessUseCaseInput, TLivenessUseCaseOutput } from "./TLivenessUseCase";

export class LivenessUseCase implements ILivenessUseCase {
  async execute(_: TLivenessUseCaseInput): Promise<TLivenessUseCaseOutput> {
    return
  }
}