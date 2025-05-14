import { injectable } from "tsyringe";
import { ILivenessUseCase } from "./ILivenessUseCase";
import { TLivenessUseCaseInput, TLivenessUseCaseOutput } from "./TLivenessUseCase";

@injectable()
export class LivenessUseCase implements ILivenessUseCase {
  async execute(_: TLivenessUseCaseInput): Promise<TLivenessUseCaseOutput> {
    return
  }
}