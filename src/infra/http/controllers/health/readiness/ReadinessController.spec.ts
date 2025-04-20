import { ReadinessController } from "./ReadinessController";
import { MockReadinessUseCase } from "@test/mock/ReadinessUseCase.mock";
import { fakeRequest } from "@test/fakeData/request.fake";

let readinessController: ReadinessController;

describe("ReadinessController", () => {
    beforeAll(() => {
        const mockReadinessUseCase = new MockReadinessUseCase();
        readinessController = new ReadinessController(
            mockReadinessUseCase
        )
    })

    describe("when return 200", () => {
        it("should return the message 'Service is ready'", async () => {
            const expectedResponse = { message: "Service is ready" }
            const request = fakeRequest()
            const response = await readinessController.handle(request)

            expect(response).toBeDefined()
            expect(response.body).toEqual(expectedResponse)
            expect(response.statusCode).toBe(200)
        })
    })
})