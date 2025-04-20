import { ReadinessUseCase } from "./ReadinessUseCase";
import { InternalServerError } from "@infra/http/errors/http-errors/InternalServerError";
import { IDataBaseConnector } from "@infra/persistence/IDataBaseConnector";
import { MockDataBaseConnector } from "@test/mock/DataBaseConnector.mock";

describe("ReadinessUseCase", () => {
    let readinessUseCase: ReadinessUseCase;
    let dataBaseConnectorMock: IDataBaseConnector;

    beforeAll(() => {
        dataBaseConnectorMock = new MockDataBaseConnector();
        readinessUseCase = new ReadinessUseCase(
            dataBaseConnectorMock
        );
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    describe("when the database connection is ok", () => {
        it("shouldn't throw an error", async () => {
            let thrownError = false;

            try {
                await readinessUseCase.execute();
            } catch (error) {
                thrownError = true;
            }

            expect(thrownError).toBe(false);
        });
    });

    describe("when the database connection is not ok", () => {
        it("should throw an error", async () => {
            let thrownError = false;

            const databaseIsConnected = jest.spyOn(dataBaseConnectorMock, 'isConnected').mockReturnValue(false);

            try {
                await readinessUseCase.execute();
            } catch (error) {
                thrownError = true;
                expect(error).toBeInstanceOf(InternalServerError);
                expect((error as InternalServerError).message).toBe("Database is not connected");
            }

            expect(thrownError).toBe(true);
            expect(databaseIsConnected).toHaveBeenCalled();
        });
    });
});