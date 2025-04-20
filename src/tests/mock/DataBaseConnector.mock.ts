import { IDataBaseConnector } from "@infra/persistence/IDataBaseConnector";

export class MockDataBaseConnector implements IDataBaseConnector {
    public async connect(): Promise<boolean> {
        return true;
    }
    public isConnected(): boolean {
        return true;
    }
    public async disconnect(): Promise<boolean> {
        return true;
    }
    public async initialize(): Promise<void> {
        return;
    }
}