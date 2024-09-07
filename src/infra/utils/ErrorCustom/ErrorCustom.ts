type TErrorCustos = {
    error: Error,
}

export class ErrorCustom extends Error {
    public message: string
    protected functionName: string
    protected fileName: string

    constructor({
        error
    }: TErrorCustos) {
        super()

        this.stack = error.stack
        this.message = error.message
        this.functionName = this.extractFunctionName()
        this.fileName = this.extractFileName()
    }

    private extractFunctionName() {
        const stack = this.stack?.split('\n');
        const callerLine = stack?.[1] || '';
        const functionNameRegex = /at\s+(.*)\s+\(/;
        const functionName = functionNameRegex.exec(callerLine);
        return functionName?.[1] || 'unknown';
    }

    private extractFileName() {
        const stack = this.stack?.split('\n');
        const callerLine = stack?.[1] || '';
        const fileNameRegex = /\((.*):\d+:\d+\)/;
        const fileName = fileNameRegex.exec(callerLine);
        return fileName?.[1] || 'unknown';
    }

    public getFunctionName(): string {
        return this.functionName
    }

    public getFileName(): string {
        return this.fileName
    }
}