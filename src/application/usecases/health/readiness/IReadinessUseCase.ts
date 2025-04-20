import { IUseCase } from "@application/usecases/IUseCase";
import { TReadinessUseCaseInput, TReadinessUseCaseOutput } from "./TReadinessUseCase";

export interface IReadinessUseCase extends IUseCase<TReadinessUseCaseInput, TReadinessUseCaseOutput> {}