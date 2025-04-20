import { LivenessUseCase } from "./LivenessUseCase";

describe('LivenessUseCase', () => {
    let livenessUseCase: LivenessUseCase;

    beforeAll(() => {
        livenessUseCase = new LivenessUseCase();
    });

    describe('when the service is alive', () => {
        it("shouldn't throw an error", async () => {
            let thrownError = false;

            try {
                await livenessUseCase.execute();
            } catch (error) {
                thrownError = true;
            }
            expect(thrownError).toBe(false);
        });
    });
})