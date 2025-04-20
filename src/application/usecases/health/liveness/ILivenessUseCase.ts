import { IUseCase } from "@application/usecases/IUseCase";
import { TLivenessUseCaseInput, TLivenessUseCaseOutput } from "./TLivenessUseCase";

export interface ILivenessUseCase extends IUseCase<TLivenessUseCaseInput, TLivenessUseCaseOutput> {}