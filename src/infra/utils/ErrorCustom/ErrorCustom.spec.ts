import { ErrorCustom } from './ErrorCustom'

function testToThrowError() {
    throw new Error('test')
}

describe('ErrorCustom', () => {
    test('when throw some error of the type Error should return the fileName and functionName where the error occurs', () => {
        let throwSomeError: boolean = false

        try {
            testToThrowError()
        } catch (e) {
            throwSomeError = true
            if (e instanceof Error) {
                const errorHandled = new ErrorCustom({ error: e })

                const fileName = errorHandled.getFileName() // should be the actual file (__filename)
                const functionName = errorHandled.getFunctionName() // should be 'testToThrowError'

                expect(fileName).toBe(__filename)
                expect(functionName).toBe('testToThrowError')
            }
        }

        expect(throwSomeError).toBeTruthy()
    })

    test('when throw some error of the type Error and the error dont have stack should return the fileName and functionName as "unknown"', () => {
        let throwSomeError: boolean = false

        try {
            testToThrowError()
        } catch (e) {
            throwSomeError = true
            if (e instanceof Error) {
                e.stack = undefined // empty stack error 
                const errorHandled = new ErrorCustom({ error: e })

                const fileName = errorHandled.getFileName()
                const functionName = errorHandled.getFunctionName()

                expect(fileName).toBe('unknown')
                expect(functionName).toBe('unknown')
            }
        }

        expect(throwSomeError).toBeTruthy()
    })
})