import { LivenessController } from "./LivenessController";
import { MockLivenessUseCase } from "@test/mock/LivenessUseCase.mock";
import { fakeRequest } from "@test/fakeData/request.fake";

let livenessController: LivenessController;

describe("LivenessController", () => {
    beforeAll(() => {
        const mockLivenessUseCase = new MockLivenessUseCase();
        livenessController = new LivenessController(
            mockLivenessUseCase
        )
    })

    describe("when return 200", () => {
        it("should return the message 'Service is alive'", async () => {
            const expectedResponse = { message: "Service is alive" }
            const request = fakeRequest()
            const response = await livenessController.handle(request)

            expect(response).toBeDefined()
            expect(response.body).toEqual(expectedResponse)
            expect(response.statusCode).toBe(200)
        })
    })
})