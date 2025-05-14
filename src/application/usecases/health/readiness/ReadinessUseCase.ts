import { TReadinessUseCaseInput, TReadinessUseCaseOutput } from "./TReadinessUseCase";
import { IReadinessUseCase } from "./IReadinessUseCase";
import { InternalServerError } from "@infra/http/errors/http-errors/InternalServerError";
import { inject, injectable } from "tsyringe";
import { IDataBaseConnector } from "@infra/persistence/IDataBaseConnector";

@injectable()
export class ReadinessUseCase implements IReadinessUseCase {
  constructor(
    @inject("DataBaseConnector")
    private readonly dataBaseConnector: IDataBaseConnector
  ) {}

  async execute(_: TReadinessUseCaseInput): Promise<TReadinessUseCaseOutput> {
    const databaseIsConnected = this.dataBaseConnector.isConnected()

    if (!databaseIsConnected) {
        throw new InternalServerError("Database is not connected")
    }

    return
  }
}